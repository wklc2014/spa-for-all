/**
 * 多行文本输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class BaseTextArea extends Component {

    render() {
        const {
            id,
            onChange,
            value,
            form,
            formItem,
            params,
            api,
            options,
        } = this.props;

        const {
            addType,
            childGutter,
            childSpan,
            data,
        } = params;

        const { getFieldDecorator } = form;

        const defaultProps = {
            ...api,
            onChange: (e) => {
                onChange({ id, value: e.target.value });
            },
            rows: api.rows || 4,
        };

        const childSpanLeft = lodash.get(childSpan, 'left', {});
        const childSpanRight = lodash.get(childSpan, 'right', {});
        const inputEle = <TextArea {...defaultProps} />;
        let ChildEle = getFieldDecorator(id, {
            ...options,
            initialValue: value,
        })(inputEle);
        switch (addType) {
            case 'button':
                const btnEle = data.map((v, i) => {
                    const style = { marginBottom: 8 };
                    if (i < data.length - 1) {
                        style.marginRight = 8;
                    }

                    return (
                        <Button
                            disabled={api.disabled}
                            key={i}
                            type={v.type}
                            style={style}
                            onClick={(e) => {
                                onChange({ id, value: v.value, type: 'button' });
                            }}
                        >
                            {v.label}
                        </Button>
                    )
                });
                ChildEle = (
                    <Row type="flex" gutter={childGutter}>
                        <Col {...childSpanLeft}>{ChildEle}</Col>
                        <Col {...childSpanRight}>{btnEle}</Col>
                    </Row>
                );
                break;
        }

        return <FormItem {...formItem}>{ChildEle}</FormItem>;
    }
}

BaseTextArea.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseTextArea);

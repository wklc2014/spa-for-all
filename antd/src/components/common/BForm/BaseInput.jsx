/**
 * 单行文本框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Radio, Button } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class BaseInput extends Component {

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
        const size = api.size || 'large';

        const defaultProps = {
            ...api,
            size,
            onChange: (e) => {
                onChange({ id, value: e.target.value });
            },
        };

        const childSpanLeft = lodash.get(childSpan, 'left', {});
        const childSpanRight = lodash.get(childSpan, 'right', {});
        const inputEle = <Input {...defaultProps} />;
        let ChildEle = getFieldDecorator(id, {
            ...options,
            initialValue: value,
        })(inputEle);
        switch (addType) {
            case 'button':
                const btnEle = data.map((v, i) => {
                    const btnStyle = { marginBottom: 8 };
                    if (i < data.length - 1) {
                        btnStyle.marginRight = '8px';
                    }

                    const btnProps = { key: i, type: v.type, size, style: btnStyle, disabled: api.disabled };

                    if (v.value === 'city') {
                        return (
                            <Cascader
                                key={i}
                                options={v.citys}
                                onChange={(value) => {
                                    onChange({ id, value: v.value, type: 'button', addValue: value, });
                                }}
                            >
                                <Button {...btnProps}>{v.label}</Button>
                            </Cascader>
                        );
                    }

                    return (
                        <Button
                            {...btnProps}
                            onClick={() => {
                                onChange({ id, value: v.value, type: 'button', });
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
            case 'radio':
                const inputValue = lodash.get(value, 'inputValue', undefined);
                const addValue = lodash.get(value, 'addValue', undefined);
                const radioEle = (
                    <RadioGroup
                        disabled={api.disabled}
                        value={addValue}
                        onChange={(e) => {
                            onChange({ id, value: e.target.value, type: 'radio' });
                        }}
                    >
                        {data.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
                    </RadioGroup>
                );
                ChildEle = (
                    <Row type="flex" gutter={childGutter}>
                        <Col {...childSpanLeft}>{ChildEle}</Col>
                        <Col {...childSpanRight}>{radioEle}</Col>
                    </Row>
                );
                break;
        }

        return <FormItem {...formItem}>{ChildEle}</FormItem>;
    }
}

BaseInput.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    rules: propTypes.array,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseInput);

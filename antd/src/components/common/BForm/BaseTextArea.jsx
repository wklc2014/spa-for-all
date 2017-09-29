/**
 * 多行文本输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const BaseTextArea = (props) => {

    const {
        id,
        rules,
        value,
        addType,
        childGutter,
        childSpan,
        options,

        className,
        extra,
        label,
        layout,

        disabled,
        onChange,
        placeholder,
        rows,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        onChange: (e) => {
            onChange({ id, value: e.target.value });
        },
        placeholder,
        rows,
        style,
    };

    const childSpanLeft = lodash.get(childSpan, 'left', {});
    const childSpanRight = lodash.get(childSpan, 'right', {});
    const inputEle = <TextArea {...defaultProps} />;
    let ChildEle = getFieldDecorator(id, {
        rules,
        initialValue: value,
    })(inputEle);
    switch (addType) {
        case 'button':
            const btnEle = options.map((v, i) => {
                const style = { marginBottom: 8 };
                if (i < options.length - 1) {
                    style.marginRight = 8;
                }

                return (
                    <Button
                        disabled={disabled}
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

    return (
        <FormItem
            {...layout}
            label={label}
            className={className}
            extra={extra}
        >
            {ChildEle}
        </FormItem>
    );
}

BaseTextArea.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    addType: propTypes.string,
    childGutter: propTypes.number,
    childSpan: propTypes.object,
    options: propTypes.array,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    rows: propTypes.number,
    style: propTypes.object,
};

export default Form.create()(BaseTextArea);

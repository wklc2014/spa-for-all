/**
 * 数字输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, InputNumber } from 'antd';

const FormItem = Form.Item;

const BaseNumber = (props) => {

    const {
        id,
        rules,
        value,

        className,
        extra,
        label,
        layout,

        disabled,
        min,
        max,
        onChange,
        placeholder,
        step,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        min,
        max,
        onChange: (value) => {
            props.onChange({ id, value });
        },
        placeholder,
        step,
        style,
    };

    const ChildEle = <InputNumber {...defaultProps} />;

    return (
        <FormItem
            {...layout}
            label={label}
            className={className}
            extra={extra}
        >
            {getFieldDecorator(id, {
                rules,
                initialValue: value,
            })(ChildEle)}
        </FormItem>
    );
}

BaseNumber.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.oneOfType([
        propTypes.element,
        propTypes.string,
        propTypes.node,
    ]),
    layout: propTypes.object,

    disabled: propTypes.bool,
    min: propTypes.number,
    max: propTypes.number,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    step: propTypes.number,
    style: propTypes.object,
};

export default Form.create()(BaseNumber);

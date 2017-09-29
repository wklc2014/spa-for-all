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
        className,
        label,
        layout,
        style,
        value,

        disabled,
        extra,
        id,
        min,
        max,
        onChange,
        placeholder,
        rules,
        step,
    } = props;

    const { getFieldProps } = props.form;

    const defaultProps = {
        ...getFieldProps(id, {
            rules,
            onChange: (value) => {
                onChange({ id, value });
            },
        }),
        disabled,
        placeholder,
        style,
        min,
        max,
        step,
        value,
    };

    const ChildEle = <InputNumber {...defaultProps} />;

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

BaseNumber.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    disabled: propTypes.bool,
    extra: propTypes.string,
    id: propTypes.string.isRequired,
    min: propTypes.number,
    max: propTypes.number,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    rules: propTypes.array,
    step: propTypes.number,
};

export default Form.create()(BaseNumber);

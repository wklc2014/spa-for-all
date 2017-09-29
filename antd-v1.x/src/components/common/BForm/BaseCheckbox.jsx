/**
 * 复选框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Checkbox } from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

const BaseCheckbox = (props) => {

    const {
        className,
        label,
        layout,
        style,
        value,

        disabled,
        id,
        onChange,
        options,
        rules,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        ...getFieldProps(id, {
            rules,
            onChange: (value) => {
                onChange({ id, value });
            },
        }),
        disabled,
        value,
        options,
        style,
    };

    const ChildEle = <CheckboxGroup {...defaultProps} />;

    return (
        <FormItem
            {...layout}
            label={label}
            className={className}
        >
            {ChildEle}
        </FormItem>
    );
}

BaseCheckbox.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    disabled: propTypes.bool,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
    rules: propTypes.array,
};

export default Form.create()(BaseCheckbox);

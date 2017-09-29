/**
 * 下拉选择框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const BaseSelect = (props) => {

    const {
        id,
        rules,
        value,
        options,

        className,
        extra,
        label,
        layout,

        allowClear,
        disabled,
        dropdownMatchSelectWidth,
        mode,
        onChange,
        placeholder,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        allowClear,
        disabled,
        dropdownMatchSelectWidth,
        mode,
        onChange: (value) => {
            onChange({ id, value });
        },
        placeholder,
        style,
    };

    const ChildEle = (
        <Select {...defaultProps}>
            {options.map((v, i) => <Option key={i} value={v.value}>{v.label}</Option>)}
        </Select>
    );

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

BaseSelect.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    options: propTypes.array,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    allowClear: propTypes.bool,
    disabled: propTypes.bool,
    dropdownMatchSelectWidth: propTypes.bool,
    mode: propTypes.string,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    style: propTypes.object,
};

export default Form.create()(BaseSelect);

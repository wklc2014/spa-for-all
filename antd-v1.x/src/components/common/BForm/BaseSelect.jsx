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
        className,
        label,
        layout,
        style,
        value,

        allowClear,
        disabled,
        dropdownMatchSelectWidth,
        extra,
        id,
        mode,
        onChange,
        options,
        placeholder,
        rules,
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
        dropdownMatchSelectWidth,
        allowClear,
        mode,
        value,
    };

    const ChildEle = (
        <Select {...defaultProps}>
            {options.map((v, i) => {
                return <Option key={i} value={v.value}>{v.label}</Option>;
            })}
        </Select>
    );

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

BaseSelect.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    allowClear: propTypes.bool,
    disabled: propTypes.bool,
    dropdownMatchSelectWidth: propTypes.bool,
    extra: propTypes.string,
    id: propTypes.string.isRequired,
    mode: propTypes.string,
    onChange: propTypes.func.isRequired,
    options: propTypes.array,
    placeholder: propTypes.string,
    rules: propTypes.array,
};

export default Form.create()(BaseSelect);

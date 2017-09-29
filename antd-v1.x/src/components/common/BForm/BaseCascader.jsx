/**
 * 级联选择
 * 增加【北京】【上海】【全国】城市选择
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Cascader } from 'antd';

const FormItem = Form.Item;

const BaseCascader = (props) => {
    const {
        className,
        label,
        layout,
        style,
        value,

        allowClear,
        disabled,
        extra,
        id,
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
        options,
        style,
        value,
        allowClear,
    };

    const ChildEle = <Cascader {...defaultProps} />;

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

BaseCascader.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    allowClear: propTypes.bool,
    disabled: propTypes.bool,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
    placeholder: propTypes.string,
    rules: propTypes.array,
};

export default Form.create()(BaseCascader);

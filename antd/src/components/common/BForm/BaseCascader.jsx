/**
 * 级联选择
 * 可自定义级联选择项
 * 内置了【北京】【上海】【全国】的城市选择
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Cascader } from 'antd';

const FormItem = Form.Item;

const BaseCascader = (props) => {
    const {
        id,
        rules,
        value,

        className,
        extra,
        label,
        layout,

        allowClear,
        disabled,
        onChange,
        options,
        placeholder,
        showSearch,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        allowClear,
        disabled,
        onChange: (value) => {
            onChange({ id, value });
        },
        options,
        placeholder,
        showSearch,
        style,
    };

    const ChildEle = <Cascader {...defaultProps} />;

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

BaseCascader.propTypes = {
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

    allowClear: propTypes.bool,
    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
    placeholder: propTypes.string,
    showSearch: propTypes.string,
    style: propTypes.object,
};

export default Form.create()(BaseCascader);

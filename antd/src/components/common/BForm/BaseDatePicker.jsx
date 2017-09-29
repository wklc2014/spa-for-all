/**
 * 日期选择
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import lodash from 'lodash';
import { Form, DatePicker } from 'antd';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const BaseDatePicker = (props) => {

    const {
        id,
        rules,
        value,
        addType,

        className,
        extra,
        label,
        layout,

        disabled,
        disabledTime,
        format,
        onChange,
        placeholder,
        showTime,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        disabledTime,
        format,
        onChange(value) {
            onChange({ id, value });
        },
        placeholder,
        showTime,
        style,
    };

    let ChildEle = null;
    switch (addType) {
        case 'range':
            ChildEle = <RangePicker {...defaultProps} />;
            break;
        default:
            ChildEle = <DatePicker {...defaultProps} />;
    }

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

BaseDatePicker.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    addType: propTypes.string,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.oneOfType([
        propTypes.element,
        propTypes.string,
        propTypes.node,
    ]),
    layout: propTypes.object,

    disabled: propTypes.bool,
    disabledTime: propTypes.func,
    format: propTypes.string,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.oneOfType([
        propTypes.string,
        propTypes.array,
    ]),
    showTime: propTypes.oneOfType([
        propTypes.bool,
        propTypes.object,
    ]),
    style: propTypes.object,
};

export default Form.create()(BaseDatePicker);

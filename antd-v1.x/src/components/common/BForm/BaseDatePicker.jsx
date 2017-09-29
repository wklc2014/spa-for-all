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
        className,
        label,
        layout,
        style,
        value,

        addType,
        disabled,
        format,
        id,
        onChange,
        placeholder,
        rules,
        showTime,
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
        format,
        showTime,
        value,
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
        >
            {ChildEle}
        </FormItem>
    );
}

BaseDatePicker.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    addType: propTypes.string,
    disabled: propTypes.bool,
    disabledTime: propTypes.func,
    format: propTypes.string,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.oneOfType([
        propTypes.string,
        propTypes.array,
    ]),
    rules: propTypes.array,
    showTime: propTypes.oneOfType([
        propTypes.bool,
        propTypes.object,
    ]),
};

export default Form.create()(BaseDatePicker);

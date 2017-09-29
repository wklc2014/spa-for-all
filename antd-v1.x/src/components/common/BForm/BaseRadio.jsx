/**
 * 单选框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const BaseRadio =  (props) => {

    const {
        className,
        label,
        layout,
        style,
        value,

        addType,
        disabled,
        id,
        onChange,
        options,
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
        style,
        value,
    };

    let ChildEle = null;
    switch (addType) {
        case 'button':
            ChildEle = (
                <RadioGroup {...defaultProps}>
                    {options.map((v, i) => (
                        <RadioButton key={i} value={v.value}>{v.label}</RadioButton>
                    ))}
                </RadioGroup>
            );
            break;
        default:
            ChildEle = (
                <RadioGroup {...defaultProps}>
                    {options.map((v, i) => (
                        <Radio key={i} value={v.value}>{v.label}</Radio>
                    ))}
                </RadioGroup>
            );
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

BaseRadio.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    addType: propTypes.string,
    disabled: propTypes.bool,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    options: propTypes.array,
    rules: propTypes.array,
};

export default Form.create()(BaseRadio);

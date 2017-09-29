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
        id,
        rules,
        value,
        addType,
        options,

        className,
        label,
        layout,

        disabled,
        onChange,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        onChange: (value) => {
            onChange({ id, value });
        },
        style,
    };

    let ChildEle = null;
    switch (addType) {
        case 'button':
            ChildEle = (
                <RadioGroup {...defaultProps}>
                    {options.map((v, i) => <RadioButton key={i} value={v.value}>{v.label}</RadioButton>)}
                </RadioGroup>
            );
            break;
        default:
            ChildEle = (
                <RadioGroup {...defaultProps}>
                    {options.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
                </RadioGroup>
            );
    }

    return (
        <FormItem
            {...layout}
            label={label}
            className={className}
        >
            {getFieldDecorator(id, {
                rules,
                initialValue: value,
            })(ChildEle)}
        </FormItem>
    );
}

BaseRadio.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    addType: propTypes.string,
    options: propTypes.array,

    className: propTypes.string,
    label: propTypes.oneOfType([
        propTypes.element,
        propTypes.string,
        propTypes.node,
    ]),
    layout: propTypes.object,

    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    style: propTypes.object,
};

export default Form.create()(BaseRadio);

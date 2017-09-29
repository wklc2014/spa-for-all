import React, { Component } from 'react';
import lodash from 'lodash';
import propTypes from 'prop-types';
import { Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const BaseInputAdd = (props) => {

    const {
        id,
        rules,
        value,
        addType,
        childGutter,
        childSpan,

        className,
        extra,
        label,
        layout,

        disabled,
        onChange,
        placeholder,
        style,

        /* before-select */
        dropdownMatchSelectWidth,
        options,
        selectWidth,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        placeholder,
        style,
    };

    const inputValue = lodash.get(value, 'inputValue', undefined);
    let addValue = lodash.get(value, 'addValue', undefined);
    switch (addType) {
        case 'before-select':
            const selectOptionEle = options.map((v, i) => {
                if (v.selected && addValue === undefined) {
                    addValue = v.value;
                }
                return <Option key={i} value={v.value}>{v.label}</Option>;
            });
            const addonBeforeProps = {
                disabled,
                dropdownMatchSelectWidth,
                onChange: (e) => {
                    onChange({
                        id,
                        value: { inputValue, addValue: e },
                    });
                },
                style: { width: selectWidth },
                value: addValue,
            };
            const addonBeforeEle = <Select {...addonBeforeProps}>{selectOptionEle}</Select>;
            Object.assign(defaultProps, { addonBefore: addonBeforeEle });
            break;
    }
    const ChildEle = (
        <Input
            {...defaultProps}
            onChange={(e) => {
                onChange({
                    id,
                    value: { inputValue: e.target.value, addValue },
                });
            }}
        />
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
                initialValue: inputValue,
            })(ChildEle)}
        </FormItem>
    );
}

BaseInputAdd.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    addType: propTypes.string,
    childGutter: propTypes.number,
    childSpan: propTypes.object,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    style: propTypes.object,

    dropdownMatchSelectWidth: propTypes.bool,
    options: propTypes.array.isRequired,
    selectWidth: propTypes.number,
};

export default Form.create()(BaseInputAdd);

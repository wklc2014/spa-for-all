/**
 * 单行文本框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Radio, Button } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const BaseInput = (props) => {

    const {
        className,
        label,
        layout,
        style,
        value,

        addType,
        childGutter,
        childSpan,
        disabled,
        extra,
        id,
        onChange,
        options,
        placeholder,
        rules,
        toUpperCase,
        toLowerCase,
    } = props;

    const { getFieldProps } = props.form;

    const defaultProps = {
        ...getFieldProps(id, {
            // rules,
            onChange: (e) => {
                onChange({ id, value: e.target.value });
            },
        }),
        // disabled,
        // placeholder,
        // size: 'large',
        // style,
        value,
    };

    let ChildEle = null;

    const childSpanLeft = lodash.get(childSpan, 'left', {});
    const childSpanRight = lodash.get(childSpan, 'right', {});
    const inputEle = <Input {...defaultProps} />;



    return (
        <FormItem
            {...layout}
            label={label}
        >
            <Input
                {...getFieldProps(id, {
                // rules,
                onChange: (e) => {
                    onChange({ id, value: e.target.value });
                },
            })}
                value={value}
            />
        </FormItem>
    );
}

BaseInput.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,
    style: propTypes.object,

    addType: propTypes.string,
    childGutter: propTypes.number,
    childSpan: propTypes.object,
    disabled: propTypes.bool,
    extra: propTypes.string,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    options: propTypes.array,
    placeholder: propTypes.string,
    rules: propTypes.array,
    toUpperCase: propTypes.bool,
    toLowerCase: propTypes.bool,
};

export default Form.create()(BaseInput);

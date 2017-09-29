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
        id,
        rules,
        value,
        addType,
        childGutter,
        childSpan,
        options,

        className,
        extra,
        label,
        layout,

        disabled,
        onChange,
        placeholder,
        size,
        style,
    } = props;

    const { getFieldDecorator } = props.form;

    const defaultProps = {
        disabled,
        onChange: (e) => {
            onChange({ id, value: e.target.value });
        },
        placeholder,
        size,
        style,
    };

    const childSpanLeft = lodash.get(childSpan, 'left', {});
    const childSpanRight = lodash.get(childSpan, 'right', {});
    const inputEle = <Input {...defaultProps} />;
    let ChildEle = getFieldDecorator(id, {
        rules,
        initialValue: value,
    })(inputEle);
    switch (addType) {
        case 'button':
            const btnEle = options.map((v, i) => {
                const btnStyle = { marginBottom: 8 };
                if (i < options.length - 1) {
                    btnStyle.marginRight = '8px';
                }

                const btnProps = { key: i, type: v.type, size, style: btnStyle, disabled };

                if (v.value === 'city') {
                    return (
                        <Cascader
                            key={i}
                            options={v.citys}
                            onChange={(value) => {
                                onChange({ id, value: v.value, type: 'button', addValue: value, });
                            }}
                        >
                            <Button {...btnProps}>{v.label}</Button>
                        </Cascader>
                    );
                }

                return (
                    <Button
                        {...btnProps}
                        onClick={() => {
                            onChange({ id, value: v.value, type: 'button', });
                        }}
                    >
                        {v.label}
                    </Button>
                )
            });
            ChildEle = (
                <Row type="flex" gutter={childGutter}>
                    <Col {...childSpanLeft}>{ChildEle}</Col>
                    <Col {...childSpanRight}>{btnEle}</Col>
                </Row>
            );
            break;
        case 'radio':
            const inputValue = lodash.get(value, 'inputValue', undefined);
            const addValue = lodash.get(value, 'addValue', undefined);
            const radioEle = (
                <RadioGroup
                    disabled={disabled}
                    value={addValue}
                    onChange={(e) => {
                        onChange({ id, value: e.target.value, type: 'radio' });
                    }}
                >
                    {options.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
                </RadioGroup>
            );
            ChildEle = (
                <Row type="flex" gutter={childGutter}>
                    <Col {...childSpanLeft}>{ChildEle}</Col>
                    <Col {...childSpanRight}>{radioEle}</Col>
                </Row>
            );
            break;
    }

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

BaseInput.propTypes = {
    id: propTypes.string.isRequired,
    rules: propTypes.array,
    addType: propTypes.string,
    childGutter: propTypes.number,
    childSpan: propTypes.object,
    options: propTypes.array,

    className: propTypes.string,
    extra: propTypes.string,
    label: propTypes.oneOfType([
        propTypes.element,
        propTypes.string,
        propTypes.node,
    ]),
    layout: propTypes.object,

    disabled: propTypes.bool,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    size: propTypes.string,
    style: propTypes.object,
};

export default Form.create()(BaseInput);

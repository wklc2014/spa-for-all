/**
 * 多行文本输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const BaseTextArea = (props) => {

    const {
        className,
        label,
        style,
        layout,
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
        rows,
        rules,
        toUpperCase,
        toLowerCase,
    } = props;

    const { getFieldDecorator } = props.form;

    const commonProps = {
        ...getFieldProps(id, {
            rules,
            onChange: (value) => {
                onChange({ id, value: e.target.value });
            },
        }),
        disabled,
        value,
    }

    const defaultProps = {
        ...commonProps,
        placeholder,
        style,
        rows,
    };

    const childSpanLeft = lodash.get(childSpan, 'left', {});
    const childSpanRight = lodash.get(childSpan, 'right', {});
    const inputEle = <TextArea {...defaultProps} />;
    let ChildEle = null
    switch (addType) {
        case 'button':
            const btnEle = options.map((v, i) => {
                const style = { marginBottom: 8 };
                if (i < options.length - 1) {
                    style.marginRight = 8;
                }

                return (
                    <Button
                        {...commonProps}
                        key={i}
                        type={v.type}
                        style={style}
                        onClick={(e) => {
                            onChange({
                                id,
                                value: v.value,
                                type: 'button',
                            });
                        }}
                    >
                        {v.label}
                    </Button>
                )
            });
            ChildEle = (
                <Row type="flex" gutter={childGutter}>
                    <Col {...childSpanLeft}>
                        {inputEle}
                    </Col>
                    <Col {...childSpanRight}>
                        {btnEle}
                    </Col>
                </Row>
            );
            break;
        default:
            ChildEle = inputEle;
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

BaseTextArea.propTypes = {
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
    rows: propTypes.number,
    rules: propTypes.array,
    toUpperCase: propTypes.bool,
    toLowerCase: propTypes.bool,
};

export default Form.create()(BaseTextArea);

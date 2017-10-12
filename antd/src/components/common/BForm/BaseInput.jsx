/**
 * input
 * input-button
 * input-radio
 * textarea
 * textarea-button
 * input-before-select
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Input, Row, Col, Radio, Button, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

class BaseInput extends Component {

    render() {
        const {
            id,
            onChange,
            value,
            form,
            formItem,
            params,
            api,
            options,
        } = this.props;

        const {
            type,
            childGutter,
            childSpan,
            data,
        } = params;

        const { getFieldDecorator } = form;
        const size = api.size || 'large';

        const defaultProps = {
            ...api,
            onChange: (e) => {
                onChange({ id, value: e.target.value });
            },
            size,
        };

        const childSpanLeft = lodash.get(childSpan, 'left', {});
        const childSpanRight = lodash.get(childSpan, 'right', {});
        let   inputValue = value;
        let   addValue = lodash.get(value, 'addValue', undefined);
        if (type === 'input-radio') {
            inputValue = lodash.get(value, 'inputValue', undefined);
        }

        if (type === 'input-before-select') {
            const selectOptionEle = data.map((v, i) => {
                if (v.selected && addValue === undefined) {
                    addValue = v.value;
                }
                return <Option key={i} value={v.value}>{v.label}</Option>;
            });
            const addonBeforeProps = {
                disabled: api.disabled,
                dropdownMatchSelectWidth: api.dropdownMatchSelectWidth,
                onChange: (e) => {
                    onChange({
                        id,
                        value: { inputValue, addValue: e },
                    });
                },
                style: { width: params.selectWidth },
                value: addValue,
            };
            const addonBeforeEle = <Select {...addonBeforeProps}>{selectOptionEle}</Select>;
            Object.assign(defaultProps, {
                addonBefore: addonBeforeEle,
                onChange: (e) => {
                    onChange({ id, value: { inputValue: e.target.value, addValue } });
                },

            });
        }

        let inputEle = <Input {...defaultProps} />;
        if (type === 'textarea-button' || type === 'textarea') {
            inputEle = <TextArea {...defaultProps} rows={api.rows || 4} />;
        }


        let ChildEle = getFieldDecorator(id, {
            ...options,
            initialValue: inputValue,
        })(inputEle);

        switch (type) {
            case 'textarea-button':
            case 'input-button':
                const btnEle = data.map((v, i) => {
                    const btnStyle = { marginBottom: 8 };
                    if (i < data.length - 1) {
                        btnStyle.marginRight = '8px';
                    }

                    const btnProps = { key: i, type: v.type, size, style: btnStyle, disabled: api.disabled };

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
            case 'input-radio':
                const radioEle = (
                    <RadioGroup
                        disabled={api.disabled}
                        value={addValue}
                        onChange={(e) => {
                            onChange({ id, value: e.target.value, type: 'radio' });
                        }}
                    >
                        {data.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
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

        return <FormItem {...formItem}>{ChildEle}</FormItem>;
    }
}

BaseInput.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    rules: propTypes.array,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseInput);

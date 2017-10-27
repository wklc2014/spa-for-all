import React from 'react';
import {
    Input,
    Rate,
    Slider,
    Switch,
    InputNumber,
    Checkbox,
    Select,
    Cascader,
    DatePicker,
    TimePicker,
    Radio,
    Button,
} from 'antd';

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const { RangePicker, MonthPicker } = DatePicker;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default {
    input: ({ id, props, params, value, onChange }) => {
        const newProps = {
            size: 'large',
            ...props,
            onChange: (e) => {
                onChange({ id, value: e.target.value })
            },
        }
        return <Input {...newProps} />;
    },
    textarea: ({ id, props, params, value, onChange }) => {
        const newProps = {
            rows: 4,
            ...props,
            onChange: (e) => {
                onChange({ id, value: e.target.value })
            },
        }
        return <TextArea {...newProps} />;
    },
    rate: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (value) => onChange({ id, value }),
        }
        return <Rate {...newProps} />;
    },
    slider: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (value) => onChange({ id, value }),
        }
        return <Slider {...newProps} />;
    },
    switch: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (value) => onChange({ id, value }),
        }
        return <Switch {...newProps} />;
    },
    number: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (value) => onChange({ id, value }),
        }
        return <InputNumber {...newProps} />;
    },
    checkbox: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (value) => onChange({ id, value }),
        }
        return <CheckboxGroup {...newProps} />;
    },
    cascader: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            options: params.data,
            onChange: (value) => onChange({ id, value }),
        }
        return <Cascader {...newProps} />;
    },
    select: ({ id, props, params, value, onChange }) => {
        const newProps = {
            size: 'large',
            ...props,
            onChange: (e) => {
                onChange({
                    id,
                    value,
                    addType: 'select',
                    addValue: e,
                })
            },
        };
        const ChildEle = params.data.map((v, i) => (
            <Option key={i} value={v.value}>{v.label}</Option>
        ))
        return <Select {...newProps}>{ChildEle}</Select>;
    },
    date: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (_, value) => onChange({ id, value }),
        };
        return <DatePicker {...newProps} />;
    },
    dateRange: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (_, value) => onChange({ id, value }),
        };
        return <RangePicker {...newProps} />;
    },
    dateMonth: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (_, value) => onChange({ id, value }),
        };
        return <MonthPicker {...newProps} />;
    },
    time: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (_, value) => onChange({ id, value }),
        };
        return <TimePicker {...newProps} />;
    },
    radioButton: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange({ id, value: e.target.value }),
        };
        const ChildEle = params.data.map((v, i) => (
            <RadioButton key={i} value={v.value}>{v.label}</RadioButton>
        ))
        return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
    },
    radio: ({ id, props, params, value, onChange }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange({ id, value: e.target.value }),
        };
        const ChildEle = params.data.map((v, i) => (
            <Radio key={i} value={v.value}>{v.label}</Radio>
        ))
        return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
    },
    text: ({ id, props, params, value, onChange }) => {
        const newProps = {
            className: 'ant-form-text',
            ...props,
        };
        let newValue = value;
        try {
            newValue = params.render(value);
        } catch (e) {}
        return <span {...newProps}>{newValue}</span>;
    },
    button: ({ id, props, params, value, onChange }) => {
        const newProps = {
            size: 'large',
            ...props,
            onClick: () => {
                onChange({
                    id,
                    value,
                    addType: 'button',
                    addValue: params.value,
                })
            }
        };
        return <Button {...newProps}>{params.label}</Button>;
    },
}

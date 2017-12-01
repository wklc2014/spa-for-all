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
    input: ({ props, params, value, onChange, addType }) => {
        // console.log('input render')
        const newProps = {
            size: 'large',
            ...props,
            onChange: (e) => onChange(e.target.value, addType),
        }
        return <Input {...newProps} />;
    },
    textarea: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            rows: 4,
            ...props,
            onChange: (e) => onChange(e.target.value, addType),
        }
        return <TextArea {...newProps} />;
    },
    rate: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e, addType),
        }
        return <Rate {...newProps} />;
    },
    slider: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e, addType),
        }
        return <Slider {...newProps} />;
    },
    switch: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e, addType),
        }
        return <Switch {...newProps} />;
    },
    number: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e, addType),
        }
        return <InputNumber {...newProps} />;
    },
    checkbox: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e, addType),
        }
        return <CheckboxGroup {...newProps} />;
    },
    cascader: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            size: 'large',
            ...props,
            options: params.data,
            onChange: (e) => onChange(e, addType),
        }
        if (params.render) {
            const newStyle = {
                ...newProps.style,
                display: 'inline',
            }
            return (
                <Cascader {...newProps}>
                    <div style={newStyle}>
                        { params.render(value) }
                    </div>
                </Cascader>
            );
        }
        return <Cascader {...newProps} />;
    },
    select: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            size: 'large',
            ...props,
            onChange: (e) => onChange(e, addType),
        };
        const ChildEle = params.data.map((v, i) => (
            <Option key={i} value={v.value}>{v.label}</Option>
        ))
        return <Select {...newProps}>{ChildEle}</Select>;
    },
    date: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (_, e) => onChange(e, addType),
        };
        return <DatePicker {...newProps} />;
    },
    dateRange: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (_, e) => onChange(e, addType),
        };
        return <RangePicker {...newProps} />;
    },
    dateMonth: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (_, e) => onChange(e, addType),
        };
        return <MonthPicker {...newProps} />;
    },
    time: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (_, e) => onChange(e, addType),
        };
        return <TimePicker {...newProps} />;
    },
    radioButton: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => {
                onChange(e.target.value, addType)
            },
        };
        const ChildEle = params.data.map((v, i) => (
            <RadioButton key={i} value={v.value}>{v.label}</RadioButton>
        ));
        return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
    },
    radio: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            ...props,
            onChange: (e) => onChange(e.target.value, addType),
        };
        const ChildEle = params.data.map((v, i) => (
            <Radio key={i} value={v.value}>{v.label}</Radio>
        ))
        return <RadioGroup {...newProps}>{ChildEle}</RadioGroup>;
    },
    text: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            className: 'ant-form-text',
            ...props,
        };
        let newValue = value;
        try {
            newValue = params.render(value);
        } catch (e) {
            newValue = value.toString();
        }
        return <span {...newProps}>{newValue}</span>;
    },
    button: ({ props, params, value, onChange, addType }) => {
        const newProps = {
            size: 'large',
            ...props,
            onClick: (e) => onChange(params.value, addType),
        };
        return <Button {...newProps}>{params.label}</Button>;
    },
}

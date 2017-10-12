/**
 * 几种类似的表单组件
 * rate
 * slider
 * switch
 * enum
 * number
 * checkbox
 * cascader
 * date
 * date-month
 * date-range
 * time-picker
 * radio
 * radio-button
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import {
    Form,
    Rate,
    Slider,
    Switch,
    Select,
    InputNumber,
    Checkbox,
    Cascader,
    DatePicker,
    TimePicker,
    Radio,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const { RangePicker, MonthPicker } = DatePicker;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class BaseForm extends Component {

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
        let ChildEle = null;
        switch (type) {
            case 'rate':
                ChildEle = (
                    <div>
                        <Rate
                            {...api}
                            onChange={(value) => onChange({ id, value })}
                        />
                        <span>{value && params.copywriting(value)}</span>
                    </div>
                );
                break;
            case 'slider':
                ChildEle = (
                    <Slider
                        {...api}
                        onChange={(value) => onChange({ id, value })}
                    />
                );
                break;
            case 'switch':
                ChildEle = (
                    <Switch
                        {...api}
                        onChange={(value) => onChange({ id, value })}
                    />
                );
                break;
            case 'number':
                ChildEle = (
                    <InputNumber
                        {...api}
                        onChange={(value) => onChange({ id, value })}
                    />
                );
                break;
            case 'checkbox':
                ChildEle = (
                    <CheckboxGroup
                        {...api}
                        options={data}
                        onChange={(value) => onChange({ id, value })}
                    />
                );
                break;
            case 'cascader':
                ChildEle = (
                    <Cascader
                        {...api}
                        options={data}
                        onChange={(value) => onChange({ id, value })}
                    />
                );
                break;
            case 'enum':
                ChildEle = (
                    <Select
                        {...api}
                        onChange={(value) => onChange({ id, value })}
                    >
                        {data.map((v, i) => <Option key={i} value={v.value}>{v.label}</Option>)}
                    </Select>
                );
                break;
            case 'date':
                ChildEle = (
                    <DatePicker
                        {...api}
                        onChange={(_, value) => onChange({ id, value })}
                    />
                );
                break;
            case 'date-range':
                ChildEle = (
                    <RangePicker
                        {...api}
                        onChange={(_, value) => onChange({ id, value })}
                    />
                );
                break;
            case 'date-month':
                ChildEle = (
                    <MonthPicker
                        {...api}
                        onChange={(_, value) => onChange({ id, value })}
                    />
                );
                break;
            case 'date-time':
                ChildEle = (
                    <TimePicker
                        {...api}
                        onChange={(_, value) => onChange({ id, value })}
                    />
                );
                break;
            case 'radio':
                ChildEle = (
                    <RadioGroup
                        {...api}
                        onChange={(e) => onChange({ id, value: e.target.value })}
                    >
                        {data.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
                    </RadioGroup>
                );
                break;
            case 'radio-button':
                ChildEle = (
                    <RadioGroup
                        {...api}
                        onChange={(e) => onChange({ id, value: e.target.value })}
                    >
                        {data.map((v, i) => <RadioButton key={i} value={v.value}>{v.label}</RadioButton>)}
                    </RadioGroup>
                );
                break;
        }

        return (
            <FormItem {...formItem}>
                {getFieldDecorator(id, {
                    ...options,
                    initialValue: value,
                })(ChildEle)}
            </FormItem>
        );
    }
}

BaseForm.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseForm);

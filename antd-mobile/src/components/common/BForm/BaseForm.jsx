import lodash from 'lodash';
import {
    List,
    ImagePicker,
    DatePicker,
    InputItem,
    Picker,
    Checkbox,
    Radio,
} from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';

import FormErrors from './FormErrors.jsx';

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;

function BaseForm(props) {
    const {
        id,
        onChange,
        value,
        form,

        params,
        options,
        api,
        listItem,

        error,
        onErrorClick,
    } = props;

    const {
        type,
        data,
        label,
    } = params;

    const { getFieldProps } = form;

    const defaultProps = {
        ...api,
        ...getFieldProps(id, {
            ...options,
            onChange: (value) => {
                onChange({ id, value });
            },
        }),
        error,
        onErrorClick
    };

    switch (type) {
        case 'date':
            const dateArrow = params.arrow || 'horizontal';
            return (
                <DatePicker
                    {...defaultProps}
                    value={value}
                >
                    <List.Item
                        {...listItem}
                        arrow={`${listItem.arrow || 'horizontal'}`}
                    >
                        {label}
                    </List.Item>
                </DatePicker>
            );
        case 'input':
            return (
                <InputItem
                    {...defaultProps}
                    value={value}
                >
                    {label}
                </InputItem>
            );
        case 'image':
            return (
                <ImagePicker
                    {...defaultProps}
                    files={value}
                    selectable={value.length < params.selectable}
                    onChange={(files, type, index) => {
                        if (type === 'add') {
                            onChange({ id, value: [...files] });
                        } else if (type === 'remove') {
                            const newValue = value.filter((m, i) => i !== index);
                            onChange({ id, value: newValue });
                        }
                    }}
                />
            );
        case 'picker':
            return (
                <Picker
                    {...defaultProps}
                    data={data}
                    value={value}
                >
                    <List.Item
                        {...listItem}
                        arrow={`${listItem.arrow || 'horizontal'}`}
                    >
                        {label}
                    </List.Item>
                </Picker>
            );
        case 'checkbox':
            return (
                <div>
                    {data.map((v) => {
                        const checked = lodash.indexOf(value, v.value) !== -1;
                        const props = {
                            ...api,
                            key: v.value,
                            onChange: () => {
                                let newValue = [];
                                if (checked) {
                                    newValue = value.filter((m) => m !== v.value);
                                } else {
                                    newValue = [...value, v.value];
                                }
                                onChange({ id, value: newValue });
                            },
                            checked,
                        };
                        return <CheckboxItem {...props}>{v.label}</CheckboxItem>
                    })}
                </div>
            );
        case 'radio':
            return (
                <div>
                    {data.map((v) => {
                        const checked = v.value === value;
                        const props = {
                            ...api,
                            key: v.value,
                            onChange: (e) => {
                                onChange({ id, value: v.value });
                            },
                            checked,
                        };
                        return <RadioItem {...props}>{v.label}</RadioItem>
                    })}
                </div>
            );
        default:
            console.log('type is error...');
            return null;
    }

}

const Wraper = FormErrors(BaseForm);

export default createForm()(Wraper);

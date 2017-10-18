import lodash from 'lodash';
import {
    List,
    ImagePicker,
    DatePicker,
    InputItem,
    TextareaItem,
    Picker,
    Checkbox,
    Radio,
    Flex,
    Button,
    WingBlank,
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
        type,
        params,
        form,

        defaultApi,
        listItemApi,
        optionsApi,
        flexApi,
        flexItemApi,

        error,
        onErrorClick,
    } = props;

    const {
        data,
        label,
    } = params;

    const { getFieldProps } = form;

    const defaultProps = {
        ...defaultApi,
        ...getFieldProps(id, {
            ...optionsApi,
            onChange: (value) => {
                onChange({ id, value });
            },
        }),
        value,
        error,
        onErrorClick,
    };

    switch (type) {
        case 'date':
            return (
                <DatePicker
                    {...defaultApi}
                    onChange={(value) => onChange({ id, value })}
                    value={value}
                >
                    <List.Item arrow="horizontal" {...listItemApi}>
                        {label}
                    </List.Item>
                </DatePicker>
            );
            break;
        case 'inputItem':
            return (
                <InputItem {...defaultProps}>
                    {label}
                </InputItem>
            );
            break;
        case 'image':
            return (
                <ImagePicker
                    {...defaultApi}
                    files={value}
                    selectable={value.length < defaultApi.selectable}
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
            break;
        case 'picker':
            return (
                <Picker
                    {...defaultApi}
                    data={data}
                    onChange={(value) => onChange({ id, value })}
                    value={value}
                >
                    <List.Item arrow="horizontal" {...listItemApi}>
                        {label}
                    </List.Item>
                </Picker>
            );
            break;
        case 'text':
            let textTypeProps = {...listItemApi};
            if (value) {
                textTypeProps = Object.assign({}, listItemApi, {
                    extra: <div className="fzLarge color-333">{value}</div>
                })
            }
            return (
                <List.Item
                    {...textTypeProps}
                >
                    {label}
                    {params.brief && <List.Item.Brief>{params.brief}</List.Item.Brief>}
                </List.Item>
            );
            break;
        case 'checkboxItem':
            return (
                <div>
                    {data.map((v) => {
                        const checked = lodash.indexOf(value, v.value) !== -1;
                        const props = {
                            ...defaultApi,
                            key: v.value,
                            onChange: (e) => {
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
            break;
        case 'radioItem':
            return (
                <div>
                    {data.map((v) => {
                        const checked = v.value === value;
                        const props = {
                            ...defaultApi,
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
            break;
        case 'radio':
            return (
                <div>
                    {data.map((v) => {
                        return (
                            <List.Item key={v.value} {...listItemApi}>
                                <Radio
                                    className="my-radio"
                                    checked={v.value === value}
                                    onChange={e => onChange({ id, value: v.value })}
                                >
                                    <span>{v.label}</span>
                                </Radio>
                                <List.Item.Brief>{v.tips}</List.Item.Brief>
                            </List.Item>
                        )
                    })}
                </div>
            );
            break;
        case 'textareaItem':
            if (params.titleAlone) {
                return (
                    <div>
                        <List.Item {...listItemApi}>
                            {label}
                        </List.Item>
                        <TextareaItem {...defaultProps}>
                            {label}
                        </TextareaItem>
                    </div>
                )
            }
            return (
                 <TextareaItem {...defaultProps}>
                     {label}
                 </TextareaItem>
            );
            break;
        case 'button':
            return (
                <WingBlank>
                    <Button {...defaultApi}>
                        {label}
                    </Button>
                </WingBlank>
            );
            break;
        default:
            console.log('type is error>>>', type);
            return null;
    }

}

const Wraper = FormErrors(BaseForm);

export default createForm()(Wraper);

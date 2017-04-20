import React, {Component} from 'react';
import lodash from 'lodash';
import {Row, Icon, Col, DatePicker, InputNumber, Checkbox, Cascader, Tooltip} from 'antd';
import {Form, Input, Button, Select} from 'antd';
import {formItemLayout} from './const.js';
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const InputGroup = Input.Group;
import util from '../../../common/util.js';

const FormItemWraper = props => {
    const {
        wraperParams,
        getFieldProps,
        change,
        type,
        id,
        value,
        colspan,
        label,
        isSingle,
        cascaderValue,
        object
    } = props;
    let placeholder = `请输入${label}`;
    if (type === 'enum') {
        placeholder = `请选择${label}`;
    }
    const defaultParams = {
        size: 'default',
        placeholder,
        style: Object.assign(
            {},
            {width: '100%'},
            lodash.get(props, 'params.style', {})
        )
    };
    const params = Object.assign({}, defaultParams, props.params || {});
    const rules = [Object.assign({}, {
        message: `${label}必填`
    }, props.rules[0]), ...lodash.slice(props.rules, 1)];
    let contentEle = props.children;
    switch (type) {
        case 'text':
            contentEle = (
                <div>
                    {value}
                </div>
            );
            break;
        case 'string':
            contentEle = (
                <Input
                    {...params}
                    {...getFieldProps(id, {
                        rules,
                        onChange: (e) => {
                            change(id, e.target.value);
                        }
                    })}
                    value={value}
                />
            );
            break;
        case 'textarea':
            contentEle = (
                <Input
                    {...params}
                    {...getFieldProps(id, {
                        rules,
                        onChange: (e) => {
                            change(id, e.target.value);
                        }
                    })}
                    type="textarea"
                    rows="4"
                    value={value}
                />
            );
            break;
        case 'date':
            const newDateRules = Object.assign({}, rules[0], {type: 'date'});
            contentEle = (
                <DatePicker
                    showTime
                    format="yyyy-MM-dd HH:mm:ss"
                    {...params}
                    {...getFieldProps(id, {
                        rules: [newDateRules, ...lodash.slice(rules, 1)],
                        onChange: (e) => {
                            change(id, e);
                        }
                    })}
                    value={value || null}
                />
            );
            break;
        case 'enum': //枚举
            contentEle = (
                <Select
                    {...params}
                    {...getFieldProps(id, {
                        rules,
                        onChange: (e) => {
                            change(id, e);
                        }
                    })}
                    value={value}
                    dropdownMatchSelectWidth={false}
                >
                    {props.children}
                </Select>
            );
            break;
        case 'cascader': //级联选择
            contentEle = (
                <Tooltip
                    placement="topLeft"
                    title={value && !(value instanceof Array) ? value.value.join(' / ') : (value ? value.join(' / ') : '' )}
                >
                    <div style={{display:'inline'}}>
                        <Cascader
                            allowClear={false}
                            {...params}
                            options={cascaderValue}
                            {...getFieldProps(id, {
                                rules,
                                onChange: (val,options) => {
                                    change(id, {
                                        value:val,
                                        object
                                    });
                                }
                            })} value={value && !(value instanceof Array) ? value.value : value }
                    />
                    </div>
                </Tooltip>

            );
            break;
        case 'number':
        case 'integer':
        case 'money':
            const newNumberRules = Object.assign({}, rules[0], {type: 'number'});
            const step = type === 'integer' ? 1 : 0.01;
            contentEle = (
                <InputNumber
                    {...params}
                    {...getFieldProps(id, {
                        rules: [newNumberRules, ...lodash.slice(rules, 1)],
                        onChange: (e) => {
                            change(id, e);
                        }
                    })}
                    step={step}
                    value={value}
                />
            )
            break;
        case 'checkbox':
            contentEle = (
                <CheckboxGroup
                    {...params}
                    {...getFieldProps(id, {
                        rules,
                        onChange: (e) => {
                            change(id, e);
                        }
                    })}
                    value={value}
                />
            );
            break;
        case 'link':
            contentEle = (
                <div className="ant-search-input-wrapper" style={{width:'100%'}}>
                    <InputGroup
                        className="ant-search-input"
                    >
                        <Input
                            {...params}
                            {...getFieldProps(id, {
                                rules,
                                onChange: (e) => {
                                    change(id, e.target.value);
                                }
                            })}
                            value={value}
                        />
                        <a href={value} target="_blank" title="打开链接" className="ant-input-group-wrap">
                            <Button className="ant-search-btn" icon="arrow-right" />
                        </a>
                    </InputGroup>
                </div>
            );
            break;
    }

    if (isSingle) {
        return <FormItem>{contentEle}</FormItem>;
    }
    return (
        <Col span={formItemLayout[colspan].span}>
            <FormItem
                {...formItemLayout[colspan].layout}
                {...wraperParams}
                label={label}
            >
                {contentEle}
            </FormItem>
        </Col>
    )
};

export default FormItemWraper;

/**
 * 生成单个 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import moment from 'moment';
import { Form } from 'antd';

import BaseEditor from './BaseEditor.jsx';
import BaseText from './BaseText.jsx';
import BaseInput from './BaseInput.jsx';
import BaseForm from './BaseForm.jsx';

import * as CITYS from './utils/ChineseCities.js';
import * as UTILS from './utils/';

class FormBox extends Component {

    static defaultProps = {
    }

    shouldComponentUpdate(nextProps, nextState) {
        const next = JSON.stringify(nextProps);
        const prev = JSON.stringify(this.props);
        return next !== prev;
    }

    // onChange前处理value值处理
    beforeUpdateValue = (value) => {
        const { params } = this.props;
        const { toUpperCase, toLowerCase } = params;
        if (toUpperCase && typeof value === 'string') {
            value = value.toUpperCase();
        } else if (toLowerCase && typeof value === 'string') {
            value = value.toLowerCase();
        }
        return value;
    }

    onChange = ({ id, value, type, addValue }) => {
        value = this.beforeUpdateValue(value);
        this.props.onChange({ id, value, type, addValue });
    }

    setValue = () => {
        const { type, value, params } = this.props;
        const { data } = params;
        let newValues = this.beforeUpdateValue(value);
        if (!this.props.defaultValue && type !== 'text') {
            return newValues;
        }

        switch (type) {
            case 'checkbox':
                if (!value && data) {
                    const arr = [];
                    data.forEach((v) => {
                        if (v.selected) {
                            arr.push(v.value);
                        }
                    })
                    newValues = arr;
                }
                break;
            case 'radio':
            case 'radio-button':
                if (!value && data) {
                    data.some((v) => {
                        if (v.selected) {
                            newValues = v.value;
                        }
                        return v.selected;
                    })
                }
                break;
            case 'enum':
                if (!value && data) {
                    const arr = [];
                    data.forEach((v) => {
                        if (v.selected) {
                            arr.push(v.value);
                        }
                    })
                    newValues = arr;
                }
                break;
          case 'input-before-select':
          case 'input-radio':
                let inputValue = '';
                let addValue = '';
                if (!value || (value && typeof value === 'string')) {
                    inputValue = value;
                } else {
                    inputValue = value.inputValue;
                    addValue = value.addValue;
                }
                newValues = { inputValue, addValue };
                break;
          case 'text':
                if (params.render) {
                    newValues = params.render(value);
                }
                break;
        }
        return newValues;
    }

    // 设置表单元素 params.data
    setData = () => {
        const { type, params } = this.props;
        const { data } = params;
        let newData = data || [];
        switch (type) {
            case 'cascader':
                const { area } = params;
                const citys = {
                    quanguo: CITYS.CHINESE_CITYS,
                    shanghai: CITYS.CHINESE_SHANGHAI,
                    beijing: CITYS.CHINESE_BEIJING,
                };
                if (area && citys[area]) {
                    newData = [...citys[area]];
                }
                break;
        }
        return newData;
    }

    // 设置表单元素 style
    setStyle = () => {
        const { type, params } = this.props;
        const { toUpperCase, toLowerCase } = params;
        const newStyle = {};
        if (toUpperCase) {
            Object.assign(newStyle, { textTransform: 'uppercase' });
        } else if (toLowerCase) {
            Object.assign(newStyle, { textTransform: 'lowercase' });
        }
        switch (type) {
            case 'cascader':
            case 'date':
            case 'date-range':
            case 'date-month':
            case 'date-time':
            case 'number':
            case 'enum':
            case 'inputAdd':
            case 'editor':
                Object.assign(newStyle, { width: '100%' });
                break;
        }
        return newStyle;
    }

    // 设置表单元素 placeholder
    setPlaceholder = () => {
        const { type, id, params, formItem, api } = this.props;
        const { label } = formItem;
        const { placeholder } = api;
        let newPlaceholder = placeholder || `请输入${label || id}`;
        switch (type) {
            case 'date-range':
                newPlaceholder = [`开始${newPlaceholder}`, `结束${newPlaceholder}`];
            break;
        }
        return newPlaceholder;
    }

    render() {
        const newPlaceholder = this.setPlaceholder();
        const newValue = this.setValue();
        const newData = this.setData();
        const newStyle = this.setStyle();

        let ChildEle = null;
        // console.log('FormBox>>>', this.props)
        const commonProps = {
            id: this.props.id,
            onChange: this.onChange,
            value: newValue,
            formItem: {
                ...this.props.formItem,
            },
            api: {
                ...this.props.api,
                style: newStyle,
                placeholder: newPlaceholder,
            },
            options: this.props.options,
            params: {
                ...this.props.params,
                type: this.props.type,
                data: newData,
            },
        }
        if (this.props.type === 'editor') {
            Object.assign(commonProps, {
                ref: `BaseForm_${this.props.id}`,
            });
        } else {
            Object.assign(commonProps, {
                wrappedComponentRef: (inst) => this.formRef = inst
            });
        }

        switch (this.props.type) {
            case 'editor':
                ChildEle = <BaseEditor { ...commonProps } />;
                break;
            case 'text':
            case 'button':
                ChildEle = <BaseText { ...commonProps } />;
                break;
            case 'input':
            case 'input-button':
            case 'input-radio':
            case 'input-before-select':
            case 'textarea':
            case 'textarea-button':
                ChildEle = <BaseInput { ...commonProps } />;
                break;
            case 'cascader':
            case 'checkbox':
            case 'date':
            case 'date-month':
            case 'date-range':
            case 'date-time':
            case 'enum':
            case 'number':
            case 'radio':
            case 'radio-button':
            case 'rate':
            case 'slider':
            case 'switch':
                ChildEle = <BaseForm { ...commonProps } />;
                break;
        }
        // return <span>{ChildEle}</span>;
        return <div> { ChildEle } </div>;
    }
}

FormBox.propTypes = {
    type: propTypes.string.isRequired,
};

export default FormBox;

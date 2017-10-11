/**
 * 生成单个 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import moment from 'moment';
import classnames from 'classnames';
import { Form } from 'antd';

import formItemLayout from './formItemLayout/';

import BaseCascader from './BaseCascader.jsx';
import BaseCheckbox from './BaseCheckbox.jsx';
import BaseDatePicker from './BaseDatePicker.jsx';
import BaseEditor from './BaseEditor.jsx';
import BaseInput from './BaseInput.jsx';
import BaseInputAdd from './BaseInputAdd.jsx';
import BaseNumber from './BaseNumber.jsx';
import BaseRadio from './BaseRadio.jsx';
import BaseSelect from './BaseSelect.jsx';
import BaseText from './BaseText.jsx';
import BaseTextArea from './BaseTextArea.jsx';

import * as CITYS from './utils/ChineseCities.js';
import * as UTILS from './utils/';
import getChildGridLayout from './utils/getChildGridLayout.js';

class FormBox extends Component {

    static defaultProps = {
    }

    shouldComponentUpdate(nextProps, nextState) {
        const next = JSON.stringify(nextProps);
        const prev = JSON.stringify(this.props);
        return next !== prev;
    }

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

    getNewValue = () => {
        const { type, value, params } = this.props;
        const { data, addType } = params;
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
                    data.some((v) => {
                        if (v.selected) {
                            newValues = v.value;
                        }
                        return v.selected;
                    })
                }
                break;
          case 'input':
          case 'inputAdd':
                const targetType = ['radio', 'before-select'];
                if (targetType.indexOf(addType) !== -1) {
                    let inputValue = '';
                    let addValue = '';
                    if (!value || (value && typeof value === 'string')) {
                        inputValue = value;
                    } else {
                        inputValue = value.inputValue;
                        addValue = value.addValue;
                    }
                    newValues = { inputValue, addValue };
                }
                break;
          case 'text':
                if (params.render) {
                    newValues = params.render(value);
                }
                break;
        }
        return newValues;
    }

    getNewClassName = () => {
        const { params } = this.props;
        const { layout, className } = params;
        const newClassName = classnames({
            'label-vertical': layout === 'vertical',
            [className]: !!className,
        });

        return newClassName;
    }

    getNewLayout = () => {
        const { params } = this.props;
        const { colSpan, layout } = params;
        const L = formItemLayout[layout] || {};
        const newLayout = L[`colSpan_${colSpan}`] || L.normal;
        return newLayout;
    }

    getNewData = () => {
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

    getNewStyle = () => {
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
            case 'number':
            case 'enum':
            case 'inputAdd':
            case 'editor':
                Object.assign(newStyle, { width: '100%' });
                break;
        }
        return newStyle;
    }

    getNewlabel = () => {
        const { label } = this.props.formItem;
        const newLabel = label;
        return newLabel;
    }

    getNewPlaceholder = () => {
        const { type, id, params, formItem, api } = this.props;
        const { label } = formItem;
        const { placeholder } = api;
        let newPlaceholder = placeholder || `请输入${label || id}`;
        switch (type) {
            case 'date':
                if (params.addType === 'range') {
                    newPlaceholder = [`开始${newPlaceholder}`, `结束${newPlaceholder}`];
                }
            break;
        }
        return newPlaceholder;
    }

    render() {
        const newPlaceholder = this.getNewPlaceholder();
        const newLayout = this.getNewLayout();
        const newValue = this.getNewValue();
        const newClassName = this.getNewClassName();
        const newData = this.getNewData();
        const newStyle = this.getNewStyle();
        const newLabel = this.getNewlabel();
        const newChildSpan = getChildGridLayout(this.props.params.childSpan);

        let ChildEle = null;
        // console.log('FormBox>>>', this.props)
        const commonProps = {
            id: this.props.id,
            onChange: this.onChange,
            value: newValue,
            formItem: {
                ...newLayout,
                ...this.props.formItem,
                className: newClassName,
                label: newLabel,
            },
            api: {
                ...this.props.api,
                style: newStyle,
                placeholder: newPlaceholder,
            },
            options: this.props.options,
            params: {
                ...this.props.params,
                childSpan: newChildSpan,
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
            case 'cascader':
                ChildEle = <BaseCascader { ...commonProps } />;
                break;
            case 'checkbox':
                ChildEle = <BaseCheckbox { ...commonProps } />;
                break;
            case 'date':
                ChildEle = <BaseDatePicker { ...commonProps } />;
                break;
            case 'editor':
                ChildEle = <BaseEditor { ...commonProps } />;
                break;
            case 'input':
                ChildEle = <BaseInput { ...commonProps } />;
                break;
            case 'inputAdd':
                ChildEle = <BaseInputAdd { ...commonProps } />;
                break;
            case 'number':
                ChildEle = <BaseNumber { ...commonProps } />;
                break;
            case 'radio':
                ChildEle = <BaseRadio { ...commonProps } />;
                break;
            case 'enum':
                ChildEle = <BaseSelect { ...commonProps } />;
                break;
            case 'text':
                ChildEle = <BaseText { ...commonProps } />;
                break;
            case 'textarea':
                ChildEle = <BaseTextArea { ...commonProps } />;
                break;
        }

        return <div style = { { paddingRight: this.props.space } }> { ChildEle } </div>;
    }
}

FormBox.propTypes = {
    type: propTypes.string.isRequired,
    space: propTypes.number,
};

export default FormBox;

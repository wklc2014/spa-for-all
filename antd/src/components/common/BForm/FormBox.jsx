/**
 * 生成单个 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import moment from 'moment';
import classnames from 'classnames';
import { Form } from 'antd';

import formLayout from './formLayout/';

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
        allowClear: true,
        childSpan: 9,
        childGutter: 16,
        defaultValue: true,
        disabled: false,
        disabledTime: UTILS.DATE_PICKER_OPTIONS.disabledTime,
        dropdownMatchSelectWidth: false,
        format: UTILS.DATE_PICKER_OPTIONS.format,
        init: UTILS.EDITOR_OPTIONS.config,
        join: '-',
        layout: 'A',
        mode: '',
        notFoundContent: '没有数据',
        options: [],
        size: 'large',
        rows: 4,
        rules: [],
        space: 20,
        showTime: UTILS.DATE_PICKER_OPTIONS.showTime,
    }

    shouldComponentUpdate(nextProps, nextState) {
        const next = JSON.stringify(nextProps);
        const prev = JSON.stringify(this.props);
        return next !== prev;
    }

    beforeUpdateValue = (value) => {
        if (this.props.toUpperCase && typeof value === 'string') {
            value = value.toUpperCase();
        } else if (this.props.toLowerCase && typeof value === 'string') {
            value = value.toLowerCase();
        }
        return value;
    }

    onChange = ({ id, value, type, addValue }) => {
        value = this.beforeUpdateValue(value);
        this.props.onChange({ id, value, type, addValue });
    }

    getNewValue = () => {
        const { value, options } = this.props;
        let newValues = this.beforeUpdateValue(value);
        if (!this.props.defaultValue && this.props.type !== 'text') {
            return newValues;
        }

        switch (this.props.type) {
            case 'checkbox':
                if (!value && options) {
                    const arr = [];
                    options.forEach((v) => {
                        if (v.selected) {
                            arr.push(v.value);
                        }
                    })
                    newValues = arr;
                }
                break;
            case 'radio':
                if (!value && options) {
                    options.some((v) => {
                        if (v.selected) {
                            newValues = v.value;
                        }
                        return v.selected;
                    })
                }
                break;
            case 'enum':
                if (!value && options) {
                    options.some((v) => {
                        if (v.selected) {
                            newValues = v.value;
                        }
                        return v.selected;
                    })
                }
                break;
          case 'input':
          case 'inputAdd':
                const { addType } = this.props;
                const targetType = ['radio', 'before-select'];
                if (targetType.indexOf(this.props.addType) !== -1) {
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
                if (this.props.render) {
                    // 配置render函数
                    newValues = this.props.render(value);
                } else if (this.props.isDate) {
                    // 日期
                    newValues = moment(value).format(this.props.format);
                } else if (lodash.isArray(value)) {
                    // 数组
                    newValues = value.join(this.props.join);
                } else if (options) {
                    // 枚举值映射
                    options.some((v) => {
                        if (v.value === value) {
                            newValues = v.label;
                        }
                        return v.value === this.props.value;
                    })
                } else {
                    newValue = value.toString();
                }
                break;
        }
        return newValues;
    }

    getNewPlaceholder = () => {
        const { placeholder, label, id, type } = this.props;
        const defaultPlaceholder = placeholder || `请输入${label || id}`;
        let newPlaceholder = defaultPlaceholder;
        switch (type) {
            case 'date':
                if (this.props.addType === 'range') {
                    const placeholder = placeholder || label || id;
                    newPlaceholder = [`开始${placeholder}`, `结束${placeholder}`];
                }
            break;
        }
        return newPlaceholder;
    }

    getNewClassName = () => {
        const { layout, className } = this.props;

        const newClassName = classnames({
            'label-vertical': layout === 'vertical',
            [className]: !!className,
        });

        return newClassName;
    }

    getNewLayout = () => {
        const { layout, colSpan } = this.props;
        const L = formLayout[layout] || {};
        const newLayout = L[`colSpan_${colSpan}`] || L.normal;
        return newLayout;
    }

    getNewOptions = () => {
        const { options, type } = this.props;
        let newOptions = options || [];
        switch (this.props.type) {
            case 'cascader':
                const { area } = this.props;
                const citys = {
                    quanguo: CITYS.CHINESE_CITYS,
                    shanghai: CITYS.CHINESE_SHANGHAI,
                    beijing: CITYS.CHINESE_BEIJING,
                };
                if (area && citys[area]) {
                    newOptions = [...citys[area]];
                }
                break;
        }
        return newOptions;
    }

    getNewStyle = () => {
        const newStyle = {};
        if (this.props.toUpperCase) {
            Object.assign(newStyle, { textTransform: 'uppercase' });
        } else if (this.props.toLowerCase) {
            Object.assign(newStyle, { textTransform: 'lowercase' });
        }
        switch (this.props.type) {
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
        const newLabel = this.props.label;
        return newLabel;
    }

    render() {
        const newPlaceholder = this.getNewPlaceholder();
        const newLayout = this.getNewLayout();
        const newValue = this.getNewValue();
        const newClassName = this.getNewClassName();
        const newOptions = this.getNewOptions();
        const newStyle = this.getNewStyle();
        const newLabel = this.getNewlabel();
        const newChildSpan = getChildGridLayout(this.props.childSpan);

        let ChildEle = null;

        const commonProps = {
            id: this.props.id,
            rules: this.props.rules,
            value: newValue,

            className: newClassName,
            label: newLabel,
            layout: newLayout,

            style: newStyle,
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
                const cascaderProps = {
                    ...commonProps,

                    extra: this.props.extra,

                    allowClear: this.props.allowClear,
                    disabled: this.props.disabled,
                    onChange: this.onChange,
                    options: newOptions,
                    placeholder: newPlaceholder,
                    showSearch: this.props.showSearch,
                };
                ChildEle = <BaseCascader { ...cascaderProps } />;
                break;
            case 'checkbox':
                const checkboxProps = {
                    ...commonProps,

                    disabled: this.props.disabled,
                    onChange: this.onChange,
                    options: newOptions,
                };
                ChildEle = <BaseCheckbox { ...checkboxProps } />;
                break;
            case 'date':
                const dateProps = {
                    ...commonProps,

                    addType: this.props.addType,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    disabledTime: this.props.disabledTime,
                    format: this.props.format,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                    showTime: this.props.showTime,
                };
                ChildEle = <BaseDatePicker { ...dateProps } />;
                break;
            case 'editor':
                const editorProps = {
                    ...commonProps,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    init: this.props.init,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                    rows: this.props.rows,
                    rules: this.props.rules,
                };
                ChildEle = <BaseEditor { ...editorProps } />;
                break;
            case 'input':
                const inputProps = {
                    ...commonProps,

                    addType: this.props.addType,
                    childGutter: this.props.childGutter,
                    childSpan: newChildSpan,
                    options: newOptions,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                    size: this.props.size,
                }
                ChildEle = <BaseInput { ...inputProps } />;
                break;
            case 'inputAdd':
                const inputAddProps = {
                    ...commonProps,

                    addType: this.props.addType,
                    childGutter: this.props.childGutter,
                    childSpan: newChildSpan,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,

                    dropdownMatchSelectWidth: this.props.dropdownMatchSelectWidth,
                    options: newOptions,
                    selectWidth: this.props.selectWidth,
                }
                ChildEle = <BaseInputAdd { ...inputAddProps } />;
                break;
            case 'number':
                const numberProps = {
                    ...commonProps,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    min: this.props.min,
                    max: this.props.max,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                    step: this.props.step,
                };
                ChildEle = <BaseNumber { ...numberProps } />;
                break;
            case 'radio':
                const radioProps = {
                    ...commonProps,

                    addType: this.props.addType,
                    disabled: this.props.disabled,

                    onChange: this.onChange,
                    options: newOptions,
                    step: this.props.step,
                };
                ChildEle = <BaseRadio { ...radioProps } />;
                break;
            case 'enum':
                const enumProps = {
                    ...commonProps,
                    options: newOptions,

                    extra: this.props.extra,

                    allowClear: this.props.allowClear,
                    disabled: this.props.disabled,
                    dropdownMatchSelectWidth: this.props.dropdownMatchSelectWidth,
                    mode: this.props.mode,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                };
                ChildEle = <BaseSelect { ...enumProps } />;
                break;
            case 'text':
                const textProps = {
                    ...commonProps,
                };
                delete textProps.id;
                delete textProps.rules;
                ChildEle = <BaseText { ...textProps } />;
                break;
            case 'textarea':
                const textareaProps = {
                    ...commonProps,

                    addType: this.props.addType,
                    childGutter: this.props.childGutter,
                    childSpan: newChildSpan,
                    options: newOptions,

                    extra: this.props.extra,

                    disabled: this.props.disabled,
                    onChange: this.onChange,
                    placeholder: newPlaceholder,
                    rows: this.props.rows,
                };
                ChildEle = <BaseTextArea { ...textareaProps } />;
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

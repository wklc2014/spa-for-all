/**
 * 生成一组 <FormItem /> 组件
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import FormBox from './FormBox.jsx';
import getGridLayout from './utils/getGridLayout.js';
import getFormItemLayout from './utils/getFormItemLayout.js';
import getChildGridLayout from './utils/getChildGridLayout.js';
import { getEditorBody, getEditorPlaceholder } from './utils/getEditorDom.js';

const FormItem = Form.Item;

class FormGroup extends Component {

    static defaultProps = {
        values: {},
        col: 1,
        space: 16,
        colSpan: 1,
        childGutter: 16,
        layout: 'horizontal',
        isSort: true,
    }

    // 获取表单元素实例
    getInstance = (id) => {
        const refBox = this.refs[`FormBox_${id}`]
        const ref = refBox.refs[`BaseForm_${id}`];
        const type = this.getFieldType(id);
        if (type === 'editor') {
            return ref;
        }
        return refBox.formRef;
    }

    // 获取所有表单 ID
    getConfigsIDs = () => {
        const { configs } = this.props;
        const ids = configs.map((v) => v.id);
        return ids;
    }

    // 根据id判断表单类型
    getFieldType = (id) => {
        const { configs } = this.props;
        let type = null;
        if (id) {
            configs.some((v) => {
                if (v.id === id) {
                    type = v.type;
                }
                return v.id === id;
            })
        }
        return type;
    }

    // 验证表单元素
    validateFields = () => {
        const ids = this.getConfigsIDs();
        const ret = {
            canSubmit: true,
            errors: {},
            values: {},
        };
        ids.forEach((id) => {
            const instance = this.getInstance(id);
            const type = this.getFieldType(id);
            if (type !== 'text') {
                if (this.getFieldType(id) !== 'editor') {
                    instance.props.form.validateFields((errors, values) => {
                        if (errors && ret.canSubmit) {
                            ret.canSubmit = false;
                        }
                        Object.assign(ret.errors, errors);
                        Object.assign(ret.values, values);
                    })
                } else {
                    const validateRet = instance.validateFields();
                    Object.assign(ret.errors, validateRet.errors);
                    Object.assign(ret.values, validateRet.values);
                }
            }
        });
        return ret;
    }

    // 设置表单元素的值
    setFieldsValue = (fields = {}) => {
        const ids = this.getConfigsIDs();
        Object.keys(fields).forEach((id) => {
            if (ids.indexOf(id) !== -1) {
                const instance = this.getInstance(id);
                const type = this.getFieldType(id);
                if (type !== 'text') {
                    if (this.getFieldType(id) === 'editor') {
                        instance.setValue(fields[id]);
                    } else {
                        instance.props.form.setFieldsValue({ [id]: fields[id] });
                    }
                }
            }
        });
    }

    // 获取表单元素值 -> 单个
    getFieldValue = (id = '') => {
        const ids = this.getConfigsIDs();
        const fieldValue = {};
        if (id && ids.indexOf(id) !== -1) {
            const instance = this.getInstance(id);
            const type = this.getFieldType(id);
            if (type !== 'text') {
                let value;
                if (this.getFieldType(id) === 'editor') {
                    value = instance.getValue();
                    if (value === instance.EMPTY_VALUE) {
                        value = '';
                    }
                } else {
                    value = instance.props.form.getFieldValue(id);
                }
                fieldValue[id] = value;
            }
        }
        return fieldValue;
    }

    // 设置表单元素值 -> 多个
    getFieldsValue = (fields = []) => {
        const ids = this.getConfigsIDs();
        const fieldsValue = {};
        if (!fields || !fields.length) {
            fields = [...ids];
        }
        fields.forEach((id) => Object.assign(fieldsValue, this.getFieldValue(id)));
        return fieldsValue;
    }

    // 重置表单
    resetFields = (fields = []) => {
        const ids = this.getConfigsIDs();
        if (!fields || !fields.length) {
            fields = [...ids];
        }
        fields.forEach((id) => {
            if (ids.indexOf(id) !== -1) {
                const instance = this.getInstance(id);
                const type = this.getFieldType(id);
                if (type !== 'text') {
                    if (this.getFieldType(id) === 'editor') {
                        instance.editor.setValue(this.props.values[id] || '');
                        instance.resetFields(false);
                    } else {
                        instance.props.form.resetFields();
                    }
                }
            }
        });
    }

    // 排序配置项
    sortConfigs = () => {
        const { isSort, configs } = this.props;
        if (!isSort) {
            return configs;
        }
        return configs.sort((m, n) => {
            if (m.order > n.order) {
                return 1;
            } else if (m.order < n.order) {
                return -1;
            } else {
                return 0;
            }
        })
    }

    // 设置表单元素 className
    setClassName = (pClassName) => {
        const { layout, className } = this.props;
        const newClassName = classnames({
            'label-vertical': layout === 'vertical',
            [className]: !!className,
            [pClassName]: !!pClassName,
        });

        return newClassName;
    }

    // 设置表单元素 props
    setFormItemProps = () => {
        const {
            disabled,
            values,
            colSpan,
            childGutter,
            col,
            layout,
        } = this.props;
        const configs = this.sortConfigs();
        return configs.map((val, i) => {
            const params = val.params || {};
            const newColSpan = params.colSpan || colSpan;
            const newLayout = getFormItemLayout(col, newColSpan, layout);
            const newChildSpan = getChildGridLayout(params.childSpan);
            const newClassName = this.setClassName(params.className);
            const newParams = {
                ...val.params,
                className: newClassName,
                childGutter,
                childSpan: newChildSpan,
                colSpan: newColSpan,
            };
            const newApi = disabled ? {...val.api, disabled} : val.api || {};
            const newFormItem = {
                ...val.formItem,
                ...newLayout,
            };
            return {
                type: val.type,
                id: val.id,
                formItem: newFormItem,
                api: newApi,
                params: newParams,
                options: val.options || {},
                value: values[val.id],
                ref: `FormBox_${val.id}`,
                onChange: this.props.onChange,
            }
        })
    }

    renderChild = () => {
        const { col, colSpan, space, layout } = this.props;
        const formItemProps = this.setFormItemProps();
        if (layout === 'inline') {
            return (
                <div>
                    {
                        formItemProps.map((val, i) => (
                            <div key={i} style={{ display: 'inline-block' }}>
                                <FormBox {...val} />
                            </div>
                        ))
                    }
                </div>
            );
        }
        return (
            <Row type="flex">
                {
                    formItemProps.map((val, i) => {
                        const colProps = getGridLayout(col, val.params.colSpan);
                        return (
                            <Col key={i} {...colProps}>
                                <div style={{paddingRight: space}}>
                                    <FormBox {...val} />
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        )
    }

    render() {
        const Child = this.renderChild();

        return <Form layout={this.props.layout}>{Child}</Form>;
    }
}

FormGroup.propTypes = {
    configs: propTypes.array.isRequired,
    col: propTypes.number,
    onChange: propTypes.func,
    values: propTypes.object,
    className: propTypes.string,
    isSort: propTypes.bool,
    layout: propTypes.string,
    space: propTypes.number,
};

export default FormGroup;

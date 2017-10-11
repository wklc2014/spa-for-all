/**
 * 生成一组 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import FormBox from './FormBox.jsx';
import getGridLayout from './utils/getGridLayout.js';
import { getEditorBody, getEditorPlaceholder } from './utils/getEditorDom.js';

const FormItem = Form.Item;

class FormGroup extends Component {

    static defaultProps = {
        values: {},
        isSort: true,
        col: 1,
        colSpan: 1,
        childGutter: 16,
        layout: 'H2',
        space: 16,
    }

    getInstance = (id) => {
        const refBox = this.refs[`FormBox_${id}`]
        const ref = refBox.refs[`BaseForm_${id}`];
        const type = this.getFieldType(id);
        if (type === 'editor') {
            return ref;
        }
        return refBox.formRef;
    }

    getConfigsIDs = () => {
        const { configs } = this.props;
        const ids = configs.map((v) => v.id);
        return ids;
    }

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

    getFieldsValue = (fields = []) => {
        const ids = this.getConfigsIDs();
        const fieldsValue = {};
        if (!fields || !fields.length) {
            fields = [...ids];
        }
        fields.forEach((id) => Object.assign(fieldsValue, this.getFieldValue(id)));
        return fieldsValue;
    }

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

    getFormLayout = () => {
        const { layout } = this.props;
        let formLayout = 'horizontal';
        if (layout === 'V') {
            formLayout = 'vertical';
        } else if (layout === 'I') {
            formLayout = 'inline';
        }
        return formLayout;
    }

    getFormBoxProps = () => {
        const { disabled, values, className, layout, colSpan, childGutter, space, col } = this.props;
        const configs = this.sortConfigs();
        return configs.map((val, i) => {
            const params = val.params || {};
            const newColSpan = Math.min(params.colSpan || colSpan, col);
            const newParams = { ...val.params, layout, className, colSpan: newColSpan, childGutter };
            const newApi = disabled ? {...val.api, disabled} : val.api || {};
            return {
                type: val.type,
                id: val.id,
                formItem: val.formItem || {},
                api: newApi,
                params: newParams,
                options: val.options || {},
                value: values[val.id],
                ref: `FormBox_${val.id}`,
                onChange: this.props.onChange,
                space,
            }
        })
    }

    renderChild = () => {
        const { col, colSpan } = this.props;
        const FormBoxProps = this.getFormBoxProps();
        const formLayout = this.getFormLayout();
        if (formLayout === 'inline') {
            return (
                <div className="clearfix">
                    {
                        FormBoxProps.map((val, i) => {
                            return (
                                <div key={`FormBox_${i}`} style={{ float: 'left' }}>
                                    <FormBox key={i} {...val} />
                                </div>
                            );
                        })
                    }
                    <div style={{ float: 'left' }}>
                        <FormItem>
                            {this.props.children}
                        </FormItem>
                    </div>
                </div>
            )
        }
        return (
            <Row type="flex">
                {
                    FormBoxProps.map((val, i) => {
                        const colProps = getGridLayout(col, val.params.colSpan);
                        return <Col key={i} {...colProps}><FormBox {...val} /></Col>;
                    })
                }
            </Row>
        )
    }

    render() {
        const formLayout = this.getFormLayout();
        const Child = this.renderChild();

        return <Form layout={formLayout}>{Child}</Form>;
    }
}

FormGroup.propTypes = {
    configs: propTypes.array.isRequired,
    col: propTypes.number,
    onChange: propTypes.func,
    values: propTypes.object,
    className: propTypes.string,
    isSort: propTypes.bool,
    isInline: propTypes.bool,
};

export default FormGroup;

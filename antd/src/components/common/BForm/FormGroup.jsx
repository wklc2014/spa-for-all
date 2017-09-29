/**
 * 生成一组 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import FormBox from './FormBox.jsx';
import getGridLayout from './utils/getGridLayout.js';
import { getEditorBody, getEditorPlaceholder } from './utils/getEditorDom.js';

class FormGroup extends Component {

    static defaultProps = {
        values: {},
    }

    getInstance = (id) => {
        const refBox = this.refs[`FormBox_${id}`]
        const inst = refBox.formRef;
        const ref = refBox.refs[`BaseForm_${id}`];
        if (this.getFieldType(id) === 'editor') {
            return ref;
        }
        return inst;
    }

    getConfigsIDs = () => {
        const { configs } = this.props;
        return Object.keys(configs).map((v) => v);
    }

    getFieldType = (id) => {
        const { configs } = this.props;
        if (!id) {
            return null;
        }
        return configs[id].type;
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
            if (this.getFieldType(id) !== 'editor') {
                instance.props.form.validateFields((errors, values) => {
                    if (errors && ret.canSubmit) {
                        ret.canSubmit = false;
                    }
                    Object.assign(ret.errors, errors);
                    Object.assign(ret.values, values);
                })
            } else {
                // instance.setState({
                //     hasChanged: true
                // }, () => {
                //     const value = instance.getRules();
                //     console.log('editor>>>', value)
                // });
                const validateRet = instance.validateFields();
                Object.assign(ret.errors, validateRet.errors);
                Object.assign(ret.values, validateRet.values);
            }
        });
        return ret;
    }

    setFieldsValue = (fields = {}) => {
        const ids = this.getConfigsIDs();
        Object.keys(fields).forEach((id) => {
            if (ids.indexOf(id) !== -1) {
                const instance = this.getInstance(id);
                if (this.getFieldType(id) === 'editor') {
                    instance.setValue(fields[id]);
                } else {
                    instance.props.form.setFieldsValue({ [id]: fields[id] });
                }
            }
        });
    }

    getFieldValue = (id = '') => {
        const ids = this.getConfigsIDs();
        const fieldValue = {};
        if (id && ids.indexOf(id) !== -1) {
            const instance = this.getInstance(id);
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
                if (this.getFieldType(id) === 'editor') {
                    instance.editor.setValue(this.props.values[id] || '');
                    instance.resetFields(false);
                } else {
                    instance.props.form.resetFields();
                }
            }
        });
    }

    render() {
        const { configs, onChange, values, formProps, col, className } = this.props;

        const formEle = Object.keys(configs)
            .sort((m, n) => {
                if (configs[m].order > configs[n].order) {
                    return 1;
                } else if (configs[m].order < configs[n].order) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .map((v, i) => {
                const val = configs[v];
                const groupProps = {
                    ...val,
                    ...formProps,
                    onChange,
                    key: i,
                    id: v,
                    value: values[v],
                    ref: `FormBox_${v}`,
                };
                const newColProps = getGridLayout(col, val.colSpan);
                return (
                    <Col
                        key={`FormBox_${i}`}
                        {...newColProps}
                    >
                        <FormBox {...groupProps} />
                    </Col>
                );
            });

        return <Form className={className}><Row type="flex">{formEle}</Row></Form>;
    }
}

FormGroup.propTypes = {
    configs: propTypes.object.isRequired,
    col: propTypes.number,
    formProps: propTypes.object,
    onChange: propTypes.func,
    values: propTypes.object,
    className: propTypes.string,
};

export default FormGroup;

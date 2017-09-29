/**
 * 生成一组 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import FormBox from './FormBox.jsx';
import getGridLayout from './utils/getGridLayout.js';
import getBaseEditorDom from './utils/getBaseEditorDom.js';

class FormGroup extends Component {

    static defaultProps = {
        sorted: true,
        values: {},
    }

    getInstance = (id) => {
        const inst = this.refs[`FormBox_${id}`].formRef;
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
            instance.props.form.validateFields((errors, values) => {
                if (errors && ret.canSubmit) {
                    ret.canSubmit = false;
                }
                Object.assign(ret.errors, errors);
                Object.assign(ret.values, values);
            })
        });
        return ret;
    }

    setFieldsValue = (fields = {}) => {
        const ids = this.getConfigsIDs();
        Object.keys(fields).forEach((id) => {
            if (ids.indexOf(id) !== -1) {
                const instance = this.getInstance(id);
                if (this.getFieldType(id) !== 'editor') {
                    instance.props.form.setFieldsValue({ [id]: fields[id] });
                }
            }
        });
    }

    getFieldValue = (id = '') => {
        const ids = this.getConfigsIDs();
        const fieldValue = {};
        if (ids.indexOf(id) !== -1) {
            const instance = this.getInstance(id);
            let value;
            if (this.getFieldType(id) === 'editor') {
                const { body } = getBaseEditorDom(id);
                value = body.html();
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
                    const { body, placeholder } = getBaseEditorDom(id);
                    body.html('');
                    placeholder.css('display', 'block');
                } else {
                    instance.props.form.resetFields();
                }
            }
        });
    }

    render() {
        const { configs, onChange, values, formProps, col, className, sorted } = this.props;

        const configsArray = Object.keys(configs);
        if (sorted) {
            configsArray.sort((m, n) => {
                if (configs[m].order > configs[n].order) {
                    return 1;
                } else if (configs[m].order < configs[n].order) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        const formEle = configsArray.map((v, i) => {
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
    sorted: propTypes.bool,
};

export default FormGroup;

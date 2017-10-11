/**
 * 富文本编辑器
 */
import Simditor from "simditor";
import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import lodash from 'lodash';
import classnames from 'classnames';
import { Form, Checkbox } from 'antd';
import { getEditorBody } from './utils/getEditorDom.js';

const FormItem = Form.Item;

class BaseEditor extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.EMPTY_VALUE = '<p><br></p>';
        this.HAS_CHANGED = false;
        this.state = {
            hasChanged: false
        }
    }

    componentDidMount() {
         this.initEditor();
    }

    initEditor = () => {
        const { api, params, value, id } = this.props;
        const { placeholder } = api;
        const { init } = params;
        // const { hasChanged } = this.state;
        this.editor = new Simditor({
            ...init,
            placeholder,
            textarea: $(`#${id}`),
        });
        if (value) {
            this.editor.setValue(value);
        }

        //监听改变
        this.editor.on('valuechanged', (e, src) => {
            if (!this.HAS_CHANGED) {
                // this.setState({ hasChanged: true });
                this.HAS_CHANGED = true;
            }
            const value = this.getValue();
            this.props.onChange({ id, value });
        });

    }

    getValue = () => {
        const { id } = this.props;
        const body = getEditorBody(id);
        const html = body.html();
        return html;
    }

    getRules = () => {
        const { options, value } = this.props;
        const { rules } = options;
        const newRules = {};
        if (!rules) {
            return newRules;
        }
        rules.some((v) => {
            if (v.required) {
                newRules.required = true;
                if (this.HAS_CHANGED && (!value || value === this.EMPTY_VALUE)) {
                    newRules.help = v.message;
                    newRules.validateStatus = 'error';
                } else {
                    newRules.help = '';
                    newRules.validateStatus = 'success';
                }
            }
            return v.required;
        });
        return newRules;
    }

    validateFields = () => {
        this.resetFields(true);
        const { id } = this.props;
        const newRules = this.getRules();
        const newValues = this.getValue();
        const newErrors = {};
        if (newRules.validateStatus === 'error') {
            newErrors[id] = {
                errors: [{
                    field: id,
                    message: newRules.help
                }]
            }
        }
        return { errors: newErrors, values: { [id]: newValues } };
    }

    resetFields = (status) => {
        this.HAS_CHANGED = status;
        this.forceUpdate();
    }

    render() {
        const {
            id,
            onChange,
            value,
            form,
            formItem,
            params,
            api,
            options,
        } = this.props;

        const {
            addType,
            childGutter,
            childSpan,
            data,
        } = params;

        const defaultProps = {
            ...api,
            id,
        };

        const ChildEle = <textarea {...defaultProps} />;
        const newRules = this.getRules();

        const wraperClassName = classnames({
            'simditor-has-error': newRules.validateStatus === 'error'
        })

        return (
            <FormItem {...formItem} {...newRules}>
                <div id={`FormItem_${id}_Wraper`} className={wraperClassName}>
                    {ChildEle}
                </div>
            </FormItem>
        );
    }
}

BaseEditor.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default BaseEditor;

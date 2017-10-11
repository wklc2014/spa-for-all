/**
 * 数字输入框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, InputNumber } from 'antd';

const FormItem = Form.Item;

class BaseNumber extends Component {

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

        const { getFieldDecorator } = form;

        const defaultProps = {
            ...api,
            onChange: (value) => {
                props.onChange({ id, value });
            },
        };

        const ChildEle = <InputNumber {...defaultProps} />;

        return (
            <FormItem {...formItem}>
                {getFieldDecorator(id, {
                    ...options,
                    initialValue: value,
                })(ChildEle)}
            </FormItem>
        );
    }
}

BaseNumber.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    rules: propTypes.array,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseNumber);

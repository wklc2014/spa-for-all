/**
 * 复选框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Checkbox } from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

class BaseCheckbox extends Component {

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
            options: data,
            onChange: (value) => {
                onChange({ id, value });
            },
        };

        const ChildEle = <CheckboxGroup {...defaultProps} />;

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

BaseCheckbox.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseCheckbox);

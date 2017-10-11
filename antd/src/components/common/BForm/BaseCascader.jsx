/**
 * 级联选择
 * 可自定义级联选择项
 * 内置了【北京】【上海】【全国】的城市选择
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Cascader } from 'antd';

const FormItem = Form.Item;

class BaseCascader extends Component {

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

        const ChildEle = <Cascader {...defaultProps} />;

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

BaseCascader.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseCascader);

/**
 * 日期选择
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import lodash from 'lodash';
import { Form, DatePicker } from 'antd';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class BaseDatePicker extends Component {

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
            onChange(_, value) {
                onChange({ id, value });
            },
        };

        let ChildEle = null;
        switch (addType) {
            case 'range':
                ChildEle = <RangePicker {...defaultProps} />;
                break;
            default:
                ChildEle = <DatePicker {...defaultProps} />;
        }

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

BaseDatePicker.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseDatePicker);

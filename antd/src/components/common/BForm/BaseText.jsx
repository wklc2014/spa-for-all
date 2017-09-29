/**
 * 文本显示
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

const BaseText = (props) => {
    const {
        value,

        className,
        label,
        layout,

        style,
    } = props;

    const defaultProps = {
        className: 'ant-form-text',
        style,
    };

    const ChildEle = <span {...defaultProps}>{value}</span>;

    return (
        <FormItem
            {...layout}
            label={label}
            className={className}
        >
            {ChildEle}
        </FormItem>
    );
}

BaseText.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    style: propTypes.object,
};


export default BaseText;

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
        id,
        value,
        api,
        formItem,
        params,
    } = props;

    const {
        addType,
        childGutter,
        childSpan,
        data,
    } = params;

    const defaultProps = {
        ...api,
        className: 'ant-form-text',
    };

    const ChildEle = <span {...defaultProps}>{value}</span>;

    return <FormItem {...formItem}>{ChildEle}</FormItem>;
}

BaseText.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    style: propTypes.object,
};


export default BaseText;

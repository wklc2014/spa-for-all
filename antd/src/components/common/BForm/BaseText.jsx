/**
 * text
 * button
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Button } from 'antd';
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
        type,
        childGutter,
        childSpan,
        data,
    } = params;

    let ChildEle = null;
    switch(type) {
        case 'text':
            ChildEle = <span className="ant-form-text" {...api}>{value}</span>;
            break;
        case 'button':
            ChildEle = <Button {...api}>{params.btnText}</Button>
            break;
    }

    return <FormItem {...formItem}>{ChildEle}</FormItem>;
}

BaseText.propTypes = {
    className: propTypes.string,
    label: propTypes.string,
    layout: propTypes.object,

    style: propTypes.object,
};


export default BaseText;

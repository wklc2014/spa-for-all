import React from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Row, Col } from 'antd';

import getFormItemLayout from './utils/getFormItemLayout.js';
import getChildGridLayout from './utils/getChildGridLayout.js';
import getStyle from './utils/getStyle.js';
import getData from './utils/getData.js';
import getPlaceholder from './utils/getPlaceholder.js';
import getValue from './utils/getValue.js';
import getFormItemApi from './utils/getFormItemApi.js';
import fieldTypes from './utils/fieldTypes.js';

import HFormItemHOC from './HFormItemHOC.jsx';

const FormItem = Form.Item;

/**
 * HFormItem
 * 对FormItem组件封装
 */
function HFormItem(props) {

    function _throwErrors(type) {
        if (!fieldTypes[type]) {
            throw TypeError(`${type} is error...`);
        }
    }

    function _getFieldDecorator(ele) {
        return getFieldDecorator(id, {
            ...optionsApi,
            initialValue: value,
        })(ele);
    }

    const {
        form,
        layout,
        field,
        col,
        value,
    } = props;

    const { id, type } = field;
    const defaultApi = field.defaultApi || {};
    const optionsApi = field.optionsApi || {};
    const formItemApi = getFormItemApi(field.formItemApi, value);
    const params = field.params || {};
    const onChange = (e, addType) => {
        if (addType) {
            const newValue = getValue(value, params);
            field.onChange({
                id,
                value: newValue,
                addType,
                addValue: e,
            });
        } else {
            const newValue = getValue(e, params);
            field.onChange({
                id,
                value: newValue,
            });
        }
    }

    const formItemLayout = getFormItemLayout(layout, params.colSpan, col);
    const childSpan = getChildGridLayout(params.childSpan);
    const childGutter = params.childGutter || 16;

    const { getFieldDecorator } = form;

    const placeholder = getPlaceholder({
        id,
        type,
        label: params.label,
        placeholder: defaultApi.placeholder,
    });
    const style = getStyle({
        type,
        params,
        style: defaultApi.style,
    });
    const data = getData({
        type,
        params,
    });

    let ChildEle = null;

    _throwErrors(type);
    const formEle = fieldTypes[type]({
        props: {
            ...defaultApi,
            ...placeholder,
            ...style,
        },
        onChange,
        params: {
            ...params,
            ...data,
        },
        value,
    });
    if (params.addType) {
        const formAdd = params.addType.map((val, i) => {
            _throwErrors(val.type);
            const _params = val.params || {};
            const _defaultApi = val.defaultApi || {};
            const _data = getData({
                type: val.type,
                params: _params,
            });
            const _placeholder = getPlaceholder({
                id: val.id,
                type: val.type,
                label: _params.label,
                placeholder: _defaultApi.placeholder,
            });
            const _style = getStyle({
                type: val.type,
                params: _params,
                style: {
                    ..._defaultApi.style,
                    marginRight: 8,
                    marginBottom: 8,
                },
            });
            return fieldTypes[val.type]({
                props: {
                    key: i,
                    ..._defaultApi,
                    ..._placeholder,
                    ..._style,
                },
                params: {
                    ..._params,
                    ..._data,
                },
                value,
                onChange,
                addType: val.type,
            });
        })

        ChildEle = (
            <Row type="flex" gutter={childGutter}>
                <Col {...childSpan.left}>
                    {_getFieldDecorator(formEle)}
                </Col>
                <Col {...childSpan.right}>
                    {formAdd}
                </Col>
            </Row>
        );
    } else {
        ChildEle = _getFieldDecorator(formEle);
    }

    return (
        <FormItem
            {...formItemApi}
            {...formItemLayout}
        >
            {ChildEle}
        </FormItem>
    )

}

HFormItem.propTypes = {
    form: propTypes.object.isRequired,
    field: propTypes.object.isRequired,
    layout: propTypes.string,
    col: propTypes.number,
};

export default HFormItemHOC(HFormItem);

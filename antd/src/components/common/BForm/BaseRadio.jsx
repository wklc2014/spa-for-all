/**
 * 单选框
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class BaseRadio extends Component {

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
            onChange: (e) => {
                onChange({ id, value: e.target.value });
            },
        };

        let ChildEle = null;
        switch (addType) {
            case 'button':
                ChildEle = (
                    <RadioGroup {...defaultProps}>
                        {data.map((v, i) => <RadioButton key={i} value={v.value}>{v.label}</RadioButton>)}
                    </RadioGroup>
                );
                break;
            default:
                ChildEle = (
                    <RadioGroup {...defaultProps}>
                        {data.map((v, i) => <Radio key={i} value={v.value}>{v.label}</Radio>)}
                    </RadioGroup>
                );
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

BaseRadio.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseRadio);

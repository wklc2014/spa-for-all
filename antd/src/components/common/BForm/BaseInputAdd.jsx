import React, { Component } from 'react';
import lodash from 'lodash';
import propTypes from 'prop-types';
import { Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

class BaseInputAdd extends Component {

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

        const defaultProps = { ...api };

        const inputValue = lodash.get(value, 'inputValue', undefined);
        let addValue = lodash.get(value, 'addValue', undefined);
        switch (addType) {
            case 'before-select':
                const selectOptionEle = data.map((v, i) => {
                    if (v.selected && addValue === undefined) {
                        addValue = v.value;
                    }
                    return <Option key={i} value={v.value}>{v.label}</Option>;
                });
                const addonBeforeProps = {
                    disabled: api.disabled,
                    dropdownMatchSelectWidth: api.dropdownMatchSelectWidth,
                    onChange: (e) => {
                        onChange({
                            id,
                            value: { inputValue, addValue: e },
                        });
                    },
                    style: { width: params.selectWidth },
                    value: addValue,
                };
                const addonBeforeEle = <Select {...addonBeforeProps}>{selectOptionEle}</Select>;
                Object.assign(defaultProps, { addonBefore: addonBeforeEle });
                break;
        }
        const ChildEle = (
            <Input
                {...defaultProps}
                onChange={(e) => {
                    onChange({
                        id,
                        value: { inputValue: e.target.value, addValue },
                    });
                }}
            />
        );

        return (
            <FormItem {...formItem}>
                {getFieldDecorator(id, {
                    ...options,
                    initialValue: inputValue,
                })(ChildEle)}
            </FormItem>
        );
    }
}

BaseInputAdd.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    formItem: propTypes.object,
    params: propTypes.object,
    api: propTypes.object,
    options: propTypes.object,
};

export default Form.create()(BaseInputAdd);

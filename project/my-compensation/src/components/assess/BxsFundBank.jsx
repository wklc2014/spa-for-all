import React from 'react';
import lodash from 'lodash';
import util from '../../common/util.js';
import {Form, Icon, Input, DatePicker, Select, Radio, Row, Col, Button, message} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import FormItemWraper from '../reportCase/common/FormItemWraper.jsx';

import {BxsCardTitle, BxsFundBankThead} from './common/data.js';
import PERMISSION from './common/permission.js';

const InputGroup = Input.Group;
const createForm = Form.create;
const Option = Select.Option;
const RadioGroup = Radio.Group;

let BxsFundBank = React.createClass({
    handleChange(key, value) {
        let newValue = value;
        if (key === 'inAccInst' && newValue === undefined) {
            newValue = '';
        }
        this.props.change(newValue, key);
    },
    render() {
        const {disabled, fund} = this.props;
        return (
            <Row type="flex">
                {Object.keys(BxsFundBankThead).map((v, i) => {
                    const currentObject = BxsFundBankThead[v];
                    if (currentObject.isHide) {
                        return null;
                    }
                    let span = '8';
                    let value = fund[v];
                    if (currentObject.isExt) {
                        value = lodash.get(fund, `extMap[${v}]`);
                    }
                    let params = {
                        disabled: disabled || currentObject.disabled
                    };
                    let childrenEle = null;
                    switch(currentObject.type) {
                        case 'textarea':
                            span = '24';
                            break;
                        case 'date':
                            if (value && value.time) {
                                value = new Date(fund[v].time);
                            } else {
                                value = undefined;
                            }
                            break;
                        case 'money':
                            if (value && value.amount) {
                                value = value.amount;
                            } else {
                                value = '';
                            }
                            break;
                        case 'enum':
                            if (currentObject.type === 'enum') {
                                childrenEle = currentObject.array.map((m, n) => {
                                    if (value === undefined && m.selected) {
                                        value = m.id;
                                    }
                                    return (
                                        <Option
                                            key={m.id}
                                            value={m.id}
                                        >
                                            {m.text}
                                        </Option>
                                    );
                                })
                            }
                            params = Object.assign({}, params, {
                                combobox: v === 'inAccInst',
                                allowClear: v === 'inAccInst'
                            });
                            break;
                    }
                    const formInputProps = {
                        key: `${v}`,
                        getFieldProps: this.props.form.getFieldProps,
                        change: this.handleChange,
                        type: currentObject.type,
                        id: v,
                        value,
                        colspan: span,
                        label: currentObject.name,
                        rules: [{
                            required: currentObject.required
                        }],
                        params
                    }
                    return (
                        <FormItemWraper
                            {...formInputProps}
                        >
                            {childrenEle}
                        </FormItemWraper>
                    )
                })}
            </Row>
        );
    }
});

BxsFundBank = createForm()(BxsFundBank);

export default BxsFundBank;

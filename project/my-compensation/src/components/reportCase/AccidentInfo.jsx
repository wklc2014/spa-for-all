import React, {Component} from 'react';
import lodash from 'lodash';
import {Form, Select, Row, Col, Button} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

import CardTitle from '../common/CardTitle.jsx';
import FormItemWraper from './common/FormItemWraper.jsx';
import {AccidentData} from './common/const.js';

let AccidentInfo = React.createClass({
    render() {
        const {title, data, info, accidentType, disabled} = this.props;
        const {accidentHead} = data;
        if (!accidentHead || !Object.keys(accidentHead).length) {
            return null;
        }
        return (
            <div className="cardWraper">
                <CardTitle data={title} />
                <Row type="flex">
                    {Object.keys(accidentHead).map((v, i) => {
                        const currentObject = accidentHead[v];
                        if (currentObject.isHide) {
                            return null;
                        }
                        let span = '8';
                        if (currentObject.type === 'textarea') {
                            span = '24';
                        }
                        let value = lodash.get(info, `${accidentType}[${accidentType}-${v}]`, undefined);
                        let childrenEle = null;
                        let params = {
                            disabled: disabled || currentObject.disabled
                        };
                        if (currentObject.type === 'enum') {
                            childrenEle = currentObject.array.map((m, n) => {
                                if (m.id === value) {
                                    value = m.text;
                                }
                                return (
                                    <Option
                                        key={m.id}
                                        value={m.text}
                                    >
                                        {m.text}
                                    </Option>
                                );
                            })
                            params = Object.assign({}, params, {
                                combobox: true,
                                allowClear: true
                            })
                        }

                        let cascaderValue = [];
                        if (currentObject.type === 'cascader') {
                            cascaderValue = currentObject.array;
                        }
                        const formInputProps = {
                            key: `${v}`,
                            getFieldProps: this.props.form.getFieldProps,
                            change: this.props.change,
                            type: currentObject.type,
                            id: `${accidentType}-${v}`,
                            value,
                            cascaderValue,
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
            </div>
        );
    }
});

AccidentInfo = Form.create()(AccidentInfo);

export default AccidentInfo;

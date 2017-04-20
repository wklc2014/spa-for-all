import lodash from 'lodash';
import React from 'react';
import {Modal, Form, Row, Col, message, Select, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

import FormItemWraper from '../reportCase/common/FormItemWraper.jsx';

let BxsVoucherUpload = React.createClass({
    render() {
        const {voucherRule, show} = this.props;
        const hasEmail = lodash.indexOf(voucherRule.value.sendType, 'mail') !== -1;
        return (
            <Modal
                width={600}
                title="补传凭证"
                visible={show}
                footer={false}
                onCancel={this.props.onCancel}
            >
                <Row type="flex">
                    {Object.keys(voucherRule.rules).map((v, i) => {
                        const currentObject = voucherRule.rules[v];
                        if (currentObject.isHide) {
                            return null;
                        }
                        let value = voucherRule.value[v];
                        let childrenEle = null;
                        let params = {
                            disabled: currentObject.disabled
                        };
                        let wraperParams = {};
                        if (currentObject.type === 'enum') {
                            let helpText = '';
                            childrenEle = currentObject.array.map((m, n) => {
                                if (m.selected) {
                                    value = value || m.id;
                                }
                                if (value === m.id && m.desc) {
                                    helpText = m.desc.split('<br/>').map((t, h) => {
                                        return <p  key={h}>{t}</p>;
                                    });
                                }
                                return (
                                    <Option
                                        key={m.id}
                                        value={m.id}
                                    >
                                        {m.text}
                                    </Option>
                                );
                            });
                            params = Object.assign({}, params, {
                                combobox: false
                            });
                            wraperParams = Object.assign({}, wraperParams, {
                                help: helpText
                            });
                        } else if (currentObject.type === 'checkbox') {
                            const checkboxOptions = [];
                            currentObject.array.forEach((m, n) => {
                                checkboxOptions.push({
                                    label: m.text,
                                    value: m.id
                                });
                                if (!value && m.selected && lodash.indexOf(value, m.id) === -1) {
                                    value.push(m.id);
                                }
                            })
                            params = Object.assign({}, params, {
                                options: checkboxOptions
                            })
                        }
                        const formInputProps = {
                            key: `voucherRule-${v}`,
                            getFieldProps: this.props.form.getFieldProps,
                            change: this.props.change,
                            type: currentObject.type,
                            id: v,
                            value,
                            colspan: '1',
                            label: currentObject.name,
                            rules: [{
                                required: currentObject.required
                            }],
                            params,
                            wraperParams
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
                {hasEmail ? (
                    <Row>
                        <FormItemWraper
                            getFieldProps={this.props.form.getFieldProps}
                            change={this.props.change}
                            type="string"
                            id="mail"
                            value={voucherRule.value['mail']}
                            colspan="1"
                            label="Email地址"
                            rules={[{
                                required: true
                            }, {
                                type: 'email',
                                message: '请输入正确的邮箱地址'
                            }]}
                        />
                    </Row>
                ) : null}
                <Row>
                    <Col>
                        <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                            <Button
                                type="primary"
                                onClick={this.props.submit}
                            >
                                提交
                            </Button>
                        </FormItem>
                    </Col>
                </Row>
            </Modal>
        )
    }
});

BxsVoucherUpload = Form.create()(BxsVoucherUpload);

export default BxsVoucherUpload;

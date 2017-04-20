import React from 'react';
import {Row, Col, Form, Select, Input, Button, message} from 'antd';
const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
const OptGroup = Select.OptGroup;
import CardTitle from '../common/CardTitle.jsx';
import {smsNoteTemplateData, cardTitleData, regData} from './staticData/data.js';
import {formItemLayout} from '../assess/common/data.js';
import lodash from 'lodash';

const SmsNoteTemplateEle = (data) => {
    const idList = data.id;
    return idList.map((id) => {
        const type = data.type[id];
        const contentEle = type.keys.map((v) => {
            return <Option key={v} value={v}>{data.content[v]}</Option>;
        });
        return (
            <OptGroup label={type.label} key={id}>
                {contentEle}
            </OptGroup>
        );
    });
};

let SmsSend = React.createClass({
    getInitialState() {
        const phone = this.props.phone || '';
        return {
            phone,
            template: '',
            content: ''
        }
    },
    willReplaceSmsNoteTemplate() {
        // 内定需要替换的模板key
        // 需要替换的模板值从props取
        const {amount} = this.props;
        return {
            'type-3-1': amount,
            'type-3-2': amount
        }
    },
    handleChange(value, key) {
        const newState = {};
        if (key === 'template') {
            // 此处可以做模板值得对应替换
            // 此处用lodash的模板替换
            newState[key] = value;
            const replaceObject = this.willReplaceSmsNoteTemplate();
            const hasKey = lodash.get(replaceObject, value, 'noKey');
            let text = smsNoteTemplateData.document[value];
            if (hasKey !== 'noKey') {
                const compiled = lodash.template(text);
                const replaceValue = replaceObject[value] || '';
                text = compiled({ 'variable': replaceValue});
            }
            this.props.form.setFieldsValue({
                content: text
            });
            newState['content'] = text;
        } else {
            newState[key] = value;
        }
        this.setState(newState);
    },
    handleClick() {
        const {taskId} = this.props;
        const {phone} = this.state;
        const text = this.state.content;
        if (taskId && phone && text) {
            this.props.sendSms({
                taskId,
                phone,
                content: text
            }, (resp) => {
                message.info('发送短信通知成功');
                this.setState({
                    content: '',
                    template: ''
                })
                this.props.getSmsList({taskId})
            })
        }
    },
    checkCanSendNote() {
        const {taskId} = this.props;
        const {template, content, phone} = this.state;
        const isPhone = regData.phone.test($.trim(phone));
        const isTemplate = !!template;
        const isContent = !!content;
        return !(taskId && isPhone && isTemplate && isContent);
    },
    checkIsPhone(rule, value, callback) {
        const data = $.trim(value);
        if (data && !regData.phone.test(data)) {
            callback('您输入的手机号码不正确');
        } else {
            callback();
        }
    },
    render() {
        const {template, content, phone} = this.state;
        const {amount} = this.props;
        const {getFieldProps} = this.props.form;
        const formItemColSpan = formItemLayout.colOf1;
        const formItemOffsetSpan = formItemLayout.colOf1.labelCol.span;
        const formItemProps = {
            size: 'default'
        };
        const isCanSendNote = this.checkCanSendNote();
        return (
            <div className="cardWraper">
                <CardTitle data={cardTitleData.sendNote} />
                <Form horizontal>
                    <FormItem
                        {...formItemColSpan}
                        label="手机号码"
                    >
                        <Input
                            {...formItemProps}
                            {...getFieldProps('phone', {
                                rules: [{
                                    required: true,
                                    message: '请输入手机号码'
                                }, {
                                    validator: this.checkIsPhone
                                }],
                                onChange: (e) => {
                                    this.handleChange(e.target.value, 'phone');
                                }
                            })}
                            value={phone}
                            placeholder="请输入手机号码"
                        />
                    </FormItem>
                    <FormItem
                        {...formItemColSpan}
                        label="短信模板"
                    >
                        <Select
                            {...getFieldProps('template', {
                                rules: [{
                                    required: true,
                                    whitespace: true
                                }],
                                onChange: (e) => {
                                    this.handleChange(e, 'template');
                                }
                            })}
                            style={{ width: '100%' }}
                            value={template}
                            dropdownMatchSelectWidth={false}
                        >
                            {SmsNoteTemplateEle(smsNoteTemplateData)}
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemColSpan}
                        label="短信内容"
                    >
                        <Input
                            {...getFieldProps('content', {
                                rules: [{
                                    required: true,
                                    whitespace: true,
                                    message: '请选择短信模板或者直接输入短信内容'
                                }],
                                onChange: (e) => {
                                    this.handleChange(e.target.value, 'content');
                                }
                            })}
                            value={content}
                            type="textarea"
                            rows={5}
                        />
                    </FormItem>
                    <FormItem wrapperCol={{ span: 16, offset: formItemOffsetSpan }}>
                        <Button
                            onClick={this.handleClick}
                            type="ghost"
                            disabled={isCanSendNote}
                        >
                            发送
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
});

SmsSend = createForm()(SmsSend);

export default SmsSend;

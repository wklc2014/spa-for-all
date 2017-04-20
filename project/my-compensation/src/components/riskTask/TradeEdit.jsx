import React from 'react';

import {Row, Col, Form, Select, Radio, Button, Input, Tag, message} from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

import {tagsListChoose} from './staticData/index.js';

let TradeEdit = React.createClass({
    handleSubmit() {
        const newData = this.props.data;
        const formData = this.props.form.getFieldsValue();
        newData.labelInfoMap.ORDER_ATTR = JSON.stringify(formData.formTagsList);
        const memo = $.trim(formData.formRemark);
        if (memo) {
            newData.memo = memo;
            this.props.ok(newData);
        } else {
            message.error('备注信息必填!');
        }
    },
    render() {
        const tagsMultiple = true;
        let tagsList = [];
        if (this.props.data.labelInfoMap) {
            tagsList = JSON.parse(this.props.data.labelInfoMap.ORDER_ATTR);
        }
        const remark = this.props.data.memo;
        const { getFieldProps } = this.props.form;
        const selectColSpan = {
            labelCol: { span: 6 },
            wrapperCol: { span: 12 }
        };
        let selectDefValue = tagsMultiple ? [] : '';
        tagsList.map((val, i) => {
            if (tagsMultiple) {
                selectDefValue.push(val);
            } else {
                selectDefValue = val;
            }
        });
        const optionEle = Object.keys(tagsListChoose).map((val, i) => {
            return (
                <Option
                    key={val}
                    value={val}
                >
                    {tagsListChoose[val].text}
                </Option>
            );
        });
        const textArray = ['错误', '正确'];
        return (
            <div>
                <FormItem
                    label="智慧标签"
                    {...selectColSpan}
                >
                    <Select
                        multiple={tagsMultiple}
                        style={{ width: '100%' }}
                        {...getFieldProps('formTagsList', {
                            initialValue: selectDefValue
                        })}
                    >
                        {optionEle}
                    </Select>
                </FormItem>
                <FormItem
                    label="备注信息"
                    {...selectColSpan}
                >
                    <Input
                        type="textarea"
                        {...getFieldProps('formRemark', {
                            initialValue: remark
                        })}
                    />
                </FormItem>
                <Row>
                    <Col offset={6}>
                        <Button
                            type="primary"
                            style={{marginRight: 10}}
                            onClick={this.handleSubmit}
                        >
                            确定
                        </Button>
                        <Button onClick={this.props.cancle}>
                            取消
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
});

TradeEdit = createForm()(TradeEdit);

export default TradeEdit;

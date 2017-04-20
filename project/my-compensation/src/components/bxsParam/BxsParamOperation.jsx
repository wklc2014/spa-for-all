import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Button, Select, message, Row, Col, Form, DatePicker, Tooltip, Icon, Input, Breadcrumb } from 'antd';
import util from '../../common/util.js';
import { OperationType, ConstStatus } from './staticData/index.js';

const FormItem = Form.Item;
const Option = Select.Option;

let BxsParamOperation = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            paramData: this.props.paramData,
        };
    },
    componentWillMount() {
        if(this.props.mark === 'add') {
            this.setState({
                paramData:{}
            })
        }
    },
    handleSave(e) {
        e.preventDefault();
        const {id, insuranceType} = this.props.paramData;

        const { paramData } = this.state;

        if(this.props.mark === 'add'){
            paramData.gmtCreate = new Date().getTime();
        }
        paramData.gmtModified = new Date().getTime();

        this.props.form.setFieldsValue(paramData);

        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            this.props.save(this.props.mark,paramData);
            if(this.props.mark === 'add'){
                this.setState({
                    paramData:{}
                })
            }
        });
    },
    handleReset(e) {
        e.preventDefault();
        this.setState({
            paramData:{}
        })
    },
    change(field,value) {
        let data = this.state.paramData;
        data[field] = value;
        this.setState({
            paramData: data
        })
    },
    switchCompent() {
        this.props.switchCompent('query',this.props.mark);
    },
    render() {

        const { getFieldProps } = this.props.form;

        const mdFormItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 }
        };

        const gmtModified = util.isEmptyObject(this.state.paramData.gmtModified) ? new Date().getTime() : this.state.paramData.gmtModified;
        const gmtCreate = util.isEmptyObject(this.state.paramData.gmtCreate) ? new Date().getTime() : this.state.paramData.gmtCreate;
        const statusEle = Object.keys(ConstStatus).map((key,i) => {
            return <Option key={i} value={key}>{ConstStatus[key]}</Option>
        });
        const denyDisable = (this.props.mark === 'edit' ? true : false);

        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="javascript:;" style={{fontSize:16}} onClick={this.switchCompent}>配置管理</a></Breadcrumb.Item>
                        <Breadcrumb.Item>{OperationType[this.props.mark]}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form style={{marginTop:20}} horizontal>
                        <Row>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="编号"
                                >
                                    <Input
                                        placeholder="自动生成"
                                        disabled
                                        {...getFieldProps('id', {
                                            onChange:(e)=> {
                                                this.change('id',e.target.value)
                                            }
                                        })}
                                        name="id"
                                        value={this.state.paramData.id}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="编码"
                                >
                                    <Input
                                        placeholder="请输入编码"
                                        disabled={denyDisable}
                                        {...getFieldProps('code', {
                                            onChange:(e)=> {
                                                this.change('code',e.target.value)
                                            }
                                        })}
                                        name="code"
                                        value={this.state.paramData.code}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="父节点编码"
                                >
                                    <Input
                                        placeholder="请输入父节点编码"
                                        disabled={denyDisable}
                                        {...getFieldProps('parentCode', {
                                            onChange:(e)=> {
                                                this.change('parentCode',e.target.value)
                                            }
                                        })}
                                        name="parentCode"
                                        value={this.state.paramData.parentCode}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="类型"
                                >
                                    <Input
                                        placeholder="请输入类型"
                                        disabled={denyDisable}
                                        {...getFieldProps('type', {
                                            onChange:(e)=> {
                                                this.change('type',e.target.value)
                                            }
                                        })}
                                        name="type"
                                        value={this.state.paramData.type}
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="值"
                                >
                                    <Input
                                        placeholder="请输入值"
                                        rows={4}
                                        autosize
                                        {...getFieldProps('value', {
                                            onChange:(e)=> {
                                                this.change('value',e.target.value)
                                            }
                                        })}
                                        value={this.state.paramData.value}
                                        name="value"
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="备注"
                                >
                                    <Input
                                        placeholder="请输入备注"
                                        {...getFieldProps('memo', {
                                            onChange:(e)=> {
                                                this.change('memo',e.target.value)
                                            }
                                        })}
                                        name="memo"
                                        value={this.state.paramData.memo}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="状态"
                                >
                                    <Select
                                        placeholder="请选择状态"
                                        {...getFieldProps('status', {
                                            onChange:(e)=> {
                                                this.change('status',e)
                                            }
                                        })}
                                        value={this.state.paramData.status}
                                    >
                                        {statusEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    style={{display: 'none'}}
                                    label="操作员"
                                >
                                    <Input
                                        placeholder="自动获取"
                                        disabled
                                        {...getFieldProps('operatorNick', {
                                            onChange:(e)=> {
                                                this.change('operatorNick',e.target.value)
                                            }
                                        })}
                                        value={this.state.paramData.operatorNick}
                                        name="operatorNick"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    style={{display: 'none'}}
                                    label="修改时间"
                                >
                                    <Input
                                        disabled
                                        {...getFieldProps('gmtModified')}
                                        value={this.state.paramData.gmtModified}
                                        name="gmtModified"
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    style={{display: 'none'}}
                                    label="创建时间"
                                >
                                    <Input
                                        disabled
                                        {...getFieldProps('gmtCreate')}
                                        value={this.state.paramData.gmtCreate}
                                        name="gmtCreate"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{textAlign:'right'}}>
                                <FormItem
                                    wrapperCol={{span: 22, offset: 1}}
                                >
                                    <Button type="ghost" disabled={denyDisable} onClick={this.handleReset}>重置</Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" onClick={this.handleSave}>保存</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
});

BxsParamOperation = Form.create()(BxsParamOperation);

export default BxsParamOperation;

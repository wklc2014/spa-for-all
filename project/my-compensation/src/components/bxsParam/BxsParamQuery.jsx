import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Button, Table, Select, Row, Col, Form, DatePicker, Input} from 'antd';
import util from '../../common/util.js';
import {sidebarConfig} from '../common/const.js';
import CardTitle from '../common/CardTitle.jsx';
import { ConstStatus } from './staticData/index.js';

const FormItem = Form.Item;
const Option = Select.Option;

let BxsParamQuery = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        let fieldsValue = this.props.form.getFieldsValue();
        for(let field in fieldsValue){
            if(!fieldsValue[field] || util.isEmptyObject($.trim(fieldsValue[field]))){
                delete fieldsValue[field]
            }
        }
        this.props.query(fieldsValue,1);
    },
    operation(id) {
        if(id) {
            this.props.operation(id,'edit');
        }else{
            this.props.operation(id,'add');
        }
    },
    switchCompent(id) {
        this.props.switchCompent('detail',id);
    },
    render() {
        const columns = [{
            title: '编号',
            dataIndex: 'id',
            key: 'id',
            width:'5%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '编码',
            dataIndex: 'code',
            key: 'code',
            width:'10%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '父节点编码',
            dataIndex: 'parentCode',
            key: 'parentCode',
            width:'10%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width:'8%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '值',
            dataIndex: 'value',
            key: 'value',
            width:'8%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '描述',
            dataIndex: 'memo',
            key: 'memo',
            width:'8%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            width:'5%',
            render: (text, record, index) => (
                <div>{ConstStatus[text]}</div>
            )
        },{
            title: '操作员',
            dataIndex: 'operatorNick',
            key: 'operatorNick',
            width:'8%',
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '创建时间',
            dataIndex: 'gmtCreate',
            key: 'gmtCreate',
            width: 70,
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '修改时间',
            dataIndex: 'gmtModified',
            key: 'gmtModified',
            width: 70,
            render: (text, record, index) => (
                <div>{text}</div>
            )
        },{
            title: '操作',
            dataIndex: 'edit',
            key: 'edit',
            width: 70,
            render: (text, record, index) =>
                <div>
                    <Button
                        type="ghost"
                        size="small"
                        disabled={globalDisable}
                        onClick={this.switchCompent.bind(this,record.id)}
                    >
                        查看详细
                    </Button>
                    <Button
                        style={{marginLeft:10}}
                        type="ghost"
                        size="small"
                        disabled={globalDisable}
                        onClick={this.operation.bind(this, record.id)}
                    >
                        编辑
                    </Button>
                </div>
        }];

        const { getFieldProps } = this.props.form;
        const globalDisable = false;

        const _this = this;
        const pagination = {
            total: this.props.pagination.total,
            pageSize: this.props.pagination.pageSize,
            current: this.props.pagination.current,
            onChange(current) {
                const fieldsValue = _this.props.form.getFieldsValue();
                _this.props.query(fieldsValue,current);
            }
        };

        const statusEle = Object.keys(ConstStatus).map((key,i) => {
            return <Option key={i} value={key}>{ConstStatus[key]}</Option>
        });

        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <CardTitle data={sidebarConfig.bxsParam} />
                    <Form method="post">
                        <Row>
                            <Col sm={5}>
                                <FormItem
                                    label="编号"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入编号"  {...getFieldProps('id')} size="default" />
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    label="编码"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入编码"  {...getFieldProps('code')} size="default" />
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    label="父节点编码"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入父节点编码"  {...getFieldProps('parentCode')} size="default" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5}>
                                <FormItem
                                    label="类型"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入类型"  {...getFieldProps('type')} size="default" />
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    label="状态"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select
                                        placeholder="请选择状态"
                                        size="default"
                                        {...getFieldProps('status')}
                                    >
                                        <Option value="">全部</Option>
                                        {statusEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    wrapperCol={{offset: 8, span: 16 }}
                                >
                                    <Button
                                        size="default"
                                        type="primary"
                                        onClick={this.operation.bind(this,false)}
                                        disabled={globalDisable}
                                    >
                                        添加
                                    </Button>
                                    <Button style={{marginLeft:15}} size="default" onClick={this.handleSubmit} type="primary" htmlType="submit" >查询</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>

                    <div className="config-type-query">
                        <span style={{background: '#fff'}}>
                            <Table
                                className="constumTablePlaceholder"
                                rowKey="id"
                                pagination={pagination}
                                locale = {
                                  {
                                      emptyText: this.props.emptyText
                                  }
                                }
                                dataSource={this.props.dataSource}
                                columns={columns}
                                bordered
                            />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
});

BxsParamQuery = Form.create()(BxsParamQuery);

export default BxsParamQuery;

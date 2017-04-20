import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Button, Modal, Table, Select, message, Row, Col, Form, DatePicker, Input, Popconfirm } from 'antd';
import {sidebarConfig} from '../common/const.js';
import CardTitle from '../common/CardTitle.jsx';
import {ConstInsuranceType, ConstScene, ConstGroupCode, ConstStatus, ConstEnumAll} from './staticData/index.js';
import util from '../../common/util.js';
import './BxsRule.less';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

let BxsRuleQuery = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            queryParam: this.props.queryParam
        }
    },
    handleSubmit(e) {
        e.preventDefault();
        const fieldsValue = this.state.queryParam;
        Object.keys(fieldsValue).map((key, i) => {
            if(key === 'groupCode' || key === 'insuranceType' || key === 'scene'){
                const value = ConstEnumAll[fieldsValue[key]]
                if (value !== undefined) {
                    fieldsValue[key] = value
                }
            }
        });
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
    onChange(key, e) {
        const param = this.state.queryParam;
        if(e === undefined) {
           param[key] = '';
        } else if (e.target) {
            param[key] = e.target.value;
        }else{
            param[key] = e;
        }
        this.setState({
            queryParam: param
        })
    },
    render() {
        const { getFieldProps } = this.props.form;
        const { id, scene, code, groupCode, insuranceType, status} = this.state.queryParam;

        const globalDisable = this.props.globalDisable;
        const columns = [{
            title: '编号',
            dataIndex: 'id',
            key: 'id',
            render: (text, record, index) => (
                <div style={{width:70}}>{text}</div>
            )
        },{
            title: '编码',
            dataIndex: 'code',
            key: 'code',
            render: (text, record, index) => (
                <div style={{width:100}}>{text}</div>
            )
        },{
            title: '险种',
            dataIndex: 'insuranceType',
            key: 'insuranceType',
            render: (text, record, index) => (
                <div style={{width:100}}>{util.isEmptyObject(ConstInsuranceType[text]) ? text : ConstInsuranceType[text]}</div>
            )
        },{
            title: '场景',
            dataIndex: 'scene',
            key: 'scene',
            render: (text, record, index) => (
                <div style={{width:100}}>{util.isEmptyObject(ConstScene[text]) ? text : ConstScene[text]}</div>
            )
        },{
            title: '分组',
            dataIndex: 'groupCode',
            key: 'groupCode',
            render: (text, record, index) => (
                <div style={{width:100}}>{util.isEmptyObject(ConstGroupCode[text]) ? text : ConstGroupCode[text]}</div>
            )
        },{
            title: '条件',
            dataIndex: 'conditionScript',
            key: 'conditionScript',
            render: (text, record, index) => (
                <div style={{minWidth:150}}>
                    {(util.isEmptyObject(text) || text.length < 100) ? text : text.substring(0, 100)+' ......'}
                </div>
            )
        },{
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            render: (text, record, index) => (
                <div style={{minWidth:150}}>
                    {(util.isEmptyObject(text) || text.length < 100) ? text : text.substring(0, 100)+' ......'}
                </div>
            )
        },{
            title: '服务信息',
            dataIndex: 'serviceBean',
            key: 'serviceBean',
            render: (text, record, index) => (
                <div style={{minWidth:150}}>
                    {(util.isEmptyObject(text) || text.length < 100) ? text : text.substring(0, 100)+' ......'}
                </div>
            )
        },{
            title: '备注',
            dataIndex: 'memo',
            key: 'memo',
            render: (text, record, index) => (
                <div style={{width:100}}>{text}</div>
            )
        },{
            title: '优先级',
            dataIndex: 'effectOrder',
            key: 'effectOrder',
            render: (text, record, index) => (
                <div style={{width:70}}>{text}</div>
            )
        },{
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => (
                <div style={{width:70}}>{ConstStatus[text]}</div>
            )
        },{
            title: '创建时间',
            dataIndex: 'gmtCreate',
            key: 'gmtCreate',
            render: (text, record, index) => (
                <div style={{width:70}}>{text}</div>
            )
        }, {
            title: '修改时间',
            dataIndex: 'gmtModified',
            key: 'gmtModified',
            render: (text, record, index) => (
                <div style={{width:70}}>{text}</div>
            )
        },{
            title: '操作',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record, index) =>
                <div style={{width:120}}>
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

        const insuranceTypeEle = Object.keys(ConstInsuranceType).map((key,i) => {
            return <Option key={i} value={ConstInsuranceType[key]}>{ConstInsuranceType[key]}</Option>
        });

        const sceneEle = Object.keys(ConstScene).map((key,i) => {
            return <Option key={i} value={ConstScene[key]}>{ConstScene[key]}</Option>
        });

        const groupCodeEle = Object.keys(ConstGroupCode).map((key,i) => {
            return <Option key={i} value={ConstGroupCode[key]}>{ConstGroupCode[key]}</Option>
        });

        const statusEle = Object.keys(ConstStatus).map((key,i) => {
            return <Option key={i} value={key}>{ConstStatus[key]}</Option>
        });

        const _this = this;

        const pagination = {
            total: this.props.pagination.total,
            pageSize: this.props.pagination.pageSize,
            current: this.props.pagination.current,
            onChange(current) {
                const fieldsValue = _this.state.queryParam;
                _this.props.query(fieldsValue,current);
            }
        };

        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <CardTitle data={sidebarConfig.bxsRule} />
                    <Form onSubmit={this.handleSubmit} method="post">
                        <Row>
                            <Col sm={5}>
                                <FormItem
                                    label="编号"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入编号"  {...getFieldProps('id')} size="default" value={id} onChange={this.onChange.bind(this,"id")}/>
                                </FormItem>
                                <FormItem
                                    label="场景"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择场景"
                                        combobox
                                        size="default"
                                        {...getFieldProps('scene')}
                                        value={util.isEmptyObject(ConstScene[scene]) ? scene : ConstScene[scene]}
                                        onChange={this.onChange.bind(this,"scene")}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {sceneEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    label="编码"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Input placeholder="请输入编码" {...getFieldProps('code')} size="default" value={code} onChange={this.onChange.bind(this,"code")} />
                                </FormItem>
                                <FormItem
                                    label="分组"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择分组"
                                        combobox
                                        size="default"
                                        {...getFieldProps('groupCode')}
                                        value={util.isEmptyObject(ConstGroupCode[groupCode]) ? groupCode : ConstGroupCode[groupCode]}
                                        onChange={this.onChange.bind(this,"groupCode")}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {groupCodeEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    label="险种"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择险种"
                                        combobox
                                        size="default"
                                        {...getFieldProps('insuranceType')}
                                        value={util.isEmptyObject(ConstInsuranceType[insuranceType]) ? insuranceType : ConstInsuranceType[insuranceType]}
                                        onChange={this.onChange.bind(this,"insuranceType")}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {insuranceTypeEle}
                                    </Select>
                                </FormItem>
                                <FormItem
                                    label="状态"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                >
                                    <Select
                                        placeholder="请选择状态"
                                        size="default"
                                        {...getFieldProps('status')}
                                        value={status}
                                        onChange={this.onChange.bind(this,"status")}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        <Option value="">全部</Option>
                                        {statusEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col sm={5}>
                                <FormItem
                                    wrapperCol={{offset: 4, span: 16 }}
                                >
                                    <Button
                                        size="default"
                                        type="primary"
                                        onClick={this.operation.bind(this,false)}
                                        disabled={globalDisable}
                                    >
                                        添加
                                    </Button>
                                </FormItem>
                                <FormItem
                                    wrapperCol={{offset: 4, span: 16 }}
                                >
                                    <Button size="default" onClick={this.handleSubmit} type="primary" htmlType="submit" >查询</Button>
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

BxsRuleQuery = Form.create()(BxsRuleQuery);

export default BxsRuleQuery;

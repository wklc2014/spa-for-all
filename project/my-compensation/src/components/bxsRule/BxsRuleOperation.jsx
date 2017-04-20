import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Button, Select, message, Row, Col, Form, DatePicker, Tooltip, Icon, Input, Breadcrumb, Modal, Table, InputNumber, Cascader } from 'antd';
import {OperationType,ConstStatus,ConstInsuranceType, ConstScene, ConstGroupCode, ConstEnumAll} from './staticData/index.js';
import util from '../../common/util.js';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';


const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

let BxsRuleOperation = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            paramData: this.props.paramData
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

        if(util.isEmptyObject(paramData.gmtCreate)) {
            paramData.gmtCreate = new Date().getTime();
            paramData.gmtModified = new Date().getTime();
        }

        this.props.form.setFieldsValue(paramData);

        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            Object.keys(paramData).map((key, i) => {
                if(key === 'groupCode' || key === 'insuranceType' || key === 'scene'){
                    const value = ConstEnumAll[paramData[key]]
                    if (value !== undefined) {
                        paramData[key] = value
                    }
                }
            });
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
    handlePreview(content, group, e) {

        let data = {};
        try {
            data = JSON.parse(content)
        } catch (e) {
            Modal.error({
                title: '出错了',
                width: '80%',
                content: (
                    <div>
                        {content}<br /><strong>不是有效的JSON格式！</strong> <br />
                    </div>
                )
            });
        }

        if(util.isEmptyObject(data)){
            return;
        }

        if("LIST_HEAD" === group) {
            let columns = [];
            Object.keys(data).map((key,i) => {
                columns.push({
                    title: data[key].name,
                    dataIndex: key,
                    key,
                });
            });
            const jsonTemplet = JSON.stringify({
                "transDate": {
                    "type": "date",
                    "name": "交易日期",
                    "required": true
                },
                "num": {
                    "type": "integer",
                    "name": "订单笔数 (笔)",
                    "required": true,
                    "total": true
                },
                "lineCount": {
                    "type": "number",
                    "name": "订单汇总金额 (元)",
                    "val": "$.amount*$.num",
                    "total": true
                },
                "orderPlace": {
                    "type": "string",
                    "name": "订单地点",
                    "required": false
                },
                "lossChannel": {
                    "type": "enum",
                    "name": "销赃渠道",
                    "required": false,
                    "array": [
                        {
                            "counterTransfer": "柜台转账",
                            "selected": true
                        },
                        {
                            "counterWithdrawals": "柜台取款",
                            "selected": false
                        }
                    ]
                }
            }, null, 4);
            Modal.info({
                title: '预览信息',
                width: '80%',
                content: (
                    <div>
                        <Table
                            className="constumTablePlaceholder"
                            bordered
                            columns={columns}
                        />
                        <div style={{marginTop:'20px', lineHeight:'26px'}}>
                            <h3>配置说明</h3>
                            <p style={{float: 'left', backgroundColor: '#eee', padding: '0 10px', marginRight: 20}}>
                                <strong>示例代码：</strong>
                                <pre>{jsonTemplet}</pre>
                            </p>
                            <p>
                               <storg> type： </storg>
                               <span>数据类型，目前支持的数据类型有string（字符串）、integer（整数）、
                                number（数字）、date（日期）、enum（枚举）</span>
                            </p>
                            <p>
                               <storg> name： </storg>
                               <span>字段名称</span>
                            </p>
                            <p>
                               <storg> required： </storg>
                               <span>是否为必填项（若无或false则为非必填）</span>
                            </p>
                            <p>
                               <storg> total： </storg>
                               <span>是否需要进行列汇总（用于number和integer类型）</span>
                            </p>
                            <p>
                               <storg> val： </storg>
                               <span>
                               计算方式（若无则表示值为手动输入,$符号表示字段值是在某个对象的属性中获取，以便进行计算，用于用于number和integer类型）</span>
                            </p>
                            <p>
                               <storg> total： </storg>
                               <span>是否需要进行列汇总（用于number和integer类型）</span>
                            </p>
                            <p>
                               <storg> outKey： </storg>
                               <span>对应的外部系统的outKey</span>
                            </p>
                            <p>
                               <storg> isExt： </storg>
                               <span>该字段是否会被放在扩展字段中</span>
                            </p>
                            <strong>
                                注：
                            </strong>
                            <p>
                                enum（枚举类型）, 显示为下拉列表, selected为true表示选中（返回结果中只能有一条数据为 true）
                            </p>

                        </div>
                    </div>
                ),
                onOk() {}
            });
        }
        if("CARD_PARAMS" === group) {
            const mdFormItemLayout = {
                labelCol: { span: 6 },
                wrapperCol: { span: 16 }
            }
            const conEleStyle = {
                marginBottom:10
            }
            const lableStyle = {
                width:'60px',
                textAlign:'right',
                display:'inline-block',
                paddingRight:3
            }
            const conEle = Object.keys(data).map((key,i) => {
                const placeholder = `请选择${data[key].name}`;
                switch (data[key].type) {
                    case 'money':
                        return <Col style={conEleStyle} key={i} offset={1} span={5}>
                                <span style={lableStyle}>{data[key].name}:</span>
                                <InputNumber step={0.1} style={{maxWidth:'70%', width:'100%'}}/>
                        </Col>
                        break;
                    case 'date':
                        return <Col style={conEleStyle} key={i} offset={1} span={5}>

                                <span style={lableStyle}>{data[key].name}:</span>
                                <DatePicker style={{maxWidth:'70%', width:'100%'}}/>
                        </Col>
                        break;
                    case 'enum':
                        const option = data[key].array;
                        let selectedValue = "";
                        const optionEles = option.map((item,i) => {
                            if(item.selected) {
                                selectedValue = item.id;
                            }
                            return <Option key={i} value={item.id}>{item.text}</Option>
                        });
                        return <Col style={conEleStyle} key={i} offset={1} span={5}>
                                <span style={lableStyle}>{data[key].name}:</span>
                                <Select placeholder={placeholder} defaultValue={selectedValue} style={{maxWidth:'70%', width: '100%'}}>
                                    {optionEles}
                                </Select>
                        </Col>
                        break;
                    case 'cascader':
                        const options = data[key].array;
                        return (
                            <Col style={conEleStyle} key={i} offset={1} span={5}>
                                <span style={lableStyle}>{data[key].name}:</span>
                                <Cascader
                                    placeholder={placeholder}
                                    allowClear={false}
                                    options={options}
                                />
                            </Col>
                        )
                        break;
                    case 'textarea':
                        return <Col style={conEleStyle} key={i} offset={1} span={5}>
                                <span style={lableStyle}>{data[key].name}:</span>
                                <Input type="textarea" style={{maxWidth:'70%', width:'100%'}} />
                            </Col>
                        break;
                    default:
                        return <Col style={conEleStyle} key={i} offset={1} span={5}>
                                    <span style={lableStyle}>{data[key].name}:</span>
                                    <Input style={{maxWidth:'70%', width:'100%'}} />
                            </Col>
                }
            });
            const jsonTemplet = JSON.stringify({
                "objectId": {
                    "type": "string",
                    "name": "银行卡号"
                },
                "lossAmount": {
                    "type": "money",
                    "name": "损失金额"
                },
                "gmtAccident": {
                    "type": "date",
                    "name": "出险时间"
                },
                "description": {
                    "type": "textarea",
                    "name": "用户自述",
                },
                "bankName": {
                    "type": "enum",
                    "name": "银行名称",
                    "array": [
                        {
                            "id": "1",
                            "text": "中国工商银行",
                            "selected": true
                        },
                        {
                            "id": "2",
                            "text": "中国建设银行",
                            "selected": false
                        }
                    ]
                },
                "place": {
                    "type": "cascader",
                    "name": "出险地点",
                    "array":   [{
                        "label": "北京市",
                        "value": "北京市",
                        "children": [{
                                "label": "东城区",
                                "value": "东城区"
                        },{
                            "label": "西城区",
                            "value": "西城区"
                        }]
                    },{
                    "label": "天津市",
                    "value": "天津市",
                    "children": [{
                            "label": "和平区",
                            "value": "和平区"
                        },{
                            "label": "河东区",
                            "value": "河东区"
                        },{
                            "label": "河西区",
                            "value": "河西区"
                        },]
                    }]
                }
            }, null, 4);
            Modal.info({
                title: '预览信息',
                width: '80%',
                content: (
                    <div style={{marginTop:10}} >
                        <Row>
                            {conEle}
                        </Row>
                        <div style={{marginTop:'20px', lineHeight:'26px'}}>
                            <h3>配置说明</h3>
                            <p style={{float: 'left', backgroundColor: '#eee', padding: '0 10px', marginRight: 20}}>
                                <strong>示例代码：</strong>
                                <pre>{jsonTemplet}</pre>
                            </p>
                            <p>
                               <storg> type： </storg>
                               <span>数据类型，目前支持的数据类型有string（字符串）、textarea（文本域）、money（数字）、date（日期）、enum（枚举）、cascader（级联）</span>
                            </p>
                            <p>
                               <storg> name： </storg>
                               <span>字段名称</span>
                            </p>
                            <strong>
                                注：
                            </strong>
                            <p>
                                enum（枚举类型）, 显示为下拉列表, selected为true表示选中（返回结果中只能有一条数据为 true）
                            </p>
                            <p>
                                cascader（级联）, 级联显示为下拉列表
                            </p>
                        </div>
                    </div>
                ),
                onOk() {}
            });
        }
    },
    render() {

        const { getFieldProps } = this.props.form;

        const {
            id,
            code,
            insuranceType,
            scene,
            memo,
            effectOrder,
            groupCode,
            status,
            conditionScript,
            content,
            serviceBean
        } = this.state.paramData;

        const mdFormItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 }
        };

        const gmtModified = util.isEmptyObject(this.state.paramData.gmtModified) ? new Date().getTime() : this.state.paramData.gmtModified;
        const gmtCreate = util.isEmptyObject(this.state.paramData.gmtCreate) ? new Date().getTime() : this.state.paramData.gmtCreate;

        const insuranceTypeEle = Object.keys(ConstInsuranceType).filter((key,i)=> {
                return key !== 'ALL';
        }).map((key,i) => {
            return <Option key={i} value={ConstInsuranceType[key]}>{ConstInsuranceType[key]}</Option>
        })

        const sceneEle = Object.keys(ConstScene).filter((key,i)=> {
                return key !== 'ALL';
        }).map((key,i) => {
            return <Option key={i} value={ConstScene[key]}>{ConstScene[key]}</Option>
        });

        const groupCodeEle = Object.keys(ConstGroupCode).filter((key,i)=> {
                return key !== 'ALL';
        }).map((key,i) => {
            return <Option key={i} value={ConstGroupCode[key]}>{ConstGroupCode[key]}</Option>
        });

        const statusEle = Object.keys(ConstStatus).map((key,i) => {
            return <Option key={i} value={key}>{ConstStatus[key]}</Option>
        });

        const buttonEleDisable = this.props.mark === 'edit' ? true : false;

        let contentEle = <span>内容</span>

        if( groupCode === "LIST_HEAD" || groupCode === "CARD_PARAMS") {
            contentEle = <span>
                 <Tooltip title="点击预览">
                     <i
                         className="iconfont icon-yulan"
                         style={{verticalAlign: 'middle', paddingRight:5, cursor:'pointer'}}
                         onClick={this.handlePreview.bind(this, content, groupCode)}
                     />
                 </Tooltip>
                 <span>
                     内容
                 </span>
            </span>
        }

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
                                        disabled
                                        {...getFieldProps('id')}
                                        value={id}
                                        name="id"
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
                                        {...getFieldProps('code', {
                                            onChange:(e)=> {
                                                this.change('code',e.target.value)
                                            }
                                        })}
                                        name="code"
                                        value={code}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="险种"
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择险种"
                                        combobox
                                        size="default"
                                        name="insuranceType"
                                        {...getFieldProps('insuranceType', {
                                            rules: [{
                                                required: true,
                                                whitespace: true,
                                                message: '险种不能为空'
                                            }],
                                            onChange:(e)=> {
                                                this.change('insuranceType',e)
                                            }
                                        })}
                                        value={util.isEmptyObject(ConstInsuranceType[insuranceType]) ? insuranceType : ConstInsuranceType[insuranceType]}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {insuranceTypeEle}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="场景"
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择场景"
                                        combobox
                                        size="default"
                                        name="scene"
                                        {...getFieldProps('scene', {
                                            rules: [{
                                                whitespace: true,
                                            }],
                                            onChange:(e)=> {
                                                this.change('scene',e)
                                            }
                                        })}
                                        value={util.isEmptyObject(ConstScene[scene]) ? scene : ConstScene[scene]}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {sceneEle}
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="备注"
                                >
                                    <Input
                                        placeholder="请输入备注"
                                        rows={4}
                                        autosize
                                        {...getFieldProps('memo', {
                                            onChange:(e)=> {
                                                this.change('memo',e.target.value)
                                            }
                                        })}
                                        value={memo}
                                        name="memo"
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label=""
                                    label={<span>优先级 <Tooltip title="数字越大优先级越高"><Icon type="question-circle-o" /></Tooltip></span>}
                                >
                                    <InputNumber
                                        placeholder="请输入优先级"
                                        {...getFieldProps('effectOrder', {
                                            onChange:(e)=> {
                                                this.change('effectOrder',e)
                                            }
                                        })}
                                        value={effectOrder}
                                        name="effectOrder"
                                    />
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    label="分组"
                                >
                                    <Select
                                        allowClear
                                        placeholder="请选择分组"
                                        combobox
                                        size="default"
                                        {...getFieldProps('groupCode',{
                                            onChange:(e)=> {
                                                this.change('groupCode',e)
                                            }
                                        })}
                                        value={util.isEmptyObject(ConstGroupCode[groupCode]) ? groupCode : ConstGroupCode[groupCode]}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {groupCodeEle}
                                    </Select>
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
                                        value={status}
                                        dropdownMatchSelectWidth={false}
                                    >
                                        {statusEle}
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    style={{display: 'none'}}
                                    label="创建时间"
                                >
                                    <Input
                                        {...getFieldProps('gmtCreate')}
                                        value={gmtCreate}
                                        name="gmtCreate"
                                    />
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    {...mdFormItemLayout}
                                    style={{display: 'none'}}
                                    label="修改时间"
                                >
                                    <Input
                                        {...getFieldProps('gmtModified')}
                                        value={gmtModified}
                                        name="gmtModified"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem
                                    labelCol={{ span: 1 }}
                                    wrapperCol={{ span: 22 }}
                                    label="条件"
                                >
                                    <AceEditor
                                        style={{border: '1px solid #ccc'}}
                                        height="500px"
                                        width="100%"
                                        mode="java"
                                        theme="github"
                                        showPrintMargin={false}
                                        value={conditionScript}
                                        onChange={
                                            (e) => {
                                                this.change('conditionScript',e)
                                            }
                                        }
                                        editorProps={{$blockScrolling: true}}
                                     />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem
                                    labelCol={{ span: 1 }}
                                    wrapperCol={{ span: 22 }}
                                    label={contentEle}
                                >
                                    <AceEditor
                                        style={{border: '1px solid #ccc'}}
                                        height="500px"
                                        width="100%"
                                        mode="java"
                                        theme="github"
                                        showPrintMargin={false}
                                        value={content}
                                        onChange={
                                            (e) => {
                                                this.change('content',e)
                                            }
                                        }
                                        editorProps={{$blockScrolling: true}}
                                     />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem
                                    labelCol={{ span: 1 }}
                                    wrapperCol={{ span: 22 }}
                                    label="服务信息"
                                >
                                    <AceEditor
                                        style={{border: '1px solid #ccc'}}
                                        height="100px"
                                        width="100%"
                                        mode="java"
                                        theme="github"
                                        showPrintMargin={false}
                                        value={serviceBean}
                                        onChange={
                                            (e) => {
                                                this.change('serviceBean',e)
                                            }
                                        }
                                        editorProps={{$blockScrolling: true}}
                                     />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem
                                    wrapperCol={{span: 22, offset: 1}}
                                >
                                    <Button type="ghost" disabled={buttonEleDisable} onClick={this.handleReset}>重置</Button>
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

BxsRuleOperation = Form.create()(BxsRuleOperation);

export default BxsRuleOperation;

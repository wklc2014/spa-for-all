import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Button, Modal, Table, Select, message, Row, Col, Form, DatePicker, Input, Popconfirm } from 'antd';
import BxsRuleDetail from './BxsRuleDetail.jsx';
import CardTitle from '../common/CardTitle.jsx';
import {sidebarConfig, sidebarWidth} from '../common/const.js';
import {ConstInsuranceType, ConstScene, ConstGroupCode, ConstStatus} from './staticData/index.js';
import BxsRuleQuery from './BxsRuleQuery.jsx';
import BxsRuleOperation from './BxsRuleOperation.jsx';
import async from '../redux/common/async.js';
import util from '../../common/util.js';
import './BxsRule.less';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

let BxsRule = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            visible: false,
            paramData: {},
            dataSource: [],
            mark: 'query',
            pagination:{},
            queryParam:{}
        };
    },
    /* 表单提交 */
    handleSubmit(fieldsValue,curt) {

        fieldsValue.currentPage = curt;
        fieldsValue.pageSize = 5;

        const queryParam = jQuery.extend({}, fieldsValue);

        Object.keys(queryParam).map((key, i) =>{
            if(queryParam[key] === 'ALL') {
                queryParam[key] = '';
            }
        })

        this.setState({
            queryParam: fieldsValue
        })

        async({
            type: 'get',
            url: 'getRuleList.json',
            data: queryParam,
            success: (result) => {
                if (result.stat === 'ok') {
                    const data = result.ruleList;
                    const pageSize = 5;
                    const currentPage = curt;
                    const total = parseInt(result.total);

                    if (data) {
                        data.map((d, i) =>{
                            Object.keys(d).map((obj,i) => {
                                if(obj === 'gmtCreate' || obj === 'gmtModified'){
                                    d[obj] = util.getTimeStrFromTime(parseInt(d[obj].time));
                                }
                            })
                        })
                        this.setState({
                            dataSource: data,
                            pagination: {
                                current: currentPage,
                                pageSize,
                                total
                            }
                        });
                    }
                } else {
                    message.error('查询失败');
                }
            }
        });
    },

    operation(id, mark) {

        if (id) {
            const data = [...this.state.dataSource];

            const paramData = {};

            //列表行中的数据
            data.map((val, i) => {
                if (val.id === id) {
                    for (const obj in val) {
                        paramData[obj] = val[obj] === undefined ? '' : val[obj];
                    }
                }
                return val;
            });

            this.setState({
                paramData,
                mark
            });
        } else {
            this.setState({
                mark
            });
        }

    },

    updateRule(url, data, cb){

        const tempData = Object.assign({},data);

        // const gmtCreate = new Date(tempData.gmtCreate).getTime();
        // const gmtModified = new Date(tempData.gmtModified).getTime()

        Object.keys(tempData).map((obj,i) => {
            if(obj === 'gmtCreate' || obj === 'gmtModified'){
                tempData[obj] = new Date(tempData[obj]);
            }
        })

        async({
            type: 'post',
            url,
            data: tempData,
            success: (result) => {
                if (result.stat === 'ok') {
                    message.success('数据更新成功');
                } else {
                    message.error('数据更新失败');
                }

                if(cb){
                    cb(result);
                }
            }
        });
    },
    switchCompent(mark, tag) {
        if(mark === 'detail'){
            this.operation(tag, mark);
        }else{
            if(mark === 'query' && tag === 'add'){
                this.handleSubmit(this.state.queryParam, 1);
            }
            this.setState({
                mark
            });
        }
    },
    handleSave(mark, data) {
        let url = 'createRule.json';
        if(mark === 'edit'){
            url = 'updateRule.json';
        }

        this.updateRule(url,data,(ret)=> {
            if(ret.stat === 'ok') {
                if(mark === 'edit') {
                    const dSource = this.state.dataSource;
                    dSource.map((val, i) => {
                        if (val.id === data.id) {
                            dSource[i] = data;
                        }
                    });
                    this.setState({
                        dataSource: dSource
                    });
                } else {
                    this.setState({
                        dataSource: [data, ...this.state.dataSource]
                    });
                }
            }
        });

    },

    render() {
        const mark = this.state.mark;
        if(mark === 'query') {
            return (
                <BxsRuleQuery
                    dataSource={this.state.dataSource}
                    query={this.handleSubmit}
                    operation={this.operation}
                    pagination={this.state.pagination}
                    switchCompent={this.switchCompent}
                    queryParam={this.state.queryParam}
                />

            );
        } else if(mark === 'detail') {
            return (
                <BxsRuleDetail
                    paramData={this.state.paramData}
                    switchCompent={this.switchCompent}
                />
            );
        } else {
            return (
                <BxsRuleOperation
                    paramData={this.state.paramData}
                    save={this.handleSave}
                    mark={this.state.mark}
                    switchCompent={this.switchCompent}
                />
            );
        }
    }
});

BxsRule = Form.create()(BxsRule);

export default BxsRule;

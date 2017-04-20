import React from 'react';
import { Router, Route } from 'react-router';
import { message, Form } from 'antd';
import ajax from '../../common/ajax.js';
import util from '../../common/util.js';
import BxsParamQuery from './BxsParamQuery.jsx';
import BxsParamDetail from './BxsParamDetail.jsx';
import BxsParamOperation from './BxsParamOperation.jsx';

let BxsParam = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            mark: 'query',
            dataSource: [],
            emptyText: '暂无数据',
            pagination: {},
            queryParam: {},
            paramData: {}
        };
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
        let url = 'createParam.json';
        if(mark === 'edit'){
            url = 'updateParam.json';
        }

        this.updateRule(url,data,(ret)=> {
            if(ret.stat === 'ok') {
                if(mark === 'edit') {
                    const dSource = this.state.dataSource;
                    dSource.map((val, i) => {
                        if (val.id === data.id) {
                            data.gmtModified = util.getTimeStrFromTime(parseInt(data.gmtModified));
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
    updateRule(url, data, cb){

        const tempData = Object.assign({},data);

        Object.keys(tempData).map((obj,i) => {
            if(obj === 'gmtCreate' || obj === 'gmtModified'){
                tempData[obj] = new Date(tempData[obj]);
            }
        })

        ajax({
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
        }else{
            this.setState({
                mark
            });
        }

    },
    /* 表单提交 */
    handleSubmit(fieldsValue,curt) {

        fieldsValue.currentPage = curt;
        fieldsValue.pageSize = 5;

        this.setState({
            queryParam: fieldsValue
        })

        ajax({
            type: 'get',
            url: 'getParamList.json',
            data: fieldsValue,
            success: (result) => {
                if (result.stat === 'ok') {
                    const data = result.paramList;
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
                    }else{
                        this.setState({
                            dataSource: [],
                            emptyText: '暂无数据'
                        });
                    }
                } else {
                    this.setState({
                        emptyText: '无业务配置查询权限 【COMPMNG_CP_CONFIG_QUERY或者COMPMNG_CP_CONFIG_EDIT】 或者系统异常！'
                    });
                }
            },
            error: (err) => {
                this.setState({
                    emptyText: '无业务配置查询权限 【COMPMNG_CP_CONFIG_QUERY或者COMPMNG_CP_CONFIG_EDIT】 或者系统异常！'
                });
            }
        });
    },
    render() {
        const {mark} = this.state;
        if(mark === 'query') {
            return (
                <BxsParamQuery
                    dataSource={this.state.dataSource}
                    query={this.handleSubmit}
                    operation={this.operation}
                    pagination={this.state.pagination}
                    emptyText={this.state.emptyText}
                    switchCompent={this.switchCompent}
                />
            );
        }else if(mark === 'detail'){
            return (
                <BxsParamDetail
                    paramData={this.state.paramData}
                    switchCompent={this.switchCompent}
                />
            );
        }else{
            return (
                <BxsParamOperation
                    paramData={this.state.paramData}
                    save={this.handleSave}
                    mark={this.state.mark}
                    switchCompent={this.switchCompent}
                />
            );
        }
    }
});

BxsParam = Form.create()(BxsParam);

export default BxsParam;

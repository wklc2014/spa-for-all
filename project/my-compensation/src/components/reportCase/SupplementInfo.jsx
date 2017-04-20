import React, {Component} from 'react';
import lodash from 'lodash';
import {Form, Row, Button, Select, Table, Popconfirm} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import CardTitle from '../common/CardTitle.jsx';
import {formItemLayout, AccidentData} from './common/const.js';
import FormItemWraper from './common/FormItemWraper.jsx';

import util from '../../common/util.js';

let SupplementInfo = React.createClass({
    getCascaderChild(keyStr, child, relData) {
        return child.map( m => {
            if (m.children) {
                return this.getCascaderChild(keyStr+'-'+m.value, m.children, m.rel);
            } else if(m.rel) {
                return {
                    key: keyStr+'-'+m.value,
                    value:m.rel
                };
            }else{
                return {
                    key: keyStr+'-'+m.value,
                    value: relData
                };
            }
        })
    },
    render() {
        const {title, accidentType, data, info, disabled} = this.props;
        // 补充信息头字段
        // 表格头信息字段集合
        const {extHead} = data;
        if (!extHead || !Object.keys(extHead).length) {
            return null;
        }
        // 基本样式
        const baseStyleObj = {
            marginBottom: 24,
            minWidth: 140
        }
        // 按钮基本样式
        const baseButtonStyleObj = {
            marginBottom: 24
        }
        // 按钮基本属性
        const baseButtonParamsObj = {
            type: 'ghost',
            size: 'large',
            disabled
        }
        // 初始化表格内容数据
        const lastDataSource = info[accidentType] || [];
        // 表格内容数据
        const dataSource = [...lastDataSource];
        if (dataSource.length) {
            // 是否需要汇总
            // 表格头里有汇总字段标识
            // 表格头里某个字段的 total 属性为 true
            const needTs = lodash.find(extHead, (o) => o.total);
            // 表格内容数据是否已经有汇总行了
            // 表格内容数据某一行的 key 字段为 ts
            const hasTs = lodash.find(dataSource, (o) => o.key === 'ts');
            if (!hasTs && needTs) {
                dataSource.push({key: 'ts'});
            }
        }
        // 根据表格头字段，生成表格头数据
        const columns = [];
        let object = {};
        Object.keys(extHead).map((v, i) => {
            const currentObject = extHead[v];

            if (currentObject.isHide) {
                return null;
            }
            if (currentObject.type === 'cascader') {
                currentObject.array.map((val, i) => {
                    let rel = val.rel;
                    let value = val.value;
                    let child = val.children;
                    if(child) {
                        let obj = this.getCascaderChild(value, child, rel);
                        if (obj) {
                            obj.map(o => {
                                if (o instanceof Array) {
                                    o.map(d => {
                                        object[d.key] = d.value;
                                    });
                                } else {
                                    object[o.key] = o.value;
                                }
                            })
                        }
                    }else if(rel) {
                        object[value] = rel;
                    }
                })
            }
            columns.push({
                dataIndex: v,
                key: v,
                title: currentObject.name,
                render: (text, record, index) => {
                    let valueText = text;
                    // 单独处理汇总行 start
                    if (record.key === 'ts') {
                        // 需要根据运算表达式计算的汇总列数据
                        if (currentObject.val && currentObject.type !== 'text') {
                            let totalValue = 0;
                            lastDataSource.map(s => {
                                try{
                                    let valCalculator = currentObject.val.replace(/\$/g, 's');
                                    valCalculator = eval(valCalculator);
                                    if (!isNaN(valCalculator)) {
                                        totalValue += lodash.round(lodash.toNumber(valCalculator), 2);
                                    }
                                }catch(e){
                                }
                            });
                            return totalValue;
                        }
                        // 直接求和计算的汇总列数据
                        if (currentObject.total) {
                            let totalValue = 0;
                            lastDataSource.map(s => {
                                totalValue += lodash.toNumber(s[v] || '');
                            })
                            return lodash.round(totalValue, 2);
                        }
                        // 汇总行的第一列显示【汇总】文字
                        if (i === 0) {
                            return <div className="tc">汇总</div>;
                        }
                        // 普通汇总行不显示文本
                        return null;
                    }
                    // 普通行数据行中的【汇总列】单独处理
                    if (currentObject.val) {
                        let recordCalculator = currentObject.val.replace(/\$/g, 'record');
                        try {
                            valueText = eval(recordCalculator);
                        } catch(e) {
                        }
                        return (
                            <div style={baseStyleObj}>
                                {currentObject.type === 'text' ? valueText : (isNaN(valueText) ? null : lodash.round(valueText, 2))}
                            </div>
                        );
                    }
                    // 直接显示的数据
                    if (currentObject.disabled) {
                        if (currentObject.type === 'date') {
                            return (
                                <div style={baseStyleObj}>
                                    {util.getDateStrFromTime(valueText)}
                                </div>
                            );
                        }
                        return <div style={baseStyleObj}>{valueText}</div>;
                    }
                    // 需要显示为表单的可修改数据
                    let childrenEle = null;
                    if (currentObject.type === 'enum') {
                        childrenEle = currentObject.array.map((m, n) => {
                            let arrayKey = '';
                            let arrayValue = '';
                            Object.keys(m).map(a => {
                                if (a !== 'selected') {
                                    arrayKey = a;
                                    arrayValue = m[a];
                                }
                            })
                            return (
                                <Option
                                    key={n}
                                    value={arrayKey}
                                >
                                    {arrayValue}
                                </Option>
                            );
                        })
                    }

                    let cascaderValue = [];
                    if (currentObject.type === 'cascader') {
                        cascaderValue = currentObject.array;
                    }
                    const props = {
                        getFieldProps: this.props.form.getFieldProps,
                        change: (key, value) => {
                            this.props.change(record.key, v, value);
                        },
                        type: currentObject.type,
                        id: `${v}-${record.key}`,
                        value: valueText,
                        cascaderValue,
                        object,
                        rules: [{
                            required: currentObject.required
                        }],
                        label: currentObject.name,
                        isSingle: true,
                        params: {
                            size: 'large',
                            style: {
                                minWidth: 160
                            },
                            disabled
                        }
                    };
                    return (
                        <FormItemWraper {...props}>
                            {childrenEle}
                        </FormItemWraper>
                    );
                }
            })
        });
        // 补充最后一列操作按钮
        columns.push({
            title: '操作',
            dataIndex: 'remove',
            key: 'remove',
            render: (text, record, index) => {
                if (record.key === 'ts') { return null; }
                return (
                    <Popconfirm
                        title="确定删除这条数据?"
                        onConfirm={e => {
                            this.props.remove(record.key);
                        }}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button
                            {...baseButtonParamsObj}
                            style={baseButtonStyleObj}

                        >
                            删除编辑行
                        </Button>
                    </Popconfirm>
                );
            }
        });
        return (
            <div className="cardWraper">
                <CardTitle data={title} />
                <Table
                    className="constumTablePlaceholder mb24"
                    columns={columns}
                    pagination={false}
                    dataSource={dataSource}
                    bordered
                />
                <div>
                    <Button
                        {...baseButtonParamsObj}
                        onClick={e => {
                            const addDate = new Date().getTime();
                            this.props.add(addDate);
                        }}
                        className="mr16"
                    >
                        新增编辑行
                    </Button>
                </div>
            </div>
        );
    }
});

SupplementInfo = Form.create()(SupplementInfo);

export default SupplementInfo;

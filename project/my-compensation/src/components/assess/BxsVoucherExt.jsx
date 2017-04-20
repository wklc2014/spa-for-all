import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Row, Col, Form, Input, Select, Button,
    Tooltip, Table, message, DatePicker, InputNumber, Modal, Popconfirm, Cascader} from 'antd';
import styles from './BxsVoucherExt.less';
import '../../common/common.less';
import util from '../../common/util.js';
import PERMISSION from './common/permission.js';
import {updateBxsVoucherExt, saveExtFormData} from '../redux/actions/assess_action.js';
const Option = Select.Option;

// 默认值下拉列表
let defValue = '';
const BxsVoucherExt = React.createClass({
    mixins: [
        PERMISSION
    ],
    /** java model -> js model*/
    buildFormData(props) {
        if(!util.isEmptyObject(props.voucherExtData)) {
            if (util.isEmptyObject(props.voucherExtData.voucherExtId)) {
                if(props.ext.length > 0 && !util.isEmptyObject(props.ext[0].voucherExtId)) {
                    props.voucherExtData.voucherExtId = props.ext[0].voucherExtId
                }
            }
            return props.voucherExtData;
        }
        const voucherExtList = props.ext;
        const voucherExt = voucherExtList.length > 0 ?
            voucherExtList[0] : {};
        const formData = util.isEmptyObject(voucherExt.content) ?
            [] : JSON.parse(voucherExt.content);
        formData.map((d, i) =>{
            if(d.transDate){
                return d.transDate = new Date(d.transDate);
            }
        })
        return {
            columnData: props.header, // 列头
            contentData: formData, //列内容
            voucherExtId: util.isEmptyObject(voucherExt.voucherExtId) ?
                null : voucherExt.voucherExtId,
            relateBizId: util.isEmptyObject(voucherExt.relateBizId) ?
                props.taskId : voucherExt.relateBizId,
            relateBizType: util.isEmptyObject(voucherExt.relateBizType) ?
                'assess_task_id' : voucherExt.relateBizType
        };
    },

    componentWillMount() {
        const formData = this.buildFormData(this.props);
        this.props.saveExtFormData(formData);
    },

    /** js model -> java model */
    buildVoucherExtList(formData) {
        const data = [...formData.contentData];
        util.traversalObjectAndResetEmptyAttr(data);
        const voucherExt = {
            relateBizType: util.isEmptyObject(formData.relateBizType) ?
                'assess_task_id' : formData.relateBizType,
            relateBizId: util.isEmptyObject(formData.relateBizId) ?
                props.taskId : formData.relateBizId,
            voucherExtId: util.isEmptyObject(formData.voucherExtId) ?
                null : formData.voucherExtId,
            content: JSON.stringify(data),
            freelistId: '0',
            id: 0
        };
        return [voucherExt];
    },

    /** JSON请求 value-删除操作*/
    updateBxsVoucherExt(value) {

        let pData = this.buildFormData(this.props); // 服务器端返回的数据
        let fData = this.props.voucherExtData; // 本地显示的数据
        let dataList = [];  //传给服务器的数据
        if (value) {
            pData.contentData = pData.contentData.filter((p, i) => {
                return p.key != value && p.key != 'ts';
            })
            dataList = pData;
        } else {
            fData.contentData = fData.contentData.filter((f, i) => {
                return f.key != 'ts';
            })
            dataList = fData;
        }
        this.props.updateBxsVoucherExt(this.buildVoucherExtList(dataList), value);
    },

    /** 按钮回调方法-添加 */
    add() {
        //表格金额列汇总
        const contentData = this.props.voucherExtData.contentData;
        const data = contentData[0];
        const newData = {};
        for (const val in data) {
            if (data.hasOwnProperty(val) && val !== 'key') {
                newData[val] = '';
            }
        }

        //添加默认的属性值
        newData.key = (new Date()).getTime();
        newData.gmtCreate = (new Date()).getTime();
        newData.gmtModified = (new Date()).getTime();
        newData.lossChannel = defValue;

        this.props.voucherExtData.contentData = [newData, ...this.props.voucherExtData.contentData];

        this.props.saveExtFormData(this.props.voucherExtData);

    },

    /** 按钮回调方法-删除 */
    remove(value) {
        const _this = this;
        let data = this.props.voucherExtData.contentData;

        data = data.filter(x => {
            return `${x.key}` !== `${value}`;
        });

        if(data.length === 1 && data[0].key === 'ts'){
            data = [];
        }
        this.props.voucherExtData.contentData = data;
        this.props.saveExtFormData(this.props.voucherExtData);
        this.updateBxsVoucherExt(value);
    },

    /** 按钮回调方法-保存 */
    save(e) {
        e.preventDefault();
        this.props.voucherExtData.contentData.map((d, i) => {
            if(d.transDate) {
                this.props.form.setFieldsValue({
                    ['transDate-'+ d.key]: new Date(d.transDate)
                })
            }
        })
        this.props.form.validateFields((errors, values) => {
            if (errors) {
                console.log(errors);
            } else {
                // 更新修改时间
                const contentData = [...this.props.voucherExtData.contentData];
                contentData.map(function(obj, i) {
                    if (obj.key != 'ts') {
                        Object.keys(obj).map(function(val,j) {
                            if(val === 'gmtModified'){
                                return obj[val] = new Date().getTime();
                            }
                            if(val === 'transDate'){
                                return obj[val] = new Date(obj[val]).getTime();
                            }
                        })
                    }
                });
                this.updateBxsVoucherExt();
            }
        });
    },

    /** 表格回调方法-字段变更 */
    onChange(record, key, e) {
        if (!e) {
            return;
        }
        let data = this.props.voucherExtData.contentData;
        if(key === 'liability') {
            let value = '';
            e.value.map(m => {
                 value = value + "-" + m;
            })
            value = value.substring(1);
            const relFieldObj = e.object[value];
            let relFields = Object.keys(relFieldObj);
            data.forEach((v, i) => {
                if(data[i].key === record.key) {
                    data[i].liability = e.value;
                    relFields.map(rf => {
                        data[i][rf] = relFieldObj[rf];
                    })
                }
            })
        } else {
            data.map(x => {
                if (x.key !== 'ts' && record.key === x.key) {
                    return x[key] = (e.target ? e.target.value : e);
                }
            });
        }
        this.props.voucherExtData.contentData = data;
        this.props.saveExtFormData(this.props.voucherExtData);
    },
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

        const {taskInfo} = this.props;
        const permission = this.getPermission(taskInfo);
        let globalDisable = permission.BxsVoucher;
        if(util.isEmptyObject(this.props.voucherExtData.columnData)){
            return null;
        }
        const contentData = this.props.voucherExtData.contentData;

        if (contentData.length > 0) {
            let flag = true;
            contentData.map((obj, i) => {
                if (obj.key === 'ts') {
                    flag = false;
                }
            });
            if (flag) {
                const data = contentData[0];
                const newData = {key: 'ts'}; //汇总    ts:汇总行的key
                for (const val in data) {
                    if (data.hasOwnProperty(val) && val !== 'key') {
                        newData[val] = '';
                    }
                }
                this.props.voucherExtData.contentData = [...this.props.voucherExtData.contentData, newData];
            }
        }


        const _this = this;
        const { getFieldProps } = this.props.form;

        /*表头定义*/
        let columnsFields = {};
        try {
            columnsFields = JSON.parse(this.props.voucherExtData.columnData.content);
        } catch(e) {
            console.log(e)
            return null;
        }

        const columns = [];

        const dataStyle = {
            minWidth: '136px',
            marginBottom: '24px'
        };

        const tsStyle = {
            minWidth: '136px',
            marginBottom: 0
        };
        let object = {};
        Object.keys(columnsFields).map((field, fieldNumber) => {
            const fieldName = field;  //字段
            const fieldValue = columnsFields[field];
            const fieldType = fieldValue.type; //字段类型
            const disabled = fieldValue.disabled !== undefined
                          ? fieldValue.disabled
                          : false; //  是否禁用的（创建和修改时间），默认false
            const required = fieldValue.required !== undefined
                          ? fieldValue.required
                          : false; //  是否必填，默认false
            const showName = fieldValue.name; //字段中文显示名
            const isTotal = fieldValue.total; //是否需要汇总
            const calculator = fieldValue.val !== undefined
                          ? fieldValue.val
                          : false; //  计算方式，若为false ，则是手动输入的值
            const isHide = fieldValue.isHide !== undefined
                          ? fieldValue.isHide
                          : false; //是否隐藏该字段
            const clsName = 'isHide_'+isHide;
            if (fieldValue.type === 'cascader') {
                fieldValue.array.map((val, i) => {
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
            //添加列
            columns.push({
                title: showName,
                dataIndex: fieldName,
                // className: clsName,
                key: fieldName,
                render(text, record, index) {
                    //汇总行
                    if (record.key === 'ts' && fieldNumber === 0) {
                        if (!disabled) {
                            return (
                                <div
                                    style={{
                                        marginBottom: 0,
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        minWidth:'136px'
                                    }}
                                >
                                    汇总
                                </div>
                            );
                        }
                        return;
                    }
                    /* 日期类型 */
                    if (fieldType === 'date') {
                        let newText = text;
                        if (!util.isEmptyObject(text)) {
                            newText = util.getDateStrFromTime(text);
                        }
                        //创建时间和修改时间
                        if (disabled) {
                            return (
                                <div
                                    style={dataStyle}
                                >
                                {newText}
                                </div>
                            );
                        }
                        //交易日期
                        return (<Form.Item>
                            <DatePicker {...getFieldProps(fieldName + '-' + record.key, {
                                rules: [{
                                    required,
                                    type:'date',
                                    message: '请填写' + showName
                                }],
                                initialValue: newText,
                                onChange(e) {
                                    _this.onChange(record, fieldName, e);
                                }
                            })} disabled={globalDisable}
                            />
                        </Form.Item>);
                    } else if (fieldType === 'enum') {
                        const arrayData = fieldValue.array;
                        let selectValue = '';
                        const optionDataEles = arrayData.map((obj, i) => {
                            let opName = '',opValue = '';
                            Object.keys(obj).map((fKey,j) =>{
                                if(fKey != 'selected'){
                                    opName = fKey;
                                    opValue = obj[fKey];
                                    if (obj.selected) {
                                        selectValue = fKey;
                                        defValue = fKey;
                                    }
                                }
                            })
                            return <Option key={i} value={opName}>{opValue}</Option>;
                        });
                        if(!util.isEmptyObject(text)){
                            selectValue = text;
                        }
                        if (record.key === 'ts') {
                            return;
                        }
                        return (
                            <Form.Item>
                                <Select
                                    style={{textAlign: 'left'}}
                                    size="large"
                                    placeholder={"请选择"+ showName}
                                    {...getFieldProps(fieldName + '-' + record.key, {
                                        rules: [{
                                            required,
                                            message: '请选择' + showName
                                        }],
                                        initialValue: selectValue,
                                        onChange(e) {
                                            _this.onChange(record, fieldName, e);
                                        }
                                    })} style={{minWidth:'136px'}}
                                    disabled={globalDisable}
                                >
                                    {optionDataEles}
                                </Select>
                            </Form.Item>
                        );
                    } else if(fieldType === 'text') {
                        return (
                            <Form.Item>
                                <div style={{minWidth: 136}}>
                                    {text}
                                </div>
                            </Form.Item>
                        );
                    } else if(fieldType === 'cascader') {
                        const arrayData = fieldValue.array;
                        return (
                            <Form.Item>
                                <Tooltip
                                    placement="topLeft"
                                    title={text && !(text instanceof Array) ? text.value.join(' / ') : (text ? text.join(' / ') : '' )}
                                >
                                    <div style={{display:'inline'}}>
                                        <Cascader
                                            placeholder={"请选择"+ showName}
                                            allowClear={false}
                                            disabled={globalDisable}
                                            options={arrayData}
                                            {...getFieldProps(fieldName + '-' + record.key, {
                                                onChange: (val,options) => {
                                                    _this.onChange(record, fieldName, {
                                                        value:val,
                                                        object
                                                    });
                                                }
                                            })}
                                            value={text && !(text instanceof Array) ? text.value : text }
                                        />
                                    </div>
                                </Tooltip>
                            </Form.Item>
                        )
                    }else if (fieldType === 'integer' || fieldType === 'number') {
                        if (calculator) { //计算列的值
                            const recordCalculator = calculator.replace(/\$/g, 'record');
                            const valCalculator = calculator.replace(/\$/g, 'val');
                            //计算列汇总
                            if (record.key === 'ts' && isTotal) {
                                const data = _this.props.voucherExtData.contentData;
                                let value = 0;
                                data.map((val, i) => {
                                    if (val.key !== 'ts') {
                                        value += eval(valCalculator);
                                    }
                                    return value;
                                });
                                if (isNaN(value)) {
                                    value = 0;
                                }
                                return (
                                    <div style={tsStyle}>{typeof(value) === 'number'
                                        ?
                                        value.toFixed(2)
                                        :
                                        parseFloat(value, 10).toFixed(2)}
                                    </div>
                                );
                            }

                            //计算列
                            let value = eval(recordCalculator);
                            if (isNaN(value)) {
                                value = 0;
                            }
                            return (
                                <div style={dataStyle}>{typeof(value) === 'number'
                                    ?
                                    value.toFixed(2)
                                    :
                                    parseFloat(value, 10).toFixed(2)}
                                </div>
                            );
                        }
                        //不需要计算的列
                        let step = 0.01;
                        if (fieldType === 'integer') {
                            step = 1;
                        }

                        if (record.key === 'ts') {
                            if (isTotal) {
                                const data = _this.props.voucherExtData.contentData;
                                let value = 0;
                                data.map((val, i) => {
                                    if (val.key !== 'ts') {
                                        if (!isNaN(parseFloat(val[fieldName]))) {
                                            value += parseFloat(val[fieldName]);
                                        }
                                    }
                                });

                                if (isNaN(value)) {
                                    value = 0;
                                }
                                return (
                                    <div style={tsStyle}>{typeof(value) === 'number'
                                        ?
                                        value.toFixed(2)
                                        :
                                        parseFloat(value, 10).toFixed(2)}
                                    </div>
                                );
                            }
                            return;
                        }

                        return (<Form.Item>
                            <InputNumber
                                placeholder={"请填写"+ showName}
                                style={{minWidth: 136}} step={step}

                                {...getFieldProps(fieldName + '-' + record.key, {
                                    rules: [{
                                        required,
                                        message: '请填写' + showName
                                    }],
                                    initialValue: text,
                                    onChange(e) {
                                        _this.onChange(record, fieldName, e);
                                    }
                                })} disabled={globalDisable}
                            />
                        </Form.Item>);
                    } else {
                        if (record.key === 'ts') {
                            return;
                        }
                        return (
                            <Form.Item>
                                <Input
                                    placeholder={"请填写"+ showName}
                                    style={{minWidth: 136}}
                                    {...getFieldProps(fieldName + '-' + record.key, {
                                    rules: [{
                                        required,
                                        message: '请填写' + showName
                                    }],
                                    initialValue: text,
                                    onChange(e) {
                                        _this.onChange(record, fieldName, e);
                                    }
                                })}
                                disabled={globalDisable}
                                />
                            </Form.Item>
                        );
                    }
                }
            });
        })

        columns.push({
            title: '操作',
            dataIndex: 'remove',
            key: 'remove',
            render(text, record, index) {
                if (record.key === 'ts') {
                    return;
                }
                return (
                    <div style={dataStyle}>
                        <Popconfirm title="确定删除这条数据?" onConfirm={_this.remove.bind(_this,record.key)} okText="确定" cancelText="取消">
                            <Button
                                type="ghost"
                                disabled={globalDisable}
                            >删 除
                            </Button>
                        </Popconfirm>
                    </div>
                );
            }
        });
        return (
            <div className={styles.voucherExtContent}>
                <div className="cardSubTitle">更多</div>
                <Form>
                    <Table
                        className="constumTablePlaceholder mb16"
                        columns={columns}
                        pagination={false}
                        dataSource={this.props.voucherExtData.contentData}
                        bordered
                    />
                    <Row className="line-space">
                        <Col>
                            <Button
                                type="ghost"
                                onClick={this.add}
                                disabled={globalDisable}
                                className="mr8"
                            >
                                添加
                            </Button>
                            <Button
                                type="ghost"
                                onClick={this.save}
                                disabled={globalDisable}
                            >
                                保存
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
});

export const BxsVoucherExtComp = Form.create()(BxsVoucherExt);

function mapStateToProps(state) {
    return {
        header: state.assess.voucher.header,
        ext: state.assess.voucher.ext,
        taskInfo: state.assess.taskInfo,
        taskId: state.assess.taskModal.taskId,
        voucherExtData: state.assess.voucherExtData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateBxsVoucherExt,
        saveExtFormData
    }, dispatch);
}

const BxsVoucherExtContainer = connect(mapStateToProps, mapDispatchToProps)(BxsVoucherExtComp);
export default BxsVoucherExtContainer;

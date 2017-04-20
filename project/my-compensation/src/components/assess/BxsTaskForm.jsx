import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Form, Input, Button, Row, Col, Select, Tooltip, Icon, message} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import {BxsTaskFormResult, BxsCardTitle, formItemLayout} from './common/data.js';
import BxsVoucherUpload from './BxsVoucherUpload.jsx';

import PERMISSION from './common/permission.js';
import async from '../redux/common/async.js';
import queryTaskDetail from './common/queryTaskDetail.js';
import updateTaskFormBtnView from './common/updateView.js';
import lodash from 'lodash';
import enhanceWithClickOutside from 'react-click-outside';

const Option = Select.Option;
const OptGroup = Select.OptGroup;
const FormItem = Form.Item;

let isNoteOptionRendering = false;
const NoteOption = enhanceWithClickOutside(React.createClass({
    handleClickOutside(e) {
        if (e.target.id !== 'backgroundMemo') {
            this.props.onClickOutside();
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        if (!isNoteOptionRendering) {
            setTimeout(() => {
                isNoteOptionRendering = false;
            }, 1000);
            return true
        }
        return false
    },
    render() {
        const {show, text, onChange} = this.props;
        const object = BxsTaskFormResult.NOTE;
        if (!show) {
            return null;
        }
        const listEle = Object.keys(object).map((val, i) => {
            const obj = object[val];
            const childrenEle = obj.list.map((v, j) => {
                return (
                    <li
                        key={j}
                        className="ant-select-dropdown-menu-item"
                        onClick={onChange}
                        data-note={v.text}
                    >
                        {v.text}
                    </li>
                );
            });
            return (
                <li className=" ant-select-dropdown-menu-item-group" key={i}>
                    <div className="ant-select-dropdown-menu-item-group-title">
                        {obj.label}
                    </div>
                    <ul className="ant-select-dropdown-menu-item-group-list">
                        {childrenEle}
                    </ul>
                </li>
            );
        });
        return (
            <div className="ant-select-dropdown customDropdown">
                <div className="vh">
                    <ul className="ant-select-dropdown-menu">
                        {listEle}
                    </ul>
                </div>
            </div>
        );
    }
}));

const BxsTaskForm = React.createClass({
    mixins: [
        PERMISSION,
        queryTaskDetail,
        updateTaskFormBtnView
    ],
    getInitialState() {
        return {
            isShowUpload: false
        }
    },
    getSelectOption(object, type) {
        const getOption = list => {
            return list.map((v, j) => {
                return <Option key={j} value={v.text}>{v.text}</Option>;
            });
        }
        const resultObject = object[type] || object.COMMON;
        if (resultObject.single) {
            return getOption(resultObject.list);
        }
        return Object.keys(resultObject).map((val, i) => {
            const obj = resultObject[val];
            const label = obj.label;
            const list = obj.list;
            const listEle = getOption(list);
            return (
                <OptGroup label={label} key={i}>
                    {listEle}
                </OptGroup>
            );
        });
    },
    render() {
        const {isShowUpload} = this.state;
        const {hideIcon, voucherRule} = this.props;
        const {taskInfo} = this.props.assess;
        const {frontMemo, backgroundMemo, showBackground} = this.props.taskForm;
        const permission = this.getPermission(taskInfo);
        const juPeiDisabled = permission.BxsTaskFormJuPei;
        const buChuanDisabled = permission.BxsTaskFormBuChuan;
        const disabled = permission.BxsTaskForm;
        const processEle = this.getSelectOption(BxsTaskFormResult.PROCESS, taskInfo.type);
        const resultLabelEle = (
            <span>
                <span className="mr8">标准处理结果</span>
                <Tooltip
                    placement="top"
                    title="驳回的『标准处理结果』将反馈给保险公司，请务必正确选择。"
                >
                    <Icon
                        type="info-circle-o"
                        style={{fontWeight: 'bold'}}
                    />
                </Tooltip>
            </span>
        );
        const formItemColSpan = formItemLayout.colOf1;
        const formItemOffsetSpan = formItemLayout.colOf1.labelCol.span;
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsTaskForm.id}>
                <CardTitle data={BxsCardTitle.BxsTaskForm}>
                    {!!hideIcon ? null : (
                        <Tooltip
                            placement="top"
                            title="短信通知"
                        >
                            <Link to="/smsNote" className="ml8">
                                <i className="iconfont icon-duanxin" />
                            </Link>
                        </Tooltip>
                    )}
                </CardTitle>
                <Form horizontal>
                    <FormItem
                        {...formItemColSpan}
                        label={resultLabelEle}
                    >
                        <Select
                            name="frontMemo"
                            disabled={disabled}
                            style={{ width: '100%' }}
                            value={frontMemo}
                            dropdownMatchSelectWidth={false}
                            onChange={this.handleChange.bind(this, 'frontMemo')}
                        >
                            {processEle}
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemColSpan}
                        label="小二备注"
                    >
                        <div className="taskFormNoteContainer">
                            <Input
                                type="textarea"
                                id="backgroundMemo"
                                name="backgroundMemo"
                                value={backgroundMemo}
                                rows={5}
                                className="mb8"
                                onChange={this.handleChange.bind(this, 'backgroundMemo')}
                                disabled={disabled}
                                onFocus={this.handleFocus}
                            />
                            <NoteOption
                                show={showBackground}
                                text={backgroundMemo}
                                onClickOutside={this.handleBlur}
                                onChange={this.handleChange.bind(this, 'selectBackground')}
                            />
                        </div>
                    </FormItem>
                    <FormItem wrapperCol={{ span: 16, offset: formItemOffsetSpan }}>
                        <Button
                            name="formPass"
                            onClick={this.handleClick.bind(this, 'PASS')}
                            type="ghost"
                            disabled={disabled}
                            className="mr8"
                        >
                            {this.updateTaskFormBtnView(taskInfo)}
                        </Button>
                        <Button
                            name="formReject"
                            onClick={this.handleClick.bind(this, 'REJECT')}
                            type="ghost"
                            disabled={disabled}
                            className="mr8"
                        >
                            驳回
                        </Button>
                        <Button
                            name="formTempSave"
                            onClick={this.handleClick.bind(this, 'TEMPSAVE')}
                            type="ghost"
                            disabled={disabled}
                            className="mr8"
                        >
                            暂存
                        </Button>
                        <Button
                            name="formClaimReject"
                            onClick={this.handleClick.bind(this, 'CLAIM_REJECT')}
                            type="ghost"
                            disabled={juPeiDisabled}
                            className="mr8"
                        >
                            拒赔
                        </Button>
                        <Button
                            name="formUpload"
                            onClick={this.handleShowUpload}
                            type="ghost"
                            disabled={buChuanDisabled}
                        >
                            补传凭证
                        </Button>
                    </FormItem>
                </Form>
                <BxsVoucherUpload
                    ref="BxsVoucherUpload"
                    show={isShowUpload}
                    voucherRule={voucherRule}
                    change={this.props.changeVoucherRuleValue}
                    onCancel={this.handleHideUpload}
                    submit={this.handleUploadSubmit}
                />
            </div>
        );
    },
    handleHideUpload() {
        this.setState({
            isShowUpload: false
        });
    },
    handleShowUpload() {
        const {source} = this.props;
        if (source === 'CALLCENTER') {
            this.setState({
                isShowUpload: true
            });
        } else {
            this.handleClick('UPLOAD');
        }
    },
    handleUploadSubmit() {
        const {voucherRule} = this.props;
        let canSubmit = true;
        // 设置 voucherRule.rules 配置字段
        Object.keys(voucherRule.rules).forEach(v => {
            if (voucherRule.value[v]) {
                this.refs.BxsVoucherUpload.setFieldsValue({
                    [v]: voucherRule.value[v]
                });
            }
        });
        // 设置 新添加的 mail 字段
        if (voucherRule.value['mail']) {
            this.refs.BxsVoucherUpload.setFieldsValue({
                'mail': voucherRule.value['mail']
            });
        }
        // 验证字段填写
        this.refs.BxsVoucherUpload.validateFields((errors, values) => {
            if (!!errors) {
                console.log('BxsVoucherUpload', !errors);
                canSubmit = !errors;
            }
        });
        if (canSubmit) {
            this.handleHideUpload();
            const isMail = lodash.indexOf(voucherRule.value.sendType, 'mail') !== -1;
            if (isMail) {
                this.props.assessProcess({
                    updateEmail: true
                }, () => {
                    const {node} = this.props.assess.taskInfo;
                    this.taskProcess(node, 'ZUPLOAD');
                })
            } else {
                this.handleClick('ZUPLOAD');
            }
        } else {
            console.log('can not submit');
        }
    },
    handleFocus(e) {
        const {backgroundMemo} = this.props.taskForm;
        this.props.saveTaskFrom({
            showBackground: true
        });
    },
    handleBlur() {
        this.props.saveTaskFrom({
            showBackground: false
        });
    },
    handleChange(key, e) {
        let {backgroundMemo} = this.props.taskForm;
        let newState;
        switch (key) {
            case 'backgroundMemo':
            newState = {
                backgroundMemo: e.target.value,
                showBackground: true
            };
            break;
            case 'frontMemo':
            newState = {frontMemo: e};
            break;
            case 'selectBackground':
            const object = BxsTaskFormResult.NOTE
            const listEle = Object.keys(object).map((val, i) => {
                const obj = object[val];
                const childrenEle = obj.list.map((v, j) => {
                    if(backgroundMemo.indexOf(v.text) != -1){
                        backgroundMemo = backgroundMemo.replace(v.text,'');
                    }
                });
            });
            newState = {
                backgroundMemo: e.target.getAttribute('data-note') + backgroundMemo,
                showBackground: false
            };
            break;
        }
        this.props.saveTaskFrom(newState, () => {
            if (key === 'selectBackground') {
                $('#backgroundMemo').focus();
            }
        });
    },
    handleClick(operate) {
        const {assess, voucherRule, source} = this.props;
        const {accident, fund} = assess;

        // 检查[accident]->[gmtAccident]是否有值
        let gmtAccident = false;
        const accidentTimeFirst = lodash.get(accident, 'gmtAccident.time', false);
        const accidentTimeSecond = lodash.get(accident, 'extMap.gmtAccident.time', false);
        if (accidentTimeFirst || accidentTimeSecond) {
            gmtAccident = true;
        }
        const {node} = this.props.assess.taskInfo;
        const {taskId} = this.props.assess.assess.bxsTaskModel;
        const {frontMemo, backgroundMemo} = this.props.taskForm;
        const fundAmount = lodash.get(fund, `${fund.inAccType}.amount`, '');

        let isCheckPass = true;
        function checkPass(key, data) {
            const tipsText = {
                a: '出险信息-出险时间必填',
                b: '赔付信息-核赔金额必填',
                c: '标准处理结果必填',
                d: '小二备注必填',
                e: '出险信息-email地址不正确',
                f: '赔付信息-核陪金额必须大于0'
            }
            switch (key) {
                case 'e':
                    // 验证邮箱地址
                    const emailReg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
                    if (!emailReg.test(data)) {
                        message.info(tipsText[key]);
                        isCheckPass = false;
                    }
                    break;
                case 'f':
                    // 验证赔付信息-核陪金额大于0
                    if (data <= 0) {
                        message.info(tipsText[key]);
                        isCheckPass = false;
                    }
                    break;
                default:
                    // 验证其他必填项
                    console.log(key, data, typeof data)
                    if (!data) {
                        message.info(tipsText[key]);
                        isCheckPass = false;
                    }
            }
        }
        if (node === 'CONFIRM') {
            // 初审
            switch (operate) {
                case 'PASS': // 通过
                    checkPass('a', gmtAccident);
                    checkPass('b', fundAmount);
                    break;
                case 'REJECT': // 驳回
                    checkPass('a', gmtAccident);
                    checkPass('c', frontMemo);
                    break;
            }
        } else if (node === 'AUDIT') {
            // 待保险机构确认
            switch (operate) {
                case 'REJECT': // 驳回
                case 'CLAIM_REJECT': // 拒赔
                    checkPass('d', backgroundMemo);
                    break;
                case 'PASS':
                    checkPass('f', fundAmount);
                    break;
            }
        }
        if (taskId && isCheckPass) {
            if (node === 'CONFIRM') {
                this.assessProcess(node, operate);
            } else {
                this.taskProcess(node, operate);
            }
        }
    },
    taskProcess(node, operate) {
        const {source} = this.props;
        const {frontMemo, backgroundMemo} = this.props.taskForm;
        const front = frontMemo;
        const {taskModal, taskcenterId, accident} = this.props.assess;
        const data = {
            taskId: taskModal.taskId,
            node: taskModal.node,
            taskcenterId,
            operate,
            frontMemo: front,
            backgroundMemo: backgroundMemo.replace(/[\r\n]/g,"")
        };
        if (source === 'CALLCENTER' && operate === 'ZUPLOAD') {
            const voucherRule = {...this.props.voucherRule};
            const jsonValue = {...voucherRule.value};
            const isMail = lodash.indexOf(voucherRule.value.sendType, 'mail') !== -1;
            const isPush = lodash.indexOf(voucherRule.value.sendType, 'push') !== -1;
            const isCard = lodash.indexOf(voucherRule.value.sendType, 'card') !== -1;
            // 将发送类型转化为字符串
            if (jsonValue.sendType) {
                const sendType = lodash.join([...jsonValue.sendType]);
                jsonValue.sendType = sendType;
            }

            // 如果小二选择了邮件方式的话,
            // 则将邮件模板的desc 也放入 ext 中
            if (isMail) {
                voucherRule.rules.mailTemplateId.array.some(v => {
                    if (v.id === jsonValue.mailTemplateId) {
                        jsonValue.mailTemplateIdDesc = v.desc || '';
                        return true;
                    }
                    return false;
                })
            } else {
                jsonValue.mail = '';
            }

            // 如果选了 push 或 card
            // 要传 pushTemplateIdDesc
            if (isPush || isCard) {
                voucherRule.rules.pushTemplateId.array.some(v => {
                    if (v.id === jsonValue.pushTemplateId) {
                        jsonValue.pushTemplateIdDesc = v.desc || '';
                        return true;
                    }
                    return false;
                })
            }

            data.ext = JSON.stringify(jsonValue);
        }
        let url = '';
        if (operate === 'TEMPSAVE') {
            url = 'bxsTempSave.json';
        } else {
            if (node === 'CONFIRM') {
                url = 'bxsConfirm.json';
            } else if (node === 'CHECK') {
                url = 'bxsCheck.json';
            } else if (node === 'AUDIT') {
                url = 'bxsOfflineAudit.json';
            } else if(node === 'WAIT') {
                url = 'bxsUploadVoucher.json';
            } else {
                message.error('任务当前状态不能执行审批操作', 3);
            }
        }
        // url = false;
        if (url) {
            async({
                url,
                type: 'POST',
                data,
                success: (resp) => {
                    if (resp.stat === 'ok') {
                        message.info('核赔工单处理成功!');
                        this.queryTaskDetail(taskcenterId);
                        this.props.saveTaskFrom({
                            frontMemo: '',
                            backgroundMemo: ''
                        });
                    } else {
                        message.error(`工单中心状态推进失败：${resp.tips}`);
                    }
                }
            });
        }
    },
    assessProcess(node, operate) {
        this.props.assessProcess({}, resp => {
            if (resp.stat === 'ok') {
                this.taskProcess(node, operate);
            } else {
                message.error(`核赔任务数据保存失败: ${resp.tips}`);
            }
        });
    }
});

export default BxsTaskForm;

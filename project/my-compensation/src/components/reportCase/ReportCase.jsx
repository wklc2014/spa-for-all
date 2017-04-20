import React, {Component} from 'react';
import {message} from 'antd';
import lodash from 'lodash';

import TaskOrderInfo from './TaskOrderInfo.jsx';
import SupplementInfo from './SupplementInfo.jsx';
import AccidentInfo from './AccidentInfo.jsx';
import TaskForm from './TaskForm.jsx';
import UserInfo from './UserInfo.jsx';
import util from '../../common/util.js';
import {reportCaseTitle, AccidentData} from './common/const.js';

const ReportCase = React.createClass({
    componentDidMount() {
        // 获取报案数据
        const {
            userId,
            requestId,
            token,
            userName
        } = util.getURLQueryString();
            this.props.getReportCaseList({
                userId,
                requestId,
                token,
                name: userName
            }, resp => {
                const {stat, messageCode, tips} = resp;
                if (stat !== 'ok') {
                    const errorTips = tips || messageCode;
                    message.error(`获取数据失败：${errorTips}`);
                }
            });
    },
    handleSubmit() {
        const {accidentType, supplementInfo, accidentInfo, userInfoParams} = this.props;
        const data = this.getAccidentData();
        let canSubmit = true;
        this.refs.userInfo.validateFields((errors, values) => {
            if (!!errors) {
                console.log('userInfo', !errors);
                canSubmit = !errors;
            }
        });
        this.refs.taskOrderInfo.validateFields((errors, values) => {
            if (!!errors) {
                console.log('taskOrderInfo', !errors);
                canSubmit = !errors;
            }
        });
        if (accidentInfo[accidentType]) {
            this.refs.accidentInfo.setFieldsValue({
                [`${accidentType}-lossAmount`]: accidentInfo[accidentType][`${accidentType}-lossAmount`]
            });
        }
        // 对表单默认的值进行antd设置
        // 否则antd验证无法通过
        if (accidentInfo[accidentType]) {
            const setFieldsValue = {};
            Object.keys(data.accidentHead).forEach(val => {
                const currentObject = data.accidentHead[val];
                lodash.mapKeys(accidentInfo[accidentType], (v, k) => {
                    let value = v;
                    if (!currentObject.disabled && v !== undefined && !currentObject.isHide) {
                        if (currentObject.type === 'number' || currentObject.type === 'integer' || currentObject.type === 'money') {
                            value = lodash.toNumber(value);
                        }
                        setFieldsValue[`${k}`] = value;
                    }
                });
            })
            this.refs.accidentInfo.setFieldsValue(setFieldsValue);
        }
        this.refs.accidentInfo.validateFields((errors, values) => {
            if (!!errors) {
                console.log('accidentInfo', !errors);
                canSubmit = !errors;
            }
        });
        // 对表单默认的值进行antd设置
        // 否则antd验证无法通过
        if (supplementInfo[accidentType]) {
            const setFieldsValue = {};
            Object.keys(data.extHead).forEach(val => {
                const currentObject = data.extHead[val];
                supplementInfo[accidentType].forEach(v => {
                    let value = v[val];
                    if (!currentObject.disabled && v[val] !== undefined && !currentObject.isHide) {
                        if (currentObject.type === 'number' || currentObject.type === 'integer' || currentObject.type === 'money') {
                            value = lodash.toNumber(value);
                        }
                        setFieldsValue[`${val}-${v.key}`] = value;
                    }
                });
            })
            this.refs.supplementInfo.setFieldsValue(setFieldsValue);
        }
        this.refs.supplementInfo.validateFields((errors, values) => {
            if (!!errors) {
                console.log('supplementInfo', !errors);
                canSubmit = !errors;
            }
        });
        // canSubmit = false;
        if (canSubmit) {
            const {requestId, token, name, applicantCertId, applicantPhone} = userInfoParams;
            let userId = userInfoParams.userId;
            if (userId == '88888888') {
                userId = undefined;
            }
            if (!requestId) {
                message.error('csRequestId不能为空', 3);
            } else {
                // 遍历出险信息头字段集
                // 找出【isExt】为【true】的字段
                const bxsAccidentExtStr = {};
                // 其他字段直接附加到url参数对象上
                const accidentAddParams = {};
                Object.keys(data.accidentHead).map(v => {
                    const currentObj = data.accidentHead[v];
                    let retValue = accidentInfo[accidentType][`${accidentType}-${v}`];
                    if (currentObj.type === 'date' && retValue) {
                        retValue = new Date(retValue).getTime();
                    }
                    if (currentObj.isExt) {
                        bxsAccidentExtStr[v] = retValue;
                    } else {
                        accidentAddParams[v] = retValue;
                    }
                })
                const bxsVoucherExtStr = [{
                    content: supplementInfo[accidentType] || []
                }];
                const ajaxparams = Object.assign({}, {
                    userId,
                    requestId,
                    applicantName: name,
                    applicantCertId,
                    applicantPhone,
                    token,
                    bxsVoucherExtStr: JSON.stringify(bxsVoucherExtStr),
                    type: accidentType,
                    bxsAccidentExtStr: JSON.stringify(bxsAccidentExtStr)
                }, accidentAddParams);
                this.props.createReportCase(ajaxparams, d => {
                    if (d.stat === 'ok') {
                        message.success('报案创建成功');
                    } else if (d.stat === 'error') {
                        message.error(d.tips);
                    } else {
                        message.error('报案创建失败');
                    }
                });
            }
        } else {
            console.log('can not submit');
        }
    },
    getAccidentData() {
        let ret = {};
        const {reportCaseList, accidentType} = this.props;
        reportCaseList.some(v => {
            if (v.type === accidentType) {
                ret = v;
                return true;
            }
            return false;
        });
        return ret;
    },
    handleChangeTaskOrderInfo(key, value) {
        const {userId, requestId, token} = this.props.userInfoParams;
        this.props.changeReportCaseData(key, value);
        this.props.getExtListByType(value, {
            requestId,
            token,
            type: value
        });
    },
    handleChangeUserInfo(id, value) {
        this.props.changeUserInfo(id, value);
    },
    render() {
        const {
            userInfoParams,
            reportCaseList,
            accidentType,
            source,
            accidentInfo,
            supplementInfo,
            createSuccess
        } = this.props;
        const data = this.getAccidentData();
        const commonProps = {
            accidentType,
            data,
            disabled: createSuccess
        }
        return (
            <div className="cardInner">
                <UserInfo
                    ref="userInfo"
                    title={reportCaseTitle.user}
                    info={userInfoParams}
                    disabled={createSuccess}
                    change={this.handleChangeUserInfo}
                />
                <TaskOrderInfo
                    ref="taskOrderInfo"
                    title={reportCaseTitle.taskorder}
                    list={reportCaseList}
                    disabled={createSuccess}
                    data={{
                        accidentType,
                        source
                    }}
                    change={this.handleChangeTaskOrderInfo}
                />
                <AccidentInfo
                    ref="accidentInfo"
                    title={reportCaseTitle.accident}
                    {...commonProps}
                    info={accidentInfo}
                    change={this.props.changeAccidentData}
                />
                <SupplementInfo
                    ref="supplementInfo"
                    title={reportCaseTitle.supplement}
                    {...commonProps}
                    info={supplementInfo}
                    add={this.props.addSupplementData}
                    remove={this.props.removeSupplementData}
                    change={(reCordKey, paramskey, value) => {
                        if (accidentType === 'INSURANCE_ACCT_SAFE_ANTI_FRAUD' && paramskey === 'lossAmount') {
                            this.refs.accidentInfo.resetFields([`${accidentType}-lossAmount`]);
                        }
                        this.props.changeSupplementData(reCordKey, paramskey, value);
                    }}
                />
                <TaskForm
                    title={reportCaseTitle.taskform}
                    accidentType={accidentType}
                    disabled={createSuccess}
                    submit={this.handleSubmit}
                />
            </div>
        );
    }
});

export default ReportCase;

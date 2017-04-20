import React from 'react';
import lodash from 'lodash';

import BxsBasicInfo from './BxsBasicInfo.jsx';
import BxsPerson from './BxsPerson.jsx';
import BxsPolicy from './BxsPolicy.jsx';
import BxsRisk from './BxsRisk.jsx';
import BxsAccident from './BxsAccident.jsx';
import BxsTaskHistory from './BxsTaskHistory.jsx';
import BxsFund from './BxsFund.jsx';
import BxsTaskForm from './BxsTaskFormContainer.jsx';
import BxsVoucher from './BxsVoucher.jsx';

import Anchor from './Anchor.jsx';
import Gotop from '../common/Gotop.jsx';

import styles from './Assess.less';
import queryTaskDetail from './common/queryTaskDetail.js';
import permission from './common/permission.js';
import {headHeight} from '../common/const.js';

const Assess = React.createClass({
    mixins: [permission, queryTaskDetail],
    componentDidMount() {
        const {taskcenterId, routeParams} = this.props;
        const {paramsTaskcenterId} = this.props.params;
        const id = paramsTaskcenterId || taskcenterId;
        if (routeParams.leave === 'smsNote') {
            const scrollTo = $('#BxsTaskForm').offset().top - headHeight;
            window.scrollTo(0, scrollTo);
        } else if (routeParams.leave === '' || paramsTaskcenterId){
            if (id) {
                this.queryTaskDetail(id);
            }
        }
    },
    render() {
        const permission = this.getPermission(this.props.assess.taskInfo);
        // 工单信息
        const bxsTaskModel = lodash.get(this.props.assess.assess, 'bxsTaskModel', {});
        const bxsBasicInfoProps = {
            taskcenterId: this.props.assess.taskcenterId,
            typeDesc: bxsTaskModel.typeDesc,
            nodeDesc: bxsTaskModel.nodeDesc,
            source: bxsTaskModel.sourceDesc || bxsTaskModel.source,
            tips: this.props.assess.tips,
            hideInput: true,
            hideIcon: false,
            onQuery: this.queryTaskDetail
        };
        // 用户信息
        const bxsPersonModel = lodash.get(this.props.assess.assess, 'bxsPersonModel', {});
        const zmUpdateTime = lodash.get(bxsPersonModel, 'gmtUpdateZmScore.time', '');
        const socialUpdateTime = lodash.get(bxsPersonModel, 'gmtUpdateSocialScore.time', '');
        const bxsPersonProps = {
            realName: bxsPersonModel.realName, //用户姓名
            applicantUserId: bxsTaskModel.applicantUserId, //会员卡号
            certId: bxsPersonModel.certId, //身份证
            zmScore: bxsPersonModel.zmScore, //芝麻信用
            zmUpdateTime, //芝麻信用更新时间
            applicantPhone: bxsTaskModel.applicantPhone, //联系方式
            socialScore: bxsPersonModel.socialScore, //舆情影响力
            socialUpdateTime //舆情影响力更新时间
        }
        // 保单信息
        const bxsAccidentModel = lodash.get(this.props.assess.assess, 'bxsAccidentModel', {});
        const bxsPolicyProps = {
            policyModel: this.props.policy,
            accidentTime: bxsAccidentModel.gmtAccident
        };
        // 案件信息
        const bxsRiskProps = {
            riskModal: this.props.riskModal,
            taskcenterId: this.props.assess.taskcenterId,
            taskId: bxsTaskModel.taskId,
            disabled: permission.BxsRisk,
            updateRisk: this.props.updateRisk,
            deleteRisk: this.props.deleteRisk,
            addRisk: this.props.addRisk,
            saveRiskNumber: this.props.saveRiskNumber
        }
        // 出险信息
        const bxsAccidentProps = {
            accident: this.props.assess.accident,
            disabled: permission.BxsAccident,
            accidentParams: this.props.assess.accidentParams,
            updateAccident: this.props.updateAccident
        };
        // 工单处理历史
        const bxsTaskHistoryProps = {
            list: this.props.history.list,
            tips: this.props.history.tips
        };
        // 赔付信息
        const hasInAccCardno = lodash.get(bxsTaskModel, 'applicantUserId', false);
        const bxsFundProps = {
            fund: this.props.assess.fund,
            disabled: permission.BxsFund,
            payWayDisabled: !hasInAccCardno || permission.BxsFundPayWay,
            memberDisable: true,
            showSaveButton: false,
            searchInfo: this.props.searchInfo,
            changeFund: this.props.changeFund,
            changeFundType: this.props.changeFundType
        }
        // 理赔凭证
        const bxsVoucherProps = {
            insuranceType: bxsTaskModel.type
        };
        return (
            <div className={styles.contentBox} id="contentBox">
                <div className={styles.contentLeft}>
                    <BxsBasicInfo {...bxsBasicInfoProps} />
                    <BxsPerson {...bxsPersonProps} />
                    <BxsPolicy {...bxsPolicyProps} />
                    <BxsRisk {...bxsRiskProps} />
                    <BxsAccident {...bxsAccidentProps} />
                    <BxsVoucher {...bxsVoucherProps}/>
                    <BxsFund {...bxsFundProps} />
                    <BxsTaskForm />
                    <BxsTaskHistory {...bxsTaskHistoryProps} />
                </div>
                <Anchor />
                <Gotop />
            </div>
        );
    }
});

export default Assess;

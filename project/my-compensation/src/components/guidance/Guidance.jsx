import React, {Component} from 'react';
import {message} from 'antd';
import lodash from 'lodash';

import BxsBasicInfo from '../assess/BxsBasicInfo.jsx';
import BxsPerson from '../assess/BxsPerson.jsx';
import GuideInfo from './GuideInfo.jsx';

import queryTaskDetailForGuide from './common/queryTaskDetailForGuide.js';

const Guidance = React.createClass({
    mixins: [queryTaskDetailForGuide],
    componentDidMount() {
        const {guideTaskCenterID} = this.props.guide;
        const {paramsTaskcenterId} = this.props.params;
        const id = paramsTaskcenterId || guideTaskCenterID;
        if (id) {
            this.getAssessForGuide(id);
        }
    },
    getAssessForGuide(id) {
        this.queryTaskDetailForGuide(id, resp => {
            const taskId = lodash.get(resp, 'assess.bxsTaskModel.taskId', false);
            if (taskId) {
                this.props.getGuideList(taskId, d => {
                    if (d.stat === 'ok') {
                        if (!d.bxsGuideList || (d.bxsGuideList && !d.bxsGuideList.length)) {
                            this.getGuideInfo(id);
                        }
                    }
                });
            } else {
                console.log('getAssessForGuide.json is error.');
            }
        });
    },
    getGuideInfo(id) {
        const {bxsGuideModel, bxsTaskModel} = this.props.guide;
        this.props.getGuideInfo(id, d => {
            const content = lodash.get(d, 'bxsGuideModel.content', '{}');
            if (d.stat === 'ok' && JSON.parse(content).conclusion) {
                this.props.createGuideRecord({
                    taskId: bxsTaskModel.taskId,
                    ruleId: d.bxsGuideModel.ruleId,
                    conditionJson: d.bxsGuideModel.conditionJson,
                    content: d.bxsGuideModel.content
                })
            }
        });
    },
    render() {
        const {
            bxsGuideModel,
            strategeBxsGuideModel,
            bxsTaskModel,
            bxsPersonModel
        } = this.props.guide;

        // 工单信息
        const bxsBasicInfoProps = {
            taskcenterId: this.props.guide.guideTaskCenterID,
            typeDesc: bxsTaskModel.typeDesc,
            nodeDesc: bxsTaskModel.nodeDesc,
            source: bxsTaskModel.sourceDesc || bxsTaskModel.source,
            tips: this.props.guide.assessTips,
            hideInput: true,
            hideIcon: false,
            onQuery: this.getAssessForGuide
        };

        // 用户信息
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
        };

        // 智能引导
        let attIdProps, attTypeProps;
        if (bxsGuideModel.guideId) {
            attIdProps = bxsGuideModel.guideId;
            attTypeProps = 'GUIDE_ID';
        } else {
            attIdProps = bxsTaskModel.taskId;
            attTypeProps = 'TASK_ID';
        }
        const guideInfoProps = {
            answers: this.props.guide.answers,
            record: this.props.guide.record,
            reason: this.props.guide.reason,
            feedbackMemo: this.props.guide.feedbackMemo,
            guideModal: bxsGuideModel,
            strategeGuideModel: strategeBxsGuideModel,
            strategeAnswers: this.props.guide.strategeAnswers,
            strategeRecord: this.props.guide.strategeRecord,
            strategeReason: this.props.guide.strategeReason,
            taskId: attIdProps,
            attType: attTypeProps,
            createTaskId: bxsTaskModel.taskId,
            updateGuide: this.props.updateGuide,
            createGuideRecord: this.props.createGuideRecord,
            getStrategeInfo: this.props.getStrategeInfo,
            guideAgain: () => {
                const id = this.props.guide.guideTaskCenterID;
                this.getGuideInfo(id);
            }
        }
        return (
            <div className="cardInner">
                <BxsBasicInfo {...bxsBasicInfoProps} />
                <BxsPerson {...bxsPersonProps} />
                <GuideInfo {...guideInfoProps} />
            </div>
        )
    }
});

export default Guidance;

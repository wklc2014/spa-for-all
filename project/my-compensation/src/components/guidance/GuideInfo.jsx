import React, {Component} from 'react';
import util from '../../common/util.js';
import {Button, message, Tooltip, Icon} from 'antd';
import operateActions from './common/operateActions.js';

import CardTitle from '../common/CardTitle.jsx';
import GuideScene from './GuideScene.jsx';
import Answer from './Answer.jsx';
import GuideFeedback from './GuideFeedback.jsx';

import ajax from '../../common/ajax.js';

const GuideInfo = React.createClass({
    mixins: [operateActions],
    // 答题
    handleChangeAnswer(newAnswers, options) {
        // console.error(1, newAnswers, options)
        const { relateType, relateValue } = options;
        const {guideModal} = this.props;
        this.props.updateGuide({
            answers: newAnswers || {}
        });
        const content = this.getAnswerInfoProps(guideModal);
        const newContent = this.getNewContent(newAnswers, content);
        if (relateType === 'conclusion') {
            this.props.updateGuide({
                reason: relateValue,
                strategeBxsGuideModel: {},
                strategeAnswers: {},
                strategeRecord: false,
                strategeReason: '',
            });
            this.props.createGuideRecord({
                taskId: this.props.createTaskId,
                ruleId: guideModal.ruleId,
                conditionJson: guideModal.conditionJson,
                content: JSON.stringify(newContent),
                ext: guideModal.ext
            }, resp => {
                if (resp.stat === 'ok') {
                    message.success('创建智能引导记录成功!');
                } else {
                    message.error(`创建智能引导记录失败!${resp.tips}`);
                }
            })
        } else if (relateType === 'strategy') {
            this.props.getStrategeInfo({
                type: 'strategy',
                value: relateValue,
                conditionJson: guideModal.conditionJson,
                content: JSON.stringify(newContent),
            }, null, reasonText => {
                this.props.createGuideRecord({
                    taskId: this.props.createTaskId,
                    ruleId: guideModal.ruleId,
                    conditionJson: guideModal.conditionJson,
                    content: JSON.stringify(this.getNewContent(newAnswers, content, reasonText)),
                    ext: guideModal.ext
                }, resp => {
                    if (resp.stat === 'ok') {
                        message.success('创建智能引导记录成功!');
                    } else {
                        message.error(`创建智能引导记录失败!${resp.tips}`);
                    }
                })
            })
        } else {
            this.props.updateGuide({
                reason: '',
                strategeBxsGuideModel: {},
                strategeAnswers: {},
                strategeRecord: false,
                strategeReason: '',
            });
        }
    },
    getNewContent(newAnswers, content, reasonText) {
        const newContent = {};
        const answerKeys = Object.keys(newAnswers);
        answerKeys.map((v, i) => {
            const no = newAnswers[v];
            newContent[v] = content[v];
            newContent[v].answer[no].checked = true;
            if (reasonText) {
                newContent[v].answer[no].relateValue = reasonText;
            }
        });
        return newContent;
    },
    handleChangeStrategeAnswer(newAnswers, options) {
        // console.error(2, newAnswers, options)
        const { relateType, relateValue } = options;
        const {strategeGuideModel, guideModal, answers} = this.props;
        this.props.updateGuide({
            strategeAnswers: newAnswers || {}
        });
        const content = this.getAnswerInfoProps(guideModal);
        const newContent = this.getNewContent(answers, content);
        const strategeContent = this.getAnswerInfoProps(strategeGuideModel);
        const newStrategeContent = this.getNewContent(newAnswers, strategeContent);
        if (relateType === 'conclusion') {
            this.props.updateGuide({
                strategeReason: relateValue
            });
            this.props.createGuideRecord({
                taskId: this.props.createTaskId,
                ruleId: strategeGuideModel.ruleId,
                conditionJson: guideModal.conditionJson,
                content: JSON.stringify(Object.assign({}, newContent, newStrategeContent)),
                ext: strategeGuideModel.ext
            }, resp => {
                if (resp.stat === 'ok') {
                    message.success('创建智能引导记录成功!');
                } else {
                    message.error(`创建智能引导记录失败!${resp.tips}`);
                }
            })
        }
    },
    // 反馈操作
    handleFeedback(operate) {
        const {feedbackMemo: text} = this.props;
        const tipsObj = {
            GIVE_UP: '放弃引导',
            AGREE: '采纳',
            DISAGREE: '不采纳'
        }
        if (!text) {
            message.info(`请填写${tipsObj[operate]}原因`);
        } else {
            this.createFeedback(operate, text, (resp) => {
                if (resp.stat === 'ok') {
                    message.success(`${tipsObj[operate]}成功!`);
                    this.props.updateGuide({
                        record: true
                    });
                } else {
                    message.error(`${tipsObj[operate]}失败${JSON.stringify(resp)}!`);
                }
            });
        }
    },
    // 重新引导
    handleGuideReset() {
        this.props.updateGuide({
            strategeBxsGuideModel: {},
            strategeAnswers: {},
            strategeRecord: false,
            strategeReason: '',
            record: false,
            reason: '',
            bxsGuideModel: {},
            feedbackMemo: '',
            answers: {}
        });
        this.props.guideAgain();
    },
    // 获取答题信息（object）
    getAnswerInfoProps(guideModal) {
        if (guideModal.content) {
            return JSON.parse(guideModal.content);
        }
        return {};
    },
    render() {
        const {guideModal, strategeGuideModel} = this.props;

        const cardTitleProps = {
            className: 'icon-yindao',
            text: '智能引导'
        };

        // 权限控制
        let btnGiveUpDisabled,
            btnAgainDisabled,
            btnAnswerDisabled,
            btnStrategeAnswerDisabled,
            btnFeedbackDisabled;
        if (util.isEmptyObject(guideModal)) {
            // 如果没有引导信息
            btnAnswerDisabled = true;
            btnStrategeAnswerDisabled = true;
            btnFeedbackDisabled = true;
            btnGiveUpDisabled = true;
        } else {
            btnAnswerDisabled = this.props.record;
            btnStrategeAnswerDisabled = this.props.strategeRecord;
            btnFeedbackDisabled = this.props.strategeRecord || this.props.record || (!this.props.strategeReason && !this.props.reason);
            btnGiveUpDisabled = this.props.record;
        }

        // 场景信息
        let condition = {};
        if (guideModal.conditionJson) {
            condition = JSON.parse(guideModal.conditionJson);
        }
        const sceneInfoProps = {
            info: condition
        }

        // 答题信息
        const answerProps = {
            info: this.getAnswerInfoProps(guideModal),
            record: this.props.record,
            answers: this.props.answers,
            reason: this.props.reason,
            operatorNick: guideModal.operatorNick,
            changeAnswers: this.handleChangeAnswer,
            btnAnswerDisabled,
            title: true,
            startIndex: 0
        };

        // 引导反馈
        const feedbackProps= {
            onFeedback: this.handleFeedback,
            onUpdateMemo: text => {
                this.props.updateGuide({
                    feedbackMemo: text
                });
            },
            memoContent: this.props.feedbackMemo,
            btnFeedbackDisabled,
            btnGiveUpDisabled
        }

        const strategeAnswerProps = {
            info: this.getAnswerInfoProps(strategeGuideModel),
            record: this.props.strategeRecord,
            answers: this.props.strategeAnswers,
            reason: this.props.strategeReason,
            operatorNick: strategeGuideModel.operatorNick,
            changeAnswers: this.handleChangeStrategeAnswer,
            btnStrategeAnswerDisabled,
            title: false,
            startIndex: Object.keys(this.props.answers).length
        }

        return (
            <div className="cardWraper">
                <CardTitle data={cardTitleProps}>
                    <Tooltip
                        placement="top"
                        title="重新引导"
                    >
                        <span
                            className="iconfont icon-zhongxin pointer ml8"
                            onClick={this.handleGuideReset}
                        />
                    </Tooltip>
                </CardTitle>
                <GuideScene {...sceneInfoProps} />
                <Answer {...answerProps} />
                <Answer {...strategeAnswerProps} />
                <GuideFeedback {...feedbackProps} />
            </div>
        )
    }
});

export default GuideInfo;
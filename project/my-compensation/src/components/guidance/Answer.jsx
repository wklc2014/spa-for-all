import React from'react';
import util from '../../common/util.js';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';
import{Form, Button, Row, Col, Input, Radio} from'antd';

const RadioGroup = Radio.Group;

const Answer = React.createClass({
    mixins: [shouldComponentUpdate],
    propTypes: {
        answers: React.PropTypes.object.isRequired,
        info: React.PropTypes.object.isRequired,
    },
    renderQuestionForKey(key, itemNum) {
        const {info, btnAnswerDisabled, answers, record, startIndex} = this.props;
        const questionText = `${itemNum + startIndex}. ${info[key].question}`;
        const value = answers[key];
        const radioEles = info[key].answer.map((v, i) => {
            const radioProps = {
                key: i,
                'data-key': key,
                'data-value': JSON.stringify(v),
                value: i
            }
            return <Radio {...radioProps}>{v.name}</Radio>;
        });
        const radioGroupProps = {
            disabled: btnAnswerDisabled,
            value,
            onChange: this.handleChange
        };
        return (
            <ul key={itemNum}>
                <li className="itemTitle">{questionText}</li>
                <li className="itemElement">
                    <RadioGroup {...radioGroupProps}>
                        {radioEles}
                    </RadioGroup>
                </li>
            </ul>
        );
    },
    renderQuestionForKeys() {
        const {info, answers} = this.props;
        if (util.isEmptyObject(info)) {
            return <p>暂无答题数据</p>;
        }
        const keys = this.getKeysFromProps();
        if (keys.length) {
            return (
                <div className="answerContent">
                    {keys.map((key, i) => this.renderQuestionForKey(key, i + 1))}
                </div>
            );
        }
        return null;
    },
    getKeysFromProps() {
        const {info, answers} = this.props;
        if (info.conclusion) {
            return [];
        }
        const infoKeys = Object.keys(info);
        const answersKeys = Object.keys(answers);
        const length = answersKeys.length;
        if (!length) {
            return infoKeys.slice(0, 1);
        }
        const lastAnswersKey = answersKeys[length - 1];
        const lastAnswersValue = answers[lastAnswersKey];
        const checkedValue = info[lastAnswersKey].answer[lastAnswersValue];

        if (checkedValue.relateType === 'ASK') {
            return [...answersKeys, checkedValue.relateValue];
        }
        return answersKeys;
    },
    handleChange(e) {
        const {answers} = this.props;
        const dataValue = JSON.parse(e.target['data-value']);
        const dataKey = e.target['data-key'];
        const value = e.target['value'];
        let newAnswers = {};
        if (answers[dataKey] !== undefined) {
            // 已选过该题
            // 重新计算 keys
            Object.keys(answers).some(v => {
                if (v === dataKey) {
                    newAnswers[v] = value;
                    return true;
                }
                newAnswers[v] = answers[v];
                return false;
            })
        } else {
            newAnswers = Object.assign(newAnswers, answers, {
                [dataKey]: value
            });
        }
        this.props.changeAnswers(newAnswers, {
            relateType: dataValue.relateType,
            relateValue: dataValue.relateValue
        });
    },
    render() {
        const {reason, operatorNick} = this.props;
        if (util.isEmptyObject(this.props.info)) {
            return null;
        }
        let reasonEle = null;
        let operatorNickEle = null;
        if (reason) {
            if (operatorNick) {
                operatorNickEle = (
                    <p className="reason">
                        <strong>答题小二：</strong>{operatorNick}
                    </p>
                );
            }
            reasonEle = (
                <p className="reason">
                    <strong>结论：</strong>{reason}
                </p>
            );
        }
        let cardSubTitleEle = <div className="cardSubTitle">答题区域</div>;
        if (!this.props.title) {
            cardSubTitleEle = null;
        }
        return(
            <div className={this.props.title ? 'answerWraper title' : 'answerWraper'}>
                { cardSubTitleEle }
                <div className="pl22">
                    {this.renderQuestionForKeys()}
                    {reasonEle}
                    {operatorNickEle}
                </div>
            </div>
        )
    }
});
export default Answer;
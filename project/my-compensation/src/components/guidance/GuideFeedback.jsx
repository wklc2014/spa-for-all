import React from 'react';
import {Form, Button, Row, Col, Input} from 'antd';

const GuideFeedback = React.createClass({
    handleChange(e) {
        this.props.onUpdateMemo(e.target.value);
    },
    render() {
        const {memoContent, btnFeedbackDisabled, btnGiveUpDisabled} = this.props;
        const inputDisabled = btnFeedbackDisabled && btnGiveUpDisabled;
        return (
            <div className="mb16">
                <div className="cardSubTitle">引导反馈</div>
                <div className="mb16 pl22">
                    <Input
                        ref="feedbackInput"
                        type="textarea"
                        style={{
                            width: '100%'
                        }}
                        value={memoContent}
                        onChange={this.handleChange}
                        disabled={inputDisabled}
                        rows={4}
                        className="mb16"
                        placeholder="请填写采纳或不采纳或放弃引导原因"
                    />
                    <div>
                        <Button
                            className="mr8"
                            disabled={btnFeedbackDisabled}
                            onClick={e => {this.props.onFeedback('AGREE')}}
                        >
                            采纳
                        </Button>
                        <Button
                            className="mr8"
                            disabled={btnFeedbackDisabled}
                            onClick={e => {this.props.onFeedback('DISAGREE')}}
                        >
                            不采纳
                        </Button>
                        <Button
                            disabled={btnGiveUpDisabled}
                            onClick={e => {this.props.onFeedback('GIVE_UP')}}
                        >
                            放弃引导
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
});

export default GuideFeedback;
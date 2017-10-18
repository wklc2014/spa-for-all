import React, { Component } from 'react';
import { Steps, Icon, Result, WingBlank, Button } from 'antd-mobile';

import FillInData from './FillInData.jsx';
import ClaimStepOne from './ClaimStepOne.jsx';
import ClaimStepTwo from './ClaimStepTwo.jsx';

const Step = Steps.Step;
const SvgEdit = require('../../../assets/svg/icon-edit.svg');
const SvgData = require('../../../assets/svg/icon-data.svg');
const SvgTime = require('../../../assets/svg/icon-time.svg');

class OnlineClaim extends Component {

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
        }
    }

    onSteps = (current) => {
        this.setState({ current });
    }

    render() {
        const { current } = this.state;

        const stepsData = [{
            title: '填写信息',
            icon: <div className="stepIcon"><Icon type={SvgEdit} /></div>
        }, {
            title: '提交资料',
            icon: <div className="stepIcon"><Icon type={SvgData} /></div>
        }, {
            title: '身份确认',
            icon: <div className="stepIcon"><Icon type="check" /></div>
        }];

        let ChildEle = null;
        switch (current) {
            case 1:
                ChildEle = <FillInData />;
                break;
            case 2:
                ChildEle = <ClaimStepTwo onSteps={this.onSteps} />;
                break;
        }

        return (
            <section>
                <div className="onlineClaimSteps">
                    <Steps direction="horizontal" current={current}>
                        {stepsData.map((v, i) => (
                            <Step key={i} title={v.title} icon={v.icon} />
                        ))}
                    </Steps>
                </div>
                {ChildEle}
            </section>
        )
    }

}

export default OnlineClaim

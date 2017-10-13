import React, { Component } from 'react';
import { Icon, Result, WingBlank, Button } from 'antd-mobile';

const SvgTime = require('../../../assets/svg/icon-time.svg');

class ClaimStepOne extends Component {

    static defaultProps = {}

    onClick = () => {
        this.props.onSteps(2);
    }

    render() {

        const resultTitle = (
            <div className="resultText">
                <p>您的损失信息已通知保险公司</p>
                <p>请尽快提交举证材料启动理赔流程</p>
            </div>
        )

        return (
            <section>
                <div className="onlineClaimResult">
                    <Result
                        img={<Icon type={SvgTime} className="icon" />}
                        title={resultTitle}
                    />
                </div>
                <WingBlank>
                    <Button type="primary" onClick={this.onClick}>
                        我已准备好以上材料，现在提供
                    </Button>
                    <p className="fzNormal tc">如果无需继续，可以点此<span className="spanLink">取消理赔</span></p>
                </WingBlank>
            </section>
        )
    }

}

export default ClaimStepOne

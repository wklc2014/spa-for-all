import React, { Component } from 'react';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';
import FormGroup from '../../common/BForm/FormGroup.jsx';

import * as CONFIGS from '../common/detail.js';

class Detail extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            values: {
                reportNumber: '657944126975268',
                reportDate: '2017-10-17 00:15:20',
                claimAmount: '260元',
            }
        }
    }

    render() {

        return (
            <section>
                <FormGroup
                    configs={CONFIGS.detail_1}
                    values={this.state.values}
                />
                <WhiteSpace size="sm" />
                <FormGroup
                    configs={CONFIGS.detail_2}
                    values={this.state.values}
                />
                <WhiteSpace size="sm" />
                <FormGroup
                    configs={CONFIGS.detail_3}
                    values={this.state.values}
                />
                <WhiteSpace size="sm" />
                <FormGroup
                    configs={CONFIGS.detail_4}
                    values={this.state.values}
                />
                <WhiteSpace size="sm" />
            </section>
        );
    }
}

export default Detail;

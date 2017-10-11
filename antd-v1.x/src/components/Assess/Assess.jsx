/**
 * 用户调查
 */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Button, Modal } from 'antd';

import * as CONFIGS from './common/';
import FormGroup from '../common/BForm/FormGroup.jsx';

class Assess extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            values: {
                userType: 'ALIPAY',
                userCertNo: '123456',
            },
        };
    }

    getRef = () => {
        return this.refs.FormGroup;
    }

    onChange = ({ id, value, type, addValue }) => {
        // console.log(id, value, type, addValue);
        const newValue = { [id]: value };
        this.setState({
            values: { ...this.state.values, [id]: value }
        });
    }

    getUserType() {
        const { userType } = this.state.values;
        return userType;
    }

    getUserConfigs() {
        const configs = CONFIGS.QUERY;
        const userType = this.getUserType();
        const newConfigs = {};
        Object.keys(configs).forEach((v) => {
            // console.log(userType === 'PERSON', v)
            if ((userType === 'PERSON' && v !== 'userId') || (userType !== 'PERSON' && v !== 'userRealName' && v !== 'userCertNo' )) {
                newConfigs[v] = configs[v];
            }
        });

        return newConfigs;
    }

    render() {
        const commonStyle = {
            border: '1px solid #eee',
            marginBottom: 20,
            padding: '10px 20px'
        }

        return (
            <section>
                <Modal
                    visible
                    title="222"
                >
                    <div style={commonStyle}>
                        <FormGroup
                            ref="FormGroup"
                            configs={this.getUserConfigs()}
                            col={3}
                            onChange={this.onChange}
                            formProps={{
                                layout: 'layout_2',
                                defaultValue: true,
                            }}
                            values={this.state.values}
                            sorted={false}
                        />
                    </div>
                    <p>
                        <Button onClick={this.onSubmit} style={{ marginRight: 16 }}>
                            提交
                        </Button>
                        <Button onClick={this.onReset}>
                            重置
                        </Button>
                    </p>
                </Modal>
            </section>
        );
    }
}

export default Assess;

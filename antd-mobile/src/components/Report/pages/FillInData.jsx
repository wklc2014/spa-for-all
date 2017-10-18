import React, { Component } from 'react';
import { WingBlank, Button } from 'antd-mobile';
import FormGroup from '../../common/BForm/FormGroup.jsx';

import DATA from '../common/fillInData.js';

class FillInData extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            values: {
                claimType: 20
            }
        }
    }

    onChange = ({ id, value, type, addValue }) => {
        // console.log(id, value, type, addValue);
        this.setState({
            values: { ...this.state.values, [id]: value },
        })
    }

    render() {

        return (
            <section>
                <div style={{ marginBottom: 24 }}>
                    <FormGroup
                        configs={DATA}
                        onChange={this.onChange}
                        values={this.state.values}
                    />
                </div>
                <WingBlank style={{ marginBottom: 24 }}>
                    <Button type="primary">
                        提交信息
                    </Button>
                </WingBlank>
            </section>
        );
    }
}

export default FillInData;

/**
 * 用户调查
 */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import * as CONFIGS from './common/';
import FormGroup from '../common/BForm/FormGroup.jsx';

class Policy extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            values: {},
        }
    }

    onChange = ({ id, value, type, addValue }) => {
        // console.log(id, value, type, addValue);
        this.setState({
            values: { ...this.state.values, [id]: value },
        })
    }

    render() {
        const commonStyle = {
            border: '1px solid #eee',
            marginBottom: 20,
            padding: '10px 20px'
        }

        return (
            <section>
                <div style={commonStyle}>
                    <FormGroup
                        configs={CONFIGS.UserSurvery}
                        onChange={this.onChange}
                        values={this.state.values}
                    />
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        values: state.UserSurvery.Basic,
    }
}

// export default connect(mapStateToProps)(Policy);
export default Policy;
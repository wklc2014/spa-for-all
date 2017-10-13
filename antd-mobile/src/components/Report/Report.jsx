import { connect } from 'dva';
import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import OnlineClaim from './pages/OnlineClaim.jsx';

class Report extends Component {

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
                <OnlineClaim />
            </section>
        );
    }
}

export default Report;

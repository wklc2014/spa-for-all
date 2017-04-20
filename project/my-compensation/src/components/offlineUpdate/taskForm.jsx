import React, { Component, PropTypes } from 'react';
import {Form, Button} from 'antd';
import {BxsCardTitle} from '../assess/common/data.js';
import CardTitle from '../common/CardTitle.jsx';

const TaskForm = React.createClass({
    proptypes: {
        disabled: React.PropTypes.bool.isRequired,
        operate: React.PropTypes.func.isRequired
    },
    render() {
        const buttonArray = [{
            text: '撤案完结',
            key: 'DONE_CANCELED'
        }, {
            text: '拒赔完结',
            key: 'DONE_CLAIM_REJECT'
        }, {
            text: '赔付完结',
            key: 'DONE_PAID'
        }];

        return (
            <div className="cardWraper">
                <CardTitle data={BxsCardTitle.BxsTaskForm} />
                <Form horizontal>
                    {buttonArray.map((v, i) => (
                        <Button
                            key={i}
                            type="ghost"
                            disabled={this.props.disabled}
                            className="mr8"
                            size="large"
                            onClick={(e) => {this.props.operate(v.key)}}
                        >
                            {v.text}
                        </Button>
                    ))}
                </Form>
            </div>
        );
    }
});

export default TaskForm;

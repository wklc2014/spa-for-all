import React, { Component, PropTypes } from 'react';
import {Form, Button, Row, Col, Icon, message} from 'antd';
import {formItemLayout, BxsCardTitle} from '../assess/common/data.js';
import CardTitle from '../common/CardTitle.jsx';

const FormItem = Form.Item;

const TaskForm = props => {
    const {title, submit, accidentType, disabled} = props;
    if (!accidentType) {
        return null;
    }
    return (
        <div className="cardWraper">
            <CardTitle data={title} />
            <Form horizontal>
                <Button
                    type="primary"
                    size="large"
                    onClick={submit}
                    disabled={disabled}
                >
                    理赔报案
                </Button>
            </Form>
        </div>
    );
};

export default TaskForm;

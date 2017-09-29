import React, { Component } from 'react';
import lodash from 'lodash';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
import FormBox from '../common/BForm/FormBox.jsx';

class Policy extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const showTime = {
            hideDisabledOptions: true,
            defaultValue: moment('00:00:00', 'HH:mm:ss')
        }

        const disabledTime = function (_, ty) {
            // body...
        }

        return (
            <section>
                <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledTime={disabledTime}
                    showTime={showTime}
                />
            </section>
        );
    }
}

export default Form.create()(Policy);

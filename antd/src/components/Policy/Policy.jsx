import React, { Component } from 'react';
import lodash from 'lodash';
import moment from 'moment';
import { Form, Button } from 'antd';
import PicEffect from '../common/PicEffect/PicEffect.jsx';

const IMG = require('../../assets/img/pic.jpg');

class Policy extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    handleClick = () => {

    }

    render() {
        return (
            <section>
                <Button onClick={this.handleClick}>按钮</Button>
                <PicEffect
                    visible={this.state.visible}
                    index={0}
                    filePath={IMG}
                />
            </section>
        );
    }
}

export default Policy;

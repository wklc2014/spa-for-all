import React, { Component } from 'react';
import lodash from 'lodash';
import moment from 'moment';
import { Form, Button } from 'antd';
import PicEffect from '../common/PicEffect/PicEffect.jsx';

const IMG_01 = require('../../assets/img/01.jpg');
const IMG_02 = require('../../assets/img/02.jpg');
const IMG_03 = require('../../assets/img/03.jpg');
const IMG_04 = require('../../assets/img/04.jpg');
const IMG_05 = require('../../assets/img/05.jpg');
const IMG_06 = require('../../assets/img/06.jpg');

class Policy extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            values: [IMG_01, IMG_02, IMG_03, IMG_04, IMG_05, IMG_06],
        };
    }

    handleClick = () => {
        this.setState({ visible: true });
    }

    onCancel = (cb) => {
        this.setState({ visible: false }, cb);
    }

    render() {
        return (
            <section>
                <Button onClick={this.handleClick}>按钮</Button>
                <PicEffect
                    visible={this.state.visible}
                    values={this.state.values}
                    index={0}
                    onCancel={this.onCancel}
                />
            </section>
        );
    }
}

export default Policy;

import React, { Component } from 'react';
import lodash from 'lodash';
import { Table, Button, Input, InputNumber } from 'antd';

class Assess extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const o = {
            assess: 'aaa',
            accident: 'bbb',
            fund: {
                m: 'er',
                n: 123
            },
            ext: 'ffff',
        }
        const keys = Object.keys(o);
        const b = JSON.stringify(o, (key, value) => {
            console.log('key>>>', key);
            console.log('value>>>', value);
            if (keys.indexOf(key) !== -1) {
                if (typeof value === 'string') {
                    return value.toUpperCase();
                }
            }
            return value;
        }, '    ');
        console.log(b);
    }

    render() {


        return (
            <div>

            </div>
        )
    }
}

export default Assess;

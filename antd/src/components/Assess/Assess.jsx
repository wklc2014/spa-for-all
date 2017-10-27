import React, { Component } from 'react';
import moment from 'moment';
import { Form, Table, Button } from 'antd';
import HTable from '../common/HForm/HTable.jsx';
import * as CONFIG_TABLE from './common/';

class Assess extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: 0,
                    accident_time: moment('2017-09-10 12:20:45'),
                    isNeedReturnGoods: '0',
                    multiplier: 2,
                    lossAmount: 3,
                    description: '巴拉巴拉小魔仙',
                }, {
                    key: 1,
                    accident_time: moment('2015-09-10 12:20:45'),
                    isNeedReturnGoods: '1',
                    multiplier: 4,
                    lossAmount: 5,
                    description: '巴拉巴拉小魔仙',
                }
            ],
        };
    }

    handleClick = () => {
        const { dataSource } = this.state;
        this.setState({
            dataSource: [{ key: dataSource.length }, ...dataSource],
        })
    }

    onChange = ({ id, value, order, addType, addValue }) => {
        const { dataSource } = this.state;
        const newDataSource = dataSource.map((v, i) => {
            if (v.key === order) {
                v[id] = value;
            }
            return v;
        });
        this.setState({ dataSource: newDataSource });
    }

    render() {
        const { dataSource } = this.state;

        return (
            <HTable
                configs={CONFIG_TABLE.Assess}
                form={this.props.form}
                dataSource={dataSource}
                onChange={this.onChange}
                isTotal
            />
        )
    }
}

export default Form.create()(Assess);

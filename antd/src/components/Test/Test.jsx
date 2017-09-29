import React, { Component } from 'react';
import { Table, Button, Input, InputNumber } from 'antd';
import lodash from 'lodash';
import { DATA_SOURCE, KEYS, COLUMNS, STATE_ADD } from './common/';

const rate = 10 * 1;
// const rate = 10 * 0.01;

class Assess extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [
                'self-1',
                'self-2',
                'self-3',
                'self-4',
                'self-5',
                'self-6',
                'self-7',
                'self-8',
            ],
            dataSource: DATA_SOURCE,
            add: STATE_ADD,
        }
    }

    handleChange = (value, record, key) => {
        const { dataSource, selectedRowKeys } = this.state;
        const newState = dataSource.map((v) => {
            if (record.key === v.key) {
                v[key] = value;
            }
            return v;
        })
        const data = this.getState(newState, selectedRowKeys);
        this.setState(data);
    }

    onSelectChange = (selectedRowKeys) => {
        const { dataSource } = this.state;
        const data = this.getState(dataSource, selectedRowKeys);
        this.setState(data);
    }

    getState = (dataSource, selectedRowKeys) => {
        const { add } = this.state;
        const newDataSource = dataSource.filter((v) => (lodash.indexOf(selectedRowKeys, v.key) !== -1 && (v.key + '').indexOf('system') === -1));
        const system = dataSource.filter((v) => (lodash.indexOf(selectedRowKeys, v.key) !== -1 && v.key.indexOf('system') !== -1))[0] || {};
        let xiaZhu = 0;
        const kai = {};
        KEYS.forEach((v) => {
            kai[v] = 0;
        })
        newDataSource.forEach((m) => {
            KEYS.forEach((v) => {
                xiaZhu += m[v];
                kai[v] += (system[v] || 0) * m[v];
            })
        })
        KEYS.forEach((v) => {
            let t = '无';
            const s = xiaZhu - kai[v];
            if (s > 0) {
                t = '亏';
            } else if (s < 0) {
                t = '赢';
            }
            add[v] = (
                <div>
                    <p>{`开：${lodash.round(kai[v] * rate, 2)}万`}</p>
                    <p>{`下：${lodash.round(xiaZhu * rate, 2)}万`}</p>
                    <p>{`${t}：${lodash.round(Math.abs(s) * rate, 2)}万`}</p>
                </div>
            );
        })
        return { dataSource, add, selectedRowKeys }
    }

    handleClick = () => {
        const { dataSource, selectedRowKeys } = this.state;
        const data = this.getState(dataSource, selectedRowKeys);
        this.setState(data);
    }

    render() {
        const { add, dataSource } = this.state;
        const newDataSource = [...dataSource, add];

        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange,
            getCheckboxProps: (record) => {
                return { disabled: false };
            }
        }

        const columns = COLUMNS.map((v) => {
            if (v.key !== 'type') {
                v.render = (text, record, index) => {
                    const dom = (
                        <InputNumber
                            value={text}
                            min={0}
                            step={1}
                            onChange={(e) => { this.handleChange(e, record, v.key); }}
                        />
                    )
                    if (record.key.indexOf('type-') !== -1) {
                        // return dom;
                        return `${text * 10}万`;
                    } else if (record.key.indexOf('self-') !== -1) {
                        return dom;
                    }
                    return text;
                }
            }
            return v;
        });

        return (
            <div>
                <div style={{ marginBottom: 24 }}>
                    <Button onClick={this.handleClick} type="primary">
                        运算
                    </Button>
                </div>
                <Table
                    rowKey="key"
                    pagination={false}
                    columns={columns}
                    dataSource={newDataSource}
                    bordered
                    rowSelection={rowSelection}
                    size="small"
                />
            </div>
        )
    }
}

export default Assess;

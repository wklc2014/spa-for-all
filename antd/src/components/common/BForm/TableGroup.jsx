import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Table } from 'antd';
import FormBox from '../BForm/FormBox.jsx';

class TableGroup extends Component {
    static defaultProps = {

    }

    getConfigs = () => {
        const { isSort, configs } = this.props;
        if (!isSort) {
            return configs;
        }
        return configs.sort((m, n) => {
            if (m.order > n.order) {
                return 1;
            } else if (m.order < n.order) {
                return -1;
            } else {
                return 0;
            }
        })
    }

    getTableColumns = () => {
        const { configs } = this.props;
        const newColumns = [];
        if (!configs || !configs.length) {
            return newColumns;
        }
        const newConfigs = this.getConfigs(configs);

        newConfigs.forEach((val, i) => {
            if (val.isHide) { return null; }
            const formItem = val.formItem || {};
            const params = val.params || {};
            const api = val.api || {};
            newColumns.push({
                dataIndex: val.id,
                key: i,
                title: val.name,
                width: params.width,
                render: (text, record) => {
                    switch (record.key) {
                        case 'ts':
                            return text;
                            break;
                        default:
                            const commonProps = {
                                type: val.type,
                                id: val.id,
                                onChange: ({ id, value, type, addValue }) => {
                                    this.props.onChange({
                                        id,
                                        value,
                                        order: record.key,
                                        type,
                                        addValue
                                    });
                                },
                                formItem: {},
                                options: val.options || {},
                                params,
                                api,
                                space: 0,
                                value: text,
                            }
                            return <FormBox {...commonProps} />;
                    }
                }
            });
        })
        return newColumns;
    }

    getTableDataSource = () => {
        const { dataSource, configs, isTotal } = this.props;
        if (!isTotal || !dataSource.length) {
            return dataSource;
        }
        const newDataSource = [...dataSource];
        const newConfigs = this.getConfigs(configs);
        const totalId = newConfigs[0].id;
        const totalData = { [totalId]: '汇总：' };
        newConfigs.forEach((val, i) => {
            const params = val.params || {};
            if (params.eval) {
                newDataSource.forEach((m) => {
                    const evalText = eval(params.eval.replace(/\$/g, 'm'));
                    if (!isNaN(evalText)) {
                        m[val.id] = parseFloat(evalText).toFixed(2);
                    }
                })
            }
            if (params.total) {
                totalData[val.id] = 0;
            }
        });
        Object.keys(totalData).forEach((m) => {
            if (m !== totalId) {
                dataSource.forEach((v) => {
                    if (v[m]) {
                        totalData[m] += parseFloat(v[m]);
                    }
                });
            }
        });
        const newTotalData = {...totalData};
        Object.keys(totalData).forEach((v) => {
            if (v !== totalId) {
                newTotalData[v] = parseFloat(totalData[v]).toFixed(2);
            } else {
                newTotalData[v] = totalData[v];
            }
        })
        newDataSource.push({ key: 'ts', ...newTotalData });
        // console.log('newDataSource>>>', newDataSource)
        return newDataSource;
    }

    render() {
        const { configs } = this.props;
        const newColumns = this.getTableColumns();
        const newDataSource = this.getTableDataSource();

        return (
            <Table
                rowKey="key"
                pagination={false}
                columns={newColumns}
                dataSource={newDataSource}
                bordered
            />
        )
    }
}


TableGroup.propTypes = {
    configs: propTypes.array.isRequired,
    dataSource: propTypes.array.isRequired,
    onChange: propTypes.func,
    isSort: propTypes.bool,
    isTotal: propTypes.bool,
};

export default TableGroup;

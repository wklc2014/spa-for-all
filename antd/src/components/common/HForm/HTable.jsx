import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Table } from 'antd';
import HFormItem from './HFormItem.jsx';

class HTable extends Component {
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
        const { configs, form } = this.props;
        const newColumns = [];
        if (!configs || !configs.length) {
            return newColumns;
        }
        const newConfigs = this.getConfigs(configs);

        newConfigs.forEach((val, i) => {
            if (!val.isHide) {
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
                                const formItemApi = val.formItemApi || {};
                                const optionsApi = val.optionsApi || {};
                                const defaultApi = val.defaultApi || {};
                                const params = val.params || {};
                                const commonProps = {
                                    form,
                                    field: {
                                        type: val.type,
                                        id: `${val.id}__${record.key}`,
                                        onChange: ({ id, value, addType, addValue }) => {
                                            this.props.onChange({
                                                id: id.split('__')[0],
                                                value,
                                                order: record.key,
                                                addType,
                                                addValue,
                                            });
                                        },
                                        params,
                                        formItemApi,
                                        optionsApi,
                                        defaultApi,
                                    },
                                    value: text,
                                }
                                return <HFormItem {...commonProps} />;
                        }
                    }
                });
            }
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


HTable.propTypes = {
    form: propTypes.object.isRequired,
    configs: propTypes.array.isRequired,
    dataSource: propTypes.array.isRequired,
    onChange: propTypes.func,
    isSort: propTypes.bool,
    isTotal: propTypes.bool,
};

export default HTable;

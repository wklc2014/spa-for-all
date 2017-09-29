import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Table } from 'antd';
import FormBox from '../BForm/FormBox.jsx';

class SummaryTable extends Component {
    static defaultProps = {

    }

    getConfigs = () => {
        const { configs } = this.props;
        return Object.keys(configs).sort((m, n) => {
            if (configs[m].order > configs[n].order) {
                return 1;
            } else if (configs[m].order < configs[n].order) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    getTableColumns = () => {
        const { configs } = this.props;
        const newColumns = [];

        if (!configs || !Object.keys(configs).length) {
            return newColumns;
        }

        this.getConfigs(configs).forEach((v, i) => {
            const val = configs[v];
            if (val.isHide) {
                return null;
            }
            newColumns.push({
                dataIndex: v,
                key: v,
                title: val.name,
                width: val.width,
                render: (text, record) => {
                    switch (record.key) {
                        case 'ts':
                            return text;
                            break;
                        default:
                            const commonProps = {
                                ...val,
                                id: v,
                                onChange: ({ id, value, type, addValue }) => {
                                    this.props.onChange({
                                        id,
                                        value,
                                        order: record.key,
                                        type,
                                        addValue
                                    });
                                },
                                placeholder: `请输入${val.name}`,
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
        const { dataSource, configs } = this.props;
        const newDataSource = [...dataSource];
        const sortConfigs = this.getConfigs(configs);
        const firstKey = sortConfigs[0];
        const totalData = { [firstKey]: '汇总：' };
        Object.keys(configs).forEach((v) => {
            const val = configs[v];
            if (val.eval) {
                newDataSource.forEach((m) => {
                    const evalText = eval(val.eval.replace(/\$/g, 'm'));
                    if (!isNaN(evalText)) {
                        m[v] = parseFloat(evalText).toFixed(2);
                    }
                })
            }
            if (val.total) {
                totalData[v] = 0;
            }
        });
        Object.keys(totalData).forEach((m) => {
            if (m !== firstKey) {
                dataSource.forEach((v) => {
                    if (v[m]) {
                        totalData[m] += parseFloat(v[m]);
                    }
                });
            }
        });
        const newTotalData = {...totalData};
        Object.keys(totalData).forEach((v) => {
            if (v !== firstKey) {
                newTotalData[v] = parseFloat(totalData[v]).toFixed(2);
            } else {
                newTotalData[v] = totalData[v];
            }
        })
        newDataSource.push({ key: 'ts', ...newTotalData });
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


SummaryTable.propTypes = {
    configs: propTypes.object.isRequired,
    dataSource: propTypes.array.isRequired,
    onChange: propTypes.func,
};

export default SummaryTable;

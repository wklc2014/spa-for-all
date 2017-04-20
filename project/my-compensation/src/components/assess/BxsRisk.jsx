import React, { Component, PropTypes } from 'react';
import { Row, Col, Table, Button, Input, Icon, Modal, message } from 'antd';
const InputGroup = Input.Group;
import util from '../../common/util.js';
import CardTitle from '../common/CardTitle.jsx';
import {BxsCardTitle} from './common/data.js';

import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';

const BxsRisk = React.createClass({
    // mixins: [shouldComponentUpdate],
    remove(record) {
        this.props.deleteRisk(record, (resp) => {
            if (resp.stat === 'ok') {
                message.success('删除成功');
            } else {
                message.error(resp.tips);
            }
        });
    },
    save(record) {
        const id = $.trim($(`#input${record.key}`).val());
        if (id) {
            const {taskcenterId, taskId} = this.props;
            this.props.updateRisk(taskcenterId, taskId, id, (resp) => {
                if (resp.stat === 'ok') {
                    message.success('保存成功');
                } else {
                    message.error('保存失败');
                }
            });
        }
    },
    handleRiskNumberChange(e) {
        this.props.saveRiskNumber(e.target.value);
    },
    add() {
        this.props.addRisk({
            key: (new Date()).getTime(),
            transDate: util.getDateStr(new Date()),
            add: true
        })
    },
    render() {
        const {riskModal, disabled} = this.props;
        const dataList = [...riskModal];
        const columns = [{
            title: '案件编号',
            dataIndex: 'riskNumber',
            key: 'riskNumber',
            width: '20%',
            render: (text, record) => {
                if (record.add) {
                    return (
                        <InputGroup className="ant-search-input">
                            <Input
                                type="text"
                                id={`input${record.key}`}
                                disabled={disabled}
                                value={text}
                                onChange={(e) => {
                                    this.props.addRisk({
                                        riskNumber: e.target.value
                                    }, record.key);
                                }}
                            />
                            <div className="ant-input-group-wrap">
                                <Button
                                    onClick={this.save.bind(this, record)}
                                    className="ant-search-btn"
                                >
                                    保存
                                </Button>
                            </div>
                        </InputGroup>
                    );
                }
                return text;
            }
        }, {
            title: '被盗类型',
            dataIndex: 'typeTheft',
            width: '10%',
            key: 'typeTheft'
        }, {
            title: '案件定性',
            dataIndex: 'riskType',
            width: '10%',
            key: 'riskType'
        }, {
            title: '结案陈词',
            dataIndex: 'endExpression',
            key: 'endExpression'
        }, {
            title: '资损资金',
            dataIndex: 'capitalLoss',
            width: 80,
            key: 'capitalLoss'
        }, {
            title: '案件状态',
            dataIndex: 'riskStatus',
            width: '10%',
            key: 'riskStatus'
        }, {
            title: '操作',
            width: 80,
            render: (text, record, index) => (
                <Button
                    type="ghost"
                    data-key={record.key}
                    onClick={this.remove.bind(this, record)}
                    size="small"
                    disabled={disabled}
                >
                    删除
                </Button>
            )
        }];
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsRisk.id}>
                <CardTitle data={BxsCardTitle.BxsRisk} />
                <div className="mb8">
                    <Button
                        type="ghost"
                        onClick={this.add}
                        disabled={disabled}
                        className="mr8"
                    >
                        添加
                    </Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataList}
                    pagination={false}
                    bordered
                    className="constumTablePlaceholder"
                />
            </div>
        );
    }
});

export default BxsRisk;

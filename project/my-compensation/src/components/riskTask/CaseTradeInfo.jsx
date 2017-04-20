import React from 'react';
import {Table, Menu, Dropdown, Icon, Tag, Modal, message} from 'antd';
import {Form, Select, Radio, Button, Input} from 'antd';
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import {tagsListChoose} from './staticData/index.js';
import TradeEdit from './TradeEdit.jsx';
import CardTitle from '../common/CardTitle.jsx';

const CaseTradeInfo = React.createClass({
    getInitialState() {
        return {
            isModalVisiable: false,
            tradeEditData: {}
        };
    },
    handleModalCancel() {
        this.setState({
            isModalVisiable: false
        });
    },
    handleButtonClick(voucherOrderId) {
        let tradeEditData = {};
        this.props.data.some((val, i) => {
            if (val.voucherOrderId === voucherOrderId) {
                tradeEditData = val;
                return true;
            }
        });
        this.setState({
            isModalVisiable: true,
            tradeEditData
        });
    },
    handleSubmit(data) {
        this.props.tagged(data, (status) => {
            if (status) {
                message.success('修正成功');
            }
            this.setState({
                isModalVisiable: false,
                tradeEditData: {}
            });
        });
    },
    handleRowClassName(rows) {
        return rows.isError ? 'bgRed' : '';
    },
    render() {
        const _this = this;
        const {isModalVisiable, tradeEditData} = this.state;
        const {title, data} = this.props;
        const columns = [{
            title: '业务订单号',
            dataIndex: 'orderBizId',
            className: 'wp15',
            key: 'orderBizId'
        }, {
            title: '来源',
            dataIndex: 'orderOrg',
            className: 'wp8',
            key: 'orderOrg'
        }, {
            title: '业务类型',
            dataIndex: 'orderBizSubType',
            className: 'wp8',
            key: 'orderBizSubType'
        }, {
            title: '业务状态',
            dataIndex: 'orderBizStatus',
            className: 'wp10',
            key: 'orderBizStatus'
        }, {
            title: '金额',
            dataIndex: 'amount',
            className: 'wp5',
            key: 'amount'
        }, {
            title: (
                <div>
                    <span>智慧标签 &nbsp;</span>
                    <Tag color="blue">计损</Tag>
                    <Tag color="yellow">减损</Tag>
                    <Tag color="green">无损</Tag>
                    <Tag>不参与计算</Tag>
                    <Tag color="red">错误</Tag>
                </div>
            ),
            dataIndex: 'ORDER_ATTR',
            className: 'wp30',
            key: 'ORDER_ATTR',
            render: (text, record) => {
                const tagsEle = [];
                const tagsArray = JSON.parse(text);
                if (tagsArray.length) {
                    // 交易有标签
                    tagsArray.forEach((val, i) => {
                        const countType = tagsListChoose[val].countType;
                        let color = '';
                        switch (countType) {
                            case '99': // 错误的标签
                                color = 'red';
                                break;
                            case '1': //计损的标签
                                color = 'blue';
                                break;
                            case '-1': //减损的标签
                                color = 'yellow';
                                break;
                            case '0': //无损的标签
                                color = 'green';
                                break;
                            default:
                            //不参与计算的标签
                                color = '';
                        }
                        tagsEle.push(
                            <Tag
                                key={i}
                                color={color}
                            >
                                {`${tagsListChoose[val].text}`}
                            </Tag>
                        );
                        return val;
                    });
                    return <div>{tagsEle}</div>;
                } else {
                    // 没有标签
                    return <div><Tag color="blue">正常资损交易</Tag></div>;
                }
            }
        }, {
            title: '备注信息',
            dataIndex: 'memo',
            className: 'wp10',
            key: 'memo'
        }, {
            title: '操作',
            key: 'operation',
            className: 'wp8',
            render: (text, record) => {
                if (!record.voucherOrderId) {
                    return null;
                }
                return (
                    <Button
                        type="primary"
                        onClick={_this.handleButtonClick.bind(_this, record.voucherOrderId)}
                    >
                        编辑
                    </Button>
                );
            }
        }];
        let dataSource = [];
        if (data && data.length) {
            dataSource = data.map((val, i) => {
                const amount = val.orderBizAmount ? val.orderBizAmount.amount : '';
                const ORDER_ATTR = val.labelInfoMap ? val.labelInfoMap.ORDER_ATTR : '[]';
                // 记录交易标签计算类型并去重
                const tagsArrayType = [];
                let isErrorTrade = false;
                JSON.parse(ORDER_ATTR).some(val => {
                    if (tagsListChoose[val].countType === '99') {
                        isErrorTrade = true;
                        return true;
                    }
                    return false;
                })
                if (!isErrorTrade) {
                    JSON.parse(ORDER_ATTR).filter(val => {
                        return tagsListChoose[val].countType !== '100';
                    }).forEach(val => {
                        tagsArrayType.push(tagsListChoose[val].countType);
                    });
                    const tagsArrayUniqType = _.uniq(tagsArrayType);
                    if (tagsArrayUniqType.length && tagsArrayUniqType.length != 1) {
                        isErrorTrade = true;
                    }
                }
                return {
                    voucherOrderId: val.voucherOrderId,
                    orderBizId: val.orderBizId,
                    orderOrg: val.orderOrg,
                    orderBizType: val.orderBizType,
                    orderBizStatus: val.orderBizStatus,
                    orderBizSubType: val.orderBizSubType,
                    amount,
                    ORDER_ATTR,
                    memo: val.memo,
                    isError: isErrorTrade
                };
            });
        }
        let modalEle = null;
        if (isModalVisiable) {
            modalEle = (
                <Modal
                    title="修正标签"
                    visible={isModalVisiable}
                    footer={null}
                    width={'60%'}
                    onCancel={this.handleModalCancel}
                >
                    <TradeEdit
                        data={tradeEditData}
                        ok={this.handleSubmit}
                        cancle={this.handleModalCancel}
                    />
                </Modal>
            );
        }
        return (
            <div className="cardWraper">
                <CardTitle data={this.props.titleData} />
                <Table
                    className="constumTablePlaceholder"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    bordered
                    rowClassName={this.handleRowClassName}
                />
                {modalEle}
            </div>
        );
    }
});

export default CaseTradeInfo;

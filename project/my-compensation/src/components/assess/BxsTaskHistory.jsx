import React from 'react';
import {Table, Icon} from 'antd';
import util from '../../common/util.js';
import CardTitle from '../common/CardTitle.jsx';
import {BxsCardTitle} from './common/data.js';

import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';

const BxsTaskHistory = React.createClass({
    mixins: [shouldComponentUpdate],
    render() {
        const columns = [{
            title: '操作时间',
            dataIndex: 'gmtOperate',
            key: 'gmtOperate',
            render: (text) => {
                if (text) {
                    return util.getTimeStrFromTime(parseInt(text, 10));
                }
                return '';
            }
        }, {
            title: '操作人',
            dataIndex: 'operatorName',
            key: 'operatorName'
        }, {
            title: '操作类型',
            dataIndex: 'actionType',
            key: 'actionType'
        }, {
            title: '操作前状态',
            dataIndex: 'beforeNodeName',
            key: 'beforeNodeName'
        }, {
            title: '操作后状态',
            dataIndex: 'afterNodeName',
            key: 'afterNodeName'
        }, {
            title: '备注',
            dataIndex: 'memo',
            key: 'memo',
            width: 500
        }];
        const pagination = {
            total: this.props.list.length
        };
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsTaskHistory.id}>
                <CardTitle data={BxsCardTitle.BxsTaskHistory} />
                <Table
                    className="constumTablePlaceholder"
                    columns={columns}
                    dataSource={this.props.list}
                    pagination={pagination}
                    bordered
                    locale={
                        {emptyText: this.props.tips}
                    }
                />
            </div>
        );
    }
});

export default BxsTaskHistory;

import React from 'react';
import util from '../../common/util.js';
import {Table} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import {cardTitleData} from './staticData/data.js';

const SmsList = props => {
    const columns = [{
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone',
        width: '20%'
    }, {
        title: '短信内容',
        dataIndex: 'content',
        key: 'content',
        width: '40%'
    }, {
        title: '操作人',
        dataIndex: 'operateUser',
        key: 'operateUser',
        width: '10%'
    }, {
        title: '发送时间',
        dataIndex: 'sendDate',
        key: 'sendDate',
        width: '15%',
        render: text => util.getDateStrFromTime(text)
    }, {
        title: '发送状态',
        dataIndex: 'sendStatus',
        key: 'sendStatus',
        width: '15%'
    }];
    const pagination = {
        total: props.list.length
    };
    return (
        <div className="cardWraper">
            <CardTitle data={cardTitleData.recordList} />
            <Table
                columns={columns}
                dataSource={props.list}
                pagination={false}
                bordered
                className="constumTablePlaceholder"
            />
        </div>
    )
}

export default SmsList;

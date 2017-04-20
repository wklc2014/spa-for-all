import React from 'react';
import {Table, Tag} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
const CaseAccountInfo = React.createClass({
    render() {
        const {title, data} = this.props;
        const columns = [{
            title: '涉案人用户ID',
            className: 'wp20',
            dataIndex: 'objectId',
            key: 'objectId'
        }, {
            title: '涉案人主被动定性',
            className: 'wp15',
            dataIndex: 'identityType',
            key: 'identityType'
        }, {
            title: '涉案人角色定性',
            className: 'wp15',
            dataIndex: 'optAttribute',
            key: 'optAttribute',
            render: (text) => (typeof text === 'string' ? text : '')
        }, {
            title: '涉案人标签',
            dataIndex: 'accountPropertyMap',
            key: 'accountPropertyMap',
            className: 'wp50',
            render: (text, record) => {
                if (!text) {
                    return null;
                }
                const ret = [];
                Object.keys(text).map((val, i) => {
                    ret.push(
                        <Tag key={i}>
                            {val}：{text[val]}
                        </Tag>
                    );
                });
                return ret;
            }
        }];
        let dataSource = [];
        if (data && data.length) {
            dataSource = data.map((val, i) => {
                return {
                    objectId: val.objectId,
                    identityType: val.identityTypeDesc,
                    optAttribute: val.optAttributeDesc,
                    accountPropertyMap: val.accountPropertyMap
                };
            });
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
                />
            </div>
        );
    }
});

export default CaseAccountInfo;

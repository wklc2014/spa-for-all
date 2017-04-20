import React from 'react';
import _ from 'underscore';
import {Row, Col, Form, Select, Radio, Button, Input, Tag, Icon,Tooltip} from 'antd';

import CardTitle from '../common/CardTitle.jsx';
import util from '../../common/util.js';
import countAmount from './staticData/countAmout.js';

const CaseAmount = React.createClass({
    render() {
        const {data, titleData, riskTask} = this.props;
        const targetData = [];
        data.forEach(v => {
            targetData.push({
                tagList: JSON.parse(v.labelInfoMap.ORDER_ATTR),
                amount: v.orderBizAmount.cent
            })
        })
        const total = countAmount(targetData);
        let referContent = '';
        if(!util.isEmptyObject(riskTask)){
            let canRefer = (parseInt(riskTask.lossAmount.cent) == parseInt(total)) && (total<=1000000) && (riskTask.finishFirstType!='调账结案');
            referContent = (
                canRefer ?
                    <Tooltip placement="top" title="理算结果可采纳，满足采纳条件：1、和案件损失金额相同；2、金额不大于一万；3、非调账结案" >
                        <Icon type="check-circle" style={{color:'#00a0e8'}}/>
                    </Tooltip>
                    :
                    <Tooltip placement="top" title="理算结果不可采纳，需人工干预。不能同时满足以下条件：1、和案件损失金额相同；2、金额不大于一万；3、非调账结案" >
                        <Icon type="question-circle" style={{color:'red'}}/>
                    </Tooltip>
            )
        }
        let contentEle = null;
        if (data.length) {
            contentEle = (
                <div className="ant-table ant-table-bordered">
                    <div className="ant-table-body">
                        <table className="constom-table" style={{width: '30%'}}>
                            <tbody className="ant-table-tbody">
                                <tr>
                                    <td width="50%" className="th">可赔付金额</td>
                                    <td width="50%">{total/100} &nbsp; &nbsp;{referContent}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            );

        }
        return (
            <div className="cardWraper">
                <CardTitle data={titleData} />
                {contentEle}
            </div>
        );
    }
});

export default CaseAmount;

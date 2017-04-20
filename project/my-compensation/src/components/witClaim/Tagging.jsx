import React from 'react';
import { Row, Col ,Table, Input, Button } from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import {TaggingCardTitle} from './staticData/index.js';
import './Tagging.less';
import util from '../../common/util.js';

const columns = [{
    title: '标注时间',
    dataIndex: 'gmtCreate',
    key: 'gmtCreate',
    className: 'colGmtCreate',
    render(text, row, index) {
            return <label>{util.getTimeStrFromJavaDate(text)}</label>;
    }
}, {
    title: '标注人',
    dataIndex: 'operator',
    key: 'operator',
    className: 'colOperate'
}, {
    title: '标注结论',
    dataIndex: 'action',
    key: 'action',
    className: 'colAction'
},{
    title: '备注',
    dataIndex: 'content',
    key: 'content',
    className: 'colContent'
},{
    title: '标注来源',
    dataIndex: 'source',
    key: 'source',
    className: 'colSource'
}];

let Tagging = React.createClass({

    componentDidMount() {
        console.log("==============Tagging==============params",this.props.params);
        const riskTaskId = this.props.riskTaskId;
        const modelName = this.props.modelName;

        if(riskTaskId && modelName){
            this.props.queryModelEvaluation(riskTaskId,modelName, ()=>{});
        }
    },

    componentWillReceiveProps(nextProps){
        console.log("==============Tagging,receiveProps==============",nextProps);
    },

    componentWillUpdate(nextProps,nextState){
        console.log("==============Tagging,componentWillUpdate==============",nextProps);
    },

    createModelEvaluation(stat){
        const modelName = this.props.modelName;
        const memo = $.trim($(`#memo_${modelName}`).val());
        let action = "";
        if(stat==='AGREE'){
            action = "认可";
        }else if(stat==='UNKNOWN'){
            action = "不确定";
        }else if(stat==='DISAGREE'){
            action = "不认可";
        }
        const riskTaskId = this.props.riskTaskId;

        this.props.createModelEvaluation(riskTaskId,modelName,action,memo,()=>{
           $(`#memo_${modelName}`).val('');
           this.props.queryModelEvaluation(riskTaskId,modelName);
        });
    },
    render() {
        const modelName = this.props.modelName;
        const data = this.props.data;
        return (
            <div>
                <Row style={{marginBottom:20}}>
                    <Col span={10} offset={2}>
                        <CardTitle data={TaggingCardTitle.BiaoZhu} />
                        <Input id={`memo_${modelName}`} type="textarea" style={{marginBottom:8,height:100}} />
                        <Button type="primary" style={{width:70}} onClick={this.createModelEvaluation.bind(this,'AGREE')}>认可</Button>
                        <Button type="default" style={{width:70,marginLeft:15}} onClick={this.createModelEvaluation.bind(this,'UNKNOWN')}>不确定</Button>
                        <Button style={{backgroundColor:'red',width:70,color:'#eee ',marginLeft:15}} onClick={this.createModelEvaluation.bind(this,'DISAGREE')}>不认可</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <CardTitle data={TaggingCardTitle.HistoryBiaoZhu} />
                        <Table
                            className="constumTablePlaceholder"
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            bordered
                        />
                    </Col>
                </Row>
            </div>
        );
    }
});


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {queryModelEvaluation, createModelEvaluation} from '../redux/actions/witClaim_action.js';

function mapStateToProps(state, ownProps) {
    let data = state.witClaim.tagging;
    if(ownProps.modelName == "反骗赔个体模型"){
        data = state.witClaim.singTagging
    }
    return {
        data: data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        queryModelEvaluation,
        createModelEvaluation
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tagging);

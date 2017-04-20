import React from 'react';
import { Row, Col ,Table, Input, Button } from 'antd';
const ModelTagging = React.createClass({
    createModelEvaluation(stat){
        const memo = $.trim($("#memo").val());
        const opt = {
            who: this.props.who,
            type: stat,
            riskTaskId: this.props.riskTaskId,
            memo,
        }
        this.props.createModelEvaluation(opt);
    },
    render() {
        return (
            <div>
                <Row style={{marginBottom:20}}>
                    <Col span={10} offset={2}>
                        <h2 style={{marginBottom:8}}>对模型结论标注</h2>
                        <Input id="memo" type="textarea" style={{marginBottom:8,height:100}} />
                        <Button type="primary" style={{width:70}} onClick={this.createModelEvaluation.bind(this,'A')}>认可</Button>
                        <Button type="default" style={{width:70,marginLeft:15}} onClick={this.createModelEvaluation.bind(this,'B')}>不确定</Button>
                        <Button style={{backgroundColor:'red',width:70,color:'#eee ',marginLeft:15}} onClick={this.createModelEvaluation.bind(this,'C')}>不认可</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <h2 style={{marginBottom:8}}>历史标注情况</h2>
                        <Table columns={columns} dataSource={data} pagination={false} size='small' bordered />
                    </Col>
                </Row>
            </div>
        );
    }
});

export default ModelTagging;

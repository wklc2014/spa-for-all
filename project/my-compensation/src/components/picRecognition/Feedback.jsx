import React, {Component} from 'react';
import util from '../../common/util.js';
import {Button, message, Tooltip, Icon, Input} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import ajax from '../../common/ajax.js';

const VoucherInfo = React.createClass({
    createModelEvaluation(action) {
        const memo = $.trim($('#memo').val());
        if (util.isEmptyObject(memo)) {
            message.info('请填写反馈信息');
            return;
        }
        let attType = 'VOUCHER_ID';
        let attId = this.props.picData.voucherId;
        if(util.isEmptyObject(attId)) {
            attType = 'PIC_URL';
            attId = this.props.picData.filePath.length > 200
                    ? this.props.picData.filePath.substring(0,200)
                    : this.props.picData.filePath;
        }
        const args = {
            action,
            content: memo,
            modelName: '图片识别',
            attType,
            attId
        }
        this.props.createModelEvaluation(args, ()=> {
            this.props.updataPicData({
                disabled: true,
                memo
            });
        });
    },
    handleInputChange(e) {
        this.props.updataPicData({
            memo: e.target.value
        });
    },
    render() {
        const cardTitleProps = {
            icon: 'book',
            text: '反馈区域'
        };
        let {disabled} = this.props.picData;
        return (
            <div className="cardWraper">
                <CardTitle data={cardTitleProps} />
                <div>
                    <Input disabled={disabled} id="memo" type="textarea" onChange={this.handleInputChange} value={this.props.picData.memo} style={{marginBottom:8, height:100}} />
                    <Button disabled={disabled} type="primary" style={{width:70}} onClick={this.createModelEvaluation.bind(this,'AGREE')}>认可</Button>
                    <Button disabled={disabled} className="m-btn" type="default" style={{width:70,marginLeft:16}} onClick={this.createModelEvaluation.bind(this,'DISAGREE')}>不认可</Button>
                </div>
            </div>
        )
    }
});

export default VoucherInfo;
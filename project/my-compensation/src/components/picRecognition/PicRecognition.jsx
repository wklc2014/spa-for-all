import React from 'react';
import { Button, Table, Select, Row, Col, Form, DatePicker, Input, message } from 'antd';
import async from '../redux/common/async.js';
import CardTitle from '../common/CardTitle.jsx';
import {sidebarConfig} from '../common/const.js';
import util from '../../common/util.js';
import VoucherInfo from './VoucherInfo.jsx';
import Feedback from './Feedback.jsx';

const PicRecognition = React.createClass({
    componentDidMount() {
        const voucherId = this.props.params.voucherId;
        const dataList = this.props.list;
        const _this = this;
        if(dataList.length > 0 && voucherId) {
            dataList.forEach(val => {
                if (val.voucherId === voucherId) {
                    //更新图片信息
                    this.props.updatePicInfo({
                        filePath: val.filePath,
                        voucherId: val.voucherId,
                        sourceImg: val.filePath,
                        disabled: false,
                        memo: ''
                    });
                    //如果带入的ext有值，且值不为空（包含除"result"之外的元素），
                    //则标签直接显示除"result"之外的所有信息，不需要调用后台图片识别接口
                    if(util.isEmptyObject(val.ext)) {
                        if (val.filePath) {
                            _this.props.pictureAnalyse(val.filePath, val.voucherId);
                        }
                    } else {
                        _this.props.updateAnalyse(val.ext);
                    }
                }
            });
        }
    },
    handleChangeImg(url) {
        const _this = this;
        var ImgObj = new Image();
        ImgObj.src= url;
        ImgObj.onload = function() {
            const {picData} = _this.props;
            let voucherId = _this.props.params.voucherId;
            if (url !== _this.props.sourceImg) {
                voucherId = null;
            }

            _this.props.pictureAnalyse(url, voucherId, () => {
                _this.props.updatePicInfo({
                    disabled: false,
                    filePath: url,
                    voucherId,
                    memo: ''
                })
            });
        }
        ImgObj.onerror = function() {
            _this.props.updatePicInfo({
                disabled: true
            });
            message.error('请输入正确的图片地址',5);
        }
    },
    relAgain() {
        const {picData} = this.props;
        this.props.pictureAnalyse(picData.filePath, picData.voucherId, () => {
            this.props.updatePicInfo({
                disabled: false,
                memo: ''
            })
        });
    },
    render() {
        return (
            <div className="cardInner">
                <VoucherInfo
                    changeImg={this.handleChangeImg}
                    picData = {this.props.picData}
                    relAgain = {this.relAgain}
                />
                <Feedback
                    picData = {this.props.picData}
                    createModelEvaluation = {this.props.createModelEvaluation}
                    disabled = {this.props.picData.disabled}
                    updataPicData = {this.props.updatePicInfo}
                />
            </div>
        );
    }
});

export default PicRecognition;

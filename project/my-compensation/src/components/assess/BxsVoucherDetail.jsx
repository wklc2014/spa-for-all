import React from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import lodash from 'lodash';
import { Row, Col, message, Input, Select, Button, Tooltip, Modal, Radio, Icon, Popover} from 'antd';
import styles from './BxsVoucherDetail.less';
import util from '../../common/util.js';
import PERMISSION from './common/permission.js';
import EmailNote from './common/EmailNote.jsx';
import BxsVoucherUpload from './BxsVoucherUpload.jsx';
import BxsVoucherDetailModalContent from './BxsVoucherDetailModalContent.jsx';
import BxsVoucherDetailOperateButton from './BxsVoucherDetailOperateButton.jsx';
import '../../common/jquery.mousewheel.js';
import '../../common/jquery.easydrag.js';
/**
 * 图片预览框相关设置
 */
const MODAL_SIZE = {
    minWidth: 400,
    maxWidth: $(window).width() * .9,
    imgInitWidth: 400,
    imgInitRotate: 0,
    changeRotate: 90,
    subWidth: 16 * 2
};

// 异步加载图片
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}

export const BxsVoucherDetail = React.createClass({
    mixins: [
        PERMISSION
    ],
    getInitialState() {
        return {
            isVisible: false,
            isShowEmailNote: false,
            modalData: {},
            imgPrimaryWidth: 0,
            imgPrimaryHeight: 0,
            imgCurrentWidth: 0,
            imgCurrentRotate: 0,
            imgContainerWidth: 0,
            imgContainerHeight: 0,
            currentIndex: null
        };
    },

    handleDblclick(e) {
        this.handleOperate('reset');
    },

    handleMouse(event) {
        if (event.shiftKey) {
            if (event.originalEvent.deltaY > 0) {
                this.handleOperate('zoomOut');
            } else {
                this.handleOperate('zoomIn');
            }
        }
    },

    // modal 图片操作
    handleTooltip(val, idx) {
        const imgSrc = `downloadVoucher.resource?voucherId=${val.voucherId}`;
        loadImageAsync(imgSrc)
            .then((image) => {
                const height = lodash.round(MODAL_SIZE.imgInitWidth * image.height / image.width);
                this.setState({
                    isVisible: true,
                    modalData: val,
                    imgPrimaryWidth: image.width,
                    imgPrimaryHeight: image.height,
                    imgCurrentWidth: MODAL_SIZE.imgInitWidth,
                    imgCurrentRotate: MODAL_SIZE.imgInitRotate,
                    imgContainerWidth: MODAL_SIZE.imgInitWidth,
                    imgContainerHeight: height,
                    currentIndex: idx
                }, () => {
                    $('#voucherModelImage').on('mousewheel', this.handleMouse);
                    $('#voucherModelImage').on('dblclick', this.handleDblclick);
                    $("#voucherModelImage").easydrag();
                    $("#voucherModelImage").ondrag(function (e, ele) {
                        $(ele).removeClass(styles.modalImage);
                    });
                });
            })
            .catch((e) => {
                console.log(e);
            })
    },

    // 切换凭证类型和凭证审核select框
    handleSelect(val, key, value) {
        let retObject;
        this.props.list.some(v => {
            if (val.id === v.id) {
                retObject = v;
                return true;
            }
        });
        if (key === 'memo') {
            retObject[key] = value.split('=')[1];
            retObject['status'] = value.split('=')[0];
        } else {
            retObject[key] = value;
        }
        this.props.updateVoucherList(JSON.stringify(retObject), val.id, key, value);
    },
    handleHideImageModal() {
        this.setState({
            isVisible: false
        }, () => {
            $('#voucherModelImage').off('dblclick', this.handleDblclick);
            $('#voucherModelImage').off('mousewheel', this.handleMouse);
            $("#voucherModelImage").dragOff();
        });
    },
    handleHideEmailNote() {
        this.setState({
            isShowEmailNote: false
        });
    },
    getClampNumber(number) {
        return lodash.clamp(
            Math.round(number),
            MODAL_SIZE.minWidth,
            MODAL_SIZE.maxWidth
        );
    },

    // 图片交互
    handleOperate(type, e) {
        const {currentIndex} = this.state;
        const {imgCurrentWidth, imgCurrentRotate} = this.state;
        const {imgPrimaryWidth, imgPrimaryHeight} = this.state;
        const {imgContainerWidth, imgContainerHeight} = this.state;
        let newImageWidth = imgCurrentWidth;
        let newImageRotate = Number(imgCurrentRotate);
        let newContainerWidth = imgContainerWidth;
        let newContainerHeight = imgContainerHeight;
        switch(type) {
            case 'zoomIn':
                newContainerWidth = this.getClampNumber(newContainerWidth * 0.9);
                break;
            case 'zoomOut':
                newContainerWidth = this.getClampNumber(newContainerWidth * 1.1);
                break;
            case 'rotate':
                if (newImageRotate >= 270) {
                    newImageRotate = 0;
                } else {
                    newImageRotate += MODAL_SIZE.changeRotate;
                }
                newContainerWidth = this.getClampNumber(newContainerHeight);
                break;
            case 'reset':
                newImageRotate = MODAL_SIZE.imgInitRotate;
                newContainerWidth = MODAL_SIZE.imgInitWidth;
                break;
            case 'prev':
                if (currentIndex == 0) {
                    message.info('已经是第一张了');
                } else {
                    this.handleTooltip(this.props.list[currentIndex - 1], currentIndex - 1);
                }
                break;
            case 'next':
                if (currentIndex == this.props.list.length - 1) {
                    message.info('已经是最后一张了');
                } else {
                    this.handleTooltip(this.props.list[currentIndex + 1], currentIndex + 1);
                }
                break;
        }
        if (newImageRotate === 90 || newImageRotate === 270) {
            newContainerHeight = lodash.round(newContainerWidth *imgPrimaryWidth / imgPrimaryHeight);
            newImageWidth = newContainerHeight;
        } else {
            newContainerHeight = lodash.round(newContainerWidth *imgPrimaryHeight / imgPrimaryWidth);
            newImageWidth = newContainerWidth;
        }
        this.setState({
            imgCurrentWidth: newImageWidth,
            imgCurrentRotate: newImageRotate,
            imgContainerWidth: newContainerWidth,
            imgContainerHeight: newContainerHeight
        }, () => {
            $('#voucherModelImage').addClass(styles.modalImage);
        })
    },
    render() {
        const {
            isShowEmailNote,
            isVisible,
            modalData,
            imgCurrentWidth,
            imgCurrentRotate,
            imgContainerWidth,
            imgContainerHeight
        } = this.state;
        const {list, taskInfo, voucherDescModel} = this.props;
        const permission = this.getPermission(taskInfo);
        const disabled = permission.BxsVoucher;
        const modalImageClasss = classnames(
            styles.modalImage,
            `rotate_${imgCurrentRotate}`
        );
        let content = '';
        let popoverHide = "isHide_true";
        if (voucherDescModel) {
            popoverHide = 'isHide_false';
            const popoverContent = JSON.parse(voucherDescModel.content);
            let str = '<table border="1" bordercolor="#EEE" cellspacing="0"><tbody>';
            popoverContent.map((trVal, i) => {
                str += '<tr>'
                    trVal.map((tdVal, j) => {
                        if (tdVal === '') {
                            tdVal = '&nbsp;';
                        }
                        str += '<td>'+tdVal+'</td>'
                    })
                str += '</tr>'
            })
            str += '</tbody></table>';
            content = <div dangerouslySetInnerHTML={{__html: str}}></div>;
        }
        return (
            <div>
                <div className="cardSubTitle">
                    <span className={popoverHide}>
                        <Popover content={content} title="" placement="right" trigger="hover">
                            <Icon
                                type="info-circle-o"
                                style={{fontWeight: 'bold',marginRight: 5}}
                            />
                        </Popover>
                    </span>
                    <span>用户上传凭证</span>
                </div>
                <div className={styles.detailWraper}>
                    {list.map((val, i) => {
                        let extValue = val.ext;
                        let result = '';
                        if (extValue) {
                            result = JSON.parse(extValue).result;
                        }
                        return (
                            <div className={styles.detailContent} key={i}>
                                <div className={styles.detailImage}>
                                    <Tooltip title="点击查看大图" placement="topRight">
                                        <img
                                            src={`downloadVoucher.resource?voucherId=${val.voucherId}`}
                                            onClick={this.handleTooltip.bind(this, val, i)}
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.detailItemWraper}>
                                    <p className={styles.detailItemText}>
                                        {
                                            val.filePath.indexOf('http') === 0 ? <Tooltip placement="top" title="图片识别">
                                            <Link to={`/picRecognition/${val.voucherId}`} className={styles.detailIcon}><Icon type="eye"/></Link>
                                            </Tooltip> : null
                                        }
                                        {util.getDateStrFromJavaDate(val.gmtCreate)}
                                    </p>
                                    <BxsVoucherDetailModalContent
                                        insuranceType={this.props.insuranceType}
                                        voucherAuditList={this.props.voucherAuditList}
                                        modalData={val}
                                        disabled={disabled}
                                        change={(e, type) => {
                                            this.handleSelect(val, type, e);
                                        }}
                                    />
                                    {result ? (
                                        <p>审核建议：{result}</p>
                                    ) : null}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {isVisible ? (
                    <Modal
                        width={imgContainerWidth + MODAL_SIZE.subWidth}
                        title={(
                            <div>
                                <span className="mr8">凭证审核</span>
                                <Tooltip
                                    title={(
                                        <div>
                                            <p>缩小放大：shift + 鼠标滚轮</p>
                                            <p>还原：鼠标左键双击</p>
                                        </div>
                                    )}
                                    placement="top">
                                    <Icon
                                        type="info-circle-o"
                                        className="pointer"
                                        id="voucherModelImageIcon"
                                    />
                                </Tooltip>
                            </div>
                        )}
                        visible
                        footer={false}
                        onCancel={this.handleHideImageModal}
                    >
                        <BxsVoucherDetailOperateButton
                            disabled={disabled}
                            onClick={this.handleOperate}
                        />
                        <BxsVoucherDetailModalContent
                            insuranceType={this.props.insuranceType}
                            voucherAuditList={this.props.voucherAuditList}
                            modalData={modalData}
                            disabled={disabled}
                            change={(e, type) => {
                                this.handleSelect(modalData, type, e);
                            }}
                        />
                        <div
                            ref="voucherModelImageContainer"
                            style={{
                                width: imgContainerWidth,
                                height: imgContainerHeight
                            }}
                            className={styles.voucherModelImageContainer}
                        >
                            <img
                                ref="voucherModelImage"
                                id="voucherModelImage"
                                style={{
                                    width: imgCurrentWidth
                                }}
                                className={modalImageClasss}
                                src={`downloadVoucher.resource?voucherId=${modalData.voucherId}`}
                            />
                            <Icon
                                type="circle-left"
                                className={styles.modalIconLeft}
                                onClick={e => this.handleOperate('prev', e)}
                            />
                            <Icon
                                type="circle-right"
                                className={styles.modalIconRight}
                                onClick={e => this.handleOperate('next', e)}
                            />
                        </div>
                    </Modal>
                ) : null}
                <EmailNote
                    show={isShowEmailNote}
                    onCancel={this.handleHideEmailNote}
                />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        list: state.assess.voucher.list,
        taskInfo: state.assess.taskInfo,
        voucherAuditList: state.assess.voucherAuditList,
        voucherDescModel: state.assess.voucherDescModel
    };
}

import {
    updateVoucherList,
    addVoucherList
} from '../redux/actions/assess_action.js';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateVoucherList,
        addVoucherList
    }, dispatch);
}

const BxsVoucherDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BxsVoucherDetail);
export default BxsVoucherDetailContainer;

import React, { Component } from 'react';
import { Modal, Tooltip, Icon, Button, Alert, message } from 'antd';
import jQuery from 'jQuery';
import lodash from 'lodash';
import classnames from 'classnames';
import OperateButton from './OperateButton.jsx';
import loadImageAsync from './loadImageAsync.js';

import '../../../assets/js/jquery.mousewheel.js';
import '../../../assets/js/jquery.easydrag.js';

import prevIcon from './prev.png';
import nextIcon from './next.png';

import './picEffect.less';

const MAX_WIDTH = Math.round(jQuery(window).width() * .9);

class PicEffect extends Component {

    static defaultProps = {
        title: '对话框',
        filePath: '',
        minWidth: 500,          // 图片最小宽度
        maxWidth: MAX_WIDTH,    // 图片最大宽度
        subWidth: 16 * 2,
    }

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            loading: false,
            errors: '',
            imageInitWidth: 0,
            imageInitHeight: 0,
            imageWidth: 0,
            imageHeight: 0,
            imageRotate: 0,
            containerWidth: 0,
            containerHeight: 0,
        }
    }

    componentDidMount() {
        this.planRender(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.planRender(nextProps);
    }

    getClampNumber(number) {
        const { minWidth, maxWidth } = this.props;
        let resultNumber = Math.round(number);
        if (resultNumber < minWidth) {
            return minWidth;
        } else if (resultNumber > maxWidth) {
            return maxWidth;
        }
        return resultNumber;
    }

    planRender(props) {
        const { visible, values } = props;
        const { index } = this.state;
        if (visible) {
            this.setState({ loading: true });
            loadImageAsync(values[index])
                .then((img) => {
                    const width = this.getClampNumber(img.width);
                    const height = Math.round(img.height / img.width * width);
                    this.setState({
                        loading: false,
                        imageInitWidth: img.width,
                        imageInitHeight: img.height,
                        imageWidth: width,
                        imageHeight: height,
                        containerWidth: width,
                        containerHeight: height,
                        errorText: '',
                    }, () => {
                        jQuery('#ImageContent').on('mousewheel', this.onMouse);
                        jQuery('#ImageContent').on('dblclick', this.onDblclick);
                        jQuery("#ImageContent").easydrag();
                        jQuery("#ImageContent").ondrag(function (e, ele) {
                            jQuery(ele).removeClass('modalImage');
                        });
                    })
                })
                .catch((e) => {
                    console.log(e);
                    this.setState({ errors: e.toString(), loading: false });
                })
        }
    }

    onOperate = (type) => {
        const { index } = this.state;
        const { imageInitWidth, imageInitHeight } = this.state;
        const { imageWidth, imageHeight } = this.state;
        const { containerWidth, containerHeight } = this.state;
        const { imageRotate } = this.state;
        let newImageWidth = imageWidth;
        let newImageRotate = Number(imageRotate);
        let newContainerWidth = containerWidth;
        let newContainerHeight = containerHeight;
        let newIndex = index;
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
                    newImageRotate += 90;
                }
                newContainerWidth = this.getClampNumber(newContainerHeight);
                break;
            case 'reset':
                newImageRotate = 0;
                newContainerWidth = imageInitWidth;
                break;
            case 'prev':
                if (newIndex == 0) {
                    message.info('已经是第一张了');
                } else {
                    newIndex --;
                }
                break;
            case 'next':
                if (newIndex == this.props.values - 1) {
                    message.info('已经是最后一张了');
                } else {
                    newIndex ++;
                }
                break;
        }
        if (imageInitWidth && imageInitHeight) {
            if (newImageRotate === 90 || newImageRotate === 270) {
                newContainerHeight = lodash.round(newContainerWidth *imageInitWidth / imageInitHeight);
                newImageWidth = newContainerHeight;
            } else {
                newContainerHeight = lodash.round(newContainerWidth *imageInitHeight / imageInitWidth);
                newImageWidth = newContainerWidth;
            }
        }
        console.log(newImageWidth, newContainerWidth)
        this.setState({
            imageWidth: newImageWidth,
            imageRotate: newImageRotate,
            containerWidth: newContainerWidth,
            containerHeight: newContainerHeight,
            index: newIndex,
        }, () => {
            jQuery('#voucherModelImage').addClass('modalImage');
        })
    }

    onMouse = (type) => {
        const { index } = this.props;

    }

    onDblclick = (type) => {
        const { index } = this.props;

    }

    onCancel = () => {
        this.props.onCancel(this.offEvent);
    }

    offEvent() {
        jQuery('#voucherModelImage').off('dblclick', this.handleDblclick);
        jQuery('#voucherModelImage').off('mousewheel', this.handleMouse);
        jQuery("#voucherModelImage").dragOff();
    }

    getArrowIconProps = (type) => {
        const altTexts = {
            prev: '上一张',
            next: '下一张',
        };
        const srcIcons = {
            prev: prevIcon,
            next: nextIcon,
        };
        return {
            onClick: e => this.onOperate(type, e),
            src: srcIcons[type],
            alt: altTexts[type],
            className: `icon${lodash.capitalize(type)}`,
        }
    }

    render() {
        const { visible, subWidth } = this.props;
        if (!visible) return null;

        const {
            imageWidth,
            imageHeight,
            containerWidth,
            containerHeight,
            errorText,
            imageRotate,
        } = this.state;

        const tooltipTitle = (
            <div>
                <p>缩小放大：shift + 鼠标滚轮</p>
                <p>还原：鼠标左键双击</p>
            </div>
        );

        const modalTitle = (
            <div>
                <span style={{ marginRight: 8 }}>{this.props.title}</span>
                <Tooltip title={tooltipTitle} placement="top">
                    <Icon type="info-circle-o" className="pointer" />
                </Tooltip>
            </div>
        );

        const imageContentClasss = classnames(
            'imageContent',
            `rotate_${imageRotate}`
        );

        const prevProps = this.getArrowIconProps('prev');
        const nextProps = this.getArrowIconProps('next');

        return (
            <Modal
                visible
                title={modalTitle}
                footer={false}
                onCancel={this.onCancel}
                width={containerWidth + subWidth}
            >
                <OperateButton
                    onClick={this.onOperate}
                />
                <section className="picEffectWraper">
                    <div
                        ref="ImageContainer"
                        className="imageContainer"
                        style={{
                            width: containerWidth,
                            height: containerHeight
                        }}
                    >
                        {!errorText ? (
                            <img
                                ref="ImageContent"
                                id="ImageContent"
                                className={imageContentClasss}
                                style={{ width: imageWidth }}
                                src={this.props.values[this.state.index]}
                            />
                        ) : <p className="lineFeed">{errorText}</p>}
                        <img {...prevProps} />
                        <img {...nextProps} />
                    </div>
                </section>
            </Modal>
        )
    }
}

export default PicEffect;

import React, { Component } from 'react';
import { Modal, Tooltip, Icon, Button, Alert, message } from 'antd';
import propTypes from 'prop-types';
import jquery from 'jquery';
import lodash from 'lodash';
import classnames from 'classnames';
import OperateButton from './OperateButton.jsx';
import loadImageAsync from './loadImageAsync.js';

import '../../../assets/js/jquery.mousewheel.js';
import '../../../assets/js/jquery.easydrag.js';

import prevIcon from './prev.png';
import nextIcon from './next.png';

import './picEffect.less';

const MAX_WIDTH = Math.round(jquery(window).width() * .9);
const SUB_WIDTH = 16 * 2;
const IMAGE_ID = 'IAMGE_CONTENT';

class PicEffect extends Component {

    static defaultProps = {
        title: '对话框',
        values: [],
        index: 0,
        minWidth: 400,          // 图片最小宽度
        maxWidth: MAX_WIDTH,    // 图片最大宽度
    }

    constructor(props) {
        super(props);
        this.state = {
            containerWidth: 0,
            containerHeight: 0,
            originalWidth: 0,
            originalHeight: 0,
            width: 0,
            height: 0,
            rotate: 0,
            loading: false,
            errors: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.pictureInit(nextProps);
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

    pictureInit(props) {
        const { visible, values, index } = props;
        if (visible) {
            this.setState({ loading: true });
            loadImageAsync(values[index])
                .then((img) => {
                    const width = this.getClampNumber(img.width);
                    const height = Math.round(img.height / img.width * width);
                    this.setState({
                        originalWidth: img.width,
                        originalHeight: img.height,
                        width: width,
                        height: height,
                        containerWidth: width,
                        containerHeight: height,
                        rotate: 0,
                        errors: '',
                        loading: false,
                    }, this.pictureBindEvent)
                })
                .catch((e) => {
                    console.log(e);
                    this.setState({ errors: e.toString(), loading: false });
                })
        }
    }

    pictureBindEvent = () => {
        // const d = jquery(`#${IMAGE_ID}`)
        // d.on('mousewheel', this.onMouse).on('dblclick', this.onDblclick)
        // if (this.props.drag) {
        //     d.easydrag().ondrag(function (e, ele) {
        //         jquery(ele).removeClass('unDraging');
        //     });
        // }
    }

    pictureUnBindEvent = () => {
        // const d = jquery(`#${IMAGE_ID}`)
        // d.off('dblclick', this.handleDblclick).off('mousewheel', this.handleMouse);
        // if (this.props.drag) {
        //     d.dragOff();
        // }
    }

    onAction = (type) => {
        const { index } = this.props;
        const {
            containerWidth,
            containerHeight,
            originalWidth,
            originalHeight,
            width,
            height,
            rotate,
            loading,
            errors,
        } = this.state;
        let newWidth = width;
        let newRotate = Number(rotate);
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
                if (newRotate >= 270) {
                    newRotate = 0;
                } else {
                    newRotate += 90;
                }
                newContainerWidth = this.getClampNumber(newContainerHeight);
                break;
            case 'reset':
                newRotate = 0;
                newContainerWidth = this.getClampNumber(originalWidth);
                break;
            case 'prev':
                if (newIndex == 0) {
                    message.info('已经是第一张了');
                } else {
                    newIndex --;
                }
                break;
            case 'next':
                if (newIndex == this.props.values.length - 1) {
                    message.info('已经是最后一张了');
                } else {
                    newIndex ++;
                }
                break;
        }
        if (originalWidth && originalHeight) {
            if (newRotate === 90 || newRotate === 270) {
                newContainerHeight = lodash.round(newContainerWidth * originalWidth / originalHeight);
                newWidth = newContainerHeight;
            } else {
                newContainerHeight = lodash.round(newContainerWidth * originalHeight / originalWidth);
                newWidth = newContainerWidth;
            }
        }
        if (type === 'prev' || type === 'next') {
            this.props.onChange(newIndex);
        } else {
            this.setState({
                width: newWidth,
                rotate: newRotate,
                containerWidth: newContainerWidth,
                containerHeight: newContainerHeight,
            });
        }
        jquery(`#${IMAGE_ID}`).addClass('unDraging');
    }

    onMousewheel = (event) => {
        if (event.shiftKey) {
            const { deltaX, deltaY } = event;
            const checkKey = deltaX == -0 ? deltaY : deltaX;
            if (checkKey > 0) {
                this.onAction('zoomOut');
            } else {
                this.onAction('zoomIn');
            }
        }
    }

    onDblclick = () => {
        this.onAction('reset');
    }

    onCancel = () => {
        this.props.onCancel(() => this.pictureUnBindEvent);
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
            onClick: e => this.onAction(type, e),
            src: srcIcons[type],
            alt: altTexts[type],
            className: `icon${lodash.capitalize(type)}`,
        }
    }

    render() {
        const { visible } = this.props;
        if (!visible) return null;

        const { width, containerWidth, containerHeight, errors, rotate } = this.state;

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
            'unDraging',
            `rotate_${rotate}`,
        );

        const prevProps = this.getArrowIconProps('prev');
        const nextProps = this.getArrowIconProps('next');

        return (
            <Modal
                visible
                title={modalTitle}
                footer={false}
                onCancel={this.onCancel}
                width={containerWidth + SUB_WIDTH}
                bodyStyle={{ fontSize: 12 }}
            >
                <section className="picEffectWraper">
                    <section className="imageButtons">
                        <OperateButton
                            btns={this.props.btns}
                            onClick={this.onAction}
                        />
                    </section>
                    <div
                        ref="ImageContainer"
                        className="imageContainer"
                        style={{ width: containerWidth, height: containerHeight }}
                    >
                        {!errors ? (
                            <img
                                id={IMAGE_ID}
                                className={imageContentClasss}
                                style={{ width: width }}
                                src={this.props.values[this.props.index]}
                                onWheel={this.onMousewheel}
                                onDoubleClick={this.onDblclick}
                            />
                        ) : <Alert message={errors} type="error" />}
                        <img {...prevProps} />
                        <img {...nextProps} />
                    </div>
                </section>
            </Modal>
        )
    }
}

PicEffect.propTypes = {
    onCancel: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,
    values: propTypes.array.isRequired,
    index: propTypes.number,
    minWidth: propTypes.number,
    maxWidth: propTypes.number,
    title: propTypes.string,
    visible: propTypes.bool,
};

export default PicEffect;

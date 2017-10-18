import React, { Component } from 'react';
import { Modal, Tooltip, Icon } from 'antd';
import jQuery from 'jQuery';
import lodash from 'lodash';
import classnames from 'classnames';
import loadImageAsync from '../utils/loadImageAsync.js';
import '../../../assets/js/jquery.mousewheel.js';
import '../../../assets/js/jquery.easydrag.js';

const MAX_WIDTH = jQuery(window).width() * .9;

class PicEffect extends Component {

    static defaultProps = {
        modalTitle: '对话框',
        filePath: 'filePath',
        minWidth: 500,          // 图片最小宽度
        maxWidth: MAX_WIDTH,    // 图片最大宽度
    }

    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            imageInitWidth: 0,
            imageInitHeight: 0,
            imageWidth: 0,
            imageHeight: 0,
            imageRotate: 0,
            containerWidth: 200,
            containerHeight: 200,
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
        console.log(Math.round(number), minWidth, maxWidth)
        return lodash.clamp( Math.round(number), minWidth, maxWidth );
    }

    planRender(props) {
        const {visible, filePath} = props;
        if (visible) {
            loadImageAsync(filePath)
                .then((img) => {
                    const width = this.getClampNumber(img.width);
                    const height = Math.round(img.height / img.width * width);
                    this.setState({
                        imageInitWidth: img.width,
                        imageInitHeight: img.height,
                        imageWidth: width,
                        imageHeight: img.height,
                        containerWidth: width,
                        containerHeight: img.height,
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
                    this.setState({ errorText: e.toString() });
                })
        }
    }

    onOperate = (type) => {
        const { index } = this.props;

    }

    onMouse = (type) => {
        const { index } = this.props;

    }

    onDblclick = (type) => {
        const { index } = this.props;

    }

    render() {
        const { visible } = this.props;
        if (!visible) return null;

        const {
            imageWidth,
            imageHeight,
            containerWidth,
            containerHeight,
            errorText,
        } = this.state;

        const tooltipTitle = (
            <div>
                <p>缩小放大：shift + 鼠标滚轮</p>
                <p>还原：鼠标左键双击</p>
            </div>
        );

        const modalTitle = (
            <div>
                <span style={{ marginRight: 8 }}>{this.props.modalTitle}</span>
                <Tooltip title={tooltipTitle} placement="top">
                    <Icon type="info-circle-o" className="pointer" />
                </Tooltip>
            </div>
        );

        console.log(imageWidth)

        return (
            <Modal
                visible
                title={modalTitle}
                footer={false}
                onCancel={this.onCancel}
            >
                <div
                    ref="ImageContainer"
                    style={{ width: containerWidth, height: containerHeight }}
                >
                    {!errorText ? (
                        <img
                            ref="ImageContent"
                            id="ImageContent"
                            style={{ width: imageWidth, height: imageHeight }}
                            src={this.props.filePath}
                        />
                    ) : <p className="lineFeed">{errorText}</p>}
                    <Icon
                        type="circle-left"
                        className="modalIconLeft"
                        onClick={e => this.onOperate('prev', e)}
                    />
                    <Icon
                        type="circle-right"
                        className="modalIconRight"
                        onClick={e => this.onOperate('next', e)}
                    />
                </div>
            </Modal>
        )
    }
}

export default PicEffect;

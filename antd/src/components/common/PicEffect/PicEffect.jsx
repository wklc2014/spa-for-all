import React, { Component } from 'react';
import { Modal, Tooltip, Icon, Button } from 'antd';
import jQuery from 'jQuery';
import lodash from 'lodash';
import classnames from 'classnames';
import loadImageAsync from '../utils/loadImageAsync.js';
import '../../../assets/js/jquery.mousewheel.js';
import '../../../assets/js/jquery.easydrag.js';

const MAX_WIDTH = Math.round(jQuery(window).width() * .9);
const ButtonGroup = Button.Group;

const renderButton = ({ onClick, disabled }) => {
    const btns = [
        [
            { value: 'zoomIn', label: '缩小' },
            { value: 'zoomOut', label: '放大' }
        ],
        [
            { value: 'rotate', label: '旋转' },
            { value: 'reset', label: '还原' },
        ],
        [
            { value: 'prev', label: '上一张' },
            { value: 'next', label: '下一张' },
        ]
    ]
    const btnEle = btns.map((val, i) => {
        const style = {};
        if (btns.length === i + 1) {
            style.marginRight = 8;
        }
        const ele = val.map((v, j) => {
            return (
                <Button
                    key={j}
                    onClick={(e) => {onClick(v.value, e)}}
                    type="ghost"
                >
                    {v.label}
                </Button>
            )
        })
        return <ButtonGroup disabled={disabled} style={style}>{ele}</ButtonGroup>
    });
    return (
        <ButtonGroup
            disabled={props.disabled}
            className={cls}
        >
            {btnEle}
        </ButtonGroup>
    );
}

const OperateButton = props => (
    <div className="operateButtonGroup">
        <div className="mb8">
            {renderButton(1, {...props})}
            {renderButton(2, {...props})}
            {renderButton(3, {...props})}
        </div>
    </div>
);

class PicEffect extends Component {

    static defaultProps = {
        modalTitle: '对话框',
        filePath: 'filePath',
        minWidth: 500,          // 图片最小宽度
        maxWidth: MAX_WIDTH,    // 图片最大宽度
        subWidth: 16 * 2,
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
        let resultNumber = Math.round(number);
        if (resultNumber < minWidth) {
            return minWidth;
        } else if (resultNumber > maxWidth) {
            return maxWidth;
        }
        return resultNumber;
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
                <span style={{ marginRight: 8 }}>{this.props.modalTitle}</span>
                <Tooltip title={tooltipTitle} placement="top">
                    <Icon type="info-circle-o" className="pointer" />
                </Tooltip>
            </div>
        );

        // console.log('imageWidth>>>', imageWidth)
        console.log('imageHeight>>>', imageHeight)

        const imageContentClasss = classnames(
            'imageContent',
            `rotate_${imageRotate}`
        );

        return (
            <Modal
                visible
                title={modalTitle}
                footer={false}
                onCancel={this.onCancel}
                width={containerWidth + subWidth}
            >
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
                            style={{ width: imageWidth, height: imageHeight }}
                            src={this.props.filePath}
                        />
                    ) : <p className="lineFeed">{errorText}</p>}
                    <Icon
                        type="circle-left"
                        className="iconLeft"
                        onClick={e => this.onOperate('prev', e)}
                    />
                    <Icon
                        type="circle-right"
                        className="iconRight"
                        onClick={e => this.onOperate('next', e)}
                    />
                </div>
            </Modal>
        )
    }
}

export default PicEffect;

import React, {Component} from 'react';
import util from '../../common/util.js';
import {Button, message, Tooltip, Icon, Input, Tag} from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import ajax from '../../common/ajax.js';
import styles from './VoucherInfo.less';
const VoucherInfo = React.createClass({
    getInitialState() {
        return {
            isVisible: false
        };
    },
    toggleInput() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    },
    handleSearch() {
        const node = this.refs.inputImg.refs.input;
        const value = node.value;
        if (!value) {
            message.info('图片地址不能为空');
        } else {
            this.props.changeImg($.trim(value));
        }
    },
    toBidu() {
        window.open(`http://image.baidu.com/n/pc_search?queryImageUrl=${this.props.picData.filePath}`)
    },
    render() {
        const {picData} = this.props;
        const labelInfo = JSON.parse(picData.ext);
        const cardTitleProps = {
            icon: 'picture',
            text: '图片信息'
        };
        return (
            <div className="cardWraper">
                <CardTitle data={cardTitleProps}>
                    {this.props.hideIcon ? null : (
                        <Tooltip
                            placement="top"
                            title="换个图片地址"
                        >
                            <span className="taskCenterIcon">
                                <Icon
                                    type="info-circle-o"
                                    onClick={this.toggleInput}
                                />
                            </span>
                        </Tooltip>
                    )}
                </CardTitle>
                <div className="mb16">
                    {
                        this.state.isVisible ? <div>
                            <Input
                                className = {styles.inputSearch}
                                ref="inputImg"
                                placeholder="图片地址"
                                label="图片地址"
                                defaultValue={picData.filePath}
                            /><Button
                                className = {styles.btnSearch}
                                type="primary"
                                onClick={this.handleSearch}
                                >
                                查询
                            </Button>
                        </div> : null
                    }
                </div>
                <div className={styles.detailConetent}>
                    <div className={styles.detailImageWraper}>
                        <article className={styles.detailImage}>
                            <img src={picData.filePath} />
                        </article>
                        <div className={styles.tagInfo}>
                            {
                                Object.keys(labelInfo).map((val, i) => {
                                    if(val !== 'result') {
                                        return (
                                            <Tag key={i}>{val}：{labelInfo[val]}</Tag>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="pb16 pl16">
                        <Button
                            className={styles.btnLink}
                            onClick={this.props.relAgain}
                            type="primary"
                        >
                            重新识别
                        </Button>
                        <Button
                            className={styles.btnLink}
                            type="primary"
                            onClick={this.toBidu}
                        >
                            百度一下
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
});

export default VoucherInfo;
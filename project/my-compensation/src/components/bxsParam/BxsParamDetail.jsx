import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Row, Col, Breadcrumb } from 'antd';
import { ConstStatus } from './staticData/index.js';
import styles from './BxsParamDetail.less';

let BxsParamDetail = React.createClass({
    /* 初始化 */
    switchCompent() {
        this.props.switchCompent('query');
    },
    render() {
        const {
            id,
            code,
            parentCode,
            type,
            value,
            memo,
            status,
            gmtModified,
            gmtCreate,
            operatorNick
        } = this.props.paramData;
        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="javascript:;" style={{fontSize:16}} onClick={this.switchCompent}>配置管理</a></Breadcrumb.Item>
                        <Breadcrumb.Item>详细信息</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={styles.detailContent}>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【编号】</Col>
                            <Col offset={1} span={16}>{id}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【编码】</Col>
                            <Col offset={1} span={16}>{code}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【父节点编码】</Col>
                            <Col offset={1} span={16}>{parentCode}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【类型】</Col>
                            <Col offset={1} span={16}>{type}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【值】</Col>
                            <Col offset={1} span={16}>{value}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【描述】</Col>
                            <Col offset={1} span={16}>{memo}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【状态】</Col>
                            <Col offset={1} span={16}>{ConstStatus[status]}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【操作员】</Col>
                            <Col offset={1} span={16}>{operatorNick}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【创建时间】</Col>
                            <Col offset={1} span={16}>{gmtCreate}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【修改时间】</Col>
                            <Col offset={1} span={16}>{gmtModified}</Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
});

export default BxsParamDetail;

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Row, Col, Breadcrumb } from 'antd';
import CardTitle from '../common/CardTitle.jsx';
import {ConstInsuranceType, OperationType, ConstScene, ConstGroupCode, ConstStatus} from './staticData/index.js';
import styles from './BxsRuleDetail.less';
import util from '../../common/util.js';

let BxsRuleDetail = React.createClass({
    /* 初始化 */
    switchCompent() {
        this.props.switchCompent('query');
    },
    render() {
        const {
            id,
            code,
            insuranceType,
            scene,
            memo,
            effectOrder,
            groupCode,
            status,
            gmtCreate,
            gmtModified,
            conditionScript,
            content,
            serviceBean
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
                            <Col className={styles.detailCol1} span={2}>【险种】</Col>
                            <Col offset={1} span={16}>{util.isEmptyObject(ConstInsuranceType[insuranceType]) ? insuranceType : ConstInsuranceType[insuranceType]}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【场景】</Col>
                            <Col offset={1} span={16}>{util.isEmptyObject(ConstScene[scene]) ? scene : ConstScene[scene]}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【备注】</Col>
                            <Col offset={1} span={16}>{memo}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【优先级】</Col>
                            <Col offset={1} span={16}>{effectOrder}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【分组】</Col>
                            <Col offset={1} span={16}>{util.isEmptyObject(ConstGroupCode[groupCode]) ? groupCode : ConstGroupCode[groupCode]}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【状态】</Col>
                            <Col offset={1} span={16}>{ConstStatus[status]}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【创建时间】</Col>
                            <Col offset={1} span={16}>{gmtCreate}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【修改时间】</Col>
                            <Col offset={1} span={16}>{gmtModified}</Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【条件】</Col>
                            <Col offset={1} span={16}><pre>{conditionScript}</pre></Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【内容】</Col>
                            <Col offset={1} span={16}><pre>{content}</pre></Col>
                        </Row>
                        <Row className={styles.detailRow}>
                            <Col className={styles.detailCol1} span={2}>【服务信息】</Col>
                            <Col offset={1} span={16}><pre>{serviceBean}</pre></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
});

export default BxsRuleDetail;

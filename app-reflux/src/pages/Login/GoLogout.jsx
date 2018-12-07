import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import styles from './styles.less';

class GoLogout extends Component {

  static defaultProps = {

  }

  render() {
    const { username, password, onLogout } = this.props;

    return (
      <Row style={{ width: 300 }}>
        <Col span={12}>
          <div className={styles.item}>
            用户名：
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.item}>
            {username}
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.item}>
            密码：
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.item}>
            {password}
          </div>
        </Col>
        <Col span={24}>
          <div className={styles.btn}>
            <Button type="primary" onClick={onLogout}>退出</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

GoLogout.propTypes = {

}

export default GoLogout;

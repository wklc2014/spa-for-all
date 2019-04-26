import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

export default function Logout(props) {

  const { username, password, onLogout } = props;

  return (
    <div>
      <p>用户名：{username}</p>
      <p>密码：{password}</p>
      <p>
        <Button onClick={onLogout}>退出</Button>
      </p>
    </div>
  )
}

Logout.propTypes = {

}

Logout.defaultProps = {

}

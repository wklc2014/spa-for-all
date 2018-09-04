import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

const GoLogout = (props) => {
  const { username, password, onLogout } = props;

  return (
    <div>
      <p>用户名：{username}</p>
      <p>密码：{password}</p>
      <p>
        <Button type="primary" onClick={onLogout}>退出</Button>
      </p>
    </div>
  )
}

GoLogout.propTypes = {

}

export default GoLogout;

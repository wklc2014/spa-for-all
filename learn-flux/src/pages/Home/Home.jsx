import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import CountContext from '../../models/context/_count.js';
import Paren from './Paren.jsx';

function Home (props) {

  const {
    amount,
    onAdd,
    onReduce,
  } = props;

  const CountContextValue = {
    amount,
    onAdd,
    onReduce,
  }

  return (
    <CountContext.Provider value={CountContextValue}>
      <div>
        <h2>主页</h2>
        <p>这是主页内容。。。</p>
        <Paren />
      </div>
    </CountContext.Provider>
  )
}

Home.propTypes = {
  amount: propTypes.number,
  loading: propTypes.bool,
  onAdd: propTypes.func.isRequired,
  onReduce: propTypes.func.isRequired,
}

Home.defaultProps = {
  amount: 0,
}

export default Home;

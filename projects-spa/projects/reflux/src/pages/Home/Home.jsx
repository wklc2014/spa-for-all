import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import CountContext from '../../models/context/_count.js';
import Paren from './Paren.jsx';

function Home (props) {
  const {
    amount,
    loading,
    citys,
    onAdd,
    onReduce,
    onLoad,
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
        <div style={{ padding: '16px 0' }}>
          <Button
            type="primary"
            onClick={onLoad}
            loading={loading}
          >
            加载
          </Button>
        </div>
        <ul>
          {
            citys.map((c, i) => {
              return (
                <li key={i}>{i + 1}：{c}</li>
              )
            })
          }
        </ul>
      </div>
    </CountContext.Provider>
  )
}

Home.propTypes = {
  amount: propTypes.number,
  citys: propTypes.array,
  loading: propTypes.bool,
  onAdd: propTypes.func.isRequired,
  onReduce: propTypes.func.isRequired,
  onLoad: propTypes.func.isRequired,
}

Home.defaultProps = {
  amount: 0,
  loading: false,
  citys: [],
}

export default Home;

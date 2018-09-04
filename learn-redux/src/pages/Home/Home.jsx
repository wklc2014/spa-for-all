import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import CountContext from '../../models/context/_count.js';
import Parent from './Paren.jsx';

function Home (props) {

  const {
    amount,
    citys,
    loading,
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
        <Parent />
      </div>
      <div style={{ padding: '16px 0' }}>
        <Button
          type="primary"
          loading={loading}
          onClick={onLoad}
        >
          加载
        </Button>
      </div>
      <div style={{ padding: '16px 0' }}>
        <ul className="ui list">
          {citys.map((c, i) => <li key={i}>{c}</li>)}
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

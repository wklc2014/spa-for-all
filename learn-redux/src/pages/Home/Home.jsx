import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import CountContext from '../../models/context/count_context.js';
import Parent from './Paren.jsx';
import count_action from '../../models/action/count_action.js';
import getDataBase64ByCanvas from '../../utils/getDataBase64ByCanvas.js';

function Home (props) {

  const {
    amount,
    citys,
    loading,
    dispatch,
  } = props;

  const CountContextValue = {
    amount,
    onAdd: (number) => {
      dispatch(count_action.onAdd(number));
    },
    onReduce: (number) => {
      dispatch(count_action.onReduce(number));
    },
  }

  const onLoad = () => {
    dispatch(count_action.onLoad());
  }

  const imgSrc = getDataBase64ByCanvas({
    text: '大成都',
    font: {
      family: 'Microsoft YaHei',
    },
    mask: {
      opacity: 0.5
    },
  });

  return (
    <CountContext.Provider value={CountContextValue}>
      <div>
        <h2>主页</h2>
        <p>这是主页内容。。。</p>
        <div>
          <img src={imgSrc} alt=""/>
        </div>
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
}

Home.defaultProps = {
  amount: 0,
  loading: false,
  citys: [],
}

export default Home;

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import propTypes from 'prop-types';
import Paren from './Paren.jsx';
import CountContext from '../../context/_count.js';

class Home extends Component {

  static defaultProps = {
    amount: 0,
  }

  render() {
    const { amount, onAdd, onReduce } = this.props;
    const CountContextValue = {
      amount,
      onAdd,
      onReduce,
    }

    return (
      <CountContext.Provider value={CountContextValue}>
        <div>
          <h3>主页</h3>
          <p>这是主页内容。。。</p>
          <Paren />
        </div>
      </CountContext.Provider>
    )
  }

}

Home.propTypes = {
  amount: propTypes.number,
}

export default hot(module)(Home);

import React from 'react';
import { Component } from 'reflux';
import Home from './Home.jsx';
import loginStore from '../../models/store/_login.js';
import countStore from '../../models/store/_count.js';
import countAction from '../../models/action/_count.js';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.stores = [loginStore, countStore];
    this.storeKeys = ['isLogin', 'amount', 'loading', 'citys'];
  }

  render() {
    const newProps = {
      ...this.state,
      onAdd: countAction.add,
      onReduce: countAction.reduce,
      onLoad: countAction.load,
    }
    return <Home {...newProps} />;
  }
}

export default HomeContainer;

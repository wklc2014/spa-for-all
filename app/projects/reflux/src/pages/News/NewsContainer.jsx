import React from 'react';
import { Component } from 'reflux';
import News from './News.jsx';
import newsStore from '../../models/store/_news.js';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.stores = [newsStore];
    this.storeKeys = ['list'];
  }

  render() {
    const newProps = {
      ...this.state,
    }
    return <News {...newProps} />;
  }
}

export default NewsContainer;
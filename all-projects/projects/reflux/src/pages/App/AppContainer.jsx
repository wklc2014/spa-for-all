import Reflux from 'reflux';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import App from './App.jsx';
import loginStore from '../../models/store/_login.js';

class AppContainer extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [loginStore];
  }

  render() {
    return <App {...this.state} />;
  }
}

export default AppContainer;

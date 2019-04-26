import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../models/store/index.js';
import App from '../pages/App/App.jsx';
import env from '../common/js/env.js';
import '../common/less/index.less';

if (env === 'development') {
  require('../mocks/index.js');
}

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

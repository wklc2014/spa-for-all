import '../utils/global.js';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../models/store/index.js';
import App from '../pages/App/AppContainer.jsx';
import '../assets/less/index.less';
import { mock } from '../utils/env.js';

if (mock) {
  require('../mock/index.js');
}

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
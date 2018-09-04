import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../models/store/index.js';
import App from '../pages/App/AppContainer.jsx';
import '../utils/global.js';
import '../assets/less/index.less';

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
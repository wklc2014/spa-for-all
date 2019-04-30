import '../common/less/index.less';
import '../utils/global.js';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from '../pages/App/AppContainer.jsx';
import env from '../utils/env.js';

if (env === 'development') {
  require('../mock/index.js');
}

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);
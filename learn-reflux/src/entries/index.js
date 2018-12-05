import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from '../pages/App/AppContainer.jsx';
import '../utils/global.js';
import '../assets/less/index.less';
import '../mock/index.js';

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);
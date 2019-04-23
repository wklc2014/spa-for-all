import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import '../common/less/index.less';
import App from '../components/App.jsx';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import '../common/less/index.less';

import add from '../components/add.js';

const App = () => {

  document.body.appendChild(add());

  return (
    <div style={{ color: 'red' }}>sdfsfsdfs</div>
  )
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
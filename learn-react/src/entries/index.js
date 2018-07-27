import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/reducer/index.js';
import '../common/less/index.css';

import App from '../pages/App/App.jsx';

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
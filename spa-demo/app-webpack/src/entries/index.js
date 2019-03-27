import React from 'react';
import { render } from 'react-dom';

import App from '../pages/App/App.jsx';

import '../common/less/index.less';

import env from '../common/js/env.js';

if (env === 'development') {
  require('../mocks/index.js');
}

render(
  <App env={env} />,
  document.getElementById("root")
);

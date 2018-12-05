import React from 'react';
import { render } from 'react-dom';

import App from '../pages/App/App.jsx';
import '../assets/less/index.less';

const env = process.env.NODE_ENV;

render(
  <App env={env} />,
  document.getElementById("root")
);

console.log('2>>>', 2);

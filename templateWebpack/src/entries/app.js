import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('app');
import Routes from '../routes/';

render(<Routes />, root);

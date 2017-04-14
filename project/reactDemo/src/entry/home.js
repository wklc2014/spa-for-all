import React from 'react';
import { render } from 'react-dom';
import Test from '../component/view/Test.jsx';
import '../assets/scss/index.scss';

const oApp = document.getElementById('app');

render(<Test name="index" />, oApp);
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../routes';
import history from '../components/redux/common/history.js';
import './index.less';
import '../common/common.less';
import './customIconfont.css';
import '../common/log.js';

ReactDOM.render(<Routes history={history} />, document.getElementById('root'));

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from '../components/IndexPage.js';
import Policy from '../components/Policy/Policy.jsx';
import Report from '../components/Report/Report.jsx';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/index" component={Policy} />
            <Route path="/policy" component={Policy} />
            <Route path="/" component={Report} />
        </Router>
    );
}

export default RouterConfig;

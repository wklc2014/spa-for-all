import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from '../components/IndexPage.js';
import Policy from '../components/Policy/Policy.jsx';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route path="/policy" component={Policy} />
        </Router>
    );
}

export default RouterConfig;

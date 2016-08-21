'use strict';

import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import ViewApp from './view/App.jsx';
import ViewDefault from './view/Default.jsx';
import ViewFirst from './view/First.jsx';

const route = (
    <Router history={browserHistory}>
        <Route path='/' component={ViewApp}>
            <IndexRoute component={ViewDefault} />
            <Route path='first' component={ViewFirst} />
        </Route>
    </Router>
)
export default route;
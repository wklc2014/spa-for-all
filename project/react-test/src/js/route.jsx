'use strict';
import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import ViewApp from './view/app.jsx';

let route = (
    <Router history={hashHistory}>
        <Route path='/' component={ViewApp}/>
    </Router>
)
export default route;
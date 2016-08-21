'use strict';

import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import ViewApp from './view/App.jsx';
import ViewDefault from './view/Default.jsx';
import ViewFirst from './view/First.jsx';
import ViewButton from './view/components/Button.jsx';
import ViewLayout from './view/components/Layout.jsx';
import ViewAlert from './view/components/Alert.jsx';
import ViewAntDemo from './view/AntDemo.jsx';

const route = (
    <Router history={browserHistory}>
        <Route path='/' component={ViewApp}>
            <IndexRoute component={ViewDefault} />
            <Route path='first' component={ViewFirst} />
            <Route path='antdemo' component={ViewAntDemo} />
            <Route path='button' component={ViewButton} />
            <Route path='layout' component={ViewLayout} />
            <Route path='alert' component={ViewAlert} />
        </Route>
    </Router>
)
export default route;
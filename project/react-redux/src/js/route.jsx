'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import configureStore from './redux/store/configureStore.js';
const store = configureStore();

import AppContainer from './container/AppContainer.jsx';
import DashboardContainer from './container/DashboardContainer.jsx';
import CounterContainer from './container/CounterContainer.jsx';
import First from './component/First.jsx';

function f_enter(route) {
    // console.log(route)
}

const route = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={AppContainer}>
                <IndexRoute component={DashboardContainer} />
                <Route path='/first' component={First} />
                <Route path='/counter' component={CounterContainer} />
            </Route>
        </Router>
    </Provider>
)

export default route;

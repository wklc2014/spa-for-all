'use strict';

import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore.js';

const store = configureStore();

import AppContainer from './container/AppContainer.jsx';
import DashboardContainer from './container/DashboardContainer.jsx';
import CounterContainer from './container/CounterContainer.jsx';
import First from './view/First.jsx';

function f_enter(route) {
    // console.log(route)
}

const route = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={AppContainer}>
				<IndexRoute component={DashboardContainer} />
            	<Route path='counter' component={CounterContainer} />
            	<Route path='first' component={First} />
            </Route>
    	</Router>
	</Provider>
)

export default route;

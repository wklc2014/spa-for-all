'use strict';

import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js'

const store = configureStore()

import ViewApp from './view/App.jsx';
import ViewDashboard from './view/Dashboard.jsx';
import ViewCounter from './view/Counter.jsx';
import ViewFirst from './view/First.jsx';

function f_enter(route) {
    // console.log(route)
}

const route = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={ViewApp}>
				<IndexRoute component={ViewDashboard} onEnter={f_enter}/>
            	<Route path='counter' component={ViewCounter}/>
            	<Route path='first' component={ViewFirst}/>
            </Route>
    	</Router>
	</Provider>
)

export default route;
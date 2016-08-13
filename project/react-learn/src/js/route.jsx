'use strict';
import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import ViewApp from './view/app.jsx';
import ViewFirst from './view/page/First.jsx';
import ViewDashboard from './view/page/Dashboard.jsx';
import ViewAbout from './view/page/About.jsx';
import ViewInbox from './view/page/Inbox.jsx';
import ViewTodo from './view/page/Todo.jsx';
import ViewMessage from './view/page/Message.jsx';

function f_enter(route) {
	console.log(route)
}

let route = (
    <Router history={browserHistory}>
        <Route path='/' component={ViewApp}>
	        <IndexRoute component={ViewDashboard} onEnter={f_enter}/>
            <Route path='first' component={ViewFirst}/>
            <Route path='about' component={ViewAbout}/>
            <Route path='todo' component={ViewTodo}/>
            <Route path='inbox' component={ViewInbox}>
	            <Route path="message/:id" component={ViewMessage}/>
	            <Redirect from="/message/:id" to="message/:id"/>
            </Route>
        </Route>
    </Router>
)
export default route;
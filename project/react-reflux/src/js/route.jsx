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

function f_enter(route, to) {
    // console.log(route)
}

let route = (
    <Router history={hashHistory}>
        <Route path='/' component={ViewApp}>
            <IndexRoute component={ViewDashboard} onEnter={f_enter} />
            <Route path="first" name="a" component={ViewFirst} onEnter={f_enter} />
            <Route path="about" name="b" component={ViewAbout} onEnter={f_enter} />
            <Route path="todo" name="c" component={ViewTodo} onEnter={f_enter} />
            <Route path="inbox" name="d" component={ViewInbox}>
                <Route path="message(/:id)" component={ViewMessage} onEnter={f_enter} />
            </Route>
        </Route>
    </Router>
);
// <Redirect from="/message/:id" to="message/:id" />

export default route;
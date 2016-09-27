'use strict';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import ViewApp from './view/App.jsx';
import ViewDefault from './view/Default.jsx';
import ViewFirst from './view/First.jsx';

const route = (
    <Router history={hashHistory}>
        <Route path='/' component={ViewApp}>
            <IndexRoute component={ViewDefault} />
            <Route path='first' component={ViewFirst} />
        </Route>
    </Router>
);

export default route;
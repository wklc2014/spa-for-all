import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../components/AppContainer.jsx';
import Dashboard from '../components/view/DashboardContainer.jsx';
import Test from '../components/view/Test.jsx';
import Counter from '../components/view/CounterContainer.jsx';

function route(history, store) {
    const validate = (nextState, replaceState, callback) => {
        // 需要做权限控制的时候开启
        // const isLoggedIn = !!store.getState().auth.authenticated;
        // if (!isLoggedIn) {
            // replaceState(null, '/login');
        // }
        callback();
    };
    return (
        <Router history={history} onEnter={validate}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="/test" component={Test} />
                <Route path="/counter" component={Counter} />
            </Route>
        </Router>
    );
}

export default route;

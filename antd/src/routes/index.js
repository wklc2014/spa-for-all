import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import Index from '../components/Index.js';
import Assess from '../components/Assess/Assess.jsx';
import Policy from '../components/Policy/Policy.jsx';
import Test from '../components/Test/Test.jsx';

import ErrorPage from '../components/ErrorPage.js';

import permission from './permission.js';

function RouterConfig({ history }) {
    return (
        <Router history={ history }>
            <Route path="/" component={ MainLayout }>
                <IndexRoute component={ Index } />
                <Route path="/assess" component={ Assess } onEnter={ permission } />
                <Route path="/test" component={ Test } />
                <Route path="/error" component={ ErrorPage } />
                <Route path="/policy" component={ Policy } />
            </Route>
        </Router>
    );
}

export default RouterConfig;

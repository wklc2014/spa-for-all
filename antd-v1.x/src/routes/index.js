import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import App from '../components/App.jsx';
import Index from '../components/Index.js';
import Assess from '../components/Assess/Assess.jsx';
import Example from '../components/Example.js';

function RouterConfig({ history }) {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Index } />
                <Route path="/assess" component={ Assess } />
                <Route path="/example" component={ Example } />
            </Route>
        </Router>
    );
}

export default RouterConfig;

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../components/App.jsx';

const route = history => (
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
);

export default route;

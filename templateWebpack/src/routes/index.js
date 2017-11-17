// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from '../components/App.jsx';
import Example1 from '../components/Example1.jsx';
import IndexRoute from '../components/IndexRoute.jsx';
import Assess from './Assess.js';

export default function Routes() {
    return (
        <Router>
            <App>
                <Route path="/example" expact component={Example1} />
                <Route path="/assess" expact component={Assess} />
            </App>
        </Router>
    )
}

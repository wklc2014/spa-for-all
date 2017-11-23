import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Link } from 'react-router-dom';

import store from '../redux/store/';
import history from '../redux/store/history.js';
import DevTools from '../redux/store/DevTools.jsx';

// 直接路由
import Example1 from './Example1.jsx';
import IndexRoute from './IndexRoute.jsx';

// 嵌套路由
import App from './App.jsx';

export default function Routes() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <section>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/assess">Assess</Link>
                        </li>
                        <li>
                            <Link to="/example">Example</Link>
                        </li>
                    </ul>
                    <Route path="/" component={App} />
                    <Route path="/example" component={Example1} />
                    { __DEV__ && <DevTools /> }
                </section>
            </ConnectedRouter>
        </Provider>
    )
}

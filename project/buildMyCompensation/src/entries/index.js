import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import history from '../redux/history';
import route from '../routes';
import DevTools from '../redux/store/DevTools.jsx';
import '../assets/scss/index.scss';

if (__DEV__) {
    // require('../mock');
}

const oApp = document.getElementById('app');

render((
    <Provider store={store}>
        <div className="global-fullScreen">
            {route(history)}
            {__DEV__ ? <DevTools /> : null}
        </div>
    </Provider>
), oApp);

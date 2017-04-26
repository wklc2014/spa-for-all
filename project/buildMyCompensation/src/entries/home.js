import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../assets/scss/index.scss';
import store from '../redux/store';
import Home from '../components/view/home/Home.jsx';
import DevTools from '../redux/store/DevTools.jsx';

const oApp = document.getElementById('app');

// {__DEV__ ? <DevTools /> : null}

render((
    <Provider store={store}>
        <div className="global-fullScreen">
            <Home />
        </div>
    </Provider>
), oApp);
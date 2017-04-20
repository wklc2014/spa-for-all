import { hashHistory } from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index.js';
import { routerMiddleware } from 'react-router-redux';

import { ENV } from '../../common/config/env_config.js';

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const middlewares = [thunk, routerMiddleware(hashHistory)];
if (ENV === 'dev') {
    const createLogger = require('redux-logger');
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
)(createStore);

function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    return store;
}

const store = configureStore();

export default store;

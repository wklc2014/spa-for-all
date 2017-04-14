import { createStore, compose } from 'redux';
import middleware from '../middleware';
import reducer from '../reducer';

import DevTools from './DevTools.jsx';

let enhancer = middleware;

if (__DEV__) {
    enhancer = compose(
        middleware,
        DevTools.instrument(),
    );
}

const store = createStore(
    reducer,
    enhancer
);

export default store;

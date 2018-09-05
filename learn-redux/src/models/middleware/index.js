import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';

import env from '../../utils/env.js';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    return state.toJS();
  }
  return state;
};

const middleware = [thunk];

if (env === 'dev') {
  middleware.push(createLogger({
    collapsed: true,
    stateTransformer,
  }))
}

export default applyMiddleware(...middleware);

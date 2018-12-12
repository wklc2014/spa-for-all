import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import env from '../../common/js/env.js';

const middleware = [thunk];

if (env === 'development') {
  middleware.push(createLogger({
    collapsed: true,
  }))
}

export default applyMiddleware(...middleware);

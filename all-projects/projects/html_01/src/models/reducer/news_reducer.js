import { createReducer } from 'redux-create-reducer';

import actionType from '../actionType/index.js';
import news_init from '../initState/news_init.js';


const reducers = createReducer(news_init, {

});

export default reducers;


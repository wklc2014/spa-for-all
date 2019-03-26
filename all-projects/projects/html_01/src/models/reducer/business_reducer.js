import { createReducer } from 'redux-create-reducer';

import actionType from '../actionType/index.js';
import business_init from '../initState/business_init.js';


const reducers = createReducer(business_init, {

});

export default reducers;


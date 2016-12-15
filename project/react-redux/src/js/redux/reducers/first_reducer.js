'use strict';

import {INFO} from '../actions/first_action.js';

const initialState = '';

export default function number(state = initialState, action) {
    switch(action.type){
        case INFO:
            return action.payload;
            break;
        default:
            return state;
    }
}
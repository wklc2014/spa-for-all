'use strict';

import {CHANGE_NUMBER} from '../actions/number_action.js';

export default function number(state = 1, action) {
	switch(action.type){
		case CHANGE_NUMBER:
			return action.payload.number;
			break;
		default:
            return state;
	}
}
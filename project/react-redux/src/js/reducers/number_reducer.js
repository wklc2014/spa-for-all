'use strict';

import {CHANGE_NUMBER} from '../actions/number_action.js';

export default function number(state = 1, action) {
	switch(action.type){
		case CHANGE_NUMBER:
			state = action.number;
			break;
		default:
	}
	return state;
}
'use strict';

export function incrementCounter({ dispatch }, number){
	dispatch('INCREMENT', number);
}

export function decreaseCounter({ dispatch }, number){
	dispatch('DECREASE', number);
}

export function updateNumber({ dispatch }, number){
	dispatch('UPNUMBER', number);
}
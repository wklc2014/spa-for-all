'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	count: 0,
	number: 1,
	highlightNav: '/'
}

const mutations = {
	INCREMENT(state, number){
		state.count += number;
	},
	DECREASE(state, number){
		state.count -= number;
	},
	UPNUMBER(state, number){
		state.number = number;
	},
	SETHIGHLIGHTNAV(state, ptah){
		state.highlightNav = ptah;
	},
}

const myMiddleware = {
	snapshot: true,
	onInit(state){
	},
	onMutation(mutation, nextState, prevState){
		console.log(mutation, nextState, prevState)
	}
}

export default new Vuex.Store({
	state,
	mutations,
 	// middlewares: [myMiddleware]
})

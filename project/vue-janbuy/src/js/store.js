'use strict';
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let state = {
	toolbar_active: "/",
	hasLogin: !!localStorage.token
};

let mutations = {
	ACTIVE_TOOLBAR(state, text) {
		state.toolbar_active = text;
	},
	LOGIN(state, text){
		state.hasLogin = text;
	}
}

export default new Vuex.Store({
	state,
	mutations
})

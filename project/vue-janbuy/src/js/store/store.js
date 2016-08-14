"use strict";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let state = {
	hasLogin: !!localStorage.token,
	toolbar_active: "home"
}

let mutations = {
	LOGIN(state, status) {
        state.hasLogin = status;
    },
    ACTIVE_TOOLBAR(state, text) {
    	state.toolbar_active = status;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
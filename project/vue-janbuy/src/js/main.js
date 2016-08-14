'use strict';
import Vue from 'vue';
import store from "./store.js";
import route from "./route.js";

import VueTouch from 'vue-touch';
Vue.use(VueTouch);

// 创建根组件
var App = Vue.extend({
	store,
    template: "<router-view></router-view>",
    replace: false
});

route.start(App, '#app');


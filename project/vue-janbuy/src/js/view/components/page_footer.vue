<template>
	<section class="page-toolbar">
        <ul>
            <li :class="[nav.cls, {'active': active == nav.logo}]" v-for="nav in navs" @click="switchnav(nav.logo)">
                <div class="wraper"></div><span>{{nav.text}}</span>
            </li>
        </ul>
    </section>
</template>
<script>
	import handlerouteJS from "../mxins/handleroute.js";
	import {set_active_toolbar} from "../../actions/toolbar_action.js";
	import {get_active_toolbar} from "../../getters/getters.js";
	import {toolbars} from "../datas.js";
	export default{
		mixins: [
			handlerouteJS
		],
		vuex: {
			actions: {
				set_active_toolbar
			},
			getters: {
				active: get_active_toolbar
			}
		},
		data: function () {
			return {
				navs: toolbars
			}
		},
		methods: {
			switchnav: function (text) {
				this.set_active_toolbar(text);
				this.handleroute(text);
			}
		},
		ready: function () {
			console.log(this.active)
		}
	}
</script>
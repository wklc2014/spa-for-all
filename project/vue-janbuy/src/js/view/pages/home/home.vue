<template>
	<div class="view-container pb60">
		<vue-home-top></vue-home-top>
		<section class="index-banner mb5">
			<vue-swipe></vue-swipe>
		</section>
		<section class="index-nav mb5">
			<vue-home-nav></vue-home-nav>
		</section>
		<section class="index-list-wraper mb5">
			<h3 class="index-title" @click="handleroute('dailysale')"><span>更多</span>每日特卖</h3>
			<vue-sail-list></vue-sail-list>
		</section>
		<section class="index-menu">
			<div class="index-title pl10 pr10">主题馆</div>
			<ul>
				<li :class="'menu'+(n+1)" v-for="n in 6" @click="handleroute('/list/' + (n+1))"></li>
			</ul>
		</section>
		<vue-page-footer></vue-page-footer>
	</div>
</template>
<script>
	import VueHomeTop from "./top.vue";
	import VueHomeNav from "./nav.vue";
	import VueSwipe from "../../components/swipe.vue";
	import VueSailList from "../../components/sail_list.vue";
	import VuePageFooter from "../../components/page_footer.vue";
	import handlerouteJS from "../../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VueHomeTop,
			VueHomeNav,
			VueSwipe,
			VueSailList,
			VuePageFooter
		},
		data(){
			return {
			}
		},
		methods: {

		}
	}
</script>
<template>
	<div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="daily-sale-swipe">
			<vue-swipe></vue-swipe>
		</section>
		<section class="daily-sale-countdown mb10">
			<span class="text">抢购中</span>
			<div class="dountdown" v-if="countdown.over">{{countdown.text}}</div>
			<div class="dountdown" v-else>
				距离结束<span class="icon-code">{{countdown.hours}}</span>:<span class="icon-code">{{countdown.minutes}}</span>:<span class="icon-code">{{countdown.seconds}}</span>
			</div>
		</section>
		<section class="daily-sale-list">
			<vue-sail-list></vue-sail-list>
		</section>
		<vue-page-footer></vue-page-footer>
	</div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
	import VuePageFooter from "../components/page_footer.vue";
	import VueSailList from "../components/sail_list.vue";
	import VueSwipe from "../components/swipe.vue";
	import countdownJS from "../mxins/countdown.js";
	export default{
		mixins: [
			countdownJS
		],
		components: {
			VuePageHeader,
			VuePageFooter,
			VueSailList,
			VueSwipe
		},
		data(){
			return {
				pageheader: {
					text: "每日特卖",
					prev: true,
					classname: "center"
				},
				countdown: {
					hours: "00",
					minutes: "00",
					seconds: "00",
					timer: null,
					time: "2016/8/12",
					text: "抢购结束",
					over: false
				}
			}
		}
	}
</script>
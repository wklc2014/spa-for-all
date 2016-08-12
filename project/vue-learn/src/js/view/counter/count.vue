<template>
	<div class="am-form">
		<vue-number></vue-number>
		<vue-show></vue-show>
		<vue-add></vue-add>
		<vue-sub></vue-sub>
	</div>
</template>
<script>
	import VueShow from './show.vue';
	import VueAdd from './add.vue';
	import VueSub from './sub.vue';
	import VueNumber from './number.vue';
	export default {
		components: {
			VueShow,
			VueSub,
			VueNumber,
			VueAdd
		},
		ready: function () {
			let arr = ['a', 'b', 'c', 'd', 'e'];
			arr.copyWithin(arr)
		}
	}
</script>
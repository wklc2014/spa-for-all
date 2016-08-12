<template>
	<div class="form-group">
		<button class="btn btn-primary" type="button" @click="decreaseCounter(number)">减少</button>
	</div>
	<div class="form-group">
		<button class="btn btn-primary" type="button" @click="reshow">查看</button>
	</div>
</template>
<script type="text/javascript">
	import {decreaseCounter} from '../../vuex/actions/count.action.js';
	import {getNumber} from '../../vuex/getters/getters.js';
	export default {
		vuex: {
			actions: {
				decreaseCounter
			},
			getters: {
				number: getNumber
			}
		},
		methods: {
			reshow: function () {
				let st = this.$store;
				// console.log(st);
			}
		}
	}
</script>
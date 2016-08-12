<template>
	<div class="form-group">
		<button class="btn btn-primary" type="button" @click="incrementCounter(number)">增加</button>
	</div>
</template>
<script type="text/javascript">
	import {incrementCounter} from '../../vuex/actions/count.action.js';
	import {getNumber} from '../../vuex/getters/getters.js';
	export default {
		vuex: {
			actions: {
				incrementCounter
			},
			getters: {
				number: getNumber
			}
		}
	}
</script>
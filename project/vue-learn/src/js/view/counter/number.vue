<template>
	<div class="form-group">
		<input type="text" placeholder="输入数字" @input="change" class="form-control">
	</div>
</template>
<script type="text/javascript">
import {updateNumber} from '../../vuex/actions/count.action.js';
	export default {
		vuex: {
			actions: {
				updateNumber
			}
		},
		methods: {
			change(e){
				let n = parseInt(e.target.value, 10);
				this.updateNumber(n);
			}
		}
	}
</script>
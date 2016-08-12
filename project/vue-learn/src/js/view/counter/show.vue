<template>
<div class="form-group">
	<h4>the count is {{count}}</h4>
</div>
</template>
<script type="text/javascript">
import {getCount} from '../../vuex/getters/getters.js';
	export default {
		vuex: {
			getters: {
				count: getCount
			}
		}
	}
</script>
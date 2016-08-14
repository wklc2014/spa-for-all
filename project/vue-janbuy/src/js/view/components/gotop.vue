<template>
	<div class="totop" @click="gotop"></div>
</template>
<script>
	export default{
		methods: {
			gotop: function () {
				window.scrollTo(0, 0);
			}
		}
	}
</script>
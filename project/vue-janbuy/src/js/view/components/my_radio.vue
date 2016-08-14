<template>
	<i class="form-radio" :class="{'checked':checked}" @click="update"></i>
</template>
<script>
	export default{
		props: ["checked"],
		methods: {
			update: function () {
				this.$dispatch("change");
			}
		}
	}
</script>
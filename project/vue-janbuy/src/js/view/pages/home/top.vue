<template>
	<section layout="row center-justify" class="index-header">
        <div self="size-x1" class="search" @click="handleroute('search')">搜索您想要的商品</div>
        <div self="size-x0" class="select">
            乌鲁木齐
            <i class="icon-down"></i>
        </div>
    </section>
</template>
<script>
	import handlerouteJS from "../../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
	}
</script>
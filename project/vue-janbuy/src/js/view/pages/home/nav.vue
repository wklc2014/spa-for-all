<template>
	<ul layout="row center-justify">
        <li self="size-1of4" class="nav-item" v-touch:tap="handleroute('dailysale')">全部分类</li>
        <li self="size-1of4" class="nav-item">合作农场</li>
        <li self="size-1of4" class="nav-item">农场采摘</li>
        <li self="size-1of4" class="nav-item">生态观光</li>
    </ul>
</template>
<script>
	import handlerouteJS from "../../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
	}
</script>
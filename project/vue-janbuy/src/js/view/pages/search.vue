<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<input slot="text" type="text" class="search-input form-control" placeholder="搜索商品">
			<span slot="next" @click="handleroute('/')">取消</span>
		</vue-page-header>
		<section class="search-tag">
            <h3>热门搜索</h3>
            <ul class="tags">
                <li><span>蔬菜油菜黄瓜新</span></li>
                <li><span>水果</span></li>
                <li><span>黄瓜新鲜</span></li>
                <li><span>辣椒</span></li>
                <li><span>黄瓜新</span></li>
                <li><span>油菜黄瓜新</span></li>
                <li><span>蔬菜</span></li>
            </ul>
        </section>
	</div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
	import handlerouteJS from "../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
		},
		data(){
			return {
				pageheader: {
					prev: true,
					next: true,
					classname: "search"
				},
			}
		}
	}
</script>
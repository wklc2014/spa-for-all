<template>
    <div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="classify-container">
            <article class="classify-item" v-for="n in 8" :class="{'active': current == n}">
                <div class="head" @click="handleActive($index)">名优特品</div>
                <dl class="content">
                    <dt>有机蔬菜</dt>
                    <dd><span>鸡肉</span><span>芹菜</span><span>油菜</span><span>白萝卜</span><span>冬笋</span><span>芋头</span></dd>
                    <dt>有机蔬菜</dt>
                    <dd><span>鸡肉</span><span>芹菜</span><span>油菜</span><span>白萝卜</span><span>冬笋</span><span>芋头</span></dd>
                </dl>
            </article>
        </section>
        <vue-page-footer></vue-page-footer>
	</div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
    import VuePageFooter from "../components/page_footer.vue";
	import handlerouteJS from "../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
			VuePageFooter
		},
		data(){
			return {
				pageheader: {
					prev: true,
					classname: "center",
					text: "全部分类"
				},
				current: 1
			}
		},
		methods: {
			handleActive: function (idx) {
				this.current = idx;
			}
		}
	}
</script>
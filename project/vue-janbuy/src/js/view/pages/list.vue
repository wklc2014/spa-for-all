<template>
	<div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="list-container">
			<ul layout="row stretch-justify" class="list-tab">
                <li v-for="tab in tabs" :class="{'active': active==tab.value}" @click="handleTab(tab.value)">{{tab.text}}</li>
            </ul>
            <ul class="page-list" v-show="show">
	            <li class="page-list-item page-list-btn" v-for="good in goods">
                    <div layout="row stretch-stretch" class="page-list-content">
                        <div self="size-x0" class="td-2">
                            <div class="img">
                                <img :src="'./asset/img/temp/' + good.img" alt="" />
                            </div>
                        </div>
                        <div self="size-x1" class="td-3">
                            <h4 class="name">{{good.name}}</h4>
                            <p class="info">￥{{good.newPrice}}元</p>
                            <p class="p1">￥{{good.oldPrice}}元</p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="list-none" v-else>暂无数据。</p>
		</section>
		<vue-gotop></vue-gotop>
		<vue-page-footer></vue-page-footer>
	</div>
</template>
<script>
	import datas from "../../datas/lists.js";
	import VuePageHeader from "../components/page_header.vue";
	import VuePageFooter from "../components/page_footer.vue";
	import VueGotop from "../components/gotop.vue";
	import routeJS from "../../route.js";
	let tabs = [
		{"text":"综合排序", value: 1},
		{"text":"销量", value: 2},
		{"text":"价格", value: 3},
		{"text":"评论数", value: 4},
		{"text":"新品", value: 5}
	]
	export default{
		components: {
			VuePageHeader,
			VuePageFooter,
			VueGotop
		},
		data(){
			return {
				title: "",
				active: 1,
				tabs: tabs,
				lists: datas,
				goods: []
			}
		},
		computed: {
			pageheader: function () {
				return {
					text: this.title + "_简农易购",
					prev: true
				}
			},
			show: function () {
				return this.goods.length;
			}
		},
		methods: {
			handleTab: function (number) {
				this.active = number;
			},
			goGoods: function () {
				let path = "/goods/" + Math.floor(Math.random()*11);
				routeJS.go(path);
			}
		},
		ready: function () {
			let _this = this;
			let id = this.$route.params.id;
			datas.some(function(val, idx){
				if(val.id == id){
					_this.title = val.name;
					_this.goods = val.lists;
					return true;
				}
			})
		}
	}
</script>
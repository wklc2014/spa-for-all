<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="mb10">
	        <ul layout="row stretch-justify" class="list-tab">
	            <li self="size-x0" v-for="tab in tabs" @click="handleroute('/user/order/' + tab.uid)" :class="{'active': tab.uid === currentTab}">{{tab.text}}</li>
	        </ul>
	    </section>
	    <section class="user-order">
			<article class="shopingcart-item" v-for="n in 3">
                <div class="shopingcart-item-hd">
                    <div class="shopingcart-item-td">
                        <span class="name">网站自营1</span>
                        <span class="status">待付款</span>
                    </div>
                </div>
                <div layout="row center-justify" class="shopingcart-item-bd" v-for="m in 2">
                    <div self="size-x0 top" class="shopingcart-item-td-2">
                        <img :src="'../asset/img/temp/shop1.jpg'" alt="">
                    </div>
                    <div self="size-x1 top" class="shopingcart-item-td-3">
                        <h4>展艺 精致西点细砂糖 它们将等分剩余空间</h4>
                        <p class="text">400*3包</p>
                    </div>
                    <div self="size-x0 top" class="shopingcart-item-td-4">
                        <p class="p1">￥35.80</p>
                        <p class="text">X3</p>
                    </div>
                </div>
                <div class="shopingcart-item-ft">
                    <div layout="row top-justify" class="row">
                        <div self="size-x0">
                            <span class="icon-code">包邮</span>
                        </div>
                        <div self="size-x1">店铺满168包邮 它们将等分剩余空间 它们将等分剩余空间</div>
                    </div>
                    <div layout="row center-justify" class="row">
                        <div self="size-x0">
                            <span class="icon-code">运费</span>
                        </div>
                        <div self="size-x0" class="color-f64c4c">￥0.00</div>
                    </div>
                    <div class="row text-right">
                        <span>小计（共0件）：</span>
                        <span class="color-f64c4c">￥0.00</span>
                    </div>
                    <div class="row btn-group">
                        <button type="button" class="btn-blank">取消订单</button>
                        <button type="button" class="btn-red">去支付</button>
                    </div>
                </div>
            </article>
            <h3 class="base-title"><span>已经到最底了</span></h3>
	    </section>
	</div>
</template>
<script>
	import VuePageHeader from "../../components/page_header.vue";
	import handlerouteJS from "../../mxins/handleroute.js";
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
					classname: "center",
					text: "我的订单"
				},
				tabs: [
					{"text":"全部", "uid": "all"},
					{"text":"待付款", "uid": "unpay"},
					{"text":"待发货", "uid": "unsend"},
					{"text":"待收货", "uid": "unreceive"},
					{"text":"待评价", "uid": "uncomment"},
				]
			}
		},
		computed: {
			currentTab: function () {
				return this.$route.params.status || "all";
			}
		},
		ready: function () {
			console.log(this.$route)
		}
	}
</script>
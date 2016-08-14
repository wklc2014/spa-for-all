<template>
	<div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="pay-success-tips">
            <img :src="'./asset/img/shopingcart/pay.png'" alt="">
        </section>
		<section class="pay-address mb10 mt10">
			<ul>
                <li>
                    <div class="td">收货人：</div>
                    <div class="td">相依</div>
                </li>
                <li>
                    <div class="td">联系电话：</div>
                    <div class="td">18428379456</div>
                </li>
                <li>
                    <div class="td">收货地址：</div>
                    <div class="td">成都市 锦江区 金辉西二街 天府大道南段1336号老成仁路育才竹岛小区</div>
                </li>
            </ul>
		</section>
		<section class="pay-success-btns">
            <ul layout="center center-space-spread">
                <li self="size-x1">
                    <button type="button" class="btn-default h35">查看订单</button>
                </li>
                <li self="size-x1">
                    <button type="button" class="btn-default h35" @click="handleroute('/')">返回首页</button>
                </li>
            </ul>
        </section>
        <h3 class="base-title">
            <span>购买此商品的用户还购买了</span>
        </h3>
        <article class="hotgoods-list">
            <vue-hot-goods :hotgoods="hotgoods"></vue-hot-goods>
        </article>
	</div>
</template>
<script type="text/javascript">
	import VuePageHeader from "../components/page_header.vue";
	import VuePageFooter from "../components/page_footer.vue";
	import VueHotGoods from "../components/hotgood.vue";
    import handlerouteJS from "../mxins/handleroute.js";
	let hotgoods = []
	for (let i = 0; i < 9; i++) {
	    hotgoods.push({
	        img: "./asset/img/temp/shop1.jpg",
	        name: "枣先生【特级】红枣夹桃500",
	        newprice: "54.90",
	        oldprice: "84.90",
	        ispostage: true,
	        peopleNumber: 32,
	        id: i + 100
	    })
	}
	export default {
		mixins: [
		    handlerouteJS
		],
		components: {
			VuePageHeader,
			VuePageFooter,
			VueHotGoods
		},
		data(){
			return {
				pageheader: {
					text: "支付成功",
					prev: true,
					classname: "center"
				},
				hotgoods: hotgoods
			}
		}
	}
</script>
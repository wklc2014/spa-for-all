<template>
	<div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="pay-address pay-address-btn mb10 mt10" @click="handleroute('user/address')">
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
		<section class="pay-type mb10">
			<ul>
				<li class="pay-type-item" v-for="pay in paytype">
	                <div class="content" :class="[pay.value]">
	                    <div class="td">
	                        <div class="text">{{pay.text}}</div>
	                    </div>
	                    <div class="td text-right">
	                        <vue-my-radio :checked="paycheck==pay.value" @change="change(pay.value)"></vue-my-radio>
	                    </div>
	                </div>
	                <div class="tips" v-if="pay.value=='yinlian'" v-show="showtips">
                        您账户余额为：1236584.00元
                    </div>
	            </li>
            </ul>
		</section>
		<section class="pay-list mb10">
			<article class="shopingcart-item">
                <div class="shopingcart-item-hd">
                    <div class="shopingcart-item-td">
                        <span class="name">网站自营1</span>
                    </div>
                </div>
                <div layout="row center-justify" class="shopingcart-item-bd" v-for="img in imgs">
                    <div self="size-x0 top" class="shopingcart-item-td-2">
                        <img :src="img" alt="">
                    </div>
                    <div self="size-x1 top" class="shopingcart-item-td-3">
                        <h4>展艺 精致西点细砂糖 它们将等分剩余空间</h4>
                        <div class="shopingcart-number">
                            <span class="sub"></span>
                            <span class="num">2</span>
                            <span class="add"></span>
                        </div>
                    </div>
                    <div self="size-x0 top" class="shopingcart-item-td-4">
                        <p class="p1">￥35.80</p>
                        <p class="p2">￥35.80</p>
                    </div>
                </div>
                <div class="shopingcart-msg mt10 mb10">
                    <textarea class="form-control">给卖家留言</textarea>
                </div>
                <div class="shopingcart-item-ft">
                    <div class="row">
                        <span class="icon-code">包邮</span> 店铺满168包邮 它们将等分剩余空间 它们将等分剩余空间
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
                </div>
            </article>
		</section>
		<section class="pay-total">
            <p>商品总额：<span>￥45.00</span></p>
            <p>运费：<span>￥45.00</span></p>
            <p>应付总计：<span>￥45.00</span></p>
        </section>
        <section class="pay-btns-wraper">
            <button class="shopingcart-btn" @click="handleroute('pay_success')">去支付</button>
            <div class="text">
                <p class="h40">
                    <span class="all">合计:</span>
                    <span class="price">￥45.00</span>
                </p>
            </div>
        </section>
	</div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
	import VueMyRadio from "../components/my_radio.vue";
	import handlerouteJS from "../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
            VueMyRadio
		},
		data(){
			return {
				pageheader: {
					text: "确认订单",
					prev: true,
					classname: "center"
				},
                paycheck: "zhifu",
                paytype: [{
                    value: "zhifu",
                    text: "支付宝支付"
                }, {
                    value: "weixin",
                    text: "微信支付"
                }, {
                    value: "yinlian",
                    text: "余额支付"
                }],
                imgs: [
                	"./asset/img/temp/shop1.jpg",
                	"./asset/img/temp/shop2.jpg",
                	"./asset/img/temp/shop3.jpg",
                	"./asset/img/temp/shop4.jpg"
                ]
			}
		},
        computed: {
            showtips: function () {
                return this.paycheck == "yinlian";
            }
        },
        methods: {
            change: function (value) {
                this.paycheck = value;
            }
        }
	}
</script>
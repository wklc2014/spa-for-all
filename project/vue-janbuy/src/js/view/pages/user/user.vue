<template>
    <div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-message" slot="next" @click="handleroute('/user/message')"></i>
		</vue-page-header>
		<section class="user-wraper pt10">
			<article class="layout-group">
                <div class="layout-item layout-btn" @click="handleroute('user/info')">
                    <div layout="row" class="layout-row">
                        <div self="size-1of1" class="layout-arrow">
                            <div class="user-header">
                                <img :src="img" alt="">
                                <dl>
                                    <dt>u184CGGL8081</dt>
                                    <dd>帐户余额：0.00元</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div layout="row" class="user-nav">
                    <div self="size-1of2" class="layout-btn user-nav-item" @click="handleroute('user/shou')">
                        <i class="icon-collection"></i> 收藏的商品
                    </div>
                    <div self="size-1of2" class="layout-btn user-nav-item" @click="handleroute('user/guanzhu')">
                        <i class="icon-focuson"></i> 关注的农场
                    </div>
                </div>
            </article>
            <article class="layout-group">
            	<div class="layout-item layout-btn" @click="handleroute('user/order/all')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">我的订单</div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row" class="layout-row user-tab">
                        <div self="size-1of5" class="layout-btn user-tab-item" @click="handleroute('/user/order/unpay')">
                            <div class="unpay"><i>2</i></div>待付款
                        </div>
                        <div self="size-1of5" class="layout-btn user-tab-item" @click="handleroute('/user/order/unsend')">
                            <div class="unsend"><i>25</i></div>待发货
                        </div>
                        <div self="size-1of5" class="layout-btn user-tab-item" @click="handleroute('/user/order/unreceive')">
                            <div class="unreceive"><i>5</i></div>待收货
                        </div>
                        <div self="size-1of5" class="layout-btn user-tab-item" @click="handleroute('/user/order/uncomment')">
                            <div class="uncomment"><i>35</i></div>待评价
                        </div>
                        <div self="size-1of5" class="layout-btn user-tab-item" @click="handleroute('user/aftersale')">
                            <div class="payover"><i>4</i></div>退款/售后
                        </div>
                    </div>
                </div>
                <div class="layout-item layout-btn" @click="handleroute('/user/coupons')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div class="layout-col">我的优惠卷</div>
                        <div class="layout-col-sub layout-arrow">20</div>
                    </div>
                </div>
                <div class="layout-item layout-btn">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">我的预售</div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-item layout-btn" @click="handleroute('/user/foot')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">我的足迹</div>
                    </div>
                </div>
                <div class="layout-item layout-btn">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">我的评价</div>
                    </div>
                </div>
                <div class="layout-item layout-btn" @click="handleroute('/user/address')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">地址管理</div>
                    </div>
                </div>
                <div class="layout-item layout-btn" @click="handleroute('/user/pay')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">支付管理</div>
                    </div>
                </div>
            </article>
		</section>
		<vue-page-footer></vue-page-footer>
	</div>
</template>
<script>
	import VuePageHeader from "../../components/page_header.vue";
	import VuePageFooter from "../../components/page_footer.vue";
	import handlerouteJS from "../../mxins/handleroute.js";
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
					text: "个人中心",
					classname: "center",
					next: true
				},
                img: "./asset/img/temp/user.jpg"
			}
		}
	}
</script>
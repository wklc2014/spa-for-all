<template>
	<div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<i class="icon-shopcart" slot="next"></i>
		</vue-page-header>
		<section class="detail-swipe">
			<vue-swipe></vue-swipe>
		</section>
		<section class="detail-name">
			<div class="name">{{goods.name}}}</div>
			<div class="price">
				<span>¥{{goods.price.newprice}}</span>
				<i>¥{{goods.price.oldprice}}</i>
				<em>限时促销：1小时00分钟24秒</em>
			</div>
			<ul class="text">
				<li>余额专享价：</li>
				<li>{{goods.price.vipprice}}</li>
			</ul>
			<ul class="text">
				<li>可节省：</li>
				<li>{{goods.price.subprice}}元</li>
			</ul>
			<ul class="text">
				<li>库存：</li>
				<li>{{goods.number}}</li>
			</ul>
			<ul class="text">
				<li>供应商：</li>
				<li>{{goods.supplier}}</li>
			</ul>
			<ul class="text">
				<li>商品重量：</li>
				<li>{{goods.weight}}</li>
			</ul>
			<ul class="text">
                <li>月售{{goods.sailnumber}}件</li>
                <li>{{goods.city}}</li>
            </ul>
            <ul class="text" v-if="goods.postage.is">
                <li><span class="icon-code">邮</span>{{goods.postage.text}}</li>
            </ul>
		</section>
		<section class="detail-other">
            <article class="layout-group">
                <div class="layout-item layout-btn" id="js-choose-goods">
                    <div layout="row center-justify" class="layout-row h32">
                        <div class="layout-col">数量</div>
                        <div class="layout-col-sub layout-arrow">X 1</div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h32">
                        <div class="layout-col">配送至成都高新区</div>
                        <div class="layout-col-sub layout-arrow">
                            <span class="color-f64c4c">运费 ¥0.00</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="detail-comment">
			<div class="detail-comment-title">
                <div class="text">评价晒单<i>（{{commentsize}}）</i></div>
                <div class="number">
                    <span class="color-f64c4c">36%</span> 好评度
                </div>
            </div>
            <vue-comments :lists="comments"></vue-comments>
            <div class="detail-comment-more">查看更多评价</div>
        </section>
		<div class="base-title"><span>继续拖动,查看图文详情</span></div>
		<section class="detail-content">{{{goods.description}}}</section>
		<vue-gotop></vue-gotop>
		<section class="detail-btns">
            <ul layout="row stretch-stretch">
                <li self="size-x0" class="home" @click="handleroute('/')">首页</li>
                <li self="size-x0" class="shou active">收藏</li>
                <li self="size-x1" class="add" @click="handleroute('/shopcart')">加入购物车</li>
                <li self="size-x1" class="buy" @click="handleroute('/submitorder')">立即购买</li>
            </ul>
        </section>
        <section class="detail-choose">
            <article class="detail-choose-mask"></article>
            <article class="detail-choose-content">
                <div class="detail-choose-content-top">
                    <div class="head">
                        <img :src="img" alt="">
                        <h3>高薪的诱惑和充满挑战性的工作</h3>
                        <p>￥35.80 <code>￥35.80</code></p>
                        <span class="icon-close"></span>
                    </div>
                    <div class="guige">
                        <h3>规格</h3>
                        <p><span>400g</span><span>400g*3包</span></p>
                    </div>
                    <div class="number">
                        <span>购买数量</span>
                        <div class="shopingcart-number">
                            <span class="sub"></span>
                            <span class="num">2</span>
                            <span class="add"></span>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn-confirm mt50">确定</button>
            </article>
        </section>
	</div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
	import VueSwipe from "../components/swipe.vue";
	import VueComments from "../components/comments.vue";
	import VueGotop from "../components/gotop.vue";
	import {goods, comments} from "../../datas/lists.js";
	import handlerouteJS from "../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
			VueSwipe,
			VueGotop,
			VueComments
		},
		data(){
			return {
				pageheader: {
					text: "商品详情",
					prev: true,
					next: true,
					classname: "center"
				},
				goods: goods,
				comments: comments,
				img: "./asset/img/temp/index-list-1.png"
			}
		},
		computed: {
			commentsize: function () {
				return this.comments.length;
			}
		},
		methods: {
			gohome: function () {
				routeJS.go("/")
			}
		}
	}
</script>
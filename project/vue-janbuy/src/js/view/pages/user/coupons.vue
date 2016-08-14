<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">使用说明</span>
		</vue-page-header>
		<section class="pt10 pb10">
			<article class="user-coupons" v-for="n in 11">
				<div class="user-coupons-head">
					<div class="number">
						<i>￥</i><span>40</span>
					</div>
					<div class="text">
						<h3>海南水果专场</h3>
						<h4>满200元可用</h4>
					</div>
				</div>
				<div class="user-coupons-body">
					2016.03.09-2016.03.23
				</div>
			</article>
		</section>
	</div>
</template>
<script>
	import VuePageHeader from "../../components/page_header.vue";
	export default{
		components: {
			VuePageHeader
		},
		data(){
			return {
				pageheader: {
					text: "优惠卷",
					prev: true,
					next: true,
					classname: "center"
				}
			}
		}
	}
</script>
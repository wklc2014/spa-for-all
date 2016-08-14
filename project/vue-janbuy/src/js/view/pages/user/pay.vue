<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">使用说明</span>
		</vue-page-header>
		<section class="user-wraper pt10">
            <article class="layout-group">
                <div class="layout-item layout-btn gender_item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">开启支付</div>
                    </div>
                </div>
                <div class="layout-item layout-btn gender_item" @click="handleroute('/user/pay_password')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-col layout-arrow">忘记密码</div>
                    </div>
                </div>
            </article>
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
			VuePageHeader
		},
		data(){
			return {
				pageheader: {
					text: "支付管理",
					prev: true,
					next: true,
					classname: "center"
				}
			}
		}
	}
</script>
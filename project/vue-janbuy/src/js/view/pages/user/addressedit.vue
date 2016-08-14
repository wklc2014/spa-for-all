<template>
	<div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">删除</span>
		</vue-page-header>
		<section class="pt10">
            <article class="layout-group">
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of4" class="layout-col">
                            <label for="username">姓名：</label>
                        </div>
                        <div self="size-3of4" class="layout-col">
                            <input id="username" type="text" class="form-control" placeholder="请输入姓名" value="相依">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of4" class="layout-col">
                            <label for="phonenumber">电话号码：</label>
                        </div>
                        <div self="size-3of4" class="layout-col">
                            <input id="phonenumber" type="text" class="form-control" placeholder="请输入电话号码" value="18539751258">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of4" class="layout-col">
                            <label for="province">省市区：</label>
                        </div>
                        <div self="size-3of4" class="layout-col">
                            <input id="province" type="text" class="form-control" placeholder="请输入省市区" value="四川省 成都市 高新区">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of4" class="layout-col">
                            <label for="detailaddress">详细地址：</label>
                        </div>
                        <div self="size-3of4" class="layout-col">
                            <input id="detailaddress" type="text" class="form-control" placeholder="请输入详细地址" value="益州大道北段 泰和二街">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-x0" class="layout-col">设为默认地址</div>
                        <div self="size-x0" class="layout-col">
                            <button class="btn-switch checked">
                                <i class="switch"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
            <div class="ml10 mr10">
                <button type="button" class="btn-confirm" @click="handleroute('/user/address')">保存</button>
            </div>
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
			}
		},
		computed: {
			pageheader: function () {
				let uid = parseInt(this.$route.params.id, 10);
				return  {
					text: "地址管理" + uid,
					classname: "center",
					prev: true,
					next: true
				}
			}
		}
	}
</script>
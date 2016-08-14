<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">下一步</span>
		</vue-page-header>
		<section class="pt10">
			<article class="layout-group">
	            <div class="layout-item">
	                <div layout="row center-justify" class="layout-row h44">
	                    <div class="layout-col">绑定手机号码</div>
	                    <div class="layout-col">184*****081</div>
	                </div>
	            </div>
	            <div class="layout-item">
	                <div layout="row center-stretch" class="layout-row h44">
	                    <div self="size-x1 center" class="layout-col">
	                        <input type="text" placeholder="请输入手机验证码" class="form-control">
	                    </div>
	                    <div self="size-x0 center" class="layout-col-left-line w90">
	                       <button type="button" class="btn-link">获取验证码</button>
	                    </div>
	                </div>
	            </div>
	            <div class="layout-item">
	                <div layout="row center-justify" class="layout-row h44">
	                    <div self="size-x1" class="layout-col">
	                        <input type="text" placeholder="请输入右侧验证码" class="form-control">
	                    </div>
	                    <div self="size-x0" class="layout-col-left-line w90">
	                        <button type="button" class="btn-link">获取验证码</button>
	                    </div>
	                </div>
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
					text: "忘记密码",
					prev: true,
					next: true,
					classname: "center"
				},
			}
		}
	}
</script>
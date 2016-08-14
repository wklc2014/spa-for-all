<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
		    <i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="login-wraper pt10">
            <article class="layout-group">
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1">
                            <input type="text" class="form-control" placeholder="请输入手机号码">
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
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1">
                            <input type="password" class="form-control" placeholder="请设置登录密码">
                        </div>
                    </div>
                </div>
            </article>
            <article class="btn-wraper">
                <button type="button" class="btn-confirm">完成注册</button>
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
			VuePageHeader,
		},
		data(){
			return {
				pageheader: {
					text: "用户注册",
					prev: true,
					classname: "center"
				},
			}
		}
	}
</script>
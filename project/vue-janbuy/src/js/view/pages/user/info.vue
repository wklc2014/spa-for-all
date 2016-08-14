<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
		<section class="pt10">
            <article class="layout-group">
                <div class="layout-item layout-btn">
                    <div layout="row center-justify" class="layout-row profile-wraper">
                        <div class="layout-col">头像</div>
                        <div class="layout-col layout-arrow">
                            <img :src="img" alt="">
                        </div>
                    </div>
                </div>
                <div class="layout-item layout-btn" @click="handleroute('nickname')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div class="layout-col">昵称</div>
                        <div class="layout-col layout-arrow">u184CGGL8081</div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-item layout-btn" @click="handleroute('gender')">
                    <div layout="row center-justify" class="layout-row h44">
                        <div class="layout-col">性别</div>
                        <div class="layout-col layout-arrow">男</div>
                    </div>
                </div>
                <div class="layout-item layout-btn">
                    <div layout="row center-justify" class="layout-row h44">
                        <div class="layout-col">家乡</div>
                        <div class="layout-col layout-arrow">请选择</div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-item layout-btn">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-arrow">设置</div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-item layout-btn" @click="handleLogout">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1" class="layout-arrow">退出</div>
                    </div>
                </div>
            </article>
        </section>
	</div>
</template>
<script>
	import VuePageHeader from "../../components/page_header.vue";
	import handlerouteJS from "../../mxins/handleroute.js";
    import { Logout } from '../../../actions/user_action.js';
    import Route from "../../../route.js";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
		},
        vuex: {
            actions: {
                Logout
            }
        },
		data(){
			return {
				pageheader: {
					text: "信息修改",
					prev: true,
					classname: "center"
				},
                img: "./asset/img/temp/user.jpg"
			}
		},
        methods: {
            handleLogout: function () {
                let _this = this;
                lcModel.confirm("确定要退出吗？", {
                    title: "提示",
                    callback_ok: function () {
                        _this.Logout(function () {
                            Route.go("/login");
                        });
                    }
                })
            }
        }
	}
</script>
<template>
    <div class="view-container pt44">
        <vue-page-header :props="pageheader">
            <i class="icon-back" slot="prev"></i>
            <span slot="next" @click="handleroute('register')">注册</span>
        </vue-page-header>
         <section class="login-wraper pt10">
            <article class="layout-group">
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1">
                            <input type="text" v-model="username" v-el:username class="form-control" placeholder="手机号码/用户名">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of1">
                            <input type="password" v-model="password" class="form-control" placeholder="密码">
                        </div>
                    </div>
                </div>
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-x1" class="layout-col">
                            <input type="text" v-model="code" placeholder="请输入右侧验证码" class="form-control">
                        </div>
                        <div self="size-x0" class="layout-col-left-line w90">
                            <button type="button" class="btn-link">获取验证码</button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="layout-group">
                <div class="layout-text-error">用户名：{{loginData.username}}</div>
                <div class="layout-text-error">密码：{{loginData.password}}</div>
                <div class="layout-text-error">验证码：{{loginData.code}}</div>
            </article>
            <article class="btn-wraper">
                <button type="button" class="btn-confirm" @click="handleSubmit" :class="{'btn-disabled': disabled}">{{loginText}}</button>
                <div layout="row center-justify" class="text">
                    <div self="size-x0" class="left">
                        <button type="button" class="btn h40">忘记密码？</button>
                    </div>
                    <div self="size-x0" class="right">
                        <button type="button" class="btn h40" @click="handleroute('login_note')">短信验证码登陆</button>
                    </div>
                </div>
            </article>
            <article class="other-login">
                <div class="base-title">
                    <span>其他方式登录</span>
                </div>
                <div layout="row center-justify">
                    <span class="weixin">微信</span>
                    <span class="weibo">微信</span>
                    <span class="qq">QQ</span>
                </div>
            </article>
        </section>
    </div>
</template>
<script>
    import VuePageHeader from "../../components/page_header.vue";
    import handlerouteJS from "../../mxins/handleroute.js";
    import { Login } from '../../../actions/user_action.js';
    import {loginData} from "../../datas.js";
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
                Login
            }
        },
        data(){
            return {
                pageheader: {
                    text: "登录",
                    prev: true,
                    next: true,
                    classname: "center"
                },
                code: "456",
                username: "wangkun",
                password: "123",
                isSubmiting: false,
                loginData: loginData
            }
        },
        computed: {
            canSubmit: function () {
                return !!this.username && !!this.password && !!this.code;
            },
            disabled: function () {
                return !this.canSubmit || this.isSubmiting;
            },
            loginText: function () {
                return this.isSubmiting ? "登录中..." : "立即登陆";
            }
        },
        methods: {
            handleSubmit: function () {
                if(!this.canSubmit){
                    lcToast("帐号密码验证码都不能为空!", {time: 1000, position: "bottom"});
                }
                if(this.disabled){
                    return;
                }
                var _this = this;
                var data = {
                    username: this.username,
                    password: this.password,
                    code: this.code
                }
                this.isSubmiting = true;
                this.Login(data, function (status) {
                    if(status){
                        Route.go("/user");
                    }else{
                        lcModel.alert("用户名或密码或验证码不正确！", {
                            title: "提示",
                            classname: "text-center",
                            callback: function (index) {
                                _this.username = "";
                                _this.password = "";
                                _this.code = "";
                                _this.focus();
                            }
                        })
                    }
                    _this.isSubmiting = false;
                });
            },
            focus: function () {
                this.$els.username.focus();
            },
            cancel: function () {
                if(Route._currentTransition.from.path){
                    Route.go(Route._currentTransition.from.path);
                }else{
                    Route.go("home");
                }
            }
        },
        ready: function (transition) {
            this.focus();
        }
    }
</script>
"use strict";
import Vue from "vue";
import VueRouter from "vue-router";
import VueHome from "./view/pages/home/home.vue";
import VueUser from "./view/pages/user/user.vue";
import VueUserInfo from "./view/pages/user/info.vue";
import VueUserAddress from "./view/pages/user/address.vue";
import VueUserAddressedit from "./view/pages/user/addressedit.vue";
import VueUserCoupons from "./view/pages/user/coupons.vue";
import VueUserFoot from "./view/pages/user/foot.vue";
import VueUserMessage from "./view/pages/user/message.vue";
import VueUserPay from "./view/pages/user/pay.vue";
import VueUserPayPassword from "./view/pages/user/pay_passwrod.vue";
import VueUserNickname from "./view/pages/user/nickname.vue";
import VueUserGender from "./view/pages/user/gender.vue";
import VueUserOrder from "./view/pages/user/order.vue";
import VueList from "./view/pages/list.vue";
import VueGoods from "./view/pages/goods.vue";
import VueDailySale from "./view/pages/dailysale.vue";
import VueSearch from "./view/pages/search.vue";
import VueRegister from "./view/pages/login/register.vue";
import VueLogin from "./view/pages/login/login.vue";
import VueLoginnote from "./view/pages/login/login_note.vue";
import VueShopingcart from "./view/pages/shopingcart.vue";
import VueClassify from "./view/pages/classify.vue";
import VuePay from "./view/pages/pay.vue";
import VuePaySuccess from "./view/pages/pay_success.vue";
import VueError from "./view/pages/error.vue";

// 使用插件
Vue.use(VueRouter);
// 配置插件
let router = new VueRouter();

// 定义路由
router.map({
    "/": {
        name: "/",
        component: VueHome
    },
    "/dailysale": {
        name: "",
        component: VueDailySale
    },
    "/list/:id": {
        name: "/classify",
        component: VueList
    },
    "/goods/:id": {
        component: VueGoods
    },
    "/user": {
        name: "/user",
        component: VueUser
    },
    "/user/address": {
        component: VueUserAddress
    },
    "/user/addressedit/:id": {
        component: VueUserAddressedit
    },
    "/user/coupons": {
        component: VueUserCoupons
    },
    "/user/foot": {
        component: VueUserFoot
    },
    "/user/message": {
        component: VueUserMessage
    },
    "/user/order/:status": {
        component: VueUserOrder
    },
    "/user/pay": {
        component: VueUserPay
    },
    "/user/pay_password": {
        component: VueUserPayPassword
    },
    "/user/info": {
        component: VueUserInfo
    },
    "/user/nickname": {
        component: VueUserNickname
    },
    "/user/gender": {
        component: VueUserGender
    },
    "/search": {
        component: VueSearch
    },
    "/register": {
        component: VueRegister
    },
    "/login": {
        component: VueLogin
    },
    "/login_note": {
        component: VueLoginnote
    },
    "/shopingcart": {
        name: "/shopingcart",
        component: VueShopingcart
    },
    "/classify": {
        name: "/classify",
        component: VueClassify
    },
    "/pay": {
        component: VuePay
    },
    "/pay_success": {
        component: VuePaySuccess
    },
    "/error": {
        component: VueError
    }
});

//重定向
router.redirect({
    '*': '/error'
})

router.beforeEach(function(transition) {
    let state = router.app.$store.state;
    let hasLogin = state.hasLogin;
    if (transition.to.name) {
        state.toolbar_active = transition.to.name;
    }
    if (!hasLogin && transition.to.path.indexOf('/user') != -1) {
        router.replace("/login");
    } else if(hasLogin && transition.to.path.indexOf('/login') != -1){
        router.replace("/user");
    } else {
        transition.next();
    }
})

router.afterEach(function(transition) {
    window.scrollTo(0, 0);
})

export default router;

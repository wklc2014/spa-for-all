'use strict';
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueApp from './view/app.vue';
import VueCounter from './view/counter/count.vue';
import VueIndex from './view/page/index.vue';



// 使用插件
Vue.use(VueRouter);
let router = new VueRouter();

/**
 * 定义路由
 */
router.map({
    '/': {
        name: 'home',
        component: VueApp,
        subRoutes: {
            '/': { title: '首页', component: VueIndex},
            'counter': { title: '计数', component: VueCounter }
        }
    }
});
router.beforeEach(transition => {
    let title = transition.to.title;
    if (title) {
        document.title = title;
    }
    transition.next()
})

router.redirect({
    '*': '/'
})

export default router;

<template>
    <div class="container pt20">
       <ul class="nav nav-pills">
            <li v-for="r in rs" :class="{'active':highlightNav===r.path}">
                <a v-link="r.path" @click="handleSetHighlightNav(r.path)">
                    {{r.text ? r.text : (r.path.charAt(1).toUpperCase() + r.path.substring(2))}}
                </a>
            </li>
       </ul>
       <div class="spa-content">
            <router-view></router-view>
       </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import Validator from "vue-validator";
    Vue.use(Validator);
    import {getHighlightNav} from "../vuex/getters/getters.js";
    import {setHighlightNav} from "../vuex/actions/hignlightNav.action.js";
    export default {
        vuex: {
            getters: {
                highlightNav: getHighlightNav
            },
            actions: {
                setNav: setHighlightNav
            }
        },
        data(){
            return {
                currentRoute: "",
                rs: [
                    {text: '首页', path: '/'},
                    {path: '/counter'},
                ]
            }
        },
        methods: {
            handleSetHighlightNav: function (path) {
                this.setNav(path);
            }
        }
    }
</script>
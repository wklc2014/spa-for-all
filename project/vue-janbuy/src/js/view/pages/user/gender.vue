<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">保存</span>
		</vue-page-header>
		<section class="pt10">
            <article class="layout-group">
                <div class="layout-item layout-btn gender_item" v-for="g in genders" @click="change(g)">
                    <div layout="row center-justify" class="layout-row h44">
                        <div class="layout-col">{{g}}</div>
                        <div class="layout-col">
                            <i class="form-radio" :class="{'checked': g == gender}"></i>
                        </div>
                    </div>
                </div>
            </article>
        </section>
	</div>
</template>
<script>
	import VuePageHeader from "../../components/page_header.vue";
	import handlerouteJS from "../../mxins/handleroute.js";
	import VueMyRadio from "../../components/my_radio.vue";
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
			VueMyRadio
		},
		data(){
			return {
				pageheader: {
					text: "性别修改",
					next: true,
					prev: true,
					classname: "center"
				},
				gender: "男",
				genders: ["男", "女"]
			}
		},
		methods: {
			change: function (text) {
				this.gender = text;
			}
		}
	}
</script>
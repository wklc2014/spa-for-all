<template>
	<div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<i class="icon-delete" slot="next" @click="handleEdit"></i>
		</vue-page-header>
		<section class="user-foot" :class="{'user-foot-edit':edit}">
			<article class="user-foot-item" v-for="m in 3">
                <div layout="row stretch-left" class="user-foot-title">
                    <div self="size-x0" class="radio-box">
                        <i class="form-radio"></i>
                    </div>
                    <div self="size-x1" class="name">3月9日</div>
                </div>
                <ul class="page-list">
                    <li class="page-list-item" v-for="n in 3">
                        <div layout="row stretch-stretch" class="page-list-content">
                            <div self="center size-x0" class="td-1 radio-box">
                                <i class="form-radio"></i>
                            </div>
                            <div self="size-x0" class="td-2">
                                <div class="img">
                                    <img :src="'../asset/img/temp/index-list-1.png'" alt="" />
                                    <span>无货</span>
                                </div>
                            </div>
                            <div self="size-x1" class="td-3">
                                <h4 class="name">【特级】法国精制猪肋排1000g</h4>
                                <h5 class="info">￥23.8元</h5>
                                <span class="notice">到货通知</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </article>
            <h3 class="base-title"><span>已经到最底了</span></h3>
		</section>
	</div>
</template>
<script type="text/javascript">
	import VuePageHeader from "../../components/page_header.vue";
	import VueMyRadio from "../../components/my_radio.vue";
	export default{
		components: {
			VuePageHeader,
			VueMyRadio
		},
		data(){
			return {
				pageheader: {
					text: "我的足迹",
					next: true,
					prev: true,
					classname: "center"
				},
				edit: false
			}
		},
		methods: {
			handleEdit: function () {
				this.edit = !this.edit;
			}
		}
	}
</script>
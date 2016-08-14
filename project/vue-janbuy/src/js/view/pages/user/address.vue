<template>
    <div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next" @click="handleroute('addressedit/' + checked)">编辑</span>
		</vue-page-header>
		<section class="user-address">
			<a href="javascript:;" class="address-item" v-for="ads in address">
				<div class="address-content">
					<div class="header">
						<span class="default" v-if="ads.isDefault">[默认]</span>
						<span class="name">{{ads.name}}</span>
						<span>{{ads.phone}}</span>
					</div>
					<div class="body">
						<span>收货地址：</span>
						<span>{{(ads.city == ads.provence ? "" : ads.provence) + " " + ads.city + " " + ads.zone + " " + ads.detail}}</span>
					</div>
				</div>
				<div class="address-arrow">
					<vue-my-radio :checked="ads.uid == checked" @change="setAddress(ads.uid)"></vue-my-radio>
				</div>
			</a>
		</section>
		<section class="user-address-btn">
			<button type="button" class="btn-confirm">
				<i class="icon-add"></i> 添加新收货地址
			</button>
		</section>
	</div>
</template>
<script>
	import {addressLists} from "../../../datas/lists.js";
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
					text: "地址管理",
					next: true,
					prev: true,
					classname: "center"
				},
				checked: 1,
				address: addressLists
			}
		},
		computed: {

		},
		methods: {
			setAddress: function (uid) {
				this.checked = uid;
			}
		},
		ready: function () {

		}
	}
</script>
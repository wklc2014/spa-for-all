<template>
	<div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<i class="icon-delete" slot="next"></i>
		</vue-page-header>
		<section class="pt10 pb10">
			<a href="javascript:;" class="user-message-item" v-for="n in 12">
                <div class="content">
                    <div class="img">
                        <img :src="'../asset/img/user/message.png'" alt="">
                    </div>
                    <div class="text">
                        <h3>简农易购</h3>
                        <p>三八女人节活动，首单立减10元，下单就反10元,10全1010美真10惠~节日让让你爽翻天</p>
                        <p><span class="time">2016/3/7</span></p>
                    </div>
                    <div class="status">
                        <vue-my-radio ></vue-my-radio>
                    </div>
                </div>
            </a>
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
					text: "我的消息",
					next: true,
					prev: true,
					classname: "center"
				},

			}
		}
	}
</script>
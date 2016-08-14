<template>
	<ul class="page-list">
		<li class="page-list-item" v-for="list in lists">
            <div layout="row stretch-stretch" class="page-list-content">
                <div self="size-x0" class="td-2">
                    <div class="img">
                        <img :src="'./asset/img/temp/' + list.img" alt=""/>
                    </div>
                </div>
                <div self="size-x1" class="td-3">
                    <h4 class="name">{{list.name}}}</h4>
                    <h5 class="info">￥{{list.newPrice}}元</h5>
                    <p class="p1">￥{{list.oldPrice}}</p>
                </div>
                <button class="btn btn-primary" @click="goGoods">立即抢购</button>
            </div>
        </li>
	</ul>
</template>
<script>
	import datas from "../../datas/lists.js";
	import handlerouteJS from "../mxins/handleroute.js";
	export default{
		mixins: [
			handlerouteJS
		],
		data(){
			return {
				lists: datas[0].lists
			}
		},
		methods: {
			goGoods: function () {
				let path = "/goods/" + Math.floor(Math.random()*11);
				this.handleroute(path);
			}
		}
	}
</script>
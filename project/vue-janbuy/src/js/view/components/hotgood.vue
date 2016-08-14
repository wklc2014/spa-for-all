<template>
	<ul>
		<li v-for="hotgood in hotgoods" @click="handleroute('goods/'+hotgood.id)">
            <div class="hotgoods-list-content">
                <img :src="hotgood.img" alt="" />
                <h4>{{hotgood.name}}</h4>
                <h5>￥{{hotgood.newprice}}元</h5>
                <h6>￥{{hotgood.oldprice}}</h6>
                <p>
                    <span class="fr" v-if="hotgood.ispostage">包邮</span>
                    <span class="fl">{{hotgood.peopleNumber}}人已付款</span>
                </p>
            </div>
        </li>
	</ul>
</template>
<script>
	import handlerouteJS from "../mxins/handleroute.js";
	export default {
		props: ["hotgoods"]
	}
</script>

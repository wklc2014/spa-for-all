<template>
	<div class="swipe" id="js-banner">
		<ul class="swipe-wrap">
			<li class="figure" v-for="list in lists">
				<a v-link="'/goods/'+list.id">
					<img :src="'./asset/img/temp/' + list.img" alt="">
				</a>
			</li>
		</ul>
	</div>
	<div class="swipe-page" id="js-swipe-page">
		<i class="active"></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
	</div>
</template>
<script>
import {swipeData} from "../../datas/lists.js";
	export default{
		data(){
			return {
				lists: swipeData
			}
		},
		ready: function () {
            let swipePage = document.getElementById("js-swipe-page");
            let slider = Swipe(document.getElementById('js-banner'), {
                callback: function(index, element){
                    let iEle = swipePage.querySelectorAll("i");
                    for (let i = iEle.length - 1; i >= 0; i--) {
                        iEle[i].className = index == i ? 'active' : '';
                    }
                }
            });
		}
	}
</script>
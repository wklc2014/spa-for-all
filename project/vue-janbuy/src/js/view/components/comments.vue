<template>
	<div class="detail-comment-item" v-for="list in lists">
        <div class="detail-comment-hd">
            <img class="profile" :src="'./asset/img/temp/'+list.img" alt="">
            <span class="name">{{list.name}}</span>
            <div class="status">
                <i class="icon-comment-good"></i> 好评
            </div>
        </div>
        <div class="detail-comment-bd">
            {{{list.content}}}
        </div>
    </div>
</template>
<script>
	export default{
		props: ["lists"]
	}
</script>
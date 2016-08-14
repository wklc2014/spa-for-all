<template>
	<section class="page-header">
        <div class="prev" v-if="props.prev" @click="goback">
            <slot name="prev"></slot>
        </div>
        <div class="next" v-if="props.next">
        	<slot name="next"></slot>
        </div>
        <div class="text" :class="[props.classname]">
        	{{props.text}}
        	<slot name="text"></slot>
        </div>
    </section>
</template>
<script>
	export default{
		props: ["props"],
		methods: {
			goback: function () {
				history.go(-1);
			}
		}
	}
</script>
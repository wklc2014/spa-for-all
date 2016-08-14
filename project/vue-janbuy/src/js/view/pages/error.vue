<template>
	<div class="view-container pt44 pb60">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
		</vue-page-header>
        <section class="list-none">
            功能开发中...
        </section>
        <vue-page-footer></vue-page-footer>
    </div>
</template>
<script>
	import VuePageHeader from "../components/page_header.vue";
    import VuePageFooter from "../components/page_footer.vue";
    export default{
		components: {
			VuePageHeader,
            VuePageFooter
		},
		data(){
			return {
				pageheader: {
					text: "开发中",
					prev: true,
					classname: "center"
				},
			}
		}
	}
</script>
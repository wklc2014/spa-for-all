<template>
    <div class="view-container pt44">
		<vue-page-header :props="pageheader">
			<i class="icon-back" slot="prev"></i>
			<span slot="next">保存</span>
		</vue-page-header>
		<section class="pt10">
            <article class="layout-group">
                <div class="layout-item">
                    <div layout="row center-justify" class="layout-row h44">
                        <div self="size-1of4" class="layout-col">
                            <label for="username">昵称：</label>
                        </div>
                        <div self="size-3of4" class="layout-col">
                            <input id="username" type="text" class="form-control" placeholder="请输入昵称" value="u184CGGL8081">
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
	export default{
		mixins: [
			handlerouteJS
		],
		components: {
			VuePageHeader,
		},
		data(){
			return {
				pageheader: {
					text: "修改昵称",
					next: true,
					prev: true,
					classname: "center"
				},
			}
		}
	}
</script>
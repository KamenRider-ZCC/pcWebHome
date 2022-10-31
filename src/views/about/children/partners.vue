<template>
	<div class="partnersPageRootDom">
		<title-tip title="PARTNERS" long></title-tip>
		<div v-html="content"></div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/footer";
	export default {
		name: 'partnersAbout',
		data() {
			return {
				content: ''
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.getDetail();
		},
		methods: {
			async getDetail() {
				let { data } = await api.getPage({
          type: 3
        });
				this.content = data.content;
        
			},
		}
	}
</script>

<style lang="scss">
	.partnersPageRootDom {
		
	}
</style>

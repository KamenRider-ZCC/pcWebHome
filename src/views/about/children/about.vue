<template>
	<div class="aboutUsPageRootDom">
		<title-tip title="ABOUT US" long></title-tip>
		<div v-html="aboutUs"></div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/about";
	export default {
		name: 'aboutAbout',
		data() {
			return {
				aboutUs: ''
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
				let { data } = await api.getPage({});
				this.aboutUs = data.aboutUs;
			},
		}
	}
</script>

<style lang="scss">
	.aboutUsPageRootDom {
		
	}
</style>

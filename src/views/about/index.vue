<template>
	<div class="indexAboutUsPageRootDom">
		<div class="about_left">
			<title-tip title="ABOUT  US"></title-tip>
			<div class="about_left_title" @click="goToChild('/about/index/about')">
				<div class="about_left_title_text">ABOUT  US</div>
			</div>
      <div class="about_left_title" @click="goToChild('/about/index/partners')">
      	<div class="about_left_title_text">PARTNERS</div>
      </div>
		</div>
    <div class="about_right">
      <router-view />
    </div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/about";
	export default {
		name: 'about',
		data() {
			return {

			}
		},
		components: {
			titleTip
		},
		methods: {
      // 跳转
			goToChild(url) {
				this.$router.push({
					path: url,
				});
			},
		}
	}
</script>

<style lang="scss">
	.indexAboutUsPageRootDom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
    .about_left {
    	width: 200px;
    	margin-right: 40px;
    	flex: none;
    	.about_left_title {
    		width: 100%;
    		height: 50px;
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		background: #f2f2f2;
        cursor: pointer;
    		.about_left_title_text {
    			font-weight: 700;
    			font-style: normal;
    			font-size: 16px;
    			text-align: center;
    		}
    	}
    }
    .about_right {
    	flex: 1;
    }
	}
</style>

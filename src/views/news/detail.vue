<template>
	<div class="detailNewsPageRootDom">
		<title-tip title="NEWS DETAILS" long></title-tip>
		<div class="news_nav">
			<div class="news_nav_blue" @click="goToList">新闻</div>
			<div class="news_nav_between">></div>
			<div class="news_nav_black">{{info.title}}</div>
		</div>
		<div class="nav_title">{{info.title}}</div>
		<img :src="info.cover" class="nav_cover" >
		<div style="margin: 20px 0;" v-html="info.content"></div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/news";
	export default {
		name: 'detailNews',
		data() {
			return {
				id: '',
				info: {}
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.id = this.$route.query.id || '';
			this.getDetail();
		},
		methods: {
			async getDetail() {
				let { data } = await api.getDetails({
					id: this.id
				});
				this.info = data;
			},
			// 返回列表
			goToList() {
				this.$router.replace({
					path: `/news/list`,
				});
			},
		}
	}
</script>

<style lang="scss">
	.detailNewsPageRootDom {
		.news_nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 20px;
			.news_nav_blue {
				font-family: '微软雅黑 Bold', '微软雅黑';
				font-weight: 700;
				font-style: normal;
				color: #60BFF3;
				font-size: 13px;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			.news_nav_between {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				margin: 0 5px;
			}
			.news_nav_black {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
			}
		}
		.nav_title {
			font-family: '微软雅黑';
			font-weight: 400;
			font-style: normal;
			font-size: 18px;
			margin-bottom: 20px;
		}
		.nav_cover {
			width: 100%;
			display: block;
		}
	}
</style>

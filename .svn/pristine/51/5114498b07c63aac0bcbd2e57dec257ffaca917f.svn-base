<template>
	<div class="detailCitationsPageRootDom">
		<title-tip title="CITATIONS" long></title-tip>
		<div class="citations_nav">
			<div class="citations_nav_blue" @click="goToHome">首页</div>
			<div class="citations_nav_between">></div>
			<div class="citations_nav_blue" @click="goToList">CITATIONS</div>
			<div class="citations_nav_between">></div>
			<div class="citations_nav_black">{{info.name}}</div>
		</div>
		<div class="citations_list">
			<div class="citations_list_item">
				<img :src="info.cover" class="citations_list_item_img">
				<div class="citations_list_item_content">
					<div class="citations_list_item_title">{{info.name}}</div>
					<div class="citations_list_item_text">{{info.describes}}</div>
					<div class="citations_list_item_place"></div>
					<div class="citations_list_item_btn">
						<div class="citations_list_item_btn_left" @click="goToProduct">查看相关产品</div>
						<div class="citations_list_item_btn_right" @click="goToArticle">跳转至引用文献</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/citations";
	import { getDetails } from "@/api/product";
	export default {
		name: 'detailCitations',
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
					id: this.id,
				});
				this.info = data;
			},
			// 返回首页
			goToHome() {
				this.$router.replace({
					path: '/dashboard'
				});
			},
			// 返回列表
			goToList() {
				this.$router.replace({
					path: `/citations/list`,
				});
			},
			async goToProduct() {
				let { data } = await getDetails({
					id: this.info.productId
				});
				this.$router.push({
					path: `/product/index/detail`,
					query: {
						id: this.info.productId,
						url: encodeURIComponent(`list?typeId=${data.sonType}&fatherId=${data.type}&classify=${data.sonTypeName}`),
						name: data.sonTypeName
					}
				});
			},
			goToArticle() {
				window.open(this.info.link);
			}
		}
	}
</script>

<style lang="scss">
	.detailCitationsPageRootDom {
		.citations_nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 20px;
			.citations_nav_blue {
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
			.citations_nav_between {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				margin: 0 5px;
			}
			.citations_nav_black {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.citations_list {
			display: grid;
			grid-template-columns: repeat(2, 540px);
			grid-row-gap: 40px;
			grid-column-gap: 120px;
			.citations_list_item {
				height: 158px;
				display: flex;
				flex-direction: row;
				align-items: stretch;
				cursor: pointer;
				.citations_list_item_img {
					width: 107px;
					height: 158px;
					display: block;
					margin-right: 20px;
					flex: none;
				}
				.citations_list_item_content{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: stretch;
					.citations_list_item_title {
						font-family: '微软雅黑 Bold', '微软雅黑';
						font-weight: 700;
						font-style: normal;
						font-size: 18px;
						color: #60BFF3;
						margin-bottom: 10px;
					}
					.citations_list_item_text {
						font-family: '微软雅黑';
						font-weight: 400;
						font-style: normal;
						color: #1E1E1E;
						font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
					}
					.citations_list_item_place {
						flex: 1;
					}
					.citations_list_item_btn {
						display: flex;
						flex-direction: row;
						.citations_list_item_btn_left {
							width: 98px;
							height: 30px;
							border: 1px solid #60BFF3;
							font-size: 12px;
							text-align: center;
							line-height: 30px;
							color: #fff;
							background: #60BFF3;
							cursor: pointer;
							margin-right: 10px;
						}
						.citations_list_item_btn_right {
							width: 98px;
							height: 30px;
							border: 1px solid #60BFF3;
							font-size: 12px;
							text-align: center;
							line-height: 30px;
							color: #60BFF3;
							background: #fff;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
</style>

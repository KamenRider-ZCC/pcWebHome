<template>
	<div class="detailApplicationsPageRootDom">
		<title-tip title="APPLICATIONS" long></title-tip>
		<div class="app_nav">
			<div class="app_nav_blue" @click="goToHome">首页</div>
			<div class="app_nav_between">></div>
			<div class="app_nav_blue" @click="goToList">{{info.typeName}}</div>
			<div class="app_nav_between">></div>
			<div class="app_nav_black">{{info.name}}</div>
		</div>
		<div class="app_title">{{info.name}}</div>
		<div class="app_title_under">概要</div>
		<div class="app_content">{{info.outline}}</div>
		<div class="app_smalltitle">可下载的文档</div>
		<div class="app_list">
			<div class="app_list_big">
				<div class="app_list_title">标题</div>
				<div class="app_down">
					<div class="app_down_title">{{info.fileName}}</div>
					<div class="app_down_btn" @click="goToDown">下载</div>
				</div>
			</div>
			<div class="app_list_small">
				<div class="app_list_title">格式</div>
				<div class="app_down">
					<div class="app_down_title">{{info.formatted}}</div>
				</div>
			</div>
			<div class="app_list_small">
				<div class="app_list_title">文档大小</div>
				<div class="app_down">
					<div class="app_down_title">{{info.capacity}}</div>
				</div>
			</div>
		</div>
		<div class="app_smalltitle">相关产品</div>
		<div class="app_product">
			<img src="@/assets/images/link.png" class="app_product_img" >
			<div @click="goToProduct">{{info.productName}}</div>
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/application";
	import { getDetails } from "@/api/product";
	var _this;
	export default {
		name: 'detailApplications',
		data() {
			return {
				id: '',
				info: {},
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.id = val.query.id || '';
					_this.getDetail();
		    }
		  }
		},
		components: {
			titleTip
		},
		created() {
			_this = this;
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
			// 返回首页
			goToHome() {
				this.$router.replace({
					path: '/dashboard'
				});
			},
			// 返回列表
			goToList() {
				this.$router.replace({
					path: `/applications/list`,
					query: {
						typeId: this.info.type
					}
				});
			},
			// 去下载
			goToDown() {
				window.open(this.info.file);
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
		}
	}
</script>

<style lang="scss">
	.detailApplicationsPageRootDom{
		.app_nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 20px;
			.app_nav_blue {
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
			.app_nav_between {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				margin: 0 5px;
			}
			.app_nav_black {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
			}
		}
		.app_title {
			font-family: '微软雅黑';
			font-weight: 400;
			font-style: normal;
			font-size: 18px;
			color: #333;
		}
		.app_title_under {
			width: 45px;
			height: 26px;
			margin: 20px 0;
			background: #60BFF3;
			line-height: 26px;
			text-align: center;
			font-family: '思源黑体 CN';
			font-weight: 400;
			font-style: normal;
			font-size: 13px;
			letter-spacing: normal;
			color: #fff;
		}
		.app_content {
			font-family: '思源黑体 CN';
			font-weight: 400;
			font-style: normal;
			font-size: 13px;
			letter-spacing: normal;
			color: #000;
			line-height: 46px;
			margin-bottom: 35px;
		}
		.app_list {
			display: flex;
			flex-direction: row;
			.app_list_big{
				flex: 1;
			}
			.app_list_small {
				flex: none;
				width: 140px;
			}
			.app_list_title {
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 13px;
				letter-spacing: normal;
				color: #000;
				line-height: 30px;
			}
		}
		.app_smalltitle {
			font-family: '思源黑体 CN';
			font-weight: 400;
			font-style: normal;
			font-size: 13px;
			letter-spacing: normal;
			color: #60BFF3;
			line-height: 40px;
		}
		.app_down {
			display: flex;
			flex-direction: row;
			align-items: center;
			.app_down_title {
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 13px;
				letter-spacing: normal;
				color: #000;
				line-height: 30px;
				margin-right: 15px;
			}
			.app_down_btn {
				width: 45px;
				height: 26px;
				background: #60BFF3;
				line-height: 26px;
				text-align: center;
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 13px;
				letter-spacing: normal;
				color: #fff;
				cursor: pointer;
			}
		}
		.app_product {
			font-family: '微软雅黑 Bold', '微软雅黑';
			font-weight: 700;
			font-style: normal;
			color: #60BFF3;
			font-size: 13px;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 30px;
			div{
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			.app_product_img {
				width: 24px;
				height: 24px;
				margin-right: 10px;
				display: block;
			}
		}
	}
</style>

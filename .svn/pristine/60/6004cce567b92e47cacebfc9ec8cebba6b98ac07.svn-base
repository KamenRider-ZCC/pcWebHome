<template>
	<div class="listNewsPageRootDom">
		<div class="list_left">
			<title-tip title="RECOMMENDATION"></title-tip>
			<div class="list_left_item" v-for="(item, index) in recommend">
				<div class="list_left_item_dot">·</div>
				<div class="list_left_item_content" @click="goToDetail(item)">{{item.title}}</div>
			</div>
		</div>
		<div class="list_right">
			<title-tip title="News" long></title-tip>
			<el-carousel trigger="click" height="250px">
				<el-carousel-item v-for="(item, index) in carousel" :key="index">
					<div class="list_right_carousel" @click="goToDetail(item)">
						<img :src="item.cover" class="list_right_carousel_img">
						<div class="list_right_carousel_title">{{item.title}}</div>
						<div class="list_right_carousel_txt">{{item.digest}}</div>
					</div>
				</el-carousel-item>
			</el-carousel>
			<div class="list_right_item" v-for="(item, index) in list" :key="index" @click="goToDetail(item)">
				<img :src="item.cover" class="list_right_item_image">
				<div class="list_right_item_content">
					<div class="list_right_item_content_title">{{item.title}}</div>
					<div class="list_right_item_content_txt">{{item.digest}}</div>
					<div class="list_right_item_content_place"></div>
					<div class="list_right_item_content_time">{{item.crtTime}}</div>
				</div>
			</div>
			<div class="pagination taR mt20x">
			  <el-pagination
			    @size-change="handleSizeChange"
			    @current-change="handleCurrentChange"
			    :current-page="pageNum"
			    :page-sizes="[1, 4, 6, 10, 20, 40, 80, 100]"
			    :page-size="pageSize"
			    layout="total, sizes, prev, pager, next, jumper"
			    :total="total"
			  ></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/news";
	export default {
		name: 'listNews',
		data() {
			return {
				recommend: [],
				carousel: [],
				pageNum: 1,
				pageSize: 6,
				total: 0,
				list: [],
			}
		},
		components: {
			titleTip
		},
		async mounted() {
			await this.getRecommend();
			await this.getSlideshow();
			this.getList();
		},
		methods: {
			async getRecommend() {
				let { data } = await api.getRecommend({
					limit: 10,
					offset: 1,
				});
				this.recommend = data;
			},
			async getSlideshow() {
				let { data } = await api.getSlideshow({});
				this.carousel = data;
			},
			async getList() {
				let { data, count } = await api.getPage({
					limit: this.pageSize,
					offset: this.pageNum,
				});
				this.list = data;
				this.total = +count || 0;
			},
			// 条数改变
			handleSizeChange(val) {
			  this.pageSize = val;
			  this.pageNum = 1;
			  this.getList();
			},
			// 页码改变
			handleCurrentChange(val) {
			  this.pageNum = val;
			  this.getList();
			},
			goToDetail(item) {
				this.$router.push({
					path: '/news/detail',
					query: {
						id: item.id,
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.listNewsPageRootDom {
		display: flex;
		flex-direction: row;
		.list_left {
			width: 285px;
			flex: none;
			margin-right: 20px;
			.list_left_item{
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				margin-bottom: 15px;
				.list_left_item_dot {
					font-family: '微软雅黑';
					font-weight: 400;
					font-style: normal;
					font-size: 14px;
					color: #0B2E42;
					margin-right: 10px;
				}
				.list_left_item_content {
					font-family: '微软雅黑';
					font-weight: 400;
					font-style: normal;
					font-size: 14px;
					color: #0B2E42;
					cursor: pointer;
				}
			}
		}
		.list_right {
			flex: 1;
			.list_right_carousel {
				width: 100%;
				height: 100%;
				position: relative;
				.list_right_carousel_img{
					width: 100%;
					height: 100%;
					display: block;
					object-fit: cover;
				}
				.list_right_carousel_title {
					font-family: '微软雅黑 Bold', '微软雅黑';
					font-weight: 700;
					font-style: normal;
					font-size: 14px;
					color: #FBFEFF;
					position: absolute;
					left: 20px;
					bottom: 60px;
					z-index: 10;
					width: 430px;
				}
				.list_right_carousel_txt {
					font-family: '微软雅黑';
					font-weight: 400;
					font-style: normal;
					color: #FBFEFF;
					font-size: 13px;
					position: absolute;
					left: 20px;
					bottom: 20px;
					z-index: 10;
					width: 430px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
			}
			.list_right_item {
				border-bottom: 1px solid #f1f1f1;
				padding: 20px 0;
				display: flex;
				align-items: stretch;
				cursor: pointer;
				.list_right_item_image {
					width: 150px;
					height: 100px;
					display: block;
					object-fit: cover;
					margin-right: 20px;
					flex: none;
				}
				.list_right_item_content {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: stretch;
					.list_right_item_content_title {
						font-family: '微软雅黑 Bold', '微软雅黑';
						font-weight: 700;
						font-style: normal;
						font-size: 14px;
						color: #0B2E42;
						margin-bottom: 10px;
					}
					.list_right_item_content_txt {
						font-family: '微软雅黑';
						font-weight: 400;
						font-style: normal;
						color: #666666;
						font-size: 13px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
					.list_right_item_content_place {
						flex: 1;
					}
					.list_right_item_content_time {
						font-family: '微软雅黑';
						font-weight: 400;
						font-style: normal;
						color: #666666;
						font-size: 13px;
						text-align: right;
					}
				}
			}
		}
	}
</style>

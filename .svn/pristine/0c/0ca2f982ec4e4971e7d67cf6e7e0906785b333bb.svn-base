<template>
	<div class="listApplicationsPageRootDom">
		<title-tip :title="name" long></title-tip>
		<div class="app_tip">
			{{describes}}
		</div>
		<div class="app_item" v-for="(item, index) in list" :key="index" @click="goToList(item)">
			<img :src="item.picture" class="app_item_img">
			<div class="app_item_content">
				<div class="app_item_title">{{item.name}}</div>
				<div class="app_item_text">{{item.outline}}</div>
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
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/application";
	var _this;
	export default {
		name: 'listApplications',
		data() {
			return {
				typeId: '',
				pageNum: 1,
				pageSize: 6,
				total: 0,
				list: [],
				name: '',
				describes: ''
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.typeId = val.query.typeId || '';
					_this.getList();
					_this.getTypeDetails();
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
			this.typeId = this.$route.query.typeId || '';
			this.getList();
			this.getTypeDetails();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getPage({
					limit: this.pageSize,
					offset: this.pageNum,
					typeId: this.typeId
				});
				this.list = data;
				this.total = +count || 0;
			},
			async getTypeDetails() {
				let { data } = await api.getTypeId({
					typeId: this.typeId
				});
				this.name = data[0].name;
				this.describes = data[0].describes;
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
			goToList(item) {
				this.$router.push({
					path: '/applications/detail',
					query: {
						id: item.id,
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.listApplicationsPageRootDom{
		.app_tip{
			font-family: '微软雅黑';
			font-weight: 400;
			font-style: normal;
			color: #1E1E1E;
			font-size: 14px;
		}
		.app_item {
			height: 100px;
			padding: 10px 0;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			cursor: pointer;
			box-sizing: content-box;
			.app_item_img {
				width: 100px;
				height: 100px;
				display: block;
				margin-right: 20px;
				flex: none;
			}
			.app_item_content{
				flex: 1;
				.app_item_title {
					font-family: '微软雅黑 Bold', '微软雅黑';
					font-weight: 700;
					font-style: normal;
					font-size: 18px;
					color: #60BFF3;
					margin-bottom: 10px;
				}
				.app_item_text {
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
			}
		}
	}
</style>

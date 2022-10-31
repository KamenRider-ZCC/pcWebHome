<template>
	<div class="listCitationsPageRootDom">
		<title-tip title="CITATIONS" long></title-tip>
		<div class="citations_list">
			<div class="citations_list_item" v-for="(item, index) in list" :key="index" @click="goToDetail(item)">
				<img :src="item.cover" class="citations_list_item_img">
				<div class="citations_list_item_content">
					<div class="citations_list_item_title">{{item.name}}</div>
					<div class="citations_list_item_text">{{item.describes}}</div>
				</div>
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
	import * as api from "@/api/citations";
	export default {
		name: 'listCitations',
		data() {
			return {
				pageNum: 1,
				pageSize: 6,
				total: 0,
				list: [],
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.getList();
		},
		methods: {
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
			// 去详情
			goToDetail(item) {
				this.$router.push({
					path: '/citations/detail',
					query: {
						id: item.id,
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.listCitationsPageRootDom {
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
						-webkit-line-clamp: 6;
					}
				}
			}
		}
	}
</style>

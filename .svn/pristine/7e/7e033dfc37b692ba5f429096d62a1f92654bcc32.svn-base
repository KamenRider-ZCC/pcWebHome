<template>
	<div class="newChildProductPageRootDom">
		<title-tip :title="topTitle" long></title-tip>
		<goods-list :from="{url: 'new', name: 'NEWS PRODUCT'}" :list="goods"></goods-list>
		<div class="pagination taR mt20x">
		  <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page="pageNum"
		    :page-sizes="[1, 3, 6, 9, 12, 18, 30, 90]"
		    :page-size="pageSize"
		    layout="total, sizes, prev, pager, next, jumper"
		    :total="total"
		  ></el-pagination>
		</div>
	</div>
</template>

<script>
	import * as api from "@/api/home";
	import titleTip from '@/components/titleTip';
	import goodsList from '@/components/goodsList';
	export default {
		name: 'newProduct',
		data() {
			return {
				topTitle: 'NEWS PRODUCT',
				pageNum: 1,
				pageSize: 9,
				total: 0,
				goods: []
			}
		},
		components: {
			titleTip, goodsList
		},
		mounted() {
			this.getList();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getNew({
					limit: this.pageSize,
					offset: this.pageNum,
					typeId: this.typeId
				});
				this.goods = data;
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
		}
	}
</script>

<style lang="scss">
	.newChildProductPageRootDom {
		width: 900px;
		height: 100%;
		margin-left: auto;
	}
</style>

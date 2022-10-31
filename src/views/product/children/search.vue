<template>
	<div class="listChildProductPageRootDom">
		<title-tip :title="topTitle" long></title-tip>
		<goods-list :from="{url: `search?searchKey=${this.searchKey}`, name: this.topTitle}" :list="goods"></goods-list>
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
	import * as api from "@/api/product";
	import titleTip from '@/components/titleTip';
	import goodsList from '@/components/goodsList';
	var _this;
	export default {
		name: 'searchProduct',
		data() {
			return {
				topTitle: 'SEARCH',
				searchKey: '',
				pageNum: 1,
				pageSize: 9,
				total: 0,
				goods: []
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.searchKey = val.query.searchKey || '';
					_this.getList();
		    }
		  }
		},
		components: {
			titleTip, goodsList
		},
		created() {
			_this = this;
		},
		mounted() {
			this.searchKey = this.$route.query.searchKey || '';
			this.getList();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getName({
					limit: this.pageSize,
					offset: this.pageNum,
					name: this.searchKey
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
	.listChildProductPageRootDom {
		width: 900px;
		height: 100%;
		margin-left: auto;
	}
</style>

<template>
	<div class="listChildProductPageRootDom">
		<title-tip :title="topTitle" long></title-tip>
		<el-table
			:data="goods"
			style="width: 100%"
      header-row-class-name="table_header"
      header-cell-class-name="table_header"
      row-class-name="table_row"
      @row-click="onRowClick"
      >
			<el-table-column
				prop="frontProductNo"
				label="货号">
			</el-table-column>
			<el-table-column
				prop="name"
				label="产品名称">
			</el-table-column>
			<el-table-column
				prop="specification"
				label="规格">
			</el-table-column>
			<el-table-column
				prop="price"
				label="价格">
        <template slot-scope="scope">
          <span>￥{{ scope.row.price }}</span>
        </template>
			</el-table-column>
		</el-table>
		
		
		
		<!-- <goods-list :from="{url: `list?typeId=${this.typeId}&fatherId=${this.fatherId}&classify=${this.topTitle}`, name: this.topTitle}" :list="goods"></goods-list> -->
		<div class="pagination taR mt20x">
		  <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page="pageNum"
		    :page-sizes="[1, 5, 15, 10, 20, 30, 50, 70, 90]"
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
	// import goodsList from '@/components/goodsList';
	var _this;
	export default {
		name: 'listProduct',
		data() {
			return {
				topTitle: '',
				typeId: '',
				fatherId: '',
				pageNum: 1,
				pageSize: 15,
				total: 0,
				goods: []
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.topTitle = val.query.classify || '';
		      _this.typeId = val.query.typeId || '';
					_this.fatherId = val.query.fatherId || '';
					_this.getList();
		    }
		  }
		},
		components: {
			titleTip,
      // goodsList
		},
		created() {
			_this = this;
		},
		mounted() {
			this.topTitle = this.$route.query.classify || '';
			this.typeId = this.$route.query.typeId || '';
			this.fatherId = this.$route.query.fatherId || '';
			this.getList();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getPage({
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
      // 点击表格
      onRowClick(e) {
        this.$router.push({
        	path: `/product/index/detail`,
        	query: {
        		id: e.id,
        		url: encodeURIComponent(`list?typeId=${this.typeId}&fatherId=${this.fatherId}&classify=${this.topTitle}`),
        		name: this.topTitle
        	}
        });
      }
		}
	}
</script>

<style lang="scss">
	.listChildProductPageRootDom {
		width: 900px;
		height: 100%;
		margin-left: auto;
    .table_header {
      background-color: #60bff3;
      font-weight: 700;
      color: #fff;
      font-size: 14px;
    }
    .table_row {
      background-color: #f5f5f5;
      cursor: pointer;
    }
	}
</style>

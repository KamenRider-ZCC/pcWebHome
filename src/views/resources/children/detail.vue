<template>
	<div class="detailChildResourcesPageRootDom">
		<title-tip :title="topTitle" long></title-tip>
    <div class="detail_search">
    	<div class="detail_search_title">Search</div>
    	<input type="text" v-model="name" class="detail_search_input" />
    	<div class="detail_search_btn" @click="getSearch">Search</div>
    </div>
		<div class="detail_item" v-for="(item, index) in list" :key="index" @click="goToDownload(item)">
			<img src="@/assets/images/PDF.png" class="detail_item_img">
			<span>{{item.name}}</span>
		</div>
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
	import * as api from "@/api/resources";
	import titleTip from '@/components/titleTip';
	var _this;
	export default {
		name: 'detailResources',
		data() {
			return {
				topTitle: '',
				id: 0,
				pageNum: 1,
				pageSize: 9,
				total: 0,
				list: [],
        name: ''
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.topTitle = val.query.type || '';
		      _this.id = val.query.id || 0;
          _this.name = '';
					_this.getList();
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
      this.name = '';
			this.topTitle = this.$route.query.type || '';
			this.id = this.$route.query.id || 0;
			this.getList();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getPage({
					limit: this.pageSize,
					offset: this.pageNum,
					typeId: this.id,
          name: this.name
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
			// 下载
			goToDownload(item) {
				window.open(item.file);
			},
      // 搜索
      async getSearch() {
      	this.getList();
      },
		}
	}
</script>

<style lang="scss">
	.detailChildResourcesPageRootDom {
		width: 900px;
		height: 100%;
		margin-left: auto;
		display: flex;
		flex-direction: column;
		align-items: stretch;
    .detail_search {
    	display: flex;
    	flex-direction: row;
    	align-items: center;
    	.detail_search_title {
    		font-family: '思源黑体 CN Bold', '思源黑体 CN';
    		font-weight: 700;
    		font-style: normal;
    		font-size: 16px;
    		color: #60BFF3;
    	}
    	.detail_search_input {
    		color: #999999;
    		width: 200px;
    		height: 32px;
    		padding: 2px;
    		margin: 0 5px;
    		border: 1px solid #60BFF3;
    		font-size: 14px;
    		line-height: 32px;
    		outline: none;
    	}
    	.detail_search_btn {
    		width: 80px;
    		height: 32px;
    		border-radius: 5px;
    		background: #60BFF3;
    		font-size: 14px;
    		color: #fff;
    		text-align: center;
    		line-height: 32px;
    		cursor: pointer;
    	}
    }
		.detail_item{
			align-self: flex-start;
			margin: 15px 0;
			font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
			font-weight: 700;
			font-style: normal;
			color: #60BFF3;
			cursor: pointer;
			.detail_item_img{
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>

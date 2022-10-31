<template>
	<div class="listSupportPageRootDom">
		<div class="support_left">
			<title-tip title="SUPPORT"></title-tip>
			<div class="support_left_title">
				<div class="support_left_title_text">{{type}}</div>
			</div>
		</div>
		<div class="support_right">
			<title-tip :title="type" long></title-tip>
			<div class="support_right_tip">
				{{describes}}
			</div>
			<div class="support_right_grid">
				<div class="support_right_grid_item" v-for="(item, index) in list" :key="index" @click="goToList(item)">
					<!-- <img :src="item.picture" class="support_right_grid_item_img"> -->
					<div class="support_right_grid_item_content">
						<div class="support_right_grid_item_title">{{item.name}}</div>
						<div class="support_right_grid_item_text">{{item.introduction}}</div>
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
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/support";
	var _this;
	export default {
		name: 'listSupport',
		data() {
			return {
				id: '',
				pageNum: 1,
				pageSize: 6,
				total: 0,
				list: [],
				type: '',
				describes: ''
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.id = val.query.id || '';
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
			this.id = this.$route.query.id || '';
			this.getList();
			this.getTypeDetails();
		},
		methods: {
			async getList() {
				let { data, count } = await api.getPage({
					limit: this.pageSize,
					offset: this.pageNum,
					type: this.id
				});
				this.list = data;
				this.total = +count || 0;
			},
			async getTypeDetails() {
				let { data } = await api.getTypeDetails({
					id: this.id
				});
				this.type = data.type;
				this.describes = data.describes;
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
			// 去列表
			goToList(item) {
				this.$router.push({
					path: '/support/detail',
					query: {
						id: item.id,
						type: this.type
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.listSupportPageRootDom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		.support_left {
			width: 200px;
			margin-right: 100px;
			flex: none;
			.support_left_title {
				width: 100%;
				height: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #f2f2f2;
				.support_left_title_text {
					font-weight: 700;
					font-style: normal;
					font-size: 16px;
					text-align: center;
				}
			}
		}
		.support_right {
			flex: 1;
			.support_right_tip{
				font-family: '微软雅黑';
				font-weight: 400;
				font-style: normal;
				color: #1E1E1E;
				font-size: 14px;
				.support_right_tip_jump{
					font-weight: 700;
					color: #60bff3;
					cursor: pointer;
				}
			}
			.support_right_grid {
				display: grid;
				margin: 40px 0;
				grid-template-columns: repeat(1, 900px);
				grid-gap: 20px;
				.support_right_grid_item {
					height: 160px;
					padding: 20px;
					border: 1px solid #60bff3;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					align-items: stretch;
					cursor: pointer;
					.support_right_grid_item_img {
						width: 118px;
						height: 118px;
						display: block;
						margin-right: 20px;
						flex: none;
					}
					.support_right_grid_item_content{
						flex: 1;
						.support_right_grid_item_title {
							font-family: '微软雅黑 Bold', '微软雅黑';
							font-weight: 700;
							font-style: normal;
							font-size: 18px;
							color: #60BFF3;
							margin-bottom: 10px;
						}
						.support_right_grid_item_text {
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
		}
	}
</style>

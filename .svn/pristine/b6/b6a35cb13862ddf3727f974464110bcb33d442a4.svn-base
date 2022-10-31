<template>
	<div class="COAsChildResourcesPageRootDom">
		<title-tip title="COA" long></title-tip>
		<div class="COAs_wrap">
			<div class="COAs_content">
				<div class="COAs_title">Search</div>
				<div class="COAs_search">
					<div class="COAs_search_title">Lot#：</div>
					<input type="text" v-model="name" class="COAs_search_input" />
					<div class="COAs_search_btn" @click="getSearch">Search</div>
				</div>
				<div class="COAs_search_item" v-for="(item, index) in searchList" :key="index" @click="goToDownload(item)">
					<img src="@/assets/images/PDF.png" class="COAs_search_item_img">
					<span>{{item.name}}</span>
				</div>
			</div>
			<div class="COAs_content">
				<div class="COAs_title">All COA</div>
				<div class="COAs_class_list">
					<div class="COAs_class_item" v-for="(item, index) in yearList" :key="index">
						<div class="COAs_class_item_title" @click="selectYear(item)">
							<div class="COAs_class_item_title_text">{{item}}</div>
						</div>
						<div class="COAs_class_item_child" v-if="year == item">
							<template v-for="(ele, ek) in listOfYear">
								<div class="COAs_class_item_child_item">
									<div class="COAs_class_item_child_item_title">{{ek}}</div>
								</div>
								<div class="COAs_class_item_child_item" @click="goToDownload(fItem)" v-for="(fItem, fIndex) in ele" :key="fIndex">
									<div class="COAs_class_item_child_item_text">{{fItem.name}}</div>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>
	
<script>
	import * as api from "@/api/resources";
	import titleTip from '@/components/titleTip';
	var _this;
	export default {
		name: 'COAsResources',
		data() {
			return {
				name: '',
				yearList: [],
				year: '',
				listOfYear: [],
				searchList: []
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.getYear();
		},
		methods: {
			// 获取全部年份
			async getYear() {
				let { data } = await api.getYear({});
				this.yearList = data;
			},
			// 搜索
			async getSearch() {
				let { data } = await api.getAllCOAs({
					name: this.name
				});
				this.searchList = data;
				if(this.searchList.length == 0) {
					this.$message.warning(this.$t("tip.noData"));
				}
			},
			// 选择年份
			async selectYear(item) {
				if(this.year != item) {
					this.year = item;
					let { data } = await api.getCOAs({
						year: this.year
					});
					this.listOfYear = data;
					if(this.listOfYear.length == 0) {
						this.$message.warning(this.$t("tip.noData"));
					}
				}
			},
			// 下载
			goToDownload(item) {
				window.open(item.file);
			}
		}
	}
</script>

<style lang="scss">
	.COAsChildResourcesPageRootDom {
		width: 900px;
		height: 100%;
		margin-left: auto;
		.COAs_wrap {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			.COAs_content{
				flex: 1;
				.COAs_title {
					font-family: '思源黑体 CN Bold', '思源黑体 CN';
					font-weight: 700;
					font-style: normal;
					font-size: 18px;
					color: #1E1E1E;
					margin-bottom: 20px;
				}
				.COAs_search {
					display: flex;
					flex-direction: row;
					align-items: center;
					.COAs_search_title {
						font-family: '思源黑体 CN Bold', '思源黑体 CN';
						font-weight: 700;
						font-style: normal;
						font-size: 16px;
						color: #60BFF3;
					}
					.COAs_search_input {
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
					.COAs_search_btn {
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
				.COAs_search_item{
					margin: 15px 0;
					font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
					font-weight: 700;
					font-style: normal;
					color: #60BFF3;
					cursor: pointer;
					.COAs_search_item_img{
						width: 20px;
						height: 20px;
						margin-right: 10px;
					}
					&:hover {
						text-decoration: underline;
					}
				}
				.COAs_class_list {
					.COAs_class_item {
						width: 100%;
						.COAs_class_item_title {
							padding: 15px 20px;
							background: #f2f2f2;
							cursor: pointer;
							.COAs_class_item_title_text {
								font-weight: 700;
								font-style: normal;
								font-size: 16px;
							}
						}
						.COAs_class_item_child {
							width: 100%;
							.COAs_class_item_child_item {
								padding: 15px 20px;
								cursor: pointer;
								.COAs_class_item_child_item_title {
									font-family: '思源黑体 CN';
									font-weight: 400;
									font-style: normal;
									font-size: 16px;
									color: #333333;
								}
								.COAs_class_item_child_item_text {
									font-family: '思源黑体 CN';
									font-weight: 700;
									font-style: normal;
									font-size: 16px;
									color: #60bff3;
								}
							}
							.COAs_class_item_child_item:hover {
								.COAs_class_item_child_item_text {
									text-decoration: underline;
								}
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="indexProductPageRootDom">
		<div class="product_class">
			<title-tip title="PRODUCT CONTENT"></title-tip>
			<div class="product_class_list">
				<div class="product_class_item" v-for="(item, index) in productList" :key="index">
					<div class="product_class_item_title" @click="selectClass(item.id)">
						<div class="product_class_item_title_text">{{item.classify}}</div>
					</div>
					<div class="product_class_item_child" v-if="classifySelelcted == item.id">
						<div :class="['product_class_item_child_item', secondJsonSelected == ele.id ? 'product_class_item_child_item_selected' : 'product_class_item_child_item_unselected']"
						v-for="(ele, eIndex) in item.secondJson" :key="eIndex"
						@click="selectSecond(ele.id, item.id, ele.classify)">
							<div class="product_class_item_child_item_text">{{ele.classify}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="product_list">
			<router-view />
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import { mapGetters } from 'vuex';
	var _this;
	export default {
		name: 'product',
		data() {
			return {
				classifySelelcted: 0,
				secondJsonSelected: 0
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      if(_this.$route.path == '/product/index/list') {
		      	_this.classifySelelcted = _this.$route.query.fatherId || 0;
		      	_this.secondJsonSelected = _this.$route.query.typeId || 0;
		      }
		    }
		  }
		},
		computed: {
			...mapGetters(['productList']),
		},
		components: {
			titleTip
		},
		created() {
			_this = this;
		},
		mounted() {
			if(this.$route.path == '/product/index/list') {
				this.classifySelelcted = this.$route.query.fatherId || 0;
				this.secondJsonSelected = this.$route.query.typeId || 0;
			}
		},
		methods: {
			selectClass(id) {
				if(this.classifySelelcted != id) {
					this.classifySelelcted = id;
				}
			},
			selectSecond(id, fatherId, classify) {
				if(this.secondJsonSelected != id) {
					this.secondJsonSelected = id;
					this.$router.push({
						path: '/product/index/list',
						query: {
							typeId: id,
							fatherId,
							classify
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.indexProductPageRootDom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		height: max(780px, calc(100vh - 80px));
		.product_class {
			width: 200px;
			margin-right: 40px;
			flex: none;
			height: 100%;
			.product_class_list {
				height: calc(100% - 70px);
				overflow-y: auto;
				.product_class_item {
					width: 100%;
					// margin-bottom: 3px;
					.product_class_item_title {
						width: 100%;
						height: 50px;
						display: flex;
						justify-content: center;
						align-items: center;
						background: #f2f2f2;
						cursor: pointer;
						.product_class_item_title_text {
							font-weight: 700;
							font-style: normal;
							font-size: 16px;
							text-align: center;
						}
					}
					.product_class_item_child {
						width: 100%;
						.product_class_item_child_item {
							height: 40px;
							display: flex;
							justify-content: center;
							align-items: center;
							cursor: pointer;
							.product_class_item_child_item_text {
								text-align: center;
								font-size: 14px;
								line-height: 19px;
							}
						}
						.product_class_item_child_item:hover {
							background: #60bff3;
							.product_class_item_child_item_text {
								color: #fff;
							}
						}
						.product_class_item_child_item_selected {
							background: #60bff3;
							.product_class_item_child_item_text {
								color: #fff;
							}
						}
						.product_class_item_child_item_unselected {
							background: rgba($color: #60bff3, $alpha: 0.3);
							.product_class_item_child_item_text {
								color: #002D52;
							}
						}
					}
				}
			}
			.product_class_list::-webkit-scrollbar {
				/*滚动条整体样式*/
				width: 10px;
				/*高宽分别对应横竖滚动条的尺寸*/
				height: 1px;
			}
			.product_class_list::-webkit-scrollbar-thumb {
				/*滚动条里面小方块*/
				border-radius: 10px;
				background-color: skyblue;
				background-image: -webkit-linear-gradient(45deg,
						rgba(255, 255, 255, 0.2) 25%,
						transparent 25%,
						transparent 50%,
						rgba(255, 255, 255, 0.2) 50%,
						rgba(255, 255, 255, 0.2) 75%,
						transparent 75%,
						transparent);
			}
			.product_class_list::-webkit-scrollbar-track {
				/*滚动条里面轨道*/
				box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
				background: #ededed;
				border-radius: 10px;
			}
		}
		.product_list {
			flex: 1;
			height: 100%;
			overflow-y: auto;
		}
		.product_list::-webkit-scrollbar {
			/*滚动条整体样式*/
			width: 10px;
			/*高宽分别对应横竖滚动条的尺寸*/
			height: 1px;
		}
		.product_list::-webkit-scrollbar-thumb {
			/*滚动条里面小方块*/
			border-radius: 10px;
			background-color: skyblue;
			background-image: -webkit-linear-gradient(45deg,
					rgba(255, 255, 255, 0.2) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, 0.2) 50%,
					rgba(255, 255, 255, 0.2) 75%,
					transparent 75%,
					transparent);
		}
		.product_list::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
			background: #ededed;
			border-radius: 10px;
		}
	}
</style>

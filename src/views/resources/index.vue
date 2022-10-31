<template>
	<div class="indexResourcesPageRootDom">
		<div class="resources_class">
			<title-tip title="RESOURCES"></title-tip>
			<div class="resources_class_list">
				<div class="resources_class_item" v-for="(item, index) in resourcesList" :key="index">
					<div class="resources_class_item_title" @click="selectClass(item)">
						<div class="resources_class_item_title_text">{{item.type}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="resources_list">
			<router-view />
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import { mapGetters } from 'vuex';
	var _this;
	export default {
		name: 'resources',
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters(['resourcesList']),
		},
		components: {
			titleTip
		},
		mounted() {
			
		},
		methods: {
			selectClass(item) {
				if(item.id == 'COAs') {
					this.$router.push({
						path: '/resources/index/COAs',
					});
				}else{
					this.$router.push({
						path: '/resources/index/detail',
						query: {
							type: item.type,
							id: item.id,
						}
					});
				}
			},
		}
	}
</script>

<style lang="scss">
	.indexResourcesPageRootDom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		height: max(780px, calc(100vh - 80px));
		.resources_class {
			width: 200px;
			margin-right: 40px;
			flex: none;
			height: 100%;
			.resources_class_list {
				height: calc(100% - 70px);
				overflow-y: auto;
				.resources_class_item {
					width: 100%;
					.resources_class_item_title {
						width: 100%;
						height: 50px;
						display: flex;
						justify-content: center;
						align-items: center;
						background: #f2f2f2;
						cursor: pointer;
						.resources_class_item_title_text {
							font-weight: 700;
							font-style: normal;
							font-size: 16px;
							text-align: center;
						}
					}
				}
			}
			.resources_class_list::-webkit-scrollbar {
				/*滚动条整体样式*/
				width: 10px;
				/*高宽分别对应横竖滚动条的尺寸*/
				height: 1px;
			}
			.resources_class_list::-webkit-scrollbar-thumb {
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
			.resources_class_list::-webkit-scrollbar-track {
				/*滚动条里面轨道*/
				box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
				background: #ededed;
				border-radius: 10px;
			}
		}
		.resources_list {
			flex: 1;
			height: 100%;
			overflow-y: auto;
		}
		.resources_list::-webkit-scrollbar {
			/*滚动条整体样式*/
			width: 10px;
			/*高宽分别对应横竖滚动条的尺寸*/
			height: 1px;
		}
		.resources_list::-webkit-scrollbar-thumb {
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
		.resources_list::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
			background: #ededed;
			border-radius: 10px;
		}
	}
</style>

<template>
	<div class="detailChildProductPageRootDom">
		<div class="detail_nav">
			<div class="detail_nav_blue" @click="goToHome">首页</div>
			<div class="detail_nav_between">></div>
			<div class="detail_nav_blue" @click="goToList">{{navName}}</div>
			<div class="detail_nav_between">></div>
			<div class="detail_nav_black">{{name}}</div>
		</div>
		<div class="detail_title">
			<div class="detail_title_main">{{navName}}</div>
			<div class="detail_title_list">
				<template v-for="(ival, ikey, index) in subheading">
					<div class="detail_title_list_item" @click="goToScroll(offsetTopList[index])">{{ikey}}</div>
				</template>
        <div class="detail_title_list_item" @click="goToScroll(offsetTopList[offsetTopList.length - 1])" v-if="qualityImageText != ''">Picture information of protein verification</div>
			</div>
		</div>
		<div class="detail_main">
			<div class="detail_main_left" v-if="picture.length > 0">
				<div class="detail_main_left_title" @click="goToScroll(0)">{{name}}</div>
				<el-carousel :interval="5000" arrow="always" class="detail_main_left_carousel" height="220px">
					<el-carousel-item v-for="(item, index) in picture" :key="index">
						<img :src="item" class="detail_main_left_carousel_img" >
					</el-carousel-item>
				</el-carousel>
				<div class="detail_main_left_tip">{{name}}</div>
			</div>
			<div class="detail_main_right">
				<div class="detail_main_scroll" id="detailScroll" :scrollTop="scrollTop">
					<div class="detail_main_name">{{name}}</div>
					<template v-for="(val, vkey) in subheading">
						<div class="detail_main_title">{{vkey}}</div>
						<template v-for="(ele, eIndex) in val">
							<div class="detail_main_list" v-for="(eVal, ekey) in ele">
								<div class="detail_main_list_label">{{ekey}}</div>
								<div class="detail_main_list_content">{{eVal}}</div>
							</div>
						</template>
					</template>
          <template v-if="qualityImageText != ''">
            <div class="detail_main_title">Picture information of protein verification</div>
            <div v-html="qualityImageText"></div>
          </template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as api from "@/api/product";
	var _this;
	export default {
		name: 'detailProduct',
		data() {
			return {
				id: 0,
				navName: '',
				url: '',
				name: '',
				picture: [],
				subheading: [],
				offsetTopList: [],
				scrollTop: 0,
        qualityImageText: ''
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.id = _this.$route.query.id || 0;
		      _this.getDetail();
		    }
		  }
		},
		created() {
			_this = this;
		},
		mounted() {
			this.navName = this.$route.query.name || '';
			this.id = this.$route.query.id || '';
			this.url = decodeURIComponent(this.$route.query.url || '');
			this.getDetail();
		},
		methods: {
			async getDetail() {
				let { data } = await api.getDetails({
					id: this.id,
				});
				this.name = data.name;
				let picture = data.picture || '';
				this.picture = picture == '' ? [] : picture.split(',');
				let subheading = JSON.parse(data.subheading || '[]');
				this.subheading = {
					'essential information': [
						{ 'Catalog Number' : data.frontProductNo },
						{ 'Product Name' : data.name },
						{ 'Size' : data.specification },
						{ 'Price（CNY）' : data.price }
					],
					...subheading
				};
        this.qualityImageText = data.qualityImageText || '';
				setTimeout(() => {
					const list = document.querySelectorAll('.detail_main_title');
					this.offsetTopList = [];
					for(let i=0;i<list.length;i++) {
						this.offsetTopList.push(list[i].offsetTop);
					}
				}, 100);
			},
			// 返回首页
			goToHome() {
				this.$router.replace({
					path: '/dashboard'
				});
			},
			// 返回类目
			goToList() {
				this.$router.replace({
					path: `/product/index/${this.url}`,
				});
			},
			// 滚动
			goToScroll(e) {
				this.scrollTop = e;
				document.querySelectorAll('#detailScroll')[0].scrollTop = e;
			}
		}
	}
</script>

<style lang="scss">
	.detailChildProductPageRootDom {
		width: 965px;
		height: 100%;
		margin-left: auto;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		.detail_nav {
			flex: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			.detail_nav_blue {
				font-family: '微软雅黑 Bold', '微软雅黑';
				font-weight: 700;
				font-style: normal;
				color: #60BFF3;
				font-size: 13px;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			.detail_nav_between {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				margin: 0 5px;
			}
			.detail_nav_black {
				font-family: '微软雅黑 Regular', '微软雅黑';
				font-weight: 400;
				font-size: 13px;
				color: #333333;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.detail_title {
			flex: none;
			margin: 5px 0 20px;
			border-bottom: 1px solid #f1f1f1;
			display: flex;
			flex-direction: row;
			align-items: center;
			.detail_title_main {
				flex: none;
				height: 30px;
				padding: 0 5px;
				background: #60bff3;
				font-weight: 700;
				font-size: 18px;
				color: #FFFFFF;
				line-height: 30px;
				margin-right: 5px;
			}
			.detail_title_list {
				flex: 1;
				white-space: nowrap;
				.detail_title_list_item {
					margin: 0 5px;
					height: 30px;
					font-weight: 400;
					font-size: 16px;
					color: #999;
					line-height: 30px;
					cursor: pointer;
					display: inline-block;
					&:hover {
						font-weight: 700;
						color: #60bff3;
					}
				}
			}
			.detail_title_list::-webkit-scrollbar {
				/*滚动条整体样式*/
				width: 5px;
				/*高宽分别对应横竖滚动条的尺寸*/
				height: 1px;
			}
			.detail_title_list::-webkit-scrollbar-thumb {
				/*滚动条里面小方块*/
				border-radius: 5px;
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
			.detail_title_list::-webkit-scrollbar-track {
				/*滚动条里面轨道*/
				box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
				background: #ededed;
				border-radius: 5px;
			}
		}
		.detail_main {
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			.detail_main_left {
				flex: none;
				width: 405px;
				display: flex;
				flex-direction: column;
				align-items: center;
				.detail_main_left_title {
					margin: 25px 0;
					font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
					font-weight: 700;
					font-style: normal;
					font-size: 18px;
					color: #60BFF3;
					text-align: center;
					cursor: pointer;
					&:hover {
						text-decoration: underline;
						color: #999;
					}
				}
				.detail_main_left_carousel {
					width: 285px;
					height: 220px;
					.detail_main_left_carousel_img {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
				.detail_main_left_tip {
					font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
					font-weight: 700;
					font-style: normal;
					font-size: 16px;
					color: #001322;
					text-align: center;
					margin-top: 30px;
				}
			}
			.detail_main_right {
				flex: 1;
				align-self: stretch;
				position: relative;
				.detail_main_scroll {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					overflow-y: auto;
					display: flex;
					flex-direction: column;
					align-items: stretch;
					.detail_main_name {
						font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
						font-weight: 700;
						font-style: normal;
						font-size: 18px;
						color: #000000;
						margin-bottom: 15px;
					}
					.detail_main_title {
						align-self: flex-start;
						font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
						font-weight: 700;
						font-style: normal;
						font-size: 18px;
						color: #60BFF3;
						padding: 10px 0;
						border-bottom: 4px solid #60BFF3;
					}
					.detail_main_list {
						display: flex;
						align-items: flex-start;
						margin: 15px 0;
						.detail_main_list_label {
							width: 180px;
							margin-right: 10px;
							flex: none;
							font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
							font-weight: 700;
							font-style: normal;
							font-size: 14px;
						}
						.detail_main_list_content {
							flex: 1;
							font-family: '思源黑体 CN';
							font-weight: 400;
							font-style: normal;
							font-size: 14px;
							color: #666666;
						}
					}
				}
				.detail_main_scroll::-webkit-scrollbar {
					/*滚动条整体样式*/
					width: 10px;
					/*高宽分别对应横竖滚动条的尺寸*/
					height: 1px;
				}
				.detail_main_scroll::-webkit-scrollbar-thumb {
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
				.detail_main_scroll::-webkit-scrollbar-track {
					/*滚动条里面轨道*/
					box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
					background: #ededed;
					border-radius: 10px;
				}
			}
		}
	}
</style>

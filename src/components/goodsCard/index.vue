<template>
	<div class="goodsCardComponentRootDom">
		<div class="goods_pic" @click="goToDetail">
			<img :src="item.picture | getImg" class="goods_pic_image" >
		</div>
		<div class="goods_title" @click="goToDetail">
			{{item.name}}
		</div>
		<div class="goods_price" @click="goToDetail">￥{{item.price}}</div>
		<div class="goods_bottom">
			<div class="goods_bottom_txt" @click="goToDetail">{{item.frontProductNo}}</div>
			<div class="goods_bottom_txt" @click="goToDetail">Size：{{item.specification}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => {
					return {};
				}
			},
			from: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		filters: {
			getImg(picture) {
				let arr = (picture || '').split(',');
				return arr[0] || '';
			}
		},
		methods: {
			goToDetail() {
				this.$router.push({
					path: `/product/index/detail`,
					query: {
						id: this.item.id,
						url: encodeURIComponent(this.from.url),
						name: this.from.name
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsCardComponentRootDom {
		background-color: #fff;
		height: 340px;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		.goods_pic {
			width: 100%;
			height: 220px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			overflow: hidden;
			.goods_pic_image {
				width: 100%;
				height: 100%;
				display: block;
				transition: all 1s;
			}
			&:hover {
				.goods_pic_image {
					transform: scale(1.5);
				}
			}
		}
		.goods_title{
			height: 40px;
			font-weight: 700;
			color: #001322;
			font-size: 14px;
			cursor: pointer;
			margin: 10px 0;
			line-height: 20px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			&:hover {
				text-decoration: underline;
			}
		}
		.goods_price {
			font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
			font-weight: 700;
			font-style: normal;
			font-size: 16px;
			color: #60BFF3;
			cursor: pointer;
			line-height: 20px;
			&:hover {
				text-decoration: underline;
			}
		}
		.goods_bottom {
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
			.goods_bottom_txt {
				color: #666666;
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 14px;
				line-height: 25px;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>

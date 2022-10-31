<template>
	<div class="tltleTipComponentRootDom">
		<div :class="['title_tip_wrap', { 'title_tip_border': long }]">
			<div>
				<slot>
					<div class="title_tip_main">{{title}}</div>
				</slot>
			</div>
			<div class="title_tip_btn" v-if="long && btn.length > 0" @click="onClick">{{btn}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			long: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			},
			btn: {
				type: String,
				default: ''
			}
		},
		methods: {
			// 点击事件
			onClick() {
				this.$emit('onClicked');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tltleTipComponentRootDom {
		padding: 20px 0;
		.title_tip_wrap{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.title_tip_main {
				width: 200px;
				height: 30px;
				padding-left: 10px;
				background: #60bff3;
				font-weight: 700;
				font-size: 18px;
				color: #FFFFFF;
				line-height: 30px;
				box-sizing: border-box;
			}
			.title_tip_btn {
				font-size: 12px;
				color: #808080;
				font-weight: 400;
				cursor: pointer;
				&:hover {
					color: #0060AD;
					font-weight: 700;
				}
			}
		}
		.title_tip_border{
			border-bottom: 1px solid #f1f1f1;
		}
	}
</style>

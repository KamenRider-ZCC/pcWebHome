<template>
	<div class="detailSupportPageRootDom">
		<div class="support_left">
			<title-tip :title="type"></title-tip>
			<div class="support_left_title">
				<div class="support_left_title_text">{{name}}</div>
			</div>
		</div>
		<div class="support_right">
			<title-tip :title="name" long></title-tip>
			<div v-html="details"></div>
		</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import * as api from "@/api/support";
	var _this;
	export default {
		name: 'detailSupport',
		data() {
			return {
				id: '',
				type: '',
				name: '',
				details: ''
			}
		},
		watch: {
		  $route: {
		    handler: (val, oldVal) => {
		      _this.id = val.query.id || '';
					_this.type = val.query.type || '';
					_this.getDetail();
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
			this.type = this.$route.query.type || '';
			this.getDetail();
		},
		methods: {
			async getDetail() {
				let { data } = await api.getDetails({
					id: this.id
				});
				this.name = data.name;
				this.details = data.details;
			},
		}
	}
</script>

<style lang="scss">
	.detailSupportPageRootDom {
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
		}
	}
</style>

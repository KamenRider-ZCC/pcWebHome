<template>
	<div class="indexSupportPageRootDom">
		<div class="support_left">
			<title-tip title="SUBSCRIBE"></title-tip>
			<div class="support_left_box">
				<div class="support_left_box_big">SUBSCRIBE</div>
				<div class="support_left_box_small">to our newletter</div>
				<div class="support_left_box_btn" @click="subscribe">SIGN UP NOW</div>
			</div>
		</div>
		<div class="support_right">
			<title-tip title="SUPPORT" long></title-tip>
			<div class="support_right_tip">
				It's not just about the product you purchase, it is also about the support. We are here to help. If you can't find what you are looking
				
				for, please <span class="support_right_tip_jump" @click="goToAu">CONTACT US</span>.
			</div>
			<div class="support_right_grid">
				<div class="support_right_grid_item" v-for="(item, index) in list" :key="index" @click="goToList(item)">
					<img :src="item.picture" class="support_right_grid_item_img">
					<div class="support_right_grid_item_content">
						<div class="support_right_grid_item_title">{{item.type}}</div>
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
		
		<el-dialog title=" Sign up to our newsletter" :visible.sync="dialogFormVisible">
		  <div class="subscribe_box">
				<el-input v-model="userName" placeholder="  Your name  " class="subscribe_input"></el-input>
				<el-input v-model="phone" placeholder="  Your telephone  " class="subscribe_input"></el-input>
				<el-input v-model="email" placeholder="  Your email  " class="subscribe_input"></el-input>
				<div class="subscribe_txt">
					<p>At BIOHUB, we have exciting offers and news about our products and services that we want to share with you. You can select if you would like to be contacted about specific topics below. We will always treat your data with care. We never share your details with any other companies.</p>
				</div>
				<div class="subscribe_txt">
					<p>If you change your mind later, you can stop receiving our updates at any time by changing your contact preferences in your account, or letting us know by email or phone.</p>
				</div>
				<el-checkbox-group v-model="checkList" class="subscribe_txt">
					<p>
						<el-checkbox label="Antibodies"></el-checkbox>
					</p>
					<p>
						<el-checkbox label="ELISA and CLIA kits"></el-checkbox>
					</p>
					<p>
						<el-checkbox label="Proteins and Peptides"></el-checkbox>
					</p>
					<p>
						<el-checkbox label="Equipment"></el-checkbox>
					</p>
					<p>
						<el-checkbox label="Reagents and Other Tools for Research"></el-checkbox>
					</p>
				</el-checkbox-group>
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogCancel">Cancel</el-button>
		    <el-button type="primary" @click="dialogConfirm">Subscribe</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import Validator from "@/utils/validator";
	import * as api from "@/api/support";
	export default {
		name: 'support',
		data() {
			return {
				dialogFormVisible: false,
				userName: '',
				phone: '',
				email: '',
				checkList: [],
				pageNum: 1,
				pageSize: 6,
				total: 0,
				list: []
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.getList();
		},
		methods: {
			subscribe() {
				this.dialogFormVisible = true;
			},
			// 取消提交
			dialogCancel() {
				this.dialogFormVisible = false;
			},
			async dialogConfirm() {
				let validator = new Validator();
				validator.add(this.userName, ["isNonEmpty", this.$t("subscribe.userName")]);
				validator.add(this.phone, ["isNonEmpty", this.$t("subscribe.phone")]);
				validator.add(this.email, ["isNonEmpty", this.$t("subscribe.email")]);
				validator.addRule("isSelected", function(val, msg) {
					return val.length == 0 ? msg : void 0;
				});
				validator.add(this.checkList, ["isSelected", this.$t("subscribe.option")]);
				let msg = validator.start();
				if (msg) {
				  this.$message.warning(msg);
				} else {
					await api.subscription({
						userName: this.userName,
						phone: this.phone,
						email: this.email,
						choice: this.checkList.join(',')
					});
					this.$message.success('success');
					this.dialogCancel();
				}
			},
			goToAu() {
				this.$router.push({ path: `/contact/index` });
			},
			async getList() {
				let { data, count } = await api.getTypePage({
					limit: this.pageSize,
					offset: this.pageNum,
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
			// 去列表
			goToList(item) {
				this.$router.push({
					path: '/support/list',
					query: {
						id: item.id,
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.indexSupportPageRootDom {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		.support_left {
			width: 200px;
			margin-right: 100px;
			flex: none;
			.support_left_box{
				width: 200px;
				height: 200px;
				background-color: rgba(96, 191, 243, 0.498039215686275);
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.support_left_box_big {
					font-family: '思源黑体 CN Bold', '思源黑体 CN';
					font-weight: 700;
					font-style: normal;
					font-size: 28px;
					color: #FFFFFF;
				}
				.support_left_box_small {
					font-family: '微软雅黑';
					font-weight: 400;
					font-style: normal;
					color: #FFFFFF;
					margin: 20px 0 30px;
				}
				.support_left_box_btn {
					width: 140px;
					height: 40px;
					background-color: #60bff3;
					border-radius: 5px;
					text-align: center;
					line-height: 40px;
					font-family: '微软雅黑 Bold', '微软雅黑';
					font-weight: 700;
					font-style: normal;
					font-size: 14px;
					color: #fff;
					cursor: pointer;
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
				grid-template-columns: repeat(2, 440px);
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
		.subscribe_box {
			.subscribe_input {
				text-align: center;
				margin-bottom: 25px;
			}
			.subscribe_txt {
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 13px;
				letter-spacing: normal;
				color: #333333;
				margin-bottom: 20px;
			}
		}
	}
</style>

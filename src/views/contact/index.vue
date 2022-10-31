<template>
	<div class="contactUsPageRootDom">
		<title-tip title="CONTACT US" long></title-tip>
		<div class="contact_title">BIOHUB INTERNATIONAL TRADE CO LTD</div>
		<div class="contact_detail">
			<div class="contact_detail_item" style="width: 900px;">Address: {{info.address}}</div>
			<div class="contact_detail_item">Tel: {{info.phone}}</div>
			<div class="contact_detail_item">Fax: {{info.fax}}</div>
			<div class="contact_detail_item">Mail: {{info.email}}</div>
			<div class="contact_detail_item">Website: {{info.website}}</div>
		</div>
		<baidu-map :center="center" :zoom="zoom" @ready="handler" class="contact_map" v-if="info.id"></baidu-map>
		<div class="contact_formtitle">Please leave you suggestion or opinion and we will reply you as soon as possible. Thank you!</div>
		<div class="contact_form">
			<el-input
				placeholder="Name"
				suffix-icon="el-icon-user-solid"
				v-model="userName"
				class="contact_form_input">
			</el-input>
			<el-input
				placeholder="Mobile"
				suffix-icon="el-icon-phone"
				v-model="phone"
				class="contact_form_input">
			</el-input>
			<el-input
				placeholder="Email"
				suffix-icon="el-icon-s-promotion"
				v-model="email"
				class="contact_form_input">
			</el-input>
			<el-input
				placeholder="Company/Organization"
				suffix-icon="el-icon-office-building"
				v-model="address"
				class="contact_form_input">
			</el-input>
			<el-input
				placeholder="The way you know us"
				v-model="aosika"
				class="contact_form_input">
			</el-input>
			<el-input
				placeholder=" Consultation Content"
				v-model="advisory"
				class="contact_form_input">
			</el-input>
			<el-input
			  type="textarea"
			  placeholder="Message Content"
			  v-model="leave"
				class="contact_form_textarea">
			</el-input>
		</div>
		<div class="contact_submit" @click="submit">Submission</div>
	</div>
</template>

<script>
	import titleTip from '@/components/titleTip';
	import { getPage } from "@/api/about";
	import * as api from "@/api/contact";
	import Validator from "@/utils/validator";
	export default {
		name: 'contact',
		data() {
			return {
				info: {},
				center: {lng: 0, lat: 0},
				zoom: 3,
				userName: '',
				phone: '',
				email: '',
				address: '',
				aosika: '',
				advisory: '',
				leave: ''
			}
		},
		components: {
			titleTip
		},
		mounted() {
			this.getDetail();
		},
		methods: {
			async getDetail() {
				let { data } = await getPage({});
				this.info = data;
			},
			handler({BMap, map}) {
				this.center.lng = this.info.longitude;
				this.center.lat = this.info.latitude;
				this.zoom = 15;
			},
			async submit() {
				let validator = new Validator();
				validator.add(this.userName, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.phone, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.email, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.address, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.aosika, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.advisory, ["isNonEmpty", this.$t("contact.tip")]);
				validator.add(this.leave, ["isNonEmpty", this.$t("contact.tip")]);
				let msg = validator.start();
				if (msg) {
				  this.$message.warning(msg);
				} else {
					await api.feedback({
						userName: this.userName,
						phone: this.phone,
						email: this.email,
						company: this.address,
						aosika: this.aosika,
						advisory: this.advisory,
						leave: this.leave
					});
					this.$message.success('success');
				}
			}
		}
	}
</script>

<style lang="scss">
	.contactUsPageRootDom {
		.contact_title{
			font-family: '微软雅黑 Bold', '微软雅黑';
			font-weight: 700;
			font-style: normal;
			font-size: 16px;
			color: #000000;
			margin-bottom: 40px;
		}
		.contact_detail{
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 10px;
			.contact_detail_item {
				width: 450px;
				font-family: '思源黑体 CN';
				font-weight: 400;
				font-style: normal;
				font-size: 13px;
				letter-spacing: normal;
				color: #333333;
				margin-bottom: 10px;
			}
		}
		.contact_map {
			width: 100%;
			height: 250px;
		}
		.contact_formtitle {
			font-size: 16px;
			color: #60BFF3;
			text-align: center;
			margin: 10px 0 15px;
		}
		.contact_form {
			margin-bottom: 5px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.contact_form_input {
				width: 390px;
				margin-bottom: 15px;
			}
			.contact_form_textarea {
				width: 100%;
				margin-bottom: 15px;
			}
		}
		.contact_submit {
			width: 200px;
			height: 44px;
			border-radius: 4px;
			margin: 0 auto 40px;
			background: #60BFF3;
			font-size: 14px;
			color: #FFFFFF;
			font-weight: 400;
			text-align: center;
			line-height: 44px;
			cursor: pointer;
		}
	}
</style>

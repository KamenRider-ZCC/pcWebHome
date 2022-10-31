<template>
  <div class="footer-wrap">
    <div class="footer_main">
      <el-row type="flex" style="width: 1200px;flex-wrap: wrap">
        <el-col :span="8" style="margin-top: 28px">
          <p class="foot_title" style="margin-bottom: 18px;">联系我们</p>
          <p class="foot_text">邮政编码：214100</p>
          <p class="foot_text">联系电话：0510-81891629</p>
          <p class="foot_text">公司网址：http://www.bjdv.com</p>
          <p class="foot_text">电子邮箱：321546@126.com</p>
          <p class="foot_text">联系地址：无锡市惠山区智慧路18号O-park大厦2层</p>
        </el-col>

        <el-col :span="16" style="margin-top: 28px">
          <p class="foot_title" style="margin-bottom: 18px">友情链接</p>
          <span class="link">中华人民共和国工业和信息化部</span>
          <span class="link">威海市高技术产业开发区管委会</span>
          <span class="link">山东省经济和信息化委员会</span>
          <span class="link">威海市经济和信息化委员会</span>
          <span class="link">中国威海市政府</span>
          <span class="link">中国电子技术标准化研究院</span>
          <span class="link">中国机电设备招标中心</span>
          <span class="link">中国电子信息产业发展研究院</span>
          <span class="link">电子产品可靠性与环境试验研究所</span>
          <span class="link">电子科学技术情报研究所</span>

        </el-col>

        <el-col :span="24" style="text-align: center;margin-top: 36px">
          <p class="foot_text">Copyright 2008-2010 大唐融合物联科技无锡有限公司 京ICP备05042180号-1</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/home'
export default {
  name: 'PageFooter2',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    // 去网页
    goToWeb() {
      window.open('http://www.qfbio.com/')
    },
    // 返回首页
    goBackHome() {
      this.$router.push({ path: '/dashboard' })
    },
    // 跳转
    goToPath(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
	.footer-wrap{
		width: 100%;
    height: 396px;
		background: rgba(12, 14, 28, 1);
    .footer_main {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .foot_text {
        line-height: 28px;
        color: rgba(167, 167, 167, 1);
      }
      .foot_title {
        color: #fff;
        font-weight: bold;
        font-size: 18px;
      }
      .foot_line {
        padding: 12px 0;
        border-top: 1px solid rgba(151, 151, 151, 0.4);
        border-bottom: 1px solid rgba(151, 151, 151, 0.4);
      }
    }
	}
  .link{
    color: #a7a7a7;
    margin-right: 15px;
    line-height: 42px;
  }
</style>

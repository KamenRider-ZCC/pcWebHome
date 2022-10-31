<template>
  <div class="footer-wrap">
    <div class="footer_main">
      <el-row type="flex" style="width: 1200px;flex-wrap: wrap">
        <el-col :span="8">
          <img src="../../assets/images/foot_logo.png" style="margin-bottom: 18px">
          <p class="foot_text">邮政编码：214100</p>
          <p class="foot_text">公司网址：http://www.bjdv.com</p>
          <p class="foot_text">邮政编码：联系电话：0510-81891629</p>
          <p class="foot_text">联系地址：无锡市惠山区智慧路18号O-park大厦2层</p>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="6" style="text-align: center;margin-top: 28px">
              <p class="foot_title" style="margin-bottom: 18px">快速入口</p>
              <p class="foot_text foot_text2" @click="goGXPT">生态社区</p>
              <p class="foot_text foot_text2" @click="goMALL">工业Mall</p>
              <p class="foot_text foot_text2" @click="goKFZ">开发者</p>
              <p class="foot_text foot_text2" @click="goUs">关于我们</p>
            </el-col>
            <el-col :span="6" style="text-align: center;margin-top: 28px">
              <p class="foot_title" style="margin-bottom: 18px">应用服务</p>
              <p class="foot_text foot_text2" style="line-height: 38px"><a href="http://datangiot.cn:9005/#/login" target="_blank">IOT物联平台</a></p>
              <p class="foot_text foot_text2" style="line-height: 38px"><a href="http://103.36.192.87:10025/" target="_blank">企业上云平台</a></p>
              <p class="foot_text foot_text2" style="line-height: 38px"><a href="http://192.168.60.221:13005/" target="_blank">云MES平台</a></p>
            </el-col>
            <el-col :span="6" style="text-align: center;margin-top: 28px">
              <p class="foot_title" style="margin-bottom: 18px">新闻资讯</p>
              <p class="foot_text foot_text2" style="line-height: 38px" @click="goZCSD">政策速递</p>
              <p class="foot_text foot_text2" style="line-height: 38px" @click="goHYXW">行业新闻</p>
              <p class="foot_text foot_text2" style="line-height: 38px" @click="goHYBZ">行业标准</p>
            </el-col>
            <el-col :span="6" style="text-align: center;margin-top: 12px">
              <p class="foot_title" style="margin-bottom: 18px">微信公众号</p>
              <img src="../../assets/images/foot_QR.png" style="height: 120px;width: 120px">
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24" style="margin-top: 36px">
          <el-row type="flex" class="foot_line">
            <el-col :span="4">
              <p class="foot_title" style="line-height: 28px">友情链接</p>
            </el-col>
            <el-col :span="20" style="display: flex;justify-content: space-around">
              <p class="foot_text foot_text2"><a href="https://www.datang.com/" target="_blank">大唐电信</a></p>
              <p class="foot_text foot_text2"><a href="https://www.gohigh.com.cn/" target="_blank">大唐高鸿</a></p>
              <p class="foot_text foot_text2"><a href="http://www.hrtn.net/" target="_blank">湖北广电</a></p>
              <p class="foot_text foot_text2"><a href="http://www.jishimedia.com/" target="_blank">吉视传媒</a></p>
              <p class="foot_text foot_text2"><a href="https://new.siemens.com/cn/zh.html" target="_blank">西门子</a></p>
            </el-col>
          </el-row>
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
  name: 'PageFooter',
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
    },
    // 生态社区
    goGXPT() {
      this.$router.push({ path: '/supplyDemand' })
    },
    // 工业mail
    goMALL() {
      this.$router.push({ path: '/mall' })
    },
    // 开发者
    goKFZ() {
      this.$router.push({ path: '/devPlatform' })
    },
    // 关于我们
    goUs() {
      this.$router.push({ path: '/aboutUs' })
    },
    // 政策速递
    goZCSD() {
      this.$router.push({ name: 'news2', params: { myTab: 'tab2' }})
    },
    // 行业新闻
    goHYXW() {
      this.$router.push({ name: 'news2', params: { myTab: 'tab3' }})
    },
    // 行业标准
    goHYBZ() {
      this.$router.push({ name: 'news2', params: { myTab: 'tab4' }})
    }
  }
}
</script>

<style lang="scss" scoped>
	.footer-wrap{
		width: 100%;
    height: 396px;
    /*margin-top: 100px;*/
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
      .foot_text2{
        &:hover {
          color: #d80e19;
        }
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
</style>

<template>
  <div class="dashboard-container">
    <el-carousel :interval="5000" arrow="never" height="560px">
      <el-carousel-item key="1">
        <img src="@/assets/images/banner1.png" class="carousel_img">
        <div class="carousel_div">
          <img src="@/assets/images/banner_logo.png" class="carousel_logo">
          <p class="banner_h1">大唐融合星级上云企业服务平台</p>
          <p class="banner_h1">助力企业数字化转型</p>
          <p class="banner_h2">100+成功案例，2000+各行业设备</p>
          <el-button
            size="small"
            type="myRed"
            style="width: 165px;height: 46px;font-size: 16px;margin-top: 32px"
            @click="goSXSY"
          >
            点击查看详情
            <svg-icon icon-class="right_arrow" style="margin-left: 4px" />
          </el-button>
        </div>
      </el-carousel-item>
      <el-carousel-item key="2">
        <img src="@/assets/images/banner2.png" class="carousel_img">
        <div class="carousel_div">
          <img src="@/assets/images/banner_logo.png" class="carousel_logo">
          <p class="banner_h1">大唐融合DTiip供需大厅</p>
          <p class="banner_h2" style="width: 588px;line-height: 36px">依托大唐工业智能化合作伙伴，整合海量供需双方产品/服务资源，匹配企业工业互联网需求，打通产品、解决方案与企业之间的壁垒</p>
          <el-button
            size="small"
            type="myRed"
            style="width: 165px;height: 46px;font-size: 16px;margin-top: 32px"
            @click="goFBXQ"
          >
            发布需求
            <svg-icon icon-class="right_arrow" style="margin-left: 4px" />
          </el-button>
        </div>
      </el-carousel-item>
      <el-carousel-item key="3">
        <img src="@/assets/images/banner3.png" class="carousel_img">
        <div class="carousel_div">
          <img src="@/assets/images/banner_logo.png" class="carousel_logo">
          <p class="banner_h1">绽放智能之光，畅享技术之美</p>
          <p class="banner_h1">共同打造大唐DTiip开发者社区</p>
          <p class="banner_h2">为广大开发者提供认知、交流、实践的一站式社区</p>
          <el-row type="flex" align="middle" justify="space-between" style="width:90%;margin-top: 56px">
            <el-button
              type="text"
              class="textBtn"
              style="font-size: 15px"
              @click="goDevPlatForm('1')"
            >
              优质文章
              <svg-icon icon-class="caret_right" style="vertical-align:initial;height:12px;width:12px;margin-left: 4px" />
            </el-button>
            <el-button
              type="text"
              class="textBtn"
              style="font-size: 15px"
              @click="goDevPlatForm('2')"
            >
              关键技术
              <svg-icon icon-class="caret_right" style="vertical-align:initial;height:12px;width:12px;margin-left: 4px" />
            </el-button>
            <el-button
              type="text"
              class="textBtn"
              style="font-size: 15px"
              @click="goDevPlatForm('3')"
            >
              资源工具
              <svg-icon icon-class="caret_right" style="vertical-align:initial;height:12px;width:12px;margin-left: 4px" />
            </el-button>
            <el-button
              type="text"
              class="textBtn"
              style="font-size: 15px"
              @click="goDevPlatForm('4')"
            >
              培训认证
              <svg-icon icon-class="caret_right" style="vertical-align:initial;height:12px;width:12px;margin-left: 4px" />
            </el-button>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    goSXSY() {
      window.open('http://103.36.192.87:10025/')
    },
    goFBXQ() {
      this.$router.push({
        path: '/robot'
      })
    },
    goDevPlatForm(flag) {
      this.$router.push({
        name: 'devPlatform',
        params: {
          flag: flag
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      .el-button--myRed {
        border-color: #D80E19;
        color: #D80E19;
        border-radius: initial;
      }

      .textBtn {
        color: #999;
      }

      .textBtn:hover {
        color: #46a6ff;
      }

      .carousel_img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .carousel_logo {
        width: 140px;
        display: block;
        margin-bottom: 24px;
      }

      .carousel_div {
        position: absolute;
        top: 110px;
        left: 18%;
        transition: all 1s;
        opacity: 1;
        transform: translateY(0) !important;
      }

      .banner_h1 {
        font-weight: bold;
        font-size: 48px;
        margin-bottom: 4px;
      }

      .banner_h2 {
        font-size: 24px;
        color: #505152;
        margin-top: 24px;
      }

      @media only screen and (max-width: 1435px) {
        .carousel_div {
          left: 5%
        }
      }
      @media only screen and (min-width: 1436px) and (max-width: 1670px) {
        .carousel_div {
          left: 10%
        }
      }
    }
  }
</style>

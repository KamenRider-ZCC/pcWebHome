<template>
  <div class="main_container">
    <div class="top_banner">
      <div class="banner_body">
        <span class="body_title">企业互动</span>
        <span class="body_text" style="margin-top: 38px">助力政府、园区和企业建立起权威、诚信、灵活、高效、安全的电子化协同办公及公共信息服务平台。</span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0; background-color: rgba(32, 64, 111, 0.04)">
      <p class="content_title">平台功能</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/government_interaction/content_img_1.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">即时通讯</p>
                  <p class="card_text">平台采用即时通讯方式，确保政企间的良好交流，便于政企间开展更好的沟通。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/government_interaction/content_img_2.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">文件传输</p>
                  <p class="card_text">平台具备文件快速传输，云盘资源共享的功能，政策文件、企业资料便于随时下载。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/government_interaction/content_img_3.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">后台管理</p>
                  <p class="card_text">涵盖通讯录管理、企业信息管理、通知公告管理、操作日志审计管理、权限管理等实用功能。</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0 160px;">
      <p class="content_title">平台价值</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1200px; display: flex;">
            <img src="../../assets/images/government/smart_investment/advantage_img.png" class="advantage_img">
            <div style="width: 800px; padding-left: 60px">
              <el-row>
                <span class="advantage_title">更快的响应</span>
                <span class="advantage_text" style="margin-top: 12px">采用即时通讯方式，瞬时响应，沟通零距离，互动性强</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">更广的覆盖面</span>
                <span class="advantage_text" style="margin-top: 12px">支持web端、IOS端、安卓端三端快速登录，无论何时何地，政企沟通都可以及时开展</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">更安全的通讯</span>
                <span class="advantage_text" style="margin-top: 12px">相比传统通讯形式，具备信息安全、存储便捷、云盘资源共享的各项优势。</span>
              </el-row>
            </div>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'government_interaction'
}
</script>

<style lang="scss" scoped>
  .main_container {
    .top_banner {
      width: 100%;
      height: 450px;
      background-image: url("../../assets/images/government/government_interaction/top_banner.png");
      display: flex;
      justify-content: center;
      .banner_body {
        width: 1120px;
        padding-top: 100px;
        .body_title {
          display: block;
          font-size: 48px;
          font-family: SourceHanSansSC-Bold, SourceHanSansSC, sans-serif;
          font-weight: bold;
          color: #fff;
          line-height: 58px;
        }
        .body_text {
          display: block;
          font-size: 24px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN, sans-serif;
          font-weight: 400;
          color: rgba(231, 231, 231, 1);
          line-height: 36px;
        }
      }
    }
    .content_title {
      font-size: 36px;
      font-family: PingFang-SC-Medium, PingFang-SC, sans-serif;
      font-weight: 500;
      color: #000000;
      line-height: 50px;
    }
    .card_img {
      height: 217px;
      width: 100%;
      display: block;
    }
    .card_title {
      font-weight: bold;
      line-height: 33px;
      font-size: 24px;
      font-family: PingFang-SC-Bold, PingFang-SC, sans-serif;
    }
    .card_text {
      font-size: 18px;
      font-family: PingFang-SC-Regular, PingFang-SC, sans-serif;
      font-weight: 400;
      color: #333333;
      line-height: 30px;
    }
    .advantage_img {
      width: 400px;
      display: block;
    }
    .advantage_title {
      display: block;
      font-size: 22px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei, sans-serif;
      font-weight: bold;
      color: #000000;
      line-height: 29px;
    }
    .advantage_text {
      display: block;
      font-size: 20px;
      font-family: PingFang-SC-Medium, PingFang-SC, sans-serif;
      font-weight: 500;
      color: #000000;
      line-height: 28px;
    }
  }
</style>

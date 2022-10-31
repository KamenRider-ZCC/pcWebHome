<template>
  <div class="main_container">
    <div class="top_banner">
      <div class="banner_body">
        <span class="body_title">安监管理</span>
        <span class="body_text" style="margin-top: 38px">利用先进技术，实现多角度、多方位安全管理，强化安全生产监管体系、实现主动预防，</span>
        <span class="body_text">杜绝安全事故隐患发生。</span>
        <span class="body_text" style="margin-top: 8px">多体系融合 | 信息实时监管 | 巩固安全形象 | 降低危险源</span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0; background-color: rgba(32, 64, 111, 0.04)">
      <p class="content_title">平台功能</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/safety_management/content_img_1.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">安全数据采集</p>
                  <p class="card_text">对管辖区内重大危险源进行视频监控和传感器监测等，实现基础数据的实时采集与上报。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/safety_management/content_img_2.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">安监平台搭建</p>
                  <p class="card_text">在数据上报基础上，搭建安全生产监管平台，实现数据平台化、可视化、实时化，拉伸用户黏性，实现信息互联互通。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/safety_management/content_img_3.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">安全数据分析</p>
                  <p class="card_text">结合报表数据，可对区域内危险行为、危险源进行系统化管理，实现更下层级的精细化管理。</p>
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
                <span class="advantage_title">科学性管理</span>
                <span class="advantage_text" style="margin-top: 12px">充分利用现代化技术，包括不限于数据库、网络、遥感、红外和现代通讯技术等，对安全生产过程进行横纵式直接管理。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">实效性管理</span>
                <span class="advantage_text" style="margin-top: 12px">立足生产过程安全监督管理，对政府各级监管部门和生产过程中的各种安全信息迅速、准确有效的收集，并快速进行处理。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">全方位管理</span>
                <span class="advantage_text" style="margin-top: 12px">服务对象多，涉及范围广，服役时间长，实现平台的有机结合，互联互通，信息共享。</span>
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
  name: 'safety_management'
}
</script>

<style lang="scss" scoped>
  .main_container {
    .top_banner {
      width: 100%;
      height: 450px;
      background-image: url("../../assets/images/government/safety_management/top_banner.png");
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

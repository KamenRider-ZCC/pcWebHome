<template>
  <div class="main_container">
    <div class="top_banner">
      <div class="banner_body">
        <span class="body_title">经济态势</span>
        <span class="body_text" style="margin-top: 38px">经济态势全面把握，产业地图动态展现</span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0; background-color: rgba(32, 64, 111, 0.04)">
      <p class="content_title">平台功能</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/economic_situation/content_img_1.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">区域概览</p>
                  <p class="card_text">区域内各项经济信息的可视化概览，全面、实时掌握经济动态。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/economic_situation/content_img_2.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">产业地图</p>
                  <p class="card_text">融合大数据、人工智能技术，对地区产业的现状、动态、市场竞争特征以及组织结构进行智能分析，宏观化展现重点产业，反应产业优势与不足，促进产业合作。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/economic_situation/content_img_3.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">产业指标监测</p>
                  <p class="card_text">针对产业的各项经济指标进行灵活的自定义设置，实时反应当前的产业指标信息。</p>
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
                <span class="advantage_title">大数据分析</span>
                <span class="advantage_text" style="margin-top: 12px">通过大数据技术，将区域内的产业信息、经济态势进行全面深度分析，基于数据模型对未来进行拟真化推测。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">可视化展现</span>
                <span class="advantage_text" style="margin-top: 12px">采用新型BI报表和看板展现形式，直观、形象地展现当地产业信息。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">指标动态管理</span>
                <span class="advantage_text" style="margin-top: 12px">各项指标以标准化库的形式进行配置管理，不仅包含常用经济指标，更可以根据公式自定义设置新型指标。针对指标，进行动态形式的灵活管理。</span>
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
  name: 'economic_situation'
}
</script>

<style lang="scss" scoped>
  .main_container {
    .top_banner {
      width: 100%;
      height: 450px;
      background-image: url("../../assets/images/government/economic_situation/top_banner.png");
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

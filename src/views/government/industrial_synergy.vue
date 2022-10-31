<template>
  <div class="main_container">
    <div class="top_banner">
      <div class="banner_body">
        <span class="body_title">产业协同平台</span>
        <span class="body_text" style="margin-top: 38px">助力产业链一体化，聚焦全场景连接，赋能企业数字化</span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0; background-color: rgba(32, 64, 111, 0.04)">
      <p class="content_title">平台功能</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 600px">
                <img src="../../assets/images/government/industrial_synergy/content_img_1.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">产业发展战略研究</p>
                  <p class="card_text">根据当地的资源禀赋、产业基础与区位条件，盘整产业存量；紧密结合区域特色的产业门类，导入增量资源。高起点谋划当地承接产业转移的重要载体与战略抓手，深度覆盖企业需求研究、城市产业承接方向、园区产业导入、产业发展战略、产业功能布局等研究，助力地区产业协作共赢，共同实现产业升级。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 600px">
                <img src="../../assets/images/government/industrial_synergy/content_img_2.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">区域协同创新研究</p>
                  <p class="card_text">结合当地城市的产业基础，整合优势资源，开展现有传统产业与未来新兴产业研究，并在此基础上全面设计开发模式、合作方式、优惠政策、产业运营策略、产业招引模式、优惠政策制定。针对当前区域与其他合作区域之间的跨区域协作，开展双方合作园区的战略定位、产业门类、功能布局、招引策略等问题规划研究，探索适合当地产业园区的合作模式。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 600px">
                <img src="../../assets/images/government/industrial_synergy/content_img_3.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">产业项目包装策划</p>
                  <p class="card_text">按照当地城市对产业和企业的需求，遵循国家及当地产业政策导向，依托自身产业、人文、科技等资源及区位地理等优势，全面审视国家、所在省份、城市、园区的产业政策，以及当地土地、产业、人才、信息等关键资源要素，因时、因地、因人设计和包装一批适合及引领当地发展的项目。通过项目的精准包装，在准确反映项目客观面目的基础上求新求实，提高北京项目对接率和成功率。</p>
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
                <span class="advantage_title">产学研深度合作</span>
                <span class="advantage_text" style="margin-top: 12px">以“跨区域产业协作”为核心，以持续强化“执行落地”与“学术研究”两大能力为翼，不断开展与各地政府、各大院校、各类园区在产、学、研、政、经等方面的对接和交流活动，实现各方共赢</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">专业化产业指导</span>
                <span class="advantage_text" style="margin-top: 12px">针对区域的战略定位、产业门类、功能布局和招引策略，专业化进行产业规划指导、产业创新指导、产业协同指导，切实提升产业自下而上的全链条协作能力。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">海量数据支撑</span>
                <span class="advantage_text" style="margin-top: 12px">集成数十个产业联盟中数万家企业的业务逻辑资源和基础数据资源，以海量的数据支撑，利用大数据技术，为产业链上下游快速达成精准匹配。</span>
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
  name: 'industrial_synergy'
}
</script>

<style lang="scss" scoped>
  .main_container {
    .top_banner {
      width: 100%;
      height: 450px;
      background-image: url("../../assets/images/government/industrial_synergy/top_banner.png");
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

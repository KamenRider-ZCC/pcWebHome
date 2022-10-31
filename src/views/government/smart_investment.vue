<template>
  <div class="main_container">
    <div class="top_banner">
      <div class="banner_body">
        <span class="body_title">智慧招商</span>
        <span class="body_text" style="margin-top: 38px">利用产业聚集效应和区位发展优势，精准招商，打造现代化产业集群</span>
        <span class="body_text" style="margin-top: 8px">产业数据齐全 | 算法模型成熟 | 数字化建模 | 多维度刻画企业形象 | 动态指标评价企业 |  精准招商项目库</span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;padding: 60px 0; background-color: rgba(32, 64, 111, 0.04)">
      <p class="content_title">平台功能</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/smart_investment/content_img_1.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">招商管理</p>
                  <p class="card_text">帮助政府及园区快速定位潜在客户，提高信息传递的效率，提高招商过程的透明性和管理效率。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/smart_investment/content_img_2.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">招商政策</p>
                  <p class="card_text">帮助政府及园区宣传招商政策，政策的自动发布，方便经开区内外所有企业对最新政策的了解。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 460px">
                <img src="../../assets/images/government/smart_investment/content_img_3.png" class="card_img">
                <div style="padding: 24px">
                  <p class="card_title" style="margin-bottom: 12px">产业布局</p>
                  <p class="card_text">帮助政府及园区宣传产业定位，帮助企业了解区域的整体产业规划，综合把握产业和其它相邻城市的关系，以最大化利用本地优势和地域资源。</p>
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
                <span class="advantage_title">综合投资服务</span>
                <span class="advantage_text" style="margin-top: 12px">全面搜集整合政府、企业及社会各界的海量数据信息，进行投资环境展示、政策资讯发布、资源要素匹配和项目服务对接。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">拟真化直观展现</span>
                <span class="advantage_text" style="margin-top: 12px">高度还原化的仿真建筑群，将海量数据实时记录在管理系统内，让意向企业可以直观地了解园区的优势、地段、环境等信息。</span>
              </el-row>
              <el-row style="margin-top: 40px">
                <span class="advantage_title">综合投资服务</span>
                <span class="advantage_text" style="margin-top: 12px">可视化展现出租情况、成交退租情况、企业需求、招商情况等做出图表分析。利用大数据、云计算分析客户群体的定位与动态，帮助招商人员及时针对性调整招商策略，从而节省大量时间成本和人力成本，提高招商效率，降低招商误差。</span>
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
  name: "smart_investment"
}
</script>

<style lang="scss" scoped>
  .main_container {
    .top_banner {
      width: 100%;
      height: 450px;
      background-image: url("../../assets/images/government/smart_investment/top_banner.png");
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
          color: #000000;
          line-height: 58px;
        }
        .body_text {
          display: block;
          font-size: 24px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN, sans-serif;
          font-weight: 400;
          color: #2E2E2E;
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

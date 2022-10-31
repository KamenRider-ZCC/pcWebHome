<template>
  <div>
    <carousel />
    <hr style="height: 8px;border: none;background: #c7000b;margin: 0">
    <div class="dashboard-container">
      <el-row id="myTop1" type="flex" justify="center">
        <div class="mainBody" style="margin: 32px 0">
          <el-row type="flex" align="middle" justify="center" style="position: relative">
            <span class="mainTitle">推荐文章</span>
            <div style="position: absolute; right: 0">
              <span class="refresh_text" style="cursor:pointer;" @click="getRefresh">
                换一批
                <img src="@/assets/images/icon_refresh.png" style="margin-left: 2px; vertical-align: -2px" />
              </span>
            </div>
          </el-row>
        </div>
      </el-row>
      <el-row type="flex" justify="center">
        <div class="mainBody" style="margin: 0 0 32px">
          <el-row>
            <el-col :span="12" style="padding: 0 16px 0 0">
              <el-card v-loading="loading" shadow="always" :body-style="{ padding: '18px 28px' }" style="position: relative">
                <ul class="card_ul">
                  <li @click="goArticleDetail">
                    <span>【博客】 认识容器，我们从它的历史开始聊起</span>
                  </li>
                  <li>
                    <span>【博客】 一招教你如何高效批量导入与更新数据</span>
                  </li>
                  <li>
                    <span>【博客】 详解Spring中Bean的作用域与生命周期</span>
                  </li>
                  <li>
                    <span>【博客】 从源码角度深入解析Callable接口</span>
                  </li>
                  <li>
                    <span>【博客】 基于RNN和CTC的语音识别模型，探索语境偏移解决之道</span>
                  </li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="12" style="padding: 0 0 0 16px">
              <el-card v-loading="loading" shadow="always" :body-style="{ padding: '18px 28px' }" style="position: relative">
                <ul class="card_ul">
                  <li>
                    <span>【博客】 GaussDB(DWS)数据库智能监控系统应用场景分析</span>
                  </li>
                  <li>
                    <span>【博客】 Spark 开源新特性：Catalyst 优化流程裁剪</span>
                  </li>
                  <li>
                    <span>【博客】 在Modelarts平台上进行视频推理</span>
                  </li>
                  <li>
                    <span>【博客】 支持60+数据传输链路，华为云DRS链路商用大盘点</span>
                  </li>
                  <li>
                    <span>【博客】 华为云MVP程云：知识化转型，最终要赋能一线</span>
                  </li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-row>
      <el-row id="myTop2" type="flex" justify="center">
        <div class="middle_body" style="margin: 32px 0">
          <el-row type="flex" align="middle" justify="center" style="margin-top: 60px">
            <span class="mainTitle">技术领域</span>
          </el-row>
          <el-row type="flex" justify="center">
            <div class="mainBody" style="margin-top: 40px;display: flex;flex-wrap: wrap">
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_alot.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">AIoT</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="AIoT的概念" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article1-1')">· AIoT的概念</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="工业物联网架构的最佳四个实践" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article1-2')">· 工业物联网架构的最佳四个实践</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_service.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">微服务</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="微服务架构的详细介绍" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article2-1')">· 微服务架构的详细介绍</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="微服务在项目开发中的优劣势" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article2-2')">· 微服务在项目开发中的优劣势</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_development.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">开发与运维</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="coredns 概念原理与使用" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article3-1')">· coredns 概念原理与使用</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="k8s 部署示例" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article3-2')">· k8s 部署示例</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_cloud.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">云计算</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="云计算的发展历程及未来趋势展望" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article4-1')">· 云计算的发展历程及未来趋势展望</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="云计算和边缘计算" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article4-2')">· 云计算和边缘计算</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_bigdata.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">大数据</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="for update的特点" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article5-1')">· for update的特点</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="如何利用MongoDB 实现高性能大数据处理" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article5-2')">· 如何利用MongoDB 实现高性能大数据处理</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_artificial.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">人工智能</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="工业4.0和AI与工业结合发展的介绍" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article6-1')">· 工业4.0和AI与工业结合发展的介绍</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="深入剖析kafka架构内部原理" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article6-2')">· 深入剖析kafka架构内部原理</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_digitaltwin.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">数字孪生</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="关于数字孪生的冷思考及其背后的技术" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article7-1')">· 关于数字孪生的冷思考及其背后的技术</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="一文读懂数字孪生的应用及意义" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article7-2')">· 一文读懂数字孪生的应用及意义</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_ar_vr.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">AR/VR</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="AR增强现实技术在工业制造中的五大应用模式" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article8-1')">· AR增强现实技术在工业制造中的五大应用模式</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="工业4.0漫谈：增强现实（AR）技术" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article8-2')">· 工业4.0漫谈：增强现实（AR）技术</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="myCard">
                <el-row>
                  <el-col :span="4" style="display: flex; justify-content: center">
                    <img src="@/assets/images/developer_icon_security.png" />
                  </el-col>
                  <el-col :span="20" style="padding-left: 16px">
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #999999">
                      <span class="myCard_mainTitle">网络安全</span>
                      <div style="display: flex;flex-grow: 1"></div>
                      <span>
                        <i class="el-icon-arrow-right myCard_icon"></i>
                        <i class="el-icon-arrow-right myCard_icon" style="margin-left: -12px"></i>
                      </span>
                    </el-row>
                    <el-row style="margin-top: 4px">
                      <el-tooltip placement="top-start" content="工业互联网时代的网络安全" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article9-1')">· 工业互联网时代的网络安全</p>
                      </el-tooltip>
                      <el-tooltip placement="top-start" content="2020上半年全球10大典型工业网络安全事件" :open-delay="500" :enterable="false">
                        <p class="myCard_text" @click="goPage('/article9-2')">· 2020上半年全球10大典型工业网络安全事件</p>
                      </el-tooltip>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-row>
        </div>
      </el-row>
      <el-row id="myTop3" type="flex" justify="center">
        <div class="mainBody" style="margin: 32px 0">
          <el-row type="flex" align="middle" justify="center">
            <span class="mainTitle">资源工具</span>
          </el-row>
        </div>
      </el-row>
      <el-row type="flex" justify="center">
        <div class="mainBody" style="margin: 32px 0">
          <el-row type="flex" align="middle" justify="center">
            <el-card shadow="always" :body-style="{ padding: '0' }" style="width: 100%; position: relative">
              <el-row>
                <el-col :span="6" class="card_left"></el-col>
                <el-col :span="18">
                  <el-row>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">API Explorer</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">提供API检索、可视化调试、文档查看与在线咨询</span>
                        </el-row>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">Codelabs</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">提供丰富的华为云产品代码示例和便捷的线上编码环境</span>
                        </el-row>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">SDK</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">基于SDK方式调用华为云API，访问云服务应用和资源</span>
                        </el-row>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">开发者手册</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">结合开发者常用场景进行使用指导，让开发者快速上云</span>
                        </el-row>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">开发工具</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">采用命令行访问云服务的API，获取云服务</span>
                        </el-row>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="noRadius_card" shadow="hover">
                        <el-row>
                          <span class="noRadius_card_title">学习体验中心</span>
                        </el-row>
                        <el-row>
                          <span class="noRadius_card_text">一站式学习体验中心，涵盖大数据、人工智能、IoT等热门领域，进阶掌握开发技能</span>
                        </el-row>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </div>
      </el-row>
      <el-row id="myTop4" type="flex" justify="center">
        <div class="bottom_body" style="margin: 32px 0 0">
          <el-row type="flex" align="middle" justify="center" style="margin-top: 60px">
            <span class="mainTitle">培训认证</span>
          </el-row>
          <el-row type="flex" justify="center">
            <div class="mainBody" style="display: flex;flex-wrap: wrap;justify-content: center">
              <div class="bottomCard">
                <el-row style="height: 100%">
                  <el-col :span="3" style="height:100%;display: flex; align-items: center;justify-content: center">
                    <img src="@/assets/images/developer_icon_curriculum.png" />
                  </el-col>
                  <el-col :span="21" style="padding-left: 18px">
                    <el-row>
                      <span class="bottomCard_title">在线课程</span>
                    </el-row>
                    <el-row>
                      <span class="bottomCard_text">涵盖云、AI、大数据、IoT等领域，轻松又高效的知识学习。</span>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="bottomCard">
                <el-row style="height: 100%">
                  <el-col :span="3" style="height:100%;display: flex; align-items: center;justify-content: center">
                    <img src="@/assets/images/developer_icon_route.png" />
                  </el-col>
                  <el-col :span="21" style="padding-left: 18px">
                    <el-row>
                      <span class="bottomCard_title">学习路径</span>
                    </el-row>
                    <el-row>
                      <span class="bottomCard_text">循序渐进的学习体系，助您开启云上热门技术进阶之旅。</span>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="bottomCard">
                <el-row style="height: 100%">
                  <el-col :span="3" style="height:100%;display: flex; align-items: center;justify-content: center">
                    <img src="@/assets/images/developer_icon_authentication.png" />
                  </el-col>
                  <el-col :span="21" style="padding-left: 18px">
                    <el-row>
                      <span class="bottomCard_title">微认证</span>
                    </el-row>
                    <el-row>
                      <span class="bottomCard_text">一站式在线学练考，零基础学习前沿技术，考取权威证书。</span>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
              <div class="bottomCard">
                <el-row style="height: 100%">
                  <el-col :span="3" style="height:100%;display: flex; align-items: center;justify-content: center">
                    <img src="@/assets/images/developer_icon_laboratory.png" />
                  </el-col>
                  <el-col :span="21" style="padding-left: 18px">
                    <el-row>
                      <span class="bottomCard_title">沙箱实验室</span>
                    </el-row>
                    <el-row>
                      <span class="bottomCard_text">一键预置实验资源，实验手册贴心指导操作，量级轻、上手快。</span>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-row>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import carousel from '@/views/supplyDemand/carousel'

export default {
  components: { carousel },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    switch (this.$route.params.flag) {
      case '1':
        document.getElementById('myTop1').scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
        break
      case '2':
        document.getElementById('myTop2').scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
        break
      case '3':
        document.getElementById('myTop3').scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
        break
      case '4':
        document.getElementById('myTop4').scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
        break
    }
  },
  methods: {
    goPage(name) {
      this.$router.push({ path: name })
    },
    goTechnology() {
      this.$router.push({ path: '/technology' })
    },
    goArticleDetail() {
      this.$router.push({ path: '/articleDetail' })
    },
    getRefresh() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      .mainBody {
        position: relative;
        width: 1200px;
        .bottomCard:nth-child(odd){
          margin-right: 36px;
        }
      }
      .noRadius_card {
        position: relative;
        border-radius: 0;
        height: 139px;
        &:hover {
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
        }
        .noRadius_card_title {
          font-size: 16px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: bold;
          color: #333333;
          line-height: 28px;
        }
        .noRadius_card_text {
          font-size: 14px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: 400;
          color: #666666;
          line-height: 22px;
        }
      }
      .mainTitle {
        font-size: 30px;
        font-family: Microsoft YaHei,sans-serif;
        font-weight: 400;
        color: #333333;
        line-height: 42px;
      }
      .middle_body {
        width: 100%;
        height: 610px;
        background-image: url("../../assets/images/devPlatform_field_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .bottom_body {
        width: 100%;
        height: 500px;
        background-color: #F6F7FC;
      }
      .card_ul {
        margin: 0;
        padding-left: 20px;
        font-size: 14px;
        font-family: Microsoft YaHei,sans-serif;
        line-height: 36px;
        li {
          color: #999999;
          &:hover {
            color: #D80E19;
            cursor: pointer;
          }
          & span:hover {
            color: #D80E19;
          }
        }
        li span {
          color: #333333;
        }
      }
      .myCard {
        width: 373px;
        height: 129px;
        padding: 18px;
        margin: 0 10px 10px;
        transition: all .4s;
        &:hover {
          /*cursor: pointer;*/
          background-color: #fff;
          box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
          .myCard_mainTitle {
            color: #D80E19;
          }
          .myCard_icon {
            display: inline-block;
          }
        }
        .myCard_icon {
          display: none;
          color: #D80E19;
          font-size: 20px;
        }
        .myCard_mainTitle {
          font-size: 18px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: bold;
          line-height: 28px;
        }
        .myCard_text {
          cursor: pointer;
          font-size: 14px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
          overflow: hidden; //独立一行 超过部分隐藏
          text-overflow: ellipsis; //省略号
          white-space: nowrap; //规定段落中的文本不进行换行：
        }
      }
      .card_left {
        height: 278px;
        background-image: url("../../assets/images/devPlatform_card_left.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .bottomCard {
        width: 580px;
        height: 120px;
        background-color: #fff;
        margin-top: 36px;
        padding: 24px 28px;
        transition: all .4s;
        border-left: 2px solid #fff;
        &:hover {
          box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
          border-left: 2px solid #D80E19;
          cursor: pointer;
        }
        .bottomCard_title {
          font-size: 18px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: bold;
          color: #333333;
          line-height: 36px;
        }
        .bottomCard_text {
          font-size: 14px;
          font-family: Microsoft YaHei,sans-serif;
          font-weight: 400;
          color: #666666;
          line-height: 28px;
        }
      }
    }
  }
</style>

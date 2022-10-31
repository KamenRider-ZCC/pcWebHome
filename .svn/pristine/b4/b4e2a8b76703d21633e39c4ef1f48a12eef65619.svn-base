<template>
  <div class="main-container">
    <el-row :gutter="20">
      <!--left-->
      <el-col :span="18">
        <!--面包屑-->
        <div class="mbx">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/devPlatform' }">开发者平台</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="goDevPlatForm('2')">技术领域</a></el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--文章标题-->
        <h class="articleTitle">{{ articleTitle }}</h>
        <!--作者信息-->
        <div class="authorInfo">
          <img class="authorImg" style="margin-right: 15px;" src="@/assets/images/u694.png">
          <span style="margin-right: 15px;color: initial">{{ authorName }}</span>
          <div style="margin-right: 15px;">
            <span>发表于{{ articleTime }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-view" /> <span>{{ viewNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-chat-dot-round" /> <span>{{ infoNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <svg-icon icon-class="zan" fill="#fl0" /> <span>{{ viewNumber }}</span>
          </div>
        </div>
        <!--文章类型-->
        <div class="articleType">
          <el-button>Docker</el-button>
          <el-button>容器</el-button>
        </div>
        <!--摘要-->
        <!--        <div class="abstract">{{abstract}}</div>-->
        <!--文章内容-->
        <div class="articleCon">
          <p>工业物联网架构由从传感器、连接和网关到设备管理和应用平台的众多元素组成。组装这些不同元素可能会让人望而生畏，尤其是对于那些刚刚开始实施工业物联网计划的公司而言。更重要的是，工业应用需要巧妙地解决独特的需求和挑战。</p><br>
          <p>好消息是，新兴的开发工具正在帮助简化和精简构建可行的工业物联网架构的流程。随着工业物联网格局的不断发展，技术领导者在构建下一个工业物联网架构时应考虑以下4个最佳实践。</p><br>
          <p style="font-weight: bold">1、硬件快速原型设计</p><br>
          <p>在工业领域，物联网硬件设计的挑战在于令人眼花缭乱的一系列用例需求。以温度传感器为例，根据精度、温度范围、响应时间和稳定性等标准，可能有数百种可用传感器可供选择。更有可能的是，没有现成的无线传感器可以完全满足您或您客户的特定需求。而这就是物联网快速原型设计的用武之地。</p><br>
          <p>MikroBUS 等硬件原型设计工具允许您在几个小时内使用高效的资源构建一个定制的物联网设备原型。从一系列现成的、兼容的传感器、接口和无线模块以及编译器和开发板中，您可以创建符合您工业用例的最佳硬件组合。借助快速原型设计，公司可以以经济高效且灵活的方式验证其工业物联网解决方案的技术和业务可行性，这为成功推出奠定了基础。</p><br>
          <p style="font-weight: bold">2、改造无线连接</p><br>
          <p>普通工厂使用未连接的传统工业系统运行。虽然这些系统采用了许多用于自动化目的的专有通信协议，但收集到的数据被限制在离散的控制环路中，这在工厂车间内部形成了大量的数据孤岛。这些协议之间缺乏互操作性，这进一步阻碍了工厂范围内监测网络的实施。</p><br>
          <p>新兴的无线连接改造对工业物联网架构至关重要，因为它使制造商能够以简单且经济高效的方式连接并从其传统资产和系统中获取数据，而无需代价高昂的生产停机时间和侵入性硬件改造。通过使用集成平台，可以通过基于有线的串行和其他工业协议从控制器获取操作数据，然后使用远程无线连接转发到远程控制中心。</p><br>
          <p style="font-weight: bold">3、软件定义无线电</p><br>
          <p>典型的工业物联网架构可能会包含多种无线协议和标准。此外，当今许多工业设施已经在一定程度上实施了无线网络（例如 Wi-Fi、WirelessHART...），并希望部署新的连接类型，以开发其他高价值用例。因此，创建一个高效且向后兼容的工业物联网架构以适应不同无线技术的共存至关重要，这就是软件定义无线电（SDR）发展势头强劲的原因所在。</p><br>
          <p>软件定义无线电是指一种无线电通信方法，其中大多数信号处理是使用软件完成的，而不是传统的硬件驱动方法。利用软件定义无线电的物联网网关可以同时合并和解码不同的协议，以降低基础设施的成本和复杂性。此外，可以通过简单的软件更新来实现对架构的新无线解决方案的调整或添加。这使公司能够动态地适应未来的运营和技术变化，同时继续支持现场的传统无线设备。</p><br>
          <p style="font-weight: bold">4、可迁移、基于容器的工业物联网平台设计</p><br>
          <p>根据安全性、可靠性、数据所有权和成本等标准，公司需要在本地、公共或私有云部署，甚至在混合方法中进行选择。随着工业物联网用例和架构的扩展，部署模式和/或云供应商的决策也会发生变化。</p><br>
          <p>在这种情况下，工业物联网平台（通常是设备管理平台）具有可迁移性、基于容器的设计，使工业用户可以完全灵活地选择他们喜欢的后端环境。同时，它可以根据需要简单地迁移到另一台服务器，而不会影响应用程序的一致性或功能。基于容器的设计理念是将单个应用程序打包并交付到称为 Docker 的离散、标准化容器中。通过这种模块化架构，用户可以决定他们想要使用哪些特定的平台功能/应用程序以及在哪里部署它们。由于其灵活性和可迁移性，基于容器的设计促进了可互操作且面向未来的工业物联网架构，以跟上行业的动态需求。</p><br>
        </div>
        <!--文章底部按钮-->
        <div class="articelBtn">
          <el-button round><svg-icon icon-class="zan" fill="#fl0" /> 点赞</el-button>
          <el-button round icon="el-icon-star-off">收藏</el-button>
          <el-button round icon="el-icon-circle-plus-outline">关注作者</el-button>
        </div>
        <hr style="margin: 25px 0;height: 1px;background-color: #999;border: none;">
        <!--评论-->
        <div class="comment">
          <p style="font-weight: bold;margin-bottom: 15px;">评论（{{ commentNumber }}）</p>
          <el-input v-model="textarea" type="textarea" :rows="8" placeholder="请开始你的评论" />
        </div>
      </el-col>
      <!--right-->
      <el-col :span="6">
        <div class="authorIntroduce">
          <el-row style="display: flex;align-items: center">
            <el-col :span="6"><img class="authorIntroImg" src="@/assets/images/u694.png"></el-col>
            <el-col :span="18">
              <el-row style="margin-bottom: 5px;">{{ authorName }}</el-row>
              <el-row style="font-size: 14px;color: #999999"><span style="margin-right: 10px;">文章:{{ articleNumber }}篇</span> <span>粉丝:{{ fans }}人</span></el-row>
            </el-col>
          </el-row>
          <p class="intro">{{ intro }}</p>
          <el-button class="follow" icon="el-icon-plus">关注</el-button>
        </div>
        <related-article />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import relatedArticle from '@/views/developer/children/relatedArticle'

export default {
  components: { relatedArticle },
  data() {
    return {
      articleTitle: '工业物联网架构的最佳四个实践',
      authorName: '张三',
      articleTime: '2021-07-21 16:25:53',
      viewNumber: '742',
      infoNumber: '7',
      // abstract: '【摘要】 工业物联网架构由从传感器、连接和网关到设备管理和应用平台的众多元素组成。',
      commentNumber: '2',
      textarea: '',
      /* right*/
      intro: '实施分享行业动态，传递价值信息，我是社区小助手',
      articleNumber: '1420',
      fans: '2000'
    }
  },
  mounted() {
  },
  methods: {
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

  #app .main-container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;

    .articleTitle {
      font-size: 24px;
      font-weight: bold;
      margin: 25px 0;
      display: block;
    }

    .authorInfo {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;

      .authorImg {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }

    .articleType {
      padding: 25px 0;

      button {
        color: #525798;
        border-color: #525798;
      }
    }

    .abstract {
      width: 100%;
      height: 104px;
      background: #F6F7FC;
      padding: 30px 20px;
      margin-bottom: 25px;
      color: #666;
    }

    .articleCon{
      line-height: 24px;
    }

    .articelBtn {
      text-align: center;
      margin-top: 25px;

      .el-button:active {
        color: #c7000b;
        border-color: #c7000b;
        outline: none;
      }

      .el-button:hover, .el-button:focus {
        color: #c7000b;
        border-color: #c7000b;
        background-color: #FFF;
      }
    }

    /*right*/
    .authorIntroduce {
      width: 100%;
      background: #F6F7FC;
      padding: 20px;
      margin-bottom: 25px;

      .authorIntroImg {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .intro {
        color: #666;
        font-size: 14px;
        margin: 20px 0
      }

      .follow {
        color: #fff;
        background-color: #c7000b;
        border-color: #c7000b;
        margin: 0 auto;
        display: flex;
      }
    }

  }
</style>

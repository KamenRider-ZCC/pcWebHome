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
          <P>工业互联网时代的网络安全</P>
          <br><P>万物互联的时代已经到来</P>
          <br><P>互联网改变了人们的生活与工作，并影响到人类社会的各个角落;随着万物智联时代的来临，我们身边联网的智能设备数量剧增。根据Gartner的数据，2017全球物联网设备的数量多达84亿，已远远超过全球人口总数。而到了2020年，物联网设备数量将达到204亿，这意味着每个人身边都有数个乃至数十个联网设备，可见物联网在未来的连网世界中将扮演关键的角色。</P>
          <br><P>全球工业正迈入一个全新的物联网时代，业者对于提升各种作业流程自动化的需求越来越高，进而部署传感器、机器人和远程控制等各种智能连网设备，实现了无缝连接、被管理、并且借助网络安全地进行交互工作，也就是目前被称为工业物联网 (IIoT) 或工业4.0的产业变革和趋势。然而这股产业自动化的新趋势也扩大了网络安全的范畴，将网络安全的议题延伸至讲求运维技术(Operation Technology, OT) 的工业领域中，包括能源、石油与天然气、运输和制造业等。</P>
          <br><P>工业互联网成为网站黑客攻击目标</P>
          <br><P>随着工业领域进入工业4.0时代，运维技术(OT)和信息技术(Information Technology, IT)趋于并驾齐驱，IT部门部署软件的目标也是为了让OT通讯更佳以提升工厂设备的生产效率。这种工业化和信息化的融合也意味着未来的安全漏洞将会不仅是数据遗失，甚至扩散和渗透到城市安全、人身安全、关键基础设施安全，乃至国家安全等更广泛的层面，造成的后果日益严重。</P>
          <br><P>例如黑客会运用工厂的网络来散布恶意软件，扰乱通讯协议，打乱生产线上的机器人作业或制造流程，酿成灾难性的安全危机，或导致停机而引起代价高昂的经济损失。根据企业增长咨询公司Frost &amp; Sullivan的估算，一家石油和天然气公司遭到网络攻击的平均损失高达1,300万美元。更糟的情况是，当一个城市的自来水系统遭受网络攻击时，则可能会让用以净水的化学物质混合而改变成分。网络黑客也可能盯上智能型供电和供水系统，或者是一个城市的智能交通信号网络，而造成断电、断水或交通瘫痪。</P>
          <br><P>物联网时代，没有一劳永逸的安全防护</P>
          <br><P>物联网存在的各种安全问题需要物联网设备制造商和终端用户联合采取措施确保设备安全。物联网设备有太多组件，包括处理器、云与Web服务、设备与应用程序，这导致很难兼顾所有这些组件的安全问题。系统的每部分都至关重要，漏洞可能就存在于应用程序、平台、设备、传感器和云中。因此，我们需要接受一种新的安全观念，即“没有一劳永逸的安全防护，安全是个持续对抗的过程”。</P>
          <br><P>设备服务提供商同样需要注重培养防范意识，监控威胁和安全事件，并遵守适当的报告流程，特别是在出现影响其客户的安全漏洞和事件时更要及时报告，与此同时，定期升级操作系统和应用对于确保网络安全也是很重要的。</P>
          <br><P>伴随着国家政策的指引以及行业内对工控安全的行业引导，在相关因素驱动下，工控安全产品应用实例的增多及实际应用效果得到业界的认可，预计在不久的将来，工业控制系统的安全必将迅猛发展。</P>
          <br><P>虽然面对网络安全并没有百分之百安全的解决方案，但目前已经有很多专业组织出版了很多关于工业网络信息安全的建议要求可以参考。如国家标准的《信息系统安全等级保护基本要求》，或是专门针对工业自动化和工业安全的国际标准IEC 62443。而IEC 62443更是目前在全球被广泛采纳和认可的工控系统标准。各国、各行业制定工控相关标准政策都会参考和吸收该标准提供的概念、方法、模型。不论是想有系统地了解工控安全问题及其应对措施，还是想了解部分内容，都可以从该标准入手。</P>
          <br><P>稳定可靠的工业通讯推进工业物联网安全</P>
          <br><P>IEC 62443标准涉及完整的工业自动化控制生态系统，并描述了安全从业人员，系统集成商和控制系统制造商应如何交互并确保其设施和组件的安全性。该标准根据区域和管道模型细分网络，以使用良好定义的接口(信道)，更好地控制系统网络内的接入和安全性。它为工业自动化控制系统安全提供了一个通用准则，专门用于工业自动化的安全管理系统，工业网络安全体系结构指南，以及定义整个系统和整个组件生命周期的安全要求。它的实施有利于组织解决工业网络安全风险。</P>
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
      articleTitle: '工业互联网时代的网络安全',
      authorName: '张三',
      articleTime: '2021-07-21 16:25:53',
      viewNumber: '742',
      infoNumber: '7',
      // abstract: '【摘要】 在介绍微服务时，首先得先理解什么是微服务，顾名思义，微服务得从两个方面去理解',
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

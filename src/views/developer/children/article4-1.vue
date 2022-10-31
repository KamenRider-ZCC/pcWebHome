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
          <br><P>云计算作为一种技术，目前在就业市场上占有很大的地位。对于大多数技术专业人士来说，这是一个理想的领域。</P><br>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article4-1-1.png" style="max-width: 500px">
          </div>
          <br><P>我们都知道云计算如何帮助存储和管理个人和商业使用的数据。专家预测，到2025年，我们将会产生大约163ZB的数据，也就是超过一万亿GB的数据。有了这么大的数据量，我们将需要把它存储在一个可以通过互联网访问的地方。对云计算的需求年复一年呈指数级增长。那么，让我们看看云计算的概念是如何产生的，以及云计算的未来会是什么样的。</P>
          <br><P style="font-weight: bold">这一切始于20世纪70年代</P>
          <br><P>对许多人来说，云计算是最近几年才出现的术语。其实，这并不完全正确。早在20世纪70年代，虚拟机的概念就已经产生了。通过使用虚拟化，可以在一个隔离的环境中使用一个或多个操作系统。虚拟机模型将50年代使用的大型机访问模型提升到了一个新的水平。事实证明，多个不同的计算环境存在于一个物理环境中，这一事实证明了游戏规则的改变。</P>
          <br><P style="font-weight: bold">90年代的虚拟私人连接</P>
          <br><P>直到90年代，电信运营商都在提供点对点数据连接。新提供的虚拟私有连接提供了与其前身相同的可靠性，但成本降低了。电信公司现在可以为用户提供共享访问同一物理基础设施的服务，而不是建造更多的硬件线路来为更多的用户提供连接。</P>
          <br><P>在那些日子里，我们有网格计算，它解决了并行计算的大问题。然后我们继续使用效用计算，它将资源作为计量服务提供。然后，我们转向云计算，它提供随时随地访问作为服务交付的IT资源。</P>
          <br><P>90年代互联网开始提供大量带宽时，云计算才成为可能。云计算的第一个里程碑是salesforce在1999年推出的，通过一个简单的网站提供企业应用。下一次发展是2002年的Amazon Web Services。亚马逊通过土耳其机器人(Mechanical Turk)提供了一套基于云计算的服务，包括存储、计算，甚至还有人类智能。</P>
          <br><P style="font-weight: bold">充满希望的现在和未来</P>
          <br><P>大约在2010年，随着互联网速度和使用量的加快，我们看到了微软和谷歌等科技巨头推出的“杀手级应用程序”。当这些公司以一种可靠且易于消费的方式提供服务时，对整个行业的连锁反应是更广泛地接受在线服务。</P>
          <br><P>故事还没有结束。云计算的发展仍在继续。随着技术的进步，云空间只会变得更大更好。人们很自然地认为，基于云的服务将呈现同样的指数级增长。这些服务中有许多已经非常流行，软件、基础设施和平台作为一种服务将在短期内继续发展壮大。</P>
          <br><P>事实上，云也是物联网的支柱。云计算允许各种设备保持连接并相互通信。随着基于物联网系统的市场使用的增加，云解决方案将变得更加可行和容易获得的一般用途。</P>
          <br><P>综上所述，很明显，云计算提供了我们当今世界需要的一系列解决方案。</P>
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
      articleTitle: '云计算的发展历程及未来趋势展望',
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

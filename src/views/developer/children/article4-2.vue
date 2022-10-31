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
          <br><P>云计算可以通过互联网手段将基础设施，平台和应用等服务的交互模式彻底颠覆。简单来说，云计算可以帮助用户提效率，降成本。</P>
          <br><P>和传统硬件平台各自独立的特点不同，云计算对资源的共享和调度非常灵活。这对于降低基础设施的供应成本善莫大焉。自然了，正因如此，越来越多的用户和企业都不再怀疑云计算。</P>
          <br><P>但是，随着技术的发展和用户需求的不断提升，云计算的不足之处也被暴露出来。比如，云计算的架构软肋就首当其冲。云计算采用的是集中建设和运营的方式，资源全部在中心节点，或者几个主要节点上。客户要想使用这些资源，就必须通过互联网实现。但这其实存在很多问题。</P>
          <br><P style="font-weight: bold">一、大数据量的采集和处理</P>
          <br><P>如果按照传统模式，在某些特定场景下，前端采集的数据量会非常庞大，那么网络的传输速率和中心的处理能力，都将影响最终效果。</P>
          <br><P style="font-weight: bold">二、即时交互场景</P>
          <br><P>毕竟庞大的数据通过互联网传输，处理，再下发。这样高的时延，在无人驾驶汽车这种对即时要求非常高的场景下是不可想象的。</P>
          <br><P style="font-weight: bold">三、遇到故障</P>
          <br><P>如果遇到网络故障或者云计算中心节点故障，那么即便只是瞬间的故障，其影响都可能是灾难性的。</P>
          <br><P style="font-weight: bold">四、安全性问题</P>
          <br><P>第四点就是老生常谈的安全性问题。很多对数据有保密性要求的客户是绝对不允许自己的数据传输到云端的。</P>
          <br><P>在这种情况下，边缘计算逐渐应运而生。</P>
          <br><P>和传统的集中化云计算系统不同，边缘计算强调的是节点。不仅在中心，更可以在客户侧，甚至是终端。如果把思路更拓宽一下，其实只要是将数据的存储和处理部署放在云计算中央节点之外，都可以被看作是边缘计算。比如交通探头，自动驾驶汽车，甚至是企业内部的数据中心，都可以被纳入边缘计算。</P>
          <br><P>边缘计算还有一个特点，那就是可以和云计算中心看作一个整体。其节点可以接受云计算中心的统一管控，处理和存储全部，或者是部分数据。这样做的好处在于降低成本，节约资源。同时提高效率和业务的连续性。最关键的是，对于有特殊需求的用户来说，满足了他们对数据本地存储和处理的安全合规要求。</P>
          <br><P>其实，云计算中心和边缘计算节点有很强的互补性。比如边缘计算节点只按照设定好的程序处理初步数据。这样做的好处在于提高效率降低往复成本。尤其是那些图像之类的非结构化数据，将它们转化为结构化信息。这样可以降低对传输的资源的需求，并提升本地数据的响应速度。</P>
          <br><P>另外，对于云计算中心来说，如果将算法下发到边缘计算节点，再由后者提供算力将这些数据进行处理并保存。就可以非常完美的解决隐私保护的问题，又充分利用云服务快速迭代刷新的优势。</P>
          <br><P>最后，边缘计算其实可以理解成云计算中心的进一步延伸。这种分布式计算技术如果再加上合理的资源调度，就可以充分利用边缘计算节点的算力和存储资源，加上云中心的统一管理，那么一个非常高效的云计算平台便应运而生了。</P>
          <br><P>虽然边缘计算的前景目前看来十分乐观，但其实在行业上还有一些问题需要解决。主要问题就在于边缘计算节点和云计算中心的分工，协作模式还需要进一步完善。甚至在相同概念下，两者在技术实现方案上也可能有所区别。这主要是因为，目前云计算中心与边缘计算节点的分工有时候还比较模糊。比如在某些情况下，边缘计算需要云计算中心的计算能力和海量存储支持，而有时候后者又需要对前者的隐私数据进行处理。所以，要想让边缘计算完全兴起，还有一段路要走。</P>
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
      articleTitle: '云计算和边缘计算',
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

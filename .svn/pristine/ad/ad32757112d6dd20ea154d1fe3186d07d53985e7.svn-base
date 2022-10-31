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
          <P>智能制造作为推动工业4.0的核心板块，以提升整个制造过程的智能化、数字化程度作为自身的目标。在工业4.0的落地过程中，为了解决相关痛点，出现了一系列的核心技术，例如工业物联网、大数据、云计算等。其中，增强现实AR技术作为“后互联网时代”一项革命性的认知工具、效率工具，已经逐渐成为推动制造业变革的利器，为工业4.0的实现增添动力。</P>
          <br><P>增强现实(AR)是一种将真实世界信息和虚拟世界信息“无缝”集成的技术，它将现实世界中的一定时间空间范围内很难体验到的实体信息，通过电脑等科学技术，模拟仿真后再叠加，将虚拟的信息应用到真实世界，被人类感官所感知，从而达到超越现实的感官体验。也就是说，通过AR技术能够将数字世界与物理世界相结合，而这种结合正在制造业领域持续发力。</P>
          <br><P style="font-weight: bold">一、工业设计</P>
          <br><P>传统工业设计阶段包括五个主要步骤：了解客户需求;将需求转换为技术输入;提供多种解决方案;选择客户可接受的可行性解决方案;将确定方案转移到制造团队。可以说，在某种程度上传统设计过程非常复杂，需要花费大量的精力和时间为客户确定最佳可行的产品。</P>
          <br><P>通过将增强现实AR技术集成到设计开发阶段，可以避免传统设计方法引起的繁琐，增强与客户的互动，使得产品设计更加符合客户需求。</P>
          <br><P style="font-weight: bold">二、装配制造</P>
          <br><P>在工业生产过程中，很多环节还需要现场工程师手动操作，特别是在装配过程中，装配的周期时间取决于操作工人的技能熟练度，特别是飞机，汽车等大型精密机械设备。通过AR眼睛，工程师可以直观的了解装配设备的内部结构信息以及某个部件的3D图形，并对其进行操作调整，从而实现准确快速的装配生产。另一方面，通过AR技术，还可以将安装指导手册和质量要求显示在AR眼镜上，从而大量缩短工程师的装配培训时间。</P>
          <br><P style="font-weight: bold">三、质量检验</P>
          <br><P>质量检测是确保出厂产品符合所有要求的重要环节。传统生产需要依据大量检查点清单才能完成质检过程，所以质检人员对最终产品的交付负有重要责任。客户最终接受的产品质量，不仅取决于生产过程中的产品质量把控，还取决于质检过程的准确性。</P>
          <br><P>借助AR技术，可以为质量控制提供交互式平台，从而实时查看显示的产品尺寸精度、公差和表面光洁度等详细信息，方便质检人员轻松执行复杂任务，提升产品质量检验的效果。</P>
          <br><P style="font-weight: bold">四、设备维修</P>
          <br><P>制造业产品都需要定期开展维修工作，以确保企业日常生产的正常运行，但制造业的相关设备维护要远比家用消费电子更为复杂，这就要求制造业的相关维修工程师必须全面熟悉设备的结构和功能，并且要参考大量的技术图表，从而对维修工程师的要求非常高。</P>
          <br><P>借助新兴的AR技术辅助维护和维修工作，工程师可以在智能手机、平板电脑甚至AR眼睛上查看设备的运行状态，通过交互式可视化操作，完成相应的维修工作。</P>
          <br><P style="font-weight: bold">五、员工培训</P>
          <br><P>对员工开展培训是制造业企业获取高素质员工的重要方式，企业通常都会投入大量的时间和金钱开展相关培训，以提升企业员工的技能素质和稳定性。相较于传统的纸质培训或者监督式的培训方法，AR技术可以使培训方式更加具有互动性，实现远程培训，还可以确保培训期间员工的人身安全。</P>
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
      articleTitle: '工业4.0漫谈：增强现实（AR）技术',
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

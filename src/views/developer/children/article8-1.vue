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
          <P>增强现实技术AR除了能够在游戏中大放异彩外，同时也在制造业中也有了越来越广泛和深入的应用。这也成为很多企业重点研究的对象，同时也成为我国在制造业领域发展中关注的一项重要技术之一。</P>
          <P>在中国国家制造强国建设战略咨询委员会发布的《中国制造2025》重点领域技术路线图就将增强现实AR技术列为智能制造核心信息设备领域的关键技术之一，其核心内容主要研究三维空间RFID注册定位技术、工业物联网信息三维空间、搜索、显示与交互技术。智能制造核心信息设备是指制造过程各个环节实现信息获取、实时通信和动态交互及决策分析和控制的关键基础设备。可见，增强现实技术已成为了中国企业智能制造转型过程中的一项关键技术之一。主要的应用模式如下：</P>
          <P>让设备的维修维护变得更便利</P>
          <P>对于制造企业而言，设备的维修维护，保障设备的稳定运行具有非常重要作用。然而，随着设备的集成度、复杂度越来越高、操作人员的经验缺乏使得设备的维修维护变得越来越困难。但借助增强现实技术AR就能够使复杂设备的维修、点检变得直观方便，可以帮助企业应对上述挑战，从而转变原有的设备维修维护的方式，提升效率，保障质量。</P>
          <P>以富士通公司为例，为了改善工厂设备维修维护工作人员的现场作业环境，该公司已经将增强现实技术应用于自身的设备点检与24×7的服务运营中。采用增强现实之前，工作人员通常要在点检单上手动记录温度、压力等信息，然后再将信息录入电脑。如今，工作人员可以在现场用触摸屏录入信息，创建电子表格并共享最近的信息。增强现实可以快速显示作业手册数据，故障历史中的库存水平。</P>
          <P>利用富士通AR技术提供的文本输入功能，现场工作人员可以使用它来快速共享信息。当进行现场点检的时候，无论多小的细节，都可以记录下来。通过增强现实技术，我们可以轻松判断哪些设备运转正常，同时结合数据分析，可以实现预防性的设备维护。另一方面，随着老龄化社会的急剧加速，具备熟练技术经验的工人越来越少。通过采用AR技术，即使是能力一般、经验不足的“菜鸟”，也可以准确地完成各种各样的现场维护作业，这将有助于技术、经验的传承。</P>
          <P>同样还有汽车行业的案例，也许过去任何一名汽车维修工或汽车爱好者，都能认出相当大部分的引擎零件并知道具体用途。现在随着汽车应用到了越来越多复杂的传感器、计算机和安全设施使汽车的维修不再变得那么容易。为此，宝马公司专门开发出了一款增强现实眼镜，宝马汽车维修人员戴着眼镜就可以看到高亮显示的零件，计算机会告诉使用者按照何种顺序如何安装。技师佩戴的眼镜上的小型屏幕让技师可以在真实环境下看到计算机生成的图片</P>
          <P>更便捷、准确地指导产品的生产制造过程</P>
          <P>由此可以看出，由于能够直观的现实出操作步骤和工艺，增强现实除了能够应用在维修维护过程中，还能够应用在企业的生产制造过程中，为操作工人提供更加直观的工艺指导，而不再只是复杂、枯燥的作业指导书和图纸。</P>
          <P>据报道，波音公司生产线上的工人们已开始大规模使用具有增强现实技术的谷歌眼镜来完成飞机线束的组装。众所周知，客机机身内部的线束错综复杂，以往工人们需要拿着飞机内部结构指令手册或参照PDF图才能一步步完成线束的组装和连接，工作流程冗杂繁琐，往往容易出错。而开始使用谷歌眼镜后，工人们就无需拿着手册和电脑在机舱中到处跑，谷歌眼镜可投射出各个细节部分的组装方式来协助工作。数据统计，用上谷歌眼镜后，波音工人组装线束的错误率降低50%，时间缩短了25%。</P>
          <P>使用具有增强现实技术的谷歌眼镜来完成飞机线束的组装</P>
          <P>让产品营销变得更犀利</P>
          <P>在企业产品营销方面，增强现实技术也逐步成为促进企业产品销售的一种利器，能够使消费者获得更直观的体验。在增强现实的世界里，曾经的品牌和产品宣传将慢慢减少，互动和服务将逐渐增多。例如产品的试用，Topshop、De Beers和Converse等品牌都在使用增强现实让消费者试穿和试用衣服、珠宝或者鞋子。Shiseido和Burberry进一步把增强现实应用到化妆品试用上。而对于宝马和沃尔沃等汽车品牌来说，增强现实也是新车介绍和虚拟试驾的好选择。应用在产品的挑选和购买中，如一号店的地铁虚拟店铺，扫描之后选择你喜欢的可以在线购买。</P>
          <P>使用增强现实让消费者试穿和试用鞋子</P>
          <P>产品设计阶段仿真、分析、评审产品模型</P>
          <P>再精确的图纸，也会限制设计师设计理念的准确表达，影响和客户的沟通。而增强现实技术，恰恰弥补了这个缺陷。设计师在设计阶段可以通过增强现实技术将设计师的创意快速、逼真的融合于现实场景中，使设计师能对最终产品有直观和切身的感受，利用最终设计方案的完善。</P>
          <P>同时，通过增强现实技术，可以使设计出的虚拟模型与现实中的真实场景相互融合，从而在设计定型前可以更好进行装配仿真、分析、评审产品模型等工作。</P>
          <P>运用AR技术拓宽物联网应用之路</P>
          <P>最后要提到的就是AR技术在物联网领域中的应用，物联网是新一代信息技术的重要组成部分，也是“信息化”时代的重要发展阶段。将增强现实AR技术融入到物联网中，可以使信息的呈现方式更加的便利、友好和直观。</P>
          <P>当我们举起手机就能够通过手机看到我们所使用产品的运行状态，性能和各项重要参数，同时这些数据通过物联网也能够直观的反映到产品设计师的手中，从而使他们可以不断的去优化完善产品，为客户带来更好的体验，省去了很多不必要的环节。</P>
          <P>在这方面美国的PTC公司也有了一些成熟的解决方案，PTC公司主推的“智能互联产品”的关键性环节是指智能产品的每一个动作，都会重新返回设计师的桌面，从而实现实时的反馈和革命性的优化策略。PTC公司结合其已有的CAD、PLM解决方案和这几年通过并购而不断壮大的物联网平台相融合，从某种程度上实现了数字世界和物理世界的融合，但仅仅是这样这还不够，数字化模型和实物模型之间还缺乏直观连接和展示的桥梁，而增强现实(AR)这种将真实世界信息和虚拟世界信息“无缝”集成的新技术正好弥补了这一点，可以帮助设计师更直观地了解产品在现实世界的运作和使用情况。</P>
          <P>增强现实帮助设计师更直观地了解产品在现实世界的运作和使用情况</P>
          <P>为此，PTC在去年收购了原高通公司的Vuforia，Vuforia是一个的增强现实(AR)移动视觉平台，为移动设备开发应用，比如平板电脑或手机，Vuforia能够混合现实和计算机生成的图像，可以使虚拟物体和真实物体共享空间。</P>
          <P>通过收购Vuforia，结合PTC全生命周期管理解决方案和物联网解决方案，使制造行业企业深化应用AR技术拥有了更多想象的空间。通过Vuforia开发平台，可以让真实产品与数字化产品之间的链接变得更加便利、直观，同时结合物联网技术，智能产品各项终端用户使用参数也能够直观的反映出来，从而促使智能产品的全生命周期管理变得更加完整，进一步拓展了PTC的物联网转型之路。随着AR技术在产品设计研发的全生命周期中被应用，将在产品设计、产品监控以及指导运营商与技术人员如何正确使用并维护产品方面，打造全新的工作方式。</P>
          <P>2016技术成熟度曲线</P>
          <P>从Gartner发布的2016年技术成熟度曲线来看，增强现实技术已经处于了幻灭期，形成了一个正在逐步走向落地的过程。可以预计，在未来10年内，增强现实技术会离我们越来越近，并逐步从制造业应用走进我们的生活。</P>
          <P>后记</P>
          <P>当然对制造业企业而言，增强现实技术肯定不会仅限于文中所列的这五大应用模式，相信随着AR技术的进步和企业业务需求的不断扩展，未来必将会有越来越多的应用途径和展示方式，这是毋容置疑的。增强现实技术留给我们无数的想象空间和应用方式、应用场景。其发挥出来的作用也许在现在还表现的不那么明显，但随着我们的深入挖掘，也许改变的不再仅仅是辅助优化企业的制造过程，而是颠覆商业模式、打造智能产品、创造新的产业生态等一系列翻天覆地的变化。</P>
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
      articleTitle: 'AR增强现实技术在工业制造中的五大应用模式',
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

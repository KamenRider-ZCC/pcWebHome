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
          <P>近些年，数字孪生(DigitalTwin)一词快速走红，变成一个趋之若鹜的概念。但伴随着工业领域和学界对数字孪生的持续讲解，其含意却愈发错综复杂，和别的一些有关概念的界线也愈来愈模糊不清。数字孪生究竟是什么，能干什么，界限在哪儿，它和建效仿简直什么关系这些难题令很多人疑惑。文中试着对在其中的一些疑虑开展浅显的剖析。</P>
          <br><P style="font-weight: bold">1.Digital Twin 究竟指什么?</P>
          <br><P>因为Digital Twin的翻译中文莫衷一是(这个问题稍候会提及)，临时应用DT意味着Digital Twin。在信息内容行业，一个概念有多种多样表述已经是习以为常的事儿。但是大多数概念尽管在逐渐发生时含意模糊不清，定义未知，但历经一段时间探讨和沉积以后，会慢慢产生一致的观点，例如云计算技术。而DT很有趣，它一开始的情况下，含意还较为确立，但伴随着科学研究的深层次，定义和内函却愈来愈模糊不清。此外，许多概念，尽管有各种不同的定义和表述，但大概的差别都取决于要不看难题的视角和着重点不一样，要不表述的详尽水平不一样，要不文本描述方法不一样，而概念自身所偏向的事情行为主体确是明确的。</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article7-1-1.png" style="max-width: 500px">
          </div>
          <br><P>孪生城市</P>
          <br><P>像DT那样，不一样的定义偏向不一样的行为主体，却不常见。DT一词，业内一般觉得，是由密西根大学MichaelGrieves专家教授于2002年对于商品项目生命周期管理方法(PLM)明确提出的一个概念，当时并不叫Digital Twin，只是叫镜像系统室内空间模型 (Mirrored Space Model, MSM)，之后NASA的John Vickers将其取名为Digital Twin[1]。其模型的特性是很清晰的，虽然那时候沒有造成过多关心，却也没什么模棱两可，DT便是一个智能化的模型。DT的行为主体变成了模拟仿真。還是这一汇报，非常确立地强调，NASA的Digital Twin便是“根据模拟仿真的自动化控制”。DT的行为主体又变成了自动化控制。ASA对DT的这种讲解大约是造成事后DT的定义和内函模棱两可的根本原因。大家何不例举一些有象征性的定义。</P>
          <P>(1) DT是物理机器设备的一个即时的数据团本[3]。</P>
          <P>(2) DT是有性命或无性命的物理实体线的数据团本。根据联接物理和虚幻世界，数据信息能够无缝拼接传送，进而促使虚似实体线与物理实体线另外存有[4]。</P>
          <P>(3) DT是对人力搭建的或地理环境中的财产、步骤或系统软件的数字表示[5]。</P>
          <P>(4) DT是财产和全过程的手机软件表明，用以了解，预测分析和提升特性以改进业务流程[6]。</P>
          <P>(5) DT是具体商品或步骤的虚似表明，用以了解和预测分析对应物的特性特性[7]。</P>
          <P>(6) DT是在云服务平台上运作的真正设备的藕合模型，并应用来源于数据驱动的剖析优化算法及其别的能用物理专业知识的一体化专业知识对身体状况开展模拟仿真[8]。</P>
          <P>(7) DT是物理对象或系统软件在其全部生命期中的动态性虚似表明，应用实时数据完成了解，学习培训和逻辑推理[9]。</P>
          <P>(8) DT应用物理系统软件的数据团本实行即时提升[10]。</P>
          <P>(9) DT是现实世界和数据虚幻世界沟通交流的公路桥梁[11]。</P>
          <br><P>下面的图是上边各种各样定义中所提及的和DT相关的每个一部分。包含①物理对象、②数据信息、③模型、④模拟仿真和⑤模拟仿真結果。</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article7-1-2.png" style="max-width: 500px">
          </div>
          <br><P>这种定义各自将DT偏向图上的不一样一部</P>
          <P>第一类：定义(1)~(5)将DT定义为数据团本、数字表示、手机软件表明或虚似表明，偏向③，即DT是一个随物理对象自动更新的模型，由于无论是数据团本、数字表示還是手机软件表明或虚似表明，都归属于模型的范围。</P>
          <P>第二类：定义(6)~(8)将DT偏向③和④，即DT是模型加模拟仿真。</P>
          <P>第三类：定义(9)将DT偏向②和⑤，即DT是联接物理对象和模型中间的公路桥梁。数字孪生是物理对象的数据模型，该模型能够根据接受来源于物理对象的数据信息而即时演变，进而与物理对象在项目生命周期保持一致。</P>
          <br><P>根据数字孪生可开展剖析、预测分析、确诊、训炼等(即模拟仿真)，并将模拟仿真結果意见反馈给物理对象，进而协助对物理对象开展提升和管理决策。物理对象、数字孪生及其根据数字孪生的模拟仿真及意见反馈一起组成一个信息内容物理系统软件 。朝向数字孪生项目生命周期(搭建、演变、评定、管理方法、应用)的技术性称之为数字孪生技术性。</P>
          <br><P style="font-weight: bold">2、数字孪生身后的模型和模拟仿真</P>
          <br><P>做为科学研究，大家必须选用一个有效的且沒有模棱两可的概念，而无须担心于NASA针对DT的表述。但针对NASA所提及的NASA Digital Twin的真正目地却不可以忽略。实际上很多人针对DT的激情和科学研究主观因素就来自于NASA Digital Twin为加工制造业的将来产生的无尽期待。尽管大家对NASA有关DT概念的表述并不认可，但换一个视角想一想，NASA实际上并沒有将DT作为一个严肃认真的学术研究专业术语来开展定义。其真实想表达的意思，是注重模拟仿真的使用价值，即NASA四轴飞行器研发必须遵照“根据模拟仿真的自动化控制”这一核心理念。</P>
          <br><P>数字孪生</P>
          <br><P>模拟仿真基本上是随着着电子信息技术的问世而造成的，自上世纪五十年代迄今，早已经历了六十多年的发展趋势。因为模拟仿真是以创建模型为基本的，因此为了更好地突显模型的必要性，模型和模拟仿真经常一起发生，即Modeling &amp;Simulation，常简称为M&amp;S。从下边这一段文本能够看得出英国对模型和模拟仿真的了解所做到的高宽比。</P>
          <br><P>这一段文本摘录自美国众议院于2007年7月16日根据的487号决定[14]。我们立足是一个杰出而兴盛的我国，而模型和模拟仿真巨大地推动了这一杰出和兴盛。</P>
          <br><P>在国外，模型和模拟仿真是电子信息科学和数学课的与众不同运用，它根据模型或模拟仿真的实效性、准确性和精确性，及其不计其数的外国人在模型和模拟仿真工作中开发设计这种模型的工作能力。政府部门、工业领域和学界的模型和模拟仿真行业的组员为英国的总体褔利作出了突显的奉献，下边的事例能够一部分反映模型和模拟仿真为英国作出的奉献，虽然这种奉献数不胜数：</P>
          <P>(1) 曼哈顿计划期内，根据最开始重现核链反应全过程的模拟仿真，扩展了对核裂变的了解，最后促使了第二次世界大战的完毕;</P>
          <P>(2) 做为“存货管理方案”的基本前提，使特朗普总统可以在没有开展真正核实验的状况下，保证 核弹库存量十年之上的安全系数和稳定性，并展现了我国对核不扩散的服务承诺。而在加工制造业，模型和模拟仿真也一直充分发挥着不可替代的功效。2000年，由英国DARPA、国家商务部、能源部门、NSF协同公布了一项国家级别加工制造业战略定位科学研究及推广方案“集成化生产制造技术路线图(IntegratedManufacturing Technology Roadmapping,IMTR)”。</P>
          <br><P>IMTR明确提出了将来加工制造业遭遇的6个“重特大挑戰”，即变成精湛、高效率的公司，提升回应顾客的公司，变成全方位互连的公司，维持自然环境可持续，开展知识管理系统，擅于运用新技术应用。可以看出，这六大挑戰放进今日也依然创立。IMTR从而明确提出了迎来这6大挑戰的4类技术性防范措施，即朝向生产制造的信息管理系统，模型和模拟仿真，生产制造加工工艺与武器装备，公司集成化。不难看出模型和模拟仿真针对加工制造业的必要性。模型和模拟仿真六十多年前问世于英国，并且一直都在为英国的国家主权充分发挥着无法估量的功效，但外国人从不把模型和模拟仿真拿出来蹭热点。在其中的缘故非常值得大家思索。</P>
          <br><P style="font-weight: bold">3、对数字孪生不适合过多演译，需头脑清醒的大脑</P>
          <br><P>数字孪生(digital twin)这个词往往可以爆红，非常大水平上归功于这个词自身的散播特点，它品牌形象，孔下，浅显易懂，即便行别人也可以从字面搞清楚个大约，并且还能引起无尽的想像。针对科谱或商业服务营销推广，的确是个好句好词。但做为一个学术研究专业术语，它却欠缺需有的精确性，最少到迄今为止依然这般。</P>
          <br><P>当今有二种趋向非常值得关心，一是在概念上把数字孪生的内函持续变大，授予愈来愈多的內容，导致与别的概念交叉式乃至重合;二是在运用上把传统式关键技术贴上数字孪生的标识。这二种趋向对数字孪生技术性的发展趋势也没有益处。如同前边说讲，数字孪生身后是模型和模拟仿真。数字孪生最诱惑的地区，是数据模型和物联网技术的融合，而这类融合的最后目地是为了更好地将模型打磨抛光得更为贴近真正系统软件。物联网为模型出示了一种新的强大的方式，并且在对复杂系统原理欠缺充足了解的状况下，还可根据所收集的数据信息运用人工智能技术技术性系统对开展模型。它是对模型技术性的发展趋势和填补。而根据模型的剖析、预测分析、训炼等主题活动，原本便是模拟仿真要做的事。因此数字孪生实质上是新一代信息科技在模型和模拟仿真中的运用。</P>
          <br><P>数字孪生</P>
          <br><P>历经一个半多新世纪的发展趋势，模型和模拟仿真早已产生了一个非常健全和系统软件的技术性管理体系。实际上，在模拟仿真行业，运用动态性实时数据开展模型和模拟仿真的方式和技术性早已科学研究很多年，如动态性数据驱动的模拟仿真(Dynamic Data Driven Simulations, DDDS)，内嵌式模拟仿真，硬件配置在控制回路的模拟仿真等。自然，数字孪生做为模拟仿真的关键內容，根据与新一代信息科技的结合，将进一步推动模型和模拟仿真的发展趋势。数字孪生的受欢迎，姓名起的好虽然很重要，但更关键的還是归功于西门子PLC、GE等领域商人们的助力。</P>
          <br><P>保持清醒的专业人士都清晰，数字孪生有关的关键技术大多数把握在老外手上，如传感器技术、CAD技术性、CAE技术性、PLM技术性、VR/AR技术性等。西门子PLC, Predix, 达索、PTC, SAP, Ansys等公司往往大肆渲染数字孪生的美丽动人市场前景和运用使用价值，是由于她们的确把握着数字孪生所务必的关键技术，而随着着数字孪生关注度的提高，真实畅销的全是这种公司的商品。工业领域对新概念的热衷于，都是有其本身的目地，内行人人都心照不宣。殊不知，上边提及的这种关键技术和商品刚好是在我国现阶段最欠缺的。</P>
          <br><P>但有趣的是，在中国，对数字孪生的科学研究却经常敷衍了事，关心的多是些外场的、单核心的物品，并且对其概念的激情远远地高过明确提出这一概念的英国及其别的工业生产资本主义国家。大家大部分時间热衷概念的蹭热点，说的多、做的少，做虚事情多，做事实儿少。实际上还是不知道，大家一轮一轮的呼喊，全是在为别人呐喊助威。</P>
          <br><P>总结：针对比较严重欠缺关键技术支撑点的大家，在热门词汇层出不穷的今日，应当头脑清醒的大脑。低头产品研发受制于人的核心技术才算是关键所在。不然，大家既消耗了資源，又消耗了時间，最后丧失的是发展趋势的很好机会和发展战略主导权。</P>
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
      articleTitle: '关于数字孪生的冷思考及其背后的技术',
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

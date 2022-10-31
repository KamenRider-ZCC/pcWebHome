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
          <P>今天的数字化技术正在不断地改变每一个企业。未来，所有的企业都将成为数字化的公司，这不只是要求企业开发出具备数字化特征的产品，更指的是通过数字化手段改变整个产品的设计、开发、制造和服务过程，并通过数字化的手段连接企业的内部和外部环境。</P>
          <br><P>随着产品生命周期的缩短、产品定制化程度的加强，以及企业必须同上下游建立起协同的生态环境，都迫使企业不得不采取数字化的手段来加速产品的开发，提高开发、生产、服务的有效性以及提高企业内外部环境的开放性。</P>
          <br><P>这种数字化的转变对于传统的工业企业来说可能会非常困难，因为它同沿用了几十年的基于经验的传统设计和制造理念相去甚远。设计人员可能不再需要依赖于通过开发实际的物理原型来验证设计理念，也无需通过复杂的物理实验才能验证产品的可靠性，不需要进行小批量试制就可以直接预测生产的瓶颈，甚至不需要去现场就可以洞悉销售给客户的产品运行情况。</P>
          <br><P>这种方式，无疑将贯穿整个产品的生命周期，不仅可以加速产品的开发过程，提高开发和生产的有效性和经济性，更有效的了解产品的使用情况并帮助客户避免损失，更能精准的将客户的真实使用情况反馈到设计端，实现产品的有效改进。</P>
          <br><P>而所有的这一切，都需要企业具备完整的数字化能力，而其中的基础，就是数字孪生，即Digital Twin技术。</P>
          <br><P>数字孪生的概念</P>
          <br><P>数字孪生，顾名思义，是指针对物理世界中的物体，通过数字化的手段来构建一个数字世界中一模一样的的实体，藉此来实现对物理实体的了解、分析和优化。</P>
          <br><P>01</P>
          <br><P>数字孪生概念的发展历史</P>
          <br><P>2002年密歇根大学教授Dr. Michael Grieves在发表的一篇文章中第一次提出了数字孪生概念，他认为通过物理设备的数据，可以在虚拟(信息)空间构建一个可以表征该物理设备的虚拟实体和子系统，并且这种联系不是单向和静态的，而是在整个产品的生命周期中都联系在一起。</P>
          <br><P>显然，这个概念不仅仅指的是产品的设计阶段，而延展至生产制造和服务阶段，但是由于当时的数字化手段有限，因此数字孪生的概念也只是停留在产品的设计阶段，通过数字模型来表征物理设备的原型。</P>
          <br><P>在那之后，数字孪生的概念逐步扩展到了模拟仿真、虚拟装配和3D打印这些领域，而到了2014年以后，随着物联网技术、人工智能和虚拟现实技术的不断发展，更多的工业产品、工业设备具备了智能的特征，而数字孪生也逐步扩展到了包括制造和服务在内的完整的产品周期阶段，并不断丰富着数字孪生的形态和概念。</P>
          <br><P>02</P>
          <br><P>数字孪生概念的不同形态</P>
          <br><P>数字孪生技术贯穿了产品生命周期中的不同阶段，它同PLM(Product Lifecycle Management)的理念是不谋而合的。可以说，数字孪生技术的发展将PLM的能力和理念，从设计阶段真正扩展到了全生命周期。</P>
          <br><P>数字孪生以产品为主线，并在生命周期的不同阶段引入不同的要素，形成了不同阶段的表现形态。</P>
          <br><P>设计阶段的数字孪生</P>
          <br><P>在产品的设计阶段，利用数字孪生可以提高设计的准确性，并验证产品在真实环境中的性能。</P>
          <br><P>这个阶段的数字孪生，主要包括如下功能：</P>
          <br><P>数字模型设计：使用CAD工具开发出满足技术规格的产品虚拟原型，精确的记录产品的各种物理参数，以可视化的方式展示出来，并通过一系列的验证手段来检验设计的精准程度;模拟和仿真：通过一系列可重复、可变参数、可加速的仿真实验，来验证产品在不同外部环境下的性能和表现，在设计阶段就验证产品的适应性。</P>
          <br><P>例如，在汽车设计过程中，由于对节能减排的要求，达索帮助包括宝马、特斯拉、丰田在内的汽车公司利用其CAD和CAE平台3D Experience，准确进行空气动力学、流体声学等方面的分析和仿真，在外形设计通过数据分析和仿真，大幅度地提升流线性，减少了空气阻力。</P>
          <br><P>制造阶段的数字孪生</P>
          <br><P>在产品的制造阶段，利用数字孪生可以加快产品导入的时间，提高产品设计的质量、降低产品的生产成本和提高产品的交付速度。</P>
          <br><P>产品阶段的数字孪生是一个高度协同的过程，通过数字化手段构建起来的虚拟生产线，将产品本身的数字孪生同生产设备、生产过程等其他形态的数字孪生高度集成起来，实现如下的功能：</P>
          <br><P>生产过程仿真：在产品生产之前，就可以通过虚拟生产的方式来模拟在不同产品、不同参数、不同外部条件下的生产过程，实现对产能、效率以及可能出现的生产瓶颈等问题的提前预判，加速新产品导入的过程;数字化产线：将生产阶段的各种要素，如原材料、设备、工艺配方和工序要求，通过数字化的手段集成在一个紧密协作的生产过程中，并根据既定的规则，自动的完成在不同条件组合下的操作，实现自动化的生产过程;同时记录生产过程中的各类数据，为后续的分析和优化提供依据。关键指标监控和过程能力评估：通过采集生产线上的各种生产设备的实时运行数据，实现全部生产过程的可视化监控，并且通过经验或者机器学习建立关键设备参数、检验指标的监控策略，对出现违背策略的异常情况进行及时处理和调整，实现稳定并不断优化的生产过程。</P>
          <br><P>例如，寄云科技为盖板电子玻璃产线构建的在线质量监控体系，充分采集了冷端和热端的设备产生的数据，并通过机器学习获得流程生产过程中关键指标的最佳规格，设定相应的SPC监控告警策略，并通过相关性分析，在几万个数据采集点中实现对特定的质量异常现象的诊断分析。</P>
          <br><P>服务阶段的数字孪生</P>
          <br><P>随着物联网技术的成熟和传感器成本的下降，很多工业产品，从大型装备到消费级产品，都使用了大量的传感器来采集产品运行阶段的环境和工作状态，并通过数据分析和优化来避免产品的故障，改善用户对产品的使用体验。</P>
          <br><P>这个阶段的数字孪生，可以实现如下的功能：</P>
          <br><P>远程监控和预测性维修：通过读取智能工业产品的传感器或者控制系统的各种实时参数，构建可视化的远程监控，并给予采集的历史数据，构建层次化的部件、子系统乃至整个设备的健康指标体系，并使用人工智能实现趋势预测;基于预测的结果，对维修策略以及备品备件的管理策略进行优化，降低和避免客户因为非计划停机带来的损失;优化客户的生产指标：对于很多需要依赖工业装备来实现生产的工业客户，工业装备参数设置的合理性以及在不同生产条件下的适应性，往往决定了客户产品的质量和交付周期。而工业装备厂商可以通过海量采集的数据，构建起针对不同应用场景、不同生产过程的经验模型，帮助其客户优化参数配置，以改善客户的产品质量和生产效率。产品使用反馈：通过采集智能工业产品的实时运行数据，工业产品制造商可以洞悉客户对产品的真实需求，不仅能够帮助客户加速对新产品的导入周期、避免产品错误使用导致的故障、提高产品参数配置的准确性，更能够精确的把握客户的需求，避免研发决策失误。</P>
          <br><P>例如，寄云科技在为石油钻井设备提供的预测性维修和故障辅助诊断系统，不仅能够实时采集钻机不同关键子系统，如发电机、泥浆泵、绞车、顶驱的各种关键指标数据，更能够根据历史数据的发展趋势，对关键部件的性能进行评估，并根据部件性能预测的结果，调整和优化维修的策略;同时，还能够根据钻机的实时状态的分析，对钻井的效率进行评估和优化，能够有效的提高钻井的投入产出比。</P>
          <br><P>数字孪生的意义</P>
          <br><P>自概念提出以来，数字孪生技术在不断的快速演化，无论是对产品的设计、制造还是服务，都产生了巨大的推动作用。</P>
          <br><P>01</P>
          <br><P>更便捷，更适合创新</P>
          <br><P>数字孪生通过设计工具、仿真工具、物联网、虚拟现实等各种数字化的手段，将物理设备的各种属性映射到虚拟空间中，形成可拆解、可复制、可转移、可修改、可删除、可重复操作的数字镜像，这极大的加速了操作人员对物理实体的了解，可以让很多原来由于物理条件限制、必须依赖于真实的物理实体而无法完成的操作，如模拟仿真、批量复制、虚拟装配等，成为触手可及的工具，更能激发人们去探索新的途径来优化设计、制造和服务。</P>
          <br><P>02</P>
          <br><P>更全面地测量</P>
          <br><P>只要能够测量，就能够改善，这是工业领域不变的真理。无论是设计、制造还是服务，都需要精确的测量物理实体的各种属性、参数和运行状态，以实现精准的分析和优化。</P>
          <br><P>但是传统的测量方法，必须依赖于价格不菲的物理测量工具，如传感器、采集系统、检测系统等，才能够得到有效的测量结果，而这无疑会限制测量覆盖的范围，对于很多无法直接采集到测量值的指标，往往无能为力。</P>
          <br><P>而数字孪生技术，可以借助于物联网和大数据技术，通过采集有限的物理传感器指标的直接数据，并借助大样本库，通过机器学习推测出一些原本无法直接测量的指标。</P>
          <br><P>例如，我们可以利用润滑油温度、绕组温度、转子扭矩等一系列指标的历史数据，通过机器学习来构建不同的故障特征模型，间接推测出发电机系统的健康指标。</P>
          <br><P>03</P>
          <br><P>更全面的分析和预测能力</P>
          <br><P>现有的产品生命周期管理，很少能够实现精准的预测，因此往往无法对隐藏在表象下的问题提前进行预判。</P>
          <br><P>而数字孪生可以结合物联网的数据采集、大数据的处理和人工智能的建模分析，实现对当前状态的评估、对过去发生问题的诊断，以及对未来趋势的预测，并给予分析的结果，模拟各种可能性，提供更全面的决策支持。</P>
          <br><P>04</P>
          <br><P>经验的数字化</P>
          <P>在传统的工业设计、制造和服务领域，经验往往是一种模糊而很难把握的形态，很难将其作为精准判决的依据。而数字孪生的一大关键进步，是可以通过数字化的手段，将原先无法保存的专家经验进行数字化，并提供了保存、复制、修改和转移的能力。</P>
          <br><P>例如，针对大型设备运行过程中出现的各种故障特征，可以将传感器的历史数据通过机器学习训练出针对不同故障现象的数字化特征模型，并结合专家处理的记录，将其形成未来对设备故障状态进行精准判决的依据，并可针对不同的新形态的故障进行特征库的丰富和更新，最终形成自治化的智能诊断和判决。</P>
          <br>
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
      articleTitle: '一文读懂数字孪生的应用及意义',
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

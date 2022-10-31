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
          <br><P>“中国制造2025”这个雄心勃勃的计划企图让中国在“先进制造”中取得世界领先地位，无论其成功与否，将会对全球产生影响。“中国制造2025”战略计划是一个由中国政府订定的积极策略，旨在让国家制造业摆脱低成本劳动力的竞争。中国打算透过采用最新技术并发展国内创新和研发能力，与欧洲和北美的高附加价值制造业竞争。</P>
          <br><P>与欧洲的先进制造策略相较，“中国制造2025”表现如何?随着此战略计划的发展，欧洲企业又将受到什么影响?</P>
          <br><P style="font-weight: bold">工业4.0</P>
          <br><P>欧盟称下一代智能制造(smart manufacturing)为工业4.0，将其视为第四次工业革命(通过蒸气达到机械化、应用电力和大规模生产，与最近的工业机械的电子自动化);虽然在美国倾向于将工业4.0视为机器连结性和工业物联网(IIoT)，但实际上其所涵盖的范围要大得多。</P>
          <br><P>工业4.0包括复杂的传感器网络、机器对机器通讯、积层制造(additive manufacturing;编按：即3D打印)、机器人技术、机器智慧、分析和云端技术。这些网宇实体系统(CPS)将会监控工厂流程并进行分散的自主决策，使工厂更智慧和自动化。</P>
          <br><P>工业4.0运动在2010年始于德国;当时德国联邦政府发布了“2020年高科技策略行动计划”，该计划最初规划2012到2015年的预算为84亿欧元(相当于98亿美元)，提供给计划中的10个项目项目，其中之一即为工业4.0。虽然其他欧洲国家正将工业4.0技术导入到制造业，但德国在该领域仍遥遥领先，部分原因在于德国在工业嵌入式系统方面的强大能力以及政府的支持。</P>
          <br><P>为了监督工业4.0的架构，Plattform Industrie 4.0产业组织于2013年成立，为德国商业协会所组成的团体，旨在开发技术和标准以及商业和组织模式，并促进跨产业理念交流。其工作小组目前正在起草系统参考架构和通讯标准，解决网络安全、员工教育和训练等问题，并且以目前的、以人为中心的法律架构来评估机会和风险。</P>
          <br><P>2016年欧盟发布的报告指出：“虽然许多会员国正在实行工业4.0，但是德国在实行上以非常目标性、协调和结构化的方式进行。因此，工业4.0的确具备全面性与宏伟规划，似乎非常适合德国。在某些欧盟会员国中，特别是奥地利、比利时、丹麦、芬兰、法国、意大利、荷兰、葡萄牙、西班牙、瑞典和英国，具有很强大的支持和兴趣。但他们的计划只有在少数情况下与德国一样具备全面性。”</P>
          <br><P>事实上，德国在这方面的发展相当先进，在德国的公司已经着眼于下一步：工业环境中的机器智能(machine intelligence)。如IBM在今年稍早于德国慕尼黑建立了华生物联网生态系统(Watson IoT Ecosystem)全球总部，选址在该处的部分原因就是为了工业4.0。</P>
          <br><P>IBM的Watson IoT Ecosystem副总裁暨该生态系统慕尼黑总部负责人Niklaus Waser表示：“德国和巴伐利亚在采用和开发物联网技术方面被公认为全球领导者，部分原因即为工业4.0。德国拥有一些最创新的汽车、制造和工业公司，这些公司都需要采取策略来处理他们产品所产生的大量数据。这是一个全球性的现象，基于邻近的优势，我们相信在慕尼黑这个地方将能促成更多的合作和加速创新。”</P>
          <br><P>Waser表示，人工智能(AI)对于工业应用来说是很自然的结合：“通过结合实体和数字系统，利用机器连接所产生的信息，以及应用分析和感知运算来改变营运绩效，以实现感知物联网(cognitive IoT)和工业 4.0的可能性。”</P>
          <br><P>IBM的物联网平台在上一季增加了超过50个客户，而平台开发人员的人数自今年初开放以来已经得到两位数的成长。在工业领域，IBM与瑞士苏黎世的工业数字化解决方案供货商ABB合作，使感知运算成为ABB Ability连网机器平台的一部分，不仅让工业机器收集数据，也使用人工智能来分析和理解数据，然后根据这些资料的推理来采取适当的行动。例如透过Watson超级计算机分析ABB机器的实时生产影像来寻找缺陷[WL5]。</P>
          <br><P>公用事业正利用Watson物联网技术，依据历史和天气数据来预测电网的供给模式，以优化负载管理并实现实时定价模式。Watson物联网技术也被用于汽车轴承大厂Schaeffler Group，透过来自云端的认知洞察(cognitive insights)加强预防性维修系统，可以测量智能轴承的振动、温度、扭矩和速度，而Watson物联网技术则使用那些数据来预测和防止故障。</P>
          <br><P style="font-weight: bold">中国制造2025 VS 工业4.0</P>
          <br><P>表面上，工业4.0似乎与“中国制造2025”相似，但后者涵盖范围更广。工业4.0是以技术为重点，旨在开发技术，并将其应用于工厂，以及协同所有要素一起运作，“中国制造2025”不仅限于中国制造业的全面重组。而虽然德国和其他欧盟国家政府支持工业4.0，“中国制造2025”则涉及北京政府更高层级官员的参与，提供官方的赞助和法律上的自由度。</P>
          <br><P>市场研究机构ABI Research的机器人研究总监Dan Kara指出这两个计划背后的驱动力有明显的不同;“中国制造2025”发起的主要动机在于中国经济到达了刘易斯转折点(Lewis turning point)，意思是进入工业化时，原本较低开发国家的低成本劳动力供给短缺，工资开始提高。</P>
          <br><P>中国在劳动力规模方面也出现了大幅度的波动，这是在二次世界大战后工业化阶段的日本不可能看到的现象;Kara表示：“劳工被支付多少薪水并不重要，中国的劳动力市场处于波动现象;例如在假日后的劳动力迅速流失，人们就是不回去上班，或是返回他们家乡的村庄/城镇。”这些劳工问题刺激中国政府提升工厂自动化，包括采用机器人。因此才有“中国制造2025”战略计划的催生。</P>
          <br><P>相反地，欧洲的劳动力成本一直很高，但人力来源相对稳定，Kara表示：“欧洲国家已经有高技术水准的制造商，他们面临的问题为制造业的生产数量与国内生产总值(GDP)。”</P>
          <br><P>在欧洲，制造业的工资高，所以欧洲国家想要透过制造业经济活动来增加GDP，意味着得雇用更多劳工或是提高生产率;但欧盟不如印度和泰国等地拥有大量劳工，移民率又低于美国，在提升生产力方面有一定难度。因此，欧盟开始朝向自动化生产发展，以提升生产力，运用诸如能与人类并肩工作与互动的协同机器人(collaborative robots)等科技。</P>
          <br><P style="font-weight: bold">技术移转</P>
          <br><P>随着欧盟开始推展工业4.0，也注意到“中国制造2025”对欧洲企业的潜在影响;市场研究机构MarketsandMarkets的电子与半导体部门研究分析师Anand Shanker预测：““中国制造2025”致力于提高当地企业在国内和国际上的竞争力，以减少进口，甚至会影响外国公司在全球的市场占有率。”</P>
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
      articleTitle: '工业4.0和AI与工业结合发展的介绍',
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

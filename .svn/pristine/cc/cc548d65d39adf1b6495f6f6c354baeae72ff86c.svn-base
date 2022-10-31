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
          <p style="font-weight: bold">AIoT概念</p><br>
          <p>AIoT（人工智能物联网）=AI（人工智能）+IoT（物联网）。AIoT融合AI技术和IoT技术，通过物联网产生、收集来自不同维度的、海量的数据存储于云端、边缘端，再通过大数据分析，以及更高形式的人工智能，实现万物数据化、万物智联化。物联网技术与人工智能相融合，最终追求的是形成一个智能化生态体系，在该体系内，实现了不同智能终端设备之间、不同系统平台之间、不同应用场景之间的互融互通，万物互融。除了在技术上需要不断革新外，与AIoT相关的技术标准、测试标准的研发、相关技术的落地与典型案例的推广和规模应用也是现阶段物联网与人工智能领域亟待突破的重要问题。</p><br>
          <p>广泛的定义来看，AIoT就是人工智能技术与物联网在实际应用中的落地融合。它并不是新技术，而是一种新的IoT应用形态，从而与传统IoT应用区分开来。如果物联网是将所有可以行使独立功能的普通物体实现互联互通，用网络连接万物，那AIoT则是在此基础上赋予其更智能化的特性，做到真正意义上的万物互联。</p><br>
          <p>随着AI、IoT、云计算、大数据等技术的快速发展，和在众多产业中的垂直产业落地应用，AI与IoT在实际项目中的融合落地变得越来越多。AIoT作为一种新的IoT应用形态存在，与传统的IoT区别在，传统的物联网是通过有线和无线网络，实现物-物、人-物之间的相互连接，而AIoT不仅是实现设备和场景间的互联互通，还要实现物-物、人-物、物-人、人-物-服务之间的连接和数据的互通，以及人工智能技术对物联网的赋能进而实现万物之间的相互融合。使得用户获得更加个性化的更好的使用体验、更好的操作感受。最终目的是让用户或使用方获得：“安全、简单、便捷、舒适的体验”。</p><br>
          <p>无论是AI，还是物联网，都离不开一个关键词：数据。</p><br>
          <p>数据是万物互联、人机交互的基础。AI的介入让IoT有了连接的“大脑”。同样，归功于当前存储技术发展，让数据有了基本的“后勤保障”。云服务的快速扩张，则让数据有了发挥价值的物质基础。</p><br>
          <p>AI、IoT“一体化”后，“人工智能”逐渐向“应用智能”发展。深度学习需要物联网的传感器收集，物联网的系统，也需要靠人工智能做到正确的辨识、发现异常、预测未来，由此可见，人工智能结合物联网(AIoT)是接下来的重大发展，而这样的发展，影响到各行各业，甚至会进行产业颠覆，也就是说，接下来AIoT服务，将在我们身边大量出现。</p><br>
          <p style="font-weight: bold">AIoT，如何赋能工业制造</p><br>
          <p>对于第四次工业革命，大家应该都有所了解。这是一次以人工智能、虚拟现实、石墨烯、基因技术、量子信息、可控核聚变、清洁能源以及生物技术为突破口的工业革命。</p><br>
          <p>站在工业制造业的角度来说，它最大的变化，就是数字智能技术的深入应用，以及工业互联网（Industrial Internet）的引入。</p><br>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article1-1-1.png" style="max-width: 500px">
          </div>
          <p>工业互联网，完全不同于我们每天使用的手机互联网（消费互联网）。它是行业互联网的代表，也是新一代ICT（信息通信）技术与OT（工业操作）技术的深度融合。</p><br>
          <p>工业互联网既是工业基础设施的数字化升级，也是工业流程和工业经济生态的演进。通过工业互联网对人、机、物、系统等的全面连接，可以构建覆盖全产业链、全价值链的全新制造和服务体系。这个体系，以信息化、网络化、智能化为基础。它的驱动力，除了化石燃料和电力之外，还包括算力和连接力。</p><br>
          <p>在算力和连接力的帮助下，工业制造分工协作将会进一步细化，生产流程也会被深度优化。生产过程中的研发、生产、质控和维保等环节，都会由人工控制，改为算力控制。算力的终极表现形式，就是AI人工智能。</p><br>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article1-1-2.png" style="max-width: 500px">
          </div>
          <p>想要实现真正的数字智能，离不开这么几个重要元素：</p><br>
          <p>首先，必须拥有性能强大的数据采集设备，包括超高分辨率的摄像头，超细精度的传感器，等等。数据采集设备是数据之源。没有数据，一直都免谈。</p><br>
          <p>其次，我们需要高性能且无处不在的通信网络。</p><br>
          <p>一个完整的网络，包括终端和网络侧设备。终端这边决定网络性能的，就是模组。</p><br>
          <p>近年来，随着时代的发展，无线通信技术在通信能力上已经大幅追近了与有线通信技术之间的差距。而且，无线技术本身还有灵活部署、免布线覆盖的优势，所以，正在工业制造、物流运输、教育医疗、城市治理方面广泛应用。</p><br>
          <p>最后，就是强大的算力平台。</p><br>
          <p>借助模组和网络，数据得以畅通流动，进入云端。云端结合大数据分析，对海量的IoT数据进行处理，通过在这些数据上构建合适的算法模型，就能实现生产流程的智能化，用高效的AI取代人工，提升效率，降低成本。</p><br>
          <p>值得一提的是，AI算力的运用，既可以在云计算中心完成，也可以在边缘计算节点完成，甚至可以在具有AIoT能力的通信模组上直接完成。</p><br>
          <p>数智时代的通信模组，不仅通信能力强，算力也在不断增强，可以承担越来越多的端计算任务，包括人工智能算法的运行。</p><br>
          <p>而大唐融合在此方面就拥有极其强大的大数据处理平台，在其强大的算力赋能下的工业互联网平台更具备极其优秀的性能和拓展性。</p><br>
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
      articleTitle: 'AIoT概念',
      authorName: '张三',
      articleTime: '2021-07-21 16:25:53',
      viewNumber: '742',
      infoNumber: '7',
      // abstract: '【摘要】 AIoT（人工智能物联网）=AI（人工智能）+IoT（物联网）。',
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

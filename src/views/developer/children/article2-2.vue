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
          <P style="font-weight: bold">构建单体应用</P><br>
          <P>假设我们要开发一款全新的软件。在前期的会议和需求整理后，你要么需要手动创建一个新项目，要么可以使用 Rails、Spring Boot、Play 或者 Maven 来生成。这个新应用可能采用了六边形架构模块，如下图所示：</P><br>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article2-2-1.png" style="max-width: 500px">
          </div>
          <P>应用的核心是商业逻辑，它由定义服务、域对象和事件各模块来完成。各种适配器围绕核心与外部交互。适配器包括数据库访问组件、生成和 consume 信息的消息组件，以及提供 API 或者 UI 访问支持的 web 模块。</P>
          <br>
          <P>尽管拥有逻辑缜密的模块化设计，整个应用仍然以整体打包和部署，实际格式依赖于应用的语言和框架。譬如，许多 Java 应用被打包为 WAR 文件，部署在 Tomcat 或者 Jetty 这样的应用服务器。有些 Java 应用本身就是包涵 JARs 的软件包。与此类似，Rails 和 Node.js 应用也通过目录层级打包。</P>
          <br>
          <P>采用此种风格的应用非常普遍。由于 IDE 和其他工具擅长构建单一应用，这类应用也易于部署。这类应用也非常容易测试。你可以非常轻松地进行端到端测试，使用 Seleniu 测试 UI 。整体应用也便于部署，只需将软件包复制到服务器。你也可以通过运行多个包和负载均衡实现扩展。在项目早期这么做非常有效。</P>
          <br>
          <P style="font-weight: bold">踏入单体架构的地狱</P><br>
          <P>很不幸，这一简单的方法有着巨大的局限。成功的应用最终会随着时间变得巨大。在每个 sprint 阶段，开发团队都会新加许多行代码。几年后，原本小而简单的应用会变得臃肿。举个极端的例子，我最近与一位开发者交流，他正在开发一款小工具，来分析他们应用(包括几百万行代码)中的几千个 JARs 的依赖。我相信每年都会有大量开发者不遗余力地对付这种麻烦。</P>
          <br>
          <P>一旦你的应用变得庞大、复杂，你的开发团队将饱受折磨，苦苦挣扎于敏捷开发和交付。一大原因就是应用已经格外复杂，庞大到任何一个开发者都无法完全理解。最后，修复 bug 和实施新功能也就极其困难且耗时颇多。更可怕的是，这是一个向下的螺旋发展。代码库越难理解，正确的修改就越难。最后你会深陷庞大的、无法估量的泥淖之中。</P>
          <br>
          <P>而这种应用的尺寸也会拖慢开发进度。应用越大，启动时间越长。譬如在最近的调查中，不少开发者指出启动时间长达 12 分钟。我也听说有的应用启动时间居然得 40 分钟。如果开发者不得不频繁重启应用服务器，那大量时间就被浪费，生产效率也饱受其害。</P>
          <br>
          <P>庞大且复杂的单体应用的另一大问题就是难以进行持续部署。现在， SaaS 应用的发展水平足以在单日内多次将修改推送到生产环境。然而要让复杂的单个应用达到此水平却极为棘手。想更新应用的单个部分，必须重新部署整个应用，漫长的启动时间更是雪上加霜。另外，由于不能完全预见修改的影响，你不得不提前进行大量人工测试。结果就是，持续部署变得不可能。</P>
          <br>
          <P>如果单体应用的不同模块在资源需求方面有冲突的话，那应用的扩展也很难。比如，模块之一需要执行 CPU-intensive 图像处理逻辑，最好部署到 AWS 的 EC2 Compute Optimized instances;而另一模块需要内存数据库，最好适配 EC2 Memory-optimized instances。由于这两个模块需要共同部署，你不得不在在硬件选择方面做妥协。</P>
          <br>
          <P>单体应用的另一问题就是可靠性。由于所有模块都运行在同一进程中，任何模块中的一个 bug，比如内存泄漏都可能弄垮整个进程;此外，由于应用中的所有实例都是唯一，这个 bug 将影响整个应用的可用性。</P>
          <br>
          <P>最后，单体应用会让采用新框架和语言极其困难。举例来说，你有两百万行使用 XYZ 框架的代码，如果要使用 ABC 框架重写代码，无论时间还是成本都将非常高昂，即便新框架更好。这也就成为使用新技术的阻碍。</P>
          <br>
          <P>总结：这个一开始曾经成功关键业务应用，最终却变成一个臃肿的、无法理解的庞然大物。它使用老旧、陈腐、低效的技术，几乎吸引不到出色的开发者。这个应用非常难于扩展，也不稳定可靠。最终，敏捷开发和交付几乎成为不可能。</P>
          <br>
          <P style="font-weight: bold">你该何去何从?</P><br>
          <P style="font-weight: bold">微服务架构的好处</P><br>
          <P>微服务架构模式有很多好处。首先，通过分解巨大单体应用为多个服务方法解决了复杂性问题。在功能不变的情况下，应用被分解为多个可管理的分支或服务。每个服务都有一个用 RPC- 或者消息驱动 API 定义清楚的边界。微服务架构模式给采用单体式编码方式很难实现的功能提供了模块化的解决方案，由此，单个服务很容易开发、理解和维护。</P>
          <br>
          <P>第二，这种架构使得每个服务都可以有专门开发团队来开发。开发者可以自由选择开发技术，提供 API 服务。当然，许多公司试图避免混乱，只提供某些技术选择。然后，这种自由意味着开发者不需要被迫使用某项目开始时采用的过时技术，他们可以选择现在的技术。甚至于，因为服务都是相对简单，即使用现在技术重写以前代码也不是很困难的事情。</P>
          <br>
          <P>第三，微服务架构模式使得每个微服务独立部署，开发者不再需要协调其它服务部署对本服务的影响。这种改变可以加快部署速度，譬如 UI 团队可以采用 AB 测试并快速部署变化。微服务架构模式使得持续化部署成为可能。</P>
          <br>
          <P>最后，微服务架构模式使得每个服务独立扩展。你可以根据每个服务的规模来部署满足需求的实利。甚至于，你可以使用更适合于服务资源需求的硬件。比如，你可以在 EC2 Compute Optimized instances 上部署 CPU 敏感的服务，而在 EC2 memory-optimized instances 上部署内存数据库。</P>
          <br><P style="font-weight: bold">微服务架构的不足</P><br>
          <P>Fred Brooks 在 30 年前写道 “there are no silver bullets”，像任何其它科技一样，微服务架构也有不足。其中一个跟他的名字类似，“微服务”强调了服务大小，实际上，有一些开发者鼓吹建立稍微大一些的，10-100 LOC服务组。尽管小服务更乐于被采用，但是不要忘了微服务只是结果，而不是最终目的。微服务的目的是有效的拆分应用，实现敏捷开发和部署。</P>
          <br><P>另外一个不足之处在于，微服务应用是分布式系统，由此会带来固有的复杂性。开发者需要在 RPC 或者消息传递之间选择并完成进程间通讯机制。此外，他们必须写代码来处理消息传递中速度过慢或者不可用等局部失效问题。当然这并不是什么难事，但相对于单体式应用中通过语言层级的方法或者进程调用，微服务下这种技术显得更复杂一些。</P>
          <br><P>另外一个关于微服务的挑战来自于分区的数据库架构。同时更新多个业务主体的事务很普遍。这种事务对于单体式应用来说很容易，因为只有一个数据库。在微服务架构应用中，需要更新不同服务所使用的不同的数据库。使用分布式事务并不一定是好的选择，不仅仅是因为 CAP 理论，还因为当前高扩展性的 NoSQL 数据库和消息传递中间件并不支持这一需求。最终你不得不使用一个最终一致性的方法，从而对开发者提出了更高的要求和挑战。</P>
          <br><P>测试一个基于微服务架构的应用也是很复杂的任务。比如，对于采用流行的 Spring Boot 架构的单体式 web 应用，测试它的 REST API，是很容易的事情。反过来，同样的服务测试需要启动与它有关的所有服务(至少需要这些服务的 stubs)。再重申一次，不能低估了采用微服务架构带来的复杂性。</P>
          <br><P>另外一个挑战在于，微服务架构模式应用的改变将会波及多个服务。比如，假设你在完成一个案例，需要修改服务A、B、C，而 A 依赖 B，B 依赖 C。在单体应用中，你只需要改变相关模块，整合变化，部署就好了。对比之下，微服务架构模式就需要考虑相关改变对不同服务的影响。比如，你需要更新服务 C，然后是 B，最后才是 A。幸运的是，许多改变一般只影响一个服务，而需要协调多服务的改变很少。</P>
          <br><P>部署一个微服务应用也很复杂，一个单体应用只需要在复杂均衡器后面部署各自的服务器就好了。每个应用实例是需要配置诸如数据库和消息中间件等基础服务。相比之下，一个微服务应用一般由大批服务构成。根据 Adrian Cockcroft 的分享，Hailo 由 160 个不同服务构成，而 NetFlix 则超过 600 个服务。每个服务都有多个实例，这就形成大量需要配置、部署、扩展和监控的部分。除此之外，你还需要完成一个服务发现机制(后续文章中发表)，以用来发现与它通讯服务的地址(包括服务器地址和端口)。传统的解决问题办法并不能解决这么复杂的问题。最终，成功部署一个微服务应用需要开发者有足够的控制部署方法，并高度自动化。</P>
          <br>
          <P>自动化的方法之一是使用譬如 Cloud Foundry 这样的 PaaS 服务。PaaS 能让开发者轻松部署和管理微服务，让他们无需为获取并配置 IT 资源劳神。同时，配置 PaaS 的系统和网络专家可以采用最佳实践和策略来简化这些问题。另外一个自动部署微服务应用的方法是开发自己的基础 PaaS 系统。通常的起步方式是 Mesos 或 Kubernetes 这样的集群管理方案，配合 Docker 使用。作为一种基于软件的应用交付方法，NGINX 能够方便地在微服务层面提供缓冲、权限控制、API 统计、以及监控。我们会在后续的文章中分析它如何解决这些问题。</P>
          <br><P>总结</P><br>
          <P>构建复杂的应用的确非常困难。单体式的架构更适合轻量级的简单应用。如果你用它来开发复杂应用，那真的会很糟糕。微服务架构模式可以用来构建复杂应用，当然，这种架构模型也有自己的缺点和挑战。</P>
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
      articleTitle: '微服务在项目开发中的优劣势',
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

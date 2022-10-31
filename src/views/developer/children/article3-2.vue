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
          <br><P style="font-weight: bold">说明</P>
          <br><P>先通过一个hello world程序直观感受一下k8s</P>
          <br><P>程序部署在宿主机，容器和k8s三种环境，对比他们的差异</P>
          <br><P>代码大致是这个样子</P>
          <br><P>@RestController</P>
          <P>public class K8sDemoController {</P>
          <P>@GetMapping("/hello")</P>
          <P>public String hello(){</P>
          <P>return "hello k8s demo.";</P>
          <P>}</P>
          <P>}</P>
          <br><P style="font-weight: bold">1. 宿主机上如何运行</P>
          <br><P>mvn编译代码打成jar包</P>
          <br><P>执行java -jar k8s-demo.jar &amp;</P>
          <br><P>浏览器中输入 http://10.1.69.101:8080/hello 地址访问服务</P>
          <br><P style="font-weight: bold">2. Docker容器上如何运行</P>
          <br><P>mvn编译代码打成jar包</P>
          <br><P>将jar包打成docker镜像</P>
          <br><P>执行docker run --name k8s-demo -d -p 8080:8080 k8s-demo:0.0.1-SNAPSHOT</P>
          <br><P>浏览器中输入 http://10.1.69.101:8080/hello 地址访问服务</P>
          <br><P style="font-weight: bold">在k8s中如何运行</P>
          <br><P>这一步大致感受一下yaml的样子，不需要关心脚本的细节，后面介绍资源时会细说。只需要有个大体的印象，部署一个k8s服务的基本流程。</P>
          <br><P>1. mvn编译代码打成jar包</P>
          <br><P>2. 将jar包打成docker镜像</P>
          <br><P>3. 构建一个运行服务的yaml文件</P>
          <br><P>4. 执行kubectl apply -f k8s-demo.yaml</P>
          <br><P>5. 浏览器中输入 www.k8s-demo.com/hello 地址访问服务</P>
          <br><P>· yaml文件内容</P>
          <P># 文件名为k8s-demo.yaml</P>
          <P>apiVersion: extensions/v1beta1</P>
          <P>kind: Deployment</P>
          <P>metadata:</P>
          <P>name: k8s-demo</P>
          <P>namespace: spring-test</P>
          <P>spec:</P>
          <P>replicas: 3</P>
          <P>template:</P>
          <P>metadata:</P>
          <P>labels:</P>
          <P>app: k8s-demo</P>
          <P>spec:</P>
          <P>containers:</P>
          <P>- name: k8s-demo</P>
          <P>image: k8s-demo:0.0.1-SNAPSHOT</P>
          <P>ports:</P>
          <P>- containerPort: 8080</P>
          <P>---</P>
          <P>apiVersion: v1</P>
          <P>kind: Service</P>
          <P>metadata:</P>
          <P>name: k8s-demo</P>
          <P>namespace: spring-test</P>
          <P>spec:</P>
          <P>type: NodePort</P>
          <P>selector:</P>
          <P>app: k8s-demo</P>
          <P>ports:</P>
          <P>- protocol: TCP</P>
          <P>port: 8888</P>
          <P>targetPort: 8080</P>
          <P>nodePort: 30003</P>
          <P>---</P>
          <P>apiVersion: extensions/v1beta1</P>
          <P>kind: Ingress</P>
          <P>metadata:</P>
          <P>name: k8s-demo</P>
          <P>namespace: spring-test</P>
          <P>spec:</P>
          <P>rules:</P>
          <P>- host: www.k8s-demo.com</P>
          <P>http:</P>
          <P>paths:</P>
          <P>- path: /hello</P>
          <P>backend:</P>
          <P>serviceName: k8s-demo</P>
          <P>servicePort: 8888</P>
          <br><P>复制代码</P>
          <br><P style="font-weight: bold">4. 总结三种部署方式</P>
          <br><P>· 三种部署方式高清图</P>
          <br><P>为了减少部署复杂度，代码并没有使用redis，只是实例图增加了redis</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article3-2-1.png" style="max-width: 500px">
          </div>
          <br><P style="font-weight: bold">5. 流程越来越复杂，为什么不直接部署在宿主机?</P>
          <br><P>5.1 容器比宿主机优势在哪?</P>
          <br><P>· 可移植性：容器提供了运行应用程序的基本包装，可以在任何支持容器的云上部署</P>
          <br><P>· 高效率：启动一个容器只需一个镜像，且启动时间非常短</P>
          <br><P>· 隔离性：宿主机上往往安装很多服务，且各自依赖不一样。而一个容器只跑一个服务</P>
          <br><P>· 版本控制：方便追溯不同版本差异，方便快速回滚，只需替换镜像版本，无需宿主机上一套复杂的流程</P>
          <br><P>· 低成本：小巧轻便，不需要像宿主机或虚拟机一样占用很多资源</P>
          <br><P>5.2 k8s的出现又解决了容器的什么问题?</P>
          <br><P>· 自动编排调度：大量容器剧增后，如何管理、如何调度的问题</P>
          <br><P>· 分布式解决方案：节点可水平扩展，容器可方便扩缩容</P>
          <br><P>· 自愈能力：故障自动发现，并进行自我修复</P>
          <br><P>我们说容器实现了单个应用程序的基本包装实现可移植。上图中，宿主机部署的方式如果加上一个nginx做反向代理，就和k8s中ingress的部署方式是一样的。也就是k8s实现了整套分布式应用的可移植</P>
          <br><P style="font-weight: bold">二. 基本架构和原理</P>
          <br><P>· k8s架构图简版</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article3-2-2.png" style="max-width: 500px">
          </div>
          <br><P>· k8s数据流转图</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article3-2-3.png" style="max-width: 500px">
          </div>
          <br><P>1. Master节点的组件</P>
          <br><P>apiServer</P>
          <br><P>· 提供资源操作的唯一入口，提供api注册、发现、认证、访问控制等功能</P>
          <br><P>etcd</P>
          <br><P>· 一个key-value数据库</P>
          <br><P>· 保存整个机器的状态</P>
          <br><P>controller-manager</P>
          <br><P>· 负责维护机器状态，比如：自动扩容、故障检查、滚动更新</P>
          <br><P>· 实现集群自动化的关键组件</P>
          <br><P>scheduler</P>
          <br><P>· 负责资源调度</P>
          <br><P>· 将未分配节点的pod调度到合适的节点上</P>
          <br><P>2. Node节点的组件</P>
          <br><P>kubelet</P>
          <br><P>· 负责容器生命周期管理，比如：创建、删除</P>
          <br><P>· 同时负责Volume，网络的管理</P>
          <br><P>kube-proxy</P>
          <br><P>· 负责为Service提供负载均衡、服务发现</P>
          <br><P>Container Runtime</P>
          <br><P>· 容器运行环境</P>
          <br><P>· 默认是Docker，同时还支持其他容器引擎</P>
          <br><P style="font-weight: bold">三. 总结</P>
          <br><P>· 本文先通过一个demo，部署在不同的环境中，直观感受了如何使用k8s。这个过程我们需要思考k8s诞生解决了什么问题?核心的提供了一个平台，主要负责容器的自动调度和编排</P>
          <br><P>· 对k8s有直观感受后，介绍了下k8s的基本架构。各个组件是如何交互的，在使用k8s过程中不断回想架构图，能加深对k8s的了解</P>
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
      articleTitle: 'k8s 部署示例',
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

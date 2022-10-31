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
          <div style="text-align: center">
            <img src="@/assets/images/developer/article3-1-1.png" style="max-width: 500px">
          </div>
          <br><P>kuberntes 中的 pod 基于 service 域名解析后，再负载均衡分发到 service 后端的各个 pod 服务中，如果没有 DNS 解析，则无法查到各个服务对应的 service 服务</P>
          <br><P>在 Kubernetes 中，服务发现有几种方式：</P>
          <br><P>基于环境变量的方式</P>
          <br><P>基于内部域名的方式</P>
          <br><P>WHAT ?</P>
          <br><P>从 K8S 1.11 开始，K8S 已经使用 CoreDNS，替换 KubeDNS 来充当其 DNS 解析</P>
          <br><P>DNS 如何解析，依赖容器内 resolv 文件的配置</P>
          <br><P># cat /etc/resolv.conf</P>
          <P>nameserver 10.200.254.254</P>
          <P>search default.svc.cluster.local. svc.cluster.local. cluster.local.</P>
          <br><P>options ndots:5</P>
          <br><P>ndots:5：如果查询的域名包含的点 “.” 不到 5 个，那么进行 DNS 查找，将使用非完全限定名称(或者叫绝对域名)，如果你查询的域名包含点数大于等于 5，那么 DNS 查询，默认会使用绝对域名进行查询。</P>
          <br><P>Kubernetes 域名的全称，必须是 service-name.namespace.svc.cluster.local 这种模式，服务名</P>
          <P># nslookup kubernetes.default.svc.cluster.local</P>
          <P>Server: 10.200.254.254</P>
          <P>Address: 10.200.254.254:53</P>
          <P>Name: kubernetes.default.svc.cluster.local</P>
          <P>Address: 10.200.0.1</P>
          <br><P>DNS策略，在Pod，Deployment RC等资源设置 dnsPolicy</P>
          <br><P>None</P>
          <br><P>用于想要自定义 DNS 配置的场景，而且需要和 dnsConfig 配合一起使用</P>
          <br><P>Default</P>
          <br><P>让 kubelet 来决定使用何种 DNS 策略。而 kubelet 默认使用宿主机的 /etc/resolv.conf(使用宿主机的DNS策略)</P>
          <br><P>但 kubelet 可以配置使用什么文件来进行 DNS 策略，使用 kubelet 的参数：–resolv-conf=/etc/resolv.conf 来决定 DNS 解析文件地址</P>
          <br><P>ClusterFirst</P>
          <br><P>表示 POD 内的 DNS 使用集群中配置的 DNS 服务，使用 Kubernetes 中 kubedns 或 coredns 服务进行域名解析。如果解析不成功，才会使用宿主机的 DNS 进行解析</P>
          <br><P>ClusterFirstWithHostNet</P>
          <br><P>POD 是用 HOST 模式启动的(HOST模式)，用 HOST 模式表示 POD 中的所有容器，都使用宿主机的 /etc/resolv.conf 进行 DNS 查询，但如果使用了 HOST 模式，还继续使用 Kubernetes 的 DNS 服务，那就将 dnsPolicy 设置为 ClusterFirstWithHostNet</P>
          <br><P>配置文件使用 configmap</P>
          <br><P>health：CoreDNS 健康检查为 http://$IP:8080/health，返回为 OK</P>
          <br><P>kubernetes：CoreDNS 将根据 Kubernetes 服务和 pod 的 IP 回复 DNS 查询</P>
          <br><P>prometheus：CoreDNS 度量 http://$IP:9153/metrics</P>
          <br><P>proxy：不在 Kubernetes 集群域内的查询都将转发到预定义的解析器(/etc/resolv.conf)，可以配置多个upstream 域名服务器，也可以用于延迟查找 /etc/resolv.conf 中定义的域名服务器</P>
          <br><P>cache：启用缓存，30 秒 TTL</P>
          <br><P>loop：检测简单的转发循环，如果找到循环则停止 CoreDNS 进程</P>
          <br><P>reload：允许自动重新加载已更改的 Corefile</P>
          <br><P>loadbalance：DNS 负载均衡器，默认round_robin</P>
          <br><P>apiVersion: v1</P>
          <br><P>kind: ConfigMap</P>
          <br><P>metadata:</P>
          <br><P>name: coredns</P>
          <br><P>namespace: namespace-test</P>
          <br><P>data:</P>
          <br><P>Corefile: |</P>
          <br><P>.:53 {</P>
          <br><P>errors</P>
          <P>health</P>
          <P>ready</P>
          <P>kubernetes cluster.local 10.200.0.0/16 {</P>
          <P>pods insecure</P>
          <P>upstream 114.114.114.114</P>
          <P>fallthrough in-addr.arpa ip6.arpa</P>
          <P>namespaces namespace-test</P>
          <P>}</P>
          <P>prometheus :9153</P>
          <P>forward . /etc/resolv.conf</P>
          <P>cache 30</P>
          <P>loop</P>
          <P>reload</P>
          <P>loadbalance</P>
          <P>}</P>
          <br><P>Coredns 规定协议</P>
          <br><P>当前 CoreDNS 接受4种协议: DNS, DNS over TLS (DoT), DNS over HTTP/2 (DoH)</P>
          <br><P>and DNS over gRPC。可以通过在服务器配置文件，在zone 前加个前缀来指定服务器接收哪种协议。</P>
          <P>dns:// for plain DNS (the default if no scheme is specified).</P>
          <P>tls:// for DNS over TLS, see RFC 7858.</P>
          <P>https:// for DNS over HTTPS, see RFC 8484.</P>
          <P>grpc:// for DNS over gRPC.</P>
          <br><P>UDP非标准端口只在某些地区某些运营商有用，DoT，即DNS over TLS，支持DoT的公共DNS服务有Quad9的9.9.9.9，Google的8.8.8.8以及Cloudflare的1.1.1.1，可以这么使用：</P>
          <br><P>.:5301 {</P>
          <P>forward . tls://9.9.9.9 {</P>
          <P>tls_servername dns.quad9.net</P>
          <P>}</P>
          <P>cache</P>
          <P>}</P>
          <br><P>.:5302 {</P>
          <P>forward . tls://1.1.1.1 tls://1.0.0.1 {</P>
          <P>tls_servername 1dot1dot1dot1.cloudflare-dns.com</P>
          <P>}</P>
          <P>cache</P>
          <P>}</P>
          <br><P>.:5303 {</P>
          <P>forward . tls://8.8.8.8 tls://8.8.4.4 {</P>
          <P>tls_servername dns.google</P>
          <P>}</P>
          <P>cache</P>
          <P>}</P>
          <br><P>由于proxy插件新版本已经移除，作为external plugin，需要自己编译CoreDNS。</P>
          <br><P>git clone https://github.com/coredns/coredns.git</P>
          <P>cd coredns</P>
          <P>make</P>
          <br><P>CoreDNS使用了go modules机制，所以在make过程中会自动下载依赖的package。可以通过HTTP_PROXY环境变量指定，或者使用国内的一些镜像(如果你信得过的话)通过GOPROXY环境变量指定。</P>
          <br><P>则在make前，要修改plugin.cfg文件，加入以下：</P>
          <br><P>proxy:github.com/coredns/proxy</P>
          <br><P>再make，就会把插件编译进去。如果发现没有编译进去，可以先执行一下go generate coredns.go再make</P>
          <br><P>coredns 安装部署</P>
          <br><P>下载：https://github.com/coredns/deployment/tree/master/kubernetes</P>
          <br><P>deploy.sh 用于生成用于 kube-dns 的集群上运行 CoreDNS 的 yaml 文件</P>
          <br><P>coredns.yaml.sed 文件作为模板，它创建一个 ConfigMap 和一个 CoreDNS deployment 的yaml 文件</P>
          <br><P>./deploy.sh 172.18.0.0/24 cluster.local 生成 yaml 文件，在使用 kubectl apply 部署在 k8s 中</P>
          <br><P>官方性能</P>
          <br><P>计算表达式： MB required (default settings) = (Pods + Services) / 1000 + 54</P>
          <br><P>cache 需要 30 MB，大约缓存 10000 条记录</P>
          <br><P>操作 buffer 需要 5 MB，用于处理查询，大约可以承受 30 K QPS 量</P>
          <br><P>容器内抓包</P>
          <!--<br><P>docker inspect &#45;&#45;format "{{.State.Pid}}" container</P>-->
          <P># 进入 container namespace</P>
          <P>nsenter -n -t ￥pid</P>
          <P># 对 53 端口进行抓包</P>
          <P># tcpdump -i eth0 -N udp dst port 53</P>
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
      articleTitle: 'coredns 概念原理与使用',
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

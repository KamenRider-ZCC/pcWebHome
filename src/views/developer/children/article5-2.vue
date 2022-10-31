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
          <br><P style="font-weight: bold">概述</P>
          <br><P>MongoDB是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。</P>
          <br><P>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。</P>
          <br><P style="font-weight: bold">前言</P>
          <br><P>考虑这样一个场景，有个数据量有10多亿数据的设备库，里面存放了注册的设备的信息，并且设备数据还可能会递增，然后业务集群需要对指定条件的设备群发信息，那么如何才能高效的来处理这个问题那?</P>
          <br><P style="font-weight: bold">思考</P>
          <br><P style="font-weight: bold">离线分析</P>
          <br><P>为了不影响在线业务，以往需要把一份数据进行多次复制来分别进行业务交易和数据分析的问题，也就是业务交易的数据是在原来的库，而数据分析是通过手段把原来库数据定时同步到另外的存储设备离线分析。上面所说消息群发设备就可以使用这种方式，首先全量把数据同步到另外的存储设备，然后在定时把原来库里面的新数据增量到存储设备。</P>
          <br><P style="font-weight: bold">离线库</P>
          <br><P>对于存储设备可以选择MongoDB，原因是MongoDB 分片集群(Sharded Cluster)通过将数据分散存储到多个分片(Shard)上来实现高可扩展性。实现分片集群时，MongoDB 引入 Config Server 来存储集群的元数据，引入 mongos 作为应用访问的入口，mongos 从 Config Server 读取路由信息，并将请求路由到后端对应的 Shard 上。</P>
          <br><P>用户访问 mongos 跟访问单个 mongod 类似;</P>
          <br><P>所有 mongos 是对等关系，用户访问分片集群可通过任意一个或多个mongos;</P>
          <br><P>mongos 本身是无状态的，可任意扩展，集群的服务能力为“Shard服务能力之和”与“mongos服务能力之和”的最小值;</P>
          <br><P>访问分片集群时，最好将应用负载均匀的分散到多个 mongos 上。</P>
          <br><P>Sharding Cluster使得集合数据被分散到多个Shard存储，也就是每个shard存放整体数据的一部分</P>
          <br><P>如何正确地连接分片集群?</P>
          <br><P>所有官方的 MongoDB driver 都支持以 Connection String 的方式来连接 MongoDB 分片集群。</P>
          <br><P>下面就是 Connection String 包含的主要内容：</P>
          <P>mongodb://[username:password@]host1[:port1][,host2[:port2],…[,hostN[:portN]]][/[database][?options]]</P>
          <P>mongodb:// 前缀，代表这是一个Connection String;</P>
          <P>username:password@ 如果启用了鉴权，需要指定用户密码;</P>
          <P>hostX:portX多个 mongos 的地址列表;</P>
          <P>/database鉴权时，用户帐号所属的数据库;</P>
          <P>?options 指定额外的连接选项。</P>
          <P>java 代码访问</P>
          <br><P>通过 java 来连接的示例代码如下所示：</P>
          <P>MongoClientURI connectionString = new MongoClientURI("mongodb://:****@s-m5e80a9241323604.mongodb.rds.aliyuncs.com:3717,s-m5e053215007f404.mongodb.rds.aliyuncs.com:3717/admin"); // ****替换为root密码</P>
          <P>MongoClient client = new MongoClient(connectionString);</P>
          <P>MongoDatabase database = client.getDatabase("mydb");</P>
          <P>MongoCollection collection = database.getCollection("mycoll");</P>
          <br><P>通过上述方式连接分片集群时，客户端会自动将请求分散到多个 mongos 上，以实现负载均衡;同时，当 URI 里 mongos 数量在2个及以上时，当有 mongos 故障时，客户端能自动进行 failover，将请求都分散到状态正常的 mongos 上。</P>
          <br><P>好吧，言归正传，上面知道大数据最后会被分散到不同的shard上，而我们的应用系统是集群，如果能让集群每台机器分摊不同shard上的数据进行处理，那么性能肯定杠杠的，可以吗?答案是必须的。</P>
          <P>mongb上有个config.shards，config.shards集合存储各个Shard的信息，可通过addShard、removeShard命令来动态的从Sharded cluster里增加或移除shard。</P>
          <P>mongos&gt; db.shards.find()</P>
          <P>{ "_id" : "mongo-9003", "host" : "mongo-9003/10.1.72.135:9003,10.1.71.136:9003,10.1.72.137:9003" }</P>
          <P>{ "_id" : "mongo-9004", "host" : "mongo-9004/10.1.72.135:9004,10.1.71.136:9004,10.1.72.137:9004" }</P>
          <br><P>通过config.shards可以获取所以分片shard的地址然后替换上面的url中host，就可以让集群系统里不同机器直接访问shard上的数据。</P>
          <br><P>通过config.shards可以获取所以分片shard的地址然后替换上面的url中host，就可以让集群系统里不同机器直接访问shard上的数据。</P>
          <div style="text-align: center">
            <img src="@/assets/images/developer/article5-2-1.png" style="max-width: 500px">
          </div>
          <br><P>试用场景</P>
          <br><P>MongoDB 的主要目标是在键/值存储方式(提供了高性能和高度伸缩性)和传统的RDBMS 系统(具有丰富的功能)之间架起一座桥梁，它集两者的优势于一身。根据官方网站的描述，Mongo 适用于以下场景。</P>
          <br><P>网站数据：Mongo 非常适合实时的插入，更新与查询，并具备网站实时数据存储所需的复制及高度伸缩性。</P>
          <br><P>缓存：由于性能很高，Mongo 也适合作为信息基础设施的缓存层。在系统重启之后，由Mongo 搭建的持久化缓存层可以避免下层的数据源过载。</P>
          <br><P>大尺寸、低价值的数据：使用传统的关系型数据库存储一些数据时可能会比较昂贵，在此之前，很多时候程序员往往会选择传统的文件进行存储。</P>
          <br><P>高伸缩性的场景：Mongo 非常适合由数十或数百台服务器组成的数据库，Mongo 的路线图中已经包含对MapReduce 引擎的内置支持。</P>
          <br><P>用于对象及JSON 数据的存储：Mongo 的BSON 数据格式非常适合文档化格式的存储及查询。</P>
          <br><P>MongoDB 的使用也会有一些限制，例如，它不适合于以下几个地方。</P>
          <br><P>高度事务性的系统：例如，银行或会计系统。传统的关系型数据库目前还是更适用于需要大量原子性复杂事务的应用程序。</P>
          <br><P>传统的商业智能应用：针对特定问题的BI 数据库会产生高度优化的查询方式。对于此类应用，数据仓库可能是更合适的选择。</P>
          <br><P>需要SQL 的问题。</P>
          <br><P>总结</P>
          <br><P>使用mongdb的分片机器可以使应用集群中每台机器去访问分片机器每个shard上面的数据，从而实现并发处理大数据</P>
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
      articleTitle: '如何利用MongoDB 实现高性能大数据处理',
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

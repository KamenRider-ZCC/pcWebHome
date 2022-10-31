<template>
  <div class="main-container">
    <el-row :gutter="20">
      <!--left-->
      <el-col :span="18">
        <!--面包屑-->
        <div class="mbx">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/devPlatform' }">开发者平台</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">技术领域</a></el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--文章标题-->
        <h class="articleTitle">{{articleTitle}}</h>
        <!--作者信息-->
        <div class="authorInfo">
          <img class="authorImg" style="margin-right: 15px;" src="@/assets/images/u694.png">
          <span style="margin-right: 15px;color: initial">{{authorName}}</span>
          <div style="margin-right: 15px;">
            <span>发表于{{articleTime}}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-view"></i> <span>{{viewNumber}}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-chat-dot-round"></i> <span>{{infoNumber}}</span>
          </div>
          <div style="margin-right: 15px;">
            <svg-icon icon-class="zan" fill="#fl0"></svg-icon> <span>{{viewNumber}}</span>
          </div>
        </div>
        <!--文章类型-->
        <div class="articleType">
          <el-button>Docker</el-button>
          <el-button>容器</el-button>
        </div>
        <!--摘要-->
        <div class="abstract">{{abstract}}</div>
        <!--文章内容-->
        <div class="articleCon">
          <p>关于容器的历史、发展以及技术本质，在互联网上已经有非常多的文章了。这里旨在结合自身的工作经验和理解，通过一系列的文章，讲清楚这项技术。</p><br>
          <p style="font-weight: bold">容器的历史和发展</p><br>
          <p style="font-weight:bold">1、前世</p><br>
          <p>讲到容器，就不得不提LXC（Linux Container），他是Docker的前生，或者说Docker是LXC的使用者。完整的LXC能力在2008年合入Linux主线，所以容器的概念在2008年就基本定型了，并不是后面Docker造出来的。关于LXC的介绍很多，大体都会说“LXC是Linux内核提供的容器技术，能提供轻量级的虚拟化能力，能隔离进程和资源”，但总结起来，无外乎就两大知识点Cgroups（Linux Control Group）和Linux Namespace。搞清楚他俩，容器技术就基本掌握了。</p><br>
          <p>Cgroups：重点在“限制”。限制资源的使用，包括CPU、内存、磁盘的使用，体现出对资源的管理能力。</p><br>
          <p>Namespace：重点在“隔离”。隔离进程看到的Linux视图。说大白话就是，容器和容器之间不要相互影响，容器和宿主机之间不要相互影响。</p><br>
          <p style="font-weight: bold">2、少年期起步艰难</p><br>
          <p>2009年，Cloud Foundry基于LXC实现了对容器的操作，该项目取名为Warden。2010年，dotCloud公司同样基于LXC技术，使用Go语言实现了一款容器引擎，也就是现在的Docker。那时，dotCloud公司还是个小公司，出生卑微的Docker没什么热度，活得相当艰难。</p><br>
          <div style="text-align: center">
            <img src="@/assets/images/rongqi.jpg">
          </div>
        </div>
        <!--文章底部按钮-->
        <div class="articelBtn">
          <el-button round><svg-icon icon-class="zan" fill="#fl0"></svg-icon> 点赞</el-button>
          <el-button round icon="el-icon-star-off">收藏</el-button>
          <el-button round icon="el-icon-circle-plus-outline">关注作者</el-button>
        </div>
        <hr style="margin: 25px 0;height: 1px;background-color: #999;border: none;">
        <!--评论-->
        <div class="comment">
          <p style="font-weight: bold;margin-bottom: 15px;">评论（{{commentNumber}}）</p>
          <el-input type="textarea" :rows="8" placeholder="请开始你的评论" v-model="textarea"></el-input>
        </div>
      </el-col>
      <!--right-->
      <el-col :span="6">
        <div class="authorIntroduce">
          <el-row style="display: flex;align-items: center">
            <el-col :span="6"><img class="authorIntroImg" src="@/assets/images/u694.png"></el-col>
            <el-col :span="18">
              <el-row style="margin-bottom: 5px;">{{authorName}}</el-row>
              <el-row style="font-size: 14px;color: #999999"><span style="margin-right: 10px;">文章:{{articleNumber}}篇</span> <span>粉丝:{{fans}}人</span></el-row>
            </el-col>
          </el-row>
          <p class="intro">{{intro}}</p>
          <el-button class="follow" icon="el-icon-plus">关注</el-button>
        </div>
        <related-article></related-article>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import relatedArticle from "@/views/developer/children/relatedArticle";

  export default {
    components: {relatedArticle},
    data() {
      return {
        articleTitle: '认识容器，我们从他的历史开始聊起',
        authorName: '张三',
        articleTime: '2021-07-21 16:25:53',
        viewNumber: '742',
        infoNumber: '7',
        abstract: '【摘要】 关于容器的历史、发展以及技术本质，在互联网上已经有非常多的文章了。这里旨在结合自身的工作经验和理解，通过一系列的文章,讲清楚这项技术。',
        commentNumber: '2',
        textarea: '',
        /*right*/
        intro: '实施分享行业动态，传递价值信息，我是社区小助手',
        articleNumber: '1420',
        fans: '2000'
      }
    },
    mounted() {
    },
    methods: {}
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

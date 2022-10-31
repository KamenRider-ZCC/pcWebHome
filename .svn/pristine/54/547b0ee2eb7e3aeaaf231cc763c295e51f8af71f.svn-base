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
          <P style="font-weight: bold">一、for update定义</P>
          <br><P>for update是一种行级锁，又叫排它锁，一旦用户对某个行施加了行级加锁，则该用户可以查询也可以更新被加锁的数据行，其它用户只能查询但不能更新被加锁的数据行.如果其它用户想更新该表中的数据行，则也必须对该表施加行级锁.即使多个用户对一个表均使用了共享更新，但也不允许两个事务同时对一个表进行更新，真正对表进行更新时，是以独占方式锁表，一直到提交或复原该事务为止。行锁永远是独占方式锁。</P>
          <br><P>只有当出现如下之一的条件，才会释放共享更新锁：</P>
          <br><P>1、执行提交(COMMIT)语句</P>
          <br><P>2、退出数据库(LOG　OFF)</P>
          <br><P>3、程序停止运行</P>
          <br><P style="font-weight: bold">二、概念和用法</P>
          <br><P>通常情况下，select语句是不会对数据加锁，妨碍影响其他的DML和DDL操作。同时，在多版本一致读机制的支持下，select语句也不会被其他类型语句所阻碍。</P>
          <br><P>而select … for update 语句是我们经常使用手工加锁语句。在数据库中执行select … for update ,大家会发现会对数据库中的表或某些行数据进行锁表，在mysql中，如果查询条件带有主键，会锁行数据，如果没有，会锁表。</P>
          <br><P>由于InnoDB预设是Row-Level Lock，所以只有「明确」的指定主键，MySQL才会执行Row lock (只锁住被选取的资料例) ，否则MySQL将会执行Table Lock (将整个资料表单给锁住)。</P>
          <br><P>举个例子: 假设有张表user ，里面有 id 和 name 两列，id是主键。</P>
          <br><P>例1: (明确指定主键，并且数据真实存在，row lock)</P>
          <br><P>SELECT * FROM user WHERE id=3 FOR UPDATE;</P>
          <br><P>SELECT * FROM user WHERE id=3 and name='Tom' FOR UPDATE;</P>
          <br><P>例2: (明确指定主键，但数据不存在，无lock)</P>
          <br><P>SELECT * FROM user WHERE id=0 FOR UPDATE;</P>
          <br><P>例3: (主键不明确，table lock)</P>
          <br><P>SELECT * FROM user WHERE id&lt;&gt;3 FOR UPDATE;</P>
          <br><P>SELECT * FROM user WHERE id LIKE '%3%' FOR UPDATE;</P>
          <br><P>例4: (无主键，table lock)</P>
          <br><P>SELECT * FROM user WHERE name='Tom' FOR UPDATE;</P>
          <br><P style="font-weight: bold">注意：</P>
          <br><P>1、FOR UPDATE仅适用于InnoDB，且必须在事务处理模块(BEGIN/COMMIT)中才能生效。</P>
          <br><P>2、要测试锁定的状况，可以利用MySQL的Command Mode(命令模式) ，开两个视窗来做测试。</P>
          <br><P>3、Myisam 只支持表级锁，InnerDB支持行级锁 添加了(行级锁/表级锁)锁的数据不能被其它事务再锁定，也不被其它事务修改。是表级锁时，不管是否查询到记录，都会锁定表。</P>
          <br><P style="font-weight: bold">三、什么时候需要使用for update?</P>
          <br><P>借助for update语句，我们可以在应用程序的层面手工实现数据加锁保护操作。就是那些需要业务层面数据独占时，可以考虑使用for update。</P>
          <br><P>场景上，比如火车票订票，在屏幕上显示有票，而真正进行出票时，需要重新确定一下这个数据没有被其他客户端修改。所以，在这个确认过程中，可以使用for update。</P>
          <br><P style="font-weight: bold">四、for update悲观锁</P>
          <br><P>悲观锁：总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它解锁。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。就像for update，再比如Java里面的同步原语synchronized关键字的实现也是悲观锁。</P>
          <P>乐观锁：顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量，像数据库提供的类似于write_condition机制，其实都是提供的乐观锁。</P>
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
      articleTitle: 'for update的特点',
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

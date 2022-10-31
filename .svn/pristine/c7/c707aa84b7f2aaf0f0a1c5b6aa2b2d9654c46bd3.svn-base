<template>
  <div class="main-container">
    <div>
      <!--面包屑-->
      <div class="mbx">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/devPlatform' }">开发者平台</el-breadcrumb-item>
          <el-breadcrumb-item>技术领域</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--顶部模块-->
      <div class="plate">
        <el-row style="display: flex;align-items: center">
          <el-col :span="2"><img class="titleImg" src="@/assets/images/u694.png"></el-col>
          <el-col :span="16">
            <div class="title1">
              <h>{{platTitle}}</h>
              <p>今日：{{todayNumber}}</p>
              <div style="width: 40px;height: 20px;background: #D80E19;border-radius: 2px;color: #FFF;font-size: 12px;text-align: center;line-height: 20px;margin-left: 10px;">New</div>
              <p>主题：{{theme}}</p>
              <p>帖子：{{posts}}</p>
            </div>
            <div class="title2">介绍：{{intro}}</div>
          </el-col>
          <el-col :span="6">
            <el-button class="gz" icon="el-icon-plus">关注 12</el-button>
            <el-button class="fbzt">发表主题</el-button>
          </el-col>
        </el-row>
        <hr style="margin:25px 0;height: 1px;background-color: #ddd;border: none;">
        <div class="plateType">
          <p class="plateType_active">ServiceStage</p>
          <p>微服务引擎</p>
          <p>函数工作流</p>
          <p>消息通知服务</p>
          <p>API网关</p>
          <p>云性能测试服务</p>
          <p>云速建站</p>
        </div>
      </div>
    </div>

    <el-row :gutter="20">
      <!--left-->
      <el-col :span="18">
        <div class="con">
          <div class="con_1">
            <el-row>
              <el-col class="con_1_left" :span="8">
                <el-select class="selectPosts" v-model="valuePosts" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in optionsPosts"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <span>热门</span>
                <span>精华</span>
              </el-col>
              <el-col :span="14" style="float: right">
                <el-select v-model="valueAuthor" placeholder="请选择" style="width: 100px">
                  <el-option
                    v-for="(item,index) in optionsAuthor"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="valueTime" placeholder="请选择" style="width: 100px">
                  <el-option
                    v-for="(item,index) in optionsTime"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="valueReply" placeholder="请选择" style="width: 100px">
                  <el-option
                    v-for="(item,index) in optionsReply"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-input
                  placeholder="版内搜索"
                  suffix-icon="el-icon-search"
                  v-model="search"
                  style="width: 200px">
                </el-input>
              </el-col>
            </el-row>
          </div>
          <div class="con_2">
            <span class="con_2_active">全部帖子</span>
            <span>问题求助</span>
            <span>技术干货</span>
            <span>热门活动</span>
            <span>公告</span>
            <span>行业前沿</span>
            <span>介绍/入门</span>
            <span>教程</span>
            <span>用户故事</span>
          </div>
          <div class="con_3">
            <div class="item" v-for="(item,index) in itemList.slice(0,9)" :key="index">
              <el-row style="display:flex;align-items: center">
                <el-col :span="2"><img style="width: 48px;height: 48px;border-radius: 50%" src="@/assets/images/u694.png"></el-col>
                <el-col :span="18">
                  <div style="margin-bottom: 5px;">{{item.itemTitle}}</div>
                  <div>{{item.authorName}} <span style="color: #666">发表于{{item.articleTime}}</span></div>
                </el-col>
                <el-col :span="4">
                  <div class="item_icon"><i class="el-icon-view"></i>
                    <p>{{item.viewNumber}}</p></div>
                  <div class="item_icon"><i class="el-icon-chat-dot-round"></i>
                    <p>{{item.infoNumber}}</p></div>
                </el-col>
              </el-row>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="100">
            </el-pagination>
          </div>
        </div>
      </el-col>
      <!--right-->
      <el-col :span="6">
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
        platTitle: '数据库',
        todayNumber: '3',
        theme: '13988',
        posts: '287926',
        intro: '产品宣传、教程攻略、牛人经验、技术探讨，收集用户需求和建议。',
        valuePosts: '0',
        optionsPosts: [
          {
            value: '0',
            label: '全部帖子'
          },
          {
            value: '1',
            label: '今日帖子'
          }
        ],
        valueAuthor: '0',
        optionsAuthor: [
          {
            value: '0',
            label: '全部作者'
          },
          {
            value: '1',
            label: '精华作者'
          }
        ],
        valueTime: '0',
        optionsTime: [
          {
            value: '0',
            label: '全部时间'
          },
          {
            value: '1',
            label: '昨日时间'
          }
        ],
        valueReply: '0',
        optionsReply: [
          {
            value: '0',
            label: '最新回复'
          },
          {
            value: '1',
            label: '昨日回复'
          }
        ],
        search: '',
        itemList: [
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          },
          {
            itemTitle: '【问题求助】什么是微服务 heatlevel',
            authorName: 'ate',
            articleTime: '2021-7-31',
            viewNumber: '244',
            infoNumber: '32',
          }
        ]
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

    .plate {
      height: 170px;
      background: #F6F7FC;
      padding: 30px;
      margin: 25px 0;

      .titleImg {
        width: 48px;
        height: 48px;
        border-radius: 6px;
      }

      .title1 {
        display: flex;
        align-items: center;

        h {
          font-size: 18px;
          font-weight: bold;
        }

        p {
          margin-left: 25px;
          color: #666;
          font-size: 14px;
        }
      }

      .title2 {
        margin-top: 7px;
        font-size: 14px;
      }

      .gz {
        color: #c7000b;
        border-color: #c7000b;
      }

      .fbzt {
        background: #c7000b;
        color: #FFF;
        border-color: #c7000b;
      }

      .plateType {
        display: flex;

        p {
          margin-right: 15px;
          font-size: 14px;

          &:hover {
            color: #c7000b;
          }
        }

        .plateType_active {
          color: #c7000b;
        }
      }
    }

    /*con*/
    .con_1_left {
      .selectPosts {
        width: 100px;

        ::v-deep input {
          border: none;
          font-size: 14px;
          color: #000;
        }
      }

      span {
        font-size: 14px;
        margin-left: 20px;

        &:hover {
          color: #c7000b;
        }
      }
    }

    .con_2 {
      width: 900px;
      height: 40px;
      background: #F6F7FC;
      font-size: 14px;
      line-height: 40px;
      border-top: 1px solid #ddd;
      margin: 10px 0;

      span {
        margin: 0 15px;

        &:hover {
          color: #c7000b;
        }
      }

      .con_2_active {
        color: #c7000b;
      }
    }

    .con_3 {

      .item {
        height: 90px;
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        padding: 20px;
        margin-bottom: 20px;

        .item_icon {
          width: 48px;
          height: 48px;
          background: #F6F7FC;
          border-radius: 4px;
          color: #525797;
          float: left;
          margin-left: 10px;
          display: flex;
          flex-wrap: wrap;
          align-content: center;

          i, p {
            width: 100%;
            text-align: center;
          }

          i {
            font-size: 18px;
          }

          p {
            font-size: 12px;
          }
        }

        &:hover {
          background: #F6F7FC;
        }
      }
    }
  }
</style>

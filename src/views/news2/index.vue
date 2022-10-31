<template>
  <div>
    <carousel></carousel>
    <div class="tabsNews_title">
      <div class="tabsNews_con">
        <div :class="'tab1' === titActive ? 'tab_active' : ''" @click="tabChange('tab1')">
          <img :src="'tab1' === titActive ? require('@/assets/images/news2/1Hover.png') : require('@/assets/images/news2/1.png')">
          全部
        </div>
        <div :class="'tab2' === titActive ? 'tab_active' : ''" @click="tabChange('tab2')">
          <img :src="'tab2' === titActive ? require('@/assets/images/news2/2Hover.png') : require('@/assets/images/news2/2.png')">
          政策速递
        </div>
        <div :class="'tab3' === titActive ? 'tab_active' : ''" @click="tabChange('tab3')">
          <img :src="'tab3' === titActive ? require('@/assets/images/news2/3Hover.png') : require('@/assets/images/news2/3.png')">
          行业新闻
        </div>
        <div :class="'tab4' === titActive ? 'tab_active' : ''" @click="tabChange('tab4')">
          <img :src="'tab4' === titActive ? require('@/assets/images/news2/4Hover.png') : require('@/assets/images/news2/4.png')">
          行业标准
        </div>
      </div>
    </div>

    <div class="main-container">
      <div class="con_top">
        <el-row>
          <el-col :span="12">
            <div class="con_top_left">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="con_top_right" style="text-align: right">
              <el-input size="small" v-model="inputSearch" placeholder="请输入内容" style="width: 400px"></el-input>
              <el-button type="danger">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="con_bot">
        <div class="newsItem" v-for="(item,index) in newsList" :key="index">
          <el-row :gutter="60">
            <el-col :span="6">
              <img :src="item.cover">
            </el-col>
            <el-col :span="18">
              <div class="newsTit">{{item.title}}</div>
              <div class="newsCon">{{item.introduction}}</div>
              <div class="newsTime">{{item.pubDate}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import carousel from '@/views/supplyDemand/carousel'
  import * as api from '@/api/news2'

  export default {
    components: {carousel},
    data() {
      return {
        titActive: 'tab1',
        inputSearch: '',
        currentPage: 1,
        pageSize: 5,
        total: 0,
        newsList: [
          /*{
            imgNews: require('@/assets/images/news2/news.jpg'),
            newsTit: '东京奥运会闭幕了 但这10个瞬间依然让人热泪盈眶！',
            newsCon: '这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动。这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动',
            newsTime: '2021-08-08'
          },
          {
            imgNews: require('@/assets/images/news2/news.jpg'),
            newsTit: '东京奥运会闭幕了 但这10个瞬间依然让人热泪盈眶！',
            newsCon: '这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动。这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动',
            newsTime: '2021-08-08'
          },
          {
            imgNews: require('@/assets/images/news2/news.jpg'),
            newsTit: '东京奥运会闭幕了 但这10个瞬间依然让人热泪盈眶！',
            newsCon: '这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动。这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动',
            newsTime: '2021-08-08'
          },
          {
            imgNews: require('@/assets/images/news2/news.jpg'),
            newsTit: '东京奥运会闭幕了 但这10个瞬间依然让人热泪盈眶！',
            newsCon: '这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动。这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动',
            newsTime: '2021-08-08'
          },
          {
            imgNews: require('@/assets/images/news2/news.jpg'),
            newsTit: '东京奥运会闭幕了 但这10个瞬间依然让人热泪盈眶！',
            newsCon: '这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动。这一刻，我们确实等得有点久，好在受疫情影响推迟了一年的2020东京奥运会没有让我们失望，刚刚过去的夏天给了我们太多的惊喜与感动',
            newsTime: '2021-08-08'
          }*/
        ]
      }
    },
    mounted() {
      if(this.$route.params.myTab) {
        const myTab = this.$route.params.myTab
        this.titActive = myTab
      }
      this.getInfo()
    },
    methods: {
      // tab切换
      tabChange(val) {
        this.titActive = val
        this.getInfo()
      },
      // 页码跳转
      handleCurrentChange(value) {
        this.currentPage = value
        this.getInfo()
      },
      // 获取列表信息
      async getInfo() {
        let artType
        if(this.titActive == 'tab1') {
          artType = ''
        } else if (this.titActive == 'tab2') {
          artType = 53
        } else if (this.titActive == 'tab3') {
          artType = 54
        } else if (this.titActive == 'tab4') {
          artType = 55
        }
        const res = await api.getInfo({page: this.currentPage,limit: this.pageSize,forum: 3,artType: artType,sortFlag: 1})
        this.newsList = res.data.data
        this.total = res.data.total
      },
    }
  }
</script>
<style lang="scss" scoped>
  .tabsNews_title {
    height: 60px;
    background: #c7000b;

    .tabsNews_con {
      width: 1200px;
      margin: 0 auto;
      display: flex;

      & > div {
        line-height: 60px;
        padding: 0 40px;
        color: #FFF;
        display: flex;
        align-items: center;

        img {
          margin-right: 5px
        }
      }

      .tab_active {
        color: #333333;
        font-weight: bold;
        background: #FFF;
      }
    }
  }

  #app .main-container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;

    .con_top {
      border-bottom: 1px solid #ddd;
      padding-bottom: 15px;
    }

    .con_bot {
      padding: 30px 0;

      .newsItem {
        padding: 30px 10px;

        img {
          width: 270px;
          height: 140px;
        }

        .newsTit {
          font-size: 20px;
          font-weight: bold;
        }

        .newsCon {
          margin: 20px 0;
          color: #333333;
          font-size: 15px;
        }

        .newsTime {
          color: #999999;
        }

        &:nth-child(2n) {
          background: #f6f7fc;
        }
      }
    }
  }
</style>

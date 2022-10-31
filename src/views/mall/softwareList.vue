<template>
  <div>
    <carousel />
    <hr style="height: 8px;border: none;background: #c7000b;margin: 0">
    <div class="main-container">
      <div class="category">
        <div class="category_tit">
          <div class="category_tit_text" id="myTop">
            <i class="el-icon-discount" /> 类别筛选
          </div>
        </div>
        <div class="category_type">
          <el-row v-for="(item,index) in categoryList" :key="index" class="category_item">
            <el-col class="category_type_name" :span="3">{{ item.type }}：</el-col>
            <el-col class="category_type_con" :span="21">
              <p v-for="(item2,index2) in item.label" :key="index2" :class="current === index2 ? 'categoryHover' : ''" @click="getPage(1,item2.id,index2)">{{ item2.serviceName }}</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info_title">
        <div class="info_tit_active">软件展示</div>
      </div>
      <div style="clear:both;" />
      <div class="info_con">
        <div class="main-container" style="padding:30px 0 50px 0">
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col v-for="(item, index) in cardList" :key="index" :span="8" style="padding: 8px">
              <el-card shadow="hover" :body-style="{ padding: '28px 18px' }">
                <el-row style="height: 160px">
                  <el-col :span="6">
                    <img :src="item.cover" class="card_img">
                  </el-col>
                  <el-col :span="18" style="padding-left: 28px">
                    <el-row>
                      <span class="card_title">
                        {{ item.title }}
                      </span>
                    </el-row>
                    <el-row style="margin-top: 20px">
                      <span class="card_text">
                        {{ item. introduction }}
                      </span>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row type="flex" align="middle" style="margin-top: 32px">
                  <el-button type="tab_btn" @click="goProductDetail(item.id)">立即购买</el-button>
                  <div style="display: flex; flex-grow: 1"></div>
                  <div>
                    <span class="card_price" style="margin-right: 6px">暂无定价</span><!--<span class="card_unit" style="vertical-align: 1px">元/年</span>-->
                  </div>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-alert
            v-if="total===0"
            title="提示"
            type="warning"
            description="暂无内容"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-pagination
            v-else
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            @current-change="handleCurrentChange"
            style="margin-top: 16px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from '@/views/supplyDemand/carousel'
import * as api from '@/api/supplyDemand'

export default {
  components: { carousel },
  data() {
    return {
      categoryList: [
        {
          type: '业务领域',
          label: [
            {
              serviceName: '全部',
              id: ''
            },
            {
              serviceName: '智能服务',
              id: '26'
            },
            {
              serviceName: '智能设计',
              id: '28'
            },
            {
              serviceName: '智能制造',
              id: '29'
            },
            {
              serviceName: 'IOT',
              id: '27'
            },
            {
              serviceName: '智能管理',
              id: '31'
            },
            {
              serviceName: '数据分析',
              id: '30'
            },
          ]
        }
        /* {
            type: '业务领域',
            label: ['企业办公', '物联网', '人工智能', '生产制造', '大数据', '公共服务']
          },
          {
            type: '需求分类',
            label: ['解决方案', '企业应用', '数据智能', 'API服务', '物联网', '安全', '工业模型库']
          }*/
      ],
      cardList: [],
      currentPage: 1,
      pageSize: 12,
      total: 0,
      categoryHover: false,
      current: 0,
    }
  },
  mounted() {
    // this.getCategory()
    this.getPage()
  },
  methods: {
    // 筛选分类
    async getCategory() {
      const res = await api.getCategory()
      this.categoryList[0].label = res.data
    },
    // 获取Page
    async getPage(pages, i, index2) {
      if (pages) this.currentPage = pages
      if (index2) {
        this.current = index2
      }
      const res = await api.getSoftPage({
        page: this.currentPage,
        limit: this.pageSize,
        forum: 8,
        artType: i })
      this.cardList = res.data.data
      this.total = res.data.total
    },
    // 页码跳转
    handleCurrentChange(value) {
      // window.location.hash = '#myTop'
      document.getElementById('myTop').scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' })
      this.currentPage = value
      this.getPage()
    },
    // 按时间排序
    sort(val) {
      this.titActive = val
      this.cardList = this.cardList.reverse()
    },
    // 立即购买
    goProductDetail(val) {
      this.$router.push({
        path: '/productDetail',
        query: {
          key: val
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
    padding: 30px 0 0 0;

    .category {
      .category_tit {
        border-bottom: 1px solid #ddd;

        .category_tit_text {
          font-size: 24px;
          padding-bottom: 15px;
          margin-left: 40px;
          width: 140px;
          border-bottom: 6px solid #c7000b;

          i {
            color: #c7000b;
          }
        }
      }

      .category_type {
        padding: 20px 50px;
        line-height: 24px;

        .category_item {
          padding: 30px 0;
          border-bottom: 1px dashed #ddd;

          &:last-child {
            border-bottom: none;
          }

          .category_type_name {
            font-size: 18px;
          }

          .category_type_con p {
            padding: 0 10px;
            float: left;
            color: #666;
            &:hover {
              cursor: pointer;
              color: #c7000b;
            }
          }
          .categoryHover {
            color: #c7000b !important;
          }
        }
      }
    }
  }

  #app .info {
    .info_title {
      width: 1200px;
      margin: 0 auto;

      &>div {
        font-size: 24px;
        padding-bottom: 15px;
        margin-left: 40px;
        width: max-content;
        float: left;

        i {
          color: #666;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .info_tit_active {
        color: #c7000b;
        border-bottom: 6px solid #c7000b;
        i {
          color: #c7000b;
        }
      }
    }

    .info_con {
      background: #F6F7FC;

      .info_card {
        background: #FFF;
        padding: 25px;
        margin-bottom: 30px;

        .frame {
          margin: 20px 0;
          padding: 25px 40px 25px 40px;
          height: 214px;
          background: url("../../assets/images/frame.png") no-repeat;

          p {
            line-height: 24px;
          }
        }
      }
    }
    .card_img {
      width: 100%;
      max-height: 160px;
      display: block;
    }
    .card_title {
      font-size: 15px;
      font-weight: bold;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis; /** 多行 **/
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 3; /** 显示的行数 **/
    }
    .card_text {
      line-height: 16px;
      font-size: 12px;
      font-weight: bold;
      color: #999999;
      overflow: hidden;
      text-overflow: ellipsis; /** 多行 **/
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 5; /** 显示的行数 **/
    }
    ::v-deep .el-button--tab_btn {
      background-color: #D80E19;
      border-color: #D80E19;
      color: #fff;
    }
    .card_price {
      font-size: 30px;
      font-weight: bold;
      color: #D9111E
    }
    .card_unit {
      font-size: 12px;
      font-weight: bold;
      color: #999999
    }
  }
</style>

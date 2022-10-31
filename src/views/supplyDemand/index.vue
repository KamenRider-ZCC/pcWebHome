<template>
  <div>
    <carousel />
    <hr style="height: 8px;border: none;background: #c7000b;margin: 0">
    <div class="main-container">
      <div class="category">
        <div class="category_tit">
          <div class="category_tit_text">
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
        <div :class="'moren' === titActive ? 'info_tit_active' : ''" @click="sort('moren')">默认排序</div>
        <div :class="'time' === titActive ? 'info_tit_active' : ''" @click="sort('time')">时间 <i class="el-icon-sort" /></div>
      </div>
      <div style="clear:both;" />
      <div class="info_con">
        <div class="main-container" style="padding:30px 0 50px 0">
          <div v-for="(item,index) in cardList" :key="index" class="info_card">
            <el-row>
              <el-col :span="1"><img src="@/assets/images/info.png" style="width: 25px;height: 25px"></el-col>
              <el-col :span="23">
                <h3 style="font-size: 20px;">{{ item.phoneNumber }}</h3>
                <p style="margin-top: 10px;color: #666">{{ item.endTime }} 发布</p>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="21">
                <div class="frame">
                  <h3>{{ item.demandTitle }}</h3>
                  <p style="color:#666;margin:20px 0">{{ item.content }}</p>
                  <p>预算金额：<span style="color: #c7000b">面议</span></p>
                </div>
              </el-col>
              <el-col :span="3"><img src="@/assets/images/per1.png" style="width: 122px;height: 122px;border-right: 50%;"></el-col>
            </el-row>
            <div>
              <el-row>
                <el-col :span="2">
                  <el-button>{{ item.biaoqian }}</el-button>
                </el-col>
                <el-col :span="22" style="display: flex;justify-content: flex-end;font-size: 18px">
                  <p style="float: left;margin-right: 15px;">收藏 <i class="el-icon-star-off" style="color: #c7000b;font-size: 22px" /></p>
                  <p style="float: left">留言 <i class="el-icon-chat-line-round" style="color: #c7000b;font-size: 22px" /></p>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            @current-change="handleCurrentChange"
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
          type: '任务大类',
          label: [/* '全部', '家电', '机械', '能源', '模具', '服装', '房车', '农业', '教育', '建陶', '交通', '化工', '食品', '电子', '铸造', '其他',*/]
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
      cardList: [
        /* {
            title: '小熊科技',
            time: '2021-07-05 18:09:09',
            title2: '能够修正超薄砂轮的装置',
            describe: '现状：公司处于稳定发展阶段，拥有日本沙迪克线割机、公司处于稳定发展阶段，拥有日本沙迪克线割机.展阶段，拥有日本沙迪克线割机，公司处于稳定发展阶段，拥有日本沙迪克线割机、公司处于稳定发展阶段，拥有日本沙迪克线割机..',
          },
          {
            title: '能动技术科技',
            time: '2021-07-05 18:09:09',
            title2: '能够修正超薄砂轮的装置',
            describe: '现状：公司处于稳定发展阶段，拥有日本沙迪克线割机、公司处于稳定发展阶段，拥有日本沙迪克线割机.展阶段，拥有日本沙迪克线割机，公司处于稳定发展阶段，拥有日本沙迪克线割机、公司处于稳定发展阶段，拥有日本沙迪克线割机..',
          }*/
      ],
      currentPage: 1,
      pageSize: 5,
      total: 0,
      categoryHover: false,
      current: 0,
      titActive: 'moren'
    }
  },
  mounted() {
    this.getCategory()
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
      this.current = index2
      const res = await api.getPage({
        page: this.currentPage,
        limit: this.pageSize,
        taskTypeId: i })
      this.cardList = res.data.data
      this.total = res.data.total

      this.cardList.forEach((item, index) => {
        const aa = this.categoryList[0].label.find(x => x.id === item.taskTypeId).serviceName
        item.biaoqian = aa
      })
      console.log(this.cardList)
    },
    // 页码跳转
    handleCurrentChange(value) {
      this.currentPage = value
      this.titActive = 'moren'
      this.getPage()
    },
    // 按时间排序
    sort(val) {
      this.titActive = val
      this.cardList = this.cardList.reverse()
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
  }
</style>

<template>
  <div class="home" style="padding-top: 30px">
    <div class="product">
      <div class="main">
        <div class="cont">
          <div class="left">
            <img :src="obj.cover" alt />
          </div>
          <div class="middle"></div>
          <div class="right">
            <div class="tit">
              {{ obj.title }} <el-button type="primary" size="mini" style="margin-left: 20px;width: 45px;height: 24px;padding: 0;line-height: 24px;">预览</el-button>
            </div>
            <div class="gaiyao" v-html="obj.introduction"></div>
            <div class="row1">
              <div class="left2">作者：{{ obj.author }}</div>
              <div class="right2"></div>
            </div>
            <div class="row2">
              <div class="left2">编号：{{ obj.productId }}</div>
              <div class="right2">上传时间：{{ obj.updateTime }}</div>
            </div>
            <div class="btns">
              <div class="jiage">
                价格：
                <span>暂无定价</span>
              </div>
              <div class="san">
                <el-button class="btn1">加入购物车</el-button>
                <el-button class="btn2">打印模型</el-button>
                <el-button class="btn3">购买模型</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc">
      <div class="main" style="padding: 30px 0 150px">
        <div class="right">
          <div class="tit">商品详情</div>
          <div v-html="obj.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from '@/api/productDetail'

  export default {
    name: "home",
    data() {
      return {
        obj: {},
        key: ''
      };
    },
    created() {},
    mounted() {
      this.key = this.$route.query.key || '';
      this.getInfo()
    },
    methods: {
      async getInfo() {
        const res = await api.getInfo({id: this.key})
        this.obj = res.data
      },
    }
  };
</script>
<style lang="scss" scoped>
  .home {
    background-color: #f5f5fa;
    min-height: 100vh;
  }
  .cont {
    display: flex;
    height: 340px;
    width: 1200px;
    margin: 0 auto;

    .left {
      height: 340px;
      flex: 480;
      img {
        display: inline-block;
        width: 480px;
        height: 340px;
        border: 1px solid #ccc;
      }
    }
    .middle {
      height: 340px;
      width: 15px;
    }
    .right {
      height: 340px;
      background: #ffffff;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
      flex: 705;
      padding: 16px 0;
      .tit {
        padding: 0 30px;
        height: 26px;
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        line-height: 24px;
      }
      .gaiyao {
        padding: 0 30px;
        padding-top: 10px;
        height: 94px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #999999;
        line-height: 19px;
      }
      .row1 {
        padding: 0 30px;
        height: 30px;
        display: flex;
        .left2 {
          flex: 6;
        }
        .right2 {
          flex: 4;
        }
      }
      .row2 {
        padding: 0 30px;
        height: 30px;
        display: flex;
        .left2 {
          flex: 6;
        }
        .right2 {
          flex: 4;
        }
      }
      .btns {
        border-top: 6px solid #f5f5fa;
        .jiage {
          padding: 0 30px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #666666;
          line-height: 59px;
          height: 59px;
          span {
            font-size: 24px;
            font-family: MicrosoftYaHei;
            color: #ff3131;
            line-height: 31px;
          }
        }
        .san {
          height: 50px;
          padding: 0 30px;
          .btn1 {
            display: inline-block;
            width: 170px;
            height: 48px;
            background: #ffffff;
            border-radius: 4px;
            border: 1px solid #e9e9e9;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #333333;
            line-height: 21px;
          }
          .btn2 {
            display: inline-block;
            width: 170px;
            height: 48px;
            background: #ffffff;
            border-radius: 4px;
            border: 1px solid #ff3131;
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #ff3131;
            line-height: 21px;
            margin-left: 100px;
          }
          .btn3 {
            display: inline-block;
            width: 170px;
            height: 48px;
            background: linear-gradient(90deg, #ff3131 0%, #ff5e00 100%);
            border-radius: 4px;
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #ffffff;
            line-height: 21px;
            margin-left: 25px;
            border: none;
          }
        }
      }
    }
  }
  .desc {
    margin-top: 46px;
    background-color: #fff;
    ::v-deep .left{
      .left2{
        display: none;
      }
      .left3{
        display: none;
      }
    }
    .right{
      /*display: inline-block;
      vertical-align: top;
      width: calc(100% - 216px - 40px);*/
      width: 1200px;
      margin: 0 auto;

      .tit {
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        line-height: 26px;
        margin-bottom: 30px;
      }
      .de {
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: #333333;
        line-height: 24px;
      }
    }
  }
</style>



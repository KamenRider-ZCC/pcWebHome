<template>
  <div style="background: #F5F5FA;height:100vh">
    <div class="main-container">
      <!--面包屑-->
      <div class="mbx">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/dashboard' }">需求大厅</el-breadcrumb-item>
          <el-breadcrumb-item>需求详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="con" style="line-height: 24px">
        <h style="font-size: 20px;font-weight: bold">需求详情</h>
        <p style="margin: 20px 0;color:#666;">雇主 m**c 于 2020-09-09 15:54:00 发布该需求</p>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="4" style="color: #666">需求标题</el-col>
          <el-col :span="20">我要做个XXX3D打印</el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="4" style="color: #666">预算金额</el-col>
          <el-col :span="20">500-1000</el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="4" style="color: #666">需求描述</el-col>
          <el-col :span="20">
            <p>食用油油瓶3D打印设计</p>
            <p>品名：天山纸籽</p>
            <p>品类：红花籽油，亚麻籽油，胡麻籽油</p>
            <p>卖点：1）冷榨原生态，营养不打折；2）清淡口、降三高；3）非转基因</p>
            <p>定价：高端</p>
            <p>包装：5L塑料桶</p>
            <p>食用油油瓶3D打印设计</p>
            <p>品名：天山纸籽</p>
            <p>品类：红花籽油，亚麻籽油，胡麻籽油</p>
            <p>卖点：1）冷榨原生态，营养不打折；2）清淡口、降三高；3）非转基因</p>
            <p>定价：高端</p>
            <p>包装：5L塑料桶</p>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="4" style="color: #666">服务地区</el-col>
          <el-col :span="20">广东省-广州市</el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="4" style="color: #666">联系人</el-col>
          <el-col :span="20">刘先生 138****6721</el-col>
        </el-row>
        <div>
          <el-button class="ljbj" size="medium">立即报价</el-button>
          <el-button class="lxw" size="medium" icon="el-icon-chat-line-round">联系我</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
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

    .mbx {
      margin-bottom: 20px;
    }

    .con {
      background: #FFF;
      padding: 20px;

      .ljbj {
        background: #3452EC;
        color: #FFF;
        border-color: #3452EC;
      }

      .lxw {
        border-color: #3452EC;
        color: #3452EC;
      }
    }
  }

</style>

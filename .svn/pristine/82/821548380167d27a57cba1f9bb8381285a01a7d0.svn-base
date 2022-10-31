<template>
  <div class="bg">
    <div class="tit">
      <p>{{tit}}</p>
      <p style="font-size: 12px;font-weight: 100;margin-top: 5px;">{{titEn}}</p>
    </div>
    <div class="fg" />
    <div class="dl">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input size="medium" v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input size="medium" v-model="form.password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码">
          <el-input size="medium" v-model="form.yzm" autocomplete="off" style="width: 150px" />
          <div class="code-con">
            <canvas ref="myCanvas" class="J_codeimg" @click="clickMyCanvas">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
          </div>
        </el-form-item>
        <el-form-item class="denglu">
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="copyright"><p>Copyright 2008-2010 大唐融合物联科技无锡有限公司 京ICP备05042180号-1</p></div>
  </div>
</template>
<script>
export default {
  name: 'login_gov',
  data() {
    return {
      form: {
        username: '',
        password: '',
        yzmL: '',
      },
      tit: '项目申报平台',
      titEn: 'Project application Platform'
    }
  },
  mounted() {
    if (this.$route.query.tit) {
      const tit = this.$route.query.tit
      const titEn = this.$route.query.titEn
      this.tit = tit
      this.titEn = titEn
    }
    this.clickChange()
  },
  methods: {
    /* 生成4位随机数*/
    rand() {
      var str = 'abcdefghijklmnopqrstuvwxyz0123456789'
      var arr = str.split('')
      var validate = ''
      var ranNum
      for (var i = 0; i < 4; i++) {
        ranNum = Math.floor(Math.random() * 36) // 随机数在[0,35]之间
        validate += arr[ranNum]
      }
      this.CodeVal = validate
      return validate
    },
    /* 干扰线的随机x坐标值*/
    lineX() {
      var ranLineX = Math.floor(Math.random() * 140)
      return ranLineX
    },
    /* 干扰线的随机y坐标值*/
    lineY() {
      var ranLineY = Math.floor(Math.random() * 60)
      return ranLineY
    },
    clickChange() {
      var cxt = this.$refs.myCanvas.getContext('2d')
      cxt.fillStyle = '#d00210'
      cxt.fillRect(0, 0, 144, 60)
      /* 生成干扰线20条*/
      for (var j = 0; j < 20; j++) {
        cxt.strokeStyle = '#fff'
        cxt.beginPath() // 若省略beginPath，则每点击一次验证码会累积干扰线的条数
        cxt.moveTo(this.lineX(), this.lineY())
        cxt.lineTo(this.lineX(), this.lineY())
        cxt.lineWidth = 0.5
        cxt.closePath()
        cxt.stroke()
      }
      cxt.fillStyle = 'white'
      cxt.font = 'bold 30px Arial'
      cxt.fillText(this.rand(), 20, 27) // 把rand()生成的随机数文本填充到canvas中
    },
    /* 点击验证码更换*/
    clickMyCanvas(e) {
      e.preventDefault() // 阻止鼠标点击发生默认的行为
      this.clickChange()
    }
  }
}
</script>
<style lang="scss" scoped>
  .bg {
    background: url("../../assets/images/login/login_gov/bg.jpg") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    position: relative;

    .tit {
      font-size: 25px;
      font-weight: bold;
      color: #FFF;
      text-align: center;
      padding-top: 5%;
    }

    .fg {
      position: absolute;
      left: 50%;
      top: 20%;
      width: 2px;
      height: 60%;
      background-image: linear-gradient(#ffffff00, #ffffff, #ffffff00);
    }

    .dl {
      width: 400px;
      position: absolute;
      left: 48%;
      top: 30%;
      right: 0;
      bottom: 0;
      z-index: 1;
      padding-left: 50px;

      .el-form-item {
        margin-bottom: 30px;

        ::v-deep label {
          color: #FFF;
          font-weight: 100;
        }

        ::v-deep input {
          border-radius: 4px !important;
          border: 0 !important;
        }

        .code-con {
          float: right;
          width: 115px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          background-color: #d00210;
          text-align: center;
          font-size: 28px;
          letter-spacing: 3px;
          overflow: hidden;
        }
      }

      .denglu {
        margin-top: 40px;
        text-align: center;

        button {
          width: 100%;
          height: 40px;
          background: #002950;
          border: 0;

          &:hover, &:focus {
            background: #003f7b;
            border-color: #002950;
            color: #fff;
          }
        }
      }
    }

    .copyright {
      position: absolute;
      bottom: 30px;
      width: 100%;
      text-align: center;
      color: #FFF;
      font-size: 12px;
    }
  }
</style>

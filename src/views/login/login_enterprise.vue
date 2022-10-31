<template>
  <div class="bg">
    <div class="dl">
      <div class="tit">{{tit}}</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <span slot="label">
            <span class="span-box">
              <i class="el-icon-user" />
              <span>账号：</span>
            </span>
          </span>
          <el-input v-model="form.username" size="medium" type="username" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span class="span-box">
              <i class="el-icon-lock" />
              <span>密码：</span>
            </span>
          </span>
          <el-input v-model="form.password" size="medium" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span class="span-box">
              <i class="el-icon-postcard" />
              <span>验证码：</span>
            </span>
          </span>
          <el-input v-model="form.yzm" size="medium" autocomplete="off" style="width: 150px" />
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
  name: 'login_enterprise',
  data() {
    return {
      form: {
        username: '',
        password: '',
        yzmL: ''
      },
      tit: '供应链金融平台'
    }
  },
  mounted() {
    if (this.$route.query.tit) {
      const tit = this.$route.query.tit
      this.tit = tit
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
    background: url("../../assets/images/login/login_enterprise/bg.jpg") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    position: relative;

    .dl {
      width: 375px;
      height: 500px;
      background: rgba(196, 211, 231, 0.15);
      border-radius: 10px;
      border: 1px solid rgba(171, 187, 215, 0.4);
      position: absolute;
      left: 10%;
      top: 15%;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
      padding: 0 50px 50px 50px;

      .tit {
        font-size: 22px;
        font-weight: bold;
        color: #FFF;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;
      }

      ::v-deep label {
        color: #FFF;
        width: 100%;
        text-align: left;
      }

      ::v-deep input {
        background: rgba(255, 255, 255, 0.11) !important;
        border-radius: 4px !important;
        border: 0 !important;
        color: #FFF;
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

      .denglu {
        margin-top: 60px;
        text-align: center;

        button {
          width: 100%;
          height: 40px;
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

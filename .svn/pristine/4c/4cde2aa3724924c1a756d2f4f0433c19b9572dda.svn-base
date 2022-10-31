<template>
  <div class="main_container">
    <div class="login-bg register-bg">
      <div class="login-con">
        <a class="login-back" @click="goBackHome">返回首页</a>
        <img src="@/assets/images/login/login-logo.png" class="login-logo">
        <div class="login-input-line">
          <img src="@/assets/images/login/user-login.png">
          <input v-model.trim="username" :class="usernameClass" @blur="checkUserName" type="text" placeholder="请输入用户名">
          <div v-show="isUsernameErr" class="login-input-err">*请输入用户名</div>
        </div>
        <div class="login-input-line">
          <img src="@/assets/images/login/pass-login.png">
          <input v-model.trim="password" :class="passwordClass" type="password" placeholder="请输入6—12位可包含数字、字母及符号的密码">
          <div v-show="isPasswordErr" v-text="passwordText" class="login-input-err">*请输入密码</div>
        </div>
        <div class="login-input-line">
          <img src="@/assets/images/login/tel-login.png">
          <input v-model.trim="tel" :class="telClass" type="text" placeholder="请输入手机号">
          <div v-show="isTelErr" v-text="telText" class="login-input-err">*请输入手机号</div>
        </div>
        <div class="login-input-line login-code-input-line">
          <img src="@/assets/images/login/code-login.png">
          <input v-model.trim="code" :class="codeClass" type="text" placeholder="请输入验证码">
          <div class="code-con">
            <canvas ref="myCanvas" class="J_codeimg" @click="clickMyCanvas">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
          </div>
          <div v-show="isCodeErr" class="login-input-err" v-text="codeText">*请输入验证码</div>
        </div>
        <button type="button" class="login-btn" @click="register">注&nbsp;&nbsp;册</button>
        <div class="login-register"><a @click="goLogin">已有账号，去登录</a></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '@/api/login'
export default {
  name: 'Register',
  data() {
    return {
      usernameClass: '',
      passwordClass: '',
      telClass: '',
      codeClass: '',
      username: '',
      password: '',
      tel: '',
      code: '',
      isUsernameErr: false,
      isPasswordErr: false,
      isTelErr: false,
      isCodeErr: false,
      codeText: '',
      passwordText: '',
      telText: '',
      CodeVal: '',
      reg: /^1[34578]\d{9}$/
    }
  },
  mounted() {
    this.clickChange()
  },
  methods: {
    // 返回首页
    goBackHome() {
      this.$router.push({ path: '/dashboard' })
    },
    // 登录页
    goLogin() {
      this.$router.push({ path: '/login' })
    },
    /* ------------------------------*/
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
      cxt.fillText(this.rand(), 35, 35) // 把rand()生成的随机数文本填充到canvas中
    },
    /* 点击验证码更换*/
    clickMyCanvas(e) {
      e.preventDefault() // 阻止鼠标点击发生默认的行为
      this.clickChange()
    },
    /* 检验是否存在用户名 */
    async checkUserName() {
      api.checkUserName({ userName: this.username }).then(res => {
        if (res.code == 0) {
          alert('该用户名已存在')
        }
      }).catch(error => {

      })
    },
    /* 注册 */
    async register() {
      var username = this.username
      var password = this.password
      var tel = this.tel
      var code = this.code
      if (username == '') {
        this.usernameClass = 'err'
        this.isUsernameErr = true
        return false
      } else {
        this.usernameClass = ''
        this.isUsernameErr = false
      }
      if (password == '' || password.length < 6 || password.length > 12) {
        this.passwordClass = 'err'
        if (password == '') {
          this.passwordText = '*请输入密码'
        } else {
          this.passwordText = '*请输入6-12位密码'
        }
        this.isPasswordErr = true
        return false
      } else {
        this.passwordClass = ''
        this.isPasswordErr = false
      }
      if (tel == '' || !this.reg.test(tel)) {
        this.telClass = 'err'
        if (tel == '') {
          this.telText = '*请输入手机号'
        } else {
          this.telText = '*请输入正确格式手机号'
        }
        this.isTelErr = true
        return false
      } else {
        this.telClass = ''
        this.isTelErr = false
      }
      if (code == '' || code != this.CodeVal) {
        this.codeClass = 'err'
        if (code == '') {
          this.codeText = '*请输入验证码'
        } else {
          this.codeText = '*请输入正确验证码'
        }
        this.isCodeErr = true
        return false
      } else {
        this.codeClass = ''
        this.isCodeErr = false
      }

      try {
        const data = await api.register({
          userType: '1',
          userName: username,
          passWord: password,
          phone: tel,
          email: ''
        })
        if (data.code == 0) {
          this.$router.push({ path: '/login' })
        }
      } catch (err) {

      }

    }
  }
}
</script>
<style lang="scss" scoped>
  #error {
    color: #d00210;
    position: relative;
    top: 25px;
    display: none;
  }

  .main_container {
    .login-bg {
      height: 100%;
      min-height: 1000px;
      background: url('../../assets/images/login/login-bg.jpg') center no-repeat;
      background-size: 100% 100%;
      padding-top: 140px;
      min-width: 1200px;
      font-size: 14px;

      .login-con {
        width: 690px;
        margin: 0 auto;
        padding: 40px 100px 50px 100px;
        background-color: #fbfbfc;
        text-align: center;
        position: relative;

        .login-back {
          position: absolute;
          top: 25px;
          left: 30px;
          color: #d00210;
          font-size: 20px;
          font-weight:700;

          &:hover, &:focus, &:active {
            text-decoration: none;
            color: #231816;
          }
        }

        .login-logo {
          margin: 0 auto;
          margin-bottom: 40px;
        }

        .login-input-line {
          position: relative;
          background-color: #fff;
          height: 60px;
          margin-top: 40px;

          img {
            position: absolute;
            top: 12px;
            left: 15px;
          }

          input {
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 75px;
            border: none;
          }

          input:hover, input:active, input:focus {
            box-shadow: 0 0 3px rgba(208, 2, 16, 0.3);
            border: none;
            outline: none;
          }

          input.err {
            border: 1px solid #d00210;
          }

          .login-input-err {
            display: none;
            position: absolute;
            left: 15px;
            bottom: -18px;
            font-size: 12px;
            color: #d00210;
          }
        }

        .login-code-input-line {
          text-align: left;
          margin-bottom: 80px;

          input {
            width: 320px;
          }

          .code-con {
            float: right;
            width: 144px;
            height: 60px;
            line-height: 60px;
            color: #fff;
            background-color: #d00210;
            text-align: center;
            font-size: 28px;
            letter-spacing: 3px;
            overflow: hidden;
          }
        }

        .login-tip {
          color: #848484;
          padding: 0 20px;
          margin-top: 25px;
          margin-bottom: 60px;
          text-align: left;

          input {
            margin-right: 5px;
          }

          a {
            float: right;
            color: #848484;
          }
        }

        .login-btn {
          width: 100%;
          height: 56px;
          line-height: 56px;
          color: #fff;
          font-size: 20px;
          background-color: #d00210;
          border: none;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .login-register a {
          color: #848484;
        }
      }
    }

    .register-bg {
      background: url('../../assets/images/login/register-bg.jpg') center no-repeat;
      padding-top: 100px;
    }
  }
</style>

<style lang="scss">
  .el-message.el-message--error {
    display: none !important
  }
</style>

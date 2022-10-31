<template>
  <div class="login-container">
    <div class="login-bg"></div>
    <div class="login-form">
      <div class="title-container">
        <div class="lang-icon" @click="langShow = !langShow">
          <svg-icon icon-class="lang"></svg-icon>
          <p>{{ $t('keyWords.switchTxt') }}</p>
          <ul class="lang-list" v-show="langShow">
            <li @click.prevent="switchLang('cn')">
              <svg-icon class="mr10x" icon-class="zh"></svg-icon>
              简体中文
            </li>
            <li @click.prevent="switchLang('en')">
              <svg-icon class="mr10x" icon-class="en"></svg-icon>
              English
            </li>
          </ul>
        </div>
        <h3 class="title">
          <img src="@/assets/images/logo.png" alt="" />
          <span>{{ $t('systemName.name') }}</span>
        </h3>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane class="tab-item" :label="$t('keyWords.loginType1')" name="password" />
        <el-tab-pane class="tab-item" :label="$t('keyWords.loginType2')" name="code" />
      </el-tabs>
      <div style="padding: 0 110px">
        <el-form
          v-show="activeName === 'password'"
          ref="loginForm"
          :model="loginForm"
          auto-complete="on"
          label-position="left"
        >
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.loginAdmin"
              :placeholder="$t('placeholders.accountHolder')"
              type="text"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              :placeholder="$t('placeholders.passwordHolder')"
              type="password"
              maxlength="8"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
        </el-form>
        <el-form
          v-show="activeName === 'code'"
          ref="loginForm"
          :model="loginCodeForm"
          auto-complete="on"
          label-position="left"
        >
          <el-form-item prop="code-num" class="code-num">
            <el-input
              v-model.trim="loginCodeForm.loginAdmin"
              :placeholder="$t('placeholders.accountHolder')"
              type="text"
            />
            <a
              href="javascript:void(0)"
              :class="['code-btn', { disabled: disabled }]"
              ref="code"
              @click="getCode"
            >
              {{ codeMsg || $t('keyWords.getCodeTxt') }}
            </a>
          </el-form-item>

          <el-form-item prop="code">
            <el-input
              v-model.trim="loginCodeForm.code"
              :placeholder="$t('placeholders.codeHolder')"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
        </el-form>
        <div class="login-tip">
          {{ $t('keyWords.accountTip') }}
          <a href="#/register" class="green">{{ $t('keyWords.registerTxt') }}</a>
          <a href="#/changePwd" class="fR">{{ $t('keyWords.forgetTxt') }}</a>
        </div>
        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          {{ $t('keyWords.btnLoginTxt') }}
        </el-button>
      </div>
    </div>
    <div class="copyright">版权所有 | 立信管理后台</div>
  </div>
</template>

<script>
import { codeDown } from '@/utils/codeDown';

import * as user from '@/api/user';
import Validator from '@/utils/validator';
import { setToken } from '@/utils/auth';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginAdmin: process.env.NODE_ENV === 'development' ? '123456@qq.com' : '', //只开发环境才固定账号密码
        password: process.env.NODE_ENV === 'development' ? '12345678' : ''
      }, //账号密码
      loginCodeForm: {
        loginAdmin: '',
        code: ''
      }, //账号验证码
      loading: false,
      activeName: 'password', // password, code，
      codeMsg: null,
      disabled: false,
      langShow: false,
      timer: null
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect; // 记录url 传redirect值
      },
      immediate: true
    }
  },
  methods: {
    // 登录
    handleLogin() {
      let validator = new Validator();
      if (this.activeName === 'password') {
        validator.add(this.loginForm.loginAdmin, ['isNonEmpty', '账号不能为空']);
        validator.add(this.loginForm.password, ['isNonEmpty', '密码不能为空']);
      } else {
        validator.add(this.loginCodeForm.loginAdmin, ['isNonEmpty', '账号不能为空']);
        validator.add(this.loginCodeForm.code, ['isNonEmpty', '验证码不能为空']);
      }
      let msg = validator.start();
      if (msg) {
        this.$message.warning(msg);
        return;
      }
      //使用密码方式登录
      if (this.activeName === 'password') {
        this.loginByPassword(this.loginForm);
      } else {
        //验证码方式
        this.loginByCode(this.loginCodeForm);
      }
    },
    //密码方式登录
    async loginByPassword(req) {
      this.loading = true;

      //*************************************************************************/
      //let { data } = await user.loginByPassword(req); //请求接口返回成功数据
      ///////////////////////////////////////////上下切换//////////////////////////
      //测试数据data 开发删除
      let { data } = {
        data: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MCI',
        code: 200,
        msg: '登录成功'
      };

      //*************************************************************************/
      setToken(data);
      clearInterval(this.timer);
      this.$router.push({ path: this.redirect || '/' }); // 有redirect跳转对应页面  没有跳转默认页面
      this.loading = false; // 关闭动画
    },
    //验证码方式
    async loginByCode(req) {
      this.loading = true;
      let { data } = await user.loginByCode(req);
      setToken(data);
      clearInterval(this.timer);
      this.$router.push({ path: this.redirect || '/' }); // 有redirect跳转对应页面  没有跳转默认页面
      this.loading = false; // 关闭动画
    },
    // 获取验证码
    async getCode() {
      if (this.disabled) {
        return;
      }
      if (!this.loginCodeForm.loginAdmin) {
        this.$message.warning('请输入账号');
        return;
      }
      let req = {};
      if (this.loginCodeForm.loginAdmin.includes('@')) {
        req['email'] = this.loginCodeForm.loginAdmin;
      } else {
        req['mobile'] = this.loginCodeForm.loginAdmin;
      }

      this.$message.success('发送成功');
      this.timer = codeDown(this.codeMsg, 60, msg => {
        this.disabled = /\d/g.test(msg);
        this.codeMsg = msg;
      });
    },
    switchLang(val) {
      this.$i18n.locale = val;
      localStorage.setItem('lang', val);
    }
  }
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #b8b8b8;

@supports (-webkit-mask: none) and (not (caret-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 40px;

    input {
      background-color: transparent;
      -webkit-appearance: none;
      padding: 12px 5px 12px 15px;
      color: #000;
      height: 40px;
      caret-color: $cursor;
      border: 1px solid #dcdfe6;
      border-radius: 4px;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .code-num {
    .el-form-item__content {
      display: flex;
      .code-btn {
        text-align: right;
        width: 110px;
        color: #42b983;
        &.disabled {
          color: #d3cccc;
        }
      }
      .el-input {
        flex-grow: 1;
      }
    }
  }
  .login-form {
    .el-tabs__header {
      margin-bottom: 35px;
    }
  }
  .el-form {
    /*padding: 0 110px;*/
  }
  .el-form-item {
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 5px;
    color: #454545;
  }

  .el-tabs__nav {
    float: none;
    margin: 0 auto;
    width: 240px;
    /*text-align: center;*/

    .el-tabs__item {
      padding: 0;
      text-align: center;
      width: 50%;
      color: #999;
      &.is-active {
        color: #005634;
        font-weight: 600;
      }
    }

    .el-tabs__active-bar {
      /*background-color: #005634;*/
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #f8f8f8;
$dark_gray: #889aa4;
$light_gray: #eee;
$white: #fff;
$black: #000;
$green: #77946d;
$grey: #b8b8b8;

.green {
  color: $green;
}
.grey {
  float: right;
}
p {
  margin: 0;
}
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background: $bg;
  overflow: hidden;

  .login-bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 50vh;
    background: url('../../assets/images/MainTop.jpg') no-repeat center center / cover;
  }

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    padding: 30px 0 20px;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    background-color: $white;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 0 4px #eaeaea;
    transform: translate(-50%, -50%);

    .tab-item {
      text-align: center;
      width: 50%;
    }
  }
  .login-tip {
    margin-bottom: 24px;
    font-size: 13px;
    color: $grey;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    .lang-icon {
      position: absolute;
      top: 0;
      right: 30px;
      text-align: center;
      > .svg-icon {
        font-size: 25px;
        cursor: pointer;
      }
      .lang-list {
        position: absolute;
        right: 0;
        top: 35px;
        z-index: 1000;
        padding-left: 0;
        background-color: #fff;
        width: 120px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 0 4px #aaa;
        li {
          display: flex;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          &:not(:first-child) {
            border-top: 1px solid #ddd;
          }
        }
      }
    }
    .title {
      display: flex;
      margin: 0 auto 20px;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: $black;
      text-align: center;
      font-weight: bold;

      img {
        margin-right: 15px;
        width: 40px;
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #999;
  }
}
</style>

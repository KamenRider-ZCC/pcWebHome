<template>
  <div class="navbar">
    <img src="@/assets/images/logo2.png" class="navbar_logo" @click="goBackHome">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      style="margin-left: 120px"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">商城</el-menu-item>
      <el-menu-item index="3">需求中心</el-menu-item>
      <el-menu-item index="4">设计师</el-menu-item>
      <el-menu-item index="5">模型库</el-menu-item>
    </el-menu>
    <div style="display: flex;flex-grow: 1"></div>
    <el-input
      v-model="input"
      placeholder="输入商品名称"
      prefix-icon="el-icon-search"
      size="small"
      style="width: 180px;margin-right: calc((100% - 1200px) / 2)"
    >
    </el-input>
    <!--    <el-button
      size="small"
      type="login"
      style="width: 80px; margin-left: 10px"
    >
      登录
    </el-button>
    <el-button
      size="small"
      type="reg"
    >
      用户注册
    </el-button>-->
  </div>
</template>

<script>
import * as api from '@/api/application'
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      input: '',
      searchKey: '',
      appName: '',
      appId: '',
      applicationDetailList: [],
      activeIndex: '2'
    }
  },
  computed: {
    // ...mapGetters(['productList', 'applicationList', 'resourcesList', 'supportList', 'webList']),
    locale() {
      return this.$i18n.locale
    }
  },
  watch: {
    activeIndex(val) {
      console.log(11)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // 触发搜索
    onSearch() {
      if (this.searchKey.length > 0) {
        this.$router.push({
          path: '/product/index/search',
          query: {
            searchKey: this.searchKey
          }
        })
      }
    },
    // 修改语言
    changLang(lang) {
      window.open(this.webList.find(item => { return item.type == lang }).content)
    },
    // 返回首页
    goBackHome() {
      this.$router.push({ path: '/dashboard' })
    },
    // 获得应用详情
    async getAppDetail(item) {
      this.appName = item.name
      this.appId = item.id
      const { data } = await api.getPage({
        typeId: item.id,
        limit: 15,
        offset: 1
      })
      this.applicationDetailList = data
    },
    // 去产品列表
    goToProduct(ele) {
      this.$router.push({
        path: '/product/index/list',
        query: {
          typeId: ele.id,
          fatherId: ele.superiorId,
          classify: ele.classify
        }
      })
    },
    // 去资源中心
    goToResources(item) {
      if (item.id == 'COAs') {
        this.$router.push({
          path: '/resources/index/COAs'
        })
      } else {
        this.$router.push({
          path: '/resources/index/detail',
          query: {
            type: item.type,
            id: item.id
          }
        })
      }
    },
    // 去支持
    goToSupport(item) {
      this.$router.push({
        path: '/support/list',
        query: {
          id: item.id
        }
      })
    },
    // 去支持列表
    goToSupportList() {
      this.$router.push({
        path: '/support/index'
      })
    },
    // 去应用列表
    goToAppList() {
      this.$router.push({
        path: '/applications/list',
        query: {
          typeId: this.appId
        }
      })
    },
    // 去应用详情
    goToAppDetail(item) {
      this.$router.push({
        path: '/applications/detail',
        query: {
          id: item.id
        }
      })
    },
    // 去新闻
    goToNews() {
      this.$router.push({
        path: '/news/list'
      })
    },
    // 去关于我们
    goToAbout(url) {
      this.$router.push({
        path: url
      })
    },
    // 	去联系我们
    goToContact() {
      this.$router.push({
        path: '/contact/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 60px;
    /*overflow: hidden;*/
    background: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    .navbar_logo {
      height: 36px;
    }
    @media only screen and (max-width: 1435px) {
      .myHeader {
        margin: 0 0 0 -60px !important;
      }
    }
    .myHeader {
      margin: 0 36px 0 36px;
      transition: all 1s;
      opacity: 1;
      transform: translateY(0)!important;
      min-width: 695px;
      ::v-deep .el-menu-item {
        font-weight: bold;
        color: #6F6F6F
      }
      ::v-deep .el-submenu__title {
        font-weight: bold;
        color: #6F6F6F
      }
    }
    ::v-deep .el-menu-item {
      padding: 0 32px;
    }
    ::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      color: #fff !important;
      border-bottom: 2px solid #3452EC !important;
      background-color: #3452EC !important;
    }
    /*::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
      color: #6F6F6F;
      border-bottom: 2px solid transparent;
    }*/
    ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: 2px solid #3452EC !important;
      background-color: #3452EC !important;
      color: #fff !important;
    }
    /*::v-deep .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
      background-color: #3452EC !important;
      color: #fff !important;
      border-bottom: 2px solid #3452EC !important;
    }*/
    ::v-deep .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
      border-bottom: 2px solid transparent;
    }
    ::v-deep .el-input__inner {
      border-radius: 16px;
      background-color: #f6f6f6;
      border: 1px solid #ddd;
    }
    .el-button--login {
      border-color: #D80E19;
      color: #D80E19
    }
    .el-button--reg {
      border-color: #D80E19;
      color: #fff;
      background-color: #D80E19;
    }
  }
  .dropDown {
    border: none;
    width: 100vw;
    min-width: 1286px;
    background-color: rgba(252, 252, 252, 1)
  }
  @media only screen and (max-width: 1435px) {
    .dropDownCard {
      padding: 0 0 0 255px !important;
    }
  }
  .dropDownCard {
    padding: 0 0 0 350px;
  }
  .subTitle {
    font-size: 16px;
    font-weight: bold;
    color: #D9141F;
  }
  .subText {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }
  .thText {
    margin-bottom: 16px;
    display: block;
    font-size: 14px;
    color: #888888;
    font-weight: 600;
    cursor: pointer;
  }
  .myDivider {
    margin: 16px 30% 16px 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
  }
</style>

<style>
  .el-menu--horizontal {
    left: 0 !important;
  }
  .el-menu--popup {
    background-color: rgba(252, 252, 252, 1) !important;
  }
</style>

import { logout, getMenu } from '@/api/user';
import { removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const state = {
  userinfo: null //存放用户信息
};

const mutations = {
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo;
  }
};

const actions = {
  // 用户登录
  // login({ commit }, userInfo) {
  //   return new Promise((resolve, reject) => {
  //     loginByPassword({ loginAdmin: '810567505@qq.com', password: '12345678' })
  //       .then(response => {
  //         const { data } = response;

  //         setToken(data);
  //         resolve();
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // },

  // 获取用户信息和权限菜单
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      //********************************************************************************************/
      // getMenu()
      //   .then(res => {
      //     let { userinfoEntity } = res.data;
      //     userinfoEntity['fileName'] = userinfoEntity.fileName
      //       ? process.env.VUE_APP_FILE_URL + userinfoEntity.fileName
      //       : require('@/assets/images/u694.png');
      //     commit('SET_USERINFO', userinfoEntity);
      //     resolve(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     reject(err);
      //   });
      ///////////////////////////////////////////上下切换////////////////////////////////////////
      //测试数据data 开发删除
      let res = require('@/api/userInfo-routerMenu.json'); //模拟接口数据
      let { userinfo } = res.data;
      userinfo['fileName'] = userinfo.fileName
        ? process.env.VUE_APP_FILE_URL + userinfo.fileName
        : require('@/assets/images/u694.png');

      commit('SET_USERINFO', userinfo); //存入vuex
      resolve(res.data); //返回
      //********************************************************************************************/
    });
  },

  // 用户退出
  logout({ dispatch }) {
    return new Promise((resolve, reject) => {
      // logout()
      //   .then(() => {
      try {
        removeToken(); // 移除token***
        resetRouter(); // 移除路由***

        dispatch('permission/clearAuthRouter', [], { root: true }); //清空权限路由菜单
        dispatch('tagsView/delAllViews', null, { root: true }); //清空标签和缓存

        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
      // })
      // .catch(error => {
      //   reject(error);
      // });
    });
  },

  // 移除token
  resetToken() {
    return new Promise(resolve => {
      removeToken(); // 移除token
      resetRouter(); // 移除路由

      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

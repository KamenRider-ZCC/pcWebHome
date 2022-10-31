// 根路由相关的hook 钩子 全局钩子
import router from './index'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 获取token 从cookie中
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login'] // 免登陆可进入的页面

router.beforeEach(async(to, from, next) => {
  // 开启进度条
  NProgress.start()
  // 设置页面title
  document.title = getPageTitle(to.meta.title)
  // const productList = store.getters.productList
  // if (productList.length == 0) {
  //   try {
  //     await store.dispatch('product/getList')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const applicationList = store.getters.applicationList
  // if (applicationList.length == 0) {
  //   try {
  //     await store.dispatch('application/getList')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const resourcesList = store.getters.resourcesList
  // if (resourcesList.length == 0) {
  //   try {
  //     await store.dispatch('resources/getList')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const supportList = store.getters.supportList
  // if (supportList.length == 0) {
  //   try {
  //     await store.dispatch('support/getList')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const webList = store.getters.webList
  // if (webList.length == 0) {
  //   try {
  //     await store.dispatch('web/getList')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  next()
  // // 决定用户是否已经登录了
  // const hasToken = getToken();
  // if (hasToken) {
  //   // 有token
  //   if (to.path === '/login') {
  //     // 如果已经登录了，重定向到主页面
  //     next({ path: '/' });
  //   } else {
  //     const authRoutes = store.getters.authRoutes; //取到vuex内的权限菜单数据
  //     //判断有无权限菜单
  //     if (authRoutes && authRoutes.length > 0) {
  //       next();
  //     } else {
  //       // 如果没有权限菜单则需要接口请求

  //       try {
  //         // 通过用token拿到当前用户的权限菜单
  //         let { userRouterMenu } = await store.dispatch('user/getInfo');
  //         // 生成处理过的权限路由
  //         const authRoutes = await store.dispatch('permission/generateAuthRouter', userRouterMenu);

  //         //动态添加权限路由
  //         router.addRoutes(authRoutes);
  //         next({ ...to, replace: true }); // 展开...to 传入path是以确保addRoutes是完整的  replace: true 当用户点击浏览器后退按钮时不会一直在同一个页面
  //       } catch (error) {
  //         // 移除token，重定向到登录页去重新登录
  //         await store.dispatch('user/resetToken');
  //         console.error(error);
  //         Message.error(error);
  //         next(`/login`);
  //       }
  //     }
  //   }
  // } else {
  //   // 没有token
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在登录白名单中直接
  //     next();
  //   } else {
  //     // 其他无权访问的页面将重定向到登录页面
  //     next(`/login?redirect=${to.path}`);
  //   }
  // }
  NProgress.done() // 结束进度条
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})

import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import i18n from '@/i18n/i18n'

import moment from 'moment'
Vue.prototype.$moment = moment
// import enLang from 'element-ui/lib/locale/lang/en'; // 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import '@/router/hook' //路由的全部钩子

import './icons' // icon

import * as filters from './filters' // global filters

import BaiduMap from 'vue-baidu-map'

import VScaleScreen from 'v-scale-screen'

import * as echarts from 'echarts'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$echarts = echarts

Vue.use(VScaleScreen)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "D3VQZInKXopH0l8KCyowwATXFetzrX61",
  v: "2.0" // 默认使用3.0
  // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
})

Vue.use(Element, {
  size: Cookies.get('size') || 'mini' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})

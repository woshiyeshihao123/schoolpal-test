import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用API文件
import api from './api/index.js'
// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

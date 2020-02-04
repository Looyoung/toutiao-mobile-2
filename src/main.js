import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import '@/styles/index.less'
import 'amfe-flexible'
import plugin from '@/utils/plugin' // 自定义插件

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(plugin) // 注册小插件 会调用插件中的install方法

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

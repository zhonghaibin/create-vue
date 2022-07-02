import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils'
import iView from 'iview'
import config from '@/config'
import './theme/index.less'
Vue.prototype.$config = config
Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './assets/css/reset.less'
import './assets/css/public.less'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: 'static/images/loading.png',
  error: 'static/images/loading.png'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

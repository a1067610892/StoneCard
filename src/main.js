// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import iView from 'iview'
import router from './router'
import fastclick from 'fastclick'
import 'lib-flexible'
import '../src/assets/css/reset.css'
import '../src/assets/css/border.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(iView)
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

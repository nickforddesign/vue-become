import Vue from 'vue'
import App from './App'
import VueBecome from '../index'

Vue.config.productionTip = false

Vue.use(VueBecome)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from "@/router/router";
import axios from '@/plugins/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



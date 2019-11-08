import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "../router";
import VueRouter from "vue-router";
import '../src/style/global.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

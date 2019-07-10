import Vue from 'vue'
import App from './App.vue'
import router from './routers/'


import './assets/styles/reset.styl'
import './mixins/scroll'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


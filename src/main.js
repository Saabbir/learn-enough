import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Prism from 'prismjs'
Prism.highlightAll();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

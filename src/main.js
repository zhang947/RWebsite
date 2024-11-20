import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import i18n from './langs/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

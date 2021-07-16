import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import aimeeUi from './packages'
Vue.use(aimeeUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

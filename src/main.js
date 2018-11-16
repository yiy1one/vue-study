import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'


Vue.config.productionTip = false


Vue.use(Vuex)

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

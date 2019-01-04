import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePrism from 'vue-prism'

Vue.use(VuePrism)
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash.js'

Vue.config.productionTip = false
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
 iconfont: 'fa4'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

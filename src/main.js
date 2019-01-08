import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-dragula'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePrism from 'vue-prism'

Vue.use(VuePrism)
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-markup.js'
import { Chrome } from 'vue-color'

Vue.config.productionTip = false
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
 iconfont: 'fa4'
})

Vue.component('chrome-picker', Chrome)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    console.log(Vue)
    
  }
}).$mount('#app')

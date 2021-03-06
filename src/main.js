import Vue from 'vue'
import './plugins/vuetify'
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

Vue.component('chrome-picker', Chrome)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

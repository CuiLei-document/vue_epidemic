import Vue from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Echarts from './plugins/echarts'
import '../node_modules/echarts/map/js/china'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import './vant/vant'
Vue.component('Tabs',Tabs)
Vue.component('Tab',Tab)
Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

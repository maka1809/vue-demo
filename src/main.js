import Vue from 'vue'
import App from './App.vue'
//import Bulma from 'bulma'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')

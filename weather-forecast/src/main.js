import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

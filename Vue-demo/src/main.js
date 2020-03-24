import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
Vue.use(less)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.config.apiPaths = {
  basePath : process.env.API_BASE_URL + ':' + process.env.API_BASE_PORT,
  imageServerPath: process.env.IMAGE_SERVER_PATH
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

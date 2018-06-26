// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Listtree from './plugin/listtree/lib'

Vue.use(Listtree, {
  listData: require('../static/data.json'),
  router,
  icon: {
    source: ['../static/arrow_triangle-down.png', '../static/arrow_triangle-right.png']
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

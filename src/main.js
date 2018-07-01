// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Listtree from './plugin/listtree/lib'

Vue.use(Listtree, {
  listData: require('../static/data.json'),
  indent: 20,
  spacing: 10,
  // animation: false,
  // icon: ['../static/arrow_triangle-right.png', 90],
  // icon: ['iconfont icon-wenjianjiashouqi', 'iconfont icon-wenjianjiazhankai'],
  // icon: ['iconfont icon-shousuo2', 90],
  // icon: 6,
  // iconSize: 18,
  open: 1
})
Vue.prototype.$push = function (r) {
  router.push(r)
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

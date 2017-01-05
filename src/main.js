// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Promise from 'es6-promise/auto'
import store from './vuex'

import App from './App'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from '@/plugins/vuetify' // path to vuetify export


import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/Test', component: Test }
  ]
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')

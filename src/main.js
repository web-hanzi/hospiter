// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(YDUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})

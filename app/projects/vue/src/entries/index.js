import Vue from 'vue';
import './index.less';

import App from '../pages/App/App.vue';
import router from '../routes/index.js';

new Vue({
  el: "#root",
  router,
  render: h => h(App),
})

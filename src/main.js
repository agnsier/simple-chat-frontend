import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIo from 'vue-socket.io'

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(new VueSocketIo({
    debug: true,
    connection: 'http://localhost:3000'
  }));
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

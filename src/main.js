import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from "axios";
import router from './router'


Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

/*修改vue网页title名称*/
document.title = '测试页面';

new Vue({
  router,
  render: h => h(App),
  mounted() {

  }
}).$mount("#app");


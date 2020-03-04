import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCompositionApi from "@vue/composition-api";
/* 引入英文语言包 */
import locale from "element-ui/lib/locale/lang/en";

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

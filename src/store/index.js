import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import login from "./modules/login.js";

export default new Vuex.Store({
  // 模块化
  modules: {
    login
  }
});

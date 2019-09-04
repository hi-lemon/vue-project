import Vue from "vue";
import $ from "jquery";
window.$ = $;
import Cookies from "js-cookie";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import Element from "element-ui";
import "./styles/element-variables.scss";

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";
import bus from "@/utils/bus";
Vue.prototype.$bus = bus;
import Log from "@/utils/log";
Vue.prototype.$log = Log;
import { errorMsgTip } from "@/utils/common";
// 错误提示
Vue.prototype.$errorMsgTip = errorMsgTip;
import "./permission"; // permission control
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from "../mock";
// if (process.env.NODE_ENV === "production") {
//   mockXHR();
// }

Vue.use(Element, {
  size: Cookies.get("size") || "medium" // set element-ui default size
});

Vue.config.productionTip = false;
Vue.config.errorHandle = function(err, vm, info) {
  Log.error(err);
  Log.error(vm);
  Log.error(info);
};

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

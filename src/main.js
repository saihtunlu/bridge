import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "./axios";
Vue.prototype.$axios = axios;
//import css
import "./assets/css/responsive.css";
import "./assets/css/animation.css";
import "./assets/css/main.css";
import "hooper/dist/hooper.css";

import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary: "#4E008E",
  },
});

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

import Transitions from "vue2-transitions";
Vue.use(Transitions);

// import VirtualCollection from "vue-virtual-collection";
// Vue.use(VirtualCollection);

import vueAwesomeCountdown from "vue-awesome-countdown";
Vue.use(vueAwesomeCountdown, "vac");

//languages
import i18n from "./i18n";
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount("#app");

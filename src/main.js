import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "./axios";
Vue.prototype.$axios = axios;
import VueGtag from "vue-gtag";
Vue.use(
  VueGtag,
  {
    config: { id: "UA-180168494-1" },
    pageTrackerTemplate(to) {
      return {
        page_title: to.name,
        page_path: to.path,
      };
    },
  },
  router
);

import VueHtml2Canvas from "vue-html2canvas";
Vue.use(VueHtml2Canvas);
//import css
import "./assets/css/responsive.css";
import "./assets/css/animation.css";
import "./assets/css/main.css";
import "hooper/dist/hooper.css";

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

//languages
import i18n from "./i18n";
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount("#app");

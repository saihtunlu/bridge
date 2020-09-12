import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

//import css
import "./assets/css/responsive.css";
import "./assets/css/animation.css";
import "./assets/css/main.css";
import "./assets/boxIcon/css/boxicons.min.css";
import "../node_modules/slick-carousel/slick/slick.css";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary: "#4E008E",
  },
});
import {
  SharedElementRouteGuard,
  SharedElementDirective,
} from "v-shared-element";
Vue.use(SharedElementDirective);
router.beforeEach(SharedElementRouteGuard);

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

import VirtualCollection from "vue-virtual-collection";
Vue.use(VirtualCollection);

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

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../screens/home.vue";
import Wall from "../screens/wall.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { index: 1 },
  },
  {
    path: "/wall",
    name: "Wall",
    component: Wall,
    meta: { index: 2 },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

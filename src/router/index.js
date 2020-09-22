import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Wall from "../screens/wall.vue";
import Home from "../screens/home.vue";
import Admin from "../screens/admin.vue";
import Login from "../screens/login.vue";
import Stories from "../screens/stories.vue";
import Audio from "../screens/audio.vue";

const routes = [
  {
    path: "/wall",
    name: "Wall",
    component: Wall,
  },
  {
    path: "/audio",
    name: "Audio",
    component: Audio,
  },
  {
    path: "/stories",
    name: "Stories",
    component: Stories,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresVisitor: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        name: "Login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (isLoggedIn()) {
      next({
        name: "Admin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

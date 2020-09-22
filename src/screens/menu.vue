<template>
  <Flipper
    :spring="{ stiffness: 50, damping: 15 }"
    style="max-height:100vh;z-index:1001; max-width:100vw;overflow:hidden"
    :flip-key="key"
  >
    <div class="flex-center pointer" @click="open = !open" id="menuBtn" v-if="!open">
      <Flipped style="position:absolute" flip-id="square">
        <div class="dot-menu"></div>
      </Flipped>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        :fill="color"
        style="z-index:10000001;"
        height="35"
        viewBox="0 0 24 24"
      >
        <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
      </svg>
    </div>
    <Flipped flip-id="square" v-if="open">
      <div class="dot-animation"></div>
    </Flipped>

    <div
      style="max-height:100vh; margin-left:-15px;margin-right:-15px;z-index:1000000; max-width:100vw;overflow:hidden"
    >
      <div class="sidebar side-padding animated fadeIn" v-if="open">
        <div class="flex-x-between w-100 flex-align-center" style="margin-bottom:1rem; ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            @click="open = !open"
            width="35"
            class="pointer mt-2"
            fill="#fff"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
            />
          </svg>

          <img src="/image/white-logo.png" class="logo mt-3" width="200px" alt />
        </div>
        <p class="white text my-0 pointer" @click="$router.push('/')">{{ $t("home") }}</p>
        <div class="divider"></div>
        <p
          class="white text my-0 pointer"
          @click="$router.push({ name: 'Wall', params: { show: false } })"
        >{{ $t("wall") }}</p>
        <div class="divider"></div>
        <p class="white text mt-0 pointer">{{ $t("detail") }}</p>
        <div class="divider"></div>
        <p
          class="white text mt-0 pointer"
          @click="$router.push({ name: 'Stories' })"
        >{{ $t("stories") }}</p>
        <div class="divider"></div>
        <p class="white text mt-0 pointer" v-if="LoggedIn" @click="logout">{{ $t("Logout") }}</p>
        <div class="w-100 flex-center" style="position:absolute; bottom:200px;left:0px;right:0px;">
          <Lang class="mx-auto" />
        </div>
        <footerFB />
      </div>
    </div>
  </Flipper>
</template>

<script>
import { Flipper, Flipped } from "vue-flip-toolkit";
import Lang from "../components/LangaugeSwitcher";
import footerFB from "../components/footerFB";
export default {
  props: {
    color: {
      type: String,
      default: "rgb(var(--vs-primary))",
    },
  },
  components: {
    Flipper,
    Flipped,
    Lang,
    footerFB,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("isLoggedIn");
      window.location.reload();
    },
  },
  computed: {
    key() {
      return this.open.toString();
    },
    LoggedIn() {
      return localStorage.getItem("isLoggedIn");
    },
  },
};
</script>
<style>
div#menuBtn {
  position: absolute;
  z-index: 1000000000;
  left: 15px;
  top: 14px;
  padding: 5px;
}
.dot-menu {
  background: rgb(var(--vs-primary));
  border-radius: 100%;
  width: 3px;
  height: 3px;
}

.sidebar {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 100000000;
}
.dot-animation {
  background: rgb(var(--vs-primary));
  border-radius: 100%;
  position: fixed !important;
  z-index: 10000000;
}
</style>

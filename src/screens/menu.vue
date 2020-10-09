<template>
  <Flipper :spring="{ stiffness: 80, damping: 15 }" :flip-key="key">
    <div
      class="flex-center pointer"
      @click="open = !open"
      id="menuBtn"
      v-if="!open"
    >
      <Flipped style="position: absolute" flip-id="square">
        <div class="dot-menu"></div>
      </Flipped>
      <div
        v-if="color === 'var(--vs-primary)' && !hideBg"
        class="dot-menu"
        style="
          position: absolute;
          background: #efefef !important;
          width: 48px !important;
          z-index: 10000;
          height: 48px !important;
        "
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        :fill="`rgb(${color})`"
        style="z-index: 10000001"
        height="35"
        viewBox="0 0 24 24"
      >
        <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
      </svg>
    </div>
    <div
      class="menu-content max-vh-100 flex-center"
      style="z-index: 1000000"
      v-if="open"
    >
      <Flipped flip-id="square">
        <div class="dot-animation"></div>
      </Flipped>
      <div class="sidebar side-padding animated fadeIn">
        <div
          class="flex-x-between w-100 flex-align-center"
          style="margin-bottom: 1rem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            @click="open = !open"
            width="35"
            class="pointer"
            fill="#fff"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
            />
          </svg>
          <img src="/image/white-logo.svg" class="logo" width="220px" alt />
        </div>
        <p class="white text my-0 pointer" @click="changeRoute('Home')">
          {{ $t("home") }}
        </p>
        <div class="divider"></div>
        <p class="white text my-0 pointer" @click="changeRoute('Wall')">
          {{ $t("wall") }}
        </p>
        <!-- <div class="divider"></div>
        <p class="white text mt-0 pointer">{{ $t("detail") }}</p>-->
        <!-- <div class="divider"></div>
        <p class="white text mt-0 pointer" @click="changeRoute('Stories')">
          {{ $t("stories") }}
        </p> -->
        <div class="divider" v-if="LoggedIn"></div>
        <p class="white text mt-0 pointer" v-if="LoggedIn" @click="logout">
          {{ $t("Logout") }}
        </p>
        <div
          class="w-100 flex-center"
          style="position: absolute; bottom: 215px; left: 0px; right: 0px"
        >
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
      default: "var(--vs-primary)",
    },
    hideBg: {
      type: Boolean,
      default: false,
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
  mounted() {},
  methods: {
    changeRoute(data) {
      if (this.$route.name === data) {
        this.open = false;
      } else {
        if (data === "Wall") {
          this.$router.push({ name: "Wall", params: { show: false } });
        } else {
          this.$router.push({ name: data });
        }
      }
    },
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
  z-index: 1000;
  left: 15px;
  top: 14px;
  padding: 5px;
}
.dot-menu {
  background: rgb(var(--vs-primary));
  border-radius: 100% !important;
  width: 45px;
  height: 45px;
}

.sidebar {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 1000;
}
.dot-animation {
  background: rgb(var(--vs-primary));
  border-radius: 100%;
  /* position: fixed !important; */
  z-index: 1000;
}
.menu-content {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  overflow: visible;
}
</style>

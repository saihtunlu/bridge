<template>
  <div id="app" style="min-height: 100vh" @wheel.passive="OnWheel" class="container-fluid">
    <Switcher v-if="showSwitcher" />
    <Countdown v-if="release && !showSwitcher" />
    <Flipper
      :flip-key="$route.fullPath"
      v-if="!release && !showSwitcher"
      :spring="{ stiffness: 50, damping: 15 }"
    >
      <router-view :key="$route.fullPath" :scrollPosition="scroll" />
    </Flipper>
  </div>
</template>

<script>
import { Flipper } from "vue-flip-toolkit";
import Countdown from "./screens/countdown";
import Switcher from "./screens/switcher";
import "hooper/dist/hooper.css";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      scroll: [{}],
    };
  },
  components: {
    Countdown,
    Switcher,
    Flipper,
  },
  created() {
    var cookies = document.cookie.split("; ");
    var check = cookies.find((row) => row.startsWith("lang"));
    if (check) {
      var lang = check.split("=")[1];
      this.$store.commit("setLang", lang);
      this.$store.commit("setShowSwitcher", false);
      this.$i18n.locale = lang;
    } else {
      this.$store.commit("setShowSwitcher", true);
    }

    window.addEventListener("DOMMouseScroll", this.detectMouseWheelDirection);

    this.$store.dispatch("getPosts", { page: 1 });
  },
  computed: {
    ...mapGetters({}),
    ...mapState(["release", "showSwitcher"]),
    key() {
      return this.$route.path;
    },
  },
  methods: {
    OnWheel(event) {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        this.scroll = [
          {
            key: new Date(),
            data: "top",
          },
        ];
      } else {
        this.scroll = [
          {
            key: new Date(),
            data: "bottom",
          },
        ];
      }
    },
  },
};
</script>
<style>
.slither-enter-active,
.slither-leave-active {
  transition: transform 1s;
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
}

.drain-enter-active,
.drain-leave-active {
  transition: transform 1s;
}

.drain-enter,
.drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to,
.drain-leave {
  transform: translateY(0);
}
</style>

<template>
  <div id="app" @wheel.passive="OnWheel" class="container-fluid">
    <Switcher v-if="showSwitcher" />

    <router-view
      v-if="!showSwitcher"
      :key="$route.fullPath"
      :scrollPosition="scroll"
    />
  </div>
</template>

<script>
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
    Switcher,
  },
  mounted() {
    setTimeout(() => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, 500);
  },
  created() {
    var cookies = document.cookie.split("; ");
    var check = cookies.find((row) => row.startsWith("lang"));
    if (check) {
      var lang = check.split("=")[1];
      this.$store.commit("setLang", lang);
      this.changeFont(lang);
      this.$store.commit("setShowSwitcher", false);
      this.$i18n.locale = lang;
    } else {
      this.changeFont("mm");
      this.$store.commit("setShowSwitcher", true);
    }

    window.addEventListener("DOMMouseScroll", this.detectMouseWheelDirection);

    this.$store.dispatch("getPosts", { page: 1 });
  },
  computed: {
    ...mapGetters({}),
    ...mapState(["showSwitcher", "lang"]),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    lang(Value) {
      this.changeFont(Value);
    },
  },
  methods: {
    changeFont(Value) {
      if (Value === "mm") {
        document.getElementsByTagName("body")[0].style.fontFamily =
          "Padauk,sans-serif";
      } else if (Value === "en") {
        document.getElementsByTagName("body")[0].style.fontFamily =
          "Nunito,sans-serif";
      }
    },
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

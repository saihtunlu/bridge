<template>
  <div class="row" id="navbar">
    <div class="col-6 flex-align-center">
      <div @click="$router.push('/')" id="header_sm" class="upper mr-5 pointer flex-center">
        <h2
          class="mr-1"
          style="-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(var(--vs-dark));"
        >Z</h2>
        <h2
          class="mr-1"
          style="-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(var(--vs-dark));"
        >H</h2>
        <h2
          class="mr-1"
          style="-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(var(--vs-primary));"
        >O</h2>
        <h2
          class="mr-1"
          style="-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(var(--vs-dark));"
        >P</h2>
      </div>
    </div>

    <div class="col-6 flex-end">
      <div class="sm-hide md-hide flex-end flex-align-center">
        <router-link
          :to="{ name: 'Help' }"
          class="mr-4 dark text-bold flex-align-center"
        >{{ $t("help") }}</router-link>
        <Lang class="mr-4" />
        <ThemeSwitcher class="mr-4" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Lang from "./LangaugeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default {
  props: {
    auth: null,
  },
  data() {
    return {
      scrollPosition: null,
      lastScrollPosition: 0,
    };
  },
  components: {
    Lang,
    ThemeSwitcher,
  },
  computed: {
    indexActive() {
      return this.$store.state.activeIndex;
    },
    ...mapGetters(["isLogged"]),
    ...mapState(["user", "categories"]),
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style>
div#navbar {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  margin: 0px !important;
  z-index: 1000000000;
}
</style>

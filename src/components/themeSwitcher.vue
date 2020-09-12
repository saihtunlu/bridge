<template>
  <vs-switch primary v-model="dark" id="themeSwitch">
    <template #circle>
      <i v-if="dark" class="bx bxs-moon" style="color:#fff"></i>
      <i v-else class="bx bxs-sun" style="color:#000"></i>
    </template>
  </vs-switch>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  created() {
    var theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "dark") {
        this.dark = true;
        this.changeTheme();
      } else {
        this.dark = false;
        this.changeTheme();
      }
    } else {
      const today = new Date();
      if (today.getHours() > 19 || today.getHours() < 6) {
        this.dark = true;
        this.changeTheme();
      }
    }
  },
  watch: {
    dark() {
      this.changeTheme();
    },
  },
  mounted() {},
  methods: {
    changeTheme() {
      var mode = this.dark ? "dark" : "light";
      this.$vs.setTheme(mode);
      localStorage.setItem("theme", mode);
    },
  },
};
</script>
<style >
div#themeSwitch {
  position: fixed;
  right: 20px;
  top: 20px;
  box-shadow: var(--shadow);
  z-index: 100000000000000;
}
</style>
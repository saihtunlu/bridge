<template>
  <div class="flex-align-center">
    <p class="white text mr-5 pr-4" @click="changeLang('mm')">MM</p>
    <span class="side-divider"></span>
    <p class="white text ml-5 pl-4" @click="changeLang('en')">EN</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    changeLang(data) {
      if (data) {
        this.$i18n.locale = data;
        this.$store.commit("setLang", data);
        this.$store.commit("setShowSwitcher", false);
        this.setCookie(data);
      }
    },
    setCookie(data) {
      var now = new Date();
      var minutes = 1;
      now.setTime(now.getTime() + minutes * 60 * 1000);
      document.cookie = "lang=" + data;
      document.cookie = "expires=" + now.toUTCString() + ";";
    },
  },
};
</script>

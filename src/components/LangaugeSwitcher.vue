<template>
  <div class="flex-align-center">
    <p class="white text mr-5 pr-4" @click="changeLang('mm')">မမ</p>
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
      var add_minutes = function (dt, minutes) {
        return new Date(dt.getTime() + minutes * 60000);
      };
      document.cookie = "lang=" + data;
      document.cookie =
        "expires=" + add_minutes(new Date(), 30).toString() + ";";
    },
  },
};
</script>

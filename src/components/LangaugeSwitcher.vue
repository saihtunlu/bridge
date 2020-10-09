<template>
  <div class="flex-align-center">
    <div
      v-if="lang !== 'mm'"
      class="flex-align-center mr-4 lang pointer flex-x-between"
      @click="changeLang('mm')"
    >
      <img src="image/mm.svg" style="margin: 4px 0px" alt="" />
      <p class="white sm-text my-0 mx-auto">မြန်မာ</p>
    </div>

    <div
      v-if="lang == 'mm'"
      @click="changeLang('mm')"
      class="flex-align-center mr-4 lang activelang pointer flex-x-between"
    >
      <img src="image/mm-active.svg" style="margin: 4px 0px" alt="" />
      <p class="primary sm-text my-0 mx-auto">မြန်မာ</p>
    </div>

    <!-- <span class="side-divider"></span> -->
    <div
      v-if="lang !== 'en'"
      class="flex-align-center ml-4 lang pointer flex-x-between"
      @click="changeLang('en')"
    >
      <img src="image/en.svg" style="margin: 4px 0px" alt="" />
      <p class="white sm-text my-0 mx-auto">EN</p>
    </div>

    <div
      v-if="lang == 'en'"
      @click="changeLang('en')"
      class="flex-align-center ml-4 lang activelang pointer flex-x-between"
    >
      <img src="image/en-active.svg" style="margin: 4px 0px" alt="" />
      <p class="primary sm-text my-0 mx-auto">EN</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    lang() {
      return this.$store.state.lang;
    },
  },
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
      window.location.reload();
    },
  },
};
</script>
<style>
.lang {
  border-radius: 30px;
  border: 2px solid #fff;
  padding: 0px 3px;
  min-width: 85px;
}
.activelang {
  border-radius: 30px;
  border: 2px solid #fff;
  padding: 0px 3px;
  background: #fff;
}
</style>

<template>
  <div class="row" id="sitcher">
    <div
      class="col-12 p-0 flex-x-between flex-column"
      style="height:100vh;overflow:hidden"
    >
      <div class="upper-div flex-center">
        <img src="/image/loading.gif" class="mt-5" width="265px" alt />
      </div>
      <div class="footer-radius-switcher animated primary-bg bounceInUp">
        <div
          class="div-divider"
          style="border-bottom-left-radius: 50% 45% !important;border-bottom-right-radius: 50% 45% !important;"
        ></div>
        <div
          class="bottom-div  flex-column primary-bg"
          style="justify-content:flex-start;align-items:center;"
        >
          <p class="text white py-0 text-center">{{ $t("chooseLanguage") }}</p>
          <Lang class="mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lang from "../components/LangaugeSwitcher";
export default {
  components: {
    Lang,
  },
};
</script>

<style>
div#sitcher .upper-div.flex-center {
  width: 100%;
  background: #efefef;

  height: calc(100vh - 300px);
}
.footer-radius-switcher {
  height: 340px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.footer-radius-switcher .div-divider {
  height: 80px;
  z-index: 10;
  background: #efefef;
  margin-top: -1px;
}
</style>

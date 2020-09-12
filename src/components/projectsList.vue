<template>
  <div class="row px-lg-5" style="min-height:100vh;">
    <div class="col-12">
      <h1
        style="font-size:60px;"
        class="mb-0 mt-3 animated flex-align-center mr-3 text-bold"
      >
        <span
          style="animation-delay:300; background:rgb(var(--vs-primary))"
          class="animated bounceInLeft gradient-line"
        ></span>
        <span
          style="animation-delay:300;"
          class="Oswald transparent_text animated bounceInRight"
          >Page 4</span
        >
      </h1>
      <vs-button to="/wall"> Go To Wall</vs-button>
      <vs-button to="/wall2">{{ $t("test") }}</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.commit("setScreenType", "blue");
  },
};
</script>

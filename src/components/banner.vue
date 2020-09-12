<template>
  <div class="row" style="min-height:100vh">
    <div class="col-12">
      <h1 style="font-size:60px;" class="mb-0 mt-3 animated flex-align-center mr-3 text-bold">
        <span
          style="animation-delay:300; background:rgb(var(--vs-primary))"
          class="animated bounceInLeft gradient-line"
        ></span>
        <span
          style="animation-delay:300;"
          class="Oswald transparent_text animated bounceInRight"
        >Page 1</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setScreenType", "red");
  },
};
</script>

<style>
div#bannerImg div {
  border-radius: 50%;
  box-shadow: var(--shadow), var(--inner-shadow) !important;
  border: 20px solid transparent;
  filter: grayscale(0.6);
}
div#bannerImg img {
  border-radius: 50%;
  width: 100%;
  filter: grayscale(0.6);
}
.cube1.cube {
  right: 5%;
  top: 10%;
}
.cube {
  box-shadow: var(--shadow);
  min-width: 120px;
  height: 120px;
  color: rgb(var(--vs-dark)) !important;
  background: transparent;
  border-radius: 100rem;
  position: absolute;
}
.cube3.cube {
  top: 15%;
  right: 30%;
}
.cube4.cube {
  top: 55%;
  right: 23%;
}
.cube2.cube {
  top: 35%;
  right: 10%;
}
span.gradient-line {
  width: 60px;
  height: 10px;
  background: linear-gradient(
    118deg,
    rgba(var(--vs-primary), 1),
    rgb(var(--vs-gradient-dark))
  );
  margin-right: 1rem;
  box-shadow: 0px 4px 25px -2px rgb(var(--vs-primary)) !important;
  margin-top: 10px;
}

.cube:active {
  box-shadow: var(--inner-shadow) !important;
}
/* ------------------------------------------------'mobile'------------------------------------------------ */
@media screen and (max-width: 600px) {
}
/* ------------------------------------------------'tablet'------------------------------------------------ */
@media screen and (min-width: 600px) and (max-width: 992px) {
}
/* ------------------------------------------------'desktop'------------------------------------------------ */
@media (min-width: 992px) {
  div#bannerImg div {
    width: 60%;
  }
}
</style>

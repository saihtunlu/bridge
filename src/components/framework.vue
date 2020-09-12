<template>
  <div class="row px-lg-5" style="min-height:100vh;">
    <div class="col-12">
      <h1 style="font-size:60px;" class="mb-0 mt-3 animated flex-align-center mr-3 text-bold">
        <span
          style="animation-delay:300; background:rgb(var(--vs-primary))"
          class="animated bounceInLeft gradient-line"
        ></span>
        <span
          style="animation-delay:300;"
          class="Oswald transparent_text animated bounceInRight"
        >page 3</span>
      </h1>
    </div>
  </div>
</template>

<script>
import frameworks from "../constants/frameworks";
export default {
  data() {
    return {
      frameworks: frameworks,
      slickOptions: {
        slidesToShow: 4,
        autoplay: true,
        arrows: true,
        prevArrow: `<button type="button" class="slick-prev animated bounceInLeft"><i class='bx bx-chevron-left dark' ></i></button>`,
        nextArrow: `<button type="button" class="slick-next animated bounceInRight"><i class='bx bx-chevron-right dark' ></i></button>`,
      },
    };
  },
  mounted() {
    this.$store.commit("setScreenType", "green");
  },
  components: {},
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
};
</script>

<style>
.slick-initialized.slick-slider {
  display: flex;
  align-items: center;
}
.programmingBox svg {
  width: 80%;
  margin: auto;
}
button.slick-arrow {
  border: none !important;
  font-size: 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin: 10px;
  background: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px !important;
}
button.slick-arrow:active,
.bx-check:active {
  box-shadow: var(--inner-shadow);
}
</style>

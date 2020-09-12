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
        >Page 6</span>
      </h1>
    </div>
  </div>
</template>

<script>
import skills from "../constants/skills";
export default {
  data() {
    return {
      skills: skills,
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
    this.$store.commit("setScreenType", "yellow");
  },
  components: {},
};
</script>

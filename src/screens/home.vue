<template>
  <div>
    <Ball />
    <hooper @slide="updateCarousel" :vertical="true" ref="carousel">
      <slide>
        <Banner v-if="currentSlide === 0" />
      </slide>
      <slide>
        <Skill v-if="currentSlide === 1" />
      </slide>
      <slide>
        <Framework v-if="currentSlide === 2" />
      </slide>
      <slide>
        <projectsList v-if="currentSlide === 3" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import Banner from "../components/banner";
import Skill from "../components/skill";
import Framework from "../components/framework";
import projectsList from "../components/projectsList";
import Ball from "../components/ball";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      selectedCursor: `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='gray' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-disc'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='3'%3E%3C/circle%3E%3C/svg%3E"), pointer`,
      currentSlide: 0,
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function() {},
        afterChange: function() {},
        movingFlag: true,
      },
    };
  },

  created() {},
  components: {
    Banner,
    Hooper,
    Slide,
    Skill,
    Framework,
    projectsList,
    Ball,
  },
  methods: {
    updateCarousel(payload) {
      this.currentSlide = payload.currentSlide;
    },
  },
};
</script>

<style>
.hooper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100% !important;
  background: rgb(var(--vs-gray-1));
}
.programmingBox:active {
  box-shadow: var(--inner-shadow) !important;
}
</style>

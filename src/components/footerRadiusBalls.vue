<template>
  <div class="footer-radius-balls ">
    <div class="bottom-div">
      <hooper
        :vertical="false"
        class="inner-hooper "
        :infiniteScroll="true"
        :itemsToShow="limit"
        :centerMode="true"
        ref="carousel2"
      >
        <slide
          class=" flex-center animated bounceIn"
          :style="
            `animation-delay:${Math.floor(Math.random() * 1000)}ms !important;`
          "
          v-for="ball in 7"
          :key="ball"
        >
          <div
            style="height:144px;width:144px;border-radius:100%;background:rgb(var(--vs-primary))"
          ></div>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
export default {
  data() {
    return {
      limit: 2,
    };
  },
  components: { Hooper, Slide },
  created() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw > 500 && vw < 900) {
      this.limit = 4;
    }
    if (vw < 500) {
      this.limit = 2;
    }
    if (vw > 900) {
      this.limit = 6;
    }
  },
};
</script>
<style>
.footer-radius-balls .primary-bg.div-divider {
  height: 85px;
  margin-top: -2px;
  border-bottom-left-radius: 50% 40% !important;
  border-bottom-right-radius: 50% 40% !important;
}
.footer-radius-balls {
  position: absolute;
  bottom: 30px;
  right: 0px;
  left: 0px;
  background: transparent;
  width: 100%;
  z-index: 100;
}
</style>

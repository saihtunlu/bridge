<template>
  <div class="footer-radius-balls">
    <div class="bottom-div">
      <hooper
        :vertical="false"
        class="inner-hooper"
        :infiniteScroll="true"
        :itemsToShow="limit"
        :centerMode="true"
        ref="carousel2"
      >
        <slide
          class="flex-center animated bounceIn"
          :style="
            `animation-delay:${Math.floor(Math.random() * 1000)}ms !important;`
          "
          v-for="ball in 7"
          :key="ball"
        >
          <div
            class="extraBall flex-center"
            style="
              border-radius: 100%;
              background: rgb(var(--vs-primary));
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="male"
              width="20.572"
              height="20.495"
              viewBox="0 0 20.572 20.495"
            >
              <g
                id="Component_3_1"
                data-name="Component 3 – 1"
                transform="translate(0.354 0.5)"
              >
                <line
                  id="Line_69"
                  data-name="Line 69"
                  x1="19.556"
                  y2="19.556"
                  transform="translate(0 0.085)"
                  fill="none"
                  stroke="#4e008e"
                  stroke-width="1"
                />
                <path
                  id="Path_235"
                  data-name="Path 235"
                  d="M-848.392,7789h17.062v16.274"
                  transform="translate(851.048 -7789)"
                  fill="none"
                  stroke="#4e008e"
                  stroke-width="1"
                />
              </g>
            </svg>
          </div>
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
  z-index: 999;
}
.male {
  position: relative;
  top: -58px;
  right: -58px;
}
</style>

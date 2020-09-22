<template>
  <div class="row countown primary-bg">
    <div class="col-12 px-0 flex-column flex-x-between">
      <div class="w-100">
        <div class="div-header pt-4 animated fadeIn div-divider">
          <div class="flex-center countdown-header flex-column">
            <img src="/image/logo.png" width="265px" alt />
            <p class="primary sm-text">{{ $t("countdown-subtitle") }}</p>
          </div>
        </div>
        <p
          style=" color:#fff; text-align:center;max-width:1000px;margin-left:auto;margin-right:auto;"
          class="mt-5 animated text fadeIn side-padding text-animated"
        >{{ $t("countdown-title") }}</p>

        <countdown :end-time="new Date('9/25/2020').getTime()" @finish="ended">
          <span slot="process" slot-scope="time" class="flex-center mt-5">
            <div
              class="flex-column flex-center mr-5 animated fadeIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:50px;color:#fff;" class="my-0 flex-align-center">
                {{ time.timeObj.d }}
                <span class="divider" style="right: -18px;"></span>
              </p>
              <p style="font-size:24px;color:#fff;" class="my-0">{{ $t("day") }}</p>
            </div>
            <div
              class="flex-column flex-center mr-5 animated fadeIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:50px;color:#fff;" class="my-0 flex-align-center">
                {{ time.timeObj.h }}
                <span class="divider"></span>
              </p>
              <p style="font-size:24px;color:#fff;" class="my-0">{{ $t("hour") }}</p>
            </div>
            <div
              class="flex-column flex-center mr-5 animated fadeIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:50px;color:#fff;" class="my-0 flex-align-center">
                {{ time.timeObj.m }}
                <span class="divider" style="right: -18px;"></span>
              </p>
              <p style="font-size:24px;color:#fff;" class="my-0">{{ $t("minute") }}</p>
            </div>
            <div
              class="flex-column flex-center animated fadeIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:50px;color:#fff;" class="my-0">{{ time.timeObj.s }}</p>
              <p style="font-size:24px;color:#fff;" class="my-0">{{ $t("second") }}</p>
            </div>
          </span>
        </countdown>
      </div>
      <div class="countdown-footer flex-center">
        <a
          href="https://facebook.com/useyourvoice2020myanmar"
          target="_blank"
          class="animated bounceInUp"
          :style="
            `animation-delay:${Math.floor(Math.random() * 600) +
              1}ms !important;`
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path
              d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  mounted() {},
  methods: {
    ended() {
      this.$store.commit("setRelease", true);
    },
  },
};
</script>

<style>
.countown {
  min-height: 100vh;
}
.div-header {
  position: relative;
  height: 165px;
  background: #efefef;
  /* padding-top: 30px !important; */
}
.countdown-footer {
  height: 200px;
}
.countdown-footer svg {
  background: #fff;
  border-radius: 100%;
  font-size: 35px;
  fill: rgb(var(--vs-primary));
  padding: 3px;
}

span.divider {
  min-height: 40px;
  min-width: 2px;
  z-index: 100;
  background: rgb(255, 255, 255, 0.1);
  position: relative;
  right: -18px;
  /* top: 5px; */
}
/* ------------------------------------------------'mobile'------------------------------------------------ */
@media screen and (max-width: 600px) {
  .div-header > .countdown-header {
    position: relative;
    top: 5px;
  }
}
/* ------------------------------------------------'tablet'------------------------------------------------ */
@media screen and (min-width: 600px) and (max-width: 992px) {
}
/* ------------------------------------------------'desktop'------------------------------------------------ */
@media (min-width: 992px) {
}
</style>

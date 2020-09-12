<template>
  <div class="row countown primary-bg">
    <div class="col-12 px-0 flex-column flex-x-between">
      <div class="w-100">
        <div class="countdown-header animated fadeIn flex-center div-divider">
          <div class="flex-center flex-column">
            <img src="/image/logo.png" style="margin-bottom:2rem" alt="" />
            <img src="/image/sub-header.png" alt="" />
          </div>
        </div>
        <p
          style="font-size:27px; color:#fff; text-align:center"
          class="mt-5 animated fadeIn"
        >
          {{ $t("countdown-title") }}
        </p>
        <countdown :end-time="new Date('10/1/2020').getTime()" @finish="ended">
          <span slot="process" slot-scope="time" class=" flex-center ">
            <div
              class="flex-column flex-center mr-5 animated bounceIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:60px;color:#fff;" class="my-0">
                {{ time.timeObj.d }}
              </p>
              <p style="font-size:30px;color:#fff;" class="my-0">
                {{ $t("day") }}
              </p>
            </div>
            <div
              class="flex-column flex-center  mr-5 animated bounceIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:60px;color:#fff;" class="my-0">
                {{ time.timeObj.h }}
              </p>
              <p style="font-size:30px;color:#fff;" class="my-0">
                {{ $t("hour") }}
              </p>
            </div>
            <div
              class="flex-column flex-center  mr-5 animated bounceIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:60px;color:#fff;" class="my-0">
                {{ time.timeObj.m }}
              </p>
              <p style="font-size:30px;color:#fff;" class="my-0">
                {{ $t("minute") }}
              </p>
            </div>
            <div
              class="flex-column flex-center animated bounceIn"
              :style="
                `animation-delay:${Math.floor(Math.random() * 600) +
                  1}ms !important;`
              "
            >
              <p style="font-size:60px;color:#fff;" class="my-0">
                {{ time.timeObj.s }}
              </p>
              <p style="font-size:30px;color:#fff;" class="my-0">
                {{ $t("second") }}
              </p>
            </div>
          </span>
        </countdown>
      </div>
      <div class="countdown-footer flex-center">
        <a
          href="#"
          target="_blank"
          class="animated bounceInUp"
          :style="
            `animation-delay:${Math.floor(Math.random() * 600) +
              1}ms !important;`
          "
        >
          <i class="bx bxl-facebook"></i>
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
  methods: {
    ended(e) {
      console.log("ended -> e", e);
      this.$store.commit("setRelease", true);
    },
  },
};
</script>

<style scoped>
.countown {
  min-height: 100vh;
}
.countdown-header[data-v-5fad94a0] {
  position: relative;
  height: 230px;
  background: #efefef;
}
.countdown-footer {
  height: 200px;
}
.countdown-footer i {
  background: #fff;
  border-radius: 100%;
  font-size: 35px;
  color: rgb(var(--vs-primary));
  padding: 3px;
}

/* ------------------------------------------------'mobile'------------------------------------------------ */
@media screen and (max-width: 600px) {
  .countdown-header > div {
    position: relative;
    top: 20px;
  }
}
/* ------------------------------------------------'tablet'------------------------------------------------ */
@media screen and (min-width: 600px) and (max-width: 992px) {
}
/* ------------------------------------------------'desktop'------------------------------------------------ */
@media (min-width: 992px) {
}
</style>

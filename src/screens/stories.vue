<template>
  <div id="stories" class="row">
    <MenuBtn />
    <div class="col-12 flex-end stories-nav">
      <img src="image/logo.svg" style="margin-right: 18px" width="220px" alt />
    </div>
    <Audio
      v-for="(audio, index) in audios"
      :audio="audio"
      :index="index"
      :key="index"
    />

    <div class="footer">
      <div
        class="div-divider"
        style="
          border-bottom-left-radius: 50% 25% !important;
          border-bottom-right-radius: 50% 25% !important;
        "
        :class="(audios.length - 1) % 2 ? 'gray-pg' : 'primary-bg'"
      ></div>
      <div class="flex-center">
        <a
          href="https://facebook.com/useyourvoice2020myanmar"
          target="_blank"
          class="animated bounceInUp fbicon"
          :style="`animation-delay:${
            Math.floor(Math.random() * 600) + 1
          }ms !important;`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
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
import { mapGetters } from "vuex";
import MenuBtn from "./menu";
import Audio from "../components/audio";
export default {
  data() {
    return {};
  },
  components: {
    MenuBtn,
    Audio,
  },
  mounted() {},
  computed: {
    ...mapGetters(["audios"]),
  },
  watch: {},
};
</script>

<style>
.audio-section {
  height: 500px;
}
.audio-ball {
  width: 144px;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.footer {
  height: calc(20vh + 120px);
  width: 100%;
  background: rgb(var(--vs-primary));
}
.footer > .div-divider {
  height: 120px;
  margin-top: -80px;
}
.footer a.animated.bounceInUp.fbicon {
  margin-top: 8vh;
}
/* .stories-nav {
  position: fixed !important;
  top: 0px;
  background: #efefef;
  z-index: 1000;
} */
/* div#stories {
  padding-top: 70px;
} */
</style>

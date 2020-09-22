<template>
  <div class="row">
    <div
      class="col-12 primary-bg page-padding animated fadeIn flex-column flex-x-between"
      style="height:100vh;overflow:hidden;"
    >
      <Flipped :flip-id="audio.name">
        <div class="circle-bg gray-pg overflow-hidden"></div>
      </Flipped>
      <div style="z-index:1000;" class="flex-center flex-column">
        <p class="text text-center primary" style="width:75%">{{ $t("audio3") }}</p>
        <p
          class="primary sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >{{ $t("play") }}</p>
        <p
          id="subtitles"
          class="sm-text subtitle w-100 my-0 text-center primary"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </div>

    <div class="ball">
      <div class="flex-center" style="height: 144px;
    min-width: 144px;
    overflow: visible;">
        <div id="audio-wave" style="min-width: 450px !important; height: 450px !important;"></div>
        <div
          class="audio-control animated bounceIn px-2"
          style="width:144px;height:144px;border-radius:100%;overflow:hidden;animation-delay:1800ms"
        >
          <svg
            class="pointer"
            @click="PlayAudio()"
            v-if="!play"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 23 25"
          >
            <path
              id="Polygon_5"
              data-name="Polygon 5"
              d="M9.864,4.85a3,3,0,0,1,5.272,0l7.455,13.717A3,3,0,0,1,19.955,23H5.045a3,3,0,0,1-2.636-4.433Z"
              transform="translate(25) rotate(90)"
              fill="#fff"
            />
          </svg>
          <svg
            class="pointer"
            xmlns="http://www.w3.org/2000/svg"
            @click="stopAudio()"
            v-if="play"
            width="40"
            height="40"
            viewBox="0 0 20 22"
          >
            <g
              id="Rectangle_61"
              data-name="Rectangle 61"
              fill="#fff"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            >
              <rect width="20" height="22" rx="4" stroke="none" />
              <rect x="0.5" y="0.5" width="19" height="21" rx="3.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <audio style="width:100%;" class="hidden" ref="audio" :src="audio.file" id="audio" controls />
  </div>
</template>

<script>
import audioSync from "audio-sync-with-text";
import { Flipped } from "vue-flip-toolkit";

export default {
  data() {
    return {
      audio: {
        file: "",
      },
      wave: null,
      showSubtitle: false,
      play: false,
    };
  },
  computed: {},
  components: {
    Flipped,
  },
  created() {
    this.audio = this.$route.params.audio;
  },
  watch: {
    $route(value) {
      console.log("$route -> value", value);
    },
  },
  mounted() {
    setTimeout(() => {
      var audio = document.getElementById("audio");
      audio.muted = true;
      this.initAudio();
    }, 100);
  },
  beforeDestroy() {
    this.stopAudio();
    this.wave.dispose();
  },
  methods: {
    PlayAudio() {
      this.showSubtitle = true;
      this.$refs.audio.play();
      this.wave.play();
      this.play = true;
    },
    stopAudio() {
      this.$refs.audio.pause();
      this.$refs.audio.currentTime = 0;
      this.wave.pause();
      this.play = false;
      this.showSubtitle = false;
    },
    initAudio() {
      new audioSync({
        audioPlayer: "audio", // the id of the audio tag
        subtitlesContainer: "subtitles", // the id where subtitles should show
        subtitlesFile: this.audio.subtitle, // the path to the vtt file
      });
      var CircularAudioWave = window.CircularAudioWave;
      this.wave = new CircularAudioWave(document.getElementById("audio-wave"));
      this.wave.onAudioEnded = () => {
        this.stopAudio();
      };
      this.wave.loadAudio(this.audio.file);
      setTimeout(() => {
        this.PlayAudio();
      }, 2500);
    },
  },
};
</script>

<style >
</style>
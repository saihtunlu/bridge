<template>
  <div
    class="col-12 audio-section flex-center"
    :class="index % 2 ? 'gray-pg' : 'primary-bg'"
    style="z-index: 10"
  >
    <p
      :id="'subtitles' + audio.name"
      style="position: absolute; bottom: 20px"
      class="text subtitle w-100 my-0 text-center"
      :class="showSubtitle ? (index % 2 ? 'primary' : 'white') : 'hidden'"
    ></p>
    <div class="audio-ball" :class="index % 2 ? 'primary-bg' : 'gray-pg'">
      <p
        :class="index % 2 ? 'primary' : ' white'"
        class="sm-text"
        style="
          position: relative;
          top: -150px;
          min-width: 87vw !important;
          text-align: center;
        "
      >
        {{ audio.name }}
      </p>

      <div
        :id="audio.name"
        class="audio-wave"
        style="
          min-width: 450px !important;
          height: 450px !important;
          position: absolute;
        "
      ></div>
      <div
        ref="loading"
        class="audio-control animated bounceIn px-2"
        :style="`animation-delay:${Math.floor(
          Math.random() * 1000
        )}ms !important;`"
        style="
          width: 144px;
          height: 144px;
          border-radius: 100%;
          overflow: hidden;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 24 24"
          :fill="index % 2 ? '#efefef' : 'rgb(var(--vs-primary))'"
          :stroke="index % 2 ? '#efefef' : 'rgb(var(--vs-primary))'"
          stroke-width="2"
          v-if="!play"
          @click="Play()"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-play pointer"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          v-if="play"
          @click="Stop"
          width="45"
          :fill="index % 2 ? '#efefef' : 'rgb(var(--vs-primary))'"
          :stroke="index % 2 ? '#efefef' : 'rgb(var(--vs-primary))'"
          height="45"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-square pointer"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
        <audio
          style="width: 100%"
          class="hidden"
          ref="audio"
          :src="audio.file"
          :id="'audio' + audio.name"
          controls
        />
      </div>
    </div>
  </div>
</template>

<script>
import audioSync from "audio-sync-with-text";
import { mapState } from "vuex";
export default {
  props: {
    setplay: {
      type: Boolean,
      default: true,
    },
    audio: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
      wave: null,
      showSubtitle: false,
      play: false,
      ready: false,
    };
  },
  computed: {
    ...mapState(["playing"]),
  },
  watch: {
    playing(value) {
      if (value === this.audio.name + this.currentIndex) {
        console.log("play");
        this.initAudio();
      } else {
        if (this.wave) {
          console.log("stop");
          this.stopAudio();
        }
      }
    },
    ready(value) {
      if (value) {
        this.PlayAudio();
      }
    },
  },
  beforeDestroy() {
    // this.stopAudio();
  },
  mounted() {},
  methods: {
    Play() {
      this.currentIndex = this.currentIndex + 1;
      this.$store.commit("setPlaying", this.audio.name + this.currentIndex);
    },
    Stop() {
      this.$store.commit("setPlaying", "none");
    },
    PlayAudio() {
      this.wave.play();
      this.play = true;
      this.showSubtitle = true;
      var time = 1600;
      if (this.index === 2) {
        time = 400;
        console.log("PlayAudio -> time", time);
      }
      if (this.index === 4) {
        time = 3000;
        console.log("PlayAudio -> time", time);
      }
      if (this.index === 5) {
        time = 2000;
      }
      setTimeout(() => {
        var audio_tag = document.getElementById(`audio${this.audio.name}`);
        audio_tag.play();
      }, time);
    },
    stopAudio() {
      var audio_tag = document.getElementById(`audio${this.audio.name}`);
      audio_tag.pause();
      audio_tag.currentTime = 0;
      this.play = false;
      this.showSubtitle = false;
      this.wave.pause();
      this.wave.chart.dispose();
      this.ready = false;
    },
    initAudio() {
      const loading = this.$vs.loading({
        target: this.$refs.loading,
        scale: "1",
        background: this.currentIndex % 2 ? "primary" : "#fff",
        opacity: 1,
        color: this.currentIndex % 2 ? "#fff" : "primary",
        type: "points",
      });
      var audio_tag = document.getElementById(`audio${this.audio.name}`);
      audio_tag.muted = true;
      new audioSync({
        audioPlayer: `audio${this.audio.name}`, // the id of the audio tag
        subtitlesContainer: `subtitles${this.audio.name}`, // the id where subtitles should show
        subtitlesFile: this.audio.subtitle, // the path to the vtt file
      });
      var CircularAudioWave = window.CircularAudioWave;
      var color = this.index % 2 ? "" : "255,255,255";
      this.wave = new CircularAudioWave(
        document.getElementById(this.audio.name),
        color
      );
      this.wave.onAudioEnded = () => {
        this.showSubtitle = false;
        this.play = false;
        this.wave.pause();
        this.$store.commit("setPlaying", "none");
      };
      this.wave.loadAudio(this.audio.file);
      // setTimeout(() => {

      // }, 2000);
      this.wave.loaded = () => {
        this.ready = true;
        loading.close();
      };
    },
  },
};
</script>

<style>
.subtitle > span {
  background: transparent !important;
  /* display: inline !important;  */
}
#stories #c_0 {
  position: relative;
  top: -30px !important;
}
.subtitle {
  position: absolute;
  bottom: 10px;
}
</style>

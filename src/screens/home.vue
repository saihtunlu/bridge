<template>
  <Flipper
    :flip-key="show"
    v-touch:swipe="swipe"
    class="row"
    :spring="{ stiffness: 50, damping: 15 }"
    style="height:100vh;overflow:hidden;"
  >
    <div
      class="fix-position flex-column flex-x-between"
      style="z-index:1000;padding-top:0.3rem;padding-bottom:30px;"
    >
      <div class="flex-center">
        <vs-button
          v-if="show !=='section1'"
          class="fade-down"
          circle
          @click="swipe('bottom')"
          transparent
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="upColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevrons-up"
          >
            <polyline points="17 11 12 6 7 11" />
            <polyline points="17 18 12 13 7 18" />
          </svg>
        </vs-button>
      </div>
      <div class="flex-center">
        <vs-button
          circle
          v-if="show !=='section10'"
          class="fade-up"
          @click="swipe('top')"
          transparent
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="downColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevrons-down"
          >
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </svg>
        </vs-button>
      </div>
    </div>
    <MenuBtn :color="menuColor" />
    <!-- Section 1 -->
    <div class="col-12 p-0 flex-column flex-x-between" v-if="show === 'section1' ">
      <!-- <Flipped flip-id="circle"> -->
      <div class="circle-bg" style="background:#efefef;z-index:1;" id="first-section"></div>
      <!-- </Flipped> -->
      <div class="w-100" style="z-index:1;">
        <div class="flex-column w-100 side-padding">
          <div class="flex-end w-100 flex-align-center" style="margin-bottom:2rem;">
            <div class="flex-align-center flex-end">
              <img src="/image/logo.png" class="logo mt-3" width="200px" style=" z-index: 1001;" />
              <Flipped flip-id="circle" style="position:absolute">
                <div class="dot logo-dot" style="position:absolute;z-index:999;"></div>
              </Flipped>
              <div
                class="dot logo-dot"
                style="position:absolute;width: 43px!important;
    height: 42px!important;right:21px !important;top:15px !important; z-index:1000;background:#efefef !important;"
              ></div>
            </div>
          </div>
          <p class="primary sm-text text-center">{{ $t("countdown-subtitle") }}</p>
        </div>

        <div style="z-index:1;" class="sec-roll1-section animated fadeIn route-delay mt-0">
          <p
            style=" color:#fff; text-align:center;padding:0px 30px"
            class="text"
          >{{ $t("roll1-first-text") }}</p>
        </div>
      </div>
      <div class="sec-roll3-section">
        <img src="image/section1.png" width="100%" alt />
      </div>
    </div>
    <!-- End Of Section 1  -->
    <!-- Section 2 -->
    <div class="col-12 p-0 flex-column page-padding flex-x-between" v-if="show === 'section2' ">
      <Flipped flip-id="circle">
        <div class="circle-bg primary-bg overflow-hidden" id="section-section">
          <img src="image/section2.png" width="100%" class="animated fadeIn" alt />
        </div>
      </Flipped>
      <div class="w-100" style="z-index:1;">
        <div
          style="z-index:1;"
          v-if="show === 'section2' "
          class="sec-roll1-section animated fadeIn route-delay"
        >
          <p
            style=" color:#fff;width:70%; text-align:center;"
            class="text mx-auto"
          >{{ $t("roll1-second-text") }}</p>
        </div>
      </div>
    </div>
    <!-- End Of Section 2 -->

    <!-- Section 3 -->
    <div class="col-12 flex-column flex-x-between page-padding" v-if="show === 'section3'">
      <Flipped flip-id="circle" v-if="show === 'section3'">
        <div class="ball"></div>
      </Flipped>
      <p class="text text-center animated fadeIn px-sm-4 mx-sm-5 text-width">
        <span class="primary">{{ $t("purple") }}</span>
        <span class="text-animated">{{ $t("roll2-text") }}</span>
      </p>
    </div>
    <!-- End of section 3 -->

    <!-- Section 4 -->
    <div
      class="col-12 primary-bg page-padding animated fadeIn flex-column flex-x-between"
      v-if="show === 'section4'"
    >
      <div class="circle-bg gray-pg overflow-hidden">
        <img src="image/section3.png" alt />
      </div>
      <div style="z-index:1000;" class="flex-center flex-column">
        <p class="text text-center primary">
          {{ $t("audio1") }}
          <br />
          {{$t('audio-file')}}
        </p>
        <p
          class="primary sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >{{ $t("play") }}</p>
        <p
          id="subtitles"
          class="sm-text audio-text w-100 my-0 text-center primary"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </div>

    <!-- End of section 4 -->

    <!-- Section 5 -->
    <div class="col-12 flex-center" v-if="show === 'section5'">
      <Flipped flip-id="circle">
        <div class="primary-bg circle-bg"></div>
      </Flipped>
      <div id="balls">
        <div
          class="sm-ball animated bounceIn"
          v-for="(ball, n) in balls"
          :style="
            `top:${ball.top} !important;left:${ball.left} !important;right:${
              ball.right
            }!important;animation-delay:${Math.floor(Math.random() * 800) +
              1000}ms !important;`
          "
          :key="ball + n"
        ></div>
      </div>
      <div class="roll4-content animated fadeIn page-padding flex-x-between flex-column">
        <p
          class="text text-center white"
          style="width:80%;margin-left:auto;margin-right:auto"
        >{{ $t("roll4-title") }}</p>
        <p
          class="text text-center white"
          style="width:80%;margin-left:auto;margin-right:auto;margin-bottom:5rem"
        >{{ $t("roll4-subtitle") }}</p>
      </div>
      <div class="ball animated fadeIn addBorder route-delay"></div>
    </div>
    <!--End of Section 5 -->

    <!-- section 6 -->
    <div
      class="col-12 primary-bg page-padding animated fadeIn flex-column flex-x-between"
      v-if="show === 'section6'"
    >
      <div class="circle-bg gray-pg overflow-hidden">
        <img src="image/section6.png" alt />
      </div>
      <div style="z-index:1000;" class="flex-center flex-column">
        <p class="text text-center primary">
          {{ $t("audio2") }}
          <br />
          {{$t('audio-file')}}
        </p>
        <p
          class="primary sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >{{ $t("play") }}</p>
        <p
          id="subtitles"
          class="sm-text audio-text w-100 my-0 text-center primary"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </div>
    <!-- end of section 6 -->
    <!-- Section 7 -->
    <div class="col-12 flex-center" v-if="show === 'section7'">
      <Flipped flip-id="circle" v-if="show === 'section7'">
        <div class="primary-bg circle-bg"></div>
      </Flipped>
      <div class="roll6-content flex-x-between page-padding animated fadeIn flex-column">
        <div>
          <p
            class="text text-center white text-animated"
            style="width:80%;margin-left:auto;margin-right:auto"
          >{{ $t("roll6-title") }}</p>
          <p
            class="white text-center pt-lg-0 animated text-animated2 fadeIn xs-text"
            style="width:90%;margin-left:auto;margin-right:auto;"
          >(pg. 11, 60 Gender and Politics in Myanmar, GEN)</p>
        </div>
      </div>

      <div class="ball animated fadeIn">
        <div class="flex-center" id="chart" v-if="showChart">
          <apexchart
            id="inner-chart"
            type="pie"
            width="185"
            height="185"
            :options="innserChartOptions"
            :series="innserSeries"
          ></apexchart>
          <apexchart
            id="outter-chart"
            type="radialBar"
            height="290"
            width="250"
            :options="outterChartOptions"
            :series="outterSeries"
          ></apexchart>
        </div>
      </div>
    </div>
    <!-- end of section 7 -->

    <!-- section 8 -->
    <div
      class="col-12 primary-bg page-padding animated fadeIn flex-column flex-x-between"
      v-if="show === 'section8'"
    >
      <div class="circle-bg gray-pg overflow-hidden">
        <img src="image/section8.png" alt />
      </div>
      <div style="z-index:1000;" class="flex-center flex-column">
        <p class="text text-center primary" style="width:75%">
          {{ $t("audio3") }}
          <br />
          {{$t('audio-file')}}
        </p>
        <p
          class="primary sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >{{ $t("play") }}</p>
        <p
          id="subtitles"
          class="sm-text audio-text w-100 my-0 text-center primary"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </div>
    <!-- end of section 8 -->
    <!-- section 9 -->
    <div class="ball animated bounceIn addBorder route-delay" v-if="show === 'section9'"></div>
    <div class="col-12 flex-center" v-if="show === 'section9'">
      <Flipped flip-id="circle">
        <div class="primary-bg circle-bg" style="bottom:25vh !important"></div>
      </Flipped>
      <div
        class="roll8-content page-padding fix-position flex-x-between animated fadeIn flex-column"
      >
        <div>
          <p
            class="text text-center white text-animated"
            style="width:80%;margin-left:auto;margin-right:auto"
          >{{ $t("roll8-title") }}</p>
          <p
            class="white text-center xs-text animated text-animated2 fadeIn"
            style="width:90%;margin-left:auto;margin-right:auto;"
          >
            (CEDAW and GEN, Concluding Observations on the Combined Fourth and
            Fifth Periodic Reports of Myanmar, p.10-11) (pg. 29, 36 Gender and
            Politics in Myanmar, GEN)
          </p>
        </div>
      </div>
      <footerRadiusBalls />
    </div>
    <!-- end of section 9 -->

    <!-- section 10 -->
    <Flipped flip-id="circle" v-if="show === 'section10'">
      <div class="ball" />
    </Flipped>
    <div class="ball" v-if="show === 'section10'">
      <svg
        @click="$router.push({ name: 'Wall', params: { show: true } })"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      <p
        class="sm-text text-center ex-text px-4"
        style="position: absolute;top: 150px;"
      >{{ $t("show-your-support") }}</p>
    </div>
    <div class="col-12 primary-bg animated fadeIn flex-center" v-if="show === 'section10'">
      <div class="circle-bg" style="bottom:25vh !important;background:#efefef !important;"></div>
      <div class="roll8-content page-padding flex-x-between flex-column">
        <p
          class="text text-center text-animated"
          style="width:75%;margin-left:auto;margin-right:auto"
        >{{ $t("roll9-title") }}</p>
      </div>
      <footerFB />
    </div>
    <!-- end of section 10 -->
    <!-- audio  -->
    <Flipped
      flip-id="circle"
      v-if="show === 'section4' || show === 'section6' || show === 'section8'"
    >
      <div class="ball">
        <!-- Roll3 Audio -->

        <div
          class="flex-center"
          style="height: 144px;
    min-width: 144px;
    overflow: visible;"
        >
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
    </Flipped>
    <audio style="width:100%;" class="hidden" ref="audio" :src="audio" id="audio" controls />
  </Flipper>
</template>

<script>
import { Flipper, Flipped } from "vue-flip-toolkit";
import { mapState } from "vuex";
import audioSync from "audio-sync-with-text";
import MenuBtn from "./menu";
import footerRadiusBalls from "../components/footerRadiusBalls";
import footerFB from "../components/footerFB";

const balls = [
  {
    top: "30px",
    right: "",
    left: "50px",
  },
  {
    top: "180px",
    right: "",
    left: "-10px",
  },
  {
    top: "45px ",
    right: "60px ",
    left: "",
  },
  {
    top: "140px",
    right: "-15px ",
    left: "",
  },
  {
    top: "260px",
    right: "30px",
    left: "",
  },
  {
    top: "275px ",
    right: "",
    left: "140px ",
  },
];

export default {
  props: {
    scrollPosition: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      upColor: "rgb(var(--vs-primary))",
      downColor: "#fff",
      menuColor: "rgb(var(--vs-primary))",
      balls: balls,
      show: "section1",
      showFirstText: true,
      audio: null,
      play: false,
      subtitle: null,
      wave: null,
      event: null,
      showSubtitle: false,
      outterSeries: [54],
      outterChartOptions: {
        chart: {
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#fff"],
        stroke: {},
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
              background: "transparent",
            },
            track: {
              background: "#fff",
              opacity: 0.2,
            },
            dataLabels: {
              name: {
                show: false,
                color: "#fff",
              },
              value: {
                offsetY: 140,
                fontSize: "20px",
                color: "#fff",
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
      },
      showChart: false,
      innserSeries: [10, 90],
      innserChartOptions: {
        chart: {
          type: "pie",
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -80,
              value: {
                offsetY: 140,
                fontSize: "20px",
                color: "#fff",
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        colors: ["#fff", "#4E008E"],
        stroke: {
          width: 1,
        },
        dataLabels: {
          style: {
            fontSize: "20px",
            fontWeight: "500",
          },
          formatter(val, opts) {
            if (opts.seriesIndex !== 1) {
              return [val.toFixed(0) + "%"];
            }
          },
        },
        legend: {
          show: false,
        },
      },
    };
  },
  components: {
    MenuBtn,
    Flipper,
    Flipped,
    footerFB,
    footerRadiusBalls,
  },
  mounted() {
    setTimeout(() => {
      var audio = document.getElementById("audio");
      audio.muted = true;
    }, 1000);
  },
  watch: {
    scrollPosition(value) {
      this.swipe(value[0].data);
    },
    show(value) {
      if (value === "section1") {
        this.menuColor = "rgb(var(--vs-primary))";
        this.downColor = "#fff";
      }
      if (value === "section2") {
        this.menuColor = "#fff";
        this.downColor = "#fff";
        this.upColor = "#fff";
      }
      if (value === "section3") {
        this.menuColor = "rgb(var(--vs-primary))";
        this.downColor = "rgb(var(--vs-primary))";
        this.upColor = "rgb(var(--vs-primary))";
      }
      if (value === "section4") {
        this.downColor = "#fff";
        this.upColor = "rgb(var(--vs-primary))";
        this.menuColor = "rgb(var(--vs-primary))";
        this.audio = "audio/MIB2.mp4";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/mm-subtitle.vtt"
            : "http://localhost:8080/audio/en-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 1000);
      }
      if (value === "section5") {
        this.downColor = "#fff";
        this.upColor = "#fff";
        this.menuColor = "#fff";
      }
      if (value === "section6") {
        this.downColor = "rgb(var(--vs-primary))";
        this.upColor = "rgb(var(--vs-primary))";
        this.menuColor = "rgb(var(--vs-primary))";
        this.audio = "audio/10000_hour.mp3";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/en-subtitle.vtt"
            : "http://localhost:8080/audio/mm-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 1000);
      }
      if (value === "section7") {
        this.downColor = "#fff";
        this.upColor = "#fff";
        this.menuColor = "#fff";
        setTimeout(() => {
          this.showChart = true;
        }, 1300);
      }
      if (value === "section8") {
        this.downColor = "rgb(var(--vs-primary))";
        this.upColor = "rgb(var(--vs-primary))";
        this.menuColor = "rgb(var(--vs-primary))";
        this.audio = "audio/MIB2.mp4";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/mm-subtitle.vtt"
            : "http://localhost:8080/audio/en-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 1000);
      }
      if (value === "section9") {
        this.downColor = "#fff";
        this.upColor = "#fff";
        this.menuColor = "#fff";
      }
      if (value === "section10") {
        this.upColor = "rgb(var(--vs-primary))";
        this.menuColor = "rgb(var(--vs-primary))";
      }
    },
  },
  computed: {
    ...mapState(["lang"]),
  },
  methods: {
    // Global Functions

    swipe(e) {
      if (this.show === "section1") {
        if (e === "top") {
          this.show = "section2";
        }
      } else if (this.show === "section2") {
        if (e === "top") {
          this.show = "section3";
        }
        if (e === "bottom") {
          this.showFirstText = false;
          this.show = "section1";
        }
      } else if (this.show === "section3") {
        if (e === "top") {
          this.show = "section4";
        }
        if (e === "bottom") {
          this.showFirstText = false;
          this.show = "section2";
        }
      } else if (this.show === "section4") {
        if (e === "top") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section5";
        }
        if (e === "bottom") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section3";
        }
      } else if (this.show === "section5") {
        if (e === "top") {
          this.show = "section6";
        }
        if (e === "bottom") {
          this.show = "section4";
        }
      } else if (this.show === "section6") {
        if (e === "top") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section7";
        }
        if (e === "bottom") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section5";
        }
      } else if (this.show === "section7") {
        if (e === "top") {
          this.show = "section8";
        }
        if (e === "bottom") {
          this.show = "section6";
        }
      } else if (this.show === "section8") {
        if (e === "top") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section9";
        }
        if (e === "bottom") {
          this.stopAudio();
          this.wave.destroy();
          this.show = "section7";
        }
      } else if (this.show === "section9") {
        if (e === "top") {
          this.show = "section10";
        }
        if (e === "bottom") {
          this.show = "section8";
        }
      } else if (this.show === "section10") {
        if (e === "bottom") {
          this.show = "section9";
        }
      }
    },
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
        subtitlesFile: this.subtitle, // the path to the vtt file
      });
      var CircularAudioWave = window.CircularAudioWave;
      this.wave = new CircularAudioWave(
        document.getElementById("audio-wave"),
        ""
      );
      this.wave.onAudioEnded = () => {
        this.showSubtitle = false;
        this.play = false;
        this.wave.pause();
      };
      this.wave.loadAudio(this.audio);
    },
    // End of Global

    // Section 1

    // end of section 1
  },
};
</script>
<style>
.audio-text {
  position: absolute;
  width: 320px;
  top: 200px;
}

div#first-section {
  background: rgb(239, 239, 239);
  z-index: 1;
  bottom: calc(100vh - 180px);
}
.circle-bg img {
  width: 100vw;
  margin: 0px auto;
  position: absolute;
  bottom: 0px;
  right: calc(50% - 50vw);
}
div#third-section {
  bottom: -100px;
}
</style>

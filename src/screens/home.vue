<template>
  <Flipper
    :flip-key="show"
    v-touch:swipe="swipe"
    class="row"
    :spring="{ stiffness: 50, damping: 15 }"
    style="height:100vh;overflow:hidden;"
  >
    <MenuBtn />
    <!-- Section 1 & 2 -->
    <div
      class="col-12 p-0 flex-column flex-x-between"
      v-if="show === 'section1' || show === 'section2'"
    >
      <div class="w-100" style="z-index:1;">
        <div class="div-header div-divider" style="z-index:1002;">
          <div class="flex-column w-100 side-padding">
            <div
              class="flex-end w-100 flex-align-center"
              style="margin-bottom:2rem;"
            >
              <div class="flex-align-center flex-end">
                <img
                  src="/image/logo.png"
                  width="200px"
                  style=" z-index: 1001;"
                />
                <Flipped
                  flip-id="circle"
                  style="position:absolute"
                  v-if="show === 'section2'"
                >
                  <div
                    class="dot logo-dot"
                    style="position:absolute;z-index:999;"
                  ></div>
                </Flipped>
                <div
                  class="dot logo-dot"
                  style="position:absolute;width: 44px!important;
    height: 44px!important;z-index:1000;background:#efefef !important;"
                ></div>
              </div>
            </div>
            <p class="primary sm-text text-center">
              {{ $t("countdown-subtitle") }}
            </p>
          </div>
        </div>

        <slide-y-up-transition :duration="1000">
          <div
            style="z-index:1;"
            v-if="showFirstText"
            class="sec-roll1-section primary-bg div-divider"
          >
            <p
              style=" color:#fff; text-align:center;padding:0px 30px"
              class="text"
            >
              {{ $t("roll1-first-text") }}
            </p>
          </div>
        </slide-y-up-transition>
      </div>
      <div class="sec-roll3-section">
        <slide-y-up-transition :duration="1000">
          <p
            v-if="!showFirstText"
            style=" color:#fff; margin-top:200px; text-align:center;padding:0px 30px;"
            class="text"
          >
            {{ $t("roll1-second-text") }}
          </p>
        </slide-y-up-transition>
      </div>
    </div>
    <!-- End Of Section 1 & 2 -->

    <!-- Section 3 -->
    <div
      class="col-12 flex-column flex-x-between page-padding"
      v-if="show === 'section3'"
    >
      <Flipped flip-id="circle" v-if="show === 'section3'">
        <div class="ball"></div>
      </Flipped>
      <p class="text text-center animated fadeIn px-sm-4 mx-sm-5 text-width">
        <span class="primary">{{ $t("purple") }}</span>
        <span class="text-animated">{{ $t("roll2-text") }}</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="animated fadeIn"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"
        />
      </svg>
    </div>
    <!-- End of section 3 -->

    <!-- Section 4 -->
    <div
      class="col-12 roll3 animated fadeIn page-padding flex-column flex-x-between"
      v-if="show === 'section4'"
    >
      <p class="text text-center white">
        {{ $t("audio1") }}
        <br />
        {{ $t("audio-file") }}
      </p>
      <div class="flex-center flex-column side-padding">
        <p
          class="white sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >
          {{ $t("play") }}
        </p>
        <img src="image/c.png" class="rmb-5" alt />
        <p class="text text-center mt-0 white text-width text-animated2">
          {{ $t("countdown-subtitle") }}
          {{ $t("countdown-subtitle") }}
        </p>
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
      <div
        class="roll4-content animated fadeIn page-padding flex-x-between flex-column"
      >
        <p
          class="text text-center white"
          style="width:80%;margin-left:auto;margin-right:auto"
        >
          {{ $t("roll4-title") }}
        </p>
        <p
          class="text text-center white"
          style="width:80%;margin-left:auto;margin-right:auto;margin-bottom:5rem"
        >
          {{ $t("roll4-subtitle") }}
        </p>
      </div>
      <div class="ball animated fadeIn addBorder route-delay"></div>
    </div>
    <!--End of Section 5 -->

    <!-- section 6 -->
    <div
      class="col-12 roll5 page-padding flex-column flex-x-between animated fadeIn"
      v-if="show === 'section6'"
    >
      <p class="text text-center white">
        {{ $t("audio2") }}
        <br />
        {{ $t("audio-file") }}
      </p>
      <div class="flex-center flex-column side-padding">
        <p
          class="white sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >
          {{ $t("play") }}
        </p>
        <img src="image/c.png" class="rmb-5" alt />
        <p class="text text-center mt-0 white text-animated2 text-width">
          {{ $t("countdown-subtitle") }}
          {{ $t("countdown-subtitle") }}
        </p>
      </div>
    </div>
    <!-- end of section 6 -->
    <!-- Section 7 -->
    <div class="col-12 flex-center" v-if="show === 'section7'">
      <Flipped flip-id="circle" v-if="show === 'section7'">
        <div class="primary-bg circle-bg"></div>
      </Flipped>
      <div
        class="roll6-content flex-x-between page-padding animated fadeIn flex-column"
      >
        <div>
          <p
            class="text text-center white text-animated"
            style="width:80%;margin-left:auto;margin-right:auto"
          >
            {{ $t("roll6-title") }}
          </p>
          <p
            class="white text-center pt-lg-0 animated text-animated2 fadeIn xs-text"
            style="width:90%;margin-left:auto;margin-right:auto;"
          >
            (pg. 11, 60 Gender and Politics in Myanmar, GEN)
          </p>
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
      v-if="show === 'section8'"
      class="col-12 roll7 page-padding animated fadeIn flex-column flex-x-between"
    >
      <p class="text text-center white" style="width:80%">
        {{ $t("audio3") }}
        <br />
        {{ $t("audio-file") }}
      </p>
      <div class="flex-center flex-column side-padding">
        <p
          class="white sm-text text-center px-4 mb-3"
          v-if="!play"
          style="font-size:14px;"
        >
          {{ $t("play") }}
        </p>
        <img src="image/c.png" class="rmb-5" alt />
        <p class="text text-center mt-0 white text-animated2 text-width">
          {{ $t("countdown-subtitle") }}
          {{ $t("countdown-subtitle") }}
        </p>
      </div>
    </div>
    <!-- end of section 8 -->
    <!-- section 9 -->
    <div
      class="ball animated bounceIn addBorder route-delay"
      v-if="show === 'section9'"
    ></div>
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
          >
            {{ $t("roll8-title") }}
          </p>
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
      <img
        src="image/support.png"
        @click="$router.push({ name: 'Wall', params: { show: true } })"
        alt
      />
      <p
        class="sm-text text-center ex-text px-4"
        style="position: absolute;
        top: 150px;"
      >
        {{ $t("show-your-support") }}
      </p>
    </div>
    <div
      class="col-12 primary-bg animated fadeIn flex-center"
      v-if="show === 'section10'"
    >
      <div
        class="circle-bg"
        style="bottom:25vh !important;background:#efefef !important;"
      ></div>
      <div class="roll8-content page-padding flex-x-between flex-column">
        <p
          class="text text-center text-animated"
          style="width:75%;margin-left:auto;margin-right:auto"
        >
          {{ $t("roll9-title") }}
        </p>
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
          <div
            id="audio-wave"
            style="min-width: 450px !important; height: 450px !important;"
          ></div>
          <div
            class="audio-control animated bounceIn px-2"
            style="width:144px;height:144px;border-radius:100%;overflow:hidden;animation-delay:1800ms"
          >
            <svg
              class="pointer"
              @click="PlayAudio()"
              v-if="!play"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
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
              width="30"
              height="30"
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
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="21"
                  rx="3.5"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </div>
        <p
          id="subtitles"
          class="sm-text audio-text my-0 text-center white"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </Flipped>
    <audio
      style="width:100%;"
      class="hidden"
      ref="audio"
      :src="audio"
      id="audio"
      controls
    />
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
    top: "0px",
    right: "",
    left: "-20px",
  },
  {
    top: "120px",
    right: "",
    left: "10px",
  },
  {
    top: "20px ",
    right: "120px ",
    left: "",
  },
  {
    top: "100px",
    right: "30px ",
    left: "",
  },
  {
    top: "250px",
    right: "60px",
    left: "",
  },
  {
    top: "300px ",
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
                formatter: function(val) {
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
                formatter: function(val) {
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
        console.log("show -> value", value);
      }
      if (value === "section2") {
        console.log("show -> value", value);
      }
      if (value === "section3") {
        console.log("show -> value", value);
      }
      if (value === "section4") {
        this.audio = "audio/MIB2.mp4";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/mm-subtitle.vtt"
            : "http://localhost:8080/audio/en-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 800);
      }
      if (value === "section5") {
        console.log("show -> value", value);
      }
      if (value === "section6") {
        this.audio = "audio/10000_hour.mp3";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/en-subtitle.vtt"
            : "http://localhost:8080/audio/mm-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 800);
      }
      if (value === "section7") {
        setTimeout(() => {
          this.showChart = true;
        }, 1300);
      }
      if (value === "section8") {
        this.audio = "audio/MIB2.mp4";
        this.subtitle =
          this.lang === "mm"
            ? "http://localhost:8080/audio/mm-subtitle.vtt"
            : "http://localhost:8080/audio/en-subtitle.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 800);
      }
      if (value === "section9") {
        console.log("show -> value", value);
      }
      if (value === "section10") {
        console.log("show -> value", value);
      }
    },
  },
  computed: {
    ...mapState(["lang"]),
  },
  methods: {
    // Global Functions

    swipe(e) {
      if (this.show === "section1" || this.show === "section2") {
        if (e === "top") {
          if (this.showFirstText) {
            this.show = "section2";
            this.showFirstText = false;
          } else {
            this.show = "section3";
          }
        }
        if (e === "bottom") {
          this.showFirstText = true;
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
      this.wave = new CircularAudioWave(document.getElementById("audio-wave"));
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
</style>

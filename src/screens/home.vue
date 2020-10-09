<template>
  <Flipper
    :flip-key="show"
    class="row vh-100"
    :spring="{ stiffness: 50, damping: 15 }"
    style="overflow: hidden"
  >
    <vs-button
      v-if="show !== 'section1'"
      class="fade-down"
      :style="`background:rgba(${upColor},0.2)!important;`"
      id="upBtn"
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
        :stroke="`rgb(${upColor})`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevrons-up"
      >
        <polyline points="17 11 12 6 7 11" />
        <polyline points="17 18 12 13 7 18" />
      </svg>
    </vs-button>
    <vs-button
      circle
      :style="
        show === 'section1'
          ? `background:rgba(${downColor},0.4)!important;overflow: visible;`
          : `background:rgba(${downColor},0.2)!important;overflow: visible;`
      "
      v-if="show !== 'section10'"
      :class="show !== 'section1' && 'fade-up'"
      id="downBtn"
      @click="swipe('top')"
      transparent
    >
      <div class="ripple-circle" v-if="show == 'section1'"></div>
      <div
        class="ripple-circle"
        style="animation-delay: 350ms !important"
        v-if="show == 'section1'"
      ></div>
      <div
        class="ripple-circle"
        style="animation-delay: 700ms !important"
        v-if="show == 'section1'"
      ></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        style="z-index: 100"
        :stroke="`rgb(${
          show === 'section1' ? 'var(--vs-primary)' : downColor
        })`"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevrons-down"
      >
        <polyline points="7 13 12 18 17 13" />
        <polyline points="7 6 12 11 17 6" />
      </svg>
    </vs-button>

    <MenuBtn :color="menuColor" />
    <!-- Section 1 -->
    <div
      class="col-12 p-0 flex-column flex-x-between"
      v-if="show === 'section1'"
    >
      <!-- <Flipped flip-id="circle"> -->
      <div
        class="circle-bg"
        style="background: #efefef; z-index: 1"
        id="first-section"
      ></div>
      <!-- </Flipped> -->
      <div class="w-100" style="z-index: 1">
        <div class="flex-column w-100 side-padding">
          <div
            class="flex-end w-100 flex-align-center"
            style="margin-bottom: 2rem"
          >
            <div class="flex-align-center flex-end">
              <img
                src="/image/logo.svg"
                class="logo animated fadeIn"
                width="220px"
                style="z-index: 1001; animation-delay: 1.2s !important"
              />
              <Flipped flip-id="circle" style="position: absolute">
                <div
                  class="dot logo-dot"
                  style="position: absolute; z-index: 999"
                ></div>
              </Flipped>
              <div
                class="dot logo-dot animated fadeIn"
                style="
                  position: absolute;
                  width: 42px !important;
                  height: 42px !important;
                  right: 33px !important;
                  top: 17px !important;
                  z-index: 1000;
                  background: #efefef !important;
                  animation-delay: 1.2s !important;
                "
              ></div>
            </div>
          </div>
          <p class="primary sm-text text-center">
            {{ $t("countdown-subtitle") }}
          </p>
        </div>

        <div
          style="z-index: 1"
          class="sec-roll1-section animated fadeIn route-delay mt-0"
        >
          <p class="text title bg-text">
            {{ $t("roll1-first-text") }}
          </p>
        </div>
      </div>
      <div class="sec-roll3-section">
        <img
          src="image/Home-01.svg"
          v-if="!isBrowser"
          class="max-img"
          width="100%"
          alt
        />
        <img src="image/Desktop1.svg" v-if="isBrowser" width="100%" alt />
      </div>
    </div>
    <!-- End Of Section 1  -->
    <!-- Section 2 -->
    <div
      class="col-12 p-0 flex-column page-padding flex-x-between"
      v-if="show === 'section2'"
    >
      <Flipped flip-id="circle">
        <div class="circle-bg primary-bg overflow-hidden" id="section-section">
          <img src="image/Home-02.svg" width="100%" v-if="!isBrowser" alt />
          <img src="image/Desktop2.svg" width="100%" v-if="isBrowser" alt />
        </div>
      </Flipped>
      <div class="w-100" style="z-index: 1">
        <div
          style="z-index: 1"
          v-if="show === 'section2'"
          class="sec-roll1-section animated fadeIn route-delay"
        >
          <p class="text title mx-auto bg-text">
            {{ $t("roll1-second-text") }}
          </p>
        </div>
      </div>
    </div>
    <!-- End Of Section 2 -->

    <!-- Section 3 -->
    <div
      class="col-12 flex-column flex-x-between page-padding"
      v-if="show === 'section3'"
    >
      <Flipped flip-id="circle" v-if="show === 'section3'">
        <div class="ball"></div>
      </Flipped>
      <p
        class="text text-center animated fadeIn text-width"
        style="padding: 0px 15px; max-width: 700px; width: 95%"
      >
        <span>{{ $t("roll2-text-helper") }}</span>
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
        <img
          src="image/Home-03.svg"
          width="100%"
          v-if="!isBrowser"
          style="bottom: -20px !important"
          alt
        />
        <img
          src="image/Desktop4.svg"
          width="100%"
          v-if="isBrowser"
          style="bottom: -50px !important"
          alt
        />
      </div>
      <div style="z-index: 1000" class="flex-center w-100 flex-column">
        <p
          class="sm-text text-center primary"
          style="
            color: #777 !important;
            padding: 0px 15px;
            max-width: 700px;
            width: 95%;
          "
        >
          {{ $t("audio1") }}
          <br />
          {{ $t("audio1-helper") }}
        </p>
        <p
          id="subtitles"
          class="text audio-text w-100 my-0 text-center primary"
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
          :style="`top:${ball.top} !important;left:${
            ball.left
          } !important;right:${ball.right}!important;animation-delay:${
            Math.floor(Math.random() * 800) + 1000
          }ms !important;`"
          :key="ball + n"
        ></div>
      </div>
      <div
        class="roll4-content animated fadeIn page-padding flex-x-between flex-column"
        style="z-index: 998"
      >
        <p
          class="text title text-center white"
          style="
            padding: 0px 15px;
            margin-left: auto;
            max-width: 700px;
            width: 95%;
            margin-right: auto;
          "
          v-html="$t('roll4-title')"
        ></p>
        <p
          class="text text-center white"
          style="
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5rem;
          "
        >
          {{ $t("roll4-subtitle") }}
          <span class="tooltip">
            <slide-x-right-transition>
              <div class="tooltip-content" v-if="showTooltip">
                <span class="sm-text primary"
                  >[Source: Gender and Politics in Myanmar, Women and Men
                  Candidates in the 2015 Election, 2017]</span
                >
              </div>
            </slide-x-right-transition>

            <span
              class="mark pointer"
              @click="showTooltip = true"
              v-click-outside="hideToggle"
              >[1]</span
            >
          </span>
        </p>
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
        <img
          src="image/Home-04.svg"
          width="100%"
          v-if="!isBrowser"
          style="bottom: -20px !important"
          alt
        />
        <img src="image/Desktop6.svg" width="100%" v-if="isBrowser" alt />

        <!-- <img src="image/Home-04.svg" class="hand-png" v-if="!isBrowser" alt />
        <div class="flex-x-between hand-div" v-if="isBrowser">
          <img src="image/left.png" width="600px" alt />
          <img src="image/right.png" width="600px" alt />
        </div> -->
      </div>
      <div style="z-index: 1000" class="flex-center w-100 flex-column">
        <p
          class="sm-text text-center primary"
          style="
            color: #777 !important;
            padding: 0px 15px;
            max-width: 700px;
            width: 95%;
          "
        >
          {{ $t("audio2") }}
          <br />
          {{ $t("audio2-helper") }}
        </p>
        <p
          id="subtitles"
          class="text audio-text w-100 my-0 text-center primary"
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
      <div
        class="roll6-content flex-x-between page-padding animated fadeIn flex-column"
        style="z-index: 998"
      >
        <p
          class="text text-center title white text-animated"
          style="
            padding: 0px 15px;
            max-width: 700px;
            width: 95%;
            margin-left: auto;
            z-index: 1000;
            margin-right: auto;
          "
        >
          {{ $t("roll6-title") }}
          <span class="tooltip">
            <slide-x-right-transition>
              <div class="tooltip-content" v-if="showTooltip">
                <span class="sm-text primary"
                  >[Source: Gender and Politics in Myanmar, Women and Men
                  Candidates in the 2015 Election, 2017]</span
                >
              </div>
            </slide-x-right-transition>
            <span
              class="mark pointer"
              @click="showTooltip = !showTooltip"
              v-click-outside="hideToggle"
              >[2]</span
            >
          </span>
        </p>
      </div>

      <div class="ball animated fadeIn">
        <div class="chart-text animated fadeIn route-delay">
          <p class="sm-text ten white">{{ $t("10") }}</p>
          <p class="sm-text five white">{{ $t("54") }}</p>
        </div>
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
        <!-- <img src="image/Home-05.svg" class="audio-3-img" alt /> -->
        <img
          src="image/Home-05.svg"
          width="100%"
          v-if="!isBrowser"
          style="bottom: -20px !important"
          alt
        />
        <img src="image/Desktop8.svg" width="100%" v-if="isBrowser" alt />
      </div>
      <div style="z-index: 1000" class="flex-center w-100 flex-column">
        <p
          class="sm-text text-center primary"
          style="
            color: #777 !important;
            padding: 0px 15px;
            max-width: 700px;
            width: 95%;
          "
        >
          {{ $t("audio3") }}
          <br />
          {{ $t("audio3-helper") }}
        </p>

        <p
          id="subtitles"
          class="text audio-text w-100 my-0 text-center primary"
          :class="showSubtitle ? '' : 'hidden'"
        ></p>
      </div>
    </div>
    <!-- end of section 8 -->
    <!-- section 9 -->
    <div
      class="ball animated bounceIn addBorder route-delay"
      v-if="show === 'section9'"
    >
      <svg
        id="female"
        data-name="Component 2 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="27"
        viewBox="0 0 26 27"
      >
        <line
          id="Line_58"
          data-name="Line 58"
          x2="26"
          transform="translate(0 16)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
        <line
          id="Line_59"
          data-name="Line 59"
          y2="27"
          transform="translate(13)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="col-12 flex-center" v-if="show === 'section9'">
      <Flipped flip-id="circle">
        <div class="primary-bg circle-bg" style="bottom: 25vh !important"></div>
      </Flipped>
      <div
        class="roll8-content page-padding fix-position flex-x-between animated fadeIn flex-column"
        style="z-index: 998"
      >
        <div>
          <p
            class="text text-center title white text-animated"
            style="
              padding: 0px 15px;
              max-width: 700px;
              width: 95%;
              margin-left: auto;
              margin-right: auto;
            "
          >
            {{ $t("roll8-title") }}
            <span class="tooltip">
              <slide-x-right-transition>
                <div class="tooltip-content" v-if="showTooltip">
                  <span class="sm-text primary"
                    >[Source: CEDAW, Concluding Observations on the Combined
                    Fourth and Fifth Periodic Reports of Myanmar]</span
                  >
                </div>
              </slide-x-right-transition>
              <span
                class="mark pointer"
                @click="showTooltip = true"
                v-click-outside="hideToggle"
                >[3]</span
              >
            </span>
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
        xmlns="http://www.w3.org/2000/svg"
        @click="$router.push({ name: 'Wall', params: { show: true } })"
        width="60.646"
        class="animated fadeInLeft route-delay"
        height="59.547"
        viewBox="0 0 60.646 59.547"
      >
        <g
          id="Group_115"
          data-name="Group 115"
          transform="translate(-157.641 -376.025)"
        >
          <g
            id="Group_87"
            data-name="Group 87"
            transform="translate(-211.053 616.001) rotate(-90)"
          >
            <g
              id="Group_86"
              data-name="Group 86"
              transform="translate(187.5 401.638)"
            >
              <path
                id="Path_141"
                data-name="Path 141"
                d="M1968.5,2500.1l-22.7,22.7-22.7-22.7"
                transform="translate(-1923.097 -2500.097)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
              />
            </g>
          </g>
          <path
            id="Path_217"
            data-name="Path 217"
            d="M-709.713,8508.8h-50.646"
            transform="translate(923 -8103)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="10"
          />
        </g>
      </svg>
      <p
        class="sm-text text-center animated fadeIn route-delay"
        style="position: absolute; width: 50vw; top: 150px"
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
        style="
          bottom: calc(var(--vh, 1vh) * 25) !important;
          background: #efefef !important;
        "
      ></div>
      <div class="roll8-content page-padding flex-x-between flex-column">
        <p
          class="text text-center text-animated"
          style="
            padding: 0px 15px;
            max-width: 700px;
            width: 95%;
            margin-left: auto;
            margin-right: auto;
          "
        >
          {{ $t("roll9-title") }}
        </p>
      </div>
      <footerFB style="bottom: 14vh !important" />
    </div>
    <!-- end of section 10 -->
    <!-- audio  -->
    <Flipped
      flip-id="circle"
      ref="loading"
      v-if="show === 'section4' || show === 'section6' || show === 'section8'"
    >
      <div class="ball">
        <!-- Roll3 Audio -->
        <div
          class="flex-center"
          style="height: 140px; min-width: 140px; overflow: visible"
        >
          <div id="audio-wave" style="min-width: 450px; height: 450px"></div>
          <div
            class="audio-control animated bounceIn px-2"
            style="
              width: 140px;
              height: 140px;
              border-radius: 100%;
              overflow: visible;
              animation-delay: 1800ms;
            "
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
            <p
              class="primary play animated fadeIn sm-text text-center"
              v-if="!play"
              style="font-size: 14px; width: 75vw"
            >
              {{ $t("play") }}
            </p>
          </div>
        </div>
      </div>
    </Flipped>
    <audio
      style="width: 100%"
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
import ClickOutside from "vue-click-outside";
import { isBrowser } from "mobile-device-detect";
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
      isBrowser: isBrowser,
      showTooltip: false,
      upColor: "var(--vs-primary)",
      downColor: "255,255,255",
      menuColor: "var(--vs-primary)",
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
              show: false,
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
              show: false,
            },
          },
        },
        colors: ["#fff", "#4E008E"],
        stroke: {
          width: 1,
        },
        dataLabels: {
          show: false,
          formatter(val, opts) {
            if (opts.seriesIndex !== 1) {
              return [""];
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
  beforeDestroy() {
    if (this.wave) {
      this.stopAudio();
      this.wave.destroy();
    }
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
        this.menuColor = "var(--vs-primary)";
        this.downColor = "255,255,255";
      }
      if (value === "section2") {
        this.menuColor = "255,255,255";
        this.downColor = "255,255,255";
        this.upColor = "255,255,255";
      }
      if (value === "section3") {
        this.menuColor = "var(--vs-primary)";
        this.downColor = "var(--vs-primary)";
        this.upColor = "var(--vs-primary)";
      }
      if (value === "section4") {
        this.downColor = "255,255,255";
        this.upColor = "var(--vs-primary)";
        this.menuColor = "var(--vs-primary)";
        this.audio = "audio/Story_1.mp3";
        this.subtitle =
          this.lang === "mm"
            ? "https://www.useyourvoice2020.org/audio/Story_1_MM.vtt"
            : "https://www.useyourvoice2020.org/audio/Story_1_EN.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 500);
      }
      if (value === "section5") {
        this.downColor = "255,255,255";
        this.upColor = "255,255,255";
        this.menuColor = "255,255,255";
      }
      if (value === "section6") {
        this.downColor = "var(--vs-primary)";
        this.upColor = "var(--vs-primary)";
        this.menuColor = "var(--vs-primary)";
        this.audio = "audio/Story_2.mp3";
        this.subtitle =
          this.lang === "mm"
            ? "https://www.useyourvoice2020.org/audio/Story_2_MM.vtt"
            : "https://www.useyourvoice2020.org/audio/Story_2_EN.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 1000);
      }
      if (value === "section7") {
        this.downColor = "255,255,255";
        this.upColor = "255,255,255";
        this.menuColor = "255,255,255";
        setTimeout(() => {
          this.showChart = true;
        }, 1300);
      }
      if (value === "section8") {
        this.downColor = "var(--vs-primary)";
        this.upColor = "var(--vs-primary)";
        this.menuColor = "var(--vs-primary)";
        this.audio = "audio/Story_4.mp3";
        this.subtitle =
          this.lang === "mm"
            ? "https://www.useyourvoice2020.org/audio/Story_4_MM.vtt"
            : "https://www.useyourvoice2020.org/audio/Story_4_EN.vtt";
        setTimeout(() => {
          this.initAudio();
        }, 1000);
      }
      if (value === "section9") {
        this.downColor = "255,255,255";
        this.upColor = "255,255,255";
        this.menuColor = "255,255,255";
      }
      if (value === "section10") {
        this.upColor = "var(--vs-primary)";
        this.menuColor = "var(--vs-primary)";
      }
    },
  },
  computed: {
    ...mapState(["lang"]),
  },
  directives: {
    ClickOutside,
  },
  methods: {
    // Global Functions
    hideToggle() {
      this.showTooltip = false;
    },
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
      if (this.show === "section4") {
        this.$gtag.event("play_audio_1", {
          event_label: "Audio Stories",
          event_category: "play_audio",
          non_interaction: true,
        });
      } else if (this.show === "section6") {
        this.$gtag.event("play_audio_2", {
          event_label: "Audio Stories",
          event_category: "play_audio",
          non_interaction: true,
        });
      } else if (this.show === "section8") {
        this.$gtag.event("play_audio_4", {
          event_label: "Audio Stories",
          event_category: "play_audio",
          non_interaction: true,
        });
      }

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
      const loading = this.$vs.loading({
        target: this.$refs.loading,
        scale: "1",
        background: "primary",
        opacity: 1,
        color: "#fff",
        type: "points",
      });
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
      this.wave.loaded = (data) => {
        console.log("this.wave.loaded -> data", data);
        loading.close();
      };
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
button#upBtn {
  position: fixed;
  height: 50px;
  top: 7px;
  width: 50px;
  right: calc(50vw - 30px);
  z-index: 1000;
}
button#downBtn {
  position: fixed;
  height: 50px;
  width: 50px;
  bottom: 30px;
  right: calc(50vw - 30px);
  z-index: 1000;
}
div#first-section {
  background: rgb(239, 239, 239);
  z-index: 1;
  bottom: calc(calc(var(--vh, 1vh) * 100) - 180px);
}
.hand-div {
  width: 100vw;
  margin: 0px auto;
  position: absolute;
  bottom: 0px;
  right: calc(50% - 50vw);
}
.circle-bg > img {
  width: 100vw;
  margin: 0px auto;
  position: absolute;
  bottom: 0px;
  right: calc(50% - 50vw);
}
.play {
  position: absolute;
  top: -80px;
}
div#third-section {
  bottom: -100px;
}
.ten {
  position: relative;
  top: -4px;
  left: -27px;
}
.five {
  position: relative;
  top: 110px;
}
div#outter-chart {
  transform: rotate(85deg);
}
.bg-text {
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgb(var(--vs-primary)) 0%,
    rgb(var(--vs-primary), 0.2) 100%
  );
  padding: 0px 15px;
  max-width: 700px;
  width: 95%;
  margin-left: auto;
  margin-top: 0px;
  margin-right: auto;
  border-radius: 20px;
}
.tooltip-content {
  position: absolute;
  background: #fff;
  padding: 5px;
  border-radius: 10px;
  width: 95vw;
  right: 2.5vw;
  left: 2.5vw;
}
.tooltip {
  display: inline !important;
}
svg#female {
  position: relative;
  bottom: -82px;
}
</style>

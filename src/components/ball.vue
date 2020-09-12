<template>
  <div>
    <div
      class="ball"
      id="chart"
      style="background:#655FC4;"
      v-if="screenType === 'red'"
    >
      <apexchart
        id="inner-chart"
        type="pie"
        width="129"
        height="129"
        :options="innserChartOptions"
        :series="innserSeries"
      ></apexchart>
      <apexchart
        id="outter-chart"
        style="margin-top:30px"
        type="radialBar"
        height="220"
        width="180"
        :options="outterChartOptions"
        :series="outterSeries"
      ></apexchart>
    </div>
    <div class="ball" style="background:#655FC4;" v-if="screenType === 'green'">
      <div
        id="chart-container"
        style="min-width: 290px; height: 290px;"
        class="animated bounceIn"
      ></div>
      <i
        class="bx bx-play"
        @click="
          wave.play();
          play = true;
        "
        v-if="!play"
      ></i>
      <i
        class="bx bx-stop"
        @click="
          wave.pause();
          play = false;
        "
        v-if="play"
      ></i>
    </div>
    <div
      class="ball"
      style="background:#655FC4;"
      v-if="screenType === 'yellow'"
    >
      <h1 style="color:#fff">2</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      play: false,
      wave: null,
      outterSeries: [70],
      outterChartOptions: {
        chart: {
          type: "radialBar",
          // sparkline: {
          //   enabled: true,
          // },
        },
        colors: ["#655FC4"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
            dataLabels: {
              name: {
                fontSize: "12px",
                color: undefined,
                offsetY: 110,
              },
              value: {
                offsetY: 76,
                fontSize: "14px",
                color: undefined,
                formatter: function(val) {
                  return val + "%";
                },
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["label"],
      },

      innserSeries: [10, 90],
      innserChartOptions: {
        chart: {
          type: "pie",
        },
        plotOptions: {
          pie: {
            dataLabels: {},
          },
        },
        colors: ["#fff", "#655FC4"],
        stroke: {
          width: 0,
        },
        labels: ["label1", ""],
        dataLabels: {
          formatter(val, opts) {
            if (opts.seriesIndex !== 1) {
              const name = opts.w.globals.labels[opts.seriesIndex];
              return [name, val.toFixed(1) + "%"];
            }
          },
        },
        legend: {
          show: false,
        },
      },
    };
  },
  computed: {
    ...mapState(["screenType"]),
  },
  watch: {
    screenType(value) {
      if (value === "green") {
        setTimeout(() => {
          this.showAudio();
        }, 10);
      }
      if (this.wave) {
        this.wave.pause();
        this.play = false;
      }
    },
  },
  mounted() {},
  methods: {
    showAudio() {
      var CircularAudioWave = window.CircularAudioWave;
      this.wave = new CircularAudioWave(
        document.getElementById("chart-container")
      );
      this.wave.onAudioEnded = () => {
        this.play = false;
        this.wave.pause();
      };
      this.wave.loadAudio("audio/10000_hour.mp3");
    },
  },
};
</script>
<style>
div#outter-chart,
div#inner-chart {
  position: absolute;
}
</style>

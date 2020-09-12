<template>
  <div
    id="app"
    style="min-height: 100vh"
    class="container-fluid"
    v-bind:style="{ cursor: selectedCursor }"
  >
    <Countdown v-if="!release" />
    <router-view :key="$route.fullPath" v-else />
  </div>
</template>

<script>
import Countdown from "./screens/countdown";
import "hooper/dist/hooper.css";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      selectedCursor: `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='gray' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-disc'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='3'%3E%3C/circle%3E%3C/svg%3E"), pointer`,
    };
  },
  created() {
    window.scrollTo(0, 0);
    // Create new link Element
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/mm.css";
    document.head.appendChild(link);
  },

  components: {
    Countdown,
  },
  mounted() {},
  computed: {
    ...mapGetters({}),
    ...mapState(["release"]),
  },
  methods: {},
};
</script>

<template>
  <div class="wall-collection" v-dragscroll @scroll.passive="onScroll" ref="outer">
    <div class="wall-container" ref="walls" :style="containerStyle">
      <div
        v-for="(item, index) in items"
        class="cell-container"
        :key="item.text + index"
        :class="(index % col) % 2 ? 'down' : 'up'"
        :style="`margin:${margin}px !important;width:${width}px !important;`"
      >
        <slot name="cell" :data="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { dragscroll } from "vue-dragscroll";

export default {
  props: {
    isAdded: {
      type: String,
      required: false,
    },
    margin: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
    col: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
    items: {
      type: Array,
      required: true,
    },
    width: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
  },
  directives: {
    dragscroll: dragscroll,
  },
  data() {
    return {};
  },
  watch: {
    isAdded() {
      this.scrollToMiddle();
    },
  },
  created() {},
  methods: {
    onScroll() {
      if (
        this.$refs.outer.scrollHeight - this.$refs.outer.clientHeight ===
        this.$refs.outer.scrollTop
      ) {
        this.$emit("reachBottom");
      }
    },
    scrollToMiddle() {
      this.$refs.outer.scrollTop = 240;
      this.$refs.outer.scrollLeft =
        this.$refs.walls.scrollWidth / 2 - screen.width / 2;
    },
  },
  mounted() {
    setTimeout(() => {
      this.scrollToMiddle();
    }, 10);
  },
  computed: {
    containerStyle() {
      return {
        width: this.width * this.col + this.margin * this.col * 2 + "px",
      };
    },
  },
};
</script>
<style>
.wall-collection {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
.cell-container {
  position: relative;
}
.wall-container {
  display: flex;
  flex-wrap: wrap;
}
.cell-container.up {
  top: 140px;
}
</style>

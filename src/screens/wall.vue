<template>
  <div id="wall">
    <div class="collection">
      <VirtualCollection
        :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
        :collection="items"
        :height="1000"
        :width="width"
      >
        <div slot="cell" slot-scope="props" class="card">
          <img :src="props.data.image" width="100%" alt="" />
          <h3 style=" text-align:center">{{ props.data.text }}</h3>
        </div>
      </VirtualCollection>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //   items: new Array(1000).fill(0).map((_, index) => ({ data: "#" + index })),
      items: [],
      line: "30",
      width: document.body.clientWidth || document.documentElement.clientWidth,
    };
  },
  created() {
    for (let i = 0; i < 200; i++) {
      var array = {
        data: {
          text: `Title ${i}`,
          image: `https://picsum.photos/300/200?image=${i}`,
        },
      };
      this.items.push(array);
    }
  },
  methods: {
    cellSizeAndPositionGetter(item, index) {
      return {
        width: 180,
        height: 220,
        x: (index % 6) * 200,
        y: parseInt(index / 6) * 200,
      };
    },
  },
};
</script>
<style>
.cell-container .card {
  border-radius: 10px;
  background: rgb(101, 95, 196);
  color: #fff;
  overflow: hidden;
}
div#wall {
  margin: 0px -15px;
}
</style>

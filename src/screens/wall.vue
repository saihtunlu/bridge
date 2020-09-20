<template>
  <div id="wall">
    <div class="collection">
      <wall
        :items="posts"
        @reachBottom="GetData()"
        :width="260"
        :isAdded="isAddedPost"
        :margin="margin"
        :col="col"
      >
        <div slot="cell" slot-scope="props" class="card  text-center">
          <img :src="props.data.image" width="100%" alt />
          <div class="cardFooter py-3">
            <p class="sm-text my-0">
              {{ props.data.text }}
            </p>
            <p class="mb-0 mt-1">{{ props.data.name }}</p>
          </div>
        </div>
      </wall>

      <button class="flex-center" id="floatingBtn" @click="active = true">
        <vs-button
          circle
          icon
          color="primary"
          style="border-radius:100% !important; width:55px !important;height:55px !important;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </vs-button>
        <p
          class=" primary my-0"
          style="position: absolute;font-size:16px;bottom: 5px;width:40%;"
        >
          {{ $t("show-your-support") }}
        </p>
      </button>
      <slide-y-down-transition>
        <div class="my-dialog flex-center" v-if="active">
          <div class="dialog-content">
            <Steps @toggle="active = !active" @newPost="addNewPost" />
          </div>
        </div>
      </slide-y-down-transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Steps from "../components/step";
import wall from "../components/wall";
import { isTablet, isBrowser, isMobileOnly } from "mobile-device-detect";
export default {
  name: "App",
  data() {
    return {
      active: false,
      line: "30",
      margin: 0,
      isAddedPost: "",
      col: 0,
    };
  },
  components: {
    Steps,
    wall,
  },
  created() {},
  mounted() {
    this.active = this.$route.params.show;
    if (isMobileOnly) {
      this.col = 3;
      this.margin = 10;
    }
    if (isTablet) {
      this.col = 5;
      this.margin = 15;
    }
    if (isBrowser) {
      this.col = 7;
      this.margin = 20;
    }
  },
  computed: {
    ...mapState(["posts", "page"]),
    ...mapGetters(["hasNext"]),
  },
  methods: {
    addNewPost(data) {
      if (isMobileOnly) {
        this.$store.commit("setNewPost", { data, index: 7 });
        // this.posts.splice(7, 0, data);
      }
      if (isTablet) {
        this.$store.commit("setNewPost", { data, index: 7 });
        // this.posts.splice(12, 0, data);
      }
      if (isBrowser) {
        this.$store.commit("setNewPost", { data, index: 7 });
        // this.posts.splice(17, 0, data);
      }
      this.isAddedPost = data.text + data.name;
    },
    GetData() {
      if (this.hasNext) {
        var page = this.page + 1;
        this.$store.dispatch("getPosts", { page });
      }
    },
  },
};
</script>
<style>
.dialog-content {
  border-radius: 45px;
  background: #fff;
}
.my-dialog {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: rgb(var(--vs-primary), 0.4);
  padding: 0px !important;
  max-height: 100vh;
  overflow-y: auto;
}

.card {
  border-radius: 20px;
  background: rgb(var(--vs-primary));
  color: #fff;
  overflow: hidden;
}

div#wall {
  margin: 0px -15px;
}

div#addWall .vs-dialog {
  border-radius: 40px !important;
}
button#floatingBtn {
  width: 230px;
  position: fixed;
  background: #fff;
  box-shadow: 0px 4px 25px -8px rgb(0, 0, 0, 0.2);
  top: -70px;
  height: 230px;
  border-radius: 30px;
  border: none;
  left: calc(50vw - 115px);
}
</style>

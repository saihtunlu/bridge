<template>
  <div id="wall" style="background: #8a72f7">
    <MenuBtn color="255,255,255" :hideBg="true" />
    <div class="collection">
      <wall
        :items="posts"
        @reachBottom="GetData()"
        :width="280"
        :isAdded="isAddedPost"
        :margin="margin"
        :col="col"
      >
        <div slot="cell" slot-scope="props" class="card text-center">
          <div class="gray-pg card-divider overflow-hidden">
            <div class="flex-x-between px-3 card-logo">
              <div class="flex-start flex-column">
                <img
                  src="image/logo.svg"
                  style="margin-left: -5px"
                  width="100px"
                  alt
                />
                <p class="primary my-0 xs-text">useyourvoice2020.org</p>
              </div>
              <vs-button
                circle
                icon
                gray
                @click="selectPost(props.data)"
                class="shareBtn"
                flat
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-share-2"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </vs-button>
            </div>
            <img :src="props.data.image" width="100%" alt />
          </div>

          <div class="cardFooter py-3">
            <p class="cart-text my-0">{{ props.data.text }}</p>
            <p class="mb-0 cart-sm-text mt-1">{{ props.data.name }}</p>
          </div>
        </div>
      </wall>

      <button class="flex-center" id="floatingBtn" @click="active = true">
        <div
          class="flex-center primary-bg"
          style="
            border-radius: 100% !important;
            margin-right: 20px !important;
            margin-top: 6px;
            margin-bottom: 6px;
            border-radius: 100%;
            margin-left: 8px;
            width: 45px !important;
            height: 45px !important;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
    </div>
    <fade-transition>
      <div class="my-dialog flex-center" style="z-index: 10032" v-if="active">
        <div class="dialog-content" :style="`background:${color} !important;`">
          <vs-button
            v-if="color === 'white'"
            color="rgb(255,255,255)"
            style="
              right: 10px;
              margin-top: -5px;
              box-shadow: 0px 4px 25px -10px rgb(0, 0, 0, 0.2);
            "
            id="closeShare"
            @click="active = false"
            circle
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(var(--vs-primary))"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </vs-button>
          <Steps
            @toggle="Toggle"
            @bgColor="setBgColor"
            @newPost="addNewPost"
            :sharePost="post"
            :sharingPost="sharingPost"
          />
        </div>
      </div>
    </fade-transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Steps from "../components/step";
import wall from "../components/wall";
import MenuBtn from "./menu";

import { isTablet, isBrowser, isMobileOnly } from "mobile-device-detect";
export default {
  data() {
    return {
      post: {},
      sharingPost: false,
      active: true,
      line: "30",
      margin: 0,
      color: "white",
      isAddedPost: "",
      col: 0,
    };
  },
  components: {
    Steps,
    wall,
    MenuBtn,
  },
  created() {},
  mounted() {
    var imageUrl = this.$route.query.image;
    console.log(imageUrl);
    if (isMobileOnly) {
      this.col = 3;
      this.margin = 15;
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
    ...mapState(["posts", "page", "getting"]),
    ...mapGetters(["hasNext"]),
  },

  methods: {
    Toggle() {
      this.active = !this.active;
      this.sharingPost = false;
    },
    selectPost(post) {
      this.post = post;
      this.color = "transparent";
      this.sharingPost = true;
      this.active = true;
    },
    setBgColor(data) {
      this.color = data;
    },
    addNewPost(data) {
      if (isMobileOnly) {
        this.$store.commit("setNewPost", { data, index: 7 });
      }
      if (isTablet) {
        this.$store.commit("setNewPost", { data, index: 7 });
      }
      if (isBrowser) {
        this.$store.commit("setNewPost", { data, index: 7 });
      }
      this.isAddedPost = data.text + data.name;
    },
    GetData() {
      if (this.hasNext) {
        this.$store.commit("setGetting", true);
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
  /* background: #fff; */
}
.my-dialog {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: rgb(var(--vs-primary), 0.7);
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
  position: fixed;
  padding: 0px;
  background: #fff;
  box-shadow: 0 4px 25px -8px rgba(0, 0, 0, 0.2);
  top: 10px;
  right: -1px;
  z-index: 100;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  border: none;
}
</style>

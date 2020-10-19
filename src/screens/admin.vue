<template>
  <div class="row">
    <MenuBtn />
    <div class="flex-end w-100 side-padding">
      <img src="/image/logo.png" class="mt-3" width="200px" alt />
    </div>
    <div class="walls-table w-100 mx-5">
      <vs-table>
        <template #header>
          <vs-input v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'text')"
              >Text Content</vs-th
            >
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'name')"
              >Name</vs-th
            >
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'name')"
              >Occupation</vs-th
            >
            <vs-th
              sort
              @click="posts = $vs.sortData($event, posts, 'created_at')"
              >Posted Date</vs-th
            >
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'image')"
              >Choosen Image</vs-th
            >
            <vs-th>Actions</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage(
              $vs.getSearch(posts, search),
              page,
              max
            )"
            :data="tr"
          >
            <vs-td>{{ tr.text }}</vs-td>
            <vs-td>{{ separate(tr.name)[0] }}</vs-td>
            <vs-td>{{ separate(tr.name)[1] }}</vs-td>
            <vs-td>{{ tr.created_at }}</vs-td>
            <vs-td>
              <img
                :src="tr.image"
                width="100px"
                style="border-radius: 5px"
                alt
              />
            </vs-td>

            <vs-td>
              <div class="flex-align-center">
                <vs-button flat warn @click="editPost(tr)">
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
                    class="feather feather-edit-3"
                  >
                    <path d="M12 20h9"></path>
                    <path
                      d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                    ></path>
                  </svg>
                  Edit
                </vs-button>

                <vs-button
                  class="ml-3"
                  flat
                  danger
                  @click="selectPost(tr.id, i)"
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
                    class="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                  Remove
                </vs-button>
              </div>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination
            v-model="page"
            :length="$vs.getLength($vs.getSearch(posts, search), max)"
          />
        </template>
      </vs-table>
    </div>

    <vs-dialog
      id="alert"
      blur
      width="200px"
      not-close
      not-padding
      v-model="active"
    >
      <div class="con-content flex-center">
        <p class="sm-text">Are you sure to remove this post?</p>
      </div>
      <template #footer>
        <div class="con-footer">
          <div class="flex-center">
            <vs-button ref="button" danger @click="deletePost()" transparent>
              <p class="my-0">Yes</p>
            </vs-button>
            <vs-button @click="active = false" dark transparent>
              <p class="my-0">No, thanks!</p>
            </vs-button>
          </div>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog
      scroll
      overflow-hidden
      not-close
      auto-width
      id="editPost"
      v-model="editActive"
    >
      <template #header>
        <h4>Editing {{ selectedPost.text }}</h4>
      </template>
      <div class="con-content pt-4">
        <div class="flex-between-center w-100">
          <vs-input
            label="Text"
            style="width: 49%"
            v-model="selectedPost.text"
            @change="changeText"
          />
          <vs-input
            label="Name, Occupation"
            style="width: 49%"
            v-model="selectedPost.name"
            @change="changeName"
          />
        </div>
        <p>Choosen Image</p>
        <div class="chooseImage show-scroll flex-align-center">
          <img
            :src="image"
            v-for="(image, n) in images"
            :key="image + n"
            class="mr-2"
            @click="selectImage(image)"
            :class="image === selectedPost.image ? 'selectedImage' : ''"
            style="
              width: 200px;
              border: 2px solid transparent;
              border-radius: 20px;
            "
            alt
          />
        </div>
        <p>Converted Post Card</p>
        <div class="flex-between-center">
          <div class="flex-column">
            <div
              class="card text-center cardPreview2"
              style="width: 275px !important"
              id="cardPreview"
            >
              <div
                class="gray-pg card-divider overflow-hidden"
                style="
                  border-bottom-left-radius: 50% 10%;
                  border-bottom-right-radius: 50% 10%;
                "
              >
                <div
                  class="flex-x-between card-logo"
                  style="
                    width: 275px !important;
                    padding-right: 12px !important;
                    padding-left: 12px !important;
                  "
                >
                  <img src="image/logo.png" width="100px" alt />
                  <span
                    class="primary xs-text"
                    style="font-size: 11px !important"
                  >
                    useyourvoice2020.org
                  </span>
                </div>
                <img
                  :src="selectedPost.image"
                  style="width: 100% !important; height: auto"
                  alt
                />
              </div>
              <div
                class="cardFooter"
                style="
                  padding-top: 12px !important;
                  padding-bottom: 12px !important;
                "
              >
                <img :src="textImage" width="100%" />
                <img :src="nameImage" width="100%" />
              </div>
            </div>

            <div
              class="card text-center cardPreview2"
              style="
                width: 2750px !important;
                position: absolute;
                z-index: -100;
                border-radius: 200px !important;
              "
              id="cardPreview"
              ref="cardPreview"
            >
              <div
                class="gray-pg card-divider overflow-hidden"
                style="
                  border-bottom-left-radius: 50% 10%;
                  border-bottom-right-radius: 50% 10%;
                "
              >
                <div
                  class="flex-x-between card-logo"
                  style="
                    width: 2750px !important;
                    top: 150px;
                    padding-right: 120px !important;
                    padding-left: 120px !important;
                  "
                >
                  <img src="image/logo.png" width="1000px" alt />
                  <span
                    class="primary xs-text"
                    style="font-size: 110px !important"
                  >
                    useyourvoice2020.org
                  </span>
                </div>
                <img
                  :src="selectedPost.image"
                  style="width: 100% !important; height: auto"
                  alt
                />
              </div>
              <div
                class="cardFooter"
                style="
                  padding-top: 120px !important;
                  padding-bottom: 120px !important;
                "
              >
                <img :src="textImage" width="100%" />
                <img :src="nameImage" width="100%" />
              </div>
            </div>

            <div class="flex-between-center">
              <p class="text-center mr-3">preview</p>
              <vs-button transparent @click="Convert"> Convert </vs-button>
            </div>
          </div>
          <div v-if="dataUrl">
            <img :src="dataUrl" width="85%" class="mx-auto block" alt="" />
            <p class="text-center">Output</p>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="con-footer flex-align-center flex-end">
          <vs-button @click="updatePost" transparent> Update </vs-button>
          <vs-button @click="editActive = false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import MenuBtn from "./menu";
const images = [
  "image/wall (1).png",
  "image/wall-(2).png",
  "image/wall (3).png",
  "image/wall (4).png",
  "image/wall (5).png",
  "image/wall-(6).png",
  "image/wall (7).png",
  "image/wall (8).png",
  "image/wall (9).png",
  "image/wall (10).png",
];
export default {
  data: () => ({
    images: images,
    textImage: null,
    nameImage: null,
    search: "",
    dataUrl: null,
    page: 1,
    max: 5,
    selectedIndex: null,
    posts: [],
    deleteId: null,
    active: false,
    editActive: false,
    selectedPost: {},
  }),
  created() {
    this.getPosts();
  },
  methods: {
    changeText() {
      var text = this.selectedPost.text;
      var result = this.ZawgyiChecker(text);
      const textToImage = require("text-to-image");
      textToImage
        .generate(result, {
          maxWidth: 1000,
          fontSize: 60,
          textAlign: "center",
          lineHeight: 100,
          fontFamily: "Padauk",
          bgColor: "transparent",
          margin: 0,
          textColor: "#fff",
        })
        .then((dataUri) => {
          this.textImage = dataUri;
        });
    },
    changeName() {
      var text = this.selectedPost.name;
      var result = this.ZawgyiChecker(text);
      const textToImage = require("text-to-image");
      textToImage
        .generate(result, {
          maxWidth: 1000,
          fontSize: 50,
          textAlign: "center",
          lineHeight: 75,
          fontFamily: "Padauk",
          bgColor: "transparent",
          margin: 0,
          textColor: "#fff",
        })
        .then((dataUri) => {
          this.nameImage = dataUri;
        });
    },
    ZawgyiChecker(text) {
      var result = text;
      const detector = window.ZawgyiDetector;
      const check = detector.getZawgyiProbability(text);
      if (check > 0.95) {
        const converter = window.ZawgyiConverter;
        result = converter.zawgyiToUnicode(text);
      }
      return result;
    },
    selectImage(data) {
      this.selectedPost.image = data;
    },
    getPosts() {
      const loading = this.$vs.loading();
      this.$axios.get("all-posts/").then((response) => {
        this.posts = response.data;
        loading.close();
      });
    },
    separate(text) {
      var array = text.split(",");
      return array;
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n),
        extension = mime.split("/")[1];
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename + "." + extension, { type: mime });
    },
    async Convert() {
      const el = this.$refs.cardPreview;
      const options = {
        type: "dataURL",
        backgroundColor: null,
      };
      var dataUrl = await this.$html2canvas(el, options);
      this.dataUrl = dataUrl;
      this.selectedPost.screenshot = this.dataURLtoFile(dataUrl, "postcard");
      console.log(
        "Convert -> this.selectedPost.screenshot",
        this.selectedPost.screenshot
      );
    },
    selectPost(id, index) {
      this.deleteId = id;
      this.selectedIndex = index;
      this.active = true;
    },
    editPost(data) {
      this.selectedPost = data;
      this.changeText(data.text);
      this.changeName(data.name);
      this.editActive = true;
    },
    deletePost() {
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: "0.4",
        background: "danger",
        opacity: 1,
        color: "#fff",
      });
      this.$axios
        .delete("delete-post/" + this.deleteId)
        .then(() => {
          loading.close();
          this.active = false;
          this.posts.splice(this.selectedIndex, 1);
          this.$vs.notification({
            color: "success",
            title: "Success",
            text: "The post has been successfully removed!",
          });
        })
        .catch(() => {
          loading.close();
          this.active = false;
          this.$vs.notification({
            color: "danger",
            title: "Error",
            text: "Oops! There is an error while deleting!",
          });
        });
    },
    updatePost() {
      const loading = this.$vs.loading({
        scale: "0.4",
      });

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      let formData = new FormData();
      formData.append("text", this.selectedPost.text);
      formData.append("name", this.selectedPost.name);
      formData.append("image", this.selectedPost.image);
      formData.append("screenshot", this.selectedPost.screenshot);
      this.$axios
        .put("update-post/" + this.selectedPost.id, formData, config)
        .then((response) => {
          console.log("updatePost -> response", response);
          this.editActive = false;
          loading.close();
          this.$vs.notification({
            color: "success",
            title: "Success",
            text: "The post has been successfully updated!",
          });
        })
        .catch(() => {
          loading.close();
          this.editActive = false;
          this.$vs.notification({
            color: "danger",
            title: "Error",
            text: "Oops! There is an error while updating!",
          });
        });
    },
  },
  components: {
    MenuBtn,
  },
};
</script>
<style>
.walls-table {
  background: #fff;
  padding: 15px;
  border-radius: 30px;
  margin-top: 1rem;
}
div#alert button.vs-button {
  height: 38px;
}
div#alert .vs-dialog {
  padding: 10px;
}
.chooseImage {
  overflow-x: scroll;
}
</style>

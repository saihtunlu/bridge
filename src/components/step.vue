<template>
  <div style="display:flex">
    <div
      id="step1"
      v-if="showStep === 'step1'"
      class="flex-column flex-x-between"
    >
      <div class="upperDiv">
        <p class="text text-center mb-0 p-3 text-bold">
          {{ $t("step1-title") }}
        </p>
        <div class="flex-center card-preview">
          <div class="card text-center">
            <img src="image/wall (1).jpg" style="width:100%" alt />
            <div class="cardFooter py-3">
              <p class="text my-0">Together againt hate!</p>
              <p class="my-0">username</p>
            </div>
          </div>
        </div>
        <p class="sm-text2 text-center mx-auto text-bold" style="width:75%">
          {{ $t("step1-subtitle") }}
        </p>
      </div>
      <div class="lowerDiv flex-end flex-column side-padding">
        <vs-button class="mb-3" @click="changeStep('step2')">{{
          $t("next")
        }}</vs-button>
        <vs-button class="mb-5" @click="$emit('toggle')">{{
          $t("see-wall")
        }}</vs-button>
      </div>
    </div>

    <!-- step 2 -->
    <div
      id="step2"
      v-if="showStep === 'step2'"
      class="flex-column flex-x-between"
    >
      <div class="upperDiv px-5 pb-3">
        <p class="text text-center primary mb-1 p-3 text-bold">
          {{ $t("choose-img") }}
        </p>
        <img
          :src="image"
          v-for="(image, n) in images"
          :key="image + n"
          class="mb-2"
          @click="selectedImage = image"
          :class="image === selectedImage ? 'selectedImage' : ''"
          style="width:100%;border:2px solid transparent;border-radius:20px"
          alt
        />
      </div>
      <div class="lowerDiv flex-end flex-column side-padding">
        <vs-button
          class="mb-5"
          :disabled="selectedImage ? false : true"
          @click="changeStep('step3')"
          >{{ $t("next") }}</vs-button
        >
      </div>
    </div>

    <!-- step 3 -->
    <div
      id="step3"
      v-if="showStep === 'step3'"
      class="flex-column w-100 flex-x-between"
    >
      <div class="upperDiv px-3 w-100 pb-3">
        <p class="text text-center primary mb-5 p-3 text-bold">
          {{ $t("choose-txt") }}
        </p>
        <vs-button
          transparent
          class="sm-text text-center w-100 my-0"
          @click="text = $t('text1')"
          >{{ $t("text1") }}</vs-button
        >
        <div class="b-divider"></div>
        <vs-button
          transparent
          class="sm-text text-center w-100 my-0"
          @click="text = $t('text2')"
          >{{ $t("text2") }}</vs-button
        >
        <div class="b-divider"></div>
        <vs-button
          transparent
          class="sm-text text-center w-100 my-0"
          @click="text = $t('text3')"
          >{{ $t("text3") }}</vs-button
        >
        <div class="b-divider"></div>
        <vs-button
          transparent
          class="sm-text text-center w-100 my-0"
          @click="text = $t('text4')"
          >{{ $t("text4") }}</vs-button
        >
      </div>
      <div class="lowerDiv flex-end flex-column mt-5 pt-3 w-100 px-3">
        <textarea
          :placeholder="$t('your-txt')"
          class="my-3 sm-text"
          id="cardText"
          v-model="text"
        />
        <input
          :placeholder="$t('name')"
          id="userName"
          class="mb-3 sm-text"
          v-model="name"
        />
        <vs-button
          class="mb-5"
          @click="changeStep('step4')"
          :disabled="text && name ? false : true"
          >{{ $t("next") }}</vs-button
        >
      </div>
    </div>
    <!-- step 4 -->
    <div
      id="step4"
      v-if="showStep === 'step4'"
      class="flex-column w-100 flex-x-between"
    >
      <div class="upperDiv w-100 pb-3">
        <p class="text text-center primary mb-5 p-3 text-bold">
          {{ $t("finish") }}
        </p>
        <div class="flex-center card-preview">
          <div class="card text-center" id="cardPreview">
            <img :src="selectedImage" style="width:100%" alt />
            <div class="cardFooter py-3">
              <p class="sm-text my-0">{{ text }}</p>
              <p class="mb-0 mt-1">{{ name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lowerDiv flex-end flex-column pt-3 w-100 px-3">
        <!-- <div class="flex-center mb-4">
          <p id="downloadBtn" class="mr-4" @click="downloadImage()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"
              />
            </svg>
          </p>

          <p @click="uploadFB()" id="shareFb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
              />
            </svg>
          </p>
        </div> -->
        <vs-button class="mb-3" @click="changeStep('step2')">{{
          $t("back")
        }}</vs-button>
        <vs-button class="mb-5" @click="Post()">{{ $t("post") }}</vs-button>
      </div>
    </div>

    <!-- step 5 -->
    <div
      id="step5"
      v-if="showStep === 'step5'"
      class="flex-column w-100 flex-x-between"
    >
      <div class="upperDiv w-100 pb-3">
        <p class="text text-center primary mb-5 p-3 text-bold">
          {{ $t("finish") }}
        </p>
        <div class="flex-center card-preview">
          <div class="card text-center" id="cardPreview">
            <img :src="selectedImage" style="width:100%" alt />
            <div class="cardFooter py-3">
              <p class="sm-text my-0">{{ text }}</p>
              <p class="mb-0 mt-1">{{ name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lowerDiv flex-end flex-column pt-3 w-100 px-3">
        <div class="flex-center mb-4">
          <p id="downloadBtn" class="mr-4" @click="downloadImage()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"
              />
            </svg>
          </p>

          <a :href="fbLink" target="_blank" id="shareFb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
              />
            </svg>
          </a>
        </div>
        <vs-button class="mb-5" @click="$emit('toggle')">{{
          $t("finish")
        }}</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
const images = [
  "image/wall (1).jpg",
  "image/wall (2).jpg",
  "image/wall (3).jpg",
  "image/wall (4).jpg",
];
import htmlToImage from "html-to-image";
export default {
  data() {
    return {
      selectedImage: null,
      text: null,
      name: null,
      images: images,
      showStep: "step1",
      output: null,
      file: null,
      fbLink: null,
      newPost: {},
    };
  },
  methods: {
    changeStep(data) {
      this.showStep = data;
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n),
        extension = mime.split("/")[1];

      console.log("dataURLtoFile -> mime", extension);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename + "." + extension, { type: mime });
    },
    Post() {
      var node = document.getElementById("cardPreview");
      htmlToImage
        .toPng(node, {
          quality: 1,
        })
        .then((dataUrl) => {
          this.dataUrl = dataUrl;
          var file = this.dataURLtoFile(dataUrl, "postcard");
          const config = {
            headers: { "content-type": "multipart/form-data" },
          };
          let formData = new FormData();
          formData.append("text", this.text);
          formData.append("name", this.name);
          formData.append("image", this.selectedImage);
          formData.append("screenshot", file);
          console.log("Post -> file", file);

          this.$axios
            .post("create-post/", formData, config)
            .then((response) => {
              this.newPost = response.data;
              this.$emit("newPost", response.data);
              this.fbLink = `http://www.facebook.com/sharer.php?u=${encodeURIComponent(
                "image-url" + response.data.screenshot
              )}&t=${encodeURIComponent(document.title)}&hashtag=%23OurVoices`;
              this.showStep = "step5";
            });
        });
    },
    downloadImage() {
      var download = document.createElement("a");
      download.href = this.dataUrl;
      download.download = "postcard.png";
      download.click();
    },
  },
  mounted() {},
};
</script>
<style>
#shareFb,
#downloadBtn {
  background: rgb(var(--vs-primary));
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

textarea#cardText {
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  resize: none !important;
  height: 100px !important;
  border: 1px solid rgb(0, 0, 0, 0.2);
}
input#userName {
  border-radius: 20px;
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.2);
}
.card {
  background: rgb(var(--vs-primary));
  border-radius: 20px;
  overflow: hidden;
  color: #fff;
  width: 100%;
  box-shadow: 0px 8px 25px -10px rgb(var(--vs-primary));
}
.card img {
  border-bottom-left-radius: 50% 8%;
  border-bottom-right-radius: 50% 8%;
}
.selectedImage {
  border-color: rgb(var(--vs-primary)) !important;
}

.card-preview {
  background: #ddd;
  padding: 40px;
  width: calc(100% + 16px);
  margin-left: -8px;
}
</style>

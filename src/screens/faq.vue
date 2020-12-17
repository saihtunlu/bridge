<template>
  <div class="row">
    <MenuBtn />
    <div class="col-12 flex-end stories-nav">
      <img src="image/logo.svg" style="margin-right: 18px" width="220px" alt />
    </div>
    <div
      class="col-12 mb-base"
      style="max-width: 720px !important; margin: auto"
    >
      <h2 class="primary faq-padding text-title bold">{{ $t("faq_title") }}</h2>
    </div>
    <div class="col-12 flex-center">
      <vsa-list>
        <vsa-item v-for="(faq, index) in faqs" :key="faq.title">
          <vsa-heading>
            <h3 class="primary text my-2 bold">{{ faq.title }}</h3>
          </vsa-heading>
          <vsa-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="left"
              width="7.414"
              height="12.828"
              viewBox="0 0 7.414 12.828"
            >
              <g
                id="Group_116"
                data-name="Group 116"
                transform="translate(515.638 -276.586) rotate(90)"
              >
                <g
                  id="Group_89"
                  data-name="Group 89"
                  transform="translate(278 509.638)"
                >
                  <path
                    id="Path_141"
                    data-name="Path 141"
                    d="M1933.1,2500.1l-5,5-5-5"
                    transform="translate(-1923.097 -2500.097)"
                    fill="none"
                    stroke="#4e008e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.828"
              height="7.414"
              viewBox="0 0 12.828 7.414"
              class="down"
            >
              <g
                id="Group_1670"
                data-name="Group 1670"
                transform="translate(-276.586 -508.224)"
              >
                <g
                  id="Group_89"
                  data-name="Group 89"
                  transform="translate(278 509.638)"
                >
                  <path
                    id="Path_141"
                    data-name="Path 141"
                    d="M1933.1,2500.1l-5,5-5-5"
                    transform="translate(-1923.097 -2500.097)"
                    fill="none"
                    stroke="#4e008e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>
          </vsa-icon>
          <vsa-content class="faq-content">
            <div class="flex-center">
              <img
                :src="faq.image"
                :class="(index === 2 || index === 6) && 'pt-3'"
                class="mb-3"
                style="width: 100px"
                alt=""
              />
            </div>
            <div
              v-for="(content, index) in faq.content"
              class="mb-5"
              :key="index"
            >
              <h3 class="mb-0 text">{{ content.question }}</h3>
              <div
                style="
                  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
                  margin: 5px;
                "
              ></div>
              <p class="sm-text2">{{ content.ans }}</p>
            </div></vsa-content
          >
        </vsa-item>
      </vsa-list>
    </div>
    <div class="col-12" style="max-width: 720px !important; margin: auto">
      <div class="faq-padding w-100 mt-5 mb-base" style="max-width: 600px">
        <h2 class="primary my-2 text-title bold">Case Studies</h2>
        <a
          target="_blank"
          style="text-decoration: underline !important"
          class="mb-3 block sm-text"
          href="https://asiafoundation.org/publication/womens-political-participation-myanmar-experiences-women-parliamentarians-2011-2016/"
        >
          Women’s Political Participation in Myanmar: Experiences of Women
          Parliamentarians 2011-2016</a
        >
        <a
          target="_blank"
          class="mb-3 block sm-text"
          style="text-decoration: underline !important"
          href="https://www.unwomen.org/en/digital-library/publications/2014/6/violence-against-women-in-politics"
        >
          Violence Against Women in Politics</a
        >

        <a
          target="_blank"
          class="sm-text block"
          style="text-decoration: underline !important"
          href="https://www.article19.org/resources/hate-speech-explained-a-toolkit/"
        >
          ‘Hate Speech’ Explained: A Toolkit</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import MenuBtn from "./menu";
import { enfaqs, mmfaqs } from "../constant/faq";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import { mapState } from "vuex";
export default {
  data() {
    return {
      faqs: [],
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
  mounted() {
    if (this.lang === "en") {
      this.faqs = enfaqs;
    } else {
      this.faqs = mmfaqs;
    }
  },
  components: {
    MenuBtn,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
  },
};
</script>

<style >
span.vsa-item__trigger__content h3 {
  text-align: left !important;
  margin-right: 10px !important;
}
button.vsa-item__trigger {
  padding: 25px;
}
.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  background: transparent !important;
}

.vsa-item--is-active svg.left {
  display: block !important;
}
.vsa-item--is-active svg.down {
  display: none !important;
}
.vsa-item svg.left {
  display: none;
}
.vsa-list {
  background-color: transparent !important;
  border: none !important;
}
.vsa-item__content {
  background-color: rgb(var(--vs-primary)) !important;
  color: #fff !important;
}
</style>
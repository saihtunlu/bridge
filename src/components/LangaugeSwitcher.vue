<template>
  <div></div>
</template>

<script>
const langs = [
  {
    value: "mm",
    label: "မြန်မာ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/320px-Flag_of_Myanmar.svg.png",
  },
  {
    value: "en",
    label: "English",
    image:
      "https://cdn10.bigcommerce.com/s-hhbbk/products/2194/images/43897/UnionJack__45568.1580477840.1280.1280.png",
  },
];
export default {
  data() {
    return {
      lang: "en",
      langs: langs,
      selected: langs[1],
    };
  },
  created() {
    var check = localStorage.getItem("lang");
    if (check) {
      // Create new link Element
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "css/mm.css";
      document.head.appendChild(link);
      this.$i18n.locale = check;
      this.lang = check;
      this.selected = langs.filter((data) => {
        return data.value === check;
      })[0];
    }
  },
  methods: {
    changeLang(data) {
      this.selected = data;
      this.lang = data.value;
      var lang = data.value;
      if (lang) {
        this.$i18n.locale = lang;
        localStorage.setItem("lang", lang);
      }
    },
  },
};
</script>

export default {
  hasNext: (state) => {
    return state.next ? true : false;
  },
  audios: (state) => {
    if (state.lang === "mm") {
      var audios = state.mmAudio;
    } else {
      audios = state.enAudio;
    }
    return audios;
  },
};

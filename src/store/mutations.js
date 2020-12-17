export default {
  setPosts(state, data) {
    data.forEach((post) => {
      state.posts.push(post);
    });
    state.getting = false;
  },
  setRelease(state, data) {
    state.release = data;
  },
  setShowSwitcher(state, data) {
    state.showSwitcher = data;
  },
  setLang(state, data) {
    state.lang = data;
  },
  setPage(state, data) {
    state.page = data;
  },
  setNext(state, data) {
    state.next = data;
  },
  setNewPost(state, data) {
    state.posts.splice(data.index, 0, data.data);
  },
  setPlaying(state, data) {
    state.playing = data;
  },
  setGetting(state, data) {
    state.getting = data;
  },
};

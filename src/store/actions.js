import axios from "../axios";
export default {
  getPosts: async ({ commit }, { page }) => {
    return await axios.get(`/posts/?page=${page}`).then((response) => {
      commit("setPosts", response.data.results);
      commit("setNext", response.data.next);
      commit("setPage", page);
    });
  },

  login: async ({ commit }, { username, password }) => {
    return await axios
      .post("login/", { username: username, password: password })
      .then((response) => {
        var access = response.data.access;
        var refresh = response.data.refresh;
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        commit("isLogged", true);
        window.location.reload();
      });
  },
};

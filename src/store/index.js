import { createStore } from "vuex";

export default createStore({
  state: {
    authUser: null,
  },
  getters: {
    getAuthUser: (state) => state.authUser,
  },
  mutations: {
    setAuthUser: (state, authUser) => {
      state.authUser = authUser;
    },
  },
  actions: {
    setAuthUser: ({ commit }, authUser) => {
      commit("setAuthUser", authUser);
    },
  },
});

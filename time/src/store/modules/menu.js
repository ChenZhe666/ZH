export default {
  namespaced: true,
  state: {
    collapse: false,
  },
  mutations: {
    setcoll: (state) => {
      state.collapse = !state.collapse;
    },
  },
  actions: {
    setCollapse: ({ commit }) => {
      commit("setcoll");
    },
  },
};

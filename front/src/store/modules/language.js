const state = {
  language: localStorage.language || null,
};

const getters = {
  language: (state) => state.language,
};

const mutations = {
  setLanguage: (state, language) => (state.language = language),
};

const actions = {
  async setLanguage({ commit }, property) {
    localStorage.setItem("language", property);
    commit("setLanguage", property);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

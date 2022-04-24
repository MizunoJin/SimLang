const state = {
  language: localStorage.targetLang || null,
};

const getters = {
  targetLang: (state) => state.language,
};

const mutations = {
  setLanguage: (state, language) => (state.language = language),
};

const actions = {
  async setLanguage({ commit }, property) {
    localStorage.setItem("targetLang", property);
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

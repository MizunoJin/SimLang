import { LANGUAGES } from "@/const/languages";

const state = {
  language: null,
};

const getters = {
  targetLang: (state) => state.language,
};

const mutations = {
  setLanguage: (state, language) => (state.language = language),
};

const actions = {
  async setLanguage({ commit }, property) {
    const language = LANGUAGES.find((lang) => {
      return lang.property === property;
    });
    commit("setLanguage", language.property);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

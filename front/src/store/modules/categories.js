import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  categories: [],
  category: null,
};

const getters = {
  categories: (state) => state.categories,
  category: (state) => state.category,
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
  setCategory: (state, category) => (state.category = category),
};

const actions = {
  async fetchCategories({ commit }) {
    const response = await axios.get(`${apiUrl}/categories`);
    commit("setCategories", response.data);
  },
  async fetchCategory({ commit }, id) {
    const response = await axios.get(`${apiUrl}/categories/${id}`);
    commit("setCategory", response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

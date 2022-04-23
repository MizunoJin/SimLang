import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  questions: [],
};

const getters = {
  questions: (state) => state.questions,
};

const mutations = {
  setQuestions: (state, questions) => (state.questions = questions),
};

const actions = {
  async fetchQuestions({ commit }) {
    const response = await axios.get(`${apiUrl}/questions`);
    commit("setQuestions", response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

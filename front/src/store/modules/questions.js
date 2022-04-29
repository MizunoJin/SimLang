import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  questions: [],
  question: localStorage.question || null,
};

const getters = {
  questions: (state) => state.questions,
  question: (state) => state.question,
};

const mutations = {
  setQuestions: (state, questions) => (state.questions = questions),
  setQuestion: (state, question) => (state.question = question),
};

const actions = {
  async fetchQuestions({ commit }) {
    const response = await axios.get(`${apiUrl}/questions`);
    commit("setQuestions", response.data);
  },
  async fetchQuestion({ commit }, id) {
    const response = await axios.get(`${apiUrl}/questions/${id}`);
    commit("setQuestion", response.data);
  },
  async setQuestion({ commit }, question) {
    localStorage.setItem("question", question);
    commit("setQuestion", question);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const state = {
  auth_token: null,
  user: {
    id: null,
    username: null,
    email: null,
  },
};

const getters = {
  getAuthToken(state) {
    return state.auth_token;
  },
  getUserEmail(state) {
    return state.user?.email;
  },
  getUserID(state) {
    return state.user?.id;
  },
  getUserName(state) {
    return state.user?.username;
  },
  isLoggedIn(state) {
    return !!state.auth_token;
  },
};

const mutations = {
  setUserInfo(state, payload) {
    state.user = payload.data.user;
    state.auth_token = payload.headers.authorization;
    axios.defaults.headers.common["Authorization"] =
      payload.headers.authorization;
    localStorage.setItem("auth_token", payload.headers.authorization);
  },
  setUserInfoFromToken(state, payload) {
    state.auth_token = payload.auth_token;
  },
  resetUserInfo(state) {
    state.user = {
      id: null,
      username: null,
      email: null,
    };
    state.auth_token = null;
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common["Authorization"] = null;
  },
};

const actions = {
  registerUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async loginUser({ commit }, payload) {
    const response = await axios.post(`${BASE_URL}users/sign_in`, payload);
    if (!response.status === 200) {
      const error = new Error(
        response.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    commit("setUserInfo", response);
  },
  async logoutUser({ commit }) {
    const config = {
      headers: {
        authorization: state.auth_token,
      },
    };
    const response = await axios.delete(`${BASE_URL}users/sign_out`, config);

    if (!response.status === 200) {
      const error = new Error(
        response.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    commit("resetUserInfo");
  },
  loginUserWithToken({ commit }) {
    const auth_token = localStorage.getItem("auth_token");
    commit("setUserInfoFromToken", {
      auth_token,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

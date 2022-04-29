import Vue from "vue";
import Vuex from "vuex";
import questions from "./modules/questions";
import categories from "./modules/categories";
import language from "./modules/language";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { questions, categories, language },
});

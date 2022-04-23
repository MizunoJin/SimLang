import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/HomeView.vue");
    },
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/questions",
    name: "questions",
    component: function () {
      return import("../views/QuestionList.vue");
    },
  },
  {
    path: "/question/:id",
    name: "question",
    component: function () {
      return import("../views/QuestionView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

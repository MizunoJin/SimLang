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
    path: "/login",
    name: "login",
    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/categories/:id",
    name: "category",
    component: function () {
      return import("../views/CategoryView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

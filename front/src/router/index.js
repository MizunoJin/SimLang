import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/HomeView.vue");
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: function () {
      return import("../views/LoginView.vue");
    },
    meta: { requiresAuth: false },
  },
  {
    path: "/categories/:id",
    name: "category",
    component: function () {
      return import("../views/CategoryView.vue");
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: "answer",
        name: "answer",
        component: function () {
          return import("../views/AnswerView.vue");
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.getters.isLoggedIn
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;

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
    meta: { requiresUnauth: true },
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
store.dispatch("loginUserWithToken").then(() => {
  router.beforeEach((to, _, next) => {
    console.log(store.getters.isLoggedIn);
    if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
      next({ name: "login" });
    } else if (to.meta.requiresUnauth && store.getters.isLoggedIn) {
      next({ name: "home" });
    } else {
      next();
    }
  });
});

export default router;

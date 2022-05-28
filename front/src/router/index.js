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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// メタフィールドrequiresAuthが要認証trueなら認証フラグ判定
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // requiresAuthがtrueなら評価
    if (!store.getters.isLoggedIn) {
      // 未ログインならログインページへ
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

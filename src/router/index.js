import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import User from "../components/User.vue";
import store from "../store";
import { IS_USER_AUTHENTICATED } from "../store/storeconstants";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters[`auth/${IS_USER_AUTHENTICATED}`]) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

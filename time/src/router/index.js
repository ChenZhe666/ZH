import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("../layout"),
    children: [
      {
        path: "/sys/users",
        name: "sys/users",
        component: () => import("../views/sys/users.vue"),
      },
      {
        path: "/sys/roles",
        name: "sys/roles",
        component: () => import("../views/sys/roles.vue"),
      },
      {
        path: "/sys/menus",
        name: "sys/menus",
        component: () => import("../views/sys/menus.vue"),
      },
      {
        path: "/ketsu",
        name: "ketsu",
        component: () => import("../views/ketsu.vue"),
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
  // 访问的路径在白名单
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;

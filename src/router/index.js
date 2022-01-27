import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WishList from "../views/WishList.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lista-de-desejos",
    name: "WishList",
    component: WishList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

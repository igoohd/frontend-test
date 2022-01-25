import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import WishList from "../views/WishList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
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

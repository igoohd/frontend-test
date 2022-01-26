import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredProducts: [],
    productList: [],
    wishList: [],
  },
  mutations: {
    addProductToWishList(state, id) {
      const product = state.productList.find((product) => product.id === id);
      state.wishList.push(product);
    },
    removeProductFromWishList(state, id) {
      const index = state.wishList.indexOf(id);
      state.wishList.splice(index, 1);
    },
    setFilteredProducts(state, payload) {
      state.filteredProducts = payload;
    },
    setProductList(state, payload) {
      state.productList = payload;
    },
  },
  actions: {},
  modules: {},
});

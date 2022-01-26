import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filteredProducts: [],
    productList: [],
    wishList: []
  },
  mutations: {
    setFilteredProducts(state, payload) {
      state.filteredProducts = payload
    },
    setProductList(state, payload) {
      state.productList = payload
    }
  },
  actions: {},
  modules: {},
});

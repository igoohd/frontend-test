import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import Vuex from 'vuex'
import store from "@/store/index.js"

const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex)

describe("PageHeader.vue", () => {

  const productListMock = [
    { id: 0, sku: 8552515751438644, title: "Nike Corinthians I", description: "14/15 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" },
    { id: 1, sku: 8552745489408644, title: "Camisa Nike Corinthians II", description: "14/16 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" }
  ]

  it("should define vue instance when rendered", () => {
    store.commit('setProductList', productListMock)
    store.commit('addProductToWishList', productListMock[0].id)
    const wrapper = shallowMount(ProductList, {
      propsData: { isWishList: true },
      store
    });
    expect(wrapper.vm).toBeDefined()
  });

  describe("Methods", () => {
    it('GetWishList should call setProductList', () => {
      const wrapper = shallowMount(ProductList, {
        propsData: { isWishList: true },
        store
      });
      const spyGetWishList = jest.spyOn(wrapper.vm, 'setProductList')
      wrapper.vm.getProductList()
      wrapper.vm.getWishList()
      expect(spyGetWishList).toHaveBeenCalled()
    })
  });
});

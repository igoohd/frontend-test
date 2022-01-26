import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";
import Vuex from 'vuex'
import index from "@/store/index.js"

const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex)

const store = index

describe("ProductCard.vue", () => {
  it("should define vue instance when rendered", () => {
    const wrapper = shallowMount(ProductCard);
    expect(wrapper.vm).toBeDefined();
  });

  describe('Methods', () => {
    it("handleWishList should add product to wish list if buttonClicked equals true", () => {
      const wrapper = shallowMount(ProductCard, {
        sync: false,
        propsData: { id: 0 },
        store
      });
      const spyAddProductToWishList = jest.spyOn(wrapper.vm, 'addProductToWishList')
      wrapper.vm.handleWishList(true)
      expect(spyAddProductToWishList).toHaveBeenCalled()
    });

    it("handleWishList should remove product from wish list if buttonClicked equals false", () => {
      const wrapper = shallowMount(ProductCard, {
        sync: false,
        propsData: { id: 0 },
        store
      });
      const spyRemoveProductFromWishList = jest.spyOn(wrapper.vm, 'removeProductFromWishList')
      wrapper.vm.handleWishList(false)
      expect(spyRemoveProductFromWishList).toHaveBeenCalled()
    });
  })

  describe('Computed Properties', () => {
    it("formattedValue should return currencyFormat and price as string", () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: {
          currencyFormat: 'R$',
          price: 290.5
        }
      });
      expect(wrapper.vm.formattedValue).toBe('R$ 290.5');
    });
  })
});

import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from 'vue-router'
import PageHeader from "@/components/PageHeader.vue";
import { routes } from "@/router/index.js"
import Vuex from 'vuex'
import store from '@/store/index.js'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter({
  routes
})

const mockMapsApiReturn = {
  data: {
    results: [
      {
        address_components: [
          {
            long_name: "337",
            short_name: "337",
            types: [
              "street_number"
            ]
          },
          {
            long_name: "Avenida Cinco",
            short_name: "Av. Cinco",
            types: [
              "route"
            ]
          },
          {
            long_name: "Conjunto Agua Branca",
            short_name: "Conj. Agua Branca",
            types: [
              "political",
              "sublocality",
              "sublocality_level_1"
            ]
          },
          {
            long_name: "Contagem",
            short_name: "Contagem",
            types: [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            long_name: "Minas Gerais",
            short_name: "MG",
            types: [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            long_name: "Brasil",
            short_name: "BR",
            types: [
              "country",
              "political"
            ]
          }
        ],
      },
    ],
    status: 'OK'
  }
}

jest.mock("axios", () => ({
  get: () => Promise.resolve({ mockMapsApiReturn })
}));

describe("PageHeader.vue", () => {
  const productListMock = [
    { id: 0, sku: 8552515751438644, title: "Nike Corinthians I", description: "14/15 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" },
    { id: 1, sku: 8552745489408644, title: "Camisa Nike Corinthians II", description: "14/16 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" }
  ]

  const mockGeolocation = {
    getCurrentPosition: jest.fn()
      .mockImplementation((success) => Promise.resolve(success({
        coords: {
          latitude: 10,
          longitude: 10
        }
      }))),
  };
  global.navigator.geolocation = mockGeolocation;

  it("should define vue instance when rendered", () => {
    const wrapper = shallowMount(PageHeader);
    expect(wrapper.vm).toBeDefined();
  });

  describe("Methods", () => {
    it("should open window with phone of central", () => {
      window.open = jest.fn();
      const wrapper = shallowMount(PageHeader);
      wrapper.vm.callPhoneCentral();
      expect(window.open).toHaveBeenCalledWith("tel:3125574039");
    });

    it("getUserLocation open window with phone of central", () => {
      window.open = jest.fn();
      const wrapper = shallowMount(PageHeader);
      wrapper.vm.callPhoneCentral();
      expect(window.open).toHaveBeenCalledWith("tel:3125574039");
    });

    it("searchProduct should set searchedProducts with match cases", () => {
      const mockedEvent = { target: { value: 'Camisa' } }
      const wrapper = shallowMount(PageHeader, {
        store
      });
      store.commit('setProductList', productListMock)
      wrapper.vm.searchProduct(mockedEvent);
      expect(wrapper.vm.searchedProducts).toStrictEqual([productListMock[1]]);
    });
  });
});

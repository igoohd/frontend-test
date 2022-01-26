import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store/index.js'

describe('Vuex Store (index.js)', () => {
    describe('Mutations', () => {
        const productListMock = [
            { id: 0, sku: 8552515751438644, title: "Camisa Nike Corinthians I", description: "14/15 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" },
            { id: 1, sku: 8552745489408644, title: "Camisa Nike Corinthians II", description: "14/16 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" }
        ]
        const productMock = { id: 0, sku: 8552515751438644, title: "Camisa Nike Corinthians I", description: "14/15 s/nº", availableSizes: { S: 100, G: 5, GG: 120, GGG: 12 }, style: "Branco com listras pretas", price: 229.9, installments: 9, currencyId: "BRL", currencyFormat: "R$", isFreeShipping: true, image: "https://via.placeholder.com/300x300" }

        const localVue = createLocalVue()
        localVue.use(Vuex)

        const resetState = () => {
            return {
                filteredProducts: [],
                productList: [],
                wishList: [],
            }
        }

        it('setProductList should set a list of products in state  if state productList', () => {
            store.commit('setProductList', productListMock)

            expect(store.state.productList).toBe(productListMock)
        })

        it('setFilteredProducts should set a list of filtered products in state of filteredProducts', () => {
            store.commit('setFilteredProducts', productListMock)

            expect(store.state.filteredProducts).toBe(productListMock)
        })

        it('addProductToWishList should add a product in state of wishList', () => {
            store.commit('addProductToWishList', productMock.id)

            expect(store.state.wishList).toStrictEqual([productListMock[0]])
        })

        it('removeProductFromWishList should remove a product in state of wishList', () => {
            store.commit('removeProductFromWishList', productMock.id)

            expect(store.state.wishList).toStrictEqual([])
        })
    })
})
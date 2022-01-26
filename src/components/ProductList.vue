<template>
  <div class="product-list">
    <ProductCard
      v-for="product in productListResult"
      :key="product.id"
      :id="product.id"
      :currency-format="product.currencyFormat"
      :image-src="product.image"
      :name="product.title"
      :price="product.price"
      :is-wish-list="isWishList"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ProductList",

  components: { ProductCard },

  props: {
    isWishList: Boolean,
  },

  created() {
    this.isWishList ? this.getWishList() : this.getProductList();
  },

  methods: {
    ...mapMutations(["setProductList"]),

    async getProductList() {
      try {
        var { data } = await axios.get(
          "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
        );
        this.setProductList(data.products);
      } catch (error) {
        console.log(error.message);
        this.setProductList(undefined);
      }
    },

    getWishList() {
      this.setProductList(this.wishList);
    },
  },

  computed: {
    ...mapState(["filteredProducts", "productList", "wishList"]),

    productListResult() {
      return this.filteredProducts == ""
        ? this.productList
        : this.filteredProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>

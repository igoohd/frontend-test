<template>
  <div class="product-card">
    <img class="image" :src="imageSrc" alt="" />
    <h1 class="title">{{ name }}</h1>
    <p class="description">{{ formattedValue }}</p>
    <WishListButton @buttonClick="handleWishList" :is-wish-list="isWishList" />
  </div>
</template>

<script>
import WishListButton from "@/components/WishListButton";
import { mapMutations } from "vuex";

export default {
  components: { WishListButton },
  props: {
    currencyFormat: String,
    id: Number,
    imageSrc: String,
    isWishList: Boolean,
    name: String,
    price: Number,
  },

  methods: {
    ...mapMutations(["addProductToWishList", "removeProductFromWishList"]),
    handleWishList(buttonClicked) {
      buttonClicked
        ? this.addProductToWishList(this.id)
        : this.removeProductFromWishList(this.id);
    },
  },

  computed: {
    formattedValue() {
      return (this.currencyFormat + " " + this.price).toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  max-width: 250px;
  border: 1px solid $gray-100;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 2rem;
  position: relative;

  > .image {
    padding: 1rem;
    width: 100%;
  }

  > .title {
    font-size: 1rem;
    font-weight: bold;
    height: 50px;
  }

  > .description {
    font-weight: bold;
    color: $yellow;
  }
}
</style>

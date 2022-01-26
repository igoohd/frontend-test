<template>
  <div class="product-card">
    <img class="image" :src="imageSrc" alt="" />
    <h1 class="title">{{ name }}</h1>
    <p class="description">{{ formattedValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    currencyFormat: String,
    imageSrc: String,
    name: String,
    price: Number,
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
    margin-bottom: 3rem;
  }

  > .description {
    font-weight: bold;
    color: $yellow;
    margin-bottom: 3rem;
  }
}
</style>
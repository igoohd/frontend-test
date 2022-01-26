<template>
  <div class="wish-page">
    <PageHeader />
    <h1 class="title">Home > Lista de Desejos</h1>
    <ProductList :is-wish-list="true" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ProductList from "@/components/ProductList";

export default {
  name: "WishList",

  components: {
    PageHeader,
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.wish-page {
  > .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-top: 2rem;
    text-align: left;
  }
}
</style>

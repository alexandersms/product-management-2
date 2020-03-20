<template>
  <div class="row">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard
  }
};
</script>

<style></style>

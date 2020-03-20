<template>
  <div class="row mt-5">
    <ProductCard
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style></style>

<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4 mt-5">
      <img class="w-100" :src="product.image" :alt="product.name" />
    </div>
    <div class="col-8 mt-5">
      <h2>{{ product.name }}</h2>
      <h3>{{ product.price }}&euro;</h3>

      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-danger">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
      <p class="mt-4">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  }
};
</script>

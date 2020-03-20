<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
    <div class="card mt-4">
      <img class="card-img" :src="product.image" :alt="product.name" />

      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product._id } }">{{
            product.name
          }}</router-link>
        </h4>
        <p class="card-text">
          {{ product.description }}
        </p>

        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">{{ product.price }}&euro;</h5>
          </div>
          <button class="btn btn-danger mt-3">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"]
};
</script>

<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
    <div class="card mt-2">
      <img
        class="card-img"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
        alt="Vans"
      />

      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: 23 } }"
            >Vans Sk8-Hi MTE Shoes</router-link
          >
        </h4>
        <p class="card-text">
          The Vans All-Weather MTE Collection features footwear and apparel
          designed to withstand the elements whilst still looking cool.
        </p>

        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">23&euro;</h5>
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
  name: "ProductCard"
};
</script>

<style scoped></style>

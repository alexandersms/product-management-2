<template>
  <div class="row mt-5">
    <div class="col-4">
      <img
        class="w-100"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
        alt="Vans"
      />
    </div>
    <div class="col-8">
      <h1>Product title</h1>
      <h3>23&euro;</h3>

      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-danger">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        alias? Sequi repudiandae laboriosam quas adipisci ab delectus, quod
        provident cumque, sint nostrum eius fuga, nobis asperiores eveniet dicta
        eos consectetur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style scoped></style>

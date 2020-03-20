<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-secondary">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              0 Cart
            </button>
            <div @click="$event.stopPropagation()">
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";
export default {
  name: "AppHeader",
  components: {
    MiniCart
  }
};
</script>

<style scoped></style>

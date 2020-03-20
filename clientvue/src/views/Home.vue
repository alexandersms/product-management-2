<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import productServices from "../services/productServices";

export default {
  name: "Home",
  components: {
    ProductList
  },
  mounted() {
    productServices
      .getProduct()
      .then(res => {
        console.log("*** SUCCESS ***");
        console.log(res.data);
      })
      .catch(error => {
        console.log("**** ERROR ****");
        console.log(error);
      });
  }
};
</script>

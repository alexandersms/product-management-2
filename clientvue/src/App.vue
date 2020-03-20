<template>
  <div id="app">
    <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
</style>

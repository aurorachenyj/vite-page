<script>
import navbarComponent from "./components/navbarComponent.vue";
import cartComponent from "./components/cartComponent.vue";
import onlineClassCard from "./components/onlineClassCard.vue";

export default {
  components: { navbarComponent, cartComponent, onlineClassCard },
};
</script>

<template>
  <div class="container">
    <navbarComponent></navbarComponent>
    <cartComponent></cartComponent>
    <onlineClassCard></onlineClassCard>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
/* 樣式客製 */
.table-img {
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1"> LearnFund 募課趣</span>
      <button class="btn btn-outline-secondary position-relative">
        購物車
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ cartList.cartsData.length }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
import cartStore from "../stores/cartStore.js";
// const { mapState } = Pinia;
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
};
</script>

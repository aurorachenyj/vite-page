<template>
  <div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="item in sortClassProducts" :key="item.id">
      <div class="card">
        <img :src="item.imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            課程引言課程引言課程引言課程引言課程引言課程引言課程引言課程引言
          </p>
          <span class="float-start">學生 11 人</span>
          <span class="float-end fs-3 fw-bold text-danger"
            >NT$ {{ item.price }}
          </span>
          <a
            @click.prevent="addToCart(item.id)"
            href="#"
            class="btn btn-outline-secondary w-100 my-2"
            >加入購物車 </a
          ><a href="#" class="btn btn-outline-secondary w-100 my-2">先收藏 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 把存放商品資料的檔案匯入進來
import classStore from "../stores/classStore.js";
import cartStore from "../stores/cartStore.js";

// 把 可取得多個資料狀態的方法 mapState  從pinia中取出
// const { mapState, mapActions } = Pinia;
import { mapState, mapActions } from "Pinia";

export default {
  data() {
    return {};
  },

  // 因為這裡只有要取用資料(不會去修改)所以用computed就好
  computed: {
    // 使用展開運算子mapState( 資料匯入的名稱 , [ store檔案裡的getters東東都寫在這，因為不只一個，所以使用陣列包起來 ]   )
    ...mapState(classStore, ["sortClassProducts"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
  },
};
</script>

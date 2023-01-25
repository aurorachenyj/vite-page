<template>
  <div class="bg-light my-4 p-4">
    <div v-if="cartList.cartsData.length === 0">購物車尚無品項</div>

    <table class="table" v-else>
      <thead>
        <tr>
          <td></td>
          <td>課程名稱</td>
          <td></td>
          <td>課程狀態</td>
          <td>數量</td>
          <td class="text-end">價格</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cartList.cartsData"
          :key="item.id"
          class="align-middle"
        >
          <td>
            <a @click.prevent="delProduct(item.id)" href="#" class="text-dark"
              >X</a
            >
          </td>
          <td>{{ item.productItem.title }}</td>
          <td>
            <img class="table-img" :src="item.productItem.imageUrl" alt="" />
          </td>
          <td>已上線</td>
          <td>
            1
            <select
              :value="item.qty"
              @change="(evt) => setCartQty(item.productId, evt)"
            >
              <option v-for="num in 20" :key="num" :value="num">
                {{ num }}
              </option>
            </select>
          </td>
          <td class="text-end">NT$ {{ item.subTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td class="text-end" colspan="5">總金額 NT$ {{ cartList.total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
// const { mapState, mapActions } = Pinia;
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["delProduct", "setCartQty"]),
  },
};
</script>

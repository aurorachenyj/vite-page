// const { defineStore } = Pinia;
import { defineStore } from "Pinia";

export default defineStore("classStore", {
  // vue的寫法  data  methods  computed
  // pinia寫法 state  actions   getters

  // 把資料寫在state裡
  state: () => ({
    products: [
      {
        id: 1,
        title: "多色餅乾",
        imageUrl:
          "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 80,
      },
      {
        id: 2,
        title: "綠色馬卡龍",
        imageUrl:
          "https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80",
        price: 120,
      },
      {
        id: 3,
        title: "甜蜜左擁右抱",
        imageUrl:
          "https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 200,
      },
      {
        id: 4,
        title: "巧克力心連心",
        imageUrl:
          "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 160,
      },
      {
        id: 5,
        title: "粉係馬卡龍",
        imageUrl:
          "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 120,
      },
    ],
  }),

  // 若要把資料拿給元件做使用，可寫在getters裡面
  getters: {
    // getters裡的函式若要使用state裡的資料，可在小括號內用 {解構} 的方式取得
    sortClassProducts: ({ products }) => {
      return products.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
});

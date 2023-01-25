// const { defineStore } = Pinia;
import { defineStore } from "Pinia";
// 把classStore 的檔案匯入進來
import classStore from "./classStore.js";

export default defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      console.log(productId, qty);
      // console.log(this.cart.productId);

      // 設一個currentCart變數，用來找尋已在購物車的品項
      const currentCart = this.cart.find((item) => {
        return item.productId === productId;
      });

      // 設判斷，若當前的商品已在購物車內，則把找出的currentCart商品，數字+1，若無則新增品項到購物車

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    delProduct(id) {
      console.log(id);
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    setCartQty(id, event) {
      console.log(id);
      console.log(event.target.value); // 可以在這裡拿到數量的值(是字串要注意)
      const currentItem = this.cart.find((item) => {
        return item.productId === id;
      });
      // console.log(currentItem);
      currentItem.qty = parseInt(event.target.value);
      // console.log(this.cart);
    },
  },

  getters: {
    // 購物車需要的資訊有
    // 1.產品詳細內容(目前這state只有productId，要和匯入進來的 classStore 的商品資訊做整合 )  2. 小計 3.總金額
    cartList: ({ cart }) => {
      // store取得另個store 裡的資料如下，直接執行函式，並用解構的方式取得
      const { products } = classStore();
      // console.log(products); // 確認有拿到值

      // 因為是箭頭函式所以想拿原state的資料，要先在25行(函式放參數的地方)使用解構把值拿進來
      console.log(cart);

      // 匹配productId 和 classStore 的商品資訊(cart 和 products 跑雙迴圈 把相同id的產品資訊拿出來)
      const cartsData = cart.map((item) => {
        const productItem = products.find(
          (product) => product.id === item.productId
        );
        // console.log(productItem); //相同id的產品

        // 需要的資料都整理好後，就可以return出去(整包會放在cartsData裡面)
        return {
          ...item,
          productItem,
          subTotal: productItem.price * item.qty,
        };
      });
      // console.log(cartsData); // 確定資料沒問題

      //  使用reduce 計算 total 的值
      const total = cartsData.reduce((a, b) => {
        return a + b.subTotal;
      }, 0);
      // console.log(total);

      // 產品品項和總價整理好之後就可把值傳出去
      return {
        cartsData, //: [], // cartsData會是陣列包物件的列表
        total,
      };
    },
  },
});

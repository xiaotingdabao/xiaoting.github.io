<template>
  <div>
    <nav class="cart-head">
      <label></label>
      <label class="center">购物车</label>
      <label class="right" sap-modid="3" sa-data="{'eleid':'771003013'}">编辑</label>
    </nav>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
// import Cart from "../asserts/cart.css";
export default {};
</script>
<style lang="scss">
.cart-head {
  // position: relative;
  // top: 0;
  // left: 0;
  height: 1.76rem;
  line-height: 1.76rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 0.48rem;
  label {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1;
    -moz-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
  }
  .center {
    font-size: 0.68rem;
    color: #222;
    text-align: center;
  }
  .right {
    font-size: 0.56rem;
    color: #37f;
    text-align: right;
  }
}
</style>
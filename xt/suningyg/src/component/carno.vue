<template>
  <div class="body">
    <van-notice-bar :scrollable="false">
      <p>登陆后同步电脑与手机购物车的商品</p>
      <!-- <a href="###">去登录</a> -->
      <router-link to="/mine">去登录</router-link>
    </van-notice-bar>
    <div class="cart-content-empty">
      <div class="empty-cart">
        <img class="img" src="//oss.suning.com/vss/activity/wximg/cart/sn-cart-empty.png" alt />
      </div>
      <span class="empty-cart-tip">购物车还是空的，快来挑选好货吧</span>
      <div class="lead">
        <!-- <a class="lead-click" href="//m.suning.com">去逛逛</a> -->
        <router-link class="lead-click" to="/roblist">去逛逛</router-link>
      </div>
    </div>
    <div class="reach-bottom"></div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import router from "../routers/index";
import { NoticeBar } from "vant";
import "../asserts/cart.css";

Vue.use(NoticeBar);
export default {};
</script>
<style lang="scss">
.body {
  padding: 0.48rem;
}
.van-notice-bar {
  background: #ffe37e;
  height: 1.2rem;
  line-height: 0.9rem;
  font-size: 0.48rem;
  color: #222;
  padding: 0.2rem 0.48rem;
  margin-bottom: 0.2rem;
  border-radius: 0.24rem;
  p {
    float: left;
  }
  a {
    float: right;
    background: #222;
    -webkit-border-radius: 0.12rem;
    -moz-border-radius: 0.12rem;
    border-radius: 0.12rem;
    display: block;
    color: #ffe37e;
    padding: 0 0.08rem;
  }
}
.van-notice-bar__content {
  position: relative;
}
</style>
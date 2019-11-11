<template>
  <div
    class="sn-nav sn-block sn-nav-list"
    style="height:2.2rem;z-index:100;position:fixed;top:0;left:0;"
  >
    <div class="sn-nav-img"></div>
    <div class="sn-nav-back1">
      <router-link to="/related" name="wapfly_none_back_back" class="sn-iconbtn">返回</router-link>
    </div>
    <div class="sn-nav-inp wbox">
      <a name="wapsssry_none_sdqh_sdqh" href="//m.suning.com/search.html" class="sn-search-iconbtn"></a>
      <a href="//m.suning.com/search.html" class="search-url wbox-flex" id="categrory_id">搜索商品或店铺</a>
    </div>
  </div>
</template>
<script>
import "weui";
import "../asserts/index.css";
import router from "../routers/index.js";
export default {};
</script>
<style>
.sn-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
/* .sn-block {
  position: relative;
} */
.sn-nav-back1 {
  position: absolute;
  left: 0.1rem;
  top: 0.6rem;
  border: solid #353d44;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(-45deg);
  width: 0.48rem;
  height: 0.48rem;
}
.sn-nav-list .sn-nav-inp {
  position: absolute;
  top: 0.28rem;
  left: 1.6rem;
  width: 86%;
  height: 1.2rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.sn-nav-back1 a {
  width: 0.48rem;
  height: 0.48rem;
  text-indent: -100rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  display: block;
}
.sn-nav-list .sn-nav-inp .sn-search-iconbtn {
  display: block;
  margin: 0.36rem 0.3rem;
  width: 0.48rem;
  height: 0.48rem;
  /* background: url(images/search-icon3.png) no-repeat; */
  background-size: 100%;
}
.sn-nav-list .search-url {
  display: block;
  line-height: 1.16rem;
  color: #cacaca;
  font-size: 0.52rem;
  overflow: hidden;
}
.sn-nav-back:before {
  position: absolute;
  top: 0.6rem;
  left: 0;
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  border: none;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(-45deg);
}
</style>

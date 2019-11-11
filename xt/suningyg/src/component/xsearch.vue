<template>
  <div>
    <div class="search-nav">
      <div class="nav-back">
        <router-link to="/related"></router-link>
      </div>
      <van-search
        v-model="value"
        placeholder="请输入您想找的商品"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="log">
      <div class="title">热门搜索</div>
      <van-row gutter="20">
        <van-col span="8">手机</van-col>
        <van-col span="8" style="color:#f60;">格力空调钜惠</van-col>
        <van-col span="8" style="color:#f60;">半价买电视</van-col>
      </van-row>
      <van-row gutter="20">
        <van-col span="8">奶粉</van-col>
        <van-col span="8">SUPER DAY</van-col>
        <van-col span="8" style="color:#f60;">西门子洗衣机</van-col>
      </van-row>
      <van-row gutter="20">
        <van-col span="8" style="color:#f60;">苏泊尔品牌日</van-col>
        <van-col span="8">电视</van-col>
        <van-col span="8">洗衣机</van-col>
      </van-row>
      <van-row gutter="20">
        <van-col span="8">笔记本</van-col>
        <van-col span="8">茅台</van-col>
        <van-col span="8">热水器</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import "vant/lib/index.css";
import { Row, Col } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(Row).use(Col);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>
<style lang="scss">
.van-field__control {
  font-size: 0.52rem;
}
.log {
  padding: 0.8rem 0.56rem;
  margin-top: 38px;
  .title {
    font-size: 0.6rem;
    position: relative;
    height: 0.96rem;
    line-height: 0.96rem;
    color: #999;
  }
  .ad {
    color: #f60;
  }
  .van-col--8 {
    width: 30.5%;
    height: 1.2rem;
    background: #f2f2f2;
    font-size: 0.52rem;
    line-height: 1.2rem;
    border-radius: 4px;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 4px;
  }
  .van-col {
    color: #333;
    text-align: center;
  }
}
.van-search__content {
  position: absolute;
  top: 0.28rem;
  left: 1.6rem;
  width: 75%;
  height: 1.2rem;
  background: #eee;
  border-radius: 4px;
  line-height: 1.76rem;
  font-size: 0.6rem;
}
.van-search {
  padding: 0;
}
.van-field__left-icon .van-icon {
  font-size: 12px;
}
.van-icon-search {
  display: block;
  // margin: 0.36rem 0.3rem;
  width: 0.18rem;
  height: 0.68rem;
  background: url(https://res.suning.cn/project/search/wap/search/style/search/images/search-icon3.png)
    no-repeat;
  background-size: 100%;
}
.van-icon-search:before {
  content: "";
}
// .van-cell__value{

// }
.search-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 98;
  background: #fff;
  height: 1.76rem;
  line-height: 1.76rem;
  font-size: 0.6rem;
  box-shadow: 0 1px 1px #dcdcdc;
  .nav-back {
    position: absolute;
    left: 0.1rem;
    top: 0;
    width: 0.48rem;
    height: 1.5rem;
    border: 0;
    -webkit-transform: none;
    transform: none;
    margin: 0 0.56rem;
    line-height: 1.76rem;
    font-size: 0.6rem;
    a {
      width: 1.5rem;
      height: 1.5rem;
      text-indent: -100rem;
      overflow: hidden;
      margin-left: -0.6rem;
      position: absolute;
      top: 0;
      display: block;
    }
    a:after {
      position: absolute;
      top: -6px;
      right: -8px;
      bottom: -6px;
      left: -8px;
      content: " ";
    }
  }
  .nav-back:before {
    content: "";
    position: absolute;
    top: 0.6rem;
    left: 0;
    display: inline-block;
    width: 0.48rem;
    height: 0.48rem;
    border: solid #353d44;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
.van-search__action {
  color: #323233;
  font-size: 0.6rem;
  line-height: 34px;
  right: 8px;
  position: absolute;
  top: 1px;
}
</style>
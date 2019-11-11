<template>
  <van-tabbar class="v7-tab hor-view" style="z-index:1000" route>
    <van-tabbar-item to="/related" @click="act1">
      <img :src="ticon.active1?icon1.active:icon1.inactive" />
      <span style="color: #333;">猜你喜欢</span>
    </van-tabbar-item>
    <van-tabbar-item to="/classify" @click="act2">
      <img :src="ticon.active2?icon2.active:icon2.inactive" />
      <span style="color: #333;">分类</span>
    </van-tabbar-item>
    <van-tabbar-item to="/roblist" @click="act3">
      <img :src="ticon.active3?icon3.active:icon3.inactive" />
      <span style="color: #333;">必抢清单</span>
    </van-tabbar-item>
    <van-tabbar-item to="/shopcart" @click="act4">
      <img :src="ticon.active4?icon4.active:icon4.inactive" />
      <span style="color: #333;">购物车</span>
    </van-tabbar-item>
    <van-tabbar-item to="/mine" @click="act5">
      <img :src="ticon.active5?icon5.active:icon5.inactive" />
      <span style="color: #333;">我的易购</span>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue/dist/vue";
import { Tabbar, TabbarItem } from "vant";
import router from "../routers/index.js";
//引入状态管理
import storei from "../store/index";
import store from "../store/vuex";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      // active1: true,
      // active2: false,
      // active3: false,
      // active4: false,
      // active5: false,
      icon1: {
        active:
          "https://image2.suning.cn/uimg/cms/img/154518776962642834.png?from=mobile",
        inactive: "https://image.suning.cn/uimg/cms/img/157105696599538235.png"
      },
      icon2: {
        active:
          "https://image1.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile",
        inactive:
          "https://image1.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile"
      },
      icon3: {
        active: "https://image.suning.cn/uimg/cms/img/157105715273415124.png",
        inactive:
          "https://image3.suning.cn/uimg/cms/img/154518778584812163.png?from=mobile"
      },
      icon4: {
        active: "https://image.suning.cn/uimg/cms/img/157105763151658248.png",
        inactive:
          "https://image3.suning.cn/uimg/cms/img/154518779385872504.png?from=mobile"
      },
      icon5: {
        active:
          "https://image2.suning.cn/uimg/cms/img/154518780211077845.png?from=mobile",
        inactive:
          "https://image2.suning.cn/uimg/cms/img/154518780211077845.png?from=mobile"
      }
    };
  },
  computed: {
    ticon() {
      return this.$store.getters.getTicon;
    }
  },
  methods: {
    act1() {
      this.$store.dispatch("setTicon", {
        active1: true,
        active2: false,
        active3: false,
        active4: false,
        active5: false
      });
    },
    act2() {
      this.$store.dispatch("setTicon", {
        active1: false,
        active2: true,
        active3: false,
        active4: false,
        active5: false
      });
    },
    act3() {
      this.$store.dispatch("setTicon", {
        active1: false,
        active2: false,
        active3: true,
        active4: false,
        active5: false
      });
    },
    act4() {
      this.$store.dispatch("setTicon", {
        active1: false,
        active2: false,
        active3: false,
        active4: true,
        active5: false
      });
    },
    act5() {
      this.$store.dispatch("setTicon", {
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: true
      });
    }
  }
  //监听状态中的值变化
};
</script>
<style>
.van-tabbar-item {
  position: relative;
  display: block;
  padding: 0.2rem 0;
  width: 3rem;
  height: 2rem;
  background: #fff;
}
.van-tabbar-item .van-tabbar-item__text span {
  display: block;
  margin-top: 0.04rem;
  font-size: 0.4rem;
  line-height: 0.56rem;
  color: #333;
  text-align: center;
}
.van-tabbar-item .van-tabbar-item__text img {
  display: block;
  width: 1.12rem;
  height: 1.12rem;
  margin: 0 auto;
  background: 0;
}
</style>
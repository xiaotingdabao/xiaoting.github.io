<template>
  <div class="v7-banner">
    <img src="https://image2.suning.cn/uimg/cms/img/157260183105368724.png" class="banner-bg" />
    <div class="swiper-wrapper">
      <div class="swipe w" style="visibility: visible;">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index" style="float:left;">
            <img :src="image" />
            <!-- <img src="" alt=""> -->
          </van-swipe-item>
          <!-- <Lazy /> -->
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
// import Lazy from "./lazy.vue";

// Vue.use(Lazyload, options);
// Vue.use(Swipe).use(SwipeItem);
// Vue.component("Swipe", Swipe);
// Vue.component("SwipeItem", SwipeItem);
export default {
  data() {
    return {
      images: [
        "https://image3.suning.cn/uimg/cms/img/157262076050744856.jpg?format=_is_1242w_610h",
        "https://oss.suning.com/aps/aps_learning/iwogh/2019/11/01/18/iwoghBannerPicture/cc4ea19a97bc4c4286f4ee8bfb0b655b.png?format=_is_1242w_610h",
        "https://image2.suning.cn/uimg/cms/img/157260100138741557.jpg?format=_is_1242w_610h",
        "https://oss.suning.com/aps/aps_learning/iwogh/2019/11/01/16/iwoghBannerPicture/99884a6a9f374e75a6a1a82a12dc92d5.png?format=_is_1242w_610h",
        "https://oss.suning.com/aps/aps_learning/iwogh/2019/11/01/14/iwoghBannerPicture/9838534fa2fc4d1ebb902f15b716f87b.png?format=_is_1242w_610h",
        "https://oss.suning.com/aps/aps_learning/iwogh/2019/11/01/16/iwoghBannerPicture/1c76b4fae9ac4194ac9c93cbbb61461e.png?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157259559510804883.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157260892759071925.jpg?format=_is_1242w_610h"
      ]
    };
  },
  components: {
    // Lazy
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>
<style>
.van-swipe {
  height: 153px;
}
</style>
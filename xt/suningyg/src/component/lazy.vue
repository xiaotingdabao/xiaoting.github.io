<template>
  <div>
    <img v-for="(img,index) in imageList" v-lazy="img" :key="index" />
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
// options 为可选参数，无则不传
Vue.use(Lazyload);
export default {
  data() {
    return {
      imageList: [
        "https://image1.suning.cn/uimg/cms/img/157254904571303234.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157252388869178681.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157251415370031536.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157249524181861841.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157250242340828427.jpg?format=_is_1242w_610h",
        "https://oss.suning.com/aps/aps_learning/image/429081691/20191031/74b995d500d848689db7f61e35d8d265.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157252877897343877.jpg?format=_is_1242w_610h",
        "https://image.suning.cn/uimg/aps/material/157252776268961151.jpg?format=_is_1242w_610h"
      ]
    };
  }
};
</script>
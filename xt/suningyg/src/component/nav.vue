<template>
  <div class="weui-grids">
    <div class="huanh">
      <a href="javascript:;" class="weui-grid" v-for="(n,index) in content" :key="index">
        <div class="weui-grid__icon">
          <img :src="n.img" alt />
        </div>
        <p class="weui-grid__label" v-text="n.title"></p>
      </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import "weui";
export default {
  data() {
    return {
      content: [
        {
          title: "限时抢购",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165880722181116.png?format=_is_120w_120h.webp"
        },
        {
          title: "苏宁超市",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165889469283916.png?format=_is_120w_120h.webp"
        },
        {
          title: "苏宁拼购",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165891799364137.png?format=_is_120w_120h.webp"
        },
        {
          title: "爆款手机",
          img:
            "https://image2.suning.cn/uimg/cms/img/157165893790085815.png?format=_is_120w_120h.webp"
        },
        {
          title: "苏宁家电",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165895671653077.png?format=_is_120w_120h.webp"
        },
        {
          title: "免费兑好物",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165897779526702.png?format=_is_120w_120h.webp"
        },
        {
          title: "赚钱",
          img:
            "https://image3.suning.cn/uimg/cms/img/154708810364057852.png?format=_is_120w_120h.webp"
        },
        {
          title: "签到有礼",
          img:
            "https://image2.suning.cn/uimg/cms/img/157165906281444963.png?format=_is_120w_120h.webp"
        },
        {
          title: "领券中心",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165908511134313.png?format=_is_120w_120h.webp"
        },
        {
          title: "更多频道",
          img:
            "https://image3.suning.cn/uimg/cms/img/157165912004147386.png?format=_is_120w_120h.webp"
        }
      ]
    };
  }
};
// var imglist = document.querySelectorAll(
//   ".enter-list .enter-wrapper .fix li a img"
// );
// for (var i in imglist) {
//   console.log(
//     `{title:"${imglist[i].nextSibling.innerHTML}",img:"${imglist[i].currentSrc}"},`
//   );
// }
</script>
<style>
.weui-grids:before {
  border: none;
}
.weui-grid:before {
  border: none;
}
.weui-grid:after {
  border: none;
}
.weui-grid__icon {
  width: 36px;
  height: 34px;
}
.weui-grids {
  width: 30rem;
  height: 5.6rem;
  margin-top: 2rem;
  background: #fff;
}
.huanh {
  position: relative;
  float: left;
  width: 15rem;
  height: 5.68rem;
}
.weui-grids .weui-grid {
  float: left;
  width: 3rem;
  height: 2.84rem;
  text-align: center;
  padding: 0;
  border: none;
}
.weui-grids .weui-grid .weui-grid__icon img {
  display: block;
  width: 1.68rem;
  height: 1.68rem;
  margin: 0.48rem auto 0;
  background: 0;
}
.weui-grids .weui-grid .weui-grid__label {
  line-height: 0.56rem;
  width: 3rem;
  height: 0.56rem;
  overflow: hidden;
  font-size: 0.44rem;
  margin-top: 0.1rem;
  color: #666;
}
</style>

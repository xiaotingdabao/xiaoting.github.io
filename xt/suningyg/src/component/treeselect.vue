<template>
  <van-tree-select
    height="170vw"
    :items="items"
    :main-active-index.sync="activeIndex"
    @click="clicknav(index)"
    :class="['van-sidebar-item',{'van-tree-select__nav-item':liIndex}]"
  >
    <template slot="content" style="margin: 0 0 0 3.44rem;">
      <!-- <van-image v-if="activeIndex === 0"> -->
      <div class="con-box">
        <div class="channel-banner" id="banner100004307">
          <ul>
            <li>
              <a
                name="prolistPage_list_adpic_热门推荐-0101"
                href="https://cuxiao.m.suning.com/scms/s11d2byshc.html?adTypeCode=1137&amp;adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fs11d2byshc.js%3FpageCode%3Ds11d2byshc"
                class="class-banner"
              >
                <img src="//image.suning.cn/uimg/asbs/ad/1572613551885_app_list.png" />
              </a>
            </li>
          </ul>
          <div class="points"></div>
        </div>
        <div class="newRecommendList" firstid="100004307" secendids value="热门推荐-01"></div>
        <hgroup class="module-title class-title" showtype="1">
          <em>热门推荐</em>
        </hgroup>
        <div class="household-recommend">
          <ul>
            <li v-for="(n,index) in navli" :key="index">
              <a name="n.title" urlflag="0" href="###">
                <img :src="n.img" />
                <em v-text="n.title"></em>
              </a>
            </li>
          </ul>
        </div>
        <a name="wapfly_none_gg_one-gg01" href class="channel-enter" style="display:none">
          <img src="//res.suning.cn/project/search/wap/v4/list/images/enter_patternless.png" />
        </a>
      </div>
      <!-- </van-image> -->
      <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
    </template>
  </van-tree-select>
</template>
<script>
import Vue from "vue/dist/vue";
import { TreeSelect, Image } from "vant";

// Vue.use(TreeSelect);
export default {
  data() {
    return {
      activeIndex: 0,
      liIndex: 1,
      items: [
        { text: "热门推荐" },
        { text: "手机数码" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "厨卫大电" },
        { text: "生活家电" },
        { text: "食品酒水" },
        { text: "品质男装" },
        { text: "苏宁国际" },
        { text: "家居家纺" },
        { text: "运动户外" },
        { text: "居家生活" },
        { text: "珠宝首饰" },
        { text: "家装建材" },
        { text: "厨具水具" },
        { text: "二手优品" },
        { text: "苏宁生鲜" },
        { text: "奶粉尿裤" },
        { text: "中央空调" },
        { text: "智能数码" },
        { text: "钟表眼镜" },
        { text: "品质男鞋" },
        { text: "流行女装" },
        { text: "精品女鞋" },
        { text: "汽车生活" },
        { text: "人群偏爱" },
        { text: "美妆护肤" },
        { text: "个人护理" },
        { text: "童装玩具" },
        { text: "皮具箱包" },
        { text: "内衣配饰" },
        { text: "图书音像" },
        { text: "苏宁极物" },
        { text: "礼品乐器" },
        { text: "艺术陶瓷" },
        { text: "医药馆" },
        { text: "特色馆" },
        { text: "苏宁服务" },
        { text: "苏宁金融" },
        { text: "苏宁有房" },
        { text: "苏宁有房" }
      ],
      navli: [
        {
          title: "空调",
          img:
            "https://image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg"
        },
        {
          title: "电视",
          img: "https://image1.suning.cn/uimg/asbs/ad/1491712405935_pc_list.jpg"
        },
        {
          title: "洗衣机",
          img: "https://image2.suning.cn/uimg/asbs/ad/1493018450115_pc_list.jpg"
        },
        {
          title: "小biu",
          img:
            "https://image.suning.cn/uimg/asbs/ad/1564725998435_imgWap_tmndir.jpg"
        },
        {
          title: "破壁机",
          img:
            "https://image1.suning.cn/uimg/asbs/ad/1524896142621_app_wap_list.jpg"
        },
        {
          title: "生活家电",
          img:
            "https://image4.suning.cn/uimg/asbs/ad/1540517634070_imgApp_tmndir.jpg"
        },
        {
          title: "手机",
          img: "https://image2.suning.cn/uimg/cms/img/153684246313252041.png"
        },
        {
          title: "热水器",
          img:
            "https://image3.suning.cn/uimg/asbs/ad/1528960724022_imgApp_tmndir.png"
        },
        {
          title: "笔记本",
          img: "https://image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg"
        },
        {
          title: "手表",
          img:
            "https://image.suning.cn/uimg/asbs/ad/1568541017652_imgApp_tmndir.png"
        },
        {
          title: "羽绒服",
          img:
            "https://image4.suning.cn/uimg/asbs/ad/1572917425316_imgApp_tmndir.jpg"
        },
        {
          title: "奶粉",
          img: "https://image2.suning.cn/uimg/cms/img/154425254209357689.jpg"
        },
        {
          title: "白酒",
          img:
            "https://image2.suning.cn/uimg/asbs/ad/1566980852073_imgApp_tmndir.png"
        },
        {
          title: "运动卫衣",
          img:
            "https://image4.suning.cn/uimg/asbs/ad/1566957406181_imgApp_tmndir.jpg"
        },
        {
          title: "大闸蟹",
          img:
            "https://image1.suning.cn/uimg/asbs/ad/1569401972659_imgApp_tmndir.png"
        }
      ]
    };
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [Image.name]: Image
  },
  methods: {
    clicknav(index) {
      return (this.liIndex = !this.liIndex);
      // this.$children[index].select = !this.$children[index].select;
      // this.activeIndex = 1;
    }
  }
};
// var title = document.querySelectorAll('.sn-list-box .sn-list-nav ul li')
// for(var i in title){
// console.log(`{ text: "${title[i].innerHTML}" },`)
// }
// var img = document.querySelectorAll('.household-recommend ul li a img');
// for(var i in img){
// // console.log(img[i].nextSibling.nextSibling.innerHTML);
// // console.log(img[i].src);
// console.log(`{title:'${img[i].nextSibling.nextSibling.innerHTML}',img:'${img[i].src}',},`)
// }
</script>
<style>
/* .van-tree-select__content {
  margin-top: 1.76rem;
} */
.van-tree-select .van-sidebar {
  position: fixed;
  left: 0;
  top: 1.76rem;
  width: 3.48rem;
  height: calc(100vh - 1.76rem);
  overflow-y: auto;
  z-index: 50;
  background-color: #f4f4f4;
}
.van-tree-select .van-sidebar .van-sidebar-item {
  position: relative;
  float: left;
  width: 3.48rem;
  height: 1.88rem;
  line-height: 1.88rem;
  text-align: center;
  background: #f4f4f4;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  box-sizing: border-box;
  font-size: 0.52rem;
  color: #666;
}
.van-tree-select__nav-item {
  border-right-color: transparent;
  background: #fff;
  font-size: 0.56rem;
  color: #666;
}
.van-tree-select__content {
  box-sizing: border-box;
  margin: 1.76rem 0 0 2.44rem;
  padding: 0.4rem;
  overflow: auto;
}
.van-tree-select__content .van-image {
  width: 10.8rem;
}
.household-recommend {
  width: 10.8rem;
  overflow: hidden;
}
.household-recommend ul {
  width: 10.8rem;
  overflow: hidden;
  margin-top: -0.6rem;
}
.household-recommend ul li {
  float: left;
  width: 3.6rem;
  margin: 0.6rem 0 0 0;
}
.household-recommend ul li a {
  display: block;
}
.household-recommend ul li a img {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0.6rem 0.2rem 0.6rem;
  position: relative;
}
.household-recommend ul li a em {
  display: block;
  white-space: nowrap;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  font-weight: normal;
}
</style>

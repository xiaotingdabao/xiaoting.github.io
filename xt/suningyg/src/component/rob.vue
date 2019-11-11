<template>
  <div style="background: #f2f2f2;">
    <div class="sn-nav2 sn-block">
      <div class="sn-nav-back2">
        <router-link to="/related" class="sn-iconbtn">返回</router-link>
      </div>
      <div class="sn-nav-title of">必抢清单</div>
    </div>
    <van-tabbar v-model="active" style="position:absolute;top:36px;left:0;z-index:100">
      <van-tabbar-item style="background: #ff342d;">
        <img src="https://image.suning.cn/uimg/MZMS/show/155117928298268957.png?from=mobile" />
        <span>精选</span>
      </van-tabbar-item>
      <van-tabbar-item style="background: #ff342d;">
        <img src="https://image.suning.cn/uimg/MZMS/show/155117929720977273.png?from=mobile" />
        <span>家电</span>
      </van-tabbar-item>
      <van-tabbar-item style="background: #ff342d;">
        <img src="https://image.suning.cn/uimg/MZMS/show/151384323374513944.png?from=mobile" />
        <span>酷机</span>
      </van-tabbar-item>
      <van-tabbar-item style="background: #ff342d;">
        <img src="https://image.suning.cn/uimg/MZMS/show/151375579188137688.png?from=mobile" />
        <span>超市</span>
      </van-tabbar-item>
      <van-tabbar-item style="background: #ff342d;">
        <img src="https://image.suning.cn/uimg/MZMS/show/151375580058931338.png?from=mobile" />
        <span>穿搭</span>
      </van-tabbar-item>
    </van-tabbar>
    <div class="app-list pr">
      <div class="f34 line-clamp-2 bold">
        <span>周末一起嗨，游戏手柄灵活掌局面</span>
      </div>
      <ul class="pic-img bq on">
        <li v-for="(n,index) in roblist" :key="index" @click="chuc(n)">
          <!-- <a class="a-st" href="###"> -->
          <router-link to="/detail" class="a-st">
            <img data-src="done" class="opa1" :src="n.img" />
            <!-- </a> -->
          </router-link>
          <div class="pro-price1">
            <i class="acDec" style="border: none; height: 0.56rem;"></i>
            <i class="f24 bold rPrice" v-text="n.price"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      roblist: [
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/O6CNA0ByesQHww7GyGJP_w.jpg?format=400h_400w_4e_80q.webp",
          price: "¥15600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/H3pfmMl42feHvWjEZ-FRgg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥6699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/GcJ7CEZJN4-tSfudl7_KEw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥8999"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/H3pfmMl42feHvWjEZ-FRgg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥15600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/_k1z8hnewMkeO50mkI83aA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥17800"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/rBPtN_ZnDjaD_ohPiiaUSg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥14600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/tGcak4KS6NbWiFL052LqdQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥4199"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/fJsK_46eHae4GRV3VdsfXA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥1799"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/57EVb9kXGOlh81WL6AIY9g.jpg?format=400h_400w_4e_80q.webp",
          price: "¥2488"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/sDms1xwgLo-1iniWB9zpNw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/fypnnti1RfGF6b1Os88n7A.jpg?format=400h_400w_4e_80q.webp",
          price: "¥100"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/PTZzS10Docbb7MpdvWa3jw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥500"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/jAnKEIsWKjoW4T-VIyhqaA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥7699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/o6hBxA0aEM4Wae4JwNht2w.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5099"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/lZYvezWGArNNZsUBm2AKbA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥4499"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/xHzV5lj_ZKvxU7Hjka8Xag.jpg?format=400h_400w_4e_80q.webp",
          price: "¥9980"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/HVkjF6tgfJaT1sWjUE67YA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥8999"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/tSdGbKQ3C--h0wM7i02_DQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥6699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/DfPakgNF_a9irBKmktlUNg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3999"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/AqVgLOWrSrPWa5KkamL0iQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥1699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/8X1j4DZjV4QvefknL3xssg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3499"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/ZmTgUIfX8WgMduV9KOCCVA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥360"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/xJqfKpLTtXX-xS7Bo14E9Q.jpg?format=400h_400w_4e_80q.webp",
          price: "¥68"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/_j6P92kzGkwswUdivgnLvA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥499"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/_k1z8hnewMkeO50mkI83aA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥6399"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/tRoEbgPpHTCqg-Yil-pAIg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3599"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/rBPtN_ZnDjaD_ohPiiaUSg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥4880"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/f1ZIj0BOKLSAdCOwKUUDvg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥7000"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/j9VrWDf7U5_5Hh5OccOH9Q.jpg?format=400h_400w_4e_80q.webp",
          price: "¥15000"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/pu3UppqCCJfEKT4YDmIoTw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥1200"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/Qs6oc-BQ8w1zsWgklDpI0Q.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3599"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/VHOS2MQnR5ICNAa3PtqzZw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3690"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/fflihOmHty-1qv0aHDUDVA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥2999"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/H3pfmMl42feHvWjEZ-FRgg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥2500"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/_k1z8hnewMkeO50mkI83aA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥1600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/rBPtN_ZnDjaD_ohPiiaUSg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3600"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/r4FzypGtLwy6EeOFQBn_vA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥319"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/fBajrrBlyIRpYCXxovOhpg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥799"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/uPhJ6-u8Xia7tv2L5cdkaA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥399"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/cdpF-INeqNcQ-WdaaJChhg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥2799"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/eoHOeKuftFbyn1TJ3iOJZA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/J8hCtimgKb0UsbUAUS4oMQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5999"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/Ud2ib_9ehI78t9in5HDpgA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥132"
        },
        {
          img:
            "https://image.suning.cn/uimg/b2c/newcatentries/0070105491-000000000861247041_1.jpg?format=400h_400w_4e_80q.webp",
          price: "¥33.9"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/awjr-lBbB5i8V0WX2dO4zg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥42.5"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/HX3op1tWUy2aivqG8fklgA.jpg?format=400h_400w_4e_80q.webp",
          price: "¥11900"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/0YehhPzJYdiNvi8z4ox0Gg.jpg?format=400h_400w_4e_80q.webp",
          price: "2099"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/GK7qj7hGdQbONaudm5Gq1Q.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5599"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/LTR5WYoKAV_6VOwRgCOfcg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5500"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/3BiJSZ-soia9JE12sKJaCw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥6500"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/PmQ_4kzMOuAuQ2QBQuhaNw.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5800"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/0iOg7nFUdO532wmyTRSEpQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥5880"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/tSdGbKQ3C--h0wM7i02_DQ.jpg?format=400h_400w_4e_80q.webp",
          price: "¥6699"
        },
        {
          img:
            "https://imgservice.suning.cn/uimg1/b2c/image/tRoEbgPpHTCqg-Yil-pAIg.jpg?format=400h_400w_4e_80q.webp",
          price: "¥3599"
        }
      ]
    };
  },
  methods: {
    chuc(n) {
      this.$router.push({
        name: "detail",
        params: {
          img: n.img,
          price: n.price
        }
      });
    }
  }
};
// var data = document.querySelectorAll(".pic-img li a img");
// for (var i in data) {
//   console.log(
//     `{img:'${data[i].currentSrc}',price:'${data[i].parentNode.nextSibling.nextSibling.innerText}'},`
//   );
// }
// console.log(data)
</script>
<style lang="scss">
// .qbody {
//   color: #a5a5a5;
//   width: 100%;
//   height: 26.666667rem;
// }
.sn-local-loading,
.sn-nav-title,
.tc {
  text-align: center;
}
.sn-nav2 {
  position: relative;
  height: 1.76rem;
  background: #fff;
  line-height: 1.76rem;
  font-size: 0.6rem;
  border-bottom: 1px solid #dcdcdc;
}
.sn-nav-back2 {
  // position: absolute;
  // left: 1.1rem;
  // top: 0.3rem;
  // width: 0.48rem;
  // height: 0.5rem;
  position: absolute;
  left: 0.1rem;
  top: 0.6rem;
  border: solid #353d44;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(-45deg);
  width: 0.48rem;
  height: 0.48rem;
  a {
    // width: 1.5rem;
    // height: 1.5rem;
    // text-indent: -100rem;
    // overflow: hidden;
    // z-index: 11;
    width: 0.48rem;
    height: 0.48rem;
    text-indent: -100rem;
    overflow: hidden;
    position: absolute;
    top: 0;
    display: block;
  }
}
.sn-nav-title {
  color: #fff;
  text-indent: -9999px;
  width: 60%;
  margin: 0 auto;
}
.of {
  overflow: hidden;
  white-space: nowrap;
}
.sn-nav-back2,
.sn-nav-right {
  margin: 0 0.56rem;
}
.sn-nav-title:before {
  content: "";
  display: block;
  width: 100%;
  height: 1.5rem;
  position: absolute;
  top: 0.1rem;
  left: 0;
  background-image: url(https://res.suning.cn/project/cmsWeb/suning/higou/wap/higoubq/style/imagesIndex/tittle.png);
  background-repeat: no-repeat;
  background-size: 3.02rem 0.8rem;
  background-position: center;
  z-index: 10;
}
.sn-nav-back2:before {
  position: absolute;
  top: 0.6rem;
  left: 0;
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  border: solid #353d44;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(-45deg);
}
.sn-icon:after,
.sn-iconbtn:after {
  position: absolute;
  top: -6px;
  right: -8px;
  bottom: -6px;
  left: -8px;
  content: " ";
}
.van-tabbar {
  background: #ff342d;
  display: table;
  width: auto;
  height: 2.3rem;
  padding: 0;
  margin: 0;
  table-layout: fixed;
  white-space: nowrap;
  font-size: 0;
  .van-tabbar-item {
    width: 3rem;
    height: 2.3rem;
    font-size: 0.6rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    img {
      position: relative;
      width: 1rem;
      height: 1rem;
      display: block;
      margin: 0.2rem auto;
      background: none !important;
    }
    span {
      display: inline-block;
      font-weight: normal;
      height: auto;
      max-width: 3rem;
      color: #fff;
    }
  }
}
.app-list {
  margin-top: 50px;
  display: block;
  //   padding: 0 0.2rem;
  margin-bottom: 0.38rem;
  position: relative;
  width: 14.2rem;
  height: auto;
  background: #fff;
  //   margin: 0 0.2rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border: 1px solid transparent;
  border-radius: 4px;
  z-index: 55;
  overflow: hidden;
  .line-clamp-1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
  }
  .line-clamp-2 {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    line-height: 0.76rem;
    margin-bottom: 0.2rem;
    padding-top: 0.4rem;
  }
  .bold {
    font-weight: bold;
  }
  .f34 {
    font-size: 0.64rem;
  }
  .pic-img {
    overflow: hidden;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.08rem;
    // height: 6.4rem;
    img {
      width: 4.4rem;
      height: 4.4rem;
    }
    li {
      position: relative;
      float: left;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      overflow: hidden;
      width: 4.4rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      .a-st {
        position: relative;
        display: block;
        width: 4.4rem;
        height: 4.4rem;
      }
      .pro-price1 {
        left: 0;
        width: 100%;
        margin-top: 0.2rem;
        color: #a5a5a5;
        text-align: center;
        height: 1.2rem;
        .acDec {
          max-width: 4.6rem;
          position: relative;
          margin: 0 auto;
          height: auto;
          font-size: x-small;
          line-height: 0.56rem;
          border-radius: 2px;
          color: #fe053a;
          display: table;
          padding: 0.03rem;
        }
        .rPrice {
          line-height: 0.5rem;
          margin: 0.3rem 0 0.2rem;
        }
      }
    }
    li:before {
      width: 4.4rem;
      height: 4.4rem;
      background-color: rgba(0, 0, 0, 0.02);
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
li,
ol,
ul {
  list-style: none;
}
</style>

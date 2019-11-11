<template>
  <div class="guessUlike" sap-modid="113464229882">
    <a class="v7-title" href="###" name="index_wapv7_113464229882_pic01" sap-expo="true">
      <img
        data-src="done"
        class="opa1"
        src="https://image3.suning.cn/uimg/cms/img/154518371251022769.png?format=_is_1242w_100h.webp"
      />
    </a>
    <div class="pro-list-wrapper">
      <div class="pro-list">
        <div class="kw-wrapper normal-pro" v-for="(n,index) in gettag" v-if="index<x" ref="kw">
          <a
            href="//m.suning.com/product/0000000000/000000010658058827.html"
            sa-data="{&quot;eletp&quot;:&quot;prd&quot;,&quot;prdid&quot;:&quot;000000010658058827&quot;,&quot;shopid&quot;:&quot;0000000000&quot;,&quot;recvalue&quot;:&quot;rec_14-40_0_A_ab:A&quot;}"
            sap-expo="true"
          >
            <div class="pro-image-wrapper">
              <img class="pro-img opa1" data-src="done" :src="n.picurl" />
            </div>
            <p class="pro-title line-clamp-2" v-text="n.name"></p>
            <p class="cuxiao-tag">
              <span class="pro-icon guess-zyicon">自营</span>
            </p>
            <i class="little-icon"></i>
            <div class="pro-price">
              <div class="real-price">
                <span class="flag">￥</span>
                <span class="pre-price" v-text="n.price"></span>
                <span class="price-comments">
                  <span v-text="n.comments"></span>
                  <span>评价</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <img v-show="finished" data-src="done" class="sn-logo-img opa1" src="https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/snlogo.png?from=mobile">
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      //用户当前垂直滚动的距离
      scroll: "",
      //用户向下滑加载其他数据前渲染的页面
      gettag: [],
      x:4,
      canrun:true
    };
  },
  methods: {
    firstLoad(){
       axios.get("http://localhost:3000/gettag").then(({ data }) => {
         this.gettag = this.gettag.concat(data);
        });
    },
    menu:function() {
      this.x = 4;
      this.scroll =
      document.documentElement.scrollTop || document.body.scrollTop;
      // var windowHeight =
      // document.documentElement.clientHeight || document.body.clientHeight;
      // var scrollHeight =
      // document.documentElement.scrollHeight || document.body.scrollHeight;
      // if(this.scroll + windowHeight == scrollHeight){
      // this.x +=4;
      // console.log('在加载')
      // console.log(this.scroll)478
      if(this.scroll>=436&&this.scroll<914){
        this.x = 8
      }else if(this.scroll>=914&&this.scroll<=1359){
        this.x = 12
      }else{
        this.x = 88
        this.finished=true;
      }
      // }
    }
  },
  //监听滚动事件
  mounted() {
    this.firstLoad();
    window.addEventListener("scroll", this.menu, true);
  }
};
</script>
<style>
</style>
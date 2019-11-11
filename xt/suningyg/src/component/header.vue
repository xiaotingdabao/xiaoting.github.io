<template>
  <div class="sn-nav-wrapper">
    <div class="index-nav" id="searchFixed" sap-modid="113456429854">
      <div class="index-nav-bg">
        <img src="https://image1.suning.cn/uimg/cms/img/157260181257313287.png" />
      </div>
      <div class="type top-type">
        <div class="content-wrap-one">
          <router-link class="class" to="/classify">
            <img src="https://image2.suning.cn/uimg/cms/img/157199320847433454.png" />
          </router-link>
          <a
            href="https://cuxiao.m.suning.com/scms/snhd.html?adTypeCode=1137&amp;adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fsnhd.js%3FpageCode%3Dsnhd"
            sap-expo="true"
          >
            <img src="https://image3.suning.cn/uimg/cms/img/157258844085147187.gif" class="aa-img" />
          </a>
          <router-link class="logbtn myBtnNoLogin" to="/mine">
            <img class="logImg" src="https://image2.suning.cn/uimg/cms/img/157199321817918653.png" />
            <img class="logPic" src="https://image1.suning.cn/uimg/cms/img/157199322108277118.png" />
          </router-link>
        </div>
        <div class="content-wrap-two">
          <div class="wbox-flex search-bar pr">
            <!-- <a name="index_none_header_sysc" class="search"></a> -->
            <router-link class="search" to="/xsearch"></router-link>
            <i class="search-icon"></i>
            <form>
              <input
                class="searchInput"
                name="index_none_header_sysc"
                type="text"
                placeholder="商品/店铺"
                autocomplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="type fixed-type">
        <div class="content-wrap-one">
          <a
            class="class"
            name="index_none_header_syfl"
            href="//m.suning.com/list/list.html"
            sap-expo="true"
          >
            <img src="https://image1.suning.cn/uimg/cms/img/157199320847433454.png" />
          </a>
          <div class="search-wrapper">
            <div class="wbox-flex search-bar pr">
              <a name="index_none_header_sysc" class="search" href="//m.suning.com/search.html"></a>
              <i class="search-icon"></i>
              <form>
                <input
                  class="searchInput"
                  name="index_none_header_sysc"
                  type="text"
                  placeholder="商品/店铺"
                  autocomplete="off"
                />
              </form>
            </div>
          </div>
          <a
            href="javascript:;"
            name="index_none_header_sydl"
            class="logbtn myBtnNoLogin"
            sap-expo="true"
          >
            <img class="logImg" src="https://image3.suning.cn/uimg/cms/img/157199321817918653.png" />
            <img class="logPic" src="https://image3.suning.cn/uimg/cms/img/157199322108277118.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import router from "../routers/index";
export default {};
</script>
<style>
</style>
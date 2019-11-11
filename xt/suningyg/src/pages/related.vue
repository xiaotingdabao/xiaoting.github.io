<template>
  <div>
    <Header />
    <Banner />
    <Nav />
    <Newperson />
    <Goodlist />
    <Tabbar />
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import Header from "../component/header.vue";
// import Advert from "../component/advert.vue";
import Banner from "../component/banner.vue";
import Nav from "../component/nav.vue";
import Newperson from "../component/newperson.vue";
import Goodlist from "../component/goodlist.vue";
import Tabbar from "../component/tabbar.vue";
export default {
  methods: {},
  components: {
    Header,
    // Advert,
    Banner,
    Nav,
    Newperson,
    Goodlist,
    Tabbar
  }
};
</script>
<style>
</style>
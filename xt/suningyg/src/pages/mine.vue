<template>
  <div>
    <Login />
    <Tabbar />
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import Login from "../component/login.vue";
import Tabbar from "../component/tabbar.vue";

export default {
  components: {
    Login,
    Tabbar
  }
};
</script>
<style>
</style>
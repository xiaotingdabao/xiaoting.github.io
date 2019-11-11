<template>
  <div>
    <Csearch />
    <Treeselect />
    <Tabbar />
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import Csearch from "../component/csearch.vue";
import Treeselect from "../component/treeselect.vue";
import Tabbar from "../component/tabbar.vue";
export default {
  components: {
    Csearch,
    Treeselect,
    Tabbar
  }
};
</script>
<style>
</style>
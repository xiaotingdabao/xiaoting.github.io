<template>
  <div style="background-color: #f5f5f9;height:600px">
    <Carhead />
    <keep-alive>
      <component :is="gnum.showcar?'Carbody':'Carno'"></component>
    </keep-alive>
    <!-- <Carbody /> -->
    <!-- <Carno /> -->
    <Settle />
    <Tabbar />
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import Tabbar from "../component/tabbar.vue";
import Carhead from "../component/carhead.vue";
import Settle from "../component/settle.vue";
import Carno from "../component/carno.vue";
import Carbody from "../component/carbody.vue";
export default {
  data() {
    return {
      componentName: "Carno"
    };
  },
  computed: {
    gnum() {
      return this.$store.getters.getGnum;
    }
  },
  components: {
    Carhead,
    Tabbar,
    Settle,
    Carbody,
    Carno
  }
};
</script>
<style>
</style>
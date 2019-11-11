<template>
  <div>
    <Goodsbuy />
    <!-- <Goodsaction /> -->
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
// import Goodsaction from "../component/goodsaction.vue";
import Goodsbuy from "../component/goodsbuy.vue";
import router from "../routers/index.js";
//引入状态管理
import storei from "../store/index";
import store from "../store/vuex";

export default {
  // data() {
  //   return {
  //     img: "",
  //     price: ""
  //   };
  // },
  computed: {
    dat() {
      return this.$store.getters.getDat;
    }
  },
  methods: {
    getc() {
      this.$store.dispatch("setDat", {
        img: this.$route.params.img,
        price: this.$route.params.price
      });
    }
  },
  components: {
    // Goodsaction,
    Goodsbuy
  },
  mounted() {
    this.getc();
  }
};
</script>
<style>
</style>
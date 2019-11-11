<template>
  <van-submit-bar :price="0" button-text="去结算(0)" @submit="onSubmit">
    <van-checkbox v-model="checked">全部</van-checkbox>
    <span slot="tip">
      你的收货地址不支持同城送,
      <span>修改地址</span>
    </span>
  </van-submit-bar>
</template>
<script>
import Vue from "vue/dist/vue";
import "vant/lib/index.css";
import { SubmitBar, Checkbox } from "vant";

Vue.use(SubmitBar);
Vue.use(Checkbox);
export default {
  data() {
    return {
      checked: "",
      onSubmit: ""
    };
  },
  methhods: {
    // onSubmit() {}
  },
  components: {
    // [SubmitBar.name]: SubmitBar,
    // [CheckBox.name]: CheckBox
  }
};
</script>
<style lang="scss">
.van-submit-bar__tip {
  display: none;
}
.van-checkbox__icon {
  padding-left: 5px;
}
.van-checkbox__label {
  font-size: 12px;
}
.van-submit-bar {
  bottom: 42px;
}
.van-submit-bar__text {
  line-height: normal;
  font-size: 0.56rem;
  color: #000;
}
.van-submit-bar__price {
  font-size: 0.64rem;
  color: #f42;
  display: inline-block;
  font-weight: 700;
}
.van-button--danger {
  height: 1.32rem;
  width: 4rem;
  background: #fc0;
  border-radius: 0.24rem;
  color: #222;
  text-align: center;
  font-weight: 700;
  //   display: flex;
  -webkit-box-pack: center;
  text-align: center;
  border: none;
  .van-button__text {
    font-weight: 700;
    // display: inline;
    line-height: 1;
    font-size: 12px;
  }
}
.van-button--large {
  line-height: 30px;
}
</style>
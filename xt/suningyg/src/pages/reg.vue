<template>
  <div class="regbody">
    <div class="sn-nav">
      <div class="sn-nav-arrow">
        <!-- <a class="sn-iconbtn" href="###"></a> -->
        <router-link to="/mine" class="sn-iconbtn"></router-link>
      </div>
      <div class="sn-nav-title1 of">用户注册</div>
      <div class="sn-nav-right">
        <a href="#">联系客服</a>
      </div>
    </div>
    <form id="step1Form" action method="post">
      <!-- 用户信息 -->
      <div class="container">
        <!-- 用户名 -->
        <div class="ipt-box">
          <label for="username" class="clabel tel-label">用户名</label>
          <input
            type="text"
            id="username"
            placeholder="请输入用户名"
            class="cinfo tel-distance tel-focus"
            maxlength="13"
            v-model="username"
          />
          <span class="uinfo" v-if="canName&&outputName" style="color:green">该用户可以注册</span>
          <span class="uinfo" v-else-if="canName==false&&outputName==true" style="color:red">该用户已注册</span>
          <div class="tel-circle tel-del" style="display: none;">
            <a href="javascript:void(0)">×</a>
          </div>
        </div>
        <!-- 设置密码 -->
        <div class="ipt-box">
          <label for="tel-pass" class="clabel tel-label">设置密码</label>
          <input
            type="password"
            id="setPsw"
            name="setPsw"
            class="cinfo codeDel"
            placeholder="6-20位数字/字母/符号"
            v-model="password"
          />
          <span class="pinfo" v-if="canPassword&&outputPassword" style="color:green">密码格式正确</span>
          <span
            class="pinfo"
            v-else-if="canPassword==false&&outputPassword==true"
            style="color:red"
          >密码格式不符</span>
          <a href="javascript:void(0)" id="password-eye" class="password-eye1"></a>
          <div id="settingcode" class="ipt-circle tel-circle pass-del" style="display: none;">
            <a href="javascript:void(0)">×</a>
          </div>
        </div>

        <!-- 协议勾选 -->
        <div class="protocal clearfix">
          <div class="iconchoice" @click="check">
            <a href="javascript:void(0)" :class="ischeck?'iconchoice2':'iconchoice1'"></a>
          </div>
          <div class="protocal-info">
            &nbsp;同意
            <span>《</span>
            <a href="https://sale.suning.com/all/regProtocol/snyghyzc.html">苏宁会员章程</a>
            <span>》</span>
            <span>《</span>
            <a href="https://sale.suning.com/all/regProtocol/yfbxy.html">易付宝协议</a>
            <span>》</span>
            <span>《</span>
            <a href="https://sale.suning.com/all/regProtocol/yssm.html">苏宁隐私政策</a>
            <span>》</span>
            <span>《</span>
            <a href="https://sale.suning.com/all/regProtocol/yfbyszc.html">易付宝隐私政策</a>
            <span>》</span>
          </div>
        </div>
        <a href="javascript:void(0)" class="submit-btn" @click="canreg">下一步</a>
        <!-- <router-link to="/mine" class="submit-btn">下一步</router-link> -->
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import router from "../routers/index.js";
import axios from "axios";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      ischeck: false,
      canName: false,
      canPassword: false,
      outputName: false,
      outputPassword: false,
      username: "",
      password: ""
    };
  },
  methods: {
    check() {
      this.ischeck = !this.ischeck;
    },
    canreg() {
      if (this.username == "") {
        Toast("用户名不能为空");
      } else if (this.username != "" && this.password == "") {
        Toast("请设置密码");
      } else if (
        this.username != "" &&
        this.password != "" &&
        this.ischeck == false
      ) {
        Toast("您必须同意苏宁服务条款后，才能提交下一步");
      } else {
        //提交当前的用户名和密码给后端，后端是否注册成功
        axios({
          url: "http://localhost:3002/reguser",
          methods: "get",
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res.data);
          if (res.data === 1) {
            Toast("注册成功，快去登录吧！");
            router.push({ name: "mine" });
          } else {
            Toast("注册失败，请联系客服！");
          }
        });
      }
    }
  },
  watch: {
    //监听该用户名是否可以注册
    username: function(val, oldVal) {
      console.log(`username${val}, ${oldVal}`);
      if (val == "") {
        this.outputName = false;
      } else {
        this.outputName = true;
        axios({
          url: "http://localhost:3001/getuser",
          methods: "get",
          params: {
            username: this.username
          }
        }).then(res => {
          console.log(res.data);
          if (res.data === 0) {
            // Toast("该用户名可以注册");
            this.canName = true;
          } else if (res.data === 1) {
            //Toast("该用户名已被注册，不可注册");
            this.canName = false;
          }
        });
      }
    },
    //监听密码格式是否正确
    password: function(val, oldVal) {
      console.log(`password${val}, ${oldVal}`);
      var pattern = /^\S{6,20}$/g; //正则验证
      if (val == "") {
        this.outputPassword = false;
      } else {
        this.outputPassword = true;
        if (!pattern.test(val)) {
          //密码格式不正确
          this.canPassword = false;
        } else {
          //密码格式正确
          this.canPassword = true;
        }
      }
    }
  }
};
</script>
<style lang="scss">
.uinfo {
  position: absolute;
  right: 20px;
}
.pinfo {
  position: absolute;
  right: 20px;
}
.regbody {
  width: 15rem;
  max-width: 15rem;
  min-width: 6.4rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 0.6rem;
  box-sizing: border-box;
  background-color: #fff;
}
.sn-nav {
  height: 1.2rem;
  line-height: 1.76rem;
  background-color: #fff;
  border: 0;
  position: relative;
  background: #fff;
  font-size: 0.6rem;
  .sn-nav-arrow {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.2rem;
    height: 1.2rem;
    .sn-iconbtn {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      margin-top: 0.3rem;
      background: url(https://res.suning.cn/project/srsregister/wapstyle/company/images/back.png)
        center no-repeat;
      background-size: contain;
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
  }
  .sn-nav-title1 {
    font-size: 0.72rem;
    color: #222;
    letter-spacing: 0;
    text-align: center;
    line-height: 1.76rem;
    width: 60%;
    margin: 0 auto;
  }
  .of {
    overflow: hidden;
    white-space: nowrap;
  }
  .sn-nav-back,
  .sn-nav-right {
    margin: 0rem;
  }
  .sn-nav-left,
  .sn-nav-right {
    top: 0;
    height: 1.8rem;
    width: 19%;
    position: absolute;
  }
  .sn-nav-right {
    right: 0;
    a {
      font-size: 0.48rem;
      color: #222;
      position: absolute;
      right: 0;
      top: 0;
      display: block;
    }
  }
}
.container {
  margin-top: 1.8rem;
  .ipt-box {
    position: relative;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    -webkit-border-bottom: 1px solid #ddd;
    -ms-border-bottom: 1px solid #ddd;
    -moz-border-bottom: 1px solid #ddd;
    margin-bottom: 0.48rem;
    .tel-label {
      width: 3rem;
    }
    .clabel {
      float: left;
      width: 3rem;
      line-height: 1.8rem;
      font-family: PingFangSC-Regular;
      font-size: 0.6rem;
      color: #666;
    }
    .cinfo {
      float: left;
      width: 9rem;
      height: 0.8rem;
      padding-left: 0rem;
      border: 0;
      margin-top: 0.5rem;
      box-sizing: border-box;
      outline: 0;
      font-family: PingFangSC-Regular;
      font-size: 0.6rem;
      color: #222;
      caret-color: #fa0;
      letter-spacing: 0.025rem;
    }
    .tel-del {
      float: right;
      text-align: center;
      line-height: 0.64rem;
      font-size: 0.64rem;
      width: 0.8rem;
      height: 0.8rem;
      margin-top: 0.6rem;
      border-radius: 50%;
      a {
        display: block;
        width: 0.6rem;
        color: #fff;
        border-radius: 50%;
        background-color: #999;
      }
    }
    .password-eye1 {
      float: right;
      width: 0.84rem;
      height: 0.84rem;
      background: url(https://res.suning.cn/project/srsregister/wapstyle/company/images/show.png)
        center no-repeat;
      background-size: contain;
      margin-top: 0.54rem;
    }
  }
  .ipt-box .ipt-circle,
  .message-del,
  .com-circle {
    float: right;
    text-align: center;
    line-height: 0.64rem;
    font-size: 0.64rem;
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.6rem;
    border-radius: 50%;
  }
  .ipt-box .ipt-circle a,
  .message-del a,
  .com-circle a {
    display: block;
    width: 0.6rem;
    color: #fff;
    border-radius: 50%;
    background: #999;
  }
  .protocal {
    display: flex;
    .iconchoice {
      width: 0.84rem;
      height: 0.84rem;
      margin-top: -0.06rem;
      .iconchoice1 {
        display: block;
        width: 100%;
        height: 100%;
        background: url(https://res.suning.cn/project/srsregister/wapstyle/company/images/unchecked.png)
          center no-repeat;
        background-size: contain;
      }
      .iconchoice2 {
        display: block;
        width: 100%;
        height: 100%;
        background: url(https://res.suning.cn/project/srsregister/wapstyle/company/images/checked.png)
          center no-repeat;
        background-size: contain;
      }
    }
    .protocal-info {
      margin-left: 0.1rem;
      font-family: PingFangSC-Regular;
      font-size: 0.48rem;
      color: #999;
      line-height: 0.68rem;
      span {
        color: #101010;
      }
      a {
        font-family: PingFangSC-Regular;
        font-size: 0.48rem;
        color: #101010;
        line-height: 0.68rem;
        text-decoration: underline;
      }
    }
  }
  .submit-btn {
    display: block;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    margin-top: 0.76rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.68rem;
    color: #fff;
    background-image: linear-gradient(270deg, #f50 0, #ff8f00 100%);
    border-radius: 0.9rem;
    border-radius: 0.9rem;
  }
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
</style>
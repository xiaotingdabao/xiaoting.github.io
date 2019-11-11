<template>
  <div>
    <header>
      <div class="navUrl">
        <a href="###" class="kf">联系客服</a>
        <!-- <a href="###" class="qyzc">用户注册</a> -->
        <router-link to="/reg" class="qyzc">用户注册</router-link>
      </div>
    </header>
    <div class="login-content2">
      <h2>欢迎登录苏宁易购</h2>
      <div class="tel_inputBox">
        <!-- <label
          class="input-label"
          style="left: 0px; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >请输入手机号/用户名/邮箱</label>-->
        <i class="ico-close"></i>
        <input
          type="text"
          class="txt-input changeInput"
          id="username"
          name="username"
          maxlength="64"
          placeholder="请输入手机号/用户名/邮箱"
          v-model="username"
        />
      </div>
      <div class="password_inputBox">
        <!-- <label class="input-label" style="display: inline-block;left:0;">请输入密码</label> -->
        <i class="ico-close abs-close"></i>
        <i class="ico-eye"></i>
        <a href="###" id="goForgetPwd" name="WAP_login_password_forgetpsd" class="forgetPass">忘记密码</a>
        <input
          type="password"
          class="txtPassport-input changeInput"
          id="password"
          maxlength="20"
          placeholder="请输入密码"
          name="password"
          v-model="password"
        />
      </div>
      <!--图片验证码 start-->
      <div class="form-content imageVerifyArea" id="imageVerifyArea1" style="display: none;">
        <label class="input-label" style="display: inline-block;left:0;">请输入验证码</label>
        <input
          type="text"
          name="yzm"
          class="verifyCode changeInput"
          maxlength="4"
          autocomplete="off"
        />
        <i class="ico-close abs-close hide"></i>
        <div class="codeNumImg">
          <img class="vcodeimg" src name="WAP_login_password_pic" />
        </div>
      </div>
      <div
        class="siller-account sillerVerifyCode"
        id="WAP_login_password_slide"
        style="margin: 0.4rem 0px; display: none;"
      >
        <div
          id="siller2"
          class="dt_parent float dt_parent float"
          style="width: 100%; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <div
            class="dt_child_content"
            id="siller2_dt_child_content_containor"
            style="width: 100%;"
          >
            <div class="dt_slide_bar"></div>
            <div class="dt_notice" id="dt_notice" style="width: 100%;">请按住滑块拖到最右边</div>
            <div class="dt_child_content_knob"></div>
          </div>
        </div>
      </div>
      <!--图片验证码 end-->
      <div style="position: absolute;left: 600px;top:200px;" id="captcha2"></div>
      <div class="btnBox">
        <a href="###" class="login_btn" @click="isLogin">登录</a>
        <a href="javascript:;" class="other_btn2 login_switch_btn_box">验证码登录</a>
      </div>
    </div>
    <footer>
      <p class="f-loginp">其他登录方式</p>
      <div class="f-icons">
        <a href="###" onclick="qqLogin();return false;" name="WAP_login_password_QQ">
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_qq.png" alt />
        </a>
        <a href="###" onclick="eppLogin();return false;" name="WAP_login_password_yifubao">
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png" alt />
        </a>
        <a href="###" onclick="cardFirstLogin();return false;">
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_k.png" alt />
        </a>
      </div>
      <p class="f-agree">
        <span>我同意</span>
        <b>《</b>
        <a href="https://sale.suning.com/all/regProtocol/snyghyzc.html">苏宁易购会员章程</a>
        <b>》</b>
        <b>《</b>
        <a href="https://sale.suning.com/all/regProtocol/yfbxy.html">易付宝协议</a>
        <b>》</b>
      </p>
    </footer>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import router from "../routers/index.js";
import axios from "axios";
import { Toast } from "vant";
//引入状态管理
import storei from "../store/index";
import store from "../store/vuex";

Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    isLogin() {
      if (this.username == "") {
        Toast("用户名不能为空");
      } else if (this.username != "" && this.password == "") {
        Toast("请输入密码");
      } else {
        axios({
          url: "http://localhost:3003/loginuser",
          methods: "get",
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res.data);
          if (JSON.stringify(res.data) === "[]") {
            Toast("用户名或密码错误！");
          } else {
            Toast("登录成功！");
            this.$store.dispatch("setUser", {
              username: res.data[0].username,
              password: res.data[0].password
            });
            router.push({ name: "related" });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss">
body {
  background: #fff;
}
header {
  box-sizing: border-box;
  padding: 0.26rem 0.48rem 0;
  clear: both;
  overflow: hidden;
  .navUrl {
    display: inline-block;
    position: relative;
    float: right;
    height: 1.2rem;
    line-height: 1.2rem;
    a {
      display: inline-block;
      font-size: 0.48rem;
      color: #222;
      text-align: center;
    }
    .kf {
      margin-right: 0.48rem;
      position: relative;
    }
    .qyzc {
      margin-left: 0.48rem;
    }
  }
}
.tel_inputBox .input-label,
.login-content2 .input-label,
.form-content .input-label {
  height: 1.34rem;
  line-height: 1rem;
  position: absolute;
  left: 0.46rem;
  top: 0.5rem;
  font-size: 0.6rem;
  color: #ccc;
  background: transparent;
  cursor: text;
}
.ico-close {
  display: none;
  width: 0.84rem;
  height: 0.84rem;
  // background: url(../images/icon_close.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  bottom: 0.54rem;
}
.abs-close {
  position: absolute;
  right: 3.96rem;
  top: 0.48rem;
}
.ico-eye {
  width: 0.84rem;
  height: 0.84rem;
  background: url(https://res.suning.cn/project/passport/login/wapV8/images/eye_close.png)
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 2.62rem;
  top: 0.48rem;
}
.forgetPass {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
}
.login-content2 {
  padding: 0 1.5rem;
  margin-top: 1.12rem;
  h2 {
    font-size: 0.72rem;
  }
  .tel_inputBox,
  .password_inputBox,
  .form-content {
    width: 12rem;
    height: 1.8rem;
    line-height: 1.8rem;
    margin-top: 1.2rem;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .login-content2 .tel_inputBox input,
  .login-content2 .password_inputBox input,
  .verifyCode {
    margin-left: 0.48rem;
    font-size: 0.64rem;
    caret-color: #fb0;
  }
  input {
    width: 100%;
    border: 0 none;
    background: transparent;
  }
  .tel_inputBox {
    .txt-input {
      width: 10rem;
      caret-color: #fb0;
    }
  }
}
footer {
  margin: 0;
  position: absolute;
  left: 2.9rem;
  bottom: 3.84rem;
  width: 9.6rem;
  text-align: center;
  font-size: 0.4rem;
  .f-loginp {
    color: #999;
    position: relative;
    margin-bottom: 0.38rem;
  }
  .f-icons {
    width: 100%;
    clear: both;
    overflow: hidden;
    margin-bottom: 0.7rem;
    a {
      display: inline-block;
      width: 1.32rem;
      height: 1.32rem;
      float: left;
      margin-right: 2.8rem;
      img {
        max-width: 100%;
      }
    }
    a:last-child {
      margin: 0;
    }
  }
  .f-agree {
    color: #999;
    text-align: left;
    a {
      color: #101010;
      text-decoration: underline;
    }
    b {
      color: #101010;
    }
  }
}
.btnBox {
  margin-top: 1.2rem;
  text-align: center;
  .login_btn {
    width: 12rem;
    height: 1.8rem;
    line-height: 1.8rem;
    display: block;
    color: #222;
    font-size: 0.68rem;
    border-radius: 0.36rem;
    background: #fc0;
    font-weight: 700;
  }
  .other_btn2 {
    display: inline-block;
    margin-top: 0.84rem;
    font-size: 0.6rem;
  }
  .login_switch_btn_box {
  }
}
</style>
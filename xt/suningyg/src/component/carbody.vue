<template>
  <div class="body">
    <van-notice-bar :scrollable="false">
      <p>登陆后同步电脑与手机购物车的商品</p>
      <!-- <a href="###">去登录</a> -->
      <router-link to="/mine">去登录</router-link>
    </van-notice-bar>
    <div class="shops">
      <div class="shop">
        <div class="left">
          <label class="am-checkbox-wrapper">
            <span class="am-checkbox am-checkbox-checked">
              <input type="checkbox" class="am-checkbox-input" checked />
              <span class="am-checkbox-inner"></span>
            </span>
          </label>
        </div>
        <div class="right">
          <div class="shopinfo">
            <div class="shopicon icon-cShop"></div>
            <a
              class="shopname next"
              href="//shop.m.suning.com/0070167461.html"
              sap-modid="3"
              sa-data="{'eleid':'771003001'}"
            >罗技飞雪专卖店</a>
          </div>
          <div class="tools"></div>
        </div>
      </div>
      <div class>
        <div class="cmmdty-layout">
          <div>
            <div class="am-swipe">
              <div class="am-swipe-cover"></div>
              <div class="am-swipe-actions am-swipe-actions-right">
                <div
                  class="am-swipe-btn"
                  role="button"
                  style="background-color: rgb(255, 102, 0); color: white; width: 50px;"
                >
                  <div class="am-swipe-btn-text">删除</div>
                </div>
              </div>
              <div class="am-swipe-content" style="touch-action: pan-y;">
                <div class="layoutWapper">
                  <div class="left out-side-height">
                    <label class="am-checkbox-wrapper">
                      <span class="am-checkbox am-checkbox-checked">
                        <input type="checkbox" class="am-checkbox-input" checked />
                        <span class="am-checkbox-inner"></span>
                      </span>
                    </label>
                  </div>
                  <div class="right">
                    <div>
                      <div class="cmmdty">
                        <div class="img" sap-modid="3" sa-data="{'eleid':'771003002'}">
                          <img
                            class="main-img"
                            src="//image.suning.cn/uimg/b2c/newcatentries/0070167461-000000000102388019_1.jpg_200w_200h_4e"
                          />
                        </div>
                        <div class="info">
                          <div class="info-top" sap-modid="3" sa-data="{'eleid':'771003002'}">
                            <p class="ellipsis multi-2">Logitech/罗技M235二代无线鼠标 笔记本电脑便携鼠标</p>
                          </div>
                          <div class="info-middle">
                            <div class="sybmol">
                              <label class="mt12"></label>
                            </div>
                          </div>
                          <div class="info-bottom">
                            <p class="price">
                              <span class="f22 price-icon">¥</span>
                              <span class="f28">69.</span>
                              <span class="f20">00</span>
                            </p>
                            <div class="counter">
                              <button
                                sap-modid="3"
                                sa-data="{'eleid':'771003006'}"
                                disabled
                                class="gray-reduce"
                              ></button>
                              <input maxlength="2" type="number" value="1" />
                              <button
                                sap-modid="3"
                                sa-data="{'eleid':'771003005'}"
                                class="black-add"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sub-good">
            <a
              class="eg-item next"
              href="////m.suning.com/product/0070167461/000000000189541810.html"
            >
              <label class="item-tag">赠品</label>
              <p class="item-name ellipsis multi-1">Logitech/罗技G系列办公LOL吃鸡绝地求生游戏鼠标垫黑色锁边260*210</p>
              <label class="item-price">
                ×1
                <em>&gt;</em>
              </label>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="shops">
      <div class="shop">
        <div class="left">
          <label class="am-checkbox-wrapper">
            <span class="am-checkbox am-checkbox-checked">
              <input type="checkbox" class="am-checkbox-input" checked />
              <span class="am-checkbox-inner"></span>
            </span>
          </label>
        </div>
        <div class="right">
          <div class="shopinfo">
            <div class="shopicon icon-cShop"></div>
            <a
              class="shopname next"
              href="//shop.m.suning.com/0070073727.html"
              sap-modid="3"
              sa-data="{'eleid':'771003001'}"
            >宏金远航电脑专营店</a>
          </div>
          <div class="tools">
            <div class="shoptool">
              <div class="usable-coupon" sap-modid="3" sa-data="{'eleid':'771003007'}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class>
        <div class="cmmdty-layout">
          <div>
            <div class="am-swipe">
              <div class="am-swipe-cover"></div>
              <div class="am-swipe-actions am-swipe-actions-right">
                <div
                  class="am-swipe-btn"
                  role="button"
                  style="background-color: rgb(255, 102, 0); color: white; width: 50px;"
                >
                  <div class="am-swipe-btn-text">删除</div>
                </div>
              </div>
              <div class="am-swipe-content" style="touch-action: pan-y;">
                <div class="layoutWapper">
                  <div class="left out-side-height">
                    <label class="am-checkbox-wrapper">
                      <span class="am-checkbox am-checkbox-checked">
                        <input type="checkbox" class="am-checkbox-input" checked />
                        <span class="am-checkbox-inner"></span>
                      </span>
                    </label>
                  </div>
                  <div class="right">
                    <div>
                      <div class="cmmdty">
                        <div class="img" sap-modid="3" sa-data="{'eleid':'771003002'}">
                          <img
                            class="main-img"
                            src="//imgservice.suning.cn/uimg1/b2c/image/zRpZP5xgOn1jAoorj-yyDg.jpg_200w_200h_4e"
                          />
                          <img
                            class="blast"
                            src="http://image.suning.cn/uimg/pcms/label07/209334202218921130926500_17.png"
                          />
                        </div>
                        <div class="info">
                          <div class="info-top" sap-modid="3" sa-data="{'eleid':'771003002'}">
                            <p
                              class="ellipsis multi-2"
                            >联想Lenovo 小新13 13.3英寸 I5-10210U 8G 256G MX250 2G 定制 便携超极本 办公商务本 娱乐游戏 小新 非pro 全新正品 笔记本电脑</p>
                          </div>
                          <div class="info-middle">
                            <div class="services">
                              <div
                                class="func-detail ellipsis multi-1"
                                sap-modid="3"
                                sa-data="{'eleid':'771003004'}"
                              >
                                <span>【小新13 i5-10210U 独显】</span>
                                <span>主流【8G 256G纯固态】定制</span>
                              </div>
                              <div class="service-detail">
                                <span
                                  class="service-mt"
                                  sap-modid="3"
                                  sa-data="{'eleid':'771003003'}"
                                >
                                  购买服务
                                  <i class="service"></i>
                                </span>
                              </div>
                            </div>
                            <div class="sybmol">
                              <label class="mt12"></label>
                            </div>
                          </div>
                          <div class="info-bottom">
                            <p class="price">
                              <span class="f22 price-icon">¥</span>
                              <span class="f28">4699.</span>
                              <span class="f20">00</span>
                            </p>
                            <div class="counter">
                              <button
                                sap-modid="3"
                                sa-data="{'eleid':'771003006'}"
                                disabled
                                class="gray-reduce"
                              ></button>
                              <input maxlength="2" type="number" value="1" />
                              <button
                                sap-modid="3"
                                sa-data="{'eleid':'771003005'}"
                                class="black-add"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sub-good">
            <a
              class="eg-item next"
              href="////m.suning.com/product/0070073727/000000000188077915.html"
            >
              <label class="item-tag">赠品</label>
              <p
                class="item-name ellipsis multi-1"
              >【赠品 两件套】通用电脑包+有线鼠标 注意：此链接为赠品链接 单拍不发货 请勿下单！！！赠完即止。 黑色</p>
              <label class="item-price">
                ×1
                <em>&gt;</em>
              </label>
            </a>
            <a
              class="eg-item next"
              href="////m.suning.com/product/0070073727/000000000188077904.html"
            >
              <label class="item-tag">赠品</label>
              <p
                class="item-name ellipsis multi-1"
              >【赠品 三件套】通用屏幕贴膜+ 通用键盘贴膜+鼠标垫 注意：此链接为赠品链接 单拍不发货 请勿下单！！！赠完即止。 黑色</p>
              <label class="item-price">
                ×1
                <em>&gt;</em>
              </label>
            </a>
            <a
              class="eg-item next"
              href="////m.suning.com/product/0070073727/000000010972705713.html"
            >
              <label class="item-tag">赠品</label>
              <p class="item-name ellipsis multi-1">【晒图返】晒图写体验 联系客服返20元 签收72小时内 3张以上的晒图</p>
              <label class="item-price">
                ×1
                <em>&gt;</em>
              </label>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import { NoticeBar } from "vant";
import { Panel } from "vant";
import "../asserts/cart.css";

Vue.use(Panel);
Vue.use(NoticeBar);
export default {};
</script>
<style lang="scss">
.body {
  padding: 0.48rem;
}
.van-notice-bar {
  background: #ffe37e;
  height: 1.2rem;
  line-height: 0.9rem;
  font-size: 0.48rem;
  color: #222;
  padding: 0.2rem 0.48rem;
  margin-bottom: 0.2rem;
  border-radius: 0.24rem;
  p {
    float: left;
  }
  a {
    float: right;
    background: #222;
    -webkit-border-radius: 0.12rem;
    -moz-border-radius: 0.12rem;
    border-radius: 0.12rem;
    display: block;
    color: #ffe37e;
    padding: 0 0.08rem;
  }
}
.van-notice-bar__content {
  position: relative;
}
// .am-checkbox-input {
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 2;
//   border: 0 none;
// }
.am-checkbox-inner {
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
  transform: rotate(0deg);
  box-sizing: border-box;
}
.am-checkbox-inner:after {
  position: absolute;
  // display: none;
  top: 1.5px;
  right: 6px;
  z-index: 999;
  width: 5px;
  height: 11px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  content: " ";
  transform: rotate(45deg);
  border-color: #fff;
}
.am-checkbox.am-checkbox-checked .am-checkbox-inner {
  border-color: #ffcc00;
  background: #ffcc00;
  border: 0;
}
.van-checkbox__icon--checked .van-icon {
  color: #fff;
  background-color: #ffcc00;
  border-color: #ffcc00;
}
.am-swipe-btn-text {
  display: none;
}
</style>
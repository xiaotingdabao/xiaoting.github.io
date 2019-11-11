<template>
  <div>
    <header class="header1">
      <div class="sn-nav-back3">
        <!-- <a href="###"></a> -->
        <router-link to="/roblist"></router-link>
      </div>
      <div class="sn-nav-action1">
        <span class="more"></span>
      </div>
    </header>
    <div class="container" style="margin-top:0px;">
      <div
        class="pic-slider"
        style="transition-duration: 400ms; transition-property: transform; transition-timing-function: cubic-bezier(0, 0, 0.25, 1); transform: translate3d(0px, 0px, 0px);"
      >
        <div class="pic-item lazybox">
          <a href="###">
            <img :src="dat.img" />
            <div class="picshadow"></div>
          </a>
          <span
            class="bzt"
            style="right:0;top:0;background: url(//image.suning.cn/uimg/pcms/label06/691918229493241438970000_16.png); "
          ></span>
        </div>
        <div class="pic-item lazybox" v-for="(img,index) in buyimg" :key="index">
          <a href="###">
            <img :src="img" />
            <div class="picshadow"></div>
          </a>
          <span
            class="bzt"
            style="right:0;top:0;background: url(//image.suning.cn/uimg/pcms/label06/691918229493241438970000_16.png); "
          ></span>
        </div>
        <div class="pic-nav pic-nav-video">
          <span
            class="pic-nav-page"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >
            <span class="pic-nav-current">2</span>/
            <span class="pic-nav-count" id="picCount">10</span>
          </span>
        </div>
      </div>
      <section class="product-main">
        <div
          class="product-price inline-price"
          id="pricemain"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <p class="price-now" id="nopgPriceSymbol">
            <!-- <i>¥</i> -->
            <span v-text="dat.price">6259</span>
            <i>.00</i>
          </p>
          <span class="prod-new-icon">新品</span>
          <span class="prod-new-icon regular-goods" style="display: none;"></span>
          <span class="prod-block-icon unit-price" style="display: none;"></span>
          <span class="border-label price-label-new" style="display: none"></span>
          <span id="sjzxprice" class="defaultorg" style="display:none"></span>
          <p
            class="price-coupon-save"
            id="savePriceDiv"
            style="display:none"
            data-name2="prodDetail_none_main_quanbg"
          >
            用券最多可再省
            <span class="price-coupon-save-number" id="savePriceTxt"></span>元
          </p>
        </div>
        <div class="product-rxf-lab" id="trigger_rxf_merge" sap-modid="12" style="display: none;">
          <div class="r-lab" sa-data></div>
          <div class="more"></div>
        </div>
        <div class="product-qiang" id="productQiang" style="display: none;"></div>
        <a
          class="vip-mode"
          id="vipInfo"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          href="//supervip.suning.com/snprime-web/m/toIndex.do"
        >
          <div class="vip-info-main vip-info-has">
            <div class="vip-info-price">
              <span id="vip-icon-type" class="vip-info-icon"></span>
              <div
                class="vip-info-con"
                style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              >SUPER会员预计返价值125.18元云钻</div>
            </div>
            <div
              class="vip-info-text"
              style="display: none;"
              sap-modid="20"
              sa-data="{}"
              saname="prodDetail_none_main_supersalewa"
            ></div>
          </div>
          <div
            class="vip-info-more"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >立即开通</div>
        </a>
        <a class="vip-mode" id="vipInfo-old" style="display: none;">
          <div class="vip-info-main vip-info-has" id="hasVipPrice">
            <div class="vip-info-price"></div>
            <div class="vip-info-text" style="display: none;"></div>
          </div>
          <div class="vip-info-more"></div>
        </a>
        <div id="outScrapeDiv" style="display: none;"></div>
        <div class="enterprise-purchase" id="qyInfo" style="display: none;">
          <span class="enterprise-purchase-logo"></span>
          <span id="corporateMembers"></span>
          <a
            id="corporateUrl"
            class="enterprise-inquiry"
            href="javascript:void(0);"
            data-name="prodDetail_none_main_zqxjdj"
            data-name2="prodDetail_none_main_zqxjbg"
          ></a>
        </div>
        <div class="pin-mode-info" id="pin-mode-info" style="display: none;">
          <span class="line-radiu-icon"></span>
          <span class="line-radiu-icon">包邮</span>
          <span class="yipin"></span>
        </div>
        <div class="pin-sub-title" id="pinSubTitle" style="display: none;">
          <span></span>
        </div>
        <!-- 190528加购优化 -->
        <div class="addyh" id="jgMsg" style="display:none"></div>
        <div class="product-title">
          <h1
            class="name"
            id="productName"
            data-name="prodDetail_none_main_prodName"
          >惠普（hp）ENVY 13-aq1013TX 13.3英寸轻薄本笔记本电脑 i5-10210U 8GB内存 512GB SSD MX250-2G独显 银色 2019新款 时尚轻薄</h1>
          <div
            class="favirot"
            id="favId"
            data-name="prodDetail_none_main_cacelCollect"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          ></div>
        </div>
        <div class="blinkwords mb10" id="highlight-words" style="display: none" sap-modid="1"></div>
        <div class="radiu-gray-box mb10" id="choose-buy-type" style="display: none;">
          <div class="radiubox normalbox" style="display: none;">
            <div class="radiuboxhd">
              首付
              <em></em>新车开回家
            </div>
            <a href="javascript:;" class="radiuboxbd">选择购买方式</a>
          </div>
          <div class="radiubox splitbox" style="display: none;">
            <div class="radiuboxhd"></div>
            <a href="javascript:;" class="radiuboxbd">更换</a>
          </div>
          <div class="radiubox fullbox" style="display: none;">
            <div class="radiuboxhd">全款</div>
            <a href="javascript:;" class="radiuboxbd">更换</a>
          </div>
        </div>
        <div class="product-sub">
          <p
            id="product-subp"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >【免费领取福利】暗影精灵5代等游戏本笔记本电脑送8件套礼包 一体机台式电脑送16G优盘</p>
        </div>
        <div
          class="order2-progress order3-progress order3-progress-super"
          id="orderProgress"
          style="display: none;"
        >
          <div class="order2-progress-steps">
            <span class="order2-progress-step yuyueStage">
              预约
              <s></s>
            </span>
            <span class="order2-progress-line"></span>
            <span class="order2-progress-step buyStage">
              抢购
              <s></s>
            </span>
            <span class="order2-progress-line"></span>
            <span class="order2-progress-step sendStage">
              发货
              <s></s>
            </span>
            <a class="order2-info"></a>
          </div>
        </div>
        <div
          class="product-sub red-cent-get"
          id="trigger-package-details"
          data-name="prodDetail_none_main_yfqlkdj"
          data-name2="prodDetail_none_main_yfqlkbg"
          style="display: none"
        >
          <i class="red-cent-icon">
            <span id="yifenlingTitle">一分领</span>
          </i>
          <span id="yifenlingValue">一分领卡</span>
          <i class="icon-annotation"></i>
        </div>
        <div
          class="tagmod"
          id="importLabel"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <span
            class="redtagitem"
            id="freightInsurance"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >享退货运费险</span>
        </div>
      </section>
      <section
        class="product-main"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <a
          class="service315-container"
          id="service315-container"
          style="background-color: rgb(255, 243, 236); transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <div
            class="logo"
            style="background: url(&quot;https://image.suning.cn/uimg/MLS/label/148157370417644225577685.png&quot;) 0% 0% / contain no-repeat;"
          ></div>
          <div class="content" style="color: rgb(214, 146, 105);">价保30天·贵就赔·购物无忧</div>
          <div
            class="more"
            style="background: url(&quot;http://image2.suning.cn/uimg/cms/img/155506280615785612.png&quot;) 0% 0% / contain no-repeat; width: 0.16rem; height: 0.16rem;"
          ></div>
        </a>
      </section>
      <section class="additional-info mt10">
        <div class="info-container">
          <div class="info-item coupon jlj-item" id="trigger_activity" style="display: none;"></div>
          <div
            class="info-item coupon mt10"
            id="trigger_coupon_merge"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
            data-name="prodDetail_none_main_yhmkdj"
          >
            <span class="info-label">优惠&nbsp;&nbsp;</span>
            <div class="info-content">
              <p
                class="content-header-merge merge-line"
                id="activity_label_fourth"
                style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              >可参加以下优惠活动</p>
              <div
                class="promotion-item-merge merge-line"
                id="limit_time_amount"
                style="display: none;"
                data-name2="prodDetail_none_main_sjyjgwabg"
              >
                <i class="promotion-icon-merge red-icon-merge"></i>
                <span class="promotion-txt-merge"></span>
              </div>
              <div class="merge-line" id="shopping-allowance" style="display:none">
                <img src class="big-red-packet-img gquanimg" />
                <div class="big-red-packet-text"></div>
              </div>
              <div
                id="trigger_coupon_fourth"
                style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              >
                <a href="javascript:;" class="coupon-cell merge-line">
                  <div class="coupon-cell-primary">
                    <span class="coupon-new">
                      <i class="left"></i>
                      <label class="price">¥20</label>
                      <label class="desc">满2000用20</label>
                      <i></i>
                    </span>
                  </div>
                </a>
              </div>
              <div
                id="trigger_promotion_fourth"
                style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              >
                <div
                  class="promotion-item-merge merge-line"
                  data-name="prodDetail_none_main_superyzgbfdj"
                >
                  <i class="promotion-icon-merge">云钻促销</i>
                  <span class="promotion-txt-merge">普通会员立返749云钻</span>
                </div>
                <div
                  class="promotion-item-merge merge-line"
                  data-name="prodDetail_none_main_fmfqdj"
                >
                  <i class="promotion-icon-merge">实名领券</i>
                  <span class="promotion-txt-merge">实名认证领10元支付券</span>
                </div>
              </div>
            </div>
            <div class="get-quan-merge" id="get-quan-merge">领券</div>
          </div>
          <div
            class="info-item coupon"
            id="trigger_scrap"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >
            <span class="info-label">刮券&nbsp;&nbsp;</span>
            <div class="info-content coupon-cell-ft">
              <div class="coupon-score coupon-cell not-oversea-node merge-line">
                <span class="coupon-new">
                  <i class="left"></i>
                  <label class="price">云钻</label>
                  <label class="desc">刮券</label>
                  <i></i>
                </span>100%刮中券，最高50元无敌券
              </div>
            </div>
            <div class="cell-ft"></div>
          </div>
        </div>
      </section>
      <section
        class="shop-nearby"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        id="nearbyInfo-trade"
      >
        <div
          class="fourth-cells fourth-cells-sec isactive"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          id="tradeinDiv"
        >
          <a
            href="https://cuxiao.m.suning.com/scms/wapdn02188.html"
            class="fourth-cell"
            id="tradeinUrl"
            data-name="prodDetail_none_main_yjhx"
          >
            <div class="cell-primary icon-font ficon-hx">以旧换新 880元至高补贴，点此领取</div>
            <div class="cell-ft"></div>
          </a>
        </div>
      </section>
      <section
        class="address-colortype selected-colortype mt10"
        id="selectSection"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <div class="fourth-cells" id="handler_color" data-name="prodDetail_none_main_spc">
          <div class="fourth-cell">
            <span class="cell-tag-hd">已选&nbsp;&nbsp;</span>
            <div
              id="buy-choose"
              class="cell-primary"
              style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
            >i5-10210U 8G 512GB集显 1件</div>
            <div id="handler_label" class="cell-ft"></div>
          </div>
          <p id="storeNameP" class="store-selected-name" style="display: none;">
            <i class="store-icon"></i>请选择服务门店
          </p>
        </div>
      </section>
      <section class="address-colortype" id="addressSelect">
        <div class="fourth-cells">
          <div
            class="fourth-cell address-select"
            data-event="to-address"
            id="trigger_address_handle"
            data-name="prodDetail_none_main_address"
          >
            <span class="cell-tag-hd" id="sendTitle">送至&nbsp;&nbsp;</span>
            <div class="cell-primary">
              <div id="trigger_address" data-event="to-address">
                <span data-event="to-address">广东</span>
                <span data-event="to-address">广州</span>
                <span data-event="to-address">荔湾区</span>
              </div>
              <div
                class="address-tips"
                id="addressTip"
                style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              >
                <span>现货</span>，23:00前付款，预计明天（11月7日）前送达
              </div>
              <div class="special-tips" id="specialTip" style="display: none;"></div>
              <div class="special-tips" id="specialHwgTip" style="display: none;"></div>
            </div>
            <div id="handler_label" class="cell-ft"></div>
          </div>
          <div
            class="fourth-cell address-select"
            id="weightDiv"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >
            <span class="cell-tag-hd">重量&nbsp;&nbsp;</span>
            <div class="cell-primary">
              <div class="pur-tips" id="weight">
                <em>1.2kg</em>
                <span
                  class="bookinfoicon"
                  id="weight-trigger"
                  style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                ></span>
              </div>
            </div>
          </div>
          <div
            class="fourth-cell address-select"
            id="paySupport"
            style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
          >
            <span class="cell-tag-hd">付款</span>
            <div class="cell-primary">
              <div class="pur-tips">&nbsp;&nbsp;支持&nbsp;&nbsp;易付宝&nbsp;&nbsp;支付宝</div>
            </div>
          </div>
          <div class="fourth-cell address-select" id="yunfeiDiv" style="display:none;">
            <span class="cell-tag-hd" id="yunfeiTitle">运费&nbsp;&nbsp;</span>
            <div class="cell-primary">
              <div class="pur-tips" id="yunfeiTip"></div>
            </div>
          </div>
          <div class="fourth-cell address-select" id="sukaPsDiv" style="display: none;">
            <span class="cell-tag-hd">配送&nbsp;&nbsp;</span>
            <div class="cell-primary">
              <div class="pur-tips address-tips" id="sukaPs">
                <span>现货</span>，此为虚拟商品，无需实物配送
              </div>
            </div>
          </div>
          <!-- 通讯家电样式 -->
          <div class="fourth-cells extra-info" id="jdtxCommonLabel">
            <!--通用标签ID 为家电通过放心购标签-->
            <div id="commonService">
              <a class="service315-container longservice" id="jdtxCommonLink" style="display:none">
                <img class="userconfigimg" id="jdtxCommonLogo" />
                <div class="content longcontent" id="jdtxCommonContent"></div>
                <div class="cell-ft"></div>
              </a>
              <!--正常的通讯标签-->
              <div id="commonService2">
                <div
                  class="fourth-cell service"
                  id="trigger_explain"
                  data-name="prodDetail_none_main_serve"
                  style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                >
                  <ul>
                    <li
                      id="serviceInfo"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >苏宁发货&amp;供应商售后</li>
                    <li
                      id="installInfo"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >厂家安装</li>
                    <li id="hdfkDiv" style="display:none">货到付款</li>
                    <li id="jsdDiv" style="display: none;"></li>
                    <li
                      id="zsdDiv"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >准时达</li>
                    <li
                      id="arrivalDiv"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >次日达</li>
                    <li id="returnDiv" style="display: none;"></li>
                    <li id="yfxDiv" style="display: none"></li>
                    <li id="noreturn" class="unsupport-icon-grey" style="display: none;">不支持无理由退换货</li>
                    <li
                      id="selfDiv"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >自提</li>
                    <li
                      id="mianyunfei"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >免基础运费（60.00kg内）</li>
                    <li
                      id="goodskeepDiv"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >商品保管说明</li>
                    <li id="smartDiv" style="display: none;">苏宁智能</li>
                    <li id="tmZhengpinDiv" style="display: none;">100%正品</li>
                    <li id="tmBaotuiDiv" style="display: none;">7天无理由包退</li>
                    <li id="tmTuifanDiv" style="display: none;">退货返运费</li>
                    <li id="tmJisongDiv" style="display: none;">急速送达</li>
                    <li id="tuiyunxianDiv" style="display:none">退运险</li>
                    <li
                      id="triggerExplain0"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >代客检</li>
                    <li
                      id="triggerExplain1"
                      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
                    >7天无理由退货（激活后不支持）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="pulldetail">
        <ul class="cellprimary">
          <li class="current">图文详情</li>
          <li>规格参数</li>
          <li>包装售后</li>
        </ul>
        <div class="cellcontent">
          <div class="lazy1" style="display:none;">
            <p>
              <a href="###">
                <img
                  src="https://uimgproxy.suning.cn/uimg1/sop/commodity/uQ1C5DaxhHHXWEd9iqe8QA.jpg?from=mobile"
                  width="100%"
                  height="auto"
                  alt
                  class="opa1"
                />
              </a>
            </p>
            <p>
              <img
                src="https://uimgproxy.suning.cn/uimg1/sop/commodity/PxuwYwv0EjXvw6mKv3OYvg.jpg?from=mobile"
                width="100%"
                height="auto"
                alt
                class="opa1"
              />
              <img
                src="https://image.suning.cn/uimg/sop/commodity/611093263207445171742626_x.png?from=mobile"
                width="100%"
                height="auto"
                alt
                class="opa1"
              />
            </p>
            <p>
              <img
                v-for="(img,index) in detailimg"
                :key="index"
                :src="img"
                alt
                width="100%"
                height="auto"
                class="opa1"
              />
            </p>
          </div>
          <div class="lazy2" style="display:none;">
            <div class="awrap">
              <dl>
                <dt>
                  商品参数
                  <span class="cm"></span>
                </dt>
                <dd>
                  <div class="param">
                    <h3>主体</h3>
                    <ul>
                      <li>
                        <div>品牌</div>
                        <div>
                          <a href="###">联想(Lenovo)</a>
                        </div>
                      </li>
                      <li>
                        <div>系列</div>
                        <div>
                          <a href="###">小新潮7000</a>
                        </div>
                      </li>
                      <li>
                        <div>型号</div>
                        <div>
                          <a href="###">小新潮</a>
                        </div>
                      </li>
                      <li>
                        <div>产品定位</div>
                        <div>
                          <a href="###">商用电脑，性价比，家庭办公，学生用机，影音娱乐</a>
                        </div>
                      </li>
                      <li>
                        <div>上市时间</div>
                        <div>
                          <a href="###">2017</a>
                        </div>
                      </li>
                      <li>
                        <div>操作系统</div>
                        <div>
                          <a href="###">Windows10</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="lazy3">
            <dl style="padding:.12rem .13rem;border-bottom:1px solid #dcdcdc;">
              <dt>包装清单</dt>
              <dd style="color:#909090;padding-top:.2rem;line-height:.15rem;height:40px;">适配器x1</dd>
            </dl>
            <dl style="padding:.12rem .13rem;border-bottom:1px solid #dcdcdc;">
              <dt>售后服务</dt>
              <dd style="color:#909090;padding-top:.2rem;line-height:.15rem;height:60px;">
                <p style="height:18px">本商家商品保证正品行货，严格按照国家三包政策提供售后</p>
                <p style="height:18px">服务，因质量问题或实物与描述不符产生的退换货服务运费</p>
                <p style="height:18px">由本店承担。</p>
              </dd>
            </dl>
            <dl style="padding:.12rem .13rem;border-bottom:1px solid #dcdcdc;">
              <dt>价格说明</dt>
              <dd style="color:#909090;padding-top:.2rem;line-height:.15rem;height:80px;">
                <p style="height:18px">划线价：商品展示的划线价，可能是品牌专柜标价、品牌供</p>
                <p style="height:18px">应商提供的正品零售价（如厂商指导价、建议零售价等）或</p>
                <p style="height:18px">该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；</p>
                <p style="height:18px">由于地区、时间的差异性和市场行情波动，品牌专柜标价、</p>
                <p style="height:18px">销售商门店挂牌价等可能会与您购物时展示的不一致，该价</p>
                <p style="height:18px">格仅供您参考。</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cover-mask cover-mask-toggle"
      style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      v-show="isShow"
    ></div>
    <div class="cover-toggle" style="display: none;" v-show="isShow">
      <header class="cover-head">
        <div class="img-box">
          <img
            src="https://imgservice.suning.cn/uimg1/b2c/image/zRpZP5xgOn1jAoorj-yyDg.jpg_100w_100h_4e_100Q"
            alt
          />
        </div>
        <div class="product">
          <div class="price">
            <p id="choosePrice">
              <i>￥</i>4699.00
            </p>
          </div>
          <div class="kcinfo">
            商品编码:
            <em>690098498</em>
          </div>
          <div
            class="productname"
          >联想Lenovo 小新13 13.3英寸 I5-10210U 8G 256G MX250 2G 定制 便携超极本 办公商务本 娱乐游戏 小新 非pro 全新正品 笔记本电脑</div>
        </div>
      </header>
      <div class="cover-body">
        <div class="slider">
          <ul class="select-list">
            <li>
              <h2 class="h-inline">型号</h2>
              <div class="clusteritems">
                <label>【小新pro R5-3550H 标压】</label>
                <label>【小新13 i5-10210U 独显】</label>
                <label>【小新13 i7-10510U 独显】</label>
                <label>【小新pro i5-10210U 集显】</label>
              </div>
            </li>
            <li>
              <h2>选择配置</h2>
              <div class="clusteritems">
                <label>主流【8G 256G纯固态】定制</label>
                <label>热卖【8G 512G纯固态】定制</label>
                <label>高配【8G 1TB纯固态】定制</label>
              </div>
            </li>
          </ul>
          <div class="number">
            <h2>数量</h2>
            <div class="item">
              <a class="decrease overflow">-</a>
              <input type="number" min="1" value="1" max="99" id="count-num" />
              <a class="increase">+</a>
            </div>
          </div>
          <div class="yb-wrap">
            <div class="attached-mode">
              <div class="title">购买增值服务</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cover-action">
        <a href="###" class="addtocart">立即购买</a>
        <a href="###" class="buy">加入购物车</a>
      </div>
      <div class="cover-close">
        <a href="###" class="close"></a>
      </div>
    </div>
    <van-goods-action v-show="!isShow">
      <van-goods-action-icon
        icon="data:image/png;base64,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"
      />
      <van-goods-action-icon
        icon="data:image/png;base64,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"
      />
      <van-goods-action-icon
        icon="data:image/png;base64,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"
      />
      <van-goods-action-button type="danger" text="马上抢" @click="buyb" />
      <van-goods-action-button type="warning" text="加入购物车" @click="buyb" />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue/dist/vue";
import router from "../routers/index.js";
// import Detailc from "../asserts/detail.css";
//引入状态管理
import storei from "../store/index";
import store from "../store/vuex";
import "vant/lib/index.css";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  data() {
    return {
      isShow: false,
      buyimg: [
        "//imgservice.suning.cn/uimg1/b2c/image/w2p94gFI8fduKHsisQBFvA.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/wk3bedwH8xGwxXW46aRsow.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/-Ei0HfWfP8eYlc7zxa_aQA.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/No1mqZsbyY49CUJqo51UEg.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/2abV6Xd3jIptzedLLdvrYg.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/1SHG93fUxZCHP4k7wgIrbg.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/NJjnXUL7ggWfnUe12qCiSQ.jpg_800w_800h_4e_100Q",
        "//imgservice.suning.cn/uimg1/b2c/image/lZqyRUkbQCxRt-bNVwGGrw.jpg_800w_800h_4e_100Q"
        // "//imgservice.suning.cn/uimg1/b2c/image/zso5HFwUjZoMYicSLr6AWA.jpg_800w_800h_4e_100Q"
      ],
      detailimg: [
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/Xsp1JXdm3CzDDCMy4ogauQ.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/dd7kLg5mp2LFK8_vrNGYzQ.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/q2DRTsAfsjOt20g_6bySRA.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/U39h4xPv6uoHx5tGZx6r3g.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/530exvqpC0CyyZ0qDRvYZQ.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/Zloy6fIv_lJZFV2B3xhHAw.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/EHu_9SVQWsWauLW-E6XgvA.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/F466F-fKNz8WCO3VDfSLJQ.jpg?from=mobile",
        "https://uimgproxy.suning.cn/uimg1/sop/commodity/c29MHDp3wZvpBlWcqKfnPA.jpg?from=mobile"
      ]
    };
  },
  computed: {
    dat() {
      return this.$store.getters.getDat;
    }
  },
  methods: {
    buyb() {
      isShow = true;
    }
    //   getc() {
    //     this.$store.dispatch("setDat",{
    //     img = this.$route.params.img,
    //     price = this.$route.params.price
    //     })
    //   }
  }
};
</script>
<style lang="scss">
.van-goods-action-button--first .van-button__text {
  line-height: 3;
}
.van-goods-action-icon__icon {
  width: 3em;
  margin: 0;
}
.van-icon__image {
  width: 100%;
  height: 100%;
}
.van-image img {
  width: 100%;
  height: 100%;
}
.van-goods-action-button--first {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  align-content: space-around;
  border-radius: 6px 1px 1px 6px;
  background: #fc0;
  margin: 0 3px 0 0;
  font-size: 14px;
  color: #000;
  transform-origin: 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
  position: relative;
  text-align: center;
  line-height: 35px;
  height: 35px;
}
.van-goods-action-button--last {
  transform-origin: 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
  background-color: #f60;
  border-radius: 1px 6px 6px 1px;
  background: #f60;
  color: #fff;
  font-size: 14px;
  flex-basis: 0;
  width: 0;
  padding: 0;
  display: block;
  position: relative;
  text-align: center;
  line-height: 35px;
  height: 35px;
  -webkit-box-flex: 1;
  flex: 1;
}
//加入购物车遮罩
.cover-mask {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 100;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.cover-mask-toggle {
  background: rgba(0, 0, 0, 0.5);
}
.header1 {
  // position: absolute;
  // top: 100%;
  // left: 0;
  // right: 0;
  width: 100%;
  height: 2.533333rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .sn-nav-back3 {
    position: absolute;
    left: 10px;
    top: 5px;
    width: 30px;
    height: 30px;
    background-size: contain;
    background-image: url(https://res.suning.cn/project/pdsWeb/wapV3/style/images/newwap/nav-back.png);
    a {
      display: block;
      width: 30px;
      height: 30px;
      text-indent: -100rem;
      overflow: hidden;
      opacity: 0;
    }
  }
  .sn-nav-action1 {
    position: absolute;
    height: 30px;
    right: 10px;
    top: 5px;
    height: 30px;
    z-index: 15;
    .more {
      display: block;
      width: 30px;
      height: 30px;
      background-size: contain;
      background-image: url(https://res.suning.cn/project/pdsWeb/wapV3/style/images/newwap/nav-more.png);
    }
  }
}
.vip-info .vip-info-main,
.vip-mode .vip-info-main {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  margin-left: 0.06rem;
  width: 0;
  padding: 0.08rem;
}
.vip-info .vip-info-con,
.vip-mode .vip-info-con {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 230px;
  margin: 0 0 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pic-slider {
  position: relative;
  width: 2880px;
  height: 320px;
  overflow: hidden;
  .pic-item {
    float: left;
  }
}
.pic-slider .pic-item,
.pop-pic-slider .pic-item {
  display: none;
  box-sizing: border-box;
  width: 320px;
  height: 320px;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  position: relative;
  overflow: hidden;
}
.pic-slider .pic-item:before,
.pop-pic-slider .pic-item:before {
  content: "\20";
  padding-top: 100%;
  display: block;
}
.pic-slider .pic-item a,
.pop-pic-slider .pic-item a {
  position: relative;
  left: 50%;
  width: 100%;
  height: 100%;
  margin-left: -50%;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: -webkit-transform 0.25s ease;
  position: absolute;
  top: 0;
  z-index: 9;
}
.bzt {
  position: absolute;
  width: 90px;
  height: 90px;
  z-index: 10;
  overflow: hidden;
  background-size: 100% 100% !important;
  -webkit-transform: translateZ(0) !important;
  transform: translateZ(0) !important;
}
.pic-slider .pic-item > a > img,
.pop-pic-slider .pic-item > a > img {
  max-width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
}
.picshadow {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: 159px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAE+CAMAAADlFWVKAAAAM1BMV…3j8XgFMm7V4/F4bZZ923FzxGq2p8Dj8QpbBm3P6xaPx/8PAEXYOwAjGt0AAAAASUVORK5CYII=) repeat-x 0 0;
}
.pic-nav {
  position: absolute;
  bottom: 6px;
  left: 0;
  right: 5px;
  min-height: 18px;
  text-align: center;
  font-size: 0;
  margin: 0 auto;
  text-align: right;
  -webkit-transition: all 1s linear 0.3s;
  transition: all 1s linear 0.3s;
  span {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.1rem;
    height: 14px;
    padding-top: 0.02rem;
    min-width: 28px;
    line-height: normal;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    background-color: rgba(30, 30, 30, 0.6);
  }
}
.product-main {
  overflow: hidden;
  padding: 12px;
  background: #fff;
  .product-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    position: relative;
  }
  .product-price {
    overflow: hidden;
    .price-now {
      i {
        margin-right: 2px;
        font-size: 16px;
        font-family: Arial;
        vertical-align: baseline !important;
      }
    }
  }
  .product-main .product-price .price-now span {
    vertical-align: middle !important;
  }
  .product-qiang {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
  }
}
.product-rxf-lab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fffaef;
  margin: 0 -0.12rem;
  padding: 0.07rem 0.12rem;
  color: #e90;
}
#productQiang {
  margin-bottom: 0;
  padding-bottom: 0.12rem;
}
.vip-mode {
  margin: 0 auto;
  border-radius: 10px;
  padding: 5px 12px;
  margin: 0 0 0.1rem;
  background: #f6f6f6;
  .vip-info-has {
    margin: 0;
    padding: 0.08rem 0.08rem 0.05rem 0;
    .vip-info-price {
      font-size: 14px;
      color: #222;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  }
  .vip-info-more {
    padding: 0 0 0 12px;
    font-size: 13px;
    width: auto;
    color: #222;
    background: none;
    position: relative;
  }
  .vip-info-more:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 20%;
    width: 1px;
    height: 60%;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.05);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
}

.vip-info .vip-info-more,
.vip-mode,
.vip-mode .vip-info-more {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
}
.vip-info,
.vip-mode {
  position: relative;
  font-size: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 -0.12rem 0.1rem;
  padding-left: 0.12rem;
  background: #fff5eb;
  min-height: 0.37rem;
}
.enterprise-purchase {
  background: #e8f1f6;
  box-shadow: 0 1px 0 0 #becbd3;
  height: 37px;
  padding-left: 0.12rem;
  margin: 0 -0.12rem 0.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.addyh {
  padding: 8px 0;
  color: #f60;
}
.blinkwords {
  font-size: 13px;
  color: #222;
  background: #fff;
}
.radiu-gray-box {
  padding: 12px;
  border-radius: 9px;
  background: #f6f6f6;
}
.mb10 {
  margin: 0 0 9px !important;
}
.order3-progress-super {
  padding: 0 0 0.4rem;
}
.red-cent-get {
  font-size: 10px;
  padding: 0 0 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
}
.product-main .inline-price .price-now,
.product-main .inline-price .price-origin {
  display: inline-block;
}
.product-main .product-price .price-now {
  color: #f42;
  font-size: 24px;
}
.product-main {
  //   position: fixed;
  //   left: 0;
  .product-title {
    .name {
      width: 3.546667rem;
      text-align: left;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-flex-basis: 1px;
      -ms-flex-preferred-size: 1px;
      flex-basis: 1px;
      -webkit-line-clamp: 2;
      word-wrap: break-word;
      overflow: hidden;
      margin: 0 0 8px;
      padding-right: 10px;
      font-size: 16px;
      font-weight: 700;
      color: #222;
    }
    .favirot {
      width: 30px;
      height: 30px;
      // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAABmZmZoaGhnZ2doaGhnZ2dra2uJiYlmZmZnZ2dpaWlmZmZmZmZmZmZnZ2dnZ2dnZ2dmZmZnZ2dnZ2dnZ2dvb29zc3NmZmZmZmZqampqampnZ2dmZmZmZmZnZ2dnZ2dnZ2doaGhnZ2doaGhmZmZnZ2dsbGxmZmZoaGhmZmZnZ2dnZ2dnZ2dmZmbUj+K/AAAALXRSTlMA+1R/PCkaA9GLIPVt3KNhl69wvEwLB+edJRWE7L/HWzMvkXt2ZxK1ReFP7tmFoBkRAAACeklEQVRIx+2X2ZaiMBCGEyAQCKuyqCyKu3b/7/96kwC20/aA0as5c+a7SKjAbyqVquRIplj6/pK8yYwCdPae1kKH9ZZ4DnAOzN/RbgDqeRTYvCFOgJCQEEhe1zIKMNkBlL0sXgDJ4MDiVa1Hhzhbaun6urw1dmEB1L1ZA0W4M9r8udJILugRbT/SCvRcEmNa6+JGkJKBNMANdzLEkNDPk3uwnPuoYx3c0yeFhE1lMzBn+Ugo2ByYPRE7ZATniZgBCJ0RbfjEbVICWIxmDUoySQwg1ngxPkH8B+2DSxNLMx9HzT4YWmrKHkvsUau/JcMWarEDzB9e74geIXD4PnLQL2r+48hcVXStKRbAkTyoPd1DBChuj1+aVvPqSIdDxIkCIIi6KEcQenPv+xRLOTp4Ko0tsNcSb9U2b2pIqgqSeqM2eqslNgGeQCJ2WbYTkCQcMLXESwoFjVddnOPB1IxYJNRkXx8vlRsi0j7x/Rn7Vhcz3yP/+aewzUx1x+E+dSKn3/rQ0KqpuE/waDBP3Y/lVaMhdhqcCck+irw3XXC7v4jap4nJmCFMxkrEjNlE4YtzHQRBgUq28ylxjd9QX2YrYpMT5zzARbbJZEGZio+PrlvLpTbBUF0GNOuq4l+PPor2JXGG091Y01pT7LuKBT7dDl+NWUfiGYbhIpbtVFk3+EbT7bBN1rgxdW+sbEVAaWMrVr3fVztN0xJb2drkCQbiLe7JyMVRP2BXIezjRVwH84yFdrTzPRUyPZcF3WbDn4WNpnhlFii6j5ccxV6ueYOGeL5kgVB144t2AlTl8DovBaqMhFiTK+5YZJTzIfvNjfIgK6XMydG6k5G/gl+6xk7hFgamdQAAAABJRU5ErkJggg==)no-repeat 0 0;
      background-size: 30px 30px;
    }
  }
  .product-sub {
    p {
      font-size: 13px;
      //   line-height: 0.18rem;
      color: #999;
    }
  }
}
.redtagitem {
  display: inline-block;
  background: #ffece8;
  border-radius: 8px;
  line-height: 17px;
  margin: 0 5px 0 0;
  padding: 0 6px;
  color: #f42;
  font-size: 11px;
}
.product-main {
  overflow: hidden;
  padding: 12px;
  background: #fff;
}
.service315-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  height: 0.4rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0.1rem 0 0.12rem;
  margin: -0.01rem -0.12rem;
  position: relative;
  z-index: 1;
  width: 320px;
  height: 40px;
  .logo {
    width: 40px;
    height: 31px;
  }
  .content {
    font-size: 14px;
    width: 226px;
    height: 20px;
    margin: 0 0.08rem;
    color: #e21f25;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.mt10 {
  margin: 9px 0 0 !important;
}

.additional-info,
.additional-info .info-item,
.additional-info .promotion {
  position: relative;
}
.additional-info {
  background: #fff;
  .info-label {
    height: 15px;
    display: inline-block;
    line-height: 15px;
    color: #999;
    font-size: 13px;
  }
}
#trigger_coupon_merge .info-content {
  font-size: 13px;
  margin-top: -1px;
  width: 80%;
}
.additional-info:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #eee;
  color: #eee;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.coupon {
  padding: 0.09rem 10px;
  padding-right: 0.32rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  .info-label {
    height: 24px;
    line-height: 24px;
  }

  .coupon-cell-ft {
    color: #666;
  }
  .coupon-score {
    font-size: 13px;
    padding: 3px 2px;
    color: #222;
  }
  .coupon-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    position: relative;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 2px;
    span.coupon-new {
      padding: 0;
      position: relative;
      border: none;
    }
    span {
      display: inline-block;
      position: relative;
      color: #222;
      height: 15px;
      line-height: 16px;
      margin-right: 8px;
      background: #fefbee;
      font-size: 11px;
      box-sizing: border-box;
    }
    span.coupon-new:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      bottom: -100%;
      right: -100%;
      border-top-width: 1px;
      border-right-width: 0;
      border-bottom-width: 1px;
      border-left-width: 0;
      border-color: #fb0;
      border-style: solid;
      color: #fb0;
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
      transform: scale(0.5);
      pointer-events: none;
    }
    span.coupon-new i.left {
      right: auto;
      top: -1px;
      left: -4px;
      height: 17px;
      // background: url(images/newwap/lingjuan-icon-left.png) 0 1px no-repeat;
      background-size: 20px 15px;
    }
    span.coupon-new .price {
      padding-right: 0.04rem;
      height: 100%;
      display: inline-block;
      border-left-width: 0;
      border-right-width: 0;
      background: #fc0;
      font-size: 10px;
    }
    span.coupon-new .desc {
      padding-left: 0.04rem;
      padding-right: 0.02rem;
      background-color: #fffae3;
      height: 100%;
      display: inline-block;
      color: #222;
      font-size: 11px;
      border-left-width: 0;
      border-right-width: 0;
    }
  }
}

#trigger_coupon_merge .info-content:after {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 12px;
  top: 20px;
  content: "\020";
  font-size: 12px;
  color: #bbb;
  margin: -8px -5px 0 5px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAABDElEQ…AyxjqtSQw5Uc1pmxZJk1OrDvYxjZ+8b0+TyiTf1P7HOwOSLYNRi+MAswAAAABJRU5ErkJggg==)no-repeat 0 0;
  background-size: contain;
}
#trigger_coupon_merge .get-quan-merge {
  display: block;
  vertical-align: top;
  color: #999;
  font-size: 0.62rem;
  line-height: 0.12rem;
  position: absolute;
  right: 0.3rem;
  top: 0.14rem;
}
.info-content {
  margin: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.shop-nearby {
  background: #fff;
  margin-bottom: 9px;
}
.fourth-cells-sec {
  background: #fbf2ff;
}
.fourth-cells {
  position: relative;
  overflow: hidden;
}
.fourth-cells .fourth-cell {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 10px;
}
.fourth-cells-sec .cell-primary {
  color: #9d5cb9;
}
.fourth-cells {
  .cell-primary {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    width: 0;
  }
  .cell-ft {
    text-align: right;
    color: #999;
    margin-right: 21px;
    margin-top: 1px;
  }
}
.fourth-cells-sec .ficon-hx:before {
  content: "\020";
  width: 20px;
  height: 20px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMV…L6nQCm31l+s1040KbBgyPcxgQMRic2RbB7Utss3o/xxj1FfygmFg8aIPXeAAAAAElFTkSuQmCC)no-repeat 0 0;
  background-size: 20px 20px;
  vertical-align: middle;
}
.ficon-hx:before {
  font-size: 20px;
  content: "\e612";
}
.icon-font:after,
.icon-font:before {
  display: inline-block;
  height: 20px;
  content: "";
  margin-right: 3px;
  font-size: 20px;
  font-family: sn-detail-font;
  -webkit-font-smoothing: antialiased;
  color: #333;
}
.icon-font:after,
.icon-font:before {
  display: inline-block;
  height: 20px;
  content: "";
  margin-right: 3px;
  font-size: 20px;
  font-family: sn-detail-font;
  -webkit-font-smoothing: antialiased;
  color: #333;
}
.fourth-cells-sec .cell-ft:after {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 21px;
  content: "\020";
  font-size: 12px;
  color: #bbb;
  margin: -10px 0 0 5px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABYWlDQ…ukcJFAAxcJUkoPnMdIwuodNP8oY1SDxsLXQpqpd0eLNL8tP5Ev/H8h2pKDAAAAAElFTkSuQmCC)no-repeat 100%;
  background-size: 15px 15px;
}
.address-colortype,
.successbtn {
  background: #fff;
}
.fourth-cells {
  position: relative;
  overflow: hidden;
}
.fourth-cells .address-select {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.fourth-cells .fourth-cell {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 10px;
}
.address-colortype .extra-info {
  color: #999;
  padding-left: 0;
}
.cell-tag-hd,
.zfb-tag {
  position: relative;
  color: #999;
}
.cell-tag-hd {
  top: 1px;
  display: block;
  font-size: 13px;
}
.fourth-cells .cell-primary {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 14px;
  width: 0;
}
.fourth-cells .cell-ft {
  text-align: right;
  color: #999;
  margin-right: 21px;
  margin-top: 1px;
}
.address-tips {
  font-size: 12px;
  color: #999;
  span {
    color: #f60;
  }
}
.fourth-cells .cell-ft:after {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 21px;
  content: "\020";
  font-size: 12px;
  color: #bbb;
  margin: -10px 0 0 5px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAABDElEQ…AyxjqtSQw5Uc1pmxZJk1OrDvYxjZ+8b0+TyiTf1P7HOwOSLYNRi+MAswAAAABJRU5ErkJggg==)no-repeat 100%;
  background-size: 15px 15px;
}
.cell-tag-hd,
.zfb-tag {
  position: relative;
  color: #999;
}
.cell-tag-hd {
  top: 1px;
  display: block;
  font-size: 13px;
}
.fourth-cells .cell-primary {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 14px;
  width: 0;
}
.pur-tips {
  color: #222;
  font-size: 14px;
}
.fourth-cells .service ul,
.jw-service-container .service ul {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.fourth-cells .service li,
.jw-service-container .service li {
  display: inline-block;
  margin: 0.03rem;
}
.fourth-cells .service li:before,
.jw-service-container .service li:before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(https://res.suning.cn/project/pdsWeb/wapV3/style/images/newwap/normal-support.png)
    no-repeat 0 0;
  margin-right: 3px;
  background-size: 12px 12px;
  vertical-align: middle;
}
.fourth-cells .service:after,
.jw-service-container .service:after {
  position: absolute;
  top: 9px;
  right: 10px;
  width: 20px;
  height: 20px;
  content: "\020";
  font-size: 12px;
  color: #bbb;
  margin: 1px 0 0 5px;
  // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAABDElEQ…AyxjqtSQw5Uc1pmxZJk1OrDvYxjZ+8b0+TyiTf1P7HOwOSLYNRi+MAswAAAABJRU5ErkJggg==)no-repeat 100%;
  background-size: 15px 15px;
}
.pulldetail {
  width: 100%;
  .cellprimary {
    height: 41px;
    background: #fff;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    li {
      display: inline-block;
      height: 39px;
      font-size: 14px;
      border-bottom: 3px solid #fff;
      line-height: 39px;
      margin: 0 7px;
    }
    .current {
      font-weight: 700;
      border-bottom: 3px solid #fad222;
      color: #000;
    }
  }
}
.awrap {
  display: block;
  position: relative;
  padding: 1.12rem 0.83rem;
  border-bottom: 1px solid #dcdcdc;
  color: #333;
  dl {
    dt {
      position: relative;
      font-size: 14px;
      color: #353d44;
      height: 30px;
    }
    dd {
      padding-top: 0;
      line-height: normal;
      margin-top: 0.2rem;
      color: #909090;
    }
  }

  // .cm:after {
  //   position: absolute;
  //   right: 10px;
  //   top: 20px;
  //   content: "\e600";
  //   font-size: 15px;
  //   font-family: sn-detail-font;
  //   -webkit-transform: rotate(-180deg);
  //   -ms-transform: rotate(-180deg);
  //   transform: rotate(-180deg);
  //   color: #999;
  //   margin: -10px -5px 0 5px;
  // }
}
.param {
  h3 {
    padding-top: 0.1rem;
    border-top: 1px dashed #dcdcdc;
    color: #353d44;
    font-weight: lighter;
    margin-top: 0.15rem;
    font-size: 100%;
  }
  ul {
    margin-top: 0.1rem;
    li {
      display: -webkit-box;
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
      div:first-child {
        min-width: 1.15rem;
        text-align: left;
      }
      div:nth-child(2) {
        max-width: 8.7rem;
        a {
          color: #909090;
          text-decoration: underline;
        }
      }
    }
  }
}
.cover-toggle {
  display: block;
  transform-origin: 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
  position: fixed;
  bottom: 0;
  z-index: 101;
  padding-bottom: 0;
  background: #fff;
  height: 66.66%;
  transition: transform 0.3s, -webkit-transform 0.3s;
  overflow: visible !important;
  width: auto !important;
  left: 3px !important;
  right: 3px !important;
  border-radius: 12px;
  .cover-head:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #eee;
    color: #eee;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
  .cover-head {
    border-bottom: 1px solid #eee;
    position: relative;
    min-height: 70px;
    height: auto;
    padding: 10px 14px 0;
    top: 0;
    left: 0;
    width: 100%;
    .img-box {
      position: absolute;
      width: 114px;
      height: 114px;
      top: -15px;
      left: 15px;
      margin: 0;
      border: 1px solid #eee;
      box-sizing: border-box;
      border-radius: 12px !important;
      overflow: hidden !important;
      background-size: contain;
      img {
        width: 114px;
        height: 114px;
        box-sizing: border-box;
      }
    }
    .product {
      margin: 0 0 0 120px;
      min-height: 94px;
      padding: 0 0 10px;
      flex-basis: 0;
      max-width: 100%;
      -webkit-box-flex: 1;
      .price {
        display: inline-block;
        font-size: 14px;
        color: #f42;
        margin-top: 5px;
        p {
          i {
          }
        }
      }
      .kcinfo {
        margin: 2px 0;
        font-size: 10px;
        color: #999;
        em {
          font-weight: 500;
        }
      }
      .productname {
      }
    }
  }

  .cover-body {
    height: 360px;
    position: static;
    -webkit-box-flex: 1;
    flex: 1;
    // overflow-y: auto;
    // overflow-x: hidden;
    top: 74px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    overflow: scroll;
    .slider {
      height: 960px;
      .select-list {
        transform-origin: 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        li {
          padding: 0.12rem 10px;
          position: relative;
          h2 {
            font-size: 14px;
          }
          .clusteritems {
            label {
              transform-origin: 0px 0px;
              opacity: 1;
              transform: scale(1, 1);
              display: inline-block;
              background: #f6f6f6;
              margin: 0.12rem 0.12rem 0 0;
              padding: 0 1em;
              height: 28px;
              line-height: 28px;
              text-align: center;
              border-radius: 6px;
              box-sizing: border-box;
              display: inline-block;
              background: #f5f5f5;
              margin: 0.92rem 0.92rem 0 0;
              padding: 0 1em;
              height: 28px;
              line-height: 28px;
              text-align: center;
              border-radius: 2px;
              box-sizing: border-box;
              border: 1px solid #f5f5f5;
              label.disabled {
                color: #cacaca;
              }
            }
            .checked {
              color: #222;
              border: 1px solid #fc0;
              background: #ffeda2;
            }
          }
        }
        li:after {
          content: " ";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          border-bottom: 1px solid #eee;
          color: #eee;
          -webkit-transform-origin: 0 100%;
          -ms-transform-origin: 0 100%;
          transform-origin: 0 100%;
          -webkit-transform: scaleY(0.5);
          -ms-transform: scaleY(0.5);
          transform: scaleY(0.5);
          width: 94%;
          left: 3%;
        }
      }
      .number {
        transform-origin: 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        padding: 0.42rem 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        display: flex;
        justify-content: space-between;
        h2 {
          font-size: 14px;
        }
        .item {
          border: 1px solid #999;
          border-radius: 2px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 0;
          a {
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            position: relative;
            font-size: 24px;
          }
          .decrease {
          }
          .decrease::after {
            content: " ";
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            height: 100%;
            border-right: 1px solid #999;
            color: #999;
            -webkit-transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleX(0.5);
            -ms-transform: scaleX(0.5);
            transform: scaleX(0.5);
            height: 90%;
            top: 5%;
          }

          input {
            height: 24px;
            line-height: 24px;
            // min-width: 0.35rem;
            // max-width: 0.55rem;
            box-sizing: border-box;
            padding: 0 0.02rem;
            border: 0;
            border-radius: 0;
            outline: 0;
            background-color: transparent;
            font-size: inherit;
            font-weight: 700;
            color: inherit;
            vertical-align: top;
            text-align: center;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            font-size: 12px;
          }
          .increase {
          }
          .increase:before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 1px;
            height: 100%;
            border-left: 1px solid #999;
            color: #999;
            -webkit-transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleX(0.5);
            -ms-transform: scaleX(0.5);
            transform: scaleX(0.5);
            height: 90%;
            top: 5%;
          }
        }
      }
      .number::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #eee;
        color: #eee;
        -webkit-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        transform: scaleY(0.5);
        width: 94%;
        left: 3%;
      }
      .yb-wrap {
        transform-origin: 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        padding: 14px 0 0;
        background: #f2f2f2;
        .attached-mode {
          background: #fff;
          margin: 0 0 12px;
          .title {
            font-size: 13px;
            color: #222;
            font-weight: 600;
            padding-left: 10px;
          }
        }
      }
    }
  }
}
.cover-action {
  display: -webkit-flex;
  flex-wrap: wrap;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3px;
  // position: relative !important;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  .addtocart {
    -webkit-box-flex: 1;
    flex: 1;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    border-radius: 9px 2px 2px 9px;
    margin: 0 3px 0 0;
    background: #fc0;
    flex-basis: 0;
    max-width: 100%;
    width: 0;
    padding: 0;
    position: relative;
    height: 35px;
    line-height: 35px;
    color: #fff;
    text-align: center;
    display: block;
    font-size: 14px;
  }
  .buy {
    -webkit-box-flex: 1;
    flex: 1;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    background: #f60;
    border-radius: 2px 9px 9px 2px;
    flex-basis: 0;
    max-width: 100%;
    width: 0;
    padding: 0;
    position: relative;
    height: 35px;
    line-height: 35px;
    color: #fff;
    text-align: center;
    display: block;
    font-size: 14px;
  }
}
.cover-close {
  display: block;
  transform-origin: 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  z-index: 140;
  background: url(../images/close.png) no-repeat 50%;
  background-size: 15px 15px;
  .close {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    top: 0;
    z-index: 1000;
  }
}
</style>
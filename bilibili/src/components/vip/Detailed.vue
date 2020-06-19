<template>
  <div>
    <VipHeader></VipHeader>
    <div class="buyticket">
      <div class="bread-wrapper">
        <span>
          <a href="//www.bilibili.com">Bilibili</a>
        </span>
        <span class="symbol">&gt;</span>
        <span>
          <a href="./home.html">会员购</a>
        </span>
        <span class="symbol">&gt;</span>
        <span class="project-name">{{ title }}</span>
      </div>
      <div class="whole-detail-info-wrapper">
        <div
          class="detail-img-icon no_pic"
          :style="{ backgroundImage: 'url(' + vippic + ')' }"
        ></div>
        <div class="detail-info-wrapper">
          <div class="product-info-name">
            <span class="title">{{ title }}</span>
          </div>
          <div class="product-info-time-wrapper">
            <div class="product-info-time-title">时间：</div>
            <div class="product-info-time">{{ time }}</div>
          </div>
          <div class="vuene-wrapper">
            <div class="title">场馆：</div>
            <div class="vuene-info-content">
              <div class="vuene-name">{{ address1 }}</div>
              <div class="address-name">{{ address2 }}</div>
              <div class="address-icon"></div>
              <div class="check-map">查看地图</div>
            </div>
          </div>
          <!-- -------------------- -->
          <div class="login-show-wrapper">
            <ul class="clearfix mr4">
              <li class="title">场次：</li>
              <li class="screens">
                <div
                  class="selectable-option redboder active"
                  @click="redboder('0')"
                  id="asd"
                >
                  6月25日
                </div>
                <div class="selectable-option redboder" @click="redboder('1')">
                  6月26日
                </div>
                <div class="selectable-option redboder" @click="redboder('2')">
                  6月27日
                </div>
                <div class="selectable-option unable">
                  4月4日
                </div>
                <div class="selectable-option unable">
                  4月5日
                </div>
                <div class="selectable-option unable">
                  4月6日
                </div>
              </li>
            </ul>
            <!-- ------- -->
            <ul class="clearfix">
              <li class="title">价格：</li>
              <li class="tickets">
                <div class="selectable-option active">
                  ¥{{ price }}(预售票)预售中
                </div>
                <div class="selectable-option unable">
                  ¥60(现场票)2020-06-25 00:00:00开售
                </div>
              </li>
            </ul>
            <!-- -------------- -->
            <ul class="clearfix">
              <li class="title">数量：</li>
              <li class="num-content">
                <div class="ticket-count">
                  <div class="count-reduce  active" @click="minus"></div>
                  <div class="count-number">{{ number }}</div>
                  <div class="count-plus active" @click="add"></div>
                </div>
              </li>
            </ul>
            <!-- ---- -->
            <div class="supplement">
              <div class="express-info">
                <!-- <i class="icon-small-circle"></i> -->
                <span>*电子票/兑换票·无需配送</span>
                <!---->
              </div>
              <!---->
              <div class="refund-info">
                <!-- <i class="icon-small-circle"></i> -->
                <span class="">*不支持7天无理由退票</span>
              </div>
            </div>
            <!-- ---- -->
            <div class="product-buy-wrapper">
              <div class="product-buy enable" @click="goto">
                <div>立即购票</div>
              </div>
              <div class="want-wrapper">
                <span class="want-icon active"></span>
                <div class="want-content">
                  <!---->
                  <p>1250人想去</p>
                </div>
              </div>
            </div>
            <!-- --- -->
          </div>
        </div>
      </div>
    </div>
    <!-- --**-- -->
    <div class="tabs-wrapper ticket-system-container">
      <div class="tabs">
        <div class="tabs-item active">
          公告
        </div>
        <div class="tabs-item">
          活动详情
        </div>
        <div class="tabs-item">
          讨论
        </div>
      </div>
    </div>
    <!-- **** -->
    <div class="detail-content-wrapper">
      <div class="detail-content">
        <div class="ticket-system-container">
          <div class="scroll-wrapper announcement-wrapper">
            <div class="announcement-header">
              <div class="announcement-icon"></div>
              <div class="announcement-title">公告</div>
              <div class="announcement-list ">
                <div class="announcement-item active">
                  <div class="announcement-item-time">04.03</div>
                  <div class="circle"></div>
                  <div class="announcement-item-desc">
                    <a href="#">展会地址变更</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- *+* -->
        <div class="activity-info-wrapper ticket-system-container">
          <div class="activity-info scroll-wrapper">
            <div class="activity-info-header">
              <div class="icon icon-activity"></div>
              <div class="guest-title">活动详情</div>
            </div>
            <div class="activity-info-body">
              <div>
                <div>
                  <div class="info-header">
                    <span>基础信息</span>
                  </div>
                  <div class="info-body">
                    <ul>
                      <li>
                        <div>活动日期</div>
                        <div>2020/6/25-6/27 10:00-17:00</div>
                      </li>
                      <li>
                        <div>场馆地址</div>
                        <div>
                          福建省 厦门市 海沧区 沧江会展中心 沧江会展中心
                        </div>
                      </li>
                      <li>
                        <div>儿童说明</div>
                        <div>全部儿童凭全价票入场</div>
                      </li>
                      <li>
                        <div>入场次数</div>
                        <div>单场票，1次入场有效</div>
                      </li>
                      <li>
                        <div>入场说明</div>
                        <div>
                          电子票，凭购票二维码验证入场（订单或订单截图无效）
                        </div>
                      </li>
                      <li>
                        <div>退换说明</div>
                        <div>
                          本项目不支持退换，如无法正常使用，还请自行处理，给您带来不便敬请谅解
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="info-header">
                    <span>活动介绍</span>
                  </div>
                  <div class="info-body">
                    <div class="info-content">
                      <p>
                        <img src="../../assets/images-vip/con1.jpeg" />
                      </p>
                      <p>招商 QQ1702565886</p>
                      <p>COMIC GAME 动漫嘉年华官方游客群：953065974</p>
                      <p>
                        <img src="../../assets/images-vip/con2..jpeg" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- *+* -->
      </div>
      <!-- *-* -->
      <div class="recommend-wrapper">
        <div
          class="ticket-tips-wrapper"
          ticket-tips="COMIC GAME动漫嘉年华等你来玩"
        >
          <div class="ticket-tips">
            <div class="ticket-tips-header"><span></span>购票须知</div>
            <div class="ticket-tips-content">
              <p>1、会员购在线售票为电子票或纸质票。</p>
              <p>
                2、如您购买的是电子票，入场时请在bilibili
                APP中【订单中心】打开电子票检票入场<strong>（部分活动需兑换实体票入场）；电子票不得转售，</strong>请在正规途径购买；<strong
                  >电子票截图无法入场。</strong
                >
              </p>
              <p>
                3、如您购买的是纸质票，<strong>需在购票时填写准确配送信息，</strong>纸质票将在活动开始之前寄出，邮费由用户承担；因纸质票的特殊性，<strong>遗失不补且无法挂失，</strong>请您保管好购买到的票品。
              </p>
              <p>4、部分活动不提供现场售票服务，请您提前购买。</p>
              <p>
                5、因票品具有稀缺性和时效性的特点，一旦退货将会影响二次销售，<strong>票品均不支持七天无理由退票，</strong>请您理解并审慎购买，<strong>并非所有项目主办方都支持因个人原因发起的退票，</strong>具体请以各商品展示页说明信息为准，请您在购买前仔细阅读商品信息。
              </p>
              <p>
                6、<strong>若所购项目主办方支持因个人原因退票，您在因个人原因退票时需支付一定比例的手续费,</strong>具体比例您可在<span>《bilibili购票服务协议》</span>中查询。
              </p>
              <p>
                7、为保障您的人身安全，主办方在人流高峰可能会采取临时现场限流措施，如对您的正常观展产生影响，敬请谅解。
              </p>
              <p>
                8、若有其他问题请联系客服：客服入口在移动端APP “我的”
                个人中心，点击“我的客服”，选择“在线客服”，即可咨询。
              </p>
              <p>9、<span>《会员购服务协议》</span></p>
            </div>
          </div>
          <div class="merchant-section">
            <div class="merchant-header"><span></span>主办方信息</div>
            <div class="baseinfo-wrapper">
              <div class="content-item">
                <div class="title">主办名称</div>
                <div class="content"></div>
              </div>
              <div class="content-item">
                <div class="title">
                  营业执照
                  <div class="fold-btn">
                    <span class="text">查看图片</span>
                    <i class="fold-btn-icon open"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="merchant-section">
            <div class="baseinfo-wrapper">
              <div class="content-item notitle">
                <div class="title">联系我们</div>
                <div class="content">
                  如果您有合作意向请与我们联系:<br />
                  kfbd@bilibili.com
                </div>
              </div>
            </div>
          </div>
          <div class="rec-list-wrapper">
            <div class="rec-list">
              <div class="rec-item">
                <div
                  class="rec-item-banner"
                  style='background-image: url("https://i0.hdslb.com/bfs/openplatform/201912/UpA5hrVr1575601124515.jpeg");'
                ></div>
                <div class="rec-item-name">沈阳·第四届SSCA国际动漫博览会</div>
                <div class="rec-item-time">2020.10.01-10.02</div>
                <div class="rec-item-vuene">新世界博览馆（K11）</div>
              </div>
            </div>
          </div>
          <!---->
          <!---->
          <!---->
        </div>
      </div>
      <!-- *-* -->
    </div>
    <!-- **** -->
    <Footer></Footer>
  </div>
</template>

<script>
import vippic1 from "../../assets/images-vip/vippic1.jpeg";
import VipHeader from "@/components/vip/VipHeader.vue"; /*会员购头部*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  components: {
    VipHeader,
    Footer
  },
  data() {
    return {
      number: 1,
      vippic: vippic1,
      title: "厦门·COMIC GAME 动漫嘉年华",
      time: "2020.06.25 10:00 - 06.27 17:00",
      address1: "沧江会展中心",
      address2: "马青路91号",
      i: 0,
      price: 50,
      total: ""
    };
  },
  methods: {
    goto() {
      console.log(this.number); //门票张数
      this.a = document.getElementById("asd").innerHTML; //获取场次日期
      console.log(this.a); //日期
      this.total = this.price * this.number;
      console.log(this.total); //总价
      this.$router.push({
        name: "Shopcar",
        params: {
          date: this.a,
          title: this.title,
          address: this.address1,
          price: this.price,
          number: this.number,
          total: this.total,
          img: this.vippic
        }
      });
    },

    minus() {
      this.number = this.number > 1 ? this.number - 1 : 1;
    },
    add() {
      this.number++;
    },
    redboder(num) {
      var i = this.i;
      this.a = document.getElementsByClassName("redboder");
      // console.log(this.a);
      if (num == 0) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].className = "selectable-option redboder";
          this.a[i].setAttribute("id", "");
        }
        this.a[num].className = "selectable-option redboder active";
        this.a[num].setAttribute("id", "asd");
      } else if (num == 1) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].className = "selectable-option redboder";
          this.a[i].setAttribute("id", "");
        }
        this.a[num].className = "selectable-option redboder active";
        this.a[num].setAttribute("id", "asd");
      } else if (num == 2) {
        for (i = 0; i <= this.a.length - 1; i++) {
          this.a[i].className = "selectable-option redboder";
          this.a[i].setAttribute("id", "");
        }
        this.a[num].className = "selectable-option redboder active";
        this.a[num].setAttribute("id", "asd");
      }
    }
  }
};
</script>

<style>
.ticket-tips-wrapper .rec-item:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.ticket-tips-wrapper
  .merchant-section
  .baseinfo-wrapper
  .content-item
  .title
  .fold-btn:hover {
  color: #fb7299;
  cursor: pointer;
}
.ticket-tips-wrapper .rec-item .rec-item-time,
.ticket-tips-wrapper .rec-item .rec-item-vuene {
  color: #99a2aa;
  font-size: 12px;
}
.ticket-tips-wrapper .rec-item .rec-item-name {
  margin-top: 10px;
  font-size: 14px;
  color: #212121;
  line-height: 21px;
}
.ticket-tips-wrapper .rec-item-banner {
  width: 250px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ticket-tips-wrapper .rec-item {
  cursor: pointer;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 18px 20px 13px;
  background: #fff;
  border: 1px solid #e7ecf1;
  border-radius: 4px;
}
.ticket-tips-wrapper
  .merchant-section
  .baseinfo-wrapper
  .content-item
  .content {
  font-size: 12px;
  color: #212121;
  line-height: 18px;
  margin-top: 10px;
}
.ticket-tips-wrapper .merchant-section .baseinfo-wrapper .notitle {
  margin-top: 0;
}
.ticket-tips-wrapper
  .merchant-section
  .baseinfo-wrapper
  .content-item
  .title
  .fold-btn
  .fold-btn-icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  background-size: 100% 100%;
}
.ticket-tips-wrapper
  .merchant-section
  .baseinfo-wrapper
  .content-item
  .title
  .fold-btn
  .open {
  background-image: url(../../assets/images-vip/dddrow.png);
}
.ticket-tips-wrapper
  .merchant-section
  .baseinfo-wrapper
  .content-item
  .title
  .fold-btn {
  position: absolute;
  display: flex;
  align-items: center;
  color: #999;
  bottom: 0;
  right: 4px;
  font-weight: 400;
}
.ticket-tips-wrapper .merchant-section .baseinfo-wrapper .content-item .title {
  background-color: #f4f4f4;
  font-size: 12px;
  padding: 0 10px;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
  position: relative;
}
.ticket-tips-wrapper .merchant-section .baseinfo-wrapper .content-item {
  margin-top: 16px;
}
.ticket-tips-wrapper .merchant-section .baseinfo-wrapper {
  width: 100%;
}
.ticket-tips-wrapper .merchant-section .merchant-header span {
  vertical-align: top;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  background-image: url(../../assets/images-vip/iii.png);
}
.ticket-tips-wrapper .merchant-section .merchant-header {
  font-size: 16px;
  color: #212121;
  line-height: 16px;
}
.ticket-tips-wrapper .merchant-section {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 20px;
}
.ticket-tips-wrapper .ticket-tips-content span {
  color: #00f;
  cursor: pointer;
}
.ticket-tips-wrapper .ticket-tips-content {
  padding-bottom: 20px;
  line-height: 20px;
}
.ticket-tips-wrapper .ticket-tips-header span {
  vertical-align: top;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  background-image: url(../../assets/images-vip/qqiu.png);
}
.ticket-tips-wrapper .ticket-tips-header {
  padding: 20px 0;
  font-size: 16px;
  color: #212121;
  line-height: 16px;
}
.ticket-tips-wrapper .ticket-tips {
  margin-bottom: 10px;
  border: 1px solid #e7ecf1;
  border-radius: 4px;
  padding: 0 20px;
  background: #fff;
}
.recommend-wrapper {
  margin-top: 10px;
  width: 290px;
  box-sizing: border-box;
  margin-left: 20px;
}
.info-content img {
  max-width: 788px;
  height: auto;
  background-size: 100% 100%;
  margin: 20px 0;
}
.info-content p {
  font-size: 14px;
}
.info-content {
  word-break: break-all;
}
.info-body li {
  margin-top: 10px;
}
.info-body li:first-child {
  margin-top: 0;
}
.info-body {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
}
.info-header span {
  font-size: 16px;
  color: #212121;
  margin-left: 10px;
  font-weight: 700;
}
.info-header {
  background-color: #f4f4f4;
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 30px;
}
.activity-info .icon-activity {
  margin-right: 10px;
  width: 18px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url(../../assets/images-vip/mmusic.png);
  background-size: 100% 100%;
}
.activity-info .activity-info-header {
  display: flex;
  font-size: 16px;
  color: #212121;
  line-height: 16px;
}
.activity-info {
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
  background: #fff;
  cursor: auto;
  display: inline-block;
  width: 850px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #e7ecf1;
  border-radius: 4px;
  box-sizing: border-box;
}
/* *+* */
.announcement-item .announcement-item-desc {
  margin-left: 10px;
}
.announcement-item .circle {
  border-radius: 50%;
  width: 11px;
  height: 11px;
  background: #b6c2cc;
  position: relative;
}
.announcement-item.active .circle {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(../../assets/images-vip/circle.png);
}
.announcement-item .announcement-item-time {
  color: #99a2aa;
  width: 50px;
  margin-right: 10px;
}
.announcement-item.active .announcement-item-time {
  color: #f25d8e;
}
.announcement-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 15px;
}
.announcement-list {
  /* padding: 0 20px; */
  padding-top: 10px;
  /* margin-top: 10px; */
  margin-left: -30px;
}
.announcement-title {
  font-size: 16px;
  color: #212121;
  line-height: 16px;
}
.announcement-icon {
  margin-right: 10px;
  width: 18px;
  height: 16px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(../../assets/images-vip/blabla.png);
}
.announcement-wrapper .announcement-header {
  display: flex;
}
.announcement-wrapper {
  width: 850px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #e7ecf1;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
}
.ticket-system-container {
  width: 1160px;
  margin: 0 auto;
}
.detail-content {
  width: 850px;
  box-sizing: border-box;
}
.detail-content-wrapper {
  display: flex;
  width: 1160px;
  margin: 0 auto;
}
.tabs-wrapper .tabs .tabs-item {
  position: relative;
  cursor: pointer;
  font-size: 14px;
  width: 140px;
  text-align: center;
}
.tabs-wrapper .tabs .tabs-item.active:before {
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  content: "";
  top: 45px;
  width: 30px;
  height: 3px;
  background: #f25c8e;
  border-radius: 4px;
}
.tabs-wrapper .tabs .tabs-item {
  position: relative;
  cursor: pointer;
  font-size: 14px;
  width: 140px;
  text-align: center;
}
.tabs-wrapper .tabs .tabs-item.active {
  color: #f25c8e;
}
.tabs-wrapper .tabs {
  display: flex;
  margin-top: 20px;
  line-height: 50px;
}
.tabs-wrapper {
  user-select: none;
  z-index: 9;
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.ticket-system-container {
  width: 1160px;
  margin: 0 auto;
}
.whole-detail-info-wrapper
  .product-buy-wrapper
  .want-wrapper
  .want-content
  p:hover {
  color: #fb7299;
}
.whole-detail-info-wrapper .product-buy-wrapper .want-wrapper .want-content p {
  font-size: 12px;
  line-height: 50px;
  color: #212121;
  cursor: default;
}
.whole-detail-info-wrapper .product-buy-wrapper .want-wrapper .want-content {
  position: relative;
}
.whole-detail-info-wrapper .product-buy-wrapper .want-wrapper .want-icon {
  float: left;
  width: 22px;
  height: 22px;
  margin: 14px 5px 14px 0;
  background-size: 16px 16px;
}
.whole-detail-info-wrapper
  .product-buy-wrapper
  .want-wrapper
  .want-icon.active {
  background: url(../../assets/images-vip/heart1.png) 50% no-repeat;
  background-size: contain;
}
.whole-detail-info-wrapper .product-buy-wrapper .want-wrapper {
  width: 240px;
  height: 50px;
  margin-left: 17px;
  cursor: pointer;
}
.buyticket .product-buy {
  width: 240px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  cursor: pointer;
  background: #e4eaef;
  color: #99a2aa;
}
.buyticket .product-buy.enable {
  color: #fff;
  background-image: linear-gradient(-48deg, #ff6a9c, #fe8574);
  box-shadow: 0 3px 4px 0 #fdb8cc;
}
.whole-detail-info-wrapper .product-buy-wrapper {
  margin-left: 57px;
  margin-top: 30px;
  display: flex;
}
.whole-detail-info-wrapper .detail-info-wrapper .supplement .refund-info span {
  vertical-align: middle;
  font-size: 12px;
  color: #999;
}
/* .whole-detail-info-wrapper .detail-info-wrapper .supplement .icon-small-circle {
    display: inline-block;
    vertical-align: middle;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI0cHgiIHZpZXdCb…AgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    background-size: 100% 100%;
    height: 4px;
    width: 4px;
} */
.whole-detail-info-wrapper .detail-info-wrapper .supplement .refund-info {
  margin-left: 40px;
  display: inline-block;
  cursor: pointer;
}
.whole-detail-info-wrapper .detail-info-wrapper .supplement .express-info span {
  vertical-align: middle;
  font-size: 12px;
  color: #999;
}
/* .whole-detail-info-wrapper .detail-info-wrapper .supplement .icon-small-circle {
    display: inline-block;
    vertical-align: middle;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI0cHgiIHZpZXdCb…AgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    background-size: 100% 100%;
    height: 4px;
    width: 4px;
} */
.whole-detail-info-wrapper .detail-info-wrapper .supplement .express-info {
  margin-left: 60px;
  display: inline-block;
}
.whole-detail-info-wrapper .detail-info-wrapper .supplement {
  margin-top: 20px;
}
.ticket-count .count-plus:after {
  position: absolute;
  content: "";
  font-size: 0;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background: url(../../assets/images-vip/+++.png) 50% no-repeat;
  background-size: contain;
}
/* .ticket-count .count-plus.active::after {
  background: url(../../assets/images-vip/+++.png) 50% no-repeat;
  background-size: auto;
  background-size: contain;
} */
.ticket-count .count-plus {
  margin-right: 13px;
  position: relative;
  right: 0;
  border-top-right-radius: 0.133rem;
  border-bottom-right-radius: 0.133rem;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.ticket-count .count-number {
  flex: 1 1;
  width: 1.44rem;
  height: 1.013rem;
  line-height: 1.013rem;
  left: 1.013rem;
  text-align: center;
}
.ticket-count .count-reduce:before {
  position: absolute;
  content: "";
  font-size: 0;
  width: 14px;
  height: 14px;
  background: url(../../assets/images-vip/---.png) 50% no-repeat;
  background-size: contain;
}
/* .ticket-count .count-reduce.active:before {
    background: url(../../assets/images-vip/index----.png) 50% no-repeat;
    background-size: contain;
} */
.ticket-count .count-reduce {
  margin-left: 13px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  border-top-left-radius: 0.133rem;
  border-bottom-left-radius: 0.133rem;
}
.ticket-count {
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 3px;
  border: 1px solid #ccd0d7;
  width: 158px;
  line-height: 38px;
}
.whole-detail-info-wrapper .detail-info-wrapper .clearfix .num-content {
  display: flex;
}
.selectable-option.unable {
  color: #b8c0cc;
  border-color: #e5e9ef;
  background-color: #f4f5f7;
  cursor: not-allowed;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.selectable-option {
  display: inline-block;
  position: relative;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 30px;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.selectable-option.active:after {
  position: absolute;
  content: "";
  font-size: 0;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-width: 0 0 18px 18px;
  border-color: transparent transparent #f25d8e;
}
.selectable-option.active:before {
  display: inline-block;
  position: absolute;
  content: "";
  font-size: 0;
  line-height: 0;
  width: 6px;
  height: 4px;
  right: 1px;
  bottom: 3px;
  border: 1px solid #fff;
  border-width: 0 0 2px 2px;
  transform: rotate(-43deg);
  z-index: 10;
}
.selectable-option {
  display: inline-block;
  position: relative;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 30px;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.selectable-option.active {
  height: 38px;
  line-height: 38px;
  color: #f25d8e;
  border: 1px solid #f25d8e;
  box-shadow: inset 0 0 0 1px #f25d8e;
}
.whole-detail-info-wrapper .detail-info-wrapper .clearfix .screens,
.whole-detail-info-wrapper .detail-info-wrapper .clearfix .tickets {
  flex: 1 1;
}
.whole-detail-info-wrapper .detail-info-wrapper .clearfix .title {
  line-height: 38px;
  font-size: 14px;
  color: #99a2aa;
  margin-right: 15px;
}
.whole-detail-info-wrapper .detail-info-wrapper .clearfix {
  margin-top: 10px;
  display: flex;
}
.whole-detail-info-wrapper .detail-info-wrapper .clearfix.mr4 {
  margin-top: 14px;
}
.whole-detail-info-wrapper .detail-info-wrapper .vuene-wrapper .check-map {
  cursor: pointer;
  font-size: 12px;
  color: #6d757a;
  line-height: 14px;
}
.whole-detail-info-wrapper
  .detail-info-wrapper
  .vuene-wrapper
  .vuene-info-content
  .check-map {
  flex: 1 1;
}
.whole-detail-info-wrapper .detail-info-wrapper .vuene-wrapper .address-icon {
  margin-left: 15px;
  margin-right: 5px;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(../../assets/images-vip/address.png);
}
.whole-detail-info-wrapper
  .detail-info-wrapper
  .vuene-wrapper
  .vuene-info-content
  .address-name {
  margin-right: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  font-size: 12px;
  color: #99a2aa;
  line-height: 14px;
  max-width: 250px;
}
.whole-detail-info-wrapper
  .detail-info-wrapper
  .vuene-wrapper
  .vuene-info-content
  .vuene-name {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 430px;
}
.whole-detail-info-wrapper
  .detail-info-wrapper
  .vuene-wrapper
  .vuene-info-content {
  display: flex;
  align-items: center;
}
.whole-detail-info-wrapper .detail-info-wrapper .vuene-wrapper .title {
  line-height: 38px;
  font-size: 14px;
  color: #99a2aa;
  margin-right: 15px;
}
.whole-detail-info-wrapper .detail-info-wrapper .vuene-wrapper {
  padding-bottom: 8px;
  margin-top: 10px;
  align-items: center;
  display: flex;
  border-bottom: 1px dashed #e7ecf1;
}
.product-info-time-wrapper .product-info-time {
  font-size: 14px;
  color: #222;
  line-height: 14px;
}
.product-info-time-wrapper .product-info-time-title {
  font-size: 14px;
  color: #99a2aa;
  line-height: 14px;
  margin-right: 15px;
}
.product-info-time-wrapper {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.whole-detail-info-wrapper .detail-info-wrapper .product-info-name .title {
  display: inline-block;
  width: 750px;
  font-size: 18px;
  color: #222222;
  font-weight: normal;
}
.whole-detail-info-wrapper .detail-info-wrapper .product-info-name {
  display: flex;
  align-items: flex-start;
  font-size: 18px;
}
.whole-detail-info-wrapper .detail-info-wrapper {
  width: 840px;
}
.whole-detail-info-wrapper .detail-img-icon {
  margin-right: 20px;
  width: 300px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5), 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
.whole-detail-info-wrapper {
  background: #fff;
  width: 1160px;
  margin: auto;
  display: flex;
}
.bread-wrapper .project-name {
  color: #99a2aa;
}
.bread-wrapper span {
  color: #000;
  font-size: 12px;
  margin-right: 5px;
}
.bread-wrapper span.symbol {
  margin-bottom: 1px;
}
.bread-wrapper span {
  color: #000;
  font-size: 12px;
  margin-right: 5px;
}
.bread-wrapper {
  width: 1160px;
  margin: auto;
  background: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
}
.buyticket {
  background: #fff;
  width: 100%;
  padding-bottom: 58px;
}
</style>

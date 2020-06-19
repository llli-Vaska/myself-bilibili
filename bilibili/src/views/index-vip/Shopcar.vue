<template>
  <div>
    <VipHeader></VipHeader>
    <div class="detail-content-wrapper">
      <div class="confirmorder-container">
        <h1>订单信息</h1>
        <div class="project-info">
          <table>
            <tbody>
              <tr>
                <th class="spppp">商品</th>
                <!---->
                <th>单价</th>
                <th>数量</th>
                <!---->
                <th>合计</th>
              </tr>
              <tr>
                <td>
                  <div class="project-content">
                    <div class="content-left">
                      <img :src="myimg" />
                    </div>
                    <div class="content-right">
                      <h1>
                        {{ mytitle
                        }}<!---->
                      </h1>
                      <p>{{ myaddress }}</p>
                      <p class="ticket-name">
                        <span :title="mydate">{{ mydate }}</span> <span></span>
                        <span title="预售票">预售票</span>
                      </p>
                      <div class="ticket-type clearfix">
                        <span></span>电子票
                      </div>
                      <!---->
                    </div>
                  </div>
                </td>
                <!---->
                <td>
                  <div>￥{{ myprice }}</div>
                </td>
                <td>
                  <div>{{ mynumber }}张</div>
                </td>
                <!---->
                <td class="total">
                  <p>￥{{ mytotal }}</p>
                  <p>(不含运费)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- ---- -->
        <div class="discounts">
          <div class="discounts-list"><p class="">暂无可用优惠券</p></div>
        </div>
        <!-- --- -->
        <!-- --- -->
        <!-- --*- -->
        <!-- --- -->
        <div class="total-container clearfix">
          <div>
            商品总额<span>￥{{ mytotal }}</span>
          </div>
          <div>
            应付金额<span class="total">￥{{ mytotal }}</span>
          </div>
        </div>
        <!--  -->
        <div class="confirm-bottom">
          <div class="check-lists">
            <div class="service-term">
              <span class="check-icon checked" @click="gougou"></span
              >我已阅读并同意
              <span class="term-content">《bilibili购票服务协议》</span>
              <span class="term-content">《会员购服务协议》</span>
            </div>
          </div>
          <div class="confirm-paybtn active" @click="next">
            下一步支付,￥{{ mytotal }}
          </div>
        </div>

        <!--  -->
        <div class="pay-shadow">
          <div class="pay-qrcode">
            <div class="close-btn" @click="close"></div>
            <h1 id="shadowpay">扫码支付</h1>
            <!---->
            <div id="payQRCode" class="qrcode">
              <canvas width="249" height="249"></canvas
              ><img alt="Scan me!" src="../../assets/images-vip/canvas.png" />
            </div>
            <p>
              支持：<span class="wechat">微信</span
              ><span class="alipay">支付宝</span><span class="qq">QQ</span>
            </p>
            <div class="pay-spend">
              不使用扫码支付，请前往<span class="checkstand">收银台</span>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="toast_wrapper">请先阅读并同意订票服务条款</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import VipHeader from "@/components/vip/VipHeader.vue"; /*会员购头部*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  components: {
    VipHeader,
    Footer
  },
  data() {
    return {
      mydate: "",
      mytitle: "",
      myaddress: "",
      myprice: "",
      mynumber: "",
      mytotal: "",
      myimg: ""
    };
  },
  methods: {
    close() {
      this.c = document.getElementsByClassName("pay-shadow");
      // console.log(this.c);
      this.c[0].style.display = "none";
    },
    next() {
      console.log("text");
      this.c = document.getElementsByClassName("pay-shadow");
      this.pay = document.getElementsByClassName("confirm-paybtn");
      this.d = document.getElementsByClassName("toast_wrapper");
      if (this.pay[0].className == "confirm-paybtn active") {
        this.c[0].style.display = "block";
      } else {
        this.d[0].style.opacity = "1";
        setTimeout(function() {
          this.d = document.getElementsByClassName("toast_wrapper");
          this.d[0].style.opacity = "0";
          // console.log('0');
        }, 2000);
      }
    },
    gougou() {
      this.gou = document.getElementsByClassName("check-icon");
      this.pay = document.getElementsByClassName("confirm-paybtn");
      // console.log(this.pay);
      // console.log(this.gou);
      if (this.gou[0].className == "check-icon checked") {
        this.gou[0].className = "check-icon";
        this.pay[0].className = "confirm-paybtn";
      } else {
        this.gou[0].className = "check-icon checked";
        this.pay[0].className = "confirm-paybtn active";
      }
    }
  },
  mounted() {
    // 在挂载时接收到参数并且赋值
    this.mydate = this.$route.params.date; //日期
    this.mytitle = this.$route.params.title; //活动名称
    this.myaddress = this.$route.params.address; //活动地点
    this.myprice = this.$route.params.price; //门票单价
    this.mynumber = this.$route.params.number; //门票张数
    this.mytotal = this.$route.params.total; //合计总价
    this.myimg = this.$route.params.img; //合计总价
  }
};
</script>

<style>
.toast_wrapper {
  opacity: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  width: 240px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  border-radius: 5px;
  transition: all 1s;
  position: fixed;
  top: 300px;
  left: 42%;
}
/* .toast_wrapper .fade {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform-box: translate(-50%,-50%);
}
.toast_wrapper {
  line-height: 18px;
  position: fixed;
  top: 300px;
  padding: 14px 10px;
  transition: all 1s;
  text-align: center;
  z-index: 9999;
} */
.qrcode img {
  position: absolute;
  left: 70px;
}
.pay-qrcode .checkstand {
  background: url(../../assets/images-vip/indexrrrit.png) 100% no-repeat;
  background-size: 9px 14px;
}
.pay-qrcode .pay-spend .checkstand {
  padding: 0 18px 0 4px;
  color: #fb7299;
  cursor: pointer;
}
.pay-qrcode .pay-spend {
  margin: 32px 9px 0;
  padding: 17px 54px;
  font-size: 14px;
  color: #212121;
  line-height: 16px;
  text-align: center;
  background: #e7e7e7;
  cursor: pointer;
}
.pay-qrcode .qq {
  background: url(../../assets/images-vip/indexqq.png) 0 no-repeat;
  background-size: 16px 16px;
}
.pay-qrcode .alipay {
  background: url(../../assets/images-vip/zfb.png) 0 no-repeat;
  background-size: 16px 16px;
}
.pay-qrcode p span {
  padding: 0 12px 0 20px;
  color: #212121;
}
.pay-qrcode .wechat {
  background: url(../../assets/images-vip/wwxx.png) 0 no-repeat;
  background-size: 16px 16px;
}
.pay-qrcode p {
  font-size: 14px;
  text-align: center;
  color: #999;
  line-height: 16px;
}
.pay-qrcode .qrcode {
  width: 249px;
  height: 249px;
  margin: 36px auto 17px;
}
#shadowpay {
  font-weight: 400;
  color: #212121;
  font-size: 16px;
  line-height: 22px;
  margin-top: 0;
}
.pay-qrcode .close-btn {
  position: absolute;
  top: 23px;
  right: 20px;
  width: 16px;
  height: 16px;
  background: url(../../assets/images-vip/xxx.png) 0 no-repeat;
  background-size: contain;
}
.pay-qrcode {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  padding: 23px 20px 32px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 2px;
  transform: translate(-50%, -50%);
}
.pay-shadow {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
/*  */
.confirmorder-container .confirm-bottom .confirm-paybtn {
  width: 240px;
  height: 50px;
  font-size: 18px;
  color: #99a2aa;
  cursor: default;
  line-height: 50px;
  text-align: center;
  background: #e4eaef;
  border-radius: 4px;
}
.confirmorder-container .confirm-bottom .confirm-paybtn.active {
  color: #fff;
  background-image: linear-gradient(-48deg, #fe8574, #ff6a9c);
  box-shadow: 0 3px 4px 0 #fdb8cc;
  border-radius: 4px;
}
.confirmorder-container .confirm-bottom .service-term .term-content {
  color: #ff5678;
  cursor: default;
}
.confirmorder-container .confirm-bottom .service-term .check-icon {
  float: left;
  width: 12px;
  height: 12px;
  margin: 3px 5px 3px 0;
  background: url(../../assets/images-vip/kgou.png) 50% no-repeat;
  background-size: contain;
}
.confirmorder-container .confirm-bottom .service-term .check-icon.checked {
  background: url(../../assets/images-vip/gou.png) 50% no-repeat;
  background-size: contain;
}
.confirmorder-container .confirm-bottom .service-term {
  margin: 10px 0;
  font-size: 12px;
  line-height: 18px;
  color: #666;
}
.confirmorder-container .confirm-bottom {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.total-container div span {
  float: right;
  min-width: 130px;
  color: #222;
}
.total-container div span.total {
  line-height: 22px;
  font-size: 22px;
  color: #ff66a2;
}
.total-container div span {
  float: right;
  min-width: 130px;
  color: #222;
}
.total-container div {
  text-align: right;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 16px;
  color: #6d757a;
}
.total-container {
  margin-top: 30px;
  background: #f4f5f7;
  padding: 20px 15px 5px;
}
.confirmorder-container .discounts .discounts-list p {
  position: relative;
  width: 300px;
  height: 42px;
  padding: 0 33px 0 15px;
  margin: 0 0 20px;
  color: #222;
  font-size: 14px;
  line-height: 42px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.confirmorder-container .discounts .discounts-list {
  position: relative;
}
.confirmorder-container .discounts {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 15px;
}
.project-info table td:nth-child(4) {
  text-align: right;
  width: 105px;
}
.project-info table td:last-child {
  text-align: right;
  width: 115px;
}
.project-info table td.total {
  font-size: 16px;
  color: #fb7299;
}
.project-info table td:nth-child(3) {
  text-align: right;
  width: 115px;
}
.project-info table td {
  padding: 15px 0;
  text-align: right;
}
.project-info table td:nth-child(2) {
  text-align: left;
  padding-left: 5px;
  width: 200px;
}
.project-info table .project-content .content-right .ticket-type span {
  float: left;
  width: 15px;
  height: 18px;
  margin-right: 5px;
  background: url(../../assets/images-vip/tck.png) 50% no-repeat;
  background-size: contain;
}
.project-info table .project-content .content-right .ticket-type {
  margin-top: -5px;
  font-size: 14px;
  color: #fb7299;
}
.project-content {
  margin-top: -20px;
}
.project-info table .project-content .content-right .ticket-name span {
  margin-right: 4px;
}
.project-info table .project-content .content-right .ticket-name {
  white-space: nowrap;
}
.project-info table .project-content .content-right p {
  font-size: 12px;
  color: #6d757a;
}
.project-info table .project-content .content-right h1 {
  max-height: 40px;
  /* margin-bottom: 15px; */
  margin-top: 15px;
  font-weight: 400;
  overflow: hidden;
  line-height: 20px;
  font-size: 14px;
  color: #222;
}
.project-info table .project-content .content-right {
  padding: 0px 5px 5px 96px;
}
.project-info table .project-content .content-left img {
  display: block;
  width: 100%;
  height: 100%;
}
.project-info table .project-content .content-left {
  float: left;
  width: 86px;
  height: 114px;
  margin: 5px 0;
}
.project-info table td {
  padding: 15px 0;
  text-align: right;
}
.project-info table td:first-child {
  padding-left: 15px;
  text-align: left;
  width: 295px;
}
.project-info table tr {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  width: 1080px;
  padding-right: 15px;
  font-size: 12px;
  color: #222;
  box-sizing: border-box;
}
.project-info table th:nth-child(4) {
  text-align: right;
  width: 105px;
}
.project-info table th:last-child {
  text-align: right;
  width: 115px;
}
.project-info table th:nth-child(2) {
  text-align: left;
  width: 290px;
}
.project-info table th {
  padding: 15px 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #6d757a;
}
.project-info table th:first-child {
  width: 310px;
  padding-left: 120px;
}
.project-info table tr {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  width: 1080px;
  padding-right: 15px;
  font-size: 12px;
  color: #222;
  box-sizing: border-box;
}
.project-info table tr:first-child {
  background: #f4f5f7;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.project-info {
  margin-bottom: 20px;
  border-bottom: 1px dashed #e7e7e7;
}
.confirmorder-container h1 {
  font-weight: 400;
  font-size: 22px;
  line-height: 52px;
  color: #222;
}
.confirmorder-container {
  width: 100%;
  padding: 15px 40px 40px;
  margin: 40px 0;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0 #cbd0d8;
  border-radius: 4px;
  background: #fff;
}
.detail-content-wrapper {
  display: flex;
  width: 1160px;
  margin: 0 auto;
}
</style>

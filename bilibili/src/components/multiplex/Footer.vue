<template>
  <div class="international-footer">
    <div class="link-box b-footer-wrap">
      <div class="link-item link-a">
        <span class="bt">bilibili</span>
        <ul>
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
          <a href="#">用户协议</a>
          <a href="#">加入我们</a>
          <a href="#">友情链接</a>
          <a href="#">隐私政策</a>
          <a href="#">bilibili认证</a>
          <a href="#">Investor Relations</a>
        </ul>
      </div>
      <div class="link-item link-b">
        <span class="bt">传送门</span>
        <ul>
          <a href="#">帮助中心</a>
          <a href="#">高级弹幕</a>
          <a href="#">活动专题页</a>
          <a href="#">侵权申诉</a>
          <a href="#">活动中心</a>
          <a href="#">用户反馈论坛</a>
          <a href="#">壁纸站</a>
          <a href="#">专车号服务中心</a>
          <a href="#">名人堂</a>
        </ul>
      </div>
      <div class="link-item link-c">
        <a href="#" class="biliapp">
          <img
            src="@/assets/images-index/icon_footer.png"
            class="bili-footer-font bili-footer-icon_download"
            style="width:40px;height:40px"
          />
          <p>客户端下载</p>
          <div class="qrcode"></div>
        </a>
        <a href="#" class="weibo">
          <img
            src="@/assets/images-index/xinlangweibo.png"
            class="bili-footer-font bili-footer-icon_weibo"
            style="width:40px;height:40px"
          />
          <p>新浪微博</p>
          <div class="qrcode"></div>
        </a>
        <a href="#" class="weixin">
          <img
            src="@/assets/images-index/wwxx.png"
            class="bili-footer-font bili-footer-icon_wechat"
            style="width:40px;height:40px"
          />
          <p>官方微信</p>
          <div class="qrcode"></div>
        </a>
      </div>
    </div>
    <div class="partner b-footer-wrap">
      <div class="pic-box">
        <img
          src="https://s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/partner.png"
          alt=""
          class="pic"
        />
        <img
          src="https://s1.hdslb.com/bfs/static/jinkela/long/images/pic962110.png"
          width="100"
          height="40"
          class="pic962110"
        />
        <img src="@/assets/images-index/wg.png" alt="" />
      </div>
      <div class="text-con">
        <p>
          <span><a href="#">营业执照</a></span>
          <span>信息网络传播视听节目许可证：0910417</span>
          <span>网络文化经营许可证 沪网文【2019】3804-274号</span>
          <span>广播电视节目制作经营许可证：（沪）字第01248号</span>
          <span>增值电信业务经营许可证 沪B2-20100043</span>
          <span>互联网ICP备案：<a href="#">沪ICP备13002172号-3</a></span>
          <span>出版物经营许可证 沪批字第U6699 号</span>
          <span>互联网药品信息服务资格证 沪-非经营性-2016-0143</span>
          <span>营业性演出许可证 沪市文演（经）00-2253</span>
        </p>
        <p>
          违法不良信息举报邮箱：help@bilibili.com
          |违法不良信息举报电话：4000233233转3
        </p>
        <p>
          <i class="sprite bg1"></i>
          <a href="#" target="_blank">上海互联网举报中心</a>
          |
          <a href="#" target="_blank">12318全国文化市场举报网站</a>
          |
          <i class="sprite bg2"></i>
          <a href="#" target="_blank">沪公网安备31011002002436号</a>
          |
          <a href="#">儿童色情信息举报专区</a>
        </p>
        <p>
          网上有害信息举报专区：
          <i class="sprite bg3"></i>
          <a href="#" target="_blank">中国互联网违法和不良信息举报中心</a>
        </p>
        <p>
          亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
        </p>
        <p>
          公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-width: 1654px) {
  body .b-footer-wrap,
  .b-wrap {
    width: 1198px;
  }
}
@media screen and (min-width: 1730px) {
  body .b-footer-wrap,
  .b-wrap {
    width: 1414px;
  }
}
.international-footer a:hover {
    text-decoration: none;
    color: #00A1D6;
}
.international-footer .partner .sprite {
  display: inline-block;
  background-image: url("../../assets/images-index/hz_icon.png");
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 3px;
}
.international-footer .partner .sprite.bg3 {
  width: 16px;
  height: 16px;
  background-position: -18px -3px;
}
.international-footer .partner .sprite {
  display: inline-block;
  background-image: url("../../assets/images-index/hz_icon.png");
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 3px;
}
.international-footer .partner .sprite.bg2 {
  width: 18px;
  height: 20px;
  background-position: -41px 0px;
}
.international-footer .partner .sprite {
  display: inline-block;
  background-image: url("../../assets/images-index/hz_icon.png");
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 3px;
}
.international-footer .partner .sprite.bg1 {
  width: 16px;
  height: 16px;
  background-position: 0 -2px;
}
.international-footer .partner a {
  color: #999;
}
.international-footer .partner .text-con span {
  margin-right: 15px;
  display: inline-block;
}
.international-footer .partner p {
  line-height: 24px;
}
.international-footer .partner .pic962110 {
  margin: 5px 0;
}
.international-footer .partner .pic {
  width: 96px;
  height: 75px;
}
.international-footer .partner .pic-box {
  width: 100px;
  margin-right: 20px;
}
.international-footer .b-footer-wrap {
  max-width: 1630px;
  min-width: 999px;
  margin: 0 auto;
}
.international-footer .partner {
  display: flex;
  padding-top: 20px;
  color: #999;
}
.international-footer .link-box .link-item.link-c a .qrcode {
  display: none;
  position: absolute;
  top: -125px;
  left: -25px;
  width: 117px;
  height: 117px;
  background: #fff;
  border: 1px solid #eee;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
}
.international-footer .link-box .link-item.link-c p {
  margin-top: 10px;
  color: #212121;
  transition: color 0.2s;
}
.international-footer .link-box .link-item.link-c a {
  position: relative;
  display: inline-block;
  width: 70px;
  text-align: center;
  color: #212121;
}
.international-footer .link-box .link-item.link-c .biliapp {
  color: #585f69;
}
.international-footer .link-box .link-item.link-c {
  flex: 1;
  padding-right: 0;
  border-right: none;
  margin-right: 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.international-footer .link-box .link-item.link-b ul {
  height: 96px;
}
.international-footer .link-box .link-item ul a {
  display: inline-block;
  margin-bottom: 10px;
  cursor: pointer;
}
.international-footer a {
  color: #212121;
  transition: color 0.3s;
}
.international-footer ol,
.international-footer ul {
  list-style: none;
}
.international-footer .link-box .link-item ul {
  height: 96px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.international-footer .link-box .link-item .bt {
  font-size: 16px;
  color: #999;
  display: block;
  height: 20px;
  margin-bottom: 20px;
}
.international-footer .link-box .link-item {
  flex: 2;
  padding-right: 40px;
  margin-right: 40px;
  border-right: 1px solid #eee;
}
.international-footer .b-footer-wrap {
  max-width: 1630px;
  min-width: 999px;
  margin: 0 auto;
}
.international-footer .link-box {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.international-footer {
  font: 12px "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #f6f9fa;
  padding: 30px;
}
</style>

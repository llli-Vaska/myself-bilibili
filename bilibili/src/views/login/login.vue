<template>
  <div>
    <div class="top-banner">
      <img
        src="https://s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"
      />
    </div>
    <div class="title-line">
      <span class="tit" style="font-size: 38px;">登录</span>
    </div>
    <div class="login-box clearfix">
      <div class="login-left">
        <div class="qrcode-login">
          <div class="qrcode-con">
            <i class="tv-icon"></i>
            <div class="qrcode-box">
              <div
                class="qrcode-tips"
                @mouseenter="show()"
                @mouseleave="leave()"
              ></div>
              <div
                class="qrcode-img"
                title="https://passport.bilibili.com/qrcode/h5/login?oauthKey=86bbe94cb6f14ffa789e17dd6f88ab0d"
              >
                <canvas width="140" height="140" style="display: none;"></canvas
                ><img
                  src="data:image/png;base64,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"
                  style="display: block;"
                />
              </div>
              <!-- --------- -->
            </div>
          </div>
          <!-- - -->
          <div class="qrcode-footer">
            <p class="status-txt">扫描二维码登录</p>
            <p class="app-link">
              请使用
              <a href="#/" target="_blank">哔哩哔哩客户端</a
              ><br />扫码登录<br />或扫码下载APP
            </p>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="login-right">
        <div class="form-login">
          <div class="input-box" id="geetest-wrap">
            <div>
              <div class="type-tab">
                <span class="active">密码登录</span>
                <span class="">短信登录</span>
              </div>
              <div>
                <div class="item username status-box">
                  <input
                    type="text"
                    value=""
                    placeholder="你的手机号"
                    id="login-username"
                    maxlength="50"
                    autocomplete="off"
                    class=""
                    oninput="value=value.replace(/[^\d]/g,'')"
                  />
                  <span class="status"></span>
                  <div class="text clearfix">
                    <p class="tips" style="display:none">
                      请输入注册时用的手机号呀
                    </p>
                  </div>
                  <!---->
                </div>
                <div class="item password status-box">
                  <input
                    type="password"
                    placeholder="密码"
                    id="login-passwd"
                    class=""
                  />
                  <span class="status"></span>
                  <div class="text clearfix">
                    <p class="tips" style="display:none">
                      喵，你没输入密码么？
                    </p>
                  </div>
                </div>
                <!---->
                <div class="item gc clearfix"><!----></div>
              </div>
              <div class="remember">
                <div class="remember-tool">
                  <label
                    ><label class="remember-check checkbox-bwxr"
                      ><input type="checkbox"
                    /></label>
                    记住我
                    <span>不是自己的电脑上不要勾选此项</span></label
                  >
                  <div style="margin-left:50px;margin-top:-2px">
                    <a target="_blank" href="#" class="forget-password"
                      >忘记密码?</a
                    >
                    <a target="_blank" href="#" class="not-checkout"
                      >无法验证?</a
                    >
                  </div>
                </div>
                <!---->
                <!---->
              </div>
              <div class="btn-box">
                <a class="btn btn-login" @click="submit()">登录</a>
                <a href="/register" class="btn btn-reg">注册</a>
              </div>
              <div class="sns">
                <a class="btn weibo">微博账号登录</a>
                <a class="btn qq">QQ账号登录</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p data-v-2c844fd9="">
      登录即代表你同意<a
        data-v-2c844fd9=""
        target="_blank"
        href="#"
        style="color:#00a1d6"
        >用户协议</a
      >和<a data-v-2c844fd9="" target="_blank" href="#" style="color:#00a1d6"
        >隐私政策</a
      >
    </p>
    <Footer id="xzcv"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  components: {
    Footer
  },

  methods: {
    submit() {
      var inpu = document.getElementsByTagName("input");
      var user = inpu[0].value;
      var password = inpu[1].value;
      var errortv = document.getElementsByClassName("status");
      var tip = document.getElementsByClassName("tips");
      var usertip = tip[0];
      var passwordtip = tip[1];
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      //   console.log(user);
      //   console.log(password);
      if (!reg.test(user)) {
        // alert("请输入你的手机号");
        inpu[0].className = "error";
        errortv[0].className = "status error";
        usertip.style.display = "block";
      } else {
        inpu[0].className = "";
        errortv[0].className = "status";
        usertip.style.display = "none";
      }
      if (password == null || password == "") {
        // alert("请输入你的密码");
        inpu[1].className = "error";
        errortv[1].className = "status error";
        passwordtip.style.display = "block";
      } else {
        inpu[1].className = "";
        errortv[1].className = "status";
        passwordtip.style.display = "none";
      }
      //当条件都满足时跳转页面
      if (!!reg.test(user) && password != null && password != "") {
        window.location.href = "/";
      }
    },
    show() {
      var ni = document.getElementsByClassName("qrcode-tips");
      //   console.log(ni[0]);
      ni[0].className = "qrcode-tips mouseenter";
    },
    leave() {
      var ni = document.getElementsByClassName("qrcode-tips mouseenter");
      ni[0].className = "qrcode-tips";
    }
  }
};
</script>

<style scoped>
.status-box .status.error {
  display: block;
  background-position: -37px -38px;
}
.status-box .status {
  display: none;
  background-image: url(../../assets/login/indexsss.png);
  position: absolute;
  top: 8px;
  right: -25px;
  width: 20px;
  height: 20px;
}
.form-login .input-box .item input.error {
  border-color: #f66495;
}
#xzcv {
  margin-top: 30px;
}
p[data-v-2c844fd9] {
  margin: 24px auto 0;
  width: 980px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
  line-height: 16px;
}
.form-login .input-box .sns .btn.qq {
  margin-left: 20px;
}
.form-login .input-box .sns .btn:before {
  content: "";
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../../assets/login/index.png);
  vertical-align: middle;
  margin-right: 5px;
}
.form-login .input-box .sns .btn.qq:before {
  background-position: 0 -41px;
}
.form-login .input-box .sns .btn {
  color: #717171;
}
.form-login .input-box .sns {
  padding: 12px 0;
  font-size: 12px;
}
.btn-login:hover {
  color: #fff;
}
.btn-box a {
  color: #fff;
  /* padding-top: -30px; */
}
.form-login .input-box .btn-box .btn {
  color: #555;
  display: inline-block;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 184px;
  /* line-height: 38px; */
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.form-login .input-box .btn-box .btn-login {
  border: 1px solid #0381aa;
  color: #fff;
  background-color: #00a7de;
}
.form-login .input-box .btn-box {
  display: flex;

  justify-content: space-between;

  align-content: center;
}
.form-login .input-box .remember .not-checkout {
  float: right;
  margin-right: 10px;
  color: #00a1d6;
}
.form-login .input-box .remember .forget-password {
  float: right;
  color: #00a1d6;
}
.form-login .input-box .remember span {
  color: #bbb;
  margin-left: 10px;
}

.checkbox-bwxr {
  display: inline-block;
  width: 14px;
  height: 14px;
  /* background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0c…41LTEuNXYtMTFBMS41IDEuNSAwIDAwMTMuNSAxeiIgZmlsbD0iI2NjZDBkNyIvPjwvc3ZnPg==); */
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: 50%;
  cursor: pointer;
}
.form-login .input-box .remember .remember-tool > label .remember-check {
  margin-right: 8px;
}
.form-login .input-box .remember .remember-tool > label {
  justify-content: flex-start;
  cursor: pointer;
}
.form-login .input-box .remember .remember-tool,
.form-login .input-box .remember .remember-tool > label {
  display: flex;

  align-items: center;
}
.form-login .input-box .remember {
  margin: 10px 0;
  color: #717171;
  width: 410px;
  font-size: 12px;
}
.form-login .input-box .text .tips {
  color: #f66495;
  float: left;
}
.form-login .input-box .item input {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #aaa;
  font-size: 14px;
  padding: 10px;
  height: 40px;
  vertical-align: middle;
  border-radius: 4px;
}
.status-box {
  position: relative;
}
.form-login .input-box .text .tips {
  color: #f66495;
  float: left;
}
.form-login .input-box .item input.error {
  border-color: #f66495;
}
.form-login .input-box .text {
  margin: 6px 0;
  font-size: 12px;
  min-height: 20px;
  line-height: 20px;
}
.form-login .input-box .item input {
  outline: none;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #aaa;
  font-size: 14px;
  padding: 10px;
  height: 40px;
  vertical-align: middle;
  border-radius: 4px;
}
.status-box {
  position: relative;
}
.login-box .type-tab > span {
  font-size: 14px;
  color: #555;
  letter-spacing: 0;
  margin-right: 20px;
}
.login-box .type-tab > span.active {
  color: #02a7de;
}
.login-box .type-tab > span {
  font-size: 14px;
  color: #555;
  letter-spacing: 0;
  margin-right: 20px;
}
.login-box .type-tab {
  cursor: pointer;

  display: flex;

  align-items: center;
  margin-bottom: 12px;
}
.form-login .input-box {
  margin-top: 50px;
  width: 414px;
}
.form-login {
  position: relative;
}
.login-box .login-right {
  float: left;
  padding-left: 45px;
  width: 490px;
  box-sizing: border-box;
}
.login-box .line {
  float: left;
  border-right: 1px solid #ddd;
  height: 300px;
  margin-top: 28px;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-tips.mouseenter {
  opacity: 1;
}
.app-link a {
  color: #00a1d6;
}
.qrcode-login .qrcode-footer .app-link,
.qrcode-login .qrcode-footer .suc-txt {
  text-align: center;
  color: #717171;
  font-size: 14px;
}
.qrcode-login .qrcode-footer .status-txt {
  padding-top: 20px;
  text-align: center;
  color: #222;
  font-size: 18px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.qrcode-login .qrcode-footer {
  width: 480px;
  height: 155px;
  background: url(../../assets/login/2233login.af9c53d.png) 0 -7px no-repeat;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-img {
  width: 140px;
  height: 140px;
  background: url(../../assets/login/loadTV.99606e2.gif) 50% no-repeat;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-tips {
  z-index: 10;
  position: absolute;
  width: 480px;
  height: 192px;
  top: -50px;
  left: 50%;
  margin-left: -240px;
  background: url(../../assets/login/p1.png) no-repeat;
  background-size: cover;
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.5s;
}
.qrcode-login .qrcode-con .qrcode-box {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  background: #ddd;
  position: relative;
}
.qrcode-login .qrcode-con .tv-icon {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 160px;
  top: 10px;
  background: url(../../assets/login/tv.png) no-repeat;
}
.qrcode-login .qrcode-con {
  padding-top: 72px;
}
.qrcode-login {
  position: relative;
  width: 480px;
}
.login-box .login-left {
  float: left;
  width: 489px;
}
.login-box {
  position: relative;
  width: 980px;
  margin: 0 auto;
}
.title-line .tit {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: #fff;
  text-align: center;
}
.title-line {
  width: 980px;
  height: 28px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto 28px;
  text-align: center;
}
.top-banner {
  background: #00a0d8;
  height: 86px;
  text-align: center;
  margin-bottom: 20px;
}
</style>

<template>
  <div class="nav-user-center">
    <div class="user-con">
      <div class="item " id="dlll">
        <div>
          <span class="name">
            <img src="@/assets/images-index/headpic.jpg" class="logout-face" />
            <a href="/login" style="color:#ffffff">登录</a>
          </span>
        </div>
        <div class="van-popover van-popper van-popper-login">
          <div class="vp-container">
            <p class="title22">登录后你可以：</p>

            <div class="img-panel ">
              <img
                src="@/assets/images-index/danmu.png"
                class="pppi"
                style="left: -298px;"
              />
              <img
                src="@/assets/images-index/danmu.png"
                class="pppi"
                style="left: 23px;"
              />
            </div>
            <div class="btn-box">
              <a href="#" class="btn reg-btn">注册</a>
              <a href="#" class="btn">登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="/register" class="txt name">注册</a>
      </div>
    </div>
    <div>
      <span>
        <span class="miniupload">
          <a href="/sendmesssage" style="color:#ffffff">投稿</a>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.van-popper-login .btn-box .btn {
  display: inline-block;
  cursor: pointer;
  width: 48%;
  height: 38px;
  line-height: 25px;
  text-align: center;
  background-color: #00a1d6;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
  margin-top: 16px;
  transition: 0.3s ease;
  border: 1px solid #00a1d6;
}
.van-popper-login .btn-box .btn.reg-btn {
  background-color: #fff;
  color: #00b5e5;
}
.van-popper-login .btn-box {
  display: flex;
  justify-content: space-between;
}
#dlll:hover .van-popper-login {
  display: block;
}
.van-popper-login .img-panel img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  left: 0;
}
.van-popover.van-popper.van-popper-login {
  display: none;
  padding: 0;
  border: none;
  top: 44px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  z-index: 3;
  position: absolute; /*位置*/
  top: 35px;
  right: -133px;
}
.van-popper-login .img-panel {
  position: relative;
  width: 320px;
  height: 200px;
  background-color: #eee;
  overflow: hidden;
  background: url(https://static.hdslb.com/images/base/danmu.png) no-repeat 50%;
}
.van-popper-login .title22 {
  font-size: 14px;
  color: #212121;
  margin-bottom: 15px;
}
.vp-container {
  width: 100%;
  padding: 16px 20px 12px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
}
.van-popper-login .vp-container {
  width: 100%;
  padding: 16px 20px 12px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f4f4f4;
}
/* ------------------------- */
.miniupload {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #fb7299;
  border-radius: 2px;
  margin-left: 14px;
}
.nav-user-center .user-con .item {
  position: relative;
  display: flex;
  margin-left: 12px;
  cursor: pointer;
}
.txt:hover {
  text-decoration: none;
}
.txt {
  font-size: 14px;
  line-height: 32px;
  margin-bottom: 2px;
}
.logout-face {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid silver;
}
.nav-user-center .user-con .item .name {
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}
.user-con {
  display: flex;
  align-items: center;
}
.nav-user-center {
  display: flex;
  flex-shrink: 0;
}
</style>

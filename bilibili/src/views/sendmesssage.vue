<template>
  <div class="container">
    <div class="header-most ">
      <div class="header ">
        <div class="left-header">
          <img src="@/assets/imgsz/bilibilicreate.png" />
          <div class="tv">
            <a href="/"
              ><img src="@/assets/imgsz/tv.png" />
              <p class="tv-1">主站</p></a
            >
          </div>
        </div>

        <ul class="ul-1">
          <li class="dropdown">
            <img
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              src="@/assets/imgsz/space.jpg"
            />
            <ul class="dropdown-menu">
              <li class="x1"><a href="#">个人中心</a></li>
              <li class="x2"><a href="#">投稿管理</a></li>
              <li class="x3"><a href="#">B币钱包</a></li>
              <li class="x4"><a href="#">订单中心</a></li>
              <li class="x5"><a href="#">直播中心</a></li>

              <li class="x6"><a href="#">退出登录</a></li>
            </ul>
          </li>
          <li><div class="li-1">成为UP主的第391天 ></div></li>
          <li><img class="li-email" src="@/assets/imgsz/email.png" /></li>
          <li><img class="li-download" src="@/assets/imgsz/download.png" /></li>
        </ul>
      </div>
    </div>
    <div class="sec">
      <div class="best">
        <button class="best1" value="投稿">
          <router-link style="color:#fff" to="/sendmesssage">投稿</router-link>
        </button>
        <ul class="nav-wrp1">
          <li>
            <div class="box1">
              <a href="#"><router-link to="/partx">首页</router-link></a>
            </div>
          </li>
          <li>
            <div class="box1">
              <a href="#"><router-link to="/secfoot">内容管理</router-link></a>
            </div>
          </li>
          <li>
            <div class="box1"><a href="#">数据中心</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">粉丝管理</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">互动管理</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">收益管理</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">创作成长</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">创作权益</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">创作实验室</a></div>
          </li>
          <li>
            <div class="box1"><a href="#">创作设置</a></div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <mainhead></mainhead>
    </div>
  </div>
</template>
<script>
import mainhead from "../views/mainhead.vue";

export default {
  name: "sendmasssage",
  components: {
    mainhead
  }
};
</script>
<style scoped>
.box1 a {
  color: #505050;
  text-decoration: none;
}
.box1 a:hover {
  color: #00a1d6;
  text-decoration: none;
}
.best {
  width: 70px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  height: 660px;
}
.sec {
  width: 70px;
  height: 660px;
}
.nav-wrp1 {
  width: 120px;
  height: 46px;
  list-style: none;
  margin-left: -200px;
  margin-top: 20px;
  color: #505050;
  position: fixed;
}

.box1 {
  height: 46px;
  color: black;
  font-size: 16px;
  line-height: 24px;
}

.best1 {
  height: 44px;
  width: 135px;
  margin-left: -350px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  background: #00a1d6;
  border: none;
  margin-top: 20px;
}
.x1 {
  margin-left: -990px;
  margin-top: 55px;
}
.x2 {
  margin-left: -990px;
  margin-top: 75px;
}
.x3 {
  margin-left: -990px;
  margin-top: 95px;
}
.x4 {
  margin-left: -990px;
  margin-top: 115px;
}
.x5 {
  margin-left: -990px;
  margin-top: 135px;
}
.x6 {
  margin-left: -990px;
  margin-top: 165px;
}

.contanier {
  width: 1510px;

  position: relative;
  position: fixed;
}
.heaedr-most {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 42px;
  z-index: 11;
  min-width: 960px;
}
.header {
  height: 71px;
  position: relative;
  margin-left: -200px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 0 0 0 0;
  width: 1510px;
}
.header .left-header {
  align-items: center;
  position: relative;
  height: 80px;
}
.tv {
  position: relative;
  left: 260px;
  top: -50px;
  width: 110px;
}
.tv-1 {
  position: relative;
  margin-left: 70px;
  top: -28px;
  color: #757575;
  font-size: 14px;
  text-decoration: none;
}
.ul-1 li {
  position: relative;
  float: left;
  left: 1000px;
  top: -55px;
  list-style: none;
}
.dropdown-toggle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ccc;
  border: 1px solid #f4f4f4;
}
.li-1 {
  background: rgba(250, 142, 87, 0.1);
  border: 1px solid rgba(250, 142, 87, 0.43);
  border-radius: 14px;
  padding: 5px 12px 5px 16px;
  font-size: 12px;
  color: #fa8e57;
  text-align: center;
  margin-right: 32px;
  margin-left: 12px;
}
.li-email {
  width: 28px;
  height: 30px;
  margin-left: 50px;
}
.li-download {
  width: 28px;
  height: 28px;
  margin-left: 20px;
}
</style>

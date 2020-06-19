<template>
  <div class="container-fulid">
    <div class="mini-header">
      <div class="mini-header__content">
        <div class="nav-link">
          <ul class="nav-link-ul">
            <li class="nav-link-item">
              <a href="/" class="link">
                <img
                  src="@/assets/images-index/small_logo.png"
                  class="zhuzhan"
                  style="width:18px;height:18px"
                />
                主站
              </a>
            </li>
            <li class="nav-link-item">
              <a href="#" class="link">番剧</a>
            </li>
            <li
              class="nav-link-item"
              @mouseover="onMouseEnter"
              @mouseout="onMouseout"
            >
              <a href="/gamepart" class="link"
                >游戏中心
                <Gamezx v-show="seen"></Gamezx>
                <!-- 游戏中心二级菜单 -->
              </a>
            </li>
            <li class="nav-link-item" id="live">
              <a href="#" class="link"
                >直播
                <Live class="liveshow"></Live>
                <!-- 直播二级菜单 -->
              </a>
            </li>
            <li class="nav-link-item">
              <a href="/VIP" class="link">会员购</a>
            </li>
            <li class="nav-link-item" id="cartoo">
              <a href="#" class="link"
                >漫画
                <Cartoon class="cartoonshow"></Cartoon>
              </a>
            </li>
            <li class="nav-link-item">
              <a href="#" class="link">赛事</a>
            </li>
            <li class="nav-link-item" id="appdownload">
              <a href="#" class="link">
                <img
                  src="@/assets/images-index/phone_logo.png"
                  class="downloadapp"
                  style="width:18px;height:18px"
                />
                下载APP
                <APP class="app"></APP>
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-search-box hidden-md hidden-sm hidden-xs">
          <div class="nav-search">
            <form id="nav_searchform">
              <input
                type="text"
                autocomplete="off"
                accesskey="s"
                placeholder="《惊雷》是一首什么样的歌？"
                class="nav-search-keyword"
              />
              <div class="nav-search-btn glyphicon glyphicon-search"></div>
            </form>
          </div>
        </div>
        <NavBarRightLogin></NavBarRightLogin>
      </div>
    </div>
    <!-- 背景图 -->
    <div class="bili-banner">
      <div class="taper-line"></div>
      <div class="b-logo">
        <a href="#" class="head-logo">
          <!-- 首页logo -->
          <img :src="logo" class="logo-img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRightLogin from "@/components/NavBarRightLogin.vue";
import Gamezx from "@/components/Gamezx.vue"; /*游戏中心二级菜单*/
import Live from "@/components/Live.vue"; /*直播二级菜单*/
import logo from "@/assets/images-index/logo000.png"; /*首页logo*/
import APP from "@/components/APP.vue"; /*APP二级菜单*/
import Cartoon from "@/components/Cartoon.vue"; /*漫画二级菜单*/
export default {
  name: "NavigationBar", //组件名
  components: {
    NavBarRightLogin,
    Gamezx,
    Live,
    APP,
    Cartoon
  },
  data() {
    return {
      seen: false,
      logo //首页logo
    };
  },
  methods: {
    onMouseEnter: function() {
      this.seen = true;
    },
    onMouseout: function() {
      this.seen = false;
    }
  }
};
</script>

<style>
#cartoo:hover .cartoonshow {
  display: block;
}
#appdownload:hover .app {
  display: block;
}
#live:hover .liveshow {
  display: block;
}

.nav-search-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding-left: 15px;
  padding-top: 10px;
  width: 50px;
  height: 36px;
  border: none;
  border-radius: 2px;
  background: #e7e7e7;
  line-height: 17px;
  cursor: pointer;
}
.nav-search-keyword {
  overflow: hidden;
  width: 100%;
  height: 34px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  line-height: 34px;
  transition: all 0.2s;
  outline: none;
}
#nav_searchform {
  display: block;
  padding: 0 38px 0 16px;
  border: 1px solid hsla(0, 0%, 100%, 0);
  border-radius: 2px;
  background-color: #fff;
}
.nav-search {
  position: relative;
}
.nav-search-box {
  position: absolute;
  left: 40%;
  margin: 0px 10px 0px 10px;
  width: 500px;
  transition: width 0.3s;
}
.downloadapp {
  margin-right: 2px;
  margin-top: 5px;
  font-size: 18px;
  vertical-align: middle;
}
.zhuzhan {
  margin-right: 6px;
  margin-top: 5px;
  font-size: 18px;
  vertical-align: middle;
}

.link:hover {
  text-decoration: none;
  color: #fff;
}
.link:focus {
  color: #fff;
  text-decoration: none;
}
.link {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  /* text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3); */
  white-space: nowrap;
  display: flex;
}
.nav-link .nav-link-ul .nav-link-item {
  margin-right: 12px;
}
ul {
  list-style: none;
}
.nav-link .nav-link-ul {
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 0px;
}
.mini-header__content {
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 56px;
}
.logo-img {
  width: 171px;
  height: 82px;
}
.head-logo {
  position: absolute;
  left: 155px;
  width: 220px;
  height: 50%;
  min-height: 60px;
  bottom: 10px;
  /* z-index: 1; */
}
.b-logo {
  /* width: 100%; */
  height: 100%;
  position: relative;
  margin: 0 auto;
}
.taper-line {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
}
.bili-banner {
  position: relative;
  background-image: url(../assets/images-index/background000.png); /*首页导航背景*/
  /* background-size: contain; */
  background-repeat: no-repeat;
  background-color: white;
  height: 9.375vw;
  min-height: 155px;
  background-size: cover;
}
</style>

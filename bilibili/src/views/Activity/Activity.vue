<!-- bilibili-activity -->
<template>
  <div>
    <NavigationBar></NavigationBar>
    <div id="app" class="active-list">
      <div class="active-main">
        <div class="active-title">
          <span class="b-active-i"></span>
          <span class="b-active-t">活动列表</span>
        </div>

        <router-view />

        <div class="pagelist">
          <div class="flip-left">
            <span class="first-page"
              ><router-link to="/Activity" active-class="active"
                >1</router-link
              ></span
            >
            <span
              ><router-link to="/Acontent2" exact-active-class="active"
                >2</router-link
              ></span
            >
            <span>3</span>
            <span>4</span>
            <strong class="ellipsis">...</strong>
            <span class="last-page"
              ><router-link to="/Acontent27" exact-active-class="active"
                >27</router-link
              ></span
            >
          </div>
          <div class="flip-right">
            <span>共 27 页，跳至</span>
            <input type="text" id="in_blur" value />
            <span>页</span>
          </div>
        </div>
      </div>
    </div>
    <Footer class="oooqwe"></Footer>
  </div>
</template>

<style>
.oooqwe {
  margin-top: 120px;
}
.active-main {
  width: 1160px;
  margin: 0 auto;
  padding: 20px 0 0;
}

.active-main .active-title .b-active-i {
  width: 25px;
  height: 25px;
  background: url(//static.hdslb.com/images/base/icons.png) -82px -1624px
    no-repeat;
  display: inline-block;
  vertical-align: middle;
  border-radius: 0;
  margin-right: 10px;
}
.active-main .active-title {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e9ef;
}

/* 页码跳转 */
.pagelist {
  margin-top: 20px;
}
.pagelist .flip-left {
  float: left;
}
.pagelist .flip-left span {
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.2s;
  min-width: 15px;
  margin: 0 2px;
  padding: 0 10px;
  float: left;
  height: 38px;
  line-height: 38px;
  display: block;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
}
.pagelist .flip-left strong {
  min-width: 15px;
  margin: 0 2px;
  padding: 0 10px;
  float: left;
  height: 38px;
  line-height: 38px;
  display: block;
  font-size: 14px;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  color: #222;
  border: 1px solid transparent;
  font-weight: 700;
}

.pagelist .flip-left .active {
  background: #00a1d6;
  color: #fff;
  border: 2px solid #00a1d6;
}
.pagelist .flip-left span:hover {
  background: #00a1d6;
  border: 1px solid #00a1d6;
}

.pagelist .flip-right {
  float: right;
}
.pagelist .flip-right span {
  padding: 0 2px;
  font-size: 12px;
  color: #99a2aa;
  display: inline-block;
}
.pagelist .flip-right input {
  margin-left: 5px;
  width: 30px;
  border-radius: 4px;
  border: 1px solid #ccd0d7;
  background-color: #fff;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-top: 7px;
  font-size: 12px;
  box-shadow: none;
  color: #99a2aa;
  display: inline-block;
}
</style>

<script>
// var value = sessionStorage.getItem("flg");
// if (value == null || value == undefined) {
//   setTimeout(function() {
//     sessionStorage.setItem("flg", "2");
//     window.location.href = "/Acontent1";
//   }, 1);
// }
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
export default {
  components: {
    Footer,
    NavigationBar
  }
};
</script>

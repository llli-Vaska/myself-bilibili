<!-- bilibili-ranking -->
<template>
  <div>
    <NavigationBar></NavigationBar>
    <NavigationBarLower></NavigationBarLower>
    <div class="b-page-body">
      <div class="main-inner b-wrap">
        <div class="rank-container">
          <div class="rank-head">
            <ul class="rank-menu">
              <li type="all">
                <span class="rank-icon all"></span>
                <span class="text1"
                  ><router-link to="/Ranking" active-class="active"
                    >全站榜</router-link
                  ></span
                >
              </li>
              <li type="origin">
                <span class="rank-icon origin"></span>
                <span class="text1"
                  ><router-link to="/Rankbody2" exact-active-class="active"
                    >原创榜</router-link
                  ></span
                >
              </li>
              <li type="bangumi">
                <span class="rank-icon bangumi"></span>
                <span class="text1"
                  ><router-link to="">新番榜</router-link></span
                >
              </li>
              <li type="cinema">
                <span class="rank-icon cinema"></span>
                <span class="text1"
                  ><router-link to="">影视榜</router-link></span
                >
              </li>
              <li type="rookie">
                <span class="rank-icon rookie"></span>
                <span class="text1"
                  ><router-link to="">新人榜</router-link></span
                >
              </li>
            </ul>
          </div>

          <Rankcenter></Rankcenter>

          <router-view />
        </div>
        <div>
          <div class="gg-floor-module">
            <div class="item" style="overflow:hidden;margin:0px auto;">
              <a href="#" target="_blank">
                <div class="lazy-img">
                  <img src="@/assets/rank/广告图.jpg" />
                </div>
                <img src="@/assets/rank/广告logo.jpg" class="gg-pic" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
ul li {
  list-style: none;
}
.b-wrap {
  width: 1198px;
  margin: 0 auto;
}
.main-inner {
  position: relative;
}
.main-inner .rank-container {
  border: 0;
  margin: 20px 0;
  border-radius: 4px;
}

a {
  text-decoration: none;
  transition: color 0.2s;
}

.gg-floor-module {
  margin-top: 10px;
  width: 1160px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  max-height: 96px;
  font-size: 0;
}
.gg-floor-module .lazy-img {
  height: auto;
  width: 100%;
}
.gg-floor-module img {
  border-radius: 5px;
}
.lazy-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.gg-floor-module .gg-pic {
  position: absolute;
  left: 0;
  bottom: 0;
}

/* rank-head */
ul,
li {
  list-style: none;
}
.rank-menu li:first-child {
  margin-left: 0;
}
.rank-menu li {
  width: 115px;
  font-size: 18px;
  line-height: 25px;
  padding: 0 12px;
  margin-left: 52px;
  cursor: pointer;
  text-align: center;
  float: left;
}
.rank-menu li .text1 {
  /* margin-left: 5px;
  font-size: 20px; */
  letter-spacing: 2px;
}
.rank-menu li .active {
  color: #00a1d6;
  border-bottom: 2px solid #00a1d6;
}

.rank-menu li .rank-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(//static.hdslb.com/images/base/icons.png) no-repeat;
}
.rank-menu li .rank-icon.all {
  background-position: -83px -979px;
}
.rank-menu li .rank-icon.origin {
  background-position: -83px -1041px;
}
.rank-menu li .rank-icon.bangumi {
  background-position: -83px -1107px;
}
.rank-menu li .rank-icon.cinema {
  background-position: -146px -1555px;
}
.rank-menu li .rank-icon.rookie {
  background-position: -83px -1170px;
}
</style>

<script>
import Rankcenter from "@/components/rank/Rankcenter.vue";
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
import NavigationBarLower from "@/components/NavigationBarLower.vue"; /*导航栏（下）*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  components: {
    Rankcenter,
    NavigationBar,
    NavigationBarLower,
    Footer
  }
};

// var value= sessionStorage.getItem("flg");
//   if(value==null || value==undefined){
//     setTimeout(function(){
//       sessionStorage.setItem("flg","2");
//       window.location.href = "/Rankbody1";
//     },1);
//   }
</script>

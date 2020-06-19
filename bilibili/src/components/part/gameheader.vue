<template>
  <div>
    <div class="game1">
      <div class="gameleft">
        <ul class="gameul">
          <li class="gameli1 z"><img src="@/assets/gameimg/logogame.png" /></li>
          <li class="gameli0 z" v-on="{ mouseenter: enter, mouseleave: leave }">
            <a href="/">主站</a>
            <div id="en1" style="display:none">
              <ul class="mi0">
                <li>
                  <div class="ss">
                    <a href="#">动画</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">番剧</a
                    ><small style="margin-left:40px;">3020</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">国创</a
                    ><small style="margin-left:40px;">3800</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">音乐</a
                    ><small style="margin-left:40px;">3400</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">舞蹈</a
                    ><small style="margin-left:40px;">3008</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">游戏</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">科技</a
                    ><small style="margin-left:40px;">3990</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">数码</a
                    ><small style="margin-left:40px;">4000</small>
                  </div>
                </li>
              </ul>
              <ul class="mi5">
                <li>
                  <div class="ss">
                    <a href="#">生活</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">鬼畜</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">时尚</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">资讯</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">娱乐</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">影视</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">放映厅</a
                    ><small style="margin-left:25px;">3000</small>
                  </div>
                </li>
              </ul>
              <ul class="mi1">
                <li>
                  <div class="ss">
                    <a href="#">专栏</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">直播</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">活动</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">课堂</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">黑屋</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
                <li>
                  <div class="ss">
                    <a href="#">音乐</a
                    ><small style="margin-left:40px;">3000</small>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="gameli2 z">番剧</li>
          <li class="gameli3 z">游戏中心</li>
          <li class="gameli4 z">直播</li>
          <li class="gameli5 z">会员狗</li>
          <li class="gameli6 z">漫画</li>
          <li class="gameli7 z">赛事</li>
          <li class="gameli8 z">下载APP</li>
        </ul>
      </div>
      <div class="middle">
        <input class="input1" type="text" /><input type="button" />
      </div>
      <div class="gameright">
        <ul class="gamezul">
          <li class="gamezli1"><img src="@/assets/gameimg/space.jpg" /></li>
          <li class="gamezli2 r">大会员</li>
          <li class="gamezli3 r">收藏</li>
          <li class="gamezli4 r">动态</li>
          <li class="gamezli5 r">历史</li>
          <li class="gamezli6 r">创作中心</li>
          <li class="gamezli7 x">投稿</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.mi0 {
  position: relative;
  margin-left: 20px;
  top: 20px;
  width: 50px;
}
.ss {
  width: 100px;
  height: 25px;
  position: relative;
}
.ss:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
.mi5 {
  margin-top: -180px;
  margin-left: 180px;
  position: relative;
  width: 50px;
  
}
.mi1 {
  height: 210px;
  top: -300px;
  margin-left: 350px;
  position: relative;
}
.z a {
  text-decoration: none;
  color: black;
}

#en1 ul li {
  line-height: 25px;
  list-style: none;

  margin-left: -20px;
}
#en1 {
  margin-left: -20px;
  width: 500px;
  opacity: 0.8;
  height: 220px;
  z-index: 1;
  text-decoration: none;
  position: absolute;
  background-color: #fff;
}
.game1 {
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 1519px;
  height: 50px;
}
.game1 .z {
  float: left;
  list-style: none;
  margin-left: 10px;
}
.gameli1 {
  position: relative;
  top: -10px;
  left: -40px;
}
.gameli0 {
  position: relative;
  margin-top: 8px;
  left: -40px;
}
.gameli2 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli3 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli4 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli5 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli6 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli7 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.gameli8 {
  position: relative;
  margin-top: 8px;
  left: -25px;
}
.middle .input1 {
  position: relative;
  margin-top: -2px;
  width: 400px;
  height: 38px;
  background-color: #f4f4f4;
  border: none;
}
.middle input {
  position: relative;
  margin-top: -2px;
  height: 39px;
  background-color: #e7e7e7;
  border: none;
  width: 45px;
  border: none;
  margin-left: -0px;
}
.gamezul li {
  float: left;
  list-style: none;
  position: relative;
  left: 900px;
  top: -57px;
  font-size: 13px;
}
.gameright {
  width: 660px;
}
.game1 .gameright li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 10px;
  position: relative;
}
.game1 .gameright .r {
  top: -40px;
  margin-left: 20px;
  position: relative;
}
.game1 .gameright .x {
  margin-left: 10px;
  position: relative;
  top: -48px;
  width: 100px;
  height: 36px;
  background-color: #fb7299;
  text-align: center;
  padding-top: 8px;
  color: #e7e7e7;
  border-radius: 5px;
}
</style>
<script>
export default {
  methods: {
    enter: function() {
      if (document.getElementById("en1").style.display == "block") {
        document.getElementById("en1").style.display = "none";
      } else {
        document.getElementById("en1").style.display = "block";
      }
    },
    leave: function() {
      if (document.getElementById("en1").style.display == "block") {
        document.getElementById("en1").style.display = "none";
      }
    }
  }
};
</script>

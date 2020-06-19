<template>
  <div class="box clearfix">
    <div class="left">
      <div class="banner">
        <a href="#">
          <img v-bind:src="game1" :alt="game.alt" />
          <span>{{ game.alt }}</span>
        </a>
      </div>
      <div class="brief clearfix">
        <a href="#" v-for="item in gameapps" :key="item.id">
          <img :src="item.img" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
    <div class="right">
      <div class="all">
        <a href="#" v-for="item in paihangs" :key="item.id">
          <span>{{ item.title }}</span>
          <div
            class="imgdiv"
            :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import game1 from "../assets/images-index/game1.jpg";
import bilanhangxian from "../assets/images-index/bilanhangxian.png";
import shuangshengshijie from "../assets/images-index/shuangshengshijie.jpg";
import dawangbugao from "../assets/images-index/dawangbugao.png";
import pgame1 from "../assets/images-index/pgame1.png";
import pgame2 from "../assets/images-index/pgame2.png";
import pgame3 from "../assets/images-index/pgame3.png";
import pgame4 from "../assets/images-index/pgame4.png";
import pgame5 from "../assets/images-index/pgame5.png";
import pgame6 from "../assets/images-index/pgame6.png";
import pgame7 from "../assets/images-index/pgame7.png";

export default {
  name: "Gamezx",
  data() {
    return {
      game1,
      game: {
        alt: "命运-冠位指定（Fate/GO）"
      },
      gameapps: [
        {
          img: bilanhangxian,
          title: "碧蓝航线"
        },
        {
          img: shuangshengshijie,
          title: "双生视界"
        },
        {
          img: dawangbugao,
          title: "大王不高兴"
        }
      ],
      paihangs: [
        {
          title: "公主连结Re:Dive",
          imageUrl: pgame1
        },
        { title: "偌星", imageUrl: pgame2 },
        { title: "光与夜之恋", imageUrl: pgame3 },
        { title: "灰烬战线", imageUrl: pgame4 },
        { title: "山海镜花", imageUrl: pgame5 },
        { title: "忘川风华录", imageUrl: pgame6 },
        { title: "魔法纪录  魔法少女小圆外传", imageUrl: pgame7 }
      ]
    };
  }
};
</script>

<style>
.imgdiv {
  width: 220px;
  height: 220px;
  display: none;
  position: absolute;
  bottom: 0;
  left: 442px;
  background-repeat: no-repeat;
  /* background-color: aqua; */
}
a:focus {
  color: #000000;
  text-decoration: none;
}
.all a:hover .imgdiv {
  display: block;
}
.all a:hover {
  color: #00a1d6;
  background-color: #e5e9ef;
}
.all a span {
  width: 13em;
  height: 28px;
  display: block;
  line-height: 28px;
  overflow: hidden;
}
.all a {
  padding-left: 16px;
  display: block;
  font-size: 12px;
  line-height: 28px;
  color: #222;
}
.all {
  padding: 35px 0 0 6px;
  background: url(../assets/images-index/title.png) no-repeat;
}
.right {
  width: 201px;
  min-height: 234px;
  margin: 12px 0 0 0;
  float: left;
  background: url(../assets/images-index/line.png) no-repeat;
}
.brief span {
  width: 4em;
  height: 14px;
  margin: 8px auto;
  display: block;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  color: #222;
  overflow: hidden;
}
.brief a img {
  width: 64px;
  height: 64px;
  border-radius: 12px;
}
.brief a:hover {
  background-color: #e5e9ef;
}
a:hover {
  text-decoration: none;
}
.brief a {
  width: 88px;
  height: 110px;
  padding: 6px 12px 0px 12px;
  display: block;
  float: left;
  overflow: hidden;
}
.brief {
  margin-top: 6px;
}
.banner span {
  width: 240px;
  padding: 0 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 12px;
  line-height: 30px;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
  background: url(../assets/images-index/shadow.png) repeat-x; /*阴影*/
}
.banner a img {
  width: 240px;
  height: 128px;
  border-radius: 4px;
}
.banner a {
  width: 240px;
  height: 128px;
  display: block;
  position: relative;
}
.banner {
  width: 240px;
  height: 128px;
  margin-left: 12px;
}
.left {
  width: 265px;
  margin: 12px 0 0 0;
  float: left;
}
.box {
  width: 466px;
  height: 256px;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 45px;
  left: 70px;
  z-index: 1;
  background: #fff;
}
</style>

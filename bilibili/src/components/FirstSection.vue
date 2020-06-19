<template>
  <div class="b-wrap">
    <ContentleftOne></ContentleftOne>
    <FirstSectionRight
      :first_right="first_right"
      id="r1"
      ref="s1"
      v-if="flag"
      @plus1="handlePlus1()"
    ></FirstSectionRight>
    <FirstSectionRight
      :first_right="first_right1"
      id="r1"
      ref="s2"
      v-if="!flag"
      @plus2="handlePlus2()"
    ></FirstSectionRight>
    <div class="space-between">
      <div class="extension">
        <header class="storey-title">
          <div class="l-con">
            <img :src="svgtuiguang" alt="" class="svg-icon" />
            <a href="#" class="name no-link">推广</a>
            <div class="text-info">
              <a href="#" class="text-info-link">
                <img :src="fire" class="bilifont" />
                限时！0粉丝获认证闪电
              </a>
              <a href="#" class="text-info-link">
                <img :src="fire" class="bilifont" />
                B站神奇脑回路大赏？
              </a>
            </div>
          </div>
        </header>
        <div class="ext-box">
          <div
            href="#"
            class="video-card-common ex-card-common"
            v-for="item in extension"
            :key="item.id"
          >
            <div class="card-pic">
              <a href="#" class="tw">
                <img :src="item.img" width="206" height="116" />
                <span class="shadow2"></span>
                <div class="count">
                  <div class="rights">
                    <span>{{ item.time }}</span>
                  </div>
                </div>
                <p class="ex-title">
                  {{ item.title }}
                </p>
              </a>
              <a href="#" class="ex-up">
                <img
                  src="../assets/images-index/up.png"
                  class="bilifont"
                  style="width:15px;height:15px"
                />
                {{ item.up }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bypb-window">
        <div class="online">
          <a href="#">在线列表</a>
        </div>
        <a href="#" class="operate-card">
          <img :src="living" />
        </a>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js"></script>
<script src="//cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
import ContentleftOne from "@/components/ContentleftOne.vue"; /*轮播*/
import FirstSectionRight from "@/components/FirstSectionRight.vue"; /*轮播右边内容*/
import r1 from "../assets/images-index/r1.jpg";
import r2 from "../assets/images-index/r2.jpg";
import r3 from "../assets/images-index/r3.jpg";
import r4 from "../assets/images-index/r4.jpg";
import r5 from "../assets/images-index/r5.jpg";
import r6 from "../assets/images-index/r6.jpg";
import r7 from "../assets/images-index/r7.jpg";
import r8 from "../assets/images-index/r8.jpg";

import t1 from "../assets/images-index/t1.jpg";
import t2 from "../assets/images-index/t2.jpg";
import t3 from "../assets/images-index/t3.jpg";
import t4 from "../assets/images-index/t4.jpg";
import t5 from "../assets/images-index/t5.jpg";
import t6 from "../assets/images-index/t6.jpg";
import t7 from "../assets/images-index/t7.jpg";
import t8 from "../assets/images-index/t8.jpg";

import svgtuiguang from "@/assets/images-index/bili-tuiguang.svg";
import fire from "../assets/images-index/fire.png";
import tg1 from "../assets/images-index/tg1.jpg";
import tg2 from "../assets/images-index/tg2.jpg";
import tg3 from "../assets/images-index/tg3.jpg";
import tg4 from "../assets/images-index/tg4.jpg";
import tg5 from "../assets/images-index/tg5.jpg";
import living from "../assets/images-index/living.jpg";
export default {
  components: {
    ContentleftOne,
    FirstSectionRight
  },
  data() {
    return {
      svgtuiguang,
      fire,
      living,
      flag: true,

      extension: [
        {
          img: tg1,
          time: "05:10",
          title: "《星之启示》——来听神仙唱歌！",
          up: "山海镜花"
        },
        {
          img: tg2,
          time: "04:17",
          title: "用海绵宝宝还原周深+新裤子乐队【不会拜拜的Disco】高解析人声",
          up: "YhvEt"
        },
        {
          img: tg3,
          time: "06:37",
          title: "Couple Talk｜情侣之间到底该不该查看对方手机？",
          up: "羊咩咩和丫吖吖"
        },
        {
          img: tg4,
          time: "05:08",
          title: "看电视呢！严肃一点！！！",
          up: "kacikaci小当家"
        },
        {
          img: tg5,
          time: "02:43",
          title: "Running Man",
          up: "乔阿呸"
        }
      ],
      first_right: [
        {
          href: "/box",
          img: r1,
          title: "【洛天依原创/227】肮脏的神",
          up: "沧弦落尘",
          play: "29.2"
        },
        {
          img: r2,
          title:
            "【新手向绘画技巧】【干货】软件自动勾线，终于可以随意画飘逸头发了（附讲解）",
          up: "千久泽猫",
          play: "6.1"
        },
        {
          img: r3,
          title: "【祖娅纳惜】 年 少 无 罪 （少年十三 百无禁忌）",
          up: "祖娅纳惜",
          play: "29.9"
        },
        {
          img: r4,
          title: "如果把【黑人抬棺】做成中国风音乐",
          up: "12仔",
          play: "222.5"
        },
        {
          img: r5,
          title: "王老菊教你骑砍04：文化自信南帝国",
          up: "怕上火暴王老菊",
          play: "78.9"
        },
        {
          img: r6,
          title: "恭喜你发现火影の宝藏",
          up: "催励君",
          play: "14.2"
        },
        {
          img: r7,
          title:
            "另一位巨人！逼王首度装逼惨遭打脸？人类是地球的癌细胞？盖亚奥特曼分集解析计划05",
          up: "H萌团队",
          play: "4.1"
        },
        {
          img: r8,
          title: "《猫和老鼠》导演去世一个时代拉下了帷幕。",
          up: "北神明",
          play: "25.1"
        }
      ],
      first_right1: [
        {
          img: t1,
          title:
            "【minecraft-3D特效X東方】这漫天的核爆......何不和我一起参加属于我们的弹幕盛宴！",
          up: "不背完牛津高阶不改名",
          play: "10.4"
        },
        {
          img: t2,
          title: "返校第一天就被罗老师拉进法庭？？",
          up: "鹤吱菌",
          play: "89.7"
        },
        {
          img: t3,
          title: "去你的防狼穿搭 | 我也要穿衣自由",
          up: "怪力老陈",
          play: "17.9"
        },
        {
          img: t4,
          title: "【泠鸢翻唱】巡恋风（那…再见了）",
          up: "泠鸢yousa",
          play: "14.6"
        },
        {
          img: t5,
          title: "这TM才叫高燃踩点！",
          up: "会唱跳Rap的胖虎",
          play: "29.5"
        },
        {
          img: t6,
          title: "老♂街",
          up: "可樂C",
          play: "8.4"
        },
        {
          img: t7,
          title: "成年人的崩溃往往只是一瞬间",
          up: "Tntlike",
          play: "223.9"
        },
        {
          img: t8,
          title: "馬と鹿 - 米津玄师 / 天音彼方(Cover)",
          up: "天音彼方Official",
          play: "30.4"
        }
      ]
    };
  },

  methods: {
    handlePlus1: function() {
      // console.log('emited!');
      if (this.flag) {
        this.flag = false;
        console.log("emited!1");
      } else {
        this.flag = false;
      }
    },
    handlePlus2: function() {
      // console.log('emited!');
      if (!this.flag) {
        this.flag = true;
        console.log("emited!2");
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style>
@media screen and (max-width: 1654px) {
  .b-wrap {
    width: 1198px;
  }
  .b-wrap .recommend-box {
    width: 638px;
    height: 242px;
  }
  .b-wrap .extension {
    width: 854px;
    /* height: 254px; */
    /* background-color: pink; */
  }
  .b-wrap .bypb-window {
    width: 320px;
  }
}
.operate-card img {
  width: 100%;
  border-radius: 2px;
}
.bypb-window .online a:hover {
  color: #00a1d6;
}
.bypb-window .online a {
  flex: 1;
  text-align: center;
  color: #212121;
  transition: color 0.3s;
  font-size: 12px;
}
.bypb-window .online {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 19px;
  height: 30px;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  background: #f4f4f4;
  color: #505050;
  line-height: 30px;
}
.bypb-window {
  width: 320px;
}
.tw:hover {
  color: #00a1d6;
}
/* .tw {
  white-space:nowrap;
} */
.shadow2 {
  width: 206px;
  height: 42px;
  padding: 0 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 50px;
  left: 0px;
  font-size: 12px;
  line-height: 30px;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
  background: url(../assets/images-index/shadow.png) repeat-x; /*阴影*/
}

.rights {
  position: absolute;
  right: 5px;
  /* top: 97px; */
  bottom: 55px;
}
.video-card-common .ex-up {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
  line-height: 16px;
  margin-top: 1px;
  width: 206px;
  height: 15px;
}
/* .video-card-common .gg-icon {
    display: inline-block;
    font-size: 12px;
    border-radius: 2px;
    margin-right: 8px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border: 1px solid #b2b2b2;
    color: #b2b2b2;
    font-weight: 400;
} */
.ex-title {
  /* width: 206px; */
  /* height: 40px; */
  /* display: block; */
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 8px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  padding-right: 12px;
}
.count {
  display: flex;
  align-items: center;
  color: #fff;
  line-height: 16px;
}
.video-card-common .card-pic a img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.video-card-common .card-pic a {
  display: block;
  position: relative;
  /* width: 100%; */
  /* height: 100%; */
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMV…cJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: 50%; */
}
.video-card-common .card-pic {
  position: relative;
  width: 100%;
  height: 116px;
}
.video-card-common {
  width: 206px;
  cursor: pointer;
}
.extension .ext-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  width: 1070px;
  height: 192px;
}
.text-info .text-info-link:hover {
  color: #00a1d6;
}
.text-info .text-info-link {
  color: #212121;
  font-size: 12px;
  transition: color 0.3s;
  margin-right: 10px;
}
.text-info {
  margin-top: 9px;
}
.storey-title .text-info a .bilifont {
  margin-right: 3px;
  /* color: #f0361b; */
  width: 16px;
  height: 15px;
  margin-bottom: 2px;
}
.storey-title .name {
  margin: 0 20px 0 0;
  vertical-align: bottom;
  font-size: 20px;
  line-height: 36px;
}
.storey-title .no-link {
  color: #212121;
  cursor: default;
}
.storey-title .l-con .svg-icon {
  margin-right: 6px;
  width: 36px;
  height: 36px;
  vertical-align: middle;
  /* fill: currentColor; */
}
.storey-title .l-con {
  display: inline-flex;
}
.storey-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
}
.extension {
  width: 1070px;
  height: 244px;
  overflow: hidden;
  /* outline-color: pink; */
}
.space-between {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 35px;
}
#t1 {
  display: none;
}

.shadow {
  width: 206px;
  height: 42px;
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
.vdio {
  position: absolute;
  right: 8px;
  bottom: 5px;
}
.video-card-reco .info-box .info .play {
  font-size: 12px;
  color: #fff;
  position: absolute;
  top: 95px;
}
.info .up {
  font-size: 12px;
  color: #fff;
  position: absolute;
  top: 75px;
  margin-bottom: 3px;
}

.video-card-reco:hover .info-box .info {
  top: 0;
  background-color: black;
  opacity: 0.7;
}
.video-card-reco:hover .info-box .info .title {
  height: 36px;
  white-space: normal;
}
.info-box .info .title {
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  color: #fff;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* white-space: normal; */
  font-weight: 500;
}
.video-card-reco .info-box .info {
  position: absolute;
  /* z-index: 2; */
  width: 100%;
  height: 100%;
  top: 64px;
  left: 0;
  transition: top 0.2s;
  padding: 26px 10px 10px;
}
.video-card-reco .info-box img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.video-card-reco .info-box {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
.recommend-box .video-card-reco {
  margin-bottom: 10px;
  position: relative;
  width: 206px;
  height: 116px;
  background-color: blanchedalmond;
}

.b-wrap {
  margin: 0 auto;
}
.recommend-box {
  overflow: hidden;
  /* background-color: aqua; */ /*轮播右边大块*/
  position: relative;
  /* right: 160px; */
  left: 570px;
  display: flex;
  width: 854px;
  height: 242px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>

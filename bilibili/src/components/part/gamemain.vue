<template>
  <div style="width:1300px;">
    <ul class="gr" v-for="item in items" :key="item.id">
      <li class="vvv">
        <div class="ppt">
          <img v-bind:src="item.img" />
          <p class="pptp">{{ item.first }}</p>
          <p class="pptpp">{{ item.sec }}</p>
          <a href="#">进入官网</a>
        </div>
      </li>
      <li class="vsvs">
        <div class="ppt">
          <img v-bind:src="item.img1" />
          <p class="pptp">{{ item.thr }}</p>
          <p class="pptpp">{{ item.four }}</p>
          <a href="#">进入官网</a>
        </div>
      </li>
      <li class="vc">
        <div class="ppt">
          <img v-bind:src="item.img2" />
          <p class="pptp">{{ item.five }}</p>
          <p class="pptpp">{{ item.six }}</p>
          <a href="#">进入官网</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("@/assets/gameimg/one.png"),
          img1: require("@/assets/gameimg/two.png"),
          img2: require("@/assets/gameimg/nice.png"),
          first: "公主连结Re:Dive",
          sec: "★3「镜华」6月8日-6月23日限时up",
          thr: "动物朋友展览区",
          four: "全平台公测正式开启！",
          five: "万灵启源",
          six: "和风兽娘养成手游《万灵启源》火热预约中！"
        },
        {
          id: 2,
          img: require("@/assets/gameimg/four.png"),
          img1: require("@/assets/gameimg/five.png"),
          img2: require("@/assets/gameimg/six.png"),
          first: "双生视界",
          sec: "「沙滩狂热之夜」主题卡池限时UP！",
          thr: "灰烬战线",
          four: "全新军武拟人战略手游预约正式开启！",
          five: "一血万杰",
          six: "正统和风神话传奇RPG-全平台公测开启！"
        },
        {
          id: 3,
          img: require("@/assets/gameimg/seven.png"),
          img1: require("@/assets/gameimg/eight.png"),
          img2: require("@/assets/gameimg/nine.png"),
          first: "重装战姬",
          sec: "「机甲X少女」末世战略手游",
          thr: "梦想养成计划",
          four: "登上你的舞台 诠释星之梦想！",
          five: "终焉誓约",
          six: "游戏预约开启！"
        },
        {
          id: 4,
          img: require("@/assets/gameimg/ten.png"),
          img1: require("@/assets/gameimg/11.png"),
          img2: require("@/assets/gameimg/12.png"),
          first: "刀剑神域黑衣剑士：王牌",
          sec: "预约现已开启，“艾恩葛朗特”即将开放！",
          thr: "古剑奇谭木语人",
          four: "古剑全新系列手游预约开启！",
          five: "命运-冠位指定（Fate/GO）",
          six: "贞德〔Alter〕6月1-15日限时登场"
        }
      ]
    };
  }
};
</script>
<style>
.gr {
  position: relative;
}
.gr li {
  float: left;
  margin-top: 20px;
}
.vsvs {
  margin-left: 40px;
}
.vc {
  margin-left: 40px;
}
.ppt {
  position: relative;
  top: 30px;
  width: 310px;
  height: 280px;
  box-shadow: 0px 5px 5px #f3f3f3;
  transition: 0.4s;
  border-bottom: 1px solid #e1e1e1;
}
.ppt:hover {
  transform: scale(1.1);
  box-shadow: 6px 6px 6px 2px gray;
}
.pptp {
  font-weight: bold;
  font-size: 16px;
}
.pptpp {
  color: #707070;
}
.ppt a {
  width: 86px;
  height: 23px;
  border: 1px solid #2cbdf0;
  color: #2cbdf0;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  text-decoration: none;
  margin-left: 210px;
  transition: 0.4s;
  position: relative;
}
.ppt a:hover {
  background-color: #2cbdf0;
  color: #fff;
}
</style>

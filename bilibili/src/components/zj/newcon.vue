<template>
  <div class="ggf">
    <div><img class="bbss" src="@/assets/imgzrc/guanggaogg.png" /></div>
    <p class="xgtj">相关推荐</p>
    <ul class="xsp" v-for="item in items" :key="item.id">
      <li class="xsp1">
        <img v-bind:src="item.img" />
        <p class="xsph">{{ item.first }}</p>
        <p class="xsph1">{{ item.sec }}</p>
        <p class="xsph2">{{ item.thr }}</p>
      </li>
    </ul>
    <div style="margin-left:10px">
      <img
        class="bbss"
        style="border-radius:5px"
        src="@/assets/imgzrc/sktt1.png"
      />
    </div>
    <p style="margin-top:20px;font-size:16px;margin-left:10px">
      大家围观的直播
    </p>
    <div class="nn" style="margin-left:10px">
      <img
        class="bbss"
        style="border-radius:5px"
        src="@/assets/imgzrc/ttxc.png"
      />
      <img class="yx" src="@/assets/imgzrc/space.jpg" alt="" />
      <p class="yc">欢迎来到lzxx的直播间</p>
      <p class="yv">人气3720</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("@/assets/imgzrc/xsp1.png"),
          first: "【佐佐木小次郎】若要知敌，此刀足矣！[Fate/AMV]",
          sec: "Miaooky天空",
          thr: "3.4万播放 · 196弹幕"
        },
        {
          id: 2,
          img: require("@/assets/imgzrc/xsp2.png"),
          first: "骑士永存，枪魂不灭！致Lancer[Fate/AMV]",
          sec: "梦之痕zs",
          thr: "13.0万播放 · 1703弹幕"
        },
        {
          id: 3,
          img: require("@/assets/imgzrc/xsp3.png"),
          first: "【Fate十年 特别篇】《燕返し》2006~2017 #5",
          sec: "近衛君",
          thr: "5.5万播放 · 713弹幕"
        },
        {
          id: 4,
          img: require("@/assets/imgzrc/xsp4.png"),
          first: "【Fate剪辑】吾王Saber VS 佐佐木小次郎",
          sec: "最后的砖家",
          thr: " 3.6万播放 · 231弹幕"
        },
        {
          id: 5,
          img: require("@/assets/imgzrc/xsp5.png"),
          first: "【Fate人物志08】小莫竟然是这样的骑士?",
          sec: "蓝格雷",
          thr: "11.5万播放 · 1674弹幕"
        },
        {
          id: 6,
          img: require("@/assets/imgzrc/xsp6.png"),
          first: "新旧TV版“燕返”，哪个吊？！",
          sec: "joker舰队指挥官糖泥",
          thr: "1.1万播放 · 5弹幕"
        }
      ]
    };
  }
};
</script>
<style scoped>
.yx {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 10px;
}
.yv {
  position: relative;
  margin-left: 70px;
  font-size: 12px;
  color: #999;
}
.yc {
  position: relative;
  margin-left: 70px;
  margin-top: -50px;
  font-size: 14px;
}
.nn {
  width: 320px;
  height: 250px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.ggf {
  position: relative;
  top: -630px;
  left: 1080px;
  width: 400px;
  height: 400px;
}
.bbss {
  width: 320px;
  height: 186px;
}
.xgtj {
  font-size: 16px;
  position: relative;
  margin-left: 20px;
  margin-top: 10px;
  font-weight: bold;
}
.xsp li {
  list-style: none;
  margin-left: -30px;
  position: relative;
}
.xsp li img {
  width: 141px;
  height: 80px;
}
.xsph {
  margin-left: 146px;
  position: relative;
  margin-top: -85px;
  width: 170px;
  font-size: 14px;
}
.xsph1 {
  margin-left: 146px;
  position: relative;
  top: -10px;
  font-size: 12px;
  color: #999;
}
.xsph2 {
  margin-left: 146px;
  position: relative;
  top: -10px;
  color: #999;
}
</style>

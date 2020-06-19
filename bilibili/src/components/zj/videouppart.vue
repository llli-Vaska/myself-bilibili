<template>
  <div class="vp">
    <div class="leftvi">
      <p class="tts">荣耀存心，非流于形 —— 致佐佐木小次郎</p>
      <p class="ccdd">动画>MAD·AMV 2015-08-21 11:21:23</p>
      <p class="ddff">7.8万播放 · 678弹幕</p>
    </div>
    <div class="rightvi">
      <div class="tx"><img src="@/assets/imgzrc/space.jpg" /></div>
      <div class="txa">
        <a class="txbb" href="#"
          >叶心<small class="txaa"><a href="#">发消息</a></small></a
        >
        <p class="txcc">新浪微博：叶心。一个浪人</p>
        <div class="txdd">
          <button class="cdddd">充电</button
          ><button class="sddd">+ 关注 5000</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.vp {
  width: 1200px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.leftvi {
  width: 800px;
  height: 100px;
  margin-left: 50px;
  position: relative;
}
.tts {
  position: relative;
  font-size: 18px;
  font-weight: bold;

  margin-top: 50px;
}
.ccdd {
  font-size: 14px;
  color: #999;
}
.ddff {
  font-size: 14px;
  color: #999;
}
.rightvi {
  width: 400px;
  position: relative;
  left: 800px;
  top: -100px;
}
.tx img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.txa {
  position: relative;
  left: 70px;
  top: -50px;
}
.txbb {
  color: black;
  text-decoration: none;
  font-family: "黑体";
  font-size: 16px;
}
.txbb:hover {
  color: #999;
}
.txaa {
  position: relative;
  margin-left: 20px;
}
.txaa a {
  color: #999;
}
.txcc {
  font-size: 14px;
  color: #999;
}
.cdddd {
  width: 80px;
  height: 30px;
  background: #fff;
  border: 1px solid #fb7299;
  color: #fb7299;
  transition: 0.5s;
}
.cdddd:hover {
  background-color: #fb7299;
  color: #fff;
}
.sddd {
  width: 120px;
  height: 30px;
  border: 1px solid #00a1d6;
  background-color: #00a1d6;
  color: #fff;
  margin-left: 30px;
  border-radius: 2px;
  transition: 0.5s;
}
.sddd:hover {
  background-color: #10c3fa;
  border: 1px solid #10c3fa;
}
</style>

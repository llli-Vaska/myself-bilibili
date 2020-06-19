<template>
  <div class="recommend-activity home-slide">
    <div class="carousel">
      <div class="van-slide" style="width: 320px; height: 330px;">
        <div class="item">
          <div class="shadow3"></div>
          <a href="#">
            <img :src="peiyin" />
            <p class="title">{{ tuijiantitle }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import peiyin from "../assets/images-index/peiyin.jpg";
export default {
  name: "ReYou",
  data() {
    return {
      peiyin,
      tuijiantitle: "配音主播开播有奖"
    };
  }
};
</script>

<style>
.shadow3 {
  opacity: 0.6;
  width: 320px;
  height: 50px;
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

.home-slide .item .title {
  position: absolute;
  bottom: 10px;
  left: 12px;
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 70%;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: inherit;
}
.recommend-activity .van-slide img {
  /* width: 100%; */
  /* height: 100%; */
  border-radius: 2px;
}
.van-slide > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.home-slide .van-slide {
  z-index: 0;
  overflow: hidden;
}
.recommend-activity {
  position: relative;
  height: 330px;
}
</style>

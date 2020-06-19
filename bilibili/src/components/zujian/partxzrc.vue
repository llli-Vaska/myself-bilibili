<template>
  <div class="zrc">
    <div class="image mm">
      <img src="@/assets/imgsz/ps.png" />
      <div class="image-content">
        <h1>告白日记</h1>
        <div class="icons">
          <a href="#" class="icon fas fa-heart"></a>
          <a href="#" class="icon fas fa-comment"></a>
          <a href="#" class="icon fas fa-share"></a>
        </div>
      </div>
    </div>
    <div class="boxz">
      <div class="upzrc">
        <div class="hd">热门活动</div>
        <div class="more">更多></div>
        <ul class="lll">
          <li>
            <a href="#">沙雕之主</a>
            <h6>3.6万人参加</h6>
          </li>
          <li class="hz">
            <a href="#">脑洞节 神奇脑回路大赏</a>
            <h6>1.2万人参与</h6>
          </li>
          <li class="bt"></li>
        </ul>
      </div>
      <div class="down"><img src="@/assets/imgsz/xxjh.png" alt="" /></div>
    </div>
    <div><partxzrcdown></partxzrcdown></div>
  </div>
</template>
<script>
import partxzrcdown from "@/components/zujian/partxzrcdown.vue";

export default {
  name: "partxzrc",
  components: {
    partxzrcdown
  }
};
</script>
<style scoped>
.bt {
  width: 500px;
  height: 23px;
  background-color: #fff;
  margin-top: 20px;
  margin-left: -10px;
}
.down img {
  position: relative;
  width: 500px;
  height: 100px;
  margin-top: -10px;
  border-radius: 10px;
}
.lll {
  font-size: 15px;
  margin-left: -30px;
  margin-top: 10px;
  font-family: "黑体";
}
.hz {
  margin-top: 10px;
}
h6 {
  margin-left: 420px;
  margin-top: -18px;
}
.lll li a {
  text-decoration: none;
  color: black;
}
.lll li a:hover {
  color: #3498bd;
}
.boxz {
  width: 500px;
  height: 230px;
  background-color: #fafafa;
  position: relative;
  margin-left: 780px;
  top: -10px;
  border-radius: 10px;
}
.lll {
  list-style: none;
}
.hd {
  width: 100px;
  font-size: 20px;
  position: relative;

  margin-top: -280px;
  padding-top: 10px;
  padding-left: 10px;
}
.more {
  width: 70px;
  font-size: 14px;
  position: relative;
  margin-left: 420px;
  margin-top: -28px;
}
.zrc {
  background-color: rgba(255, 255, 255, 0.7);
  width: 1300px;

  top: -100px;
}
.mm {
  position: relative;
  margin-top: -630px;
  width: 644px;
  height: 288px;
  left: -100px;
}
.mm img {
  border-radius: 10px;
}
.image {
  overflow: hidden;
  cursor: pointer;
}
.image-content {
  position: absolute;
  top: -15px;
  left: 0;
  width: 100%;
  height: 95%;
  padding: 40px;
  box-sizing: border-box;
}
.image-content h1 {
  font-weight: bold;
  color: #2b4dd5;
  font-family: "华文彩云";
  text-transform: uppercase;
  transform: translateY(20px);
  transition: 0.4s;
}
.image:hover .image-content h1 {
  transform: translateY(0px);
}
.icons {
  position: absolute;
  right: 40px;
  bottom: 40px;
}
.icon {
  text-decoration: none;
  color: #333;
  font-size: 22px;
  margin: 0 10px;
  transform: translateY(100px);
}
.image:hover .icon {
  transform: translateY(0px);
}
.icon:nth-child(1) {
  transition: transform 0.4s 0.05s, color 0.4s;
}
.icon:nth-child(2) {
  transition: transform 0.4s 0.1s, color 0.4s;
}
.icon:nth-child(3) {
  transition: transform 0.4s 0.15s, color 0.4s;
}
.icon:hover {
  color: #3498bd;
}
.image-content::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 10px;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  transition: 0.5s;
}
.image-content:hover::before {
  height: 100px;
}
</style>

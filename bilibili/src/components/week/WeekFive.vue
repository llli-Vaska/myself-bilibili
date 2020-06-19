<template>
  <div class="zone-list-box1">
    <div class="time-line-card1 item1" v-for="item in listfj" :key="item.id">
      <a href="#" class="pic1">
        <img :src="item.img" />
      </a>
      <div class="txt1">
        <a href="#" class="ss1">{{ item.title }}</a>
        <p class="update1">
          <a href="#" class="published1">{{ item.publish }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import of4 from "@/assets/folkopera-images/of4.jpg";
import of5 from "@/assets/folkopera-images/of5.jpg";
import of6 from "@/assets/folkopera-images/of6.jpg";
import of7 from "@/assets/folkopera-images/of7.jpg";
import of8 from "@/assets/folkopera-images/of8.jpg";
import of9 from "@/assets/folkopera-images/of9.jpg";

export default {
  data() {
    return {
      listfj: [
        {
          img: of4,
          title: "水果篮子 第二季",
          publish: "第5话"
        },
        {
          img: of5,
          title: "生肖奇缘 第二季（僅限台灣地區）",
          publish: "第5话"
        },
        {
          img: of6,
          title: "A3!满开剧团",
          publish: "第5话"
        },
        {
          img: of7,
          title: "啄木鸟侦探社",
          publish: "第4话"
        },
        {
          img: of8,
          title: "公主连结Re:Dive",
          publish: "第5话"
        },
        {
          img: of9,
          title: "白猫计划 零之纪元",
          publish: "第5话"
        }
      ]
    };
  }
};
</script>

<style>
@media screen and (max-width: 1654px) {
  .zone-list-box1 {
    height: 332px;
    width: 800px;
    position: absolute;
    top: 2180px;
    left: 155px;
  }
}
@media screen and (min-width: 1739px) {
  .zone-list-box1 {
    width: 1070px;
    position: absolute;
    top: 2220px;
    left: 155px;
  }
}

/* ----------------------------- */
.time-line-card1 .txt1 .update1 a {
  width: 100%;
  color: #999;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
}
.time-line-card1 .txt1 .update1 .published1 {
  color: #00a1d6;
  font-size: 12px;
}
.time-line-card1 .txt1 .ss1:hover {
  color: #00a1d6;
}
.time-line-card1 .txt1 .ss1 {
  font-size: 14px;
  height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 2px 0 12px;
}
.time-line-card1 .txt1 {
  width: 152px;
  font-weight: 500;
}
.time-line-card1 .pic1 img {
  width: 70px;
  height: 70px;
  border-radius: 2px;
}
.time-line-card1 {
  margin: 0 30px 24px 0;
  width: 227px;
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.zone-list-box1 {
  /* position: absolute;
   top: 2220px;
    left: 155px; */
  /* width: 1070px; */
  height: 376px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  overflow: auto;
}
.time-line-card1 .pic1 {
  margin-right: 12px;
  color: #212121;
  transition: color 0.3s;
}
</style>

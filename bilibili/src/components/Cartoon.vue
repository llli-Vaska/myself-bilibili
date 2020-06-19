<template>
  <div class="app-layout">
    <div class="recommendation-list">
      <a href="#" class="list-item" v-for="item in cartoons" :key="item.id">
        <div class="p-relative">
          <img :src="item.img" class="cartoonimg " />
          <span class="cartoontitle text-center">{{ item.title }}</span>
        </div>
      </a>
    </div>
    <div class="divider"></div>
    <div class="cartoon-right">
      <div class="list-title">人气漫画</div>
      <div class="item-list over-hidden">
        <a
          href="#"
          class="list-item"
          v-for="item in cartoonright"
          :key="item.id"
        >
          <span class="item-index">{{ item.index }}</span>
          <span class="item-label">{{ item.title }}</span>
          <div
            class="imgdivcartoon"
            :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import cartoon1 from "@/assets/images-index/cartoon1.jpg";
import cartoon2 from "@/assets/images-index/cartoon2.jpg";
import cartoon3 from "@/assets/images-index/cartoon3.jpg";
import cartoon4 from "@/assets/images-index/cartoon4.jpg";

// import car1 from "../assets/images-index/car1.jpg";
// import car2 from "../assets/images-index/car2.jpg";
// import car3 from "../assets/images-index/car3.jpg";
// import car4 from "../assets/images-index/car4.jpg";
// import car5 from "../assets/images-index/car5.jpg";
// import car6 from "../assets/images-index/car6.jpg";
export default {
  data() {
    return {
      cartoonright: [
        {
          index: "1",
          title: "鬼灭之刃"
        },
        {
          index: "2",
          title: "辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
        },
        {
          index: "3",
          title: "租借女友"
        },
        {
          index: "4",
          title: "天官赐福"
        },
        {
          index: "5",
          title: "我的守护女友"
        },
        {
          index: "6",
          title: "转生成为了只有乙女游戏破灭Flag的邪恶大小姐"
        }
      ],
      cartoons: [
        {
          img: cartoon1,
          title: "工作细胞"
        },
        {
          img: cartoon2,
          title: "租借女友"
        },
        {
          img: cartoon3,
          title: "辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
        },
        {
          img: cartoon4,
          title: "仙王的日常生活"
        }
      ]
    };
  }
};
</script>

<style>
.item-list .list-item:hover {
  background-color: #f4f4f4;
}
.item-label {
  margin-left: 10px;
}
.item-index {
  color: #cf9870;
}
.item-list .list-item {
  width: 187px;
  padding: 0 20px;
  text-decoration: none;
  color: #1c1d1f;

  white-space: nowrap;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.over-hidden {
  overflow: hidden;
}
.item-list {
  margin-top: 8px;
  font-size: 13px;
  line-height: 2.6;
}
.list-title {
  margin-left: 20px;
  font-size: 16px;
  color: #1c1d1f;
}
.cartoon-right {
  width: 187px;
  height: 230px;
  position: absolute;
  top: 15px;
  right: 3px;
}
.divider {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 220px;
  position: absolute;
  top: 20px;
  right: 195px;
}
.cartoontitle {
  max-width: 136px;
  margin-top: 6px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  bottom: 0;
}
.p-relative {
  width: 136px;
  height: 100px;
  position: relative;
  float: left;
  margin: 9px;
}
.list-item:hover .cartoontitle {
  color: #337ab7;
}
.list-item {
  text-decoration: none;
  /* float: left; */
  position: relative;
  /* display: inline-block; */
}
.recommendation-list {
  width: 310px;
  height: 100%;
  position: relative;
  margin-left: -5px;
  display: inline-block;
  /* background-color: bisque; */
}
.cartoonimg {
  width: 136px;
  height: 77px;
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
}
.app-layout {
  display: none;
  width: 520px;
  height: 260px;
  padding: 20px 0 20px 20px;
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 4px 4px;
  position: absolute;
  top: 45px;
  left: 235px;
}
</style>

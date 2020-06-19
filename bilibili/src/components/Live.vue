<template>
  <div class="live-box ">
    <div class="hot-live">
      <h3 class="title">热门直播:</h3>
      <div class="room-list">
        <a href="#" class="list-item" v-for="item in live" :key="item.id">
          <img :src="item.img" class="face" />
          <div class="hover">
            <span class="redbit"></span>
            LIVE
          </div>
          <p class="uname">{{ item.username }}</p>
        </a>
      </div>
    </div>
    <div class="hot-act">
      <h3 class="title">热门活动:</h3>
      <div class="act-list">
        <a href="#" class="list-item" v-for="item in lives" :key="item.id">
          <img :src="item.img" class="banner" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import uname1 from "@/assets/images-index/uname1.jpg";
import uname2 from "@/assets/images-index/uname2.jpg";
import uname3 from "@/assets/images-index/uname3.jpg";
import uname4 from "@/assets/images-index/uname4.jpg";
import uname5 from "@/assets/images-index/uname5.jpg";
import uname6 from "@/assets/images-index/uname6.jpg";
import live_right1 from "@/assets/images-index/book.jpg";
import live_right2 from "@/assets/images-index/book2.jpg";
export default {
  data() {
    return {
      lives: [
        {
          img: live_right1
        },
        {
          img: live_right2
        }
      ],
      live: [
        {
          img: uname1,
          username: "席巴鸽"
        },
        {
          img: uname2,
          username: "一只小胖猪77"
        },
        {
          img: uname3,
          username: "烤猪者DC"
        },
        {
          img: uname4,
          username: "望神"
        },
        {
          img: uname5,
          username: "祥祥子不语"
        },
        {
          img: uname6,
          username: "丸子"
        }
      ]
    };
  }
};
</script>

<style>
.act-list .list-item .banner {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  width: 208px;
  height: 80px;
}
.act-list .list-item:hover {
  background: #eaeaea;
}
.act-list .list-item {
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: -21px;
}
.hot-act {
  float: left;
  width: 229px;
  padding-left: 21px;
}
.redbit {
  position: absolute;
  top: 25px;
  left: 8px;
  width: 12px;
  height: 12px;
  background: #ff699e;
  border-radius: 50%;
}
.room-list .list-item .uname {
  margin: 3px 0 0;
  text-align: center;
  color: #000;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.room-list .list-item:hover .hover {
  opacity: 1;
  transform: scale(1);
}
.room-list .list-item .hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-indent: 22px;
  border-radius: 50%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  transform: scale(0);
  transition: all 0.2s cubic-bezier(0.22, 0.58, 0.12, 0.98);
}
.room-list .list-item .face {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
.room-list .list-item {
  position: relative;
  float: left;
  margin: 10px 17px 0 0;
  width: 64px;
  height: auto;
}
.room-list {
  font-size: 12px;
  margin-top: 5px;
  border-right: 1px solid #eaeaea;
  width: 254px;
  height: 196px;
}
.title {
  font-size: 14px;
  color: #ea759f;
  margin: 0;
  font-weight: bold;
}
.live-box {
  display: none;
  width: 504px;
  padding: 20px 0 20px 20px;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  background: #fff;
  position: absolute;
  top: 45px;
  left: 150px;
}
.hot-live {
  float: left;
  width: 254px;
}
</style>

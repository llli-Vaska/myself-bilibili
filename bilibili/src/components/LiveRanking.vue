<template>
  <div class="live-rank">
    <a href="#" class="live-rank-item" v-for="item in liveranks" :key="item.id">
      <div class="rank-face">
        <span :class="item.class">{{ item.num }}</span>
        <img :src="item.img" />

        <div class="txt">
          <p>{{ item.name }}</p>
          <p class="p2">{{ item.title }}</p>
        </div>
      </div>
      <div class="count">
        <i class="bilifont glyphicon glyphicon-user"></i>
        {{ item.number }}万
      </div>
    </a>
  </div>
</template>

<script>
import uprank1 from "../assets/images-index/uprank1.jpg";
import uprank2 from "../assets/images-index/uprank2.jpg";
import uprank3 from "../assets/images-index/uprank3.jpg";
import uprank4 from "../assets/images-index/uprank4.jpg";
import uprank5 from "../assets/images-index/uprank5.jpg";
import uprank6 from "../assets/images-index/uprank6.jpg";
export default {
  data() {
    return {
      liveranks: [
        {
          class: "number on",
          num: "1",
          img: uprank1,
          name: "宫本狗雨",
          title: "刚开播 谁的错？",
          number: "99.1"
        },
        {
          class: "number on",
          num: "2",
          img: uprank2,
          name: "一米八的坤儿",
          title: "别检测了，没号了。",
          number: "74.5"
        },
        {
          class: "number on",
          num: "3",
          img: uprank3,
          name: "顾于浮生如梦",
          title: "早上好！ 我又来晨播啦！",
          number: "66.5"
        },
        {
          class: "number",
          num: "4",
          img: uprank4,
          name: "湊-阿库娅Official",
          title: "APEX钻石挑战！极致发挥阴角之力的女仆",
          number: "52.4"
        },
        {
          class: "number",
          num: "5",
          img: uprank5,
          name: "梦醒三生梦",
          title: "今天的单排还会被锤爆吗",
          number: "43.2"
        },
        {
          class: "number",
          num: "6",
          img: uprank6,
          name: "睡神不醒丶",
          title: "鲁班单排冲个区一。",
          number: "38.6"
        }
      ]
    };
  }
};
</script>

<style>
.live-rank .live-rank-item .count .bilifont {
  margin-right: 4px;
}
.live-rank .live-rank-item .count {
  color: #999;
  font-size: 12px;
  display: flex;
  white-space: nowrap;
  padding-top: 4px;
}
.live-rank .live-rank-item .txt p.p2 {
  color: #505050;
  line-height: 18px;
  margin-top: 2px;
}
.live-rank .live-rank-item .txt p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.live-rank .live-rank-item:hover .txt p:first-child {
  color: #00a1d6;
}
.live-rank .live-rank-item .txt p:first-child {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
  transition: all 0.3s;
}
.live-rank .live-rank-item .txt {
  display: inline-block;
  margin-right: 10px;
  width: 158px;
  vertical-align: middle;
}
.live-rank .live-rank-item img {
  width: 44px;
  height: 44px;
  border-radius: 44px;
  margin-right: 12px;
}
.live-rank .live-rank-item .number.on {
  color: #fff;
  background: #00a1d6;
}
.live-rank .live-rank-item .number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  /* background: #fff; */
  border-radius: 2px;
  display: inline-block;
  margin-right: 12px;
}
.live-rank .live-rank-item .rank-face {
  display: flex;
  align-items: center;
}
.live-rank .live-rank-item {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 22px; */
}
</style>

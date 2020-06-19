<!-- bilibili-activity-content27 -->
<template>
  <div class="act-list">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <a href="#" target="_blank">
          <img v-bind:src="news.url" />
        </a>
        <h2>
          <a href="#" target="_blank">{{ news.title }}</a>
        </h2>
        <div class="event_status">
          <span>{{ news.text }}</span>
          {{ news.time }}
        </div>
        <div class="act-info">
          {{ news.info }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
/* 活动内容 */
.act-list {
  font-size: 12px;
}
.act-list li {
  background: #fff;
  border-bottom: 1px solid #e5e9ef;
  padding: 0 0 20px;
  margin: 20px 0 0 -40px;
  overflow: hidden;
  position: relative;
}
ul,
li {
  list-style: none;
}
a {
  color: #222;
  text-decoration: none;
}
.act-list ul li img {
  float: left;
  margin-right: 12px;
  width: 260px;
  height: 150px;
  border-radius: 4px;
}
.act-list ul li h2 {
  /* overflow: hidden; */
  /* margin: 0; */
  line-height: 20px;
  padding-bottom: 20px;
}
.act-list ul li .event_status {
  overflow: hidden;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #6d757a;
}
.act-list ul li .event_status .status-ing {
  color: #00a1d6;
}
.act-list ul li .act-info {
  color: #6d757a;
  line-height: 20px;
  margin-bottom: 14px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}
</style>

<script>
export default {
  name: "act-list",
  data() {
    return {
      newsList: [
        {
          url: require("@/assets/active/翻唱大赛.jpg"),
          title: "夏日延长线欢乐翻唱赛",
          text: "【已结束】",
          time: "2015-08-28 至 2015-09-18",
          info:
            "夏天就要过去了吗？不行！我还没有在这个夏天留下些什么！快来参加夏日延长线翻唱赛吧！"
        },
        {
          url: require("@/assets/active/鬼畜大赏.jpg"),
          title: "哔哩哔哩夏夜鬼畜大赏",
          text: "【已结束】",
          time: "2015-07-01 至 2015-07-31",
          info:
            "听说，做鬼畜就能有女朋友？少年少女们！一起来成为鬼畜王吧！撒~一GO~~"
        },
        {
          url: require("@/assets/active/演奏赛.jpg"),
          title: "中秋民乐演奏赛",
          text: "【已结束】",
          time: "2014-09-08 至 2014-09-25",
          info: "中秋佳节即将来临，借古韵悠悠与大家一起共享节日气息。"
        }
      ]
    };
  }
};
</script>

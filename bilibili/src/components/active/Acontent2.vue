<!-- bilibili-activity-content2 -->
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
  margin-top: 10px;
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
          url: require("@/assets/active/国风新风尚.jpg"),
          title: "国风新风尚",
          text: "【已结束】",
          time: "2020-03-13 至 2020-04-14",
          info:
            "第三届中国华服日如约而至，投稿赢万元大奖！3月26-28日，“国风十二时辰”华服日直播，明星大咖齐聚一堂，邀你一起云过节！"
        },
        {
          url: require("@/assets/active/英雄不陨.jpg"),
          title: "英雄不陨，共书传奇-LPL七周年征稿大赛",
          text: "【已结束】",
          time: "2020-03-22 至 2020-04-16",
          info:
            "参与LPL七周年征稿活动，分享属于你的赛场故事。投稿成功即可领取七周年限定头像挂件，优秀作品更有机会获得官方提供的丰厚奖品！"
        },
        {
          url: require("@/assets/active/上海书展.jpg"),
          title: "上海书展·阅读的力量2020网络阅读季",
          text: "【已结束】",
          time: "2020-02-22 至 2020-03-28",
          info:
            "上海市委宣传部举办“上海书展·阅读的力量”2020网上阅读活动，各界重磅神秘嘉宾共同开启网络“悦读时刻”，传递阅读的力量"
        },
        {
          url: require("@/assets/active/一起跳个舞.jpg"),
          title: "一起跳个舞，为抗“疫”加油",
          text: "【已结束】",
          time: "2020-02-24 至 2020-03-19",
          info:
            "疫情当前，一起跳个加油舞， 点亮家乡地标，为抗“疫”应援！ 希望你也能加入这场抗“疫”舞蹈接力！"
        },
        {
          url: require("@/assets/active/搞笑竞技大赛.jpg"),
          title: "搞笑竞技大赛",
          text: "【已结束】",
          time: "2020-02-16 至 2020-03-20",
          info: "笑哭我，你就是冠军"
        },
        {
          url: require("@/assets/active/超炮T情人节.jpg"),
          title: "某科学的超电磁炮T - 情人节特别活动",
          text: "【已结束】",
          time: "0000-00-00 至 0000-00-00",
          info: "就在今天，把对她的爱意传达出来。给您喜爱的角色，点上爱心！"
        },
        {
          url: require("@/assets/active/沙雕之主.jpg"),
          title: "沙雕之主",
          text: "【已结束】",
          time: "2020-02-08 至 2020-03-16",
          info: "传递欢笑，发扬沙雕！"
        },
        {
          url: require("@/assets/active/恋爱单身.jpg"),
          title: "恋爱PK单身 - 专栏天才的键盘大战",
          text: "【已结束】",
          time: "2020-02-10 至 2020-02-25",
          info:
            "恋爱大过天？单身一直爽？既然谁都说服不了对方，那就用文字来PK吧！ "
        },
        {
          url: require("@/assets/active/情人节.jpg"),
          title: "情人节一起嗑CP",
          text: "【已结束】",
          time: " 2020-02-07 至 2020-03-08",
          info: "只要嗑得深，CP磨成真！投稿分享你的CP，最高可得一万元奖金！"
        },
        {
          url: require("@/assets/active/花式吃播大赏.jpg"),
          title: "花式吃播大赏",
          text: "【已结束】",
          time: " 2020-02-05 至 2020-03-09",
          info: "投稿瓜分5万元，关于吃饭的故事想和你分享！"
        },
        {
          url: require("@/assets/active/春节惊喜.jpg"),
          title: "春节惊喜大放送",
          text: "【已结束】",
          time: " 2020-01-27 至 2020-02-10",
          info:
            "明星新春祝福大放送，春晚名场面大盘点，还有新春福利奖品送出！惊喜不断！"
        },
        {
          url: require("@/assets/active/我的别样拜年祭.jpg"),
          title: "我的别样拜年祭",
          text: "【已结束】",
          time: " 2020-01-24 至 2020-02-25",
          info:
            "辞旧迎新鼠年到，玩出拜年祭新花样。 无论你是拜年祭的元祖级粉丝，还是刚刚入坑的萌新，现在创作任意形式拜年祭视频，就有机会获得官方上亿流量扶持，现金红包奖励，拜年祭限定周边。快来用自己的方式，表达你对拜年祭的喜爱吧！"
        },
        {
          url: require("@/assets/active/2020科幻春晚.jpg"),
          title: "2020年科幻春晚",
          text: "【已结束】",
          time: "2020-01-18 至 2020-02-01",
          info: "我横穿整个银河系，只为回家过年"
        },
        {
          url: require("@/assets/active/吐槽大会.jpg"),
          title: "新年吐槽大会",
          text: "【已结束】",
          time: "2020-01-10 至 2020-02-13",
          info: "快来吐槽吐槽！"
        },
        {
          url: require("@/assets/active/寒假vlog.jpg"),
          title: "寒假vlog-一起学习吧",
          text: "【已结束】",
          time: "2020-01-07 至 2020-02-09",
          info: "打卡瓜分5万元，集赞可得大会员！"
        }
      ]
    };
  }
};
</script>

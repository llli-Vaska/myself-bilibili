<!-- bilibili-activity-content1 -->
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
          <span class="status-ing">{{ news.text }}</span>
          {{ news.time }}
        </div>
        <div class="act-info">
          {{ news.info }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 活动内容 */
.act-list {
  font-size: 12px;
}
.act-list li {
  height: 185px;
  background: #fff;
  border-bottom: 1px solid #e5e9ef;
  padding: 0 0 20px;
  padding-top: 10px;
  margin: 0px 0 0 -40px;
  /* overflow: hidden; */
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
          url: require("@/assets/active/黄绿合战.jpg"),
          title: "黄绿合战5th",
          text: "【进行中】",
          time: "2020-04-16 至 2020-05-06",
          info:
            "神仙打架、大型选择困难症的噩梦！鬼畜区的巅峰对决，每日两两battle，为你带来最棒的视听盛宴！"
        },
        {
          url: require("@/assets/active/春日复工.jpg"),
          title: "春日复工LOOK",
          text: "【进行中】",
          time: "2020-03-25 至 2020-04-25",
          info: " "
        },
        {
          url: require("@/assets/active/校园星UP.jpg"),
          title: "校园星UP",
          text: "【进行中】",
          time: "2020-04-02 至 2020-05-02",
          info: "校园UP主认证限时开启，新人投稿最高可瓜分3万元！"
        },
        {
          url: require("@/assets/active/健身跟练挑战.jpg"),
          title: "健身跟练挑战",
          text: "【进行中】",
          time: "2020-04-03 至 2020-04-30",
          info: "投稿瓜分65万元健康基金，B站健身跟练太香了！"
        },
        {
          url: require("@/assets/active/打开脑洞.jpg"),
          title: "打开吧！脑洞",
          text: "【进行中】",
          time: "2020-04-14 至 2020-05-16",
          info:
            "动画、漫画、游戏、小说、音乐、影视剧…以及现实生活中的事物和情节，究竟可以有多少种打开方式？释放你的想象，投稿瓜分20万奖金，还有官方流量扶持哦！"
        },
        {
          url: require("@/assets/active/春日vlog挑战.jpg"),
          title: "春日vlog挑战",
          text: "【进行中】",
          time: "2020-04-09 至 2020-05-01",
          info: "瓜分50w奖金"
        },
        {
          url: require("@/assets/active/青春的选择.jpg"),
          title: "青春的选择-心动挑战混剪大赛",
          text: "【进行中】",
          time: "2020-04-07 至 2020-04-28",
          info: "神仙混剪，在线心动"
        },
        {
          url: require("@/assets/active/被封印的颜值.jpg"),
          title: "被封印的颜值",
          text: "【进行中】",
          time: "2020-04-01 至 2020-05-08",
          info: "投稿瓜分8万奖金，B站“颜王”等你来挑战！ "
        },
        {
          url: require("@/assets/active/4月打卡挑战.jpg"),
          title: "4月打卡挑战",
          text: "【进行中】",
          time: " 2020-04-01 至 2020-04-30",
          info: "投稿瓜分50万，集赞得大会员"
        },
        {
          url: require("@/assets/active/独家新闻.jpg"),
          title: "哔哩日报独家新闻：以良心担保，以下新闻真一赔十",
          text: "【进行中】",
          time: " 2020-03-31 至 2020-04-03",
          info:
            "一年一度的愚人节又如期而至~动画化决定？纪念新作推出？真人化？这里通通都没有！（喂"
        },
        {
          url: require("@/assets/active/云顶之弈.jpg"),
          title: "云顶之弈套路对决",
          text: "【进行中】",
          time: " 2020-03-29 至 2020-04-29",
          info: "云顶之弈S3套路对决，秀出你的最强羁绊！"
        },
        {
          url: require("@/assets/active/公益活动.jpg"),
          title: "一起参加读书等身公益活动吧~",
          text: "【进行中】",
          time: " 2020-04-03 至 2020-04-23",
          info:
            "4月23日，相约世界读书日~你投一个稿=B站捐一本书！更将有机会获得上亿流量和万元奖金！手动添加书名tag生成我们独特的书单吧！"
        },
        {
          url: require("@/assets/active/我的电竞15秒.jpg"),
          title: "我的电竞15秒-绝地求生三周年",
          text: "【进行中】",
          time: "2020-03-28 至 2020-04-11",
          info: "绝地求生三周年，分享你的吃鸡点滴！"
        },
        {
          url: require("@/assets/active/青春有你2.jpg"),
          title: "青春有你2主题曲舞蹈二创大赛",
          text: "【进行中】",
          time: "2020-03-29 至 2020-04-28",
          info: "来参加活动，有机会去现场为你喜欢的选手应援！"
        },
        {
          url: require("@/assets/active/石头扫地机器人T7.jpg"),
          title: "石头扫地机器人T7",
          text: "【进行中】",
          time: "2020-03-23 至 2020-04-30",
          info:
            "欢迎参与由哔哩哔哩数码区举办的众测活动。 我们希望你热爱数码，喜欢看数码区的各种视频，对UP主和引人入胜的优秀作品都如数家珍。 当然，最重要的是：你希望成为数码UP主中的一员，想通过镜头来表达属于你自己的观点、生活和体验，讲述一个属于你自己的故事。 不求面面俱到，但务必真实客观；无需深究到底，请表达心中所感。"
        }
      ]
    };
  }
};
</script>

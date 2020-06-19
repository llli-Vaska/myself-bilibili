<!-- bilibili-ranking-body-全站榜 -->
<template>
  <div class="rank-list-wrap">
    <ul class="rank-list1">
      <li class="rank-item" v-for="bodys in rankBody" :key="bodys.id">
        <div class="num">{{ bodys.num }}</div>
        <div class="content">
          <div class="img">
            <a target="_blank">
              <div class="lazy-img cover">
                <img v-bind:src="bodys.url" />
              </div>
            </a>
          </div>
          <div class="info">
            <a target="_blank" class="title"> {{ bodys.title }} </a>
            <div class="detail">
              <span class="data-box"
                ><i class="b-icon play"></i> {{ bodys.play }}
              </span>
              <span class="data-box"
                ><i class="b-icon view"></i> {{ bodys.view }}
              </span>
              <span class="data-box"
                ><i class="b-icon author"></i> {{ bodys.author }}
              </span>
            </div>
            <div class="pts">
              <div>{{ bodys.pts }}</div>
              综合得分
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
/* 控制ul部分 */
ul,
li {
  list-style: none;
}
.rank-item {
  transition: 0.2s;
  overflow: hidden;
  border-bottom: 1px solid #e5e9ef;
  position: relative;
  margin-left: -40px;
}
.rank-item:hover {
  box-shadow: 0 2px 5px #ccc;
}
a,
a:hover {
  text-decoration: none;
}
a:hover {
  outline: 0;
  /* color: #00a1d6 !important; */
  text-decoration: none;
  cursor: pointer;
}
.rank-item .num {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 20px;
  left: 0;
  line-height: 70px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #b8c0cc;
  font-family: simhei;
}

.rank-item .content {
  padding: 20px 0 0 70px;
  overflow: hidden;
}
.rank-item .content .img {
  position: relative;
  float: left;
}
.rank-item .content .img a {
  display: inline-block;
}
.rank-item .content .img .cover {
  width: 114px;
  height: 70px;
}
.rank-item .content .img .cover img {
  border-radius: 4px;
}
.lazy-img img {
  display: block;
  width: 100%;
  height: 100%;
}

.rank-item .content .info {
  padding-bottom: 20px;
  margin-left: 130px;
  height: 70px;
  position: relative;
  display: block;
}
.rank-item .content .info .title {
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  font-size: 14px;
  color: #222;
  transition: 0.3s;
  display: inline-block;
}
.rank-item .content .info .detail {
  margin-top: 20px;
  color: #99a2aa;
}
.rank-item .content .info .detail .data-box {
  width: 80px;
  margin-right: 20px;
  font-size: 12px;
  overflow: hidden;
}
.rank-item .content .info .detail .b-icon {
  width: 12px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: text-top;
  background: url(//static.hdslb.com/images/base/icons.png) no-repeat;
}
.rank-item .content .info .detail .b-icon.play {
  background-position: -282px -90px;
}
.rank-item .content .info .detail .b-icon.view {
  background-position: -282px -218px;
}
.rank-item .content .info .detail .b-icon.author {
  background-position: -282px -154px;
}

.rank-item .content .info .pts {
  height: 20px;
  font-size: 12px;
  color: #b8c0cc;
  line-height: 20px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  text-align: center;
}
.rank-item .content .info .pts div {
  color: #00a1d6;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
}
</style>

<script>
export default {
  name: "rank-body",
  data() {
    return {
      rankBody: [
        {
          num: "1",
          url: require("@/assets/rank/黑人抬棺.jpg"),
          title: "如果把【黑人抬棺】做成中国风音乐",
          play: "175.0万",
          view: "2.3万",
          author: "12仔",
          pts: "3060633"
        },
        {
          num: "2",
          url: require("@/assets/rank/家有神探.jpg"),
          title: "【家有神探】当你怀疑爸妈有人出轨时，会发生什么？",
          play: "147.3万",
          view: "1.8万",
          author: "洛温阿特金森",
          pts: "2925212"
        },
        {
          num: "3",
          url: require("@/assets/rank/我被B站威胁了.jpg"),
          title: "我被B站威胁了",
          play: "439.6万",
          view: "7.6万",
          author: "凉风Kaze",
          pts: "2828769"
        },
        {
          num: "4",
          url: require("@/assets/rank/刑事责任年龄.jpg"),
          title: "【罗翔】7岁？14岁？刑事责任年龄要不要下调？",
          play: "223.1万",
          view: "6.6万",
          author: "罗翔说刑法",
          pts: "2775423"
        },
        {
          num: "5",
          url: require("@/assets/rank/完全一致.jpg"),
          title: "这动画太好看了！2020年4月新番吐槽大盘点！（第一弹）",
          play: "247.6万",
          view: "5.1万",
          author: "LexBurner",
          pts: "2390894"
        },
        {
          num: "6",
          url: require("@/assets/rank/高考加油.jpg"),
          title: "【分享几年前表姐骂醒我的录音】‖同样送给迷茫的你‖高考加油‖",
          play: "98.7万",
          view: "5639",
          author: "还是叫我的小名Assia吧-",
          pts: "2317152"
        },
        {
          num: "7",
          url: require("@/assets/rank/这不是肥皂.jpg"),
          title: "这不是肥皂，是可以吃的星空果冻！【在繁星坠落的夜晚】",
          play: "130.5万",
          view: "5212",
          author: "大碗拿铁",
          pts: "2297212"
        },
        {
          num: "8",
          url: require("@/assets/rank/全网最黑.jpg"),
          title:
            "【Suzy】瓦坎达美妆博主入驻b站？看得见我吗？全网最黑是我了吧！",
          play: "154.0万",
          view: "1.4万",
          author: "Suzy_Z_",
          pts: "1841984"
        },
        {
          num: "9",
          url: require("@/assets/rank/周杰伦.jpg"),
          title: "【1080P修复合集】周杰伦2000~2011发行MV 1080P修复版合集",
          play: "36.8万",
          view: "8883",
          author: "zyl2012",
          pts: "1797157"
        },
        {
          num: "10",
          url: require("@/assets/rank/持枪复工.jpg"),
          title: "美国疫情还在爆发，为何民众开始持枪闹复工？",
          play: "309.2万",
          view: "8.5万",
          author: "我是郭杰瑞",
          pts: "1638052"
        }
      ]
    };
  }
};
</script>

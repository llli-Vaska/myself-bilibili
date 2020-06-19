<!-- bilibili-ranking-body-原创榜 -->
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
          url: require("@/assets/rank/鲁迅.jpg"),
          title: "【醒醒】中华儿女该起床了",
          play: "117.3万",
          view: "1.9万",
          author: "冈部伦太郎",
          pts: "5143312"
        },
        {
          num: "2",
          url: require("@/assets/rank/遭遇跟踪.jpg"),
          title: "当你遭遇跟踪！快打开！",
          play: "105.4万",
          view: "3643",
          author: "蓝书爱喝水",
          pts: "4982613"
        },
        {
          num: "3",
          url: require("@/assets/rank/我报警了.jpg"),
          title: "我被勒索了!",
          play: "473.5万",
          view: "4.2万",
          author: "机智的党妹",
          pts: "3406670"
        },
        {
          num: "4",
          url: require("@/assets/rank/伪声教程.jpg"),
          title: "每个男孩子都可以学会的伪声教程",
          play: "68.7万",
          view: "8225",
          author: "千沧MONSTER",
          pts: "3236502"
        },
        {
          num: "5",
          url: require("@/assets/rank/瘦腹.jpg"),
          title: "躺床7日暴瘦小腹/硬核瘦腰/“雕刻”诱人马甲线",
          play: "56.7万",
          view: "6694",
          author: "欧阳春晓Aurora",
          pts: "2677137"
        },
        {
          num: "6",
          url: require("@/assets/rank/更爱你的人.jpg"),
          title: "“更爱你的人”",
          play: "66.1万",
          view: "2494",
          author: "始春廿肆",
          pts: "2224507"
        },
        {
          num: "7",
          url: require("@/assets/rank/用得上.jpg"),
          title: "有男/女朋友的都可以用得上，没有也可以备着，妙啊！！！",
          play: "69.1万",
          view: "422",
          author: "华夏北鼻",
          pts: "1960027"
        },
        {
          num: "8",
          url: require("@/assets/rank/刘老师.jpg"),
          title: "【刘老师】爆笑解说《我是余欢水》大结局，被打一星，它冤吗？",
          play: "178.8万",
          view: "1.5万",
          author: "刘老师说电影",
          pts: "1861780"
        },
        {
          num: "9",
          url: require("@/assets/rank/JOJO.jpg"),
          title: "乔 瑟 夫 乔 斯 达",
          play: "56.5万",
          view: "1527",
          author: "黄_金_体_验",
          pts: "1716926"
        },
        {
          num: "10",
          url: require("@/assets/rank/业界损失.jpg"),
          title: "这是最后一次了，且珍惜！",
          play: "87.8万",
          view: "1.8万",
          author: "东尼ookii",
          pts: "1716108"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="bili_anime">
    <a href="#" class="banner-card b-wrap">
      <img :src="adver2" />
      <img :src="guanggaologo" class="gg-icon" />
    </a>
    <div class="anime report-wrap-module report-scroll-module">
      <div class="space-between">
        <div class="time-line">
          <header class="storey-title">
            <div class="l-con">
              <img
                src="../assets/images-index/bili-anime.svg"
                class="svg-icon"
              />
              <a href="#" class="name">番剧</a>
              <div class="tab-switch">
                <div class="tab-switch-item on">
                  <router-link to="/">最新</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/MondayOne">周一</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/WeekTwo"> 周二</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/WeekThree"> 周三</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/WeekFour"> 周四</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/WeekFive"> 周五</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/WeekSix"> 周六</router-link>
                </div>
                <div class="tab-switch-item">
                  <router-link to="/Weekseven"> 周天</router-link>
                </div>
              </div>
            </div>
            <a href="#" class="tl-link">新番时间表 ></a>
          </header>
          <router-view name="two"></router-view>
          <router-view name="three"></router-view>
          <router-view name="six"></router-view>
          <router-view name="week3"></router-view>
          <router-view name="week4"></router-view>
          <router-view name="week5"></router-view>
          <router-view name="week6"></router-view>
          <router-view name="week7"></router-view>
        </div>
        <div class="pgc-rank">
          <header class="rank-header">
            <span class="name">排行榜</span>
            <a href="#" class="more"
              >更多
              <i class="glyphicon glyphicon-menu-right bilifont"></i>
            </a>
          </header>
          <div class="pgc-rank-wrap" v-for="item in fperas" :key="item.id">
            <span :class="item.class">{{ item.number }}</span>
            <a href="#" class="link">
              <p class="txt">
                <span class="title">{{ item.title }}</span>
                <span class="update">{{ item.update }}</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adver2 from "../assets/images-index/advertisement2.jpg";
import guanggaologo from "../assets/images-index/guanggaologo.png";
export default {
  data() {
    return {
      adver2,
      guanggaologo,
      fperas: [
        {
          class: "number on",
          number: "1",
          title: "辉夜大小姐想让我告白？～天才们的恋爱头脑战～",
          update: "更新至第4话"
        },
        {
          class: "number on",
          number: "2",
          title: "转生成为了只有乙女游戏破灭Flag的邪恶大小姐",
          update: "更新至第5话"
        },
        {
          class: "number on",
          number: "3",
          title: "公主连结Re:Dive",
          update: "更新至第5话"
        },
        {
          class: "number",
          number: "4",
          title: "某科学的超电磁炮T",
          update: "更新至第13话"
        },
        {
          class: "number",
          number: "5",
          title: "格莱普尼尔",
          update: "更新至第5话"
        },
        {
          class: "number",
          number: "6",
          title: "昨日之歌",
          update: "更新至第5话"
        },
        {
          class: "number",
          number: "7",
          title: "动物新世代 / BNA",
          update: "全12话"
        },
        {
          class: "number",
          number: "8",
          title: "八男？别闹了！",
          update: "更新至第5话"
        },
        {
          class: "number",
          number: "9",
          title: "爱书的下克上：为了成为图书管理员不择手段！ 第二部",
          update: "更新至第19话"
        },
        {
          class: "number",
          number: "10",
          title: "邪神与厨二病少女 第二季",
          update: "全12话"
        }
      ]
    };
  }
};
</script>

<style>
.pgc-rank-wrap .txt .update {
  font-size: 12px;
  color: #999;
  text-align: right;
  min-width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pgc-rank-wrap .txt .title:hover {
  color: #00a1d6;
}
.pgc-rank-wrap .txt .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 198px;
  font-size: 14px;
  font-weight: 500;
  color: #212121;
  transition: all 0.4s;
}
.pgc-rank-wrap .txt {
  width: 290px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
.pgc-rank-wrap .link {
  display: inline-block;
}
.pgc-rank-wrap .number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
}
.pgc-rank-wrap .number.on {
  color: #fff;
  background: #00a1d6;
}
.pgc-rank-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}
.rank-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
}
.pgc-rank {
  width: 320px;
}
/*router-link 鼠标点击切换样式*/
.tab-switch a.router-link-exact-active {
  padding-bottom: 5px;
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}
.storey-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
}
@media screen and (max-width: 1654px) {
  .time-line {
    width: 800px;
  }
}
@media screen and (min-width: 1739px) {
  .time-line {
    width: 1070px;
  }
}
.time-line .tl-link:hover {
  color: #fff;
  background: #00a1d6;
}
.time-line .tl-link {
  width: 112px;
  height: 30px;
  border: 1px solid #00a1d6;
  border-radius: 2px;
  background: #fff;
  text-align: center;
  line-height: 27px;
  padding: 0 0 0 14px;
  font-size: 14px;
  color: #00a1d6;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  line-height: 16px;
}
.time-line .tab-switch .tab-switch-item {
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
}
/* .time-line .tab-switch .tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
} */
.time-line .tab-switch {
  display: flex;
  margin-left: 4px;
}
</style>

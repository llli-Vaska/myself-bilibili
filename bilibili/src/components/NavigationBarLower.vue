<template>
  <div class="b-warp">
    <div class="primary-menu-itnl">
      <div class="page-tab">
        <ul class="con">
          <li>
            <a href="#">
              <div class="round">
                <img
                  src="../assets/images-index/zhuye.png"
                  style="width:27px;height:27px"
                />
              </div>
              <span>首页</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="round yel">
                <img
                  src="../assets/images-index/fengche.png"
                  style="width:30px;height:30px"
                />
              </div>
              <span>动态</span>
            </a>
          </li>
          <li>
            <a href="/Ranking">
              <div class="round blue">
                <img
                  src="../assets/images-index/paihangbang.png"
                  style="width:25px;height:25px"
                />
              </div>
              <span>排行榜</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-line-itnl"></div>
      <div id="primaryChannelMenu" class="channel-menu-itnl">
        <span v-for="item in nabers" :key="item.id">
          <div class="item">
            <a href="#" class="name">
              <span>
                {{ item.name }}
                <em v-if="!(typeof item.number == 'undefined')">{{
                  item.number
                }}</em>
              </span>
            </a>
          </div>
        </span>
      </div>
      <div class="tab-line-itnl none"></div>
      <div id="primaryFriendshipLink" class="friendship-link">
        <span v-for="item in naber_right" :key="item.id">
          <div class="item">
            <a :href="item.href" class="name">
              <img :src="item.svg" class="svg-icon" />
              <span>{{ item.name }}</span>
            </a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import svg1 from "@/assets/images-index/bili-read.svg";
import svg2 from "@/assets/images-index/bili-live.svg"; /*活动*/
import svg3 from "@/assets/images-index/bili-activit.svg";
import svg4 from "@/assets/images-index/zhuanti.svg";
import svg5 from "@/assets/images-index/bili-blackroom.svg";
import svg6 from "@/assets/images-index/bili-musicplus.svg";
export default {
  data() {
    return {
      nabers: [
        {
          name: "动画",
          number: "999+"
        },
        {
          name: "番剧",
          number: "137"
        },
        {
          name: "音乐",
          number: "999+"
        },
        {
          name: "国创",
          number: "262"
        },
        {
          name: "舞蹈",
          number: "929"
        },
        {
          name: "游戏",
          number: "999+"
        },
        {
          name: "科技",
          number: "999+"
        },
        {
          name: "数码",
          number: "999+"
        },
        {
          name: "生活",
          number: "999+"
        },
        {
          name: "鬼畜",
          number: "306"
        },

        {
          name: "时尚",
          number: "999+"
        },
        {
          name: "广告",
          number: "164"
        },
        {
          name: "娱乐",
          number: "999+"
        },
        {
          name: "影视",
          number: "999+"
        },
        {
          name: "放映厅",
          number: "56"
        },
        {
          name: "搞笑",
          number: "999+"
        },
        {
          name: "动物圈",
          number: "999+"
        },
        {
          name: "美食圈",
          number: "999+"
        },
        {
          name: "单机游戏",
          number: "999+"
        },
        {
          name: "VLOG"
        }
      ],
      naber_right: [
        { href: "#", svg: svg1, name: "专栏" },
        { href: "#", svg: svg2, name: "直播" },
        { href: "/Activity", svg: svg3, name: "活动" },
        { href: "#", svg: svg4, name: "专题" },
        { href: "#", svg: svg5, name: "小黑屋" },
        { href: "/musicplus", svg: svg6, name: "音乐PLUS" }
      ]
    };
  }
};
</script>

<style>
.b-warp {
  display: flex;
  margin: 0 auto;
}

.name:hover {
  text-decoration: none;
  color: #00a1d6;
}
.friendship-link .svg-icon {
  width: 1.8em;
  height: 1.8em;
  vertical-align: middle;
  /* fill: currentColor; */
  overflow: hidden;
}
.friendship-link .item .name {
  font-size: 14px;
  /* display: flex; */
  align-items: center;
  white-space: nowrap;
}
.friendship-link .item {
  height: 34px;
  display: flex;
}
.friendship-link {
  width: 242px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 68px;
}
.tab-line-itnl.none {
  margin: 4px 24px 0 0;
}

.channel-menu-itnl .item .name em {
  font-style: normal;
  font-size: 12px;
  display: inline-block;
  background: #73c9e5;
  border-radius: 2px;
  color: #fff;
  margin-left: 1px;
  transform: scale(0.85);
  width: 32px;
  text-align: center;
}
.channel-menu-itnl .item .name {
  font-size: 14px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.channel-menu-itnl .item {
  cursor: pointer;
  /* display: flex; */
  height: 34px;
}
.channel-menu-itnl {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 68px;
  flex: 1;
}
.tab-line-itnl {
  display: inline-block;
  height: 46px;
  border-left: 1px solid #e7e7e7;
  margin: 4px 30px;
}
.primary-menu-itnl {
  /* justify-content: center; */
  display: flex;
  width: 1414px;
  margin: 0 auto;
  /* background-color: pink; */
  padding: 20px 0;
}
.page-tab .con {
  display: flex;
  padding-left: 0px;
}
.con a:hover {
  text-decoration: none;
  color: #00a1d6;
}
.page-tab .con li .round {
  position: relative;
  width: 36px;
  height: 36px;
  background: #ff5c7c;
  border-radius: 36px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto 4px;
}
.page-tab .con li .round.yel {
  background: #fcba2a;
}
.page-tab .con li .round.blue {
  background: #00a1d6;
}

.con li {
  text-align: center;
  padding-left: 15px;
}
.page-tab {
  display: flex;
  /* margin-left: 120px; */
}
.b-wrap {
  width: 1414px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #212121;
  transition: color 0.3s;
}
@media screen and (max-width: 1654px) {
  .b-warp {
    width: 1198px;
  }
  .tab-line-itnl {
    margin: 0px 15px 0px 15px;
  }
  .tab-line-itnl.none {
    margin: 0px 12px 0px 0px;
  }
  .friendship-link {
    width: 220px;
  }
}
</style>

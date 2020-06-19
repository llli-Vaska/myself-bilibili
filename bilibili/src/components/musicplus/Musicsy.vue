<!-- 音乐节目内容首页 -->
<template>
  <div>
    <div class="musichome-prompt">
      <header class="storey-title">
        <div class="l-con">首播</div>
        <div class="exchange-btn1">
          <a href="#">更多 ></a>
        </div>
      </header>
      <div class="prompt-list1">
        <div class="large1">
          <div
            class="video-card-reco"
            style="width: 422px; height: 242px;"
            scrollshow="true"
          >
            <div class="musichome-info-box">
              <a href="#">
                <img src="@/assets/music/远距离.webp" />
                <div class="info2">
                  <p title="远距离 - GJ蒋卓嘉MV上线" class="infotitle">
                    远距离 - GJ蒋卓嘉MV上线
                  </p>
                  <p class="upup">大家的音乐姬</p>
                  <p class="play1">
                    <span>1.3万</span>
                    <span>11</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="smalls">
          <div
            class="video-card-reco"
            style="width: 206px; height: 116px;"
            v-for="itemups in itemupsList"
            :key="itemups.id"
          >
            <div class="musichome-info-box">
              <a href="#">
                <img v-bind:src="itemups.url" />
                <div class="info2">
                  <p class="infotitle">{{ itemups.title }}</p>
                  <p class="upup">{{ itemups.up }}</p>
                  <p class="play1">
                    <span>{{ itemups.number }}</span>
                    <span>{{ itemups.chat }}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            class="video-card-reco"
            style="width: 206px; height: 116px;"
            scrollshow="true"
            v-for="itemdns in itemdnsList"
            :key="itemdns.id"
          >
            <div class="musichome-info-box">
              <a href="#">
                <img v-bind:src="itemdns.url" />
                <div class="info2">
                  <p class="infotitle">{{ itemdns.title }}</p>
                  <p class="upup">{{ itemdns.up }}</p>
                  <p class="play1">
                    <span>{{ itemdns.number }}</span>
                    <span>{{ itemdns.chat }}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>

    <div class="musichome-video">
      <header class="storey-title">
        <div class="l-con">热门推荐</div>
        <div class="exchange-btn1">
          <a href="#">更多 ></a>
        </div>
      </header>
      <div class="video-list1">
        <div
          class="video-card-common"
          scrollshow="true"
          v-for="videos in videosList"
          :key="videos.id"
        >
          <div class="card-pic">
            <a href="#">
              <img v-bind:src="videos.url" />
              <div class="count1">
                <div class="mleft">
                  <span>
                    <i class="bilifont11 bili-icon_shipin_bofang"></i>
                    {{ videos.number }}
                  </span>
                  <span>
                    <i class="bilifont11 bili-icon_shipin_danmu"></i>
                    {{ videos.chat }}
                  </span>
                </div>
                <div class="mright">
                  <span>{{ videos.time }}</span>
                </div>
              </div>
            </a>
          </div>
          <a href="#" class="videotitle">{{ videos.title }}</a>
          <a href="#" class="videoups">{{ videos.up }}</a>
        </div>
      </div>
      <div class="bottom1"></div>
    </div>

    <div class="musichome-article">
      <header class="storey-title">
        <div class="l-con">音乐专栏</div>
        <div class="exchange-btn1">
          <a href="#">更多 ></a>
        </div>
      </header>
      <div class="article-list">
        <div
          class="article-card-2-col"
          scrollshow="true"
          v-for="columns in columnsList"
          :key="columns.id"
        >
          <div class="pics">
            <a :href="columns.href"><img v-bind:src="columns.url"/></a>
          </div>
          <a :href="columns.href" class="r-con">
            <h3 class="columntitle">{{ columns.title }}</h3>
            <p class="desc">{{ columns.text }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 首播 */
.musichome-prompt {
  margin-top: 30px;
}
.storey-title {
  margin-bottom: 10px;
  height: 28px;
}
.storey-title .l-con {
  float: left;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}
.storey-title .exchange-btn1 {
  float: right;
}
.storey-title .exchange-btn1 a {
  display: flex;
  padding-left: 12px;
  margin-top: 2px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 24px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  transition: all 0.2s;
  line-height: 16px;
}

.musichome-prompt .prompt-list1 {
  height: 242px;
  overflow: hidden;
  font-size: 0;
}
.musichome-prompt .large1 {
  float: left;
}
.video-card-reco {
  position: relative;
  display: inline-block;
}
.video-card-reco:before {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBT…wgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
  background-repeat: repeat-x;
  border-radius: 0 0 2px 2px;
}
.video-card-reco .musichome-info-box,
.video-card-reco .musichome-info-box:before,
.video-card-reco .musichome-info-box img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.video-card-reco .musichome-info-box {
  position: relative;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMV…cJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 50%;
}
.video-card-reco .musichome-info-box .info2 {
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: -59px;
  left: 0;
  transition: bottom 0.2s;
  padding: 26px 10px 10px;
}
.video-card-reco .musichome-info-box .info2 .infotitle {
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  color: #fff;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.video-card-reco .musichome-info-box .info2 .play1,
.video-card-reco .musichome-info-box .info2 .upup {
  font-size: 12px;
  color: #e0e0e0;
}
.video-card-reco .musichome-info-box .info2 .upup {
  height: 16px;
  line-height: 14px;
  margin-bottom: 8px;
}
.video-card-reco .musichome-info-box .info2 .play1 {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.video-card-reco .musichome-info-box .info2 .play1 span:first-child {
  margin-right: 10px;
}
.video-card-reco .musichome-info-box .info2 .play1 span {
  vertical-align: middle;
  display: flex;
  align-items: center;
}

.musichome-prompt .smalls {
  float: right;
  width: 864px;
}
.musichome-prompt .smalls .video-card-reco {
  margin-left: 10px;
  margin-bottom: 10px;
}

/* 热门推荐 */
.musichome-video {
  margin-top: 30px;
}
.musichome-video .video-list1 {
  height: 190px;
  overflow: hidden;
}
.musichome-video .video-list1 .video-card-common:first-child {
  margin-left: 0;
}
.musichome-video .video-list1 .video-card-common {
  margin-left: 10px;
}
.video-card-common {
  width: 206px;
  display: inline-block;
  cursor: pointer;
  vertical-align: top;
}
.video-card-common .card-pic {
  position: relative;
  width: 100%;
  height: 116px;
}
.video-card-common .card-pic a {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMV…cJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 50%;
}
.video-card-common .card-pic a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 48px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBT…wgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
  background-repeat: repeat-x;
  bottom: 0;
  left: 0;
  border-radius: 2px;
}
.video-card-common .card-pic a .count1,
.video-card-common .card-pic a .count1 .mleft,
.video-card-common .card-pic a .count1 .mleft span {
  display: flex;
  align-items: center;
}
.video-card-common .card-pic a .count1 {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px 8px;
  justify-content: space-between;
  color: #fff;
  line-height: 16px;
}
.video-card-common .card-pic a .count1 .mleft span:first-child {
  margin-right: 10px;
}
.video-card-common .card-pic a .count1 .mleft span {
  vertical-align: middle;
}
.video-card-common .bilifont11 {
  margin-right: 4px;
  vertical-align: middle;
}
.bili-icon_shipin_bofang:before {
  content: "\E73E";
}
.bili-icon_shipin_danmu:before {
  content: "\E73E";
}
.video-card-common .videotitle {
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 8px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
  padding-right: 12px;
}
.video-card-common .videoups {
  display: flex;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
.bottom1 {
  margin-top: 30px;
}

/* 音乐专栏 */
.musichome-article .article-list {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
}
.article-card-2-col {
  display: flex;
  width: calc(50% - 5px);
  padding-right: 28px;
  height: 156px;
  margin-bottom: 20px;
  overflow: hidden;
}
.article-card-2-col .pics {
  display: block;
  width: 206px;
  height: 156px;
  margin-right: 16px;
}
.article-card-2-col .pics img {
  width: 206px;
  height: 156px;
  display: inline-block;
  border-radius: 2px;
}
.article-card-2-col .r-con {
  height: 80px;
}
.article-card-2-col .r-con .desc,
.article-card-2-col .r-con .columntitle {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.article-card-2-col .r-con .columntitle {
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px;
  padding-right: 28px;
  max-height: 40px;
  display: -webkit-box;
  font-weight: 500;
  white-space: normal;
  word-break: break-word;
}
.article-card-2-col .r-con .desc {
  margin-top: 10px;
  font-size: 12px;
  height: 36px;
  line-height: 18px;
  color: #999;
  display: -webkit-box;
}
</style>

<script>
export default {
  data() {
    return {
      itemupsList: [
        {
          url: require("@/assets/music/不是我的鞋.webp"),
          title: "不是我的靴 - 陈瑾缃MV上线",
          up: "大家的音乐姬",
          number: "1.0万",
          chat: "10"
        },
        {
          url: require("@/assets/music/莲.webp"),
          title: "莲 - 张艺兴MV上线",
          up: "大家的音乐姬",
          number: "170.4万",
          chat: "5.6万"
        },
        {
          url: require("@/assets/music/指尖情话.webp"),
          title: "青春有你2最帅女团！Hickey喜祺全新单曲《指尖情话》MV",
          up: "嗨翻屋音乐",
          number: "43.5万",
          chat: "1314"
        },
        {
          url: require("@/assets/music/ihateyou1000.webp"),
          title: "Karencici林恺伦 傲娇系情歌《ihateyou1000》官方MV上线",
          up: "华研国际音乐",
          number: "402",
          chat: "1"
        }
      ],
      itemdnsList: [
        {
          url: require("@/assets/music/笼中鸟.webp"),
          title: "笼中鸟 - 谢天笑MV上线",
          up: "大家的音乐姬",
          number: "1.9万",
          chat: "20"
        },
        {
          url: require("@/assets/music/Crazy Girl In LA.webp"),
          title: "Crazy Girl In LA - 朱天尧G9MV上线",
          up: "大家的音乐姬",
          number: "8162",
          chat: "2"
        },
        {
          url: require("@/assets/music/一无所知.webp"),
          title: "一无所知 (feat. 徐佳莹)  - 陈立农MV上线",
          up: "大家的音乐姬",
          number: "2.5万",
          chat: "164"
        },
        {
          url: require("@/assets/music/城市猎人Giyu.webp"),
          title:
            "排湾族吉他演奏家 保卜 巴督路Baobu Badulu-首波主打《城市猎人Giyu》 MV上线",
          up: "JSJ杰思国际娱乐",
          number: "2706",
          chat: "2"
        }
      ],
      videosList: [
        {
          url: require("@/assets/music/The Best For You.webp"),
          number: "1.3万",
          chat: "7",
          time: "00:31",
          title: "欧阳娜娜《The Best For You 》Official MV Teaser",
          up: "索尼音乐娱乐"
        },
        {
          url: require("@/assets/music/研编青光眼.webp"),
          number: "334",
          chat: "5",
          time: "19:57",
          title:
            "[华研自制] 研编青光眼EP9 我的青春都在这！听S.H.E长大的都哭了！｜关韶文 那那大师 施人诚（直播精华）",
          up: "华研国际音乐"
        },
        {
          url: require("@/assets/music/莲 花絮.webp"),
          number: "11.0万",
          chat: "4149",
          time: "06:29",
          title: "莲（拍摄花絮） - 张艺兴",
          up: "大家的音乐姬"
        },
        {
          url: require("@/assets/music/疯人院.webp"),
          number: "820.3万",
          chat: "16.6万",
          time: "14:12",
          title: "疯人院&好想爱这个世界啊（现场版）- 华晨宇",
          up: "大家的音乐姬"
        },
        {
          url: require("@/assets/music/就在此刻.webp"),
          number: "26.3万",
          chat: "1334",
          time: "02:56",
          title: "K391, Alan Walker, 周笔畅 - “就在此刻” 官方MV",
          up: "AlanWalker官方频道"
        },
        {
          url: require("@/assets/music/Dance.webp"),
          number: "4455",
          chat: "256",
          time: "01:33",
          title:
            "「BIBI正在」唱。无人隧道，惊现女明星！周笔畅自带混音清唱版《Dance》来啦！",
          up: "BeginsStudio"
        }
      ],
      columnsList: [
        {
          href: "/Musiccolumn",
          url: require("@/assets/music/mojito.webp"),
          title:
            "【一周流行音乐榜单精选Vol.58】周杰伦将发新歌甚至新专辑；黄家驹58岁冥诞",
          text:
            "想必大家都听过了周董的新歌前奏了吧？（没听过还不快去听！）  满满的夏日古巴风味让音乐姬嗅到了不同于《说好不哭》的感觉~ 这个中"
        },
        {
          href: "#",
          url: require("@/assets/music/blackpink.webp"),
          title:
            "【一周流行音乐榜单精选Vol.57】Lady Gaga加入BLACKPINK？五月天线上演唱会被指时间短",
          text:
            "天气酷热的儿童节刚过，你是否有想起儿时夏天最常或最爱听到的歌曲呢？  希望十几年后的这个日子，你能想起的是音乐姬为你推荐的Vol"
        }
      ]
    };
  }
};
</script>

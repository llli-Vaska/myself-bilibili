<!-- bilibili音乐专栏导读 -->
<template>
  <div>
    <NavigationBar></NavigationBar>

    <div class="page-container">
      <div class="nav-tab-bar">
        <a href="#" class="logo"></a>
        <a class="tab-item" data-tab-id="0"><span>推荐</span></a>
        <a class="tab-item" data-tab-id="1"><span>动画</span></a>
        <a class="tab-item" data-tab-id="2"><span>游戏</span></a>
        <a class="tab-item" data-tab-id="3"><span>影视</span></a>
        <a class="tab-item" data-tab-id="4"><span>生活</span></a>
        <a class="tab-item on" data-tab-id="5"><span>兴趣</span></a>
        <a class="tab-item" data-tab-id="6"><span>轻小说</span></a>
        <a class="tab-item" data-tab-id="7"><span>科技</span></a>
      </div>
    </div>

    <div class="head-container">
      <div class="banner-img-holder"></div>
      <div class="bangumi-rating-container"></div>
      <div class="title-container">
        <h1 class="title">
          【一周流行音乐榜单精选Vol.58】周杰伦将发新歌甚至新专辑；黄家驹58岁冥诞
        </h1>
        <div class="info">
          <a class="category-link" href="#9"><span>音乐舞蹈</span></a>
          <span class="create-time">6-10</span>
          <div class="article-data">
            <span>5.7万阅读</span>
            <span>1348点赞</span>
            <span>89评论</span>
          </div>
        </div>
      </div>
    </div>
    <div class="article-holder unable-reprint">
      <p>{{ message1 }}</p>
      <p>{{ message2 }}</p>
      <p>{{ message3 }}</p>
      <figure class="img-box">
        <img src="../../assets/music/1.gif" class="loaded" />
      </figure>
      <div v-for="boxs in boxsList" :key="boxs.id">
        <figure class="img-box">
          <img v-bind:src="boxs.url" />
        </figure>
        <p>{{ boxs.text1 }}</p>
        <p>{{ boxs.text2 }}</p>
        <p>{{ boxs.text3 }}</p>
      </div>
      <p><br /></p>
      <figure class="img-box">
        <img src="../../assets/music/音乐新鲜事.webp" class="loaded" />
      </figure>
      <div v-for="news in newsList" :key="news.id">
        <figure class="img-box">
          <img v-bind:src="news.url" />
        </figure>
        <p>
          <strong>{{ news.title1 }}</strong>
        </p>
        <p>{{ news.title2 }}</p>
        <p>{{ news.title3 }}</p>
        <figure class="img-box">
          <img v-bind:src="news.src" />
        </figure>
      </div>
      <figure class="img-box">
        <img src="../../assets/music/结束.png" class="cut-off-5 loaded" />
      </figure>
      <figure class="img-box">
        <img src="../../assets/music/音乐姬.webp" class="loaded" />
      </figure>
      <p style="text-align: center;">{{ message4 }}</p>
      <p style="text-align: center;">{{ message5 }}</p>
      <p style="text-align: center;">
        敬请关注
        <a href="#">@大家的音乐姬</a>
      </p>
      <figure class="img-box">
        <img src="../../assets/music/榜单精选.webp" class="loaded" />
      </figure>
      <p><br /></p>
      <p class="authority">本文禁止转载或摘编</p>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
/* 左 */
.page-container {
  width: 660px;
  margin-top: 30px;
  padding-right: 200px;
  overflow-x: initial;
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  background-color: #fff;
}
.nav-tab-bar {
  float: left;
  font-size: 0;
  transition: 0.2s;
  margin-top: 30px;
}
.nav-tab-bar .logo,
.nav-tab-bar .tab-item {
  margin-left: -150px;
  width: 110px;
}
.nav-tab-bar .logo {
  display: block;
  height: 40px;
  background-image: url("../../assets/music/bilibili专栏.png");
  background-size: 110px 29px;
  background-position: 50%;
  background-repeat: no-repeat;
}
.nav-tab-bar .tab-item {
  margin-top: 20px;
}
.nav-tab-bar .tab-item {
  font-size: 14px;
  display: block;
  cursor: pointer;
  margin-right: 40px;
  margin-top: 32px;
  color: #222;
  line-height: 28px;
}
.nav-tab-bar .tab-item span {
  vertical-align: middle;
}
.nav-tab-bar .tab-item.on,
.nav-tab-bar .tab-item.on a {
  color: #00a1d6;
}

.nav-tab-bar .tab-item:before {
  content: " ";
  width: 28px;
  height: 28px;
  display: inline-block;
  background-size: 28px;
  vertical-align: top;
  margin-right: 25px;
}
.nav-tab-bar .tab-item[data-tab-id="0"]:before {
  background-image: url(../../assets/music/tj.png);
}
.nav-tab-bar .tab-item[data-tab-id="1"]:before {
  background-image: url(../../assets/music/dh.png);
}
.nav-tab-bar .tab-item[data-tab-id="2"]:before {
  background-image: url(../../assets/music/yx.png);
}
.nav-tab-bar .tab-item[data-tab-id="3"]:before {
  background-image: url(../../assets/music/ys.png);
}
.nav-tab-bar .tab-item[data-tab-id="4"]:before {
  background-image: url(../../assets/music/sh.png);
}
.nav-tab-bar .tab-item[data-tab-id="5"]:before {
  background-image: url(../../assets/music/xq.png);
}
.nav-tab-bar .tab-item[data-tab-id="6"]:before {
  background-image: url(../../assets/music/qxs.png);
}
.nav-tab-bar .tab-item[data-tab-id="7"]:before {
  background-image: url(../../assets/music/kj.png);
}

/* 右 */
.article-holder {
  max-width: 660px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 30px;
}
.head-container {
  max-width: 660px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 30px;
  margin-left: 600px;
  margin-top: 30px;
}
.banner-img-holder {
  position: static;
  border-radius: 4px;
  width: 660px;
  margin-bottom: 0;
  background-image: url("../../assets/music/周杰伦mojito.webp");
  background-position: 50%;
  background-size: cover;
  height: 100%;
  padding-top: 56%;
}
.bangumi-rating-container {
  margin-top: 42px;
  margin-bottom: 0;
}
.title-container {
  margin-top: 0;
  text-align: left;
  line-height: 1.4;
}
.title-container .title {
  font-size: 28px;
  color: #222;
  margin-bottom: 14px;
  font-weight: 700;
  line-height: 1.4;
}
.title-container .info {
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 400;
}
.title-container .info span {
  margin-right: 18px;
  color: #9b9b9b;
  transition: 0.3s;
}
.title-container .info .article-data {
  display: inline-block;
}

.article-holder.unable-reprint {
  user-select: none;
}
.article-holder {
  font-size: 16px;
  line-height: 1.8;
  color: #222;
  padding-bottom: 50px;
}
.article-holder {
  word-wrap: break-word;
  overflow-x: hidden;
  text-align: left;
  letter-spacing: 0;
  min-height: 200px;
  font-weight: 400;
  border: none;
  padding: 0 16px;
  margin-left: 584px;
}
.article-holder p {
  margin-bottom: 20px;
}

.article-holder figure.img-box {
  font-size: 0;
}
.article-holder .img-box {
  margin-bottom: 20px;
}
.article-holder figure {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}

.article-holder img.loaded {
  background-color: transparent;
}
.article-holder img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  background-color: #f0f2f4;
  border: none;
  vertical-align: middle;
}
.article-holder .cut-off-5 {
  width: 214px;
}
.article-holder a {
  color: #fb7299;
}
.authority {
  display: inline-block;
  padding-left: 0;
  margin-bottom: 12px;
  color: silver;
  font-size: 12px;
  line-height: 15px;
}
</style>

<script>
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/

export default {
  components: {
    NavigationBar,
    Footer
  },
  data() {
    return {
      message1: "想必大家都听过了周董的新歌前奏了吧？（没听过还不快去听！）",
      message2:
        "满满的夏日古巴风味让音乐姬嗅到了不同于《说好不哭》的感觉~ 这个中年天才终于要施展他婚后尘封许久的才华了吗？",
      message3: "让我们拭目以待吧~",
      message4: "本周的内容就到这里~",
      message5: "获取更多官方MV、站内优质音乐视频、up主、音乐新闻、杂谈，",

      boxsList: [
        {
          url: require("@/assets/music/美国榜.webp"),
          text1: "粉墨联手Lady Gaga首拿TOP40；",
          text2: "榜上又来新冠单，大宝贝生涯首冠；",
          text3: "又来一首Roses，它成为本周守门员！"
        },
        {
          url: require("@/assets/music/韩国榜.webp"),
          text1: "机医热度未减，男主冠完女主冠；",
          text2: "兔瓦斯空降前五；噜妹海豚持续上升；",
          text3: "一日一gang席卷韩国，双版齐登场。"
        },
        {
          url: require("@/assets/music/英国榜.webp"),
          text1: "今年都爱回冠，佳佳专辑周也没敌过大宝贝；",
          text2: "还是三首占满，雨皇，酸糖和爱丽丝，英国人民居然不爱大姑妈了；",
          text3: "又是一首采样Tom's diner的歌上榜，老本吃得飞起！"
        },
        {
          url: require("@/assets/music/日本榜.webp"),
          text1: "本周YOASOBI继续双榜连冠，世终新曲上线即亚军；",
          text2: "整体歌曲排名回升，DISH//的猫两个版本都进到前30；",
          text3: "八爷版的パプリカ又回来了…… "
        }
      ],
      newsList: [
        {
          url: require("@/assets/music/1.webp"),
          title1: "周杰伦最新单曲《Mojito》正式发布",
          title2:
            "周杰伦在6月12日推出最新单曲《Mojito》，Mojito是古巴广为知名的鸡尾酒，黄俊郎作词，MV也在古巴进行拍摄，周杰伦说：“古巴一直是我想去的地方，因为有各式各样颜色的古董车，大家都知道我从以前就很喜欢古董车了，所以这次也为了《Mojito》特地到古巴拍摄MV。”",
          title3:
            "周杰伦领着好友们穿着异国情调清爽的衬衫，一行人坐着鲜艳复古的老爷车驰骋在马拉贡滨海大道上，捕捉古巴迷人景致，跳着轻快的alsa舞步，路人也不自觉跟跟着舞动摇摆。一行人来到海明威最爱的Mojito所在的哈瓦那五分钱小酒馆，看完调酒师调出好酒后，众人朗诵起黄俊郎写的歌词“麻烦给我的爱人来一杯Mojito，我喜欢阅读她微醺时的眼眸”，周杰伦笑说：“我觉得阿郎一定是酒喝多了，才会写出这样的歌词。”随行的柯有伦还安排了古巴当地的传统乐团为周杰伦演奏他的新歌，周杰伦拿起当地传统乐器沙槌、柯有伦拿起了刮葫，与乐团即兴玩音乐，古巴乐手盛赞周杰伦的新歌很有古巴音乐风味。最后周杰伦表示：“《Mojito》推出之后暂时不会有单曲的推出，再来就是新专辑了。” ",
          src: require("@/assets/music/周杰伦.webp")
        },
        {
          url: require("@/assets/music/2.webp"),
          title1: "孙燕姿出道20周年惊喜献唱",
          title2:
            "6月9日，昨天是孙燕姿出道20周年，她在线发文提问：“20年了怎么办。” 稍后不久又发文道：“陪伴就是幸福。” ",
          title3:
            "当晚20:00，孙燕姿惊喜现身并送上了自己精心准备的线上演唱会。《逆光》、《Lightning Crashes》、《一样的夏天》、《雨还是不停地落下》、《Guess God Thinks I‘m Abel》、《极美》、《天黑黑》，她在演唱中夹杂着对话，娓娓道来式的演出让人心中暖意满满。请姿妈继续唱下去，音乐姬会一直追逐着你！ ",
          src: require("@/assets/music/孙燕姿.gif")
        },
        {
          url: require("@/assets/music/3.webp"),
          title1: "两大国际音乐节因疫情原因取消",
          title2:
            "6月5日，亚洲最具影响力的音乐节Fuji Rock富士摇滚音乐节在官网宣布，因疫情原因音乐节将延期至明年举办。音乐节原定于8月21日至23日举行，已公布的阵容当中包括The Strokes、tame impala等艺人。",
          title3:
            "6月10日，世界级影响力的音乐节Coachella科切拉音乐节将取消举办，音乐节的推广机构正在考虑2021年4月推出小型版本的科切拉音乐节。此前公布的科切拉音乐节海报已确认BIGBANG、戳爷、打雷姐等艺人将会参加。 ",
          src: require("@/assets/music/音乐节.gif")
        },
        {
          url: require("@/assets/music/4.webp"),
          title1: "6月10日，今天还是一个特殊的日子——黄家驹58岁冥诞。",
          title2: "这个传奇音乐人物，Beyond乐队的灵魂成员已经离开了将近27年。",
          title3:
            "成员叶世荣零点准时为他庆生：“家驹生日快乐”。上午黄贯中也发文称：“家驹，生日快乐！” 每年，Beyond乐队成员都会用这种方式为黄家驹庆生，斯人已逝。 ",
          src: require("@/assets/music/Beyond.webp")
        }
      ]
    };
  }
};
</script>

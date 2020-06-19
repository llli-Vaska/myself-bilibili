<template>
  <div class="storey-box b-wrap">
    <div class="proxy-box">
      <!-- 直播 -->
      <div class="bili_live">
        <a href="#" class="banner-card b-wrap">
          <img :src="advertisement1" />
          <img :src="guanggaologo" class="gg-icon" />
        </a>
        <div class="space-between report-wrap-module report-scroll-module">
          <div class="live-list">
            <header class="storey-title">
              <div class="l-con">
                <img :src="svglive" class="svg-icon" />
                <a href="#" class="name">正在直播</a>
                <div class="text-info">
                  <span>当前共有 {{ number }} 个在线直播</span>
                </div>
              </div>
              <div class="exchange-btn">
                <div class=" btn-change">
                  <i class="glyphicon glyphicon-refresh bilifont"></i>
                  换一换
                </div>
                <a href="#" class="more">
                  更多
                  <i class="glyphicon glyphicon-menu-right bilifont"></i>
                </a>
              </div>
            </header>
            <div class="zone-list-box">
              <div class="live-card" v-for="item in livings" :key="item.id">
                <a href="#" class="qj">
                  <div class="pic">
                    <img :src="item.img" />
                    <p class="count">
                      <i class="bilifont glyphicon glyphicon-user"></i>
                      {{ item.number }}
                    </p>
                  </div>
                  <div class="up">
                    <img :src="item.upimg" />
                    <div class="txt">
                      <p class="name">{{ item.name }}</p>
                      <p class="desc">{{ item.desc }}</p>
                      <p class="tag">{{ item.tag }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="live-tabs">
            <div class="tab-switch">
              <div class="tab-switch-item">
                <router-link to="/LiveRanking"> 直播排行</router-link>
              </div>
              <div class="tab-switch-item">
                <router-link to="/FocusAnchor"> 关注的主播</router-link>
              </div>
              <div class="tab-switch-item on">
                <router-link to="/"> 为你推荐</router-link>
              </div>
            </div>
            <router-view name="one"></router-view>
            <router-view name="four"></router-view>
            <router-view name="five"></router-view>
          </div>
        </div>
      </div>
      <TemplateOne :data="cartoons"></TemplateOne>
      <FolkOpera></FolkOpera>
      <TemplateOne v-for="block in blocks" :data="block" :key="block.id">
      </TemplateOne>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import ReYou from "@/components/ReYou.vue"; /*为你推荐*/
import FocusAnchor from "@/components/FocusAnchor.vue"; /*关注的主播*/
import LiveRanking from "@/components/LiveRanking.vue"; /*直播排行*/
import TemplateOne from "@/components/multiplex/TemplateOne.vue"; /*模板（一）[复用]*/
import FolkOpera from "@/components/FolkOpera.vue"; /*番剧*/

import advertisement1 from "../assets/images-index/advertisement1.jpg";
import guanggaologo from "../assets/images-index/guanggaologo.png";
import svglive from "@/assets/images-index/bili-live.svg";
import zhibo1 from "../assets/images-index/zhibo1.jpg";
import zhibo2 from "../assets/images-index/zhibo2.jpg";
import zhibo3 from "../assets/images-index/zhibo3.jpg";
import zhibo4 from "../assets/images-index/zhibo4.jpg";
import zhibo5 from "../assets/images-index/zhibo5.jpg";
import zhibo6 from "../assets/images-index/zhibo6.jpg";
import zhibo7 from "../assets/images-index/zhibo7.jpg";
import zhibo8 from "../assets/images-index/zhibo8.jpg";
import zhibo9 from "../assets/images-index/zhibo9.jpg";
import zhibo10 from "../assets/images-index/zhibo10.jpg";

import upimg1 from "../assets/images-index/upimg1.jpg";
import upimg2 from "../assets/images-index/upimg2.jpg";
import upimg3 from "../assets/images-index/upimg3.jpg";
import upimg4 from "../assets/images-index/upimg4.jpg";
import upimg5 from "../assets/images-index/upimg5.jpg";
import upimg6 from "../assets/images-index/upimg6.jpg";
import upimg7 from "../assets/images-index/upimg7.jpg";
import upimg8 from "../assets/images-index/upimg8.jpg";
import upimg9 from "../assets/images-index/upimg9.jpg";
import upimg10 from "../assets/images-index/upimg10.jpg";
import svgcatroon from "@/assets/images-index/bili-donghua.svg";
import svgmusic from "@/assets/images-index/bili-music.svg";
import svgdance from "@/assets/images-index/bili-dance.svg";

import df1 from "../assets/images-index/df1.png";
import df2 from "../assets/images-index/df2.png";
import df3 from "../assets/images-index/df3.png";
import df4 from "../assets/images-index/df4.png";
import df5 from "../assets/images-index/df5.png";
import df6 from "../assets/images-index/df6.png";
import df7 from "../assets/images-index/df7.png";
import df8 from "../assets/images-index/df8.png";
import df9 from "../assets/images-index/df9.png";
import df10 from "../assets/images-index/df10.png";
import dingding from "../assets/images-index/dingding.png";

import yy1 from "../assets/images-index/yy1.png";
import yy2 from "../assets/images-index/yy2.png";
import yy3 from "../assets/images-index/yy3.png";
import yy4 from "../assets/images-index/yy4.png";
import yy5 from "../assets/images-index/yy5.png";
import yy6 from "../assets/images-index/yy6.png";
import yy7 from "../assets/images-index/yy7.png";
import yy8 from "../assets/images-index/yy8.png";
import yy9 from "../assets/images-index/yy9.png";
import yy10 from "../assets/images-index/yy10.png";
import dingding2 from "../assets/images-index/dingding2.webp";

import wd1 from "../assets/images-index/wd1.png";
import wd2 from "../assets/images-index/wd2.png";
import wd3 from "../assets/images-index/ed3.png";
import wd4 from "../assets/images-index/wd4.png";
import wd5 from "../assets/images-index/wd5.png";
import wd6 from "../assets/images-index/wd6.png";
import wd7 from "../assets/images-index/wd7.png";
import wd8 from "../assets/images-index/wd8.png";
import wd9 from "../assets/images-index/wd9.png";
import wd10 from "../assets/images-index/wd10.png";
import dingding3 from "../assets/images-index/dingding3.webp";
export default {
  components: {
    TemplateOne,
    FolkOpera
  },
  data() {
    return {
      name: "SecondSection",
      advertisement1,
      guanggaologo,
      svglive,
      number: "19312",
      components: {
        ReYou,
        FocusAnchor,
        LiveRanking
      },
      cartoons: {
        class: "bili_douga",
        logo: svgcatroon,
        logotitle: "动画",
        paihangs: [
          {
            class: "number on",
            number: "1",
            one: true,
            img: dingding,
            title: "【 4 月 新 番 ？】钉 钉 动 画 化 完 结 ！！",
            title1: "【 4 月 新 番 ？】钉 钉 动 画 化 完 结 ！！",
            titlenumber: "综合得分：98.6万"
          },
          {
            class: "number on",
            number: "2",
            two: true,
            title2: "美国警察：你再不下来我就击毙人质了！"
          },
          {
            class: "number on",
            number: "3",
            two: true,
            title2:
              "被封杀的神作！全程高能，令人窒息的恐怖科幻！《寄生兽》故事解说01"
          },
          {
            class: "number",
            number: "4",
            two: true,
            title2: "【罗小黑同人动画MV】Minnutes - Discover"
          },
          {
            class: "number",
            number: "5",
            two: true,
            title2: "如果火了，我cos封面直播三天，6月6号准时直播！"
          },
          {
            class: "number",
            number: "6",
            two: true,
            title2: "【明日方舟动画】长夜终尽[上]——龙门·赤霄"
          },
          {
            class: "number",
            number: "7",
            two: true,
            title2: "【明日方舟手书】女博士的欢乐日常⑥"
          },
          {
            class: "number",
            number: "8",
            two: true,
            title2: "全程高能朗姆分析！黑衣组织二把手已曝光？柯南又要笑醒了"
          },
          {
            class: "number",
            number: "9",
            two: true,
            title2:
              "杉浦太阳被警方逮捕！高斯奥特曼惨遭停播！真相究竟是什么？【⑨⑦废话时间】"
          },
          {
            class: "number",
            number: "10",
            two: true,
            title2: "口 胡 王"
          }
        ],
        items: [
          {
            img: df1,
            bofangnum: "60.8",
            dianzhannum: "11.3",
            time: "13:40",
            hgold: true,
            title: "【227/427/科幻】肮脏的神·宗教偶像",
            up: "沧弦落尘"
          },
          {
            img: df2,
            bofangnum: "181.6",
            dianzhannum: "20.8",
            time: "05:45",
            hgold: true,
            title: "暑假所有火柴人作品汇总",
            up: "中冶無"
          },
          {
            img: df3,
            bofangnum: "13.0",
            dianzhannum: "1.8",
            time: "09:43",
            ygold: true,
            title: "B站最全的《死神》黑崎一护形态盘点！",
            up: "尘懒人"
          },
          {
            img: df4,
            bofangnum: "3.4",
            dianzhannum: "1.3",
            time: "01:28",
            // ygold: true,
            title: "建 议 改 成：熊   窝   子",
            up: "轩怨"
          },
          {
            img: df5,
            bofangnum: "1.8",
            dianzhannum: "1.0",
            time: "04:03",
            // hgold: true,
            title: "[碧蓝航线 MMD] 德国组 Killer Lady GERMAN Fancover",
            up: "晚玥"
          },
          {
            img: df6,
            bofangnum: "1.7",
            dianzhannum: "2.5",
            time: "00:51",
            // hgold: true,
            title: "戚容牌语音导航，只要你不怕出车祸你就装吧。",
            up: "源的姑娘"
          },
          {
            img: df7,
            bofangnum: "20.3",
            dianzhannum: "1.5",
            time: "13:29",
            ygold: true,
            title: "【初配信】初次见面！我是新人女仆AKUKIN哦！！【湊あくあ】",
            up: "湊-阿库娅Official"
          },
          {
            img: df8,
            bofangnum: "73.3",
            dianzhannum: "2.6",
            time: "43:42",
            hgold: true,
            title: "【奥数魔刃】（这里是没过审的标题）【健康内容】",
            up: "夏色祭Official"
          },
          {
            img: df9,
            bofangnum: "756.5",
            dianzhannum: "39.8",
            time: "03:37",
            hgold: true,
            title:
              "全程高能！请戴好耳机！前方甜蜜大暴击！！前方甜蜜大暴击！！极致舒适，大型秀恩爱下饭现场",
            up: "纸鸢_Somnium"
          },
          {
            img: df10,
            bofangnum: "6.8",
            dianzhannum: "1.3",
            time: ":",
            // hgold: true,
            title: "【MAP】Emperor’s New Clothes part 4、part 20",
            up: "青色玥"
          }
        ]
      },
      blocks: {
        one_music_block: {
          class: "bili_yinyue",
          logo: svgmusic,
          logotitle: "音乐",
          items: [
            {
              img: yy1,
              bofangnum: "16.8",
              dianzhannum: "2.7",
              time: "1:01:50",
              ygold: true,
              title: "【音乐的掌声 - Jessie J】为大家带来特别表演！",
              up: "OfficialJessieJ"
            },
            {
              img: yy2,
              bofangnum: "360.8",
              dianzhannum: "47.5",
              time: "04:59",
              ygold: true,
              title: "鼓乐《兰陵王入阵曲》耳机开最大！来听千军万马！！！",
              up: "共青团中央"
            },
            {
              img: yy3,
              bofangnum: "6.8",
              dianzhannum: "1.3",
              time: "9:12:48",
              title:
                "星船新男团CRAVITY出道曲Break all the Rules MV+打歌舞台合集(更至200503)",
              up: "pcyxjy"
            },
            {
              img: yy4,
              bofangnum: "8.7",
              dianzhannum: "2.3",
              time: "15:51",
              title:
                "即兴伴奏和弦编配教学，这10多分钟的课，学会了，省了起码上千块钱！",
              up: "绿橙子gy"
            },
            {
              img: yy5,
              bofangnum: "560.8",
              dianzhannum: "65.3",
              time: "01:18",
              hgold: true,
              title: "用“阿姆”的方式打开“淡黄的长裙”",
              up: "MUSICAT-"
            },
            {
              img: yy6,
              bofangnum: "86.4",
              dianzhannum: "7.0",
              time: "04:17",
              hgold: true,
              title:
                "指弹吉他《Lemon》| Kenshi Yonezu (米津玄师) 《非自然死亡》(Unnatural)主题曲",
              up: "小天uuuup"
            },
            {
              img: yy7,
              bofangnum: "82.6",
              dianzhannum: "8.0",
              time: "05:50",
              hgold: true,
              title: "【Animenz】灶门炭治郎之歌 – 鬼灭之刃 OST 钢琴版",
              up: "Animenzzz"
            },
            {
              img: yy8,
              bofangnum: "94.5",
              dianzhannum: "1.3",
              time: "03:20",
              title: "盘点“一条小团团”的10首成名曲~抖音警告",
              up: "刘阿姨去哪了"
            },
            {
              img: yy9,
              bofangnum: "12.2",
              dianzhannum: "1.5",
              time: "04:06",
              hgold: true,
              title:
                "❌黑胶试听❌ 请以你的名字呼唤我 电影原声 桃色胶 Mystery of Love",
              up: "秦皇岛盘王"
            },
            {
              img: yy10,
              bofangnum: "2.3",
              dianzhannum: "10.2",
              time: "04:23",
              title: "喜 欢 你",
              up: "kkkirby"
            }
          ],
          paihangs: [
            {
              class: "number on",
              number: "1",
              one: true,
              img: dingding2,
              title: "【周深】三语版《千千阙歌》",
              title1: "【周深】三语版《千千阙歌》",
              titlenumber: "综合得分：127.9万"
            },
            {
              class: "number on",
              number: "2",
              two: true,
              title2: "100首无侵犯版权之忧的曲子"
            },
            {
              class: "number on",
              number: "3",
              two: true,
              title2:
                "好帅两女的合唱yellow♪性冷淡高中生X性感酷御姐【瘫君X汄天人】"
            },
            {
              class: "number",
              number: "4",
              two: true,
              title2:
                "被刘敏涛“斜眼唱”笑死！3A出击！姐圈霸道女总裁成团1080P舞台合集！"
            },
            {
              class: "number",
              number: "5",
              two: true,
              title2: "【花园Serena×hanser】PONPONPON"
            },
            {
              class: "number",
              number: "6",
              two: true,
              title2:
                "【黄龄】解锁新场景，吉他弹唱《人间不值得》，人间值得好闺蜜！"
            },
            {
              class: "number",
              number: "7",
              two: true,
              title2: "IU+闵玧其最新合作曲Eight MV公开"
            },
            {
              class: "number",
              number: "8",
              two: true,
              title2: "黑 人 抬 棺 灵 魂 超 渡 版 演 奏"
            },
            {
              class: "number",
              number: "9",
              two: true,
              title2: "【音乐的掌声 - Jessie J】为大家带来特别表演！"
            },
            {
              class: "number",
              number: "10",
              two: true,
              title2: "虚 拟 抬 队 真 专 业 合 唱 ！（阿卡贝拉&Rap）"
            }
          ]
        },
        two_dance_block: {
          class: "bili_dance",
          logo: svgdance,
          logotitle: "舞蹈",
          items: [
            {
              img: wd1,
              bofangnum: "1.8",
              dianzhannum: "1.7",
              time: "01:25",
              title: "刘隽,好想爱这个世界啊",
              up: "啊Anpanman"
            },
            {
              img: wd2,
              bofangnum: "3.8",
              dianzhannum: "4.5",
              time: "04:23",
              title: "【七毒喵】★没能当上超级猫咪啊★夏日元气小黑猫~第六十九作",
              up: "七毒喵"
            },
            {
              img: wd3,
              bofangnum: "16.8",
              dianzhannum: "12.3",
              time: "03:14",
              title: "【池秶zi】shake it 竖屏/新鞋挤脚系列",
              up: "池秶zi"
            },
            {
              img: wd4,
              bofangnum: "48.7",
              dianzhannum: "3.3",
              time: "03:52",
              ygold: true,
              title:
                "男生版青春有你2 主題曲YES! OK! - FJ不服老大叔呕心沥血Cover",
              up: "匿名的阿婆主"
            },
            {
              img: wd5,
              bofangnum: "42.0",
              dianzhannum: "1.1",
              time: "02:35",
              ygold: true,
              title: "【猛女版】单眼皮女孩！？",
              up: "又基-"
            },
            {
              img: wd6,
              bofangnum: "86.4",
              dianzhannum: "7.0",
              time: "02:17",
              hgold: true,
              title:
                "【雅拉】Yes！OK！打了发蜡的百褶裙 e舞成名4月新歌 记得三连哦！",
              up: "雅拉"
            },
            {
              img: wd7,
              bofangnum: "382.6",
              dianzhannum: "6.6",
              time: "02:38",
              hgold: true,
              title: "【小仙若】Thumbs Up❤愿意跟这样的姐姐一起蹦迪吗？",
              up: "一只小仙若"
            },
            {
              img: wd8,
              bofangnum: "7.0",
              dianzhannum: "1.3",
              time: "03:20",
              title: "【第六只晓宁】《BAAM》击中你了吗♥",
              up: "第六只晓宁"
            },
            {
              img: wd9,
              bofangnum: "22.5",
              dianzhannum: "2.0",
              time: "06:34",
              title:
                "裹得严实却超级欲的同步率双人舞！Bada Lee合作HanSe编舞Stretch You Out",
              up: "lana酱好纠结"
            },
            {
              img: wd10,
              bofangnum: "12.3",
              dianzhannum: "10.2",
              time: "34:23",
              title: "【黑暗廖理】第九期：街舞音乐应该怎么听呢",
              up: "廖蹶子"
            }
          ],
          paihangs: [
            {
              class: "number on",
              number: "1",
              one: true,
              img: dingding3,
              title: "失 恋 阵 线 联 盟【高清重制版】",
              title1: "失 恋 阵 线 联 盟【高清重制版】",
              titlenumber: "综合得分：139.9万"
            },
            {
              class: "number on",
              number: "2",
              two: true,
              title2: "【时代少年团】Cover个人直拍-EXO《破风（The Eve）》"
            },
            {
              class: "number on",
              number: "3",
              two: true,
              title2: "【小巫】旗袍风疯狂踩点·当潮不让【原创编舞】"
            },
            {
              class: "number",
              number: "4",
              two: true,
              title2: "【糖小V】怦然心动の学妹❤️元气双马尾Heart Attack"
            },
            {
              class: "number",
              number: "5",
              two: true,
              title2: "天 竺 的 少 女   卤 煮 的 滑 板"
            },
            {
              class: "number",
              number: "6",
              two: true,
              title2: "【羊七七】小鹿乱撞❤眼镜学妹鹿❤想做你女朋友~想和你约会~"
            },
            {
              class: "number",
              number: "7",
              two: true,
              title2:
                "【丁程鑫】高能慎点！是什么让嘴角流泪？看痞帅高中生翻跳NCT127 Intro+英雄Kick it魅惑众生！"
            },
            {
              class: "number",
              number: "8",
              two: true,
              title2:
                "【张真源】又欲又纯的wave，我见过跳得最好的EXO破风cover_直拍ver."
            },
            {
              class: "number",
              number: "9",
              two: true,
              title2: "进来看美少女打嗝！ "
            },
            {
              class: "number",
              number: "10",
              two: true,
              title2: "滑着太空步进入多人空间会发生什么？"
            }
          ]
        }
      },

      livings: [
        {
          img: zhibo1,
          number: "1103.1万",
          upimg: upimg1,
          name: "哔哩哔哩英雄联盟赛事",
          desc: "IG vs FPX 2020英雄联盟职业联赛春季赛季后赛季军赛",
          tag: "英雄联盟"
        },
        {
          img: zhibo2,
          number: "1.3万",
          upimg: upimg2,
          name: "肉卷大大",
          desc: "绝活双刀-主玩竞速-疾风猎团",
          tag: "怪物猎人:世界"
        },
        {
          img: zhibo3,
          number: "8799",
          upimg: upimg3,
          name: "疾梦猎团",
          desc: "明天的希望会让我们忘了今天的痛苦",
          tag: "怪物猎人:世界"
        },
        {
          img: zhibo4,
          number: "3660",
          upimg: upimg4,
          name: "是超可爱の离心呀",
          desc: "没封面可爱你锤爆我（jk）",
          tag: "视频聊天"
        },
        {
          img: zhibo5,
          number: "1249",
          upimg: upimg5,
          name: "梦幻麻婆豆腐OvO",
          desc: "萌系甜音~",
          tag: "唱见电台"
        },
        {
          img: zhibo6,
          number: "12.3万",
          upimg: upimg6,
          name: "AnKe-Poi",
          desc: "仙术启动",
          tag: "逃离塔科夫"
        },
        {
          img: zhibo7,
          number: "9159",
          upimg: upimg7,
          name: "秋凛子Rinco",
          desc: "【FrostPunk】今天一定救大家！",
          tag: "虚拟主播"
        },
        {
          img: zhibo8,
          number: "2.0万",
          upimg: upimg8,
          name: "sy米哥",
          desc: "冲击战神、B站LOGO认证",
          tag: "和平精英"
        },
        {
          img: zhibo9,
          number: "2867",
          upimg: upimg9,
          name: "小可学妹",
          desc: "美女主播表演牙疼",
          tag: "唱见电台"
        },
        {
          img: zhibo10,
          number: "29.9万",
          upimg: upimg10,
          name: "沉默寡言白河愁",
          desc: "鸽了两年的元气骑士主播！",
          tag: "怀旧游戏"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
@media screen and (max-width: 1654px) {
  .b-wrap {
    width: 1198px;
  }
  .live-list {
    width: 854px;
  }
  .b-wrap .zone-list-box {
    width: 854px;
    /* height: 360px; */
  }
  /* .b-wrap .live-tabs {
    width: 265px;
} */
}

/* .on .router-link-active {
  color: #00a1d6;
} */
/* .live-tabs .tab-switch .tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
} */
/*router-link 鼠标点击切换样式*/
.tab-switch a.router-link-exact-active {
  padding-bottom: 5px;
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}
.live-tabs .tab-switch .tab-switch-item {
  font-size: 12px;
  line-height: 18px;
  height: 22px;
  margin-right: 12px;
  cursor: pointer;
}
.live-tabs .tab-switch {
  display: flex;
  height: 36px;
  margin-right: 16px;
  margin-bottom: 16px;
  align-items: center;
}
.live-tabs {
  width: 320px;
}
.qj:hover {
  color: #00a1d6;
}
.live-card .pic .count {
  position: absolute;
  bottom: -8px;
  left: 0;
  color: #fff;
  font-size: 12px;
  padding: 6px 8px;
  height: 28px;
  display: flex;
  align-items: center;
  line-height: 16px;
}
.live-card .up .txt .tag {
  font-size: 12px;
  line-height: 16px;
  color: #999;
  margin-top: 8px;
}
.live-card .up .txt .desc {
  font-size: 12px;
  color: #505050;
  line-height: 18px;
  margin-top: 2px;
}
.live-card .up .txt p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* line-height: 20px; */
}
.live-card .up .txt .name {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  transition: color 0.3s;
}
.live-card .up .txt {
  width: 158px;
}
.live-card .up img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.live-card .up {
  display: flex;
  justify-content: space-between;
  line-height: 16px;
}
.live-card .pic img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.live-card .pic {
  position: relative;
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  height: 116px;
}
.live-card {
  width: 206px;
}
.zone-list-box {
  overflow: hidden;
  width: 1070px;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 410px;
}
.exchange-btn .btn-change:hover .bilifont {
  transform: rotate(-1turn);
}
.exchange-btn .btn-change:hover {
  background-color: #f4f4f4;
}
.exchange-btn .more:hover {
  background-color: #f4f4f4;
}
.exchange-btn .more {
  padding: 3px 0 0 12px;
  width: 58px;
  margin-left: 12px;

  align-items: center;
  cursor: pointer;
  height: 22px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  transition: all 0.2s;
  line-height: 16px;
}
.exchange-btn .btn-change .bilifont {
  margin-right: 7px;
  transition: all 0.5s;
}
.exchange-btn .btn-change {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 22px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  transition: all 0.2s;
  line-height: 16px;
}
.exchange-btn .btn-change {
  padding: 0 0 0 6px;
  width: 72px;
}
.exchange-btn {
  display: flex;
  width: 142px;
  height: 22px;
}

.live-list .text-info span {
  margin-right: 24px;
  font-size: 12pz;
}
.storey-title .text-info {
  color: #505050;
  line-height: 20px;
}
.banner-card .gg-icon {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 38px;
  height: 22px;
}
.banner-card img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.banner-card {
  position: relative;
  display: block;
  max-height: 134px;
  margin-bottom: 46px;
}
.storey-box .proxy-box {
  min-height: 1000px;
}
</style>

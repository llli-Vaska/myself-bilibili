import Vue from "vue";
import VueRouter from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
import NavigationBarLower from "@/components/NavigationBarLower.vue"; /*导航栏（下）*/
import index from "@/views/index/index.vue"; /*主页*/
import MemberPurchase from "@/views/index-vip/MemberPurchase.vue"; /*会员购二级*/
import Detailed from "@/components/vip/Detailed.vue"; /*会员购三级*/
import Gamezx from "@/components/Gamezx.vue"; /*游戏中心二级菜单*/
import Live from "@/components/Live.vue"; /*直播二级菜单*/
import APP from "@/components/APP.vue"; /*APP二级菜单*/
import Cartoon from "@/components/Cartoon.vue"; /*漫画二级菜单*/
import FirstSection from "@/components/FirstSection.vue"; /*第一块内容（含轮播）*/
import ContentleftOne from "@/components/ContentleftOne.vue"; /*轮播*/
import FirstSectionRight from "@/components/FirstSectionRight.vue"; /*轮播右边内容*/
import SecondSection from "@/components/SecondSection.vue"; /*第二块内容（含广告）+所有内容*/
import ReYou from "@/components/ReYou.vue"; /*为你推荐*/
import FocusAnchor from "@/components/FocusAnchor.vue"; /*关注的主播*/
import LiveRanking from "@/components/LiveRanking.vue"; /*直播排行*/
import TemplateOne from "@/components/multiplex/TemplateOne.vue"; /*模板（一）[复用]*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
import FolkOpera from "@/components/FolkOpera.vue"; /*番剧*/
import NewestOne from "@/components/week/NewestOne.vue"; /*番剧--最新*/
import MondayOne from "@/components/week/MondayOne.vue"; /*番剧--周一*/
import WeekTwo from "@/components/week/WeekTwo.vue"; /*番剧--周2*/
import WeekThree from "@/components/week/WeekThree.vue"; /*番剧--周3*/
import WeekFour from "@/components/week/WeekFour.vue"; /*番剧--周4*/
import WeekFive from "@/components/week/WeekFive.vue"; /*番剧--周5*/
import WeekSix from "@/components/week/WeekSix.vue"; /*番剧--周6*/
import Weekseven from "@/components/week/Weekseven.vue"; /*番剧--周7*/
import TVmascot from "@/components/TVmascot.vue"; /*小电视*/
import Shopcar from "@/views/index-vip/Shopcar.vue"; /*购物车*/
import login from "@/views/login/login.vue"; /*登录页面*/
import register from "@/views/login/register.vue"; /*注册页面*/
// ------------------------xqy-------------------------
import Activity from "@/views/Activity/Activity.vue"; /*活动页面*/
import Acontent1 from "@/components/active/Acontent1.vue"; /*活动第1页*/
import Acontent2 from "@/components/active/Acontent2.vue"; /*活动第2页*/
import Acontent27 from "@/components/active/Acontent27.vue"; /*活动第27页*/
import Ranking from "@/views/Ranking/Ranking.vue"; /*排行榜页面*/
import Rankbody1 from "@/components/rank/Rankbody1.vue"; /*排行榜全站榜*/
import Rankbody2 from "@/components/rank/Rankbody2.vue"; /*排行榜原创榜*/
import Rankcenter from "@/components/rank/Rankcenter.vue"; /*排行榜中间部分*/
import musicplus from "@/views/Music/musicplus.vue"; /*音乐PLUS页面*/
import Musicheader from "@/components/musicplus/Musicheader.vue"; /*音乐头部*/
import Musicmain from "@/components/musicplus/Musicmain.vue"; /*音乐内容*/
import Musicsy from "@/components/musicplus/Musicsy.vue"; /*音乐内容首页*/
import Musiccolumn from "@/components/musicplus/Musiccolumn.vue"; /*音乐专栏导读*/

// ------------------------xqy-------------------------
// zrc
import box from "../views/box.vue";
import gamepart from "../views/gamepart.vue";
import sendmesssage from "../views/sendmesssage.vue";
import mainhead from "../views/mainhead.vue";
import partx from "../components/zujian/partx.vue";

import ddt from "../components/zujian/ddt.vue";
import ff from "../components/zujian/ff.vue";
import secfoot from "../components/zujian/secfoot.vue";

// zrc
Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/sendmesssage",
    name: "sendmesssage",
    component: sendmesssage
  },

  {
    path: "/sendmesssage/secfoot",
    name: "secfoot",
    component: secfoot
  },

  {
    path: "/sendmesssage/partx",
    name: "ddt",
    component: ddt
  },
  {
    path: "/sendmesssage/partx/ff",
    name: "ff",
    component: ff
  },

  {
    path: "/sendmesssage/partx",
    name: "partx",
    component: partx
  },
  {
    path: "/sendmesssage",
    name: "mainhead",
    component: mainhead
  },

  {
    path: "/partx",
    name: "partx",
    component: () => import("../components/zujian/partx.vue")
  },
  {
    path: "/secfoot",
    name: "secfoot",
    component: () => import("../components/zujian/secfoot.vue")
  },

  {
    path: "/partx",
    name: "ddt",
    component: () => import("../components/zujian/ddt.vue")
  },
  {
    path: "/partx/ff",
    name: "ff",
    component: () => import("../components/zujian/ff.vue")
  },
  // ----
  {
    path: "/gamepart",
    name: "gamepart",
    component: gamepart
  },
  {
    path: "/box",
    name: "box",
    component: box
  },
  {
    path: "/Ranking",
    // name: "Ranking",
    component: Ranking,
    children: [
      {
        path: "/Ranking",
        name: "Rankbody1",
        component: Rankbody1
      },
      {
        path: "/Rankbody2",
        name: "Rankbody2",
        component: Rankbody2
      }
    ]
  },
  {
    path: "/Ranking/Rankcenter",
    name: "Rankcenter",
    component: Rankcenter
  },
  {
    path: "/Activity",
    // name: "Activity",
    component: Activity,
    children: [
      {
        path: "/Activity",
        name: "Acontent1",
        component: Acontent1
      },
      {
        path: "/Acontent2",
        name: "Acontent2",
        component: Acontent2
      },
      {
        path: "/Acontent27",
        name: "Acontent27",
        component: Acontent27
      }
    ]
  },
  {
    path: "/musicplus",
    // name: "musicplus",
    component: musicplus
  },
  {
    path: "/Musicheader",
    name: "Musicheader",
    component: Musicheader
  },
  {
    path: "/Musicmain",
    // name: "Musicmain",
    component: Musicmain,
    children: [
      {
        path: "/musicplus",
        name: "Musicsy",
        component: Musicsy
      }
    ]
  },
  {
    path: "/Musiccolumn",
    name: "Musiccolumn",
    component: Musiccolumn
  },
  // -----------------------
  {
    path: "/",
    // name: "index",
    component: index,
    children: [
      {
        path: "/",
        name: "ReYou",
        components: {
          one: ReYou,
          two: NewestOne
        }
      },
      // {
      //   path: "/NewestOne",
      //   name: "NewestOne",
      //   component: NewestOne /*番剧--最新*/
      // },

      {
        path: "/FocusAnchor",
        name: "FocusAnchor",
        // component: FocusAnchor
        components: {
          two: NewestOne,
          four: FocusAnchor
        }
      },
      {
        path: "/LiveRanking",
        name: "LiveRanking",
        // component: LiveRanking
        components: {
          two: NewestOne,
          five: LiveRanking
        }
      },
      {
        path: "/MondayOne",
        name: "MondayOne",
        // component: MondayOne,
        components: {
          one: ReYou,
          three: MondayOne
        }
      },
      {
        path: "/WeekTwo",
        name: "WeekTwo",
        // component: WeekTwo,
        components: {
          one: ReYou,
          six: WeekTwo
        }
      },
      {
        path: "/WeekThree",
        name: "WeekThree",
        // component: WeekThree,
        components: {
          one: ReYou,
          week3: WeekThree
        }
      },
      {
        path: "/WeekFour",
        name: "WeekFour",
        // component: WeekFour,
        components: {
          one: ReYou,
          week4: WeekFour
        }
      },
      {
        path: "/WeekFive",
        name: "WeekFive",
        // component: WeekFive,
        components: {
          one: ReYou,
          week5: WeekFive
        }
      },
      {
        path: "/WeekSix",
        name: "WeekSix",
        // component: WeekSix,
        components: {
          one: ReYou,
          week6: WeekSix
        }
      },
      {
        path: "/Weekseven",
        name: "Weekseven",
        // component: Weekseven,
        components: {
          one: ReYou,
          week7: Weekseven
        }
      }
    ]
  },
  {
    path: "/VIP",
    name: "MemberPurchase",
    component: MemberPurchase
  },
  {
    path: "/Vip/Detailed",
    name: "Detailed",
    component: Detailed
  },
  {
    path: "/Vip/Detailed/Shopcar",
    name: "Shopcar",
    component: Shopcar
  },
  {
    path: "/FolkOpera",
    name: "FolkOpera",
    component: FolkOpera
  },
  {
    path: "/",
    name: "TVmascot",
    component: TVmascot
  },
  {
    path: "/",
    name: "Footer",
    component: Footer
  },
  {
    path: "/SecondSection",
    name: "SecondSection",
    component: SecondSection
  },
  {
    path: "/",
    name: "TemplateOne",
    component: TemplateOne
  },
  {
    path: "/",
    name: "NavigationBar",
    component: NavigationBar
  },
  {
    path: "/",
    name: "NavigationBarLower",
    component: NavigationBarLower
  },
  {
    path: "/",
    name: "Gamezx",
    component: Gamezx
  },
  {
    path: "/",
    name: "Live",
    component: Live
  },
  {
    path: "/",
    name: "APP",
    component: APP
  },
  {
    path: "/",
    name: "FirstSection",
    component: FirstSection
  },

  {
    path: "/",
    name: "Cartoon",
    component: Cartoon
  },
  {
    path: "/",
    name: "ContentleftOne",
    component: ContentleftOne
  },
  {
    path: "/",
    name: "FirstSectionRight",
    component: FirstSectionRight
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

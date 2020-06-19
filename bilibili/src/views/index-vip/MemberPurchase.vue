<template>
  <div>
    <VipHeader></VipHeader>
    <div class="selector-wrapper">
      <div class="wrapper city-selector-wrapper">
        <div class="title">城市:</div>
        <div class="selector-content">
          <ul class="city-list">
            <li class="first city-item active">全国</li>
            <li class="city-item">上海</li>
            <li class="city-item">北京</li>
            <li class="city-item">成都</li>
            <li class="city-item">深圳</li>
            <li class="city-item">杭州</li>
            <li class="city-item">南京</li>
            <li class="city-item">天津</li>
            <li class="city-item">广州</li>
            <li class="city-item">郑州</li>
          </ul>
        </div>
      </div>
      <div class="wrapper type-selector-wrapper">
        <div class="title type-title">类型:</div>
        <div class="selector-content">
          <ul class="type-list">
            <li class="current-type">
              <span class="active">全部类型</span>
            </li>
            <li class="current-type">
              <span>演出 </span>
            </li>
            <li class="current-type">
              <span>展览 </span>
            </li>
            <li class="current-type">
              <span>本地生活 </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper order-selector-wrapper">
        <div class="title">筛选:</div>
        <div class="selector-content">
          <ul class="order-list">
            <li class="first city-item active">全部时间</li>
            <li class="first city-item">本周</li>
            <li class="first city-item">本月</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ------ -->

    <VipTicket
      v-for="vipblock in vipblocks"
      :key="vipblock.id"
      :ticket="vipblock"
    ></VipTicket>
    <div class="whole-pagination-wrapper">
      <div class="pagination-wrapper">
        <div class="arrow pagination-left-arrow disabled"></div>
        <div class="pagination">
          <span class="pageNum active">1</span>
          <span class="pageNum">2</span>
          <span class="pageNum">3</span>
          <span class="pageNum">4</span>
          <span class="pageNum">...</span>
          <span class="pageNum">39</span>
        </div>
        <div class="arrow pagination-right-arrow"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import vippic1 from "../../assets/images-vip/vippic1.jpeg";
import vippic2 from "../../assets/images-vip/vippic2.jpeg";
import vippic3 from "../../assets/images-vip/vippic3.jpeg";
import vippic4 from "../../assets/images-vip/vippic4.jpeg";
import vippic5 from "../../assets/images-vip/vippic5.jpeg";
import vippic6 from "../../assets/images-vip/vippic6.jpeg";
import vippic7 from "../../assets/images-vip/vippic7.jpeg";
import vippic8 from "../../assets/images-vip/vippic8.jpeg";
import vippic9 from "../../assets/images-vip/vippic9.jpeg";
import vippic10 from "../../assets/images-vip/vippic10.jpeg";
import vippic11 from "../../assets/images-vip/vippic11.jpeg";
import vippic12 from "../../assets/images-vip/vippic12.jpeg";
import vippic13 from "../../assets/images-vip/vippic13.jpeg";
import vippic14 from "../../assets/images-vip/vippic14.jpeg";
import vippic15 from "../../assets/images-vip/vippic15.jpeg";
import vippic16 from "../../assets/images-vip/vippic16.jpeg";
import VipHeader from "@/components/vip/VipHeader.vue"; /*会员购头部*/
import VipTicket from "@/components/vip/VipTicket.vue"; /*会员购门票*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  components: {
    VipHeader,
    VipTicket,
    Footer
  },
  data() {
    return {
      vipblocks: [
        {
          items: [
            {
              vippic: vippic1,
              href: "/Vip/Detailed",
              title: "厦门·COMIC GAME 动漫嘉年华",
              time: "2020.06.25 - 06.27",
              address1: "厦门市",
              address2: "沧江会展中心",
              price: "50"
            },
            {
              vippic: vippic2,
              href: "#",
              title: "重庆·HR次元边境&TOP动漫游戏嘉年华",
              time: "2020.06.25 - 06.26",
              address1: "重庆市",
              address2: "新光天地",
              price: "50"
            },
            {
              vippic: vippic3,
              href: "#",
              title: "成都·AGW动漫游戏巡回展",
              time: "2020.06.25 - 06.26",
              address1: "成都市",
              address2: "中国西部国际博览城",
              price: "55"
            },
            {
              vippic: vippic4,
              href: "#",
              title: "乐山·Comic game party08-素冬",
              time: "2020.06.26 - 06.26",
              address1: "乐山市",
              address2: "健康城",
              price: "40"
            },
            {
              vippic: vippic5,
              href: "#",
              title: "肇庆·弥漫纪5TH",
              time: "2020.06.25 - 06.25",
              address1: "肇庆市",
              address2: "恒温羽毛球馆",
              price: "35"
            },
            {
              vippic: vippic6,
              href: "#",
              title: "【恢复营业】上海·人生一串纪录片授权体验店",
              time: "2019.12.19 - 2020.08.17",
              address1: "上海市",
              address2: "人生一串体验店",
              price: "50"
            },
            {
              vippic: vippic7,
              href: "#",
              title: "苏州·ACG大感谢祭",
              time: "2020.08.15 - 08.15",
              address1: "苏州市",
              address2: "江南四季酒店（军供大厦）",
              price: "25"
            },
            {
              vippic: vippic8,
              href: "#",
              title: "苏州·萌二次元动漫杂货铺",
              time: "2020.03.20 - 09.20",
              address1: "苏州市",
              address2: "萌二次元动漫杂货铺",
              price: "100"
            },
            {
              vippic: vippic9,
              href: "#",
              title: "太原·瞳画动漫游戏展春日祭",
              time: "2020.08.01 - 08.02",
              address1: "太原市",
              address2: "山西省展览馆",
              price: "50"
            },
            {
              vippic: vippic10,
              href: "#",
              title: "乌海·ACGN动漫嘉年华",
              time: "2020.10.01 - 10.01",
              address1: "乌海市",
              address2: "格兰云天",
              price: "45"
            },
            {
              vippic: vippic11,
              href: "#",
              title: "洛阳·零次元·DIMENSION ZERO7.2",
              time: "2020.10.02 - 10.02",
              address1: "洛阳市",
              address2: "洛阳会展中心",
              price: "45"
            },
            {
              vippic: vippic12,
              href: "#",
              title: "丹阳·镰仓-东游记动漫游戏嘉年华",
              time: "2020.07.11 - 07.11",
              address1: "镇江市",
              address2: "天禄人家酒店",
              price: "40"
            },
            {
              vippic: vippic13,
              href: "#",
              title: " 【恢复营业】青岛·幻光之城星空艺术馆",
              time: "2019.10.01 - 2020.10.01",
              address1: "青岛市",
              address2: "幻光之城星空艺术馆",
              price: "29"
            },
            {
              vippic: vippic14,
              href: "#",
              title: "泰安·萌次元暖春祭",
              time: "2020.05.17 - 05.17",
              address1: "泰安市",
              address2: "新华城国际广场",
              price: "40"
            },
            {
              vippic: vippic15,
              href: "#",
              title: "苏州·萤火夏日祭动漫展-ACG同人",
              time: "2020.08.01 - 08.02",
              address1: "苏州市",
              address2: "广电国际会展中心",
              price: "50"
            },
            {
              vippic: vippic16,
              href: "#",
              title: "济南·萌次元 暖春祭",
              time: "2020.05.16 - 05.16",
              address1: "济南市",
              address2: "金兆大酒店",
              price: "40"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.pagination-wrapper .arrow.pagination-right-arrow {
  background-image: url(../../assets/images-vip/rightmark.png);
}
.pagination-wrapper .pagination .pageNum {
  cursor: pointer;
  z-index: 2;
  display: inline-block;
  font-size: 12px;
  color: #222;
  letter-spacing: 0;
  font-family: Arial-Black;
  padding: 0 13px;
}
.pagination-wrapper .pagination .pageNum.active {
  color: #f25d8e;
  position: relative;
}
.pagination-wrapper .pagination {
  padding: 0 30px;
}
.pagination-wrapper .arrow {
  width: 17px;
  height: 17px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-top: 20px;
}
.pagination-wrapper .arrow.pagination-left-arrow.disabled {
  cursor: auto;
  background-image: url(../../assets/images-vip/leftmark.png);
}
.pagination-wrapper .arrow.pagination-left-arrow {
  background-image: url(../../assets/images-vip/leftmark2.png);
}
.pagination-wrapper {
  margin-bottom: 55px;
  justify-content: center;
  display: flex;
}
/* .project-list-wrapper {
  overflow: hidden;
  padding-bottom: 55px;
}
.project-list,
.project-list-wrapper {
  width: 1160px;
  margin: 0 auto;
} */
.selector-wrapper .type-list li:hover {
  color: #f25d8e;
}
.selector-wrapper .type-list .current-type span {
  display: inline-block;
  padding: 0 10px;
  line-height: 36px;
  height: 36px;
}
.selector-wrapper .type-list .current-type span.active {
  text-align: center;
  color: #f25d8e;
}
.selector-wrapper .type-list li {
  cursor: pointer;
  width: 140px;
}
.selector-wrapper .type-list {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #6d757a;
  letter-spacing: 0;
  line-height: 14px;
  margin-top: 10px;
}
.selector-wrapper .selector-content {
  flex: 1 1;
}
.selector-wrapper .city-list .city-item,
.selector-wrapper .order-list .city-item {
  cursor: pointer;
  width: 90px;
}
.selector-wrapper .city-list .city-item.first,
.selector-wrapper .order-list .city-item.first {
  width: 140px;
}
.selector-wrapper .city-list .city-item.active,
.selector-wrapper .city-list .city-item:hover,
.selector-wrapper .order-list .city-item.active,
.selector-wrapper .order-list .city-item:hover {
  color: #f25d8e;
}
.selector-wrapper .title.type-title {
  width: 65px;
  margin-right: 0;
}
.selector-wrapper .city-list,
.selector-wrapper .order-list {
  font-size: 12px;
  color: #6d757a;
  letter-spacing: 0;
  line-height: 14px;
  display: flex;
  margin-top: 10px;
}
.selector-wrapper .selector-content {
  flex: 1 1;
}
.selector-wrapper .title {
  width: 75px;
  font-size: 12px;
  color: #99a2aa;
  letter-spacing: 0;
}
.selector-wrapper .wrapper {
  box-sizing: border-box;
  background: #fff;
  width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 40px;
}
.selector-wrapper .city-selector-wrapper,
.selector-wrapper .type-selector-wrapper {
  border-bottom: 1px dashed #e5e9ef;
}
.selector-wrapper {
  z-index: 2;
  width: 100%;
  height: 120px;
  background: #fff;
  box-shadow: 0 0 15px 0 hsla(203, 6%, 45%, 0.09),
    0 1px 0 0 rgba(204, 208, 215, 0.3);
}
</style>

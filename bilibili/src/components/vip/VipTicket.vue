<template>
  <div class="project-list-wrapper">
    <div class="project-list">
      <div
        class="project-list-item"
        v-for="item in ticket.items"
        :key="item.id"
      >
        <a :href="item.href">
          <div
            class="project-list-item-img"
            :style="{ backgroundImage: 'url(' + item.vippic + ')' }"
          ></div>
          <div class="project-list-item-detail">
            <div class="project-list-item-title">{{ item.title }}</div>
            <div class="project-list-item-time">
              <span class="icon time-icon"></span>
              {{ item.time }}
            </div>
            <div class="project-list-item-address">
              <span class="icon address-icon"></span>
              <span class="city-name">{{ item.address1 }}</span>
              <span class="venue-name-and-address">{{ item.address2 }}</span>
            </div>
            <div class="project-list-item-price">
              <div class="not-free">
                <span class="price-symbol">¥</span>
                <span class="price">{{ item.price }}</span>
                <span class="start">起</span>
                <span class="promo-item">独家</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ticket"]
};
</script>

<style>
.project-list .project-list-item:hover .project-list-item-img {
  transform: translate3d(0, -10px, 0);
}
.project-list .project-list-item:hover {
  box-shadow: 0 15px 20px 0 hsla(203, 6%, 45%, 0.4);
}
.project-list .project-list-item .promo-item {
  display: inline-block;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: auto;
  height: 16px;
  line-height: 16px;
  margin-left: 8px;
  color: #fb7299;
  font-size: 12px;
  text-align: center;
  border: 1px solid #fb7299;
  border-radius: 1px;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price
  .start {
  line-height: 12px;
  margin-left: 5px;
  font-size: 12px;
  color: #999;
  margin-bottom: 2px;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price
  .price {
  margin-left: 4px;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 24px;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price
  .price-symbol {
  align-self: flex-end;
  font-size: 18px;
  line-height: 18px;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price,
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price
  .not-free {
  display: flex;
  align-items: flex-end;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price {
  margin-top: 40px;
  color: #f25d8e;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price,
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-price
  .not-free {
  display: flex;
  align-items: flex-end;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .venue-name-and-address {
  flex: 1 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 260px;
}
.project-list .project-list-item .project-list-item-detail .city-name {
  margin-right: 10px;
}
.project-list .project-list-item .project-list-item-detail .address-icon {
  margin-top: 0;
  background-image: url(../../assets/images-vip/address.png);
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-address {
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 17px;
  font-size: 14px;
  color: #999;
}
.project-list .project-list-item .project-list-item-detail .icon {
  margin-top: 1px;
  margin-right: 8px;
  display: inline-block;
  width: 12px;
  height: 13px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-time
  .time-icon {
  background-image: url(../../assets/images-vip/booo.png);
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-time {
  margin-top: 19px;
  display: flex;
  align-items: center;
  height: 17px;
  font-size: 14px;
  color: #999;
}
.project-list
  .project-list-item
  .project-list-item-detail
  .project-list-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin-top: 30px;
  width: 286px;
  height: 48px;
  font-size: 18px;
  color: #222;
  letter-spacing: 0;
  line-height: 24px;
}
.project-list .project-list-item .project-list-item-detail {
  margin-left: 223px;
}
.project-list .project-list-item .project-list-item-img {
  transition: transform 0.1s;
  background: #fff;
  box-shadow: 3px 3px 2px 0 hsla(203, 6%, 45%, 0.3);
  border-radius: 8px;
  left: 20px;
  bottom: 24px;
  position: absolute;
  width: 175px;
  height: 233px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.project-list .project-list-item {
  cursor: pointer;
  display: flex;
  position: relative;
  margin-top: 60px;
  margin-right: 20px;
  width: 560px;
  height: 237px;
  background: #fff;
  box-shadow: 0 0 15px 0 hsla(203, 6%, 45%, 0.09);
  border-radius: 8px;
  float: left;
  transition: transform 0.2s;
}
.project-list-wrapper {
  overflow: hidden;
  padding-bottom: 55px;
}
.project-list,
.project-list-wrapper {
  width: 1160px;
  margin: 0 auto;
}
</style>

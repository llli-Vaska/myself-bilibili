<template>
  <div v-bind:class="data.class">
    <div class="space-between report-wrap-module report-scroll-module">
      <div class="card-list">
        <header class="storey-title">
          <div class="l-con">
            <img :src="data.logo" class="svg-icon svg-icon" />
            <a href="#" class="name">{{ data.logotitle }}</a>
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
          <div
            class="video-card-common"
            v-for="item in data.items"
            :key="item.id"
          >
            <div class="card-pic">
              <a href="#">
                <span class="shadow4"></span>
                <img :src="item.img" />
                <div class="count">
                  <div class="left">
                    <span
                      style="font-size:12px;vertical-align: middle;margin-bottom:-4px"
                    >
                      <img
                        src="@/assets/images-index/bf.png"
                        style="width:18px;height:18px"
                        class="bilifont bili-icon_shipin_bofangshu bf"
                      />
                      {{ item.bofangnum }}万
                    </span>
                    <span
                      style="font-size:12px;vertical-align: middle; middle;margin-bottom:-1px"
                    >
                      <img
                        src="@/assets/images-index/dz.png"
                        style="width:14px;height:13px"
                        class="bilifont bili-icon_shipin_dianzanshu dz"
                      />
                      {{ item.dianzhannum }}万
                    </span>
                  </div>
                  <div class="timebox">
                    <span>{{ item.time }}</span>
                  </div>
                </div>
                <img
                  v-if="!(typeof item.hgold == 'undefined')"
                  src="@/assets/images-index/icon_gold.png"
                  class="crown gold"
                />
                <img
                  v-if="!(typeof item.ygold == 'undefined')"
                  src="@/assets/images-index/icon_silver.png"
                  class="crown gold"
                />
              </a>
              <a href="#" class="title">{{ item.title }}</a>
              <a href="#" class="up">
                <img
                  src="@/assets/images-index/up.png"
                  style="width:16px;height:15px"
                  class="bilifont bili-icon_xinxi_UPzhu"
                />
                {{ item.up }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="rank-list">
        <header class="rank-header">
          <span class="name">排行榜</span>
          <a href="#" class="more"
            >更多
            <i
              class="glyphicon glyphicon-menu-right bilifont"
              style="margin-bottom:3px;margin-left:5px;"
            ></i>
          </a>
        </header>
        <div class="rank-wrap" v-for="item in data.paihangs" :key="item.id">
          <span :class="item.class">{{ item.number }}</span>
          <div class="preview" v-if="!(typeof item.one == 'undefined')">
            <div class="pic">
              <a href="#" class="link">
                <img :src="item.img" />
              </a>
            </div>
            <div class="txt">
              <a href="#" class="link1">
                <p :title="item.title">{{ item.title1 }}</p>
              </a>
              <span>{{ item.titlenumber }}</span>
            </div>
          </div>
          <a href="#" class="link2" v-if="!(typeof item.two == 'undefined')">
            <p :title="item.title2" class="title2">{{ item.title2 }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import svgcatroon from "@/assets/images-index/bili-donghua.svg";
export default {
  props: ["data"]
};
</script>

<style>
.link2:hover {
  color: #00a1d6;
}
.link1:hover {
  color: #00a1d6;
}
.rank-wrap .preview .txt p {
  font-size: 14px;
  /* height: 40px; */
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}
.rank-wrap .title2 {
  width: 290px;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* color: #212121; */
}
.rank-wrap .preview .txt span {
  color: #999;
  white-space: nowrap;
  font-size: 12px;
}
rank-wrap .preview .txt p {
  font-size: 14px;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}
.rank-wrap .preview .txt {
  margin-left: 12px;
}
.rank-wrap .preview img {
  width: 112px;
  height: 63px;
  border-radius: 2px;
}
/* .rank-wrap .link {
  display: inline-block;
} */
.rank-wrap .preview .pic {
  position: relative;
}
.rank-wrap .preview {
  position: relative;
  display: flex;
  width: 290px;
  font-weight: 500;
}
.rank-wrap .number {
  font-size: 14px;
  color: #999;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  /* background: #fff; */
  border-radius: 2px;
  display: inline-block;
}
.rank-wrap .number.on {
  color: #fff;
  background: #00a1d6;
}
.rank-wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 7px;
}
.rank-header .more:hover {
  background-color: #f4f4f4;
}
.rank-header .more {
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding: 0 0 0 12px;
  width: 58px;
  height: 22px;
  border: 1px solid silver;
  border-radius: 2px;
  color: #505050;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  transition: all 0.2s;
}
.rank-header .name {
  display: inline-block;
  color: #212121;
  vertical-align: bottom;
  font-size: 20px;
  line-height: 28px;
}
.rank-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
}
.rank-list {
  width: 320px;
}
/* ------------------------------------------------- */
.shadow4 {
  width: 206px;
  height: 50px;
  padding: 0 10px;
  opacity: 0.65;
  border-radius: 4px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 12px;
  line-height: 30px;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
  background: url(../../assets/images-index/shadow.png) repeat-x; /*阴影*/
}
.timebox {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
}
.video-card-common .up {
  display: flex;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
.video-card-common .title:hover,
.video-card-common .up:hover {
  color: #00a1d6;
}
.video-card-common .title {
  color: #212121;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 8px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  padding-right: 12px;
}
.video-card-common .card-pic a .crown {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 24px;
  background-size: contain;
}
.video-card-common .bilifont {
  margin-right: 4px;
  vertical-align: middle;
}
.video-card-common .card-pic a .count .left span:first-child {
  margin-right: 12px;
  font-size: 12px;
}
.video-card-common .card-pic a .count .left {
  display: flex;
  align-items: center;
}
.video-card-common .card-pic a .count {
  display: flex;
  align-items: center;
  position: absolute;
  /* height: 27px; */
  bottom: 0px;
  width: 100%;
  padding: 6px 8px;
  justify-content: space-between;
  color: #fff;
  line-height: 16px;
}
.video-card-common .card-pic a img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.video-card-common .card-pic {
  position: relative;
  width: 100%;
  height: 116px;
}
.video-card-common {
  width: 206px;
  margin-bottom: 90px;
  cursor: pointer;
}
.zone-list-box {
  overflow: hidden;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 1286px; */
  height: 404px;
}
/*-----------------------------------------*/
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
.exchange-btn .btn {
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
}
.storey-title .name {
  margin: 0 20px 0 0;
  vertical-align: bottom;
  font-size: 20px;
  line-height: 36px;
}
.svg-icon {
  width: 36px;
  height: 36px;
  vertical-align: middle;
  fill: currentColor;
}
.storey-title .l-con .svg-icon {
  margin-right: 6px;
}
.storey-title .l-con {
  display: inline-flex;
}
.storey-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
}
.space-between {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
</style>

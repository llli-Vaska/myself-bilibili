<template>
  <div>
    <partx></partx>

    <div class="bestxx">
      <ul>
        <li>
          <div>
            <p class="fss">粉丝数</p>
            <p class="num">104万</p>
            <p class="yes">昨日:+50</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">视频播放</p>
            <p class="num">1506万</p>
            <p class="yes">昨日:+56200</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">评论数</p>
            <p class="num">2万</p>
            <p class="yes">昨日:+200</p>
          </div>
        </li>
      </ul>
      <ul class="xx">
        <li>
          <div>
            <p class="fss">弹幕数</p>
            <p class="num">5000</p>
            <p class="yes">昨日:+200</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">点赞数</p>
            <p class="num">10万</p>
            <p class="yes">昨日:+200</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">分享数</p>
            <p class="num">1000</p>
            <p class="yes">昨日:+200</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.bestxx {
  position: relative;
  margin-left: 0px;
  top: 0;
  width: 1200px;
  height: 300px;
  margin-left: 180px;
}
.bestxx ul li {
  position: relative;
  float: left;
  list-style: none;
}
.bestxx ul li div {
  width: 270px;
  height: 100px;
  background-color: rgba(0, 161, 214, 0.03);
  margin-left: 115px;
}
.bestxx ul li div .fss {
  font-size: 14px;
  font-family: "黑体";
  margin-left: 10px;
  padding-top: 10px;
}
.bestxx ul li div .num {
  font-size: 20px;
  font-family: "华文行楷";
  margin-left: 80px;
  font-weight: bold;
  color: #3498bd;
}
.bestxx ul li div .yes {
  font-size: 14px;
  font-family: "黑体";
  margin-left: 10px;
}
.bestxx .xx li div {
  width: 270px;
  height: 100px;
  background-color: rgba(0, 161, 214, 0.03);
  margin-left: 115px;
  margin-top: 40px;
  position: relative;
}
</style>
<script>
import partx from "@/components/zujian/partx.vue";

export default {
  name: "ddt",
  components: {
    partx
  }
};
</script>

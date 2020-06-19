<template>
  <div>
    <partx></partx>

    <div class="bestzz">
      <ul>
        <li>
          <div>
            <p class="fss">粉丝数</p>
            <p class="num">12</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">阅读量</p>
            <p class="num">50</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">评论数</p>
            <p class="num">5</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
      </ul>
      <ul class="xx">
        <li>
          <div>
            <p class="fss">收藏数</p>
            <p class="num">5</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">点赞数</p>
            <p class="num">6</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
        <li>
          <div>
            <p class="fss">分享数</p>
            <p class="num">1</p>
            <p class="yes">昨日:- -</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.bestzz {
  position: relative;
  margin-left: 180px;
  top: 0;
  width: 1200px;
  height: 300px;
}
.bestzz ul li {
  position: relative;
  float: left;
  list-style: none;
}
.bestzz ul li div {
  width: 270px;
  height: 100px;
  background-color: rgba(0, 161, 214, 0.03);
  margin-left: 115px;
}
.bestzz ul li div .fss {
  font-size: 14px;
  font-family: "黑体";
  margin-left: 10px;
  padding-top: 10px;
}
.bestzz ul li div .num {
  font-size: 20px;
  font-family: "华文行楷";
  margin-left: 80px;
  font-weight: bold;
  color: #3498bd;
}
.bestzz ul li div .yes {
  font-size: 14px;
  font-family: "黑体";
  margin-left: 10px;
}
.bestzz .xx li div {
  width: 270px;
  height: 100px;
  background-color: rgba(0, 161, 214, 0.03);
  margin-left: 115px;
  margin-top: 40px;
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

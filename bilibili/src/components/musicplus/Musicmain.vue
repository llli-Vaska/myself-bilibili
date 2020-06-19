<!-- 音乐节目内容 -->
<template>
  <div id="musicmain">
    <div class="music-home">
      <div class="musicmain-menu">
        <div class="tabss">
          <a href="#" class="router-link-exact-active router-link-active active"
            >音乐首页</a
          >
          <a href="#">视频</a>
          <a href="#">策划</a>
        </div>
        <div class="clearfloat"></div>
      </div>

      <Musicsy></Musicsy>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 1400px) {
  #musicmain {
    width: 1286px;
  }
}

#musicmain {
  margin: 8px auto 0;
  min-height: 800px;
}

.musicmain-menu .tabss {
  float: left;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
}
.musicmain-menu .tabss a.active {
  color: #00a1d6;
  border-bottom: 2px solid #00a1d6;
}
.musicmain-menu .tabss a {
  display: inline-block;
  color: #212121;
  font-size: 16px;
  margin-right: 30px;
  line-height: 36px;
}
.musicmain-menu .clearfloat {
  clear: both;
}
</style>

<script>
import Musicsy from "@/components/musicplus/Musicsy.vue"; /*音乐内容首页*/

export default {
  components: {
    Musicsy
  }
};
</script>

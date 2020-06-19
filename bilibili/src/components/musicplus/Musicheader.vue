<!-- 音乐节目头部 -->
<template>
  <div class="musichome-slide">
    <div class="van1-slide">
      <div class="music">
        <a href="#">
          <img src="../../assets/music/mojito.jpg" />
          <p class="title1">【官方】周杰伦新歌MV发布</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.musichome-slide {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 26vw;
  min-height: 500px;
  margin-top: -180px;
  text-align: center;
  vertical-align: middle;
}
.van1-slide {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.van1-slide > div {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
}
.musichome-slide a {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0px;
}
.musichome-slide .music .title1 {
  position: absolute;
  bottom: 10px;
  left: 40%;
  margin-left: -535px;
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 70%;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
}
</style>

<template>
  <div class="zx">
    <div class="heamain">
      <a href="#">视频投稿</a>
      <a href="#">专栏投稿</a>
      <a href="#">互动视频投稿</a>
      <a href="#">音频投稿</a>
    </div>
    <div class="part2">
      <ul class="paul21">
        <li class="lipl"><img src="@/assets/imgsz/gg.png" alt="" /></li>
      </ul>
      <div class="part23">
        <img class="sc" src="@/assets/imgsz/sc.png" />
        <p class="sc1">拖拽视频到此处也可以上传</p>
        <button class="sc2">上传视频</button>
        <p class="sc3">当前审核队列繁忙</p>
      </div>
      <div class="part24">
        <div class="jjs">
          <img class="jj1" src="@/assets/imgsz/jjj.png" alt="" />
        </div>
        <div class="jjz">
          <p class="jjp">bilibili云剪辑</p>
          <p class="jjq">支持云渲染，无需导出直接上传</p>
        </div>
        <div class="jja"><p>查看使用帮助</p></div>
        <div class="jjb"><button class="jjbz">立即体验</button></div>
      </div>
      <div class="serve">
        <div class="serve1">
          <ul class="ul-serve">
            <li>禁止发布的视频内容</li>
            <li>视频大小</li>
            <li>视频格式</li>
            <li>视频码率</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ul-serve {
  margin-left: 350px;
  margin-top: 30px;
  list-style: none;
  color: #757575;
}
.ul-serve li {
  float: left;
  margin-left: 50px;
}
.zx {
  width: 1200px;
}
.heamain a {
  color: #505050;
  text-decoration: none;
}
.heamain a:hover {
  color: #00a1d6;
}
.jja {
  position: relative;
  margin-left: 600px;
  margin-top: -40px;
  font-size: 12px;
  color: #00a1d6;
}
.jjb {
  position: relative;
  margin-left: 700px;
  margin-top: -32px;
}
.jjbz {
  width: 80px;
  height: 30px;
  background-color: #00a1d6;
  color: aliceblue;
  font-size: 14px;
  border-radius: 4px;
  border: none;
}
.jj1 {
  width: 50px;
  height: 50px;
}
.jjs {
  position: relative;
  margin-left: 80px;
  margin-top: 15px;
}
.jjz {
  position: relative;
  margin-left: 170px;
  margin-top: -46px;
}
.jjp {
  margin-bottom: 3px;
  font-size: 16px;
  color: #212121;
  font-weight: 700;
  line-height: 22px;
}
.jjq {
  margin-top: 5px;
}
.sc {
  width: 40px;
  height: 40px;
  margin-left: 400px;
  margin-top: 20px;
}
.sc1 {
  text-align: center;
  font-size: 14px;
  color: #757575;
  margin-top: 10px;
}
.sc2 {
  height: 44px;
  width: 200px;
  margin-left: 316px;
  font-size: 16px;
  color: aliceblue;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  background: #00a1d6;
  border: none;
  margin-top: 20px;
}
.sc3 {
  text-align: center;
  font-size: 10px;
  color: #757575;
  margin-top: 10px;
}
.heamain {
  border: 1px solid #e7e7e7;
  background: #fff;
  left: 0;
  width: 1300px;
  z-index: 8;
  white-space: nowrap;
  padding-left: 150px;
  height: 50px;
  margin-top: -658px;
  font-size: 16px;
  padding-top: 13px;
}
.heamain a {
  margin: 40px;
  margin-top: 50px;
  margin-left: 100px;
  border-bottom-color: #00a1d6;
  border-bottom: 1px solid transparent;
}
.paul21 {
  list-style: none;
  margin-left: 180px;
  margin-top: 10px;
}
.lipl {
  height: 69px;
  width: 830px;
}
.part23 {
  width: 830px;
  height: 250px;
  border: 2px dashed #e7e7e7;
  position: relative;
  margin-left: 220px;
  border-radius: 14px;
}
.part24 {
  width: 830px;
  height: 80px;
  border: 1px dashed #e7e7e7;
  position: relative;
  margin-left: 220px;
  border-radius: 4px;
  margin-top: 10px;
  background: rgba(0, 161, 214, 0.05);
}
</style>
<script>
export default {};
</script>

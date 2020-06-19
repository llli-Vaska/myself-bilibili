<template>
  <div style="height:300px;border-top:1px solid black;margin-top:1100px">
    <div class="leftxx">
      <div class="bilibili">
        <a href="#"><img src="@/assets/gameimg/bilibili-logo.png"/></a>
      </div>
      <div class="wenli">
        <a href="#"><img src="@/assets/gameimg/culture-logo.png"/></a>
      </div>
    </div>
    <div class="rightxx">
      <div class="up">
        <ul>
          <li><a class="zx" href="#">游戏中心</a></li>
          <li><a class="zx" href="#">账号安全</a></li>
          <li><a class="zx" href="#">找回密码</a></li>
          <li><a class="zx" href="#">家长监控</a></li>
          <li><a class="zx" href="#">用户协议</a></li>
          <li><a href="#" style="font-size:12px;">隐私政策</a></li>
        </ul>
      </div>
      <br /><br />
      <div class="down1">
        <p>本网络游戏适合年满18岁（含）以上的玩家使用</p>
        <p>
          抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑
          沉迷游戏伤身 合理安排时间 享受健康生活
        </p>
        <p>
          上海宽娱数码科技有限公司 | COPYRIGHT © 2009-2020 BILIBILI ALL RIGHTS
          RESERVED.
        </p>
        <p>
          互联网ICP备案： 沪公网安备 31011002002436 号 |
          全国文化市场举报电话：12318
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.down1 {
  margin-top: 10px;
  margin-left: 40px;
  font-size: 13px;
  color: #7d7d7d;
}
.zx {
  border-right: 1px solid black;
}
.up {
  height: 50px;
}
.up ul li .zx {
  padding-right: 10px;
  font-size: 12px;
}
.up ul li {
  width: 80px;
  float: left;
}
.leftxx {
  position: absolute;
  margin-top: 50px;
  margin-left: 230px;
  width: 500px;
  height: 200px;
}
.rightxx {
  position: relative;
  margin-top: 50px;
  margin-left: 600px;
  height: 300px;
  width: 700px;
}
.bilibili {
  border-right: 1px solid black;
  width: 150px;
  height: 60px;
  margin-top: 100px;
}
.bilibili img {
  width: 131px;
  height: 50px;
}
.wenli {
  position: relative;
  margin-left: 160px;
  top: -55px;
}
.wenli img {
  width: 60px;
  height: 60px;
}
</style>

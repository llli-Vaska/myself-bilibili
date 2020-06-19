<template>
  <div class="zzzup">
    <div class="dz">
      <ul>
        <li>
          <a href="#">点赞<small>13000</small></a>
        </li>
        <li class="o">
          <a href="#">投币<small>1350</small></a>
        </li>
        <li class="o">
          <a href="#">收藏<small>2000</small></a>
        </li>
        <li class="o">
          <a href="#">转发<small>500</small></a>
        </li>
        <li class="y">稿件投诉</li>
      </ul>
    </div>
    <div class="jianj">
      <p>
        自制 小次郎此行 如飞燕掠过 去也匆匆 此MAD谨以纪念 致assassin佐佐木小次郎
        喜欢请加关注 硬币支持奥 bgm:Human Legacy
      </p>
    </div>
    <div class="bqian">
      <ul>
        <li><button>MAD</button></li>
        <li class="tt"><button>Fate/stay night</button></li>
        <li class="tt"><button>三木真一郎</button></li>
        <li class="tt"><button>FATE</button></li>
        <li class="tt"><button>ASSASION</button></li>
        <li class="tt"><button>+</button></li>
      </ul>
    </div>
    <div class="gggz"><img src="@/assets/imgzrc/ggao.png" alt="" /></div>
    <div class="down">
      <div class="btpl"><p>300评论</p></div>
      <div class="btpl1"><p>热度评论</p></div>
      <div class="pdd">
        <div class="pdd1">
          <img src="@/assets/imgzrc/space.jpg" alt="" />
        </div>
        <div class="fgfg">
          <input
            type="text"
            placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"
          />
          <button>发表评论</button>
        </div>
      </div>
      <div class="dsm">
        <div class="dsm1"><img src="@/assets/imgzrc/dd111.png" alt="" /></div>
        <div class="dsm2">
          <p class="dsm21">荣光尽存彼岸 <small>Lv6</small></p>
          <p>
            看见好多人在争亚瑟王是怎么躲过小次郎的燕反的，在我的搜寻下，在一个帖子中看见了一个人把那一段一帧一帧截了下来，并且把第一次放燕反的时候也截了下来，比较一下发现。燕反总计3刀，第一次的燕反很完美，但是第二次，也许因为刀接近握柄处的裂痕，可以明显看出右边那一刀慢了许多，虽然上和左仍然正常，然后通过截图还发现，亚瑟王正是抓住那慢了的一刀的破绽，利用自己的身高（这不是搞笑），向右边躲闪，再向下一沉成功过去，然后反击，具体的帖子很抱歉找不到了，不过具体的我还是记得很清楚，在此解释一下，为所有喜欢小次郎的人。（虽然我最喜欢的是我头像中的人）
          </p>
          <p class="dsm22">
            2016-02-04 23:28 <small><a href="#">点赞300</a></small>
            <small><a href="#">踩</a></small>
          </p>
        </div>
      </div>
      <div class="dsm">
        <div class="dsm0"><img src="@/assets/imgzrc/fff11.png" alt="" /></div>
        <div class="dsm3">
          <p class="dsm21">七曜之语 <small>Lv5</small></p>
          <p>那些LOL的弹幕 在下举报了不少</p>
          <p class="dsm22">
            2016-02-04 23:28 <small><a href="#">点赞300</a></small>
            <small><a href="#">踩</a></small>
          </p>
        </div>
      </div>
      <div class="zdx">
        <ul>
          <li><button class="lllll">1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button class="33333">下一页</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.zdx {
  position: relative;
  top: -30px;
  height: 10px;
}
.zdx ul li .lllll {
  background-color: #00a1d6;
  color: #fff;
}
.zdx ul li {
  float: left;
  list-style: none;
}
.zdx ul li button {
  width: 60px;
  height: 40px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
}
.dsm0 img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin-top: -40px;
}
.dsm3 {
  position: relative;
  left: 100px;
  top: -70px;
  width: 655px;
  height: 80px;
  border-bottom: 1px solid #e5e9ef;
}
.dsm22 small a {
  color: #999;
  text-decoration: none;
}
.dsm22 small a:hover {
  color: #00a1d6;
}
.dsm2 {
  position: relative;
  left: 100px;
  top: -70px;
  width: 655px;
  height: 180px;
  border-bottom: 1px solid #e5e9ef;
}
.dsm21 {
  color: #fb7299;
  font-weight: bold;
  font-size: 12px;
  font-family: "黑体";
}
.dsm22 {
  font-size: 12px;
  color: #999;
}
.dsm1 img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  margin-top: -30px;
}
.fgfg {
  position: relative;
  left: 100px;
  top: -70px;
  height: 100px;
  width: 650px;
  border-bottom: 1px solid #e5e9ef;
}
.fgfg input {
  width: 473px;
  height: 65px;
  border: 1px solid #e5e9ef;
  border-radius: 5px;
  background-color: #f4f5f7;
  transition: 0.4s;
  position: relative;
  top: -15px;
}
.fgfg input:hover {
  border: 1px solid #00a1d6;
  background-color: #fff;
}
.fgfg button {
  width: 67px;
  height: 67px;
  border: none;
  position: relative;
  border-radius: 4px;
  background-color: #00a1d6;
  color: #fff;
  margin-top: 20px;
  margin-left: 60px;
  font-size: 17.5px;
}

.pdd {
  position: relative;
  margin-top: 20px;
}
.pdd1 img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.zzzup {
  position: relative;
  width: 750px;
  margin-top: -510px;
  margin-left: 290px;
}
.dz {
  width: 750px;
  height: 55px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.dz ul li {
  float: left;
  list-style: none;
  position: relative;
  left: -30px;
  margin-top: 15px;
  color: #999;
}
.dz ul li a {
  color: #999;
  text-decoration: none;
}
.dz ul li a:hover {
  color: #00a1d6;
}
.o {
  position: relative;
  margin-left: 40px;
}
.y {
  position: relative;
  margin-left: 300px;
}
.jianj {
  position: relative;
  margin-top: 20px;
  width: 600px;
}
.jianj p {
  font-size: 12px;
  color: #999;
}
.bqian {
  height: 70px;
  border-bottom: 1px solid #e5e9ef;
}
.bqian ul li {
  list-style: none;
  float: left;
  position: relative;
  left: -40px;
  margin-top: 20px;
}
.bqian ul li button {
  width: 100px;
  height: 20px;
  border: none;
  border-radius: 20px;
  font-size: 12px;
}
.tt {
  margin-left: 20px;
}
.gggz {
  position: relative;
  margin-top: 10px;
}
.gggz img {
  width: 750px;
  height: 53px;
}
.btpl {
  position: relative;
  margin-top: 20px;
}
.btpl p {
  font-size: 20px;
}
.btpl1 {
  position: relative;
  margin-top: 10px;
  height: 20px;
  border-bottom: 1px solid #00a1d6;
}
.btpl1 p {
  color: #00a1d6;
  font-weight: bold;
}
</style>

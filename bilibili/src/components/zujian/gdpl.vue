<template>
  <div>
    <div class="dpj">
      <a href="#">视频稿件</a>
      <ul v-for="item in items" :key="item.id">
        <li>
          <div class="tth"><img v-bind:src="item.img" /></div>
          <div class="ppll">
            <p class="pplp1">{{ item.first }}</p>
            <p class="ppllp0">{{ item.sec }}</p>
            <p class="ppllp2">{{ item.thr }}</p>
          </div>
          <div class="ooll">
            <button>编辑</button>
            <button class="ooll1">数据</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("@/assets/imgsz/hea.png"),
          first: "王者荣耀的翻车机制",
          sec: "20-02-15 16:22:13",
          thr: "论对局的各种奇葩"
        },
        {
          id: 2,
          img: require("@/assets/imgsz/xybk.png"),
          first:
            "『许愿宝库』当你放弃秒出水门花几百抽去弄许愿宝库的柱间是什么感觉。",
          sec: "20-02-18 22:22:13",
          thr: "这就是忍者之神"
        },
        {
          id: 3,
          img: require("@/assets/imgsz/spl.png"),
          first: "打开只需一秒交出你的硬币",
          sec: "20-02-15 16:22:13",
          thr: "综合剪辑燃爆全场"
        },
        {
          id: 4,
          img: require("@/assets/imgsz/edm.png"),
          first: "脱非入欧，就在今天",
          sec: "20-02-15 16:22:13",
          thr: "两万金币肆意装逼挥霍"
        }
      ]
    };
  }
};
</script>
<style scoped>
.ooll1 {
  margin-left: 20px;
  position: relative;
}
.ooll {
  position: relative;
  margin-left: 800px;
  margin-top: -80px;
}
.ooll button {
  width: 90px;
  height: 45px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #fff;
  color: #999;
  font-size: 16px;
}
.ooll button:hover {
  border: 1px solid #00a1d6;
  color: #00a1d6;
}
.ppllp2 {
  position: relative;
  margin-top: 28px;
  font-size: 16px;
  color: #999;
}
.pplp1 {
  font-size: 16px;

  font-weight: bold;
}
.ppll {
  position: relative;
  margin-left: 180px;
  margin-top: -98px;
}
.tth img {
  width: 154px;
  height: 96px;
}
ul {
  position: relative;
  margin-top: 30px;
  margin-left: 30px;
}
.dpj ul li {
  list-style: none;
  width: 1095px;
  height: 115px;
  border-bottom: 1px solid #e7e7e7;
}
.dpj {
  width: 1200px;
  height: 600px;
  position: relative;
  margin-top: -630px;
  margin-left: 10px;
}
a {
  position: relative;
  margin-left: -110px;
  padding-left: 5px;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #00a1d6;
  border-left: 20px solid #00a1d6;
  border-bottom: 2px solid #00a1d6;
}
a:hover {
  text-decoration: none;
}
</style>

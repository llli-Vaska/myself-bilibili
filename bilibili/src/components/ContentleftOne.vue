// 首页图片轮播
<template>
  <div id="benner">
    <div class="img">
      <a href="#"><img v-bind:src="lunbo1" class="imga active"/></a>
      <a href="#"><img v-bind:src="lunbo2" class="imga"/></a>
      <a href="#"><img v-bind:src="lunbo3" class="imga"/></a>
      <a href="#"><img v-bind:src="lunbo4" class="imga"/></a>
      <a href="#"><img v-bind:src="lunbo5" class="imga"/></a>
    </div>
    <ul class="title">
      <li class="nr active"></li>
      <li class="nr"></li>
      <li class="nr"></li>
      <li class="nr"></li>
      <li class="nr"></li>
    </ul>
  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js"></script>
<script src="//cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
import lunbo1 from "../assets/images-index/lunbo1.jpg"; //将图片路径引入
import lunbo2 from "../assets/images-index/lunbo2.jpg";
import lunbo3 from "../assets/images-index/lunbo3.jpg";
import lunbo4 from "../assets/images-index/lunbo4.jpg";
import lunbo5 from "../assets/images-index/lunbo5.jpg";

export default {
  name: "ContentleftOne",
  data() {
    return {
      lunbo1,
      lunbo2,
      lunbo3,
      lunbo4,
      lunbo5
    };
  },
  methods: {
    window: (onload = function() {
      benner("#benner", ".nr", ".imga");

      function benner(parent, controller, mod) {
        var num = 0;
        var controller = $(controller);
        var mod = $(mod);
        var benner = $(parent);
        var autoPlayTime = 4200;
        var imgNum = mod.length - 1;
        var auto;

        autoPlay();
        //根据传进来的名字获取这个名字所对应的对象
        function $(name) {
          if (name[0] == "#") {
            return document.getElementById(name.substr(1));
          } else if (name[0] == ".") {
            return document.getElementsByClassName(name.substr(1));
          } else {
            return document.getElementsByTagName(name);
          }
        }

        //实现鼠标划过圆点,变化图片的效果
        //function change(controller, mod){
        //遍历控制器,绑定鼠标划过事件
        for (var i = 0; i < controller.length; i++) {
          //给控制器加个索引,并把i值赋值给索引
          controller[i].index = i;
          //给所有的控制器都加划过事件
          controller[i].onmouseover = function() {
            for (var j = 0; j < controller.length; j++) {
              //将所有控制器改为默认样式
              controller[j].className = "nr";
            }
            //改变所选的控制器样式
            this.className = "nr active";
            //将模型改为默认样式
            for (var x = 0; x < mod.length; x++) {
              mod[x].className = "imga";
            }
            //改变所选控制器对应的模型的样式
            mod[this.index].className = "imga active";
          };
        }
        //}
        //绑定鼠标移入,暂停播放图片
        // benner.onmouseover = function() {
        //     clearInterval(auto);
        // }
        //绑定鼠标离开,继续播放
        // benner.onmouseleave = function() {
        //     autoPlay();
        // }
        //指定播放那个图片
        function play(num) {
          for (var j = 0; j < controller.length; j++) {
            controller[j].className = "nr";
          }
          controller[num].className = "nr active";
          for (var x = 0; x < mod.length; x++) {
            mod[x].className = "imga";
          }
          mod[num].className = "imga active";
        }
        //自动播放
        function autoPlay() {
          auto = setInterval(function() {
            if (num > imgNum) {
              num = 0;
            }
            play(num);
            num++;
          }, autoPlayTime);
        }
      }
    })
  }
};

function killErrors() {
  return true;
}
window.onerror = killErrors;
</script>

<style>
#benner {
  width: 550px;
  height: 242px;
  float: left;
  position: absolute;
  border-radius: 5px;
  display: flex;
}
#benner .imga {
  display: none;
  width: 550px;
  height: 242px;
  border-radius: 5px;
}
#benner .img .active {
  display: block;
}
#benner .title {
  width: 110px;
  height: 18px;
  background-color: rgba(226, 226, 226, 0.6);
  border-radius: 30px;
  margin-top: -25px;
  float: left;
  /* margin-left: 18%; */
  /* margin-right: 40%; */
  padding: 6px 0px 0px 10px;
  position: absolute;
  /* left: 100px; */
  bottom: 0;
  right: 10px;
}
#benner .title .nr {
  list-style: none;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 10px;
  float: left;
  margin-right: 10px;
  margin-bottom: 0px;
}
#benner .title .active {
  background: #db192a;
}
</style>

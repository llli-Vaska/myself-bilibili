<template>
  <div class="mascot">
    <div class="ear"></div>
    <div class="body"></div>
    <a href="#" class="ran-gif">
      <img
        src="../assets/images-index/tvsd.gif"
        alt=""
        style="opacity:1;"
      />
    </a>
  </div>
</template>

<script>
export default {
};
</script>

<style>
@media screen and (max-width: 1654px){

.mascot {
    display: none;
}
}
.mascot:hover .ear {
  background-image: url(https://s1.hdslb.com/bfs/static/jinkela/international-home/asserts/ear.gif);
}
.mascot .ran-gif img {
  width: 100%;
  transition: opacity 0.5s;
}
.mascot .ran-gif {
  position: absolute;
  width: 72px;
  height: 42px;
  left: 19px;
  top: 44px;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
}
.mascot .body {
  width: 110px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 174px;
  background-image: url(../assets/images-index/body2.png);
}
.mascot .ear {
  width: 110px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 26px;
  background-image: url(../assets/images-index/body1.png);
}
.mascot {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 100;
  width: 110px;
  transform: scale(0.91);
  height: 200px;
  cursor: pointer;
  transition: transform 0.6s;
  transform-origin: left bottom;
  z-index: 1;
}

</style>

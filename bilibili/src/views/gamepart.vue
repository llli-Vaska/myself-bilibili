<template>
  <div>
    <gameheader></gameheader>
    <div class="bglun"><lunbo></lunbo></div>
    <anniu></anniu>
    <gamedown></gamedown>
    <footgame></footgame>
  </div>
</template>
<script>
import gameheader from "../components/part/gameheader.vue";
import gamedown from "../components/part/gamedown.vue";
import lunbo from "../components/part/lunbo.vue";
import anniu from "../components/part/anniu.vue";
import footgame from "../components/part/footgame.vue";

export default {
  name: "gamepart",
  components: {
    gameheader,
    lunbo,
    anniu,
    gamedown,
    footgame
  }
};
</script>
<style>
.bglun {
  background: url(../assets/gameimg/bglist.png) no-repeat center 0px;
  width: 1519px;
  height: 500px;
}
</style>

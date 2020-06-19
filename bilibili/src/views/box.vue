<template>
  <div class="zh">
    <videohead></videohead>
    <videouppart></videouppart>
    <videoplaym></videoplaym>
    <newcon></newcon>
    <pvideol></pvideol>
    <Footer class="zzz"></Footer>
  </div>
</template>
<script>
import videohead from "../components/zj/videohead.vue";
import videouppart from "../components/zj/videouppart.vue";
import videoplaym from "../components/zj/videoplaym.vue";
import newcon from "../components/zj/newcon.vue";
import pvideol from "../components/zj/pvideol.vue";
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
export default {
  name: "box",
  components: {
    videohead,
    videouppart,
    videoplaym,
    newcon,
    pvideol,
    Footer
  }
};
</script>
<style scoped>
.zzz {
  margin-top: 30px;
}
.zh {
  position: relative;
  /* height: 1600px;
    width: 1519px; */
  margin: 0 auto;
}
</style>

<!-- 音乐PLUS界面 -->
<template>
  <div>
    <NavigationBar></NavigationBar>
    <Musicheader></Musicheader>
    <Musicmain></Musicmain>
    <Footer class="musicf"></Footer>
  </div>
</template>

<style>
.musicf {
  margin-top: 40px;
}
</style>

<script>
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
import Musicheader from "@/components/musicplus/Musicheader.vue"; /*音乐头部*/
import Musicmain from "@/components/musicplus/Musicmain.vue"; /*音乐内容*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/

export default {
  components: {
    NavigationBar,
    Musicheader,
    Musicmain,
    Footer
  }
};
</script>

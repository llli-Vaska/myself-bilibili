<template>
  <div>
    <NavigationBar></NavigationBar>
    <NavigationBarLower></NavigationBarLower>
    <FirstSection></FirstSection>
    <SecondSection></SecondSection>
    <Footer></Footer>
    <TVmascot></TVmascot>
    <a href="#" class="contact-help">联系客服</a>
  </div>
</template>

<script>
/*引入组件 */
import NavigationBar from "@/components/NavigationBar.vue"; /*导航栏（上）*/
import NavigationBarLower from "@/components/NavigationBarLower.vue"; /*导航栏（下）*/
import FirstSection from "@/components/FirstSection.vue"; /*第一块内容（含轮播）+推广*/
import SecondSection from "@/components/SecondSection.vue"; /*第二块内容（含广告）+所有内容*/
import Footer from "@/components/multiplex/Footer.vue"; /*页脚[复用]*/
import TVmascot from "@/components/TVmascot.vue"; /*小电视*/
export default {
  components: {
    NavigationBar, //组件
    NavigationBarLower,
    FirstSection,
    SecondSection,
    Footer,
    TVmascot
  }
};
</script>

<style>
@media screen and (max-width: 1654px) {
  .contact-help {
    display: none;
  }
}
.contact-help:hover {
  background: #f4f4f4;
  color: #505050;
}
.contact-help {
  position: fixed;
  z-index: 101;
  left: 0;
  top: calc(50% - 30px);
  margin-top: -36px;
  width: 28px;
  height: 72px;
  transition: all 0.3s;
  font-size: 12px;
  color: #505050;
  background: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: 0 6px 10px 0 #e7e7e7;
  border-radius: 0 2px 2px 0;
  padding: 8px 7px;
  line-height: 14px;
}
</style>

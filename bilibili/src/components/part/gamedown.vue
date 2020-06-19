<template>
  <div style="width:1000px;">
    <div class="headlist">
      <ul class="nav nav-tabs" style="width:1200px;" role="tablist">
        <li class="headlist1"><a href="#">游戏列表</a></li>
        <li role="presentation" class="active">
          <a
            href="#home"
            style="border: none; margin-left:750px;"
            aria-controls="home"
            role="tab"
            data-toggle="tab"
            >全部</a
          >
        </li>
        <li role="presentation">
          <a
            href="#profile"
            style="border: none;"
            aria-controls="profile"
            role="tab"
            data-toggle="tab"
            >手游</a
          >
        </li>
        <li role="presentation">
          <a
            href="#messages"
            style="border: none;"
            aria-controls="messages"
            role="tab"
            data-toggle="tab"
            >端游</a
          >
        </li>
      </ul>
      <div>
        <div role="tabpanel" class="tab-pane fade in active" id="home">
          <gamemain></gamemain>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="profile" ></div>
        <div role="tabpanel" class="tab-pane fade" id="messages"></div>
      </div>
    </div>
  </div>
</template>
<style>
#profile{
  position: relative;

}
.headlist {
  position: relative;
  margin-left: 200px;
  top: -200px;
}
.headlist1 {
  font-size: 20px;
  font-weight: bold;
  border-left: 10px solid #2cbdf0;
  border-bottom: 2px solid #2cbdf0;
  padding-left: 5px;
}
.headlist ul li a {
  color: #2cbdf0;

  text-decoration: none;
}
ul li {
  list-style: none;
  /* float: left; */
}
</style>
<script>
import gamemain from "@/components/part/gamemain.vue";

export default {
  name: "gamedown",
  components: {
    gamemain
  }
};
</script>

<template>
  <div class="recommend-box">
    <div class="video-card-reco" v-for="item in first_right" :key="item.id">
      <div class="info-box">
        <a :href="item.href">
          <img :src="item.img" />
          <span class="shadow"></span>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <p class="up">
              <img
                src="../assets/images-index/up.png"
                class="bilifont"
                style="width:15px;height:15px"
              />
              {{ item.up }}
            </p>
            <p class="play">{{ item.play }}万播放</p>
            <img
              src="../assets/images-index/do.png"
              style="width:28px;height:28px"
              class="vdio"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="btn prev lr" role="botton" @click="prev2()">
      <i class=" glyphicon glyphicon-chevron-left"></i>
    </div>
    <div class="btn next lr" role="botton" @click="prev1()">
      <i class="glyphicon glyphicon-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSectionRight",
  props: ["first_right"],
  data() {
    return {};
  },
  methods: {
    prev1() {
      this.$emit("plus1");
    },
    prev2() {
      this.$emit("plus2");
    }
  }
};
</script>

<style>
.recommend-box:hover .lr {
  opacity: 1;
}
.b-wrap .btn i {
  font-size: 15px;
  left: 0;
}
.btn.next {
  border-radius: 0 2px 2px 0;
  right: 0;
}
.btn.prev {
  border-radius: 0 2px 2px 0;
}
.b-wrap .btn {
  background-color: bisque;
  opacity: 0;
  position: absolute;
  z-index: 3;
  top: 50%;
  margin-top: -35px;
  width: 32px;
  height: 70px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
  line-height: 60px;
  transition: opacity 0.2s;
  cursor: pointer;
}
</style>

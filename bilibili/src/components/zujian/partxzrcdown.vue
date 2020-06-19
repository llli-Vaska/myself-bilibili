<template>
  <div>
    <div class="dy">
      <ul>
        <li>
          <a href="#"
            ><router-link to="/sendmesssage/partx">视频数据</router-link></a
          >
        </li>
        <li class="uu">
          <a href="#"><router-link to="/partx/ff">专栏数据</router-link></a>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.dy {
  width: 1200px;
  height: 400px;
  background-color: #fafafa;
  margin-left: 80px;
  margin-top: 30px;
  border-radius: 10px;
}
ul li {
  float: left;
  list-style: none;
  font-size: 18px;
  font-family: "黑体";
  margin-top: 20px;
}
ul li a {
  color: #757575;
  text-decoration: none;
}
.uu {
  margin-left: 60px;
}
</style>

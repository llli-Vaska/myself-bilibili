<template>
  <div class="nav-header-wrapper">
    <div class="nav-header">
      <router-link to="/VIP">
        <div class="nav-header-logo"></div>
      </router-link>
      <div class="icon nav-header-tv-icon"></div>
      <div class="nav-header-mainsite">
        <router-link to="/">主站</router-link>
      </div>
      <div class="nav-header-search-bar-wrapper">
        <input
          placeholder="活动、嘉宾、场馆"
          type="text"
          class="nav-header-search-bar unlogin"
        />
        <div class="icon search-icon">
          <a href="#" class="search-link"></a>
        </div>
      </div>
      <div class="order-and-icon-wrapper">
        <div class="icon order-icon"></div>
        <div class="order-center">
          <a href="#"> 订单中心</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-header-wrapper .order-and-icon-wrapper:hover .order-icon {
  background-image: url(../../assets/images-vip/index2.png);
}
.nav-header-wrapper .nav-header .order-center {
  cursor: pointer;
  margin-right: 10px;
}
.nav-header-wrapper .order-and-icon-wrapper a:hover {
  color: #f25d8e;
}
.nav-header-wrapper .order-and-icon-wrapper a {
  transition: all 0s;
}
/* .nav-header-wrapper .nav-header .order-center:hover {
    color: #f25d8e;
} */
.nav-header-wrapper .nav-header .order-icon {
  z-index: 100;
  margin-right: 4px;
  background-image: url(../../assets/images-vip/book.png);
}
.nav-header-wrapper .order-and-icon-wrapper {
  margin-left: 25px;
  z-index: 100;
  display: flex;
  align-items: center;
}
.nav-header-wrapper .nav-header .icon .search-link {
  display: block;
  height: 100%;
}
.nav-header-wrapper .nav-header .icon {
  width: 18px;
  height: 18px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.nav-header-wrapper .nav-header .search-icon {
  cursor: pointer;
  transform: translateY(-50%);
  background-image: url(../../assets/images-vip/indexserch.png);
  position: absolute;
  top: 50%;
  right: 170px;
}
.nav-header-wrapper .nav-header .nav-header-search-bar {
  outline: none;
  cursor: auto;
  font-size: 12px;
  color: #6d757a;
  line-height: 14px;
  width: 360px;
  height: 40px;
  border: none;
  padding-left: 20px;
  background: #f1f3f5;
  border-radius: 40px;
}
.nav-header-wrapper .nav-header .nav-header-search-bar.unlogin {
  margin-left: 289px;
}
.nav-header-wrapper .nav-header .nav-header-search-bar-wrapper {
  flex: 1 1;
  position: relative;
}
.nav-header-wrapper .nav-header .nav-header-mainsite {
  z-index: 100;
  font-size: 14px;
  color: #636c7b;
  line-height: 14px;
  width: 60px;
}
.nav-header-wrapper .nav-header .icon {
  width: 18px;
  height: 18px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.nav-header-wrapper .nav-header .nav-header-tv-icon {
  cursor: pointer;
  background-image: url(../../assets/images-vip/index.png);
  margin-right: 6px;
  margin-left: 40px;
}
.nav-header-wrapper .nav-header .nav-header-logo {
  cursor: pointer;
  width: 130px;
  height: 27px;
  background-image: url(../../assets/images-vip/logo.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.nav-header-wrapper {
  position: relative;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.nav-header-wrapper .nav-header {
  position: relative;
  width: 1160px;
  height: 100%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>

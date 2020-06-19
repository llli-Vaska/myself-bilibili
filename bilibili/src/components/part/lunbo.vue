<template>
  <div>
    <div
      id="carousel-example-generic"
      class="carouselzrc slide"
      data-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="@/assets/gameimg/1.png" alt="..." />
          <div class="carousel-caption"></div>
        </div>
        <div class="item">
          <img src="@/assets/gameimg/2.png" alt="..." />
          <div class="carousel-caption"></div>
        </div>
        <div class="item">
          <img src="@/assets/gameimg/3.png" alt="..." />
          <div class="carousel-caption"></div>
        </div>
      </div>

      <!-- Controls -->
      <a
        class="leftqwe carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span
          class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="rightqwe carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          class="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<style>
.leftqwe {
  position: absolute;
  height: 220px;
  top: 30px;
}
.rightqwe {
  position: absolute;
  height: 220px;
  top: 30px;
}
.carouselzrc {
  width: 1000px;
  height: 220px;
  position: relative;
  margin-left: 255px;
  padding-top: 30px;
}
</style>
<script></script>

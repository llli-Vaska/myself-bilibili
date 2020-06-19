<!-- bilibili-ranking-center1 -->
<template>
  <div class="rank-center">
    <div class="rank-tab-wrap">
      <ul class="rank-tab">
        <li class="blue">全站</li>
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
      </ul>
      <div class="rank-type-dropdown">
        <div class="bili-dropdown rank-dropdown">
          <span class="selected">全部投稿</span>
          <i class="icon icon-arrow-down"></i>
          <ul class="dropdown-list">
            <li class="dropdown-item" style="display:none;">全部投稿</li>
            <li class="dropdown-item">近期投稿</li>
          </ul>
        </div>
        <div class="bili-dropdown rank-dropdown">
          <span class="selected">三日排行</span>
          <i class="icon icon-arrow-down"></i>
          <ul class="dropdown-list">
            <li class="dropdown-item">日排行</li>
            <li class="dropdown-item" style="display:none;">三日排行</li>
            <li class="dropdown-item">周排行</li>
            <li class="dropdown-item">月排行</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rank-list-head">
      <div style="padding: 5px 0; background: #edf2f9; border-radius: 4px;">
        <i class="b-icon-tip"></i>
        <span class="tip-txt">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<style>
/* 控制ul部分 */
ul,
li {
  list-style: none;
}
.rank-tab-wrap {
  background: #edf2f9;
  padding: 0;
  border-radius: 4px;
  clear: both;
  height: 40px;
}
.rank-tab-wrap .rank-tab {
  margin-top: 15px;
  float: left;
}
.rank-tab-wrap .rank-tab .blue {
  color: #00a1d6;
}
.rank-tab-wrap .rank-tab li {
  float: left;
  padding: 0 10px;
  margin-top: -5px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

/* 控制下拉列表部分 */
.rank-type-dropdown {
  float: right;
}
.rank-tab-wrap .rank-dropdown {
  margin-top: 8px;
  margin-right: 10px;
}
.bili-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  cursor: default;
  padding: 0 7px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
}
.bili-dropdown .selected {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}

.bili-dropdown .icon-arrow-down {
  background-position: -475px -157px;
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 6px;
  margin-left: 5px;
  margin-top: -1px;
}
.bili-icon,
.icon {
  background-image: url(//static.hdslb.com/images/base/icons.png);
}

.bili-dropdown .dropdown-list {
  position: absolute;
  width: 100%;
  background: #fff;
  border: 1px solid #ccd0d7;
  border-top: 0;
  left: -1px;
  top: 22px;
  z-index: 10;
  display: none;
  border-radius: 0 0 4px 4px;
}
.bili-dropdown .dropdown-list .dropdown-item {
  cursor: pointer;
  margin: 0;
  padding: 3px 7px;
}

/* 控制每日更新 */
.rank-list-head {
  padding: 15px 0;
}
.rank-list-head .b-icon-tip {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  background: url(//static.hdslb.com/upload/img/icons.png) -52px -27px no-repeat;
}
.rank-list-head .tip-txt {
  font-size: 13px;
  vertical-align: middle;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        { text: "动画" },
        { text: "国创相关" },
        { text: "音乐" },
        { text: "舞蹈" },
        { text: "游戏" },
        { text: "科技" },
        { text: "数码" },
        { text: "生活" },
        { text: "时尚" },
        { text: "娱乐" },
        { text: "影视" }
      ],
      message:
        "统计所有投稿在 2020年04月25日 - 2020年04月30日 的数据综合得分，每日更新一次"
    };
  }
};
</script>

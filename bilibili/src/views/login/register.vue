<template>
  <div>
    <div class="top-banner">
      <img
        src="https://s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"
      />
    </div>
    <div class="title-line">
      <span class="tit" style="font-size: 38px;">注册</span>
    </div>
    <div class="register-container">
      <form class="report-wrap-module">
        <div class="form-group">
          <div data-v-89436cbc="" class="el-input">
            <!----><input
              type="text"
              autocomplete="off"
              name="uname"
              placeholder="昵称"
              class="el-input__inner"
            /><!----><!----><!----><!---->
          </div>
        </div>
        <div data-v-89436cbc="" class="register-hidden-gruop"></div>
        <div data-v-89436cbc="" class="form-group">
          <div data-v-89436cbc="" class="el-input">
            <!----><input
              type="password"
              autocomplete="off"
              name="userpwd"
              placeholder="密码（6-16个字符组成，区分大小写）"
              class="el-input__inner"
            /><!----><!----><!----><!---->
          </div>
        </div>
        <div data-v-89436cbc="" class="register-hidden-gruop"></div>
        <div data-v-89436cbc="" class="form-group">
          <div
            data-v-89436cbc=""
            class="input-with-select el-input el-input-group el-input-group--prepend"
          >
            <input
              type="text"
              autocomplete="off"
              name="tel"
              placeholder="填写常用手机号"
              class="el-input__inner"
            /><!----><!----><!----><!---->
          </div>
          <!---->
          <!---->
          <p data-v-89436cbc="" class="error-message"></p>
        </div>
        <div
          data-v-89436cbc=""
          class="form-group register-hidden-gruop text-right"
        >
          <!---->
          <!---->
        </div>
        <div data-v-89436cbc="" class="form-group yzm yzm_buttom_a back-fff">
          <div data-v-89436cbc="" class="code-input el-input">
            <!----><input
              type="text"
              autocomplete="off"
              placeholder="请输入短信验证码"
              name="code"
              class="el-input__inner"
            /><!----><!----><!----><!---->
          </div>
          <button
            data-v-89436cbc=""
            type="button"
            class="el-button yzm-buttom el-button--primary"
          >
            <!----><!----><span>点击获取</span>
          </button>
        </div>
        <div data-v-89436cbc="" class="form-group">
          <label data-v-89436cbc="" class="register-agree"
            ><label
              data-v-5641f300=""
              data-v-89436cbc=""
              class="check-box checkbox-bwxr"
              ><input data-v-5641f300="" name="agree" type="checkbox"
            /></label>
            我已同意<a
              data-v-89436cbc=""
              target="_blank"
              href="#"
              style="color: #00a1d6"
              >《哔哩哔哩弹幕网用户使用协议》</a
            >和<a
              data-v-89436cbc=""
              target="_blank"
              href="#"
              style="color: #00a1d6"
              >《哔哩哔哩隐私政策》</a
            ></label
          >
        </div>
        <div data-v-89436cbc="" class="form-group">
          <button
            data-v-89436cbc=""
            type="button"
            class="el-button btn-full el-button--primary is-disabled"
          >
            <!----><!----><span>注册</span>
          </button>
        </div>
        <div
          data-v-89436cbc=""
          id="register_pc_direct_login"
          class="register-hidden-gruop text-right"
        >
          <a data-v-89436cbc="" href="/login">已有账号，直接登录&gt;</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-weight: normal;
}
.register-hidden-gruop.text-right a {
  font-size: 12px;
  color: #00a1d6;
}
.btn-full {
  width: 100%;
  height: 40px;
}
.el-button--primary {
  color: #fff;
  background-color: #00a1d6;
  border-color: #00a1d6;
}
.form-group {
  width: 420px;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
}
.register-agree .check-box {
  vertical-align: middle;
  margin-bottom: 3px;
}
.register-agree {
  font-size: 12px;
  display: block;
  padding: 10px 0;
  cursor: pointer;
}
.form-group {
  width: 420px;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;

  text-align: center;

  box-sizing: border-box;
  outline: 0;
  margin: 0;

  transition: 0.1s;
  font-weight: 500;

  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.yzm-buttom {
  width: 130px;
  height: 36px;
  position: absolute;
  right: 2px;
  top: 2px;
  padding: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-button--primary {
  color: #fff;
  background-color: #00a1d6;
  border-color: #00a1d6;
}
.form-desc,
.form-group {
  width: 420px;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
}
.back-fff {
  background: #fff;
}
.register-hidden-gruop.text-right {
  line-height: 40px;
  text-align: right;
}
.el-input-group > .el-input__inner {
  vertical-align: middle;
  display: table-cell;
}
.el-input-group--prepend .el-input__inner,
.el-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-with-select .el-select > .el-input {
  width: 130px;
}
.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 40px;
}
.el-select .el-input .el-select__caret {
  color: #c0c4cc;
  font-size: 14px;

  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;

  transform: rotate(180deg);
  cursor: pointer;
}
.el-input__suffix-inner {
  pointer-events: all;
}
.el-input__prefix,
.el-input__suffix {
  position: absolute;
  top: 0;
  height: 100%;
  color: #c0c4cc;
  text-align: center;
}
.el-select > .el-input {
  display: block;
}
.input-with-select .el-select > .el-input {
  width: 130px;
}
.el-select {
  display: inline-block;
  position: relative;
}
.el-input-group__append .el-button,
.el-input-group__append .el-select,
.el-input-group__prepend .el-button,
.el-input-group__prepend .el-select {
  display: inline-block;
  margin: -10px -20px;
}
.el-input-group__append,
.el-input-group__prepend {
  background-color: #f5f7fa;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
}
.el-input-group--append .el-input__inner,
.el-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.el-input-group__prepend {
  border-right: 0;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.register-hidden-gruop {
  width: 420px;
  height: 40px;
  margin: 0 auto;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.form-desc,
.form-group {
  width: 420px;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
}
.register-container {
  width: 980px;
  margin: 0 auto;
  padding: 60px 0;
}
.title-line .tit {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: #fff;
  text-align: center;
}
.title-line {
  width: 980px;
  height: 28px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto 28px;
  text-align: center;
}
.top-banner {
  background: #00a0d8;
  height: 86px;
  text-align: center;
  margin-bottom: 20px;
}
</style>

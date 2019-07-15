<template>
  <div>
    <!---->
    <div class="web-login">
      <div class="logo">
        <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
      </div>
      <div class="login-form">
        <div>
          <form>
            <div class="form-group">
              <input
                v-model="msg"
                type="tel"
                minlength="11"
                maxlength="11"
                placeholder="手机号"
                class="input-control"
              />
              <div v-if="clear" display="block">
                <div class="clear-mobile-btn">
                  <i
                    class="iconfont icon-chongzhi-qingchu"
                    style="position: absolute; right: 90px; line-height: 40px; font-size: 23px; color: rgb(189, 192, 197);"
                  ></i>
                </div>
              </div>
              <div
                @click="handleMa"
                class="getSmsCode sms-code disable"
                style="position: absolute; right: 0px; top: 13px;"
              >获取验证码</div>
            </div>
            <div class="errorTip" style="display: none;"></div>
            <!---->
            <div class="errorTip" style="display: none;"></div>
            <div class="form-group">
              <input v-model="ma" placeholder="验证码" class="input-control" />
            </div>
            <!---->
            <!---->
            <div class="submit login-btn">
              <span>登录</span>
            </div>
          </form>
          <!---->
        </div>
      </div>
    </div>
    <!---->
    <div class="vc-alert" style="display: none;">
      <div class="vc-alert-layer"></div>
      <div class="vc-alert-wrap">
        <div class="vc-alert-title" style="display: none;"></div>
        <div class="vc-alert-content"></div>
        <div class="vc-alert-ok">好</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let aa = {
  a: "3000",
  ch: "1002",
  v: "5.0.4",
  e: "156181020310488310141481"
};
const http = {
  get() {
    return axios({
      url: "https://m.maizuo.com/gateway",
      method: "POST",
      params: {
        imgCode: "",
        imgKey: "",
        mobile: "18170835983",
        type: "1"
      },
      headers: {
        "X-Client-Info": JSON.stringify(aa),
        "X-Host": "mall.user.sms-code.send"
      }
    }).then(result => {
      return result.data;
    });
  }
};
export default {
  data() {
    return {
      clear: false,
      msg: "",
      ma: ""
    };
  },
  watch: {
    msg: function() {
      if (this.msg) {
        this.clear = true;
      } else {
        this.clear = false;
      }
    }
  },
  methods: {
    handleMa() {
      let result = http.get();
      console.log(result)
    }
  }
};
</script>

<style lang="stylus" scoped>
>>>html {
  background-color: #fff;
}

.web-login {
  font-size: 15px;
}

.web-login .logo {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.web-login .login-form {
  width: 100%;
  position: relative;
}

.web-login .logo img {
  height: 60px;
}

.web-login .login-form .form-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}

.web-login .login-form .input-control {
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
}

.web-login .login-form .getSmsCode {
  font-size: 13px;
  position: absolute;
  top: 25px;
  right: 0;
}

.web-login .login-form .form-group:after {
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  border-bottom: 1px solid #ededed;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.disable {
  color: #bdc0c5;
  font-size: 10px;
}

.sms-code {
  line-height: 30px;
  width: 90px;
  text-align: right;
  float: right;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
}

body, button, input, select, table, textarea {
  font: 12px / 1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

.web-login .login-form .errorTip {
  text-align: left;
  color: #ff5f16;
  width: 100%;
  line-height: 11px;
  margin-left: 25px;
  font-size: 11px;
  margin-top: 7px;
}

.web-login .login-form .form-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}

.web-login .login-form .submit {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
}

.web-login .login-form .login-btn {
  margin-top: 70px;
}

.web-login .login-form .submit span {
  opacity: 0.6;
}
</style>

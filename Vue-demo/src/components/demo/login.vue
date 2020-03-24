<template>
  <div class="box">
    <div class="show-login-btn" @click="showLogin">Show Login Button</div>

    <div class="login" ref="login">
      <div class="hide-login-btn" @click="hideLogin">×</div>
      <div class="login-box">
        <h1>Welcome</h1>
        <input class="txtb" type="text" v-model="username" placeholder="Username" />
        <input class="txtb" type="password" v-model="password" placeholder="Password" @keyup.enter="onSubmit"/>
        <input class="login-btn" type="submit" value="Login" @click="onSubmit" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {},
    showLogin() {
      this.$refs.login.style.left = "0";
    },
    hideLogin() {
      this.$refs.login.style.left = "-100%";
    }
  }
};
</script>
<style lang="less" scoped>
* {
  font-family: "montserrat", sans-serif;
}
.box {
  width: 100%;
  height: 100vh;
  background: linear-gradient(#333);
  transition: 0.4s;
  .login {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg, #9fbaa8, #31354c);
    transition: 0.6s;
    .hide-login-btn {
      color: #000;
      position: absolute;
      top: 50px;
      right: 100px;
      cursor: pointer;
      font-size: 40px;
      font-weight: bold;
      opacity: 0.7;
    }
    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      h1 {
        font-weight: 400;
        margin-top: 0;
      }
      .txtb {
        display: block;
        box-sizing: border-box;
        width: 240px;
        background: #ffffff28;
        border: 1px solid #fff;
        padding: 10px 20px;
        color: #fff;
        outline: none;
        margin: 10px 0;
        border-radius: 6px;
        text-align: center;
      }
      .login-btn {
        width: 240px;
        background: #2c3e50;
        border: 0;
        color: #fff;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
  .show-login-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border: 2px solid;
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>
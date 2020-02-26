<template>
  <div id="login">
    <div id="container-box">
      <div class="login-pic" id="left-pic">
        <img src="@pic/loginLeft.png" alt="" />
      </div>
      <div id="main-content"></div>
      <div class="login-pic" id="right-pic">
        <img src="@pic/loginRight.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "@vue/composition-api";

export default {
  name: "Login",
  setup() {
    const helloWorld = ref(1);
    return {
      helloWorld
    };
  }
};
</script>
<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  #container-box {
    width: 400px;
    height: 500px;
    position: relative;
    z-index: $zl-1;
    &:after {
      content: "";
      position: absolute;
      bottom: -7px;
      display: block;
      width: 942px;
      height: 5px;
      background-color: $bd;
      left: -271px;
    }
    #main-content {
      width: 100%;
      height: 100%;
      background-color: $bg-main;
      border: $bw-main solid $bd;
      border-radius: $br-main;
    }
    .login-pic {
      position: absolute;
      z-index: $zl-2;
    }
    #left-pic {
      left: -68px;
      bottom: -8px;
      width: 89px;
      height: 236px;
      &:before {
        content: "Hi , Friends!";
        position: absolute;
        z-index: $zl-2;
        left: -100px;
        top: -80px;
        display: block;
        width: 140px;
        height: 60px;
        background-color: $bg-main;
        border: $bw-main solid $bd;
        border-radius: $br-main;
        letter-spacing: 1.8px;
        color: $font-black;
        text-align: center;
        line-height: 60px;
      }
      &:after {
        content: "";
        position: absolute;
        z-index: $zl-2;
        left: 0;
        top: -24px;
        display: block;
        width: 12px;
        height: 12px;
        background-color: $bg-main;
        border-right: $bw-main solid $bd;
        border-bottom: $bw-main solid $bd;
        transform: rotate(45deg);
      }
    }
    #right-pic {
      right: -95px;
      top: 34px;
      width: 91px;
      height: 217px;
    }
  }
}
</style>

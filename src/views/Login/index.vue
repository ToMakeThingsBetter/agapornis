<template>
  <div id="login">
    <div
      id="login-background"
      :style="{ background: 'url(' + require('@pic/bc.svg') + ') repeat' }"
    ></div>
    <div id="container-box">
      <div class="login-pic" id="left-pic">
        <img src="@pic/loginLeft.png" alt="" />
      </div>
      <div id="main-content">
        <div id="logo">
          <img src="@pic/loginLogo.png" alt="" />
          <span id="logo-title">gapornis</span>
        </div>
        <div id="login-word">
          <strong>Welcome back to Agapornis.</strong>
          <p>
            New here ?
            <span @click="OpenSignupDialog"> Create an account</span>
          </p>
        </div>
        <div id="login-form">
          <form>
            <div id="login-form-item">
              <div id="login-phone">
                <label for="phone">Mobile Phone</label>
              </div>
              <input type="text" name="phone" id="phone" autocomplete="off" />
            </div>
            <div id="login-form-item">
              <div id="login-password">
                <label for="password">Password</label>
                <span>Froget your password ?</span>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="off"
              />
            </div>
            <div id="login-form-item">
              <div id="extra-box">
                <el-checkbox
                  v-model="ifAutomatic"
                  id="ifAutomatic"
                ></el-checkbox>
                <span id="ifAutomatic-word">Remember this device</span>
              </div>
            </div>
            <div id="signIn-button">
              <span>Sign in</span>
            </div>
            <div id="question-link">
              <p>
                If you have any quertions ? <span>Terms and conditions</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div class="login-pic" id="right-pic">
        <img src="@pic/loginRight.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { ref, computed } from "@vue/composition-api";

export default {
  name: "Login",
  // props必须在root之前，否则root不起作用
  setup(props, { root }) {
    const ifAutomatic = ref(false);
    // 监听store的值 =》 注意模块化后的写法
    const signup_button = computed(() => root.$store.state.login.SIGNUP_BUTTON);
    // 更改store的值 =》 mutations中的方法
    const OpenSignupDialog = () => {
      root.$store.commit("SET_SIGNUP_BUTTON");
    };
    return {
      ifAutomatic,
      signup_button,
      OpenSignupDialog
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
  position: relative;
  overflow: hidden;
  #login-background {
    position: absolute;
    width: calc(100% + 500px);
    height: 100%;
    top: 0;
    left: 0;
    animation: scrollBackground 12s linear infinite;
  }
  #container-box {
    width: 404px;
    height: 530px;
    position: relative;
    z-index: $zl-1;
    &:after {
      content: "";
      position: absolute;
      bottom: -4px;
      display: block;
      width: 560px;
      height: 4px;
      background-color: $bd;
      left: -80px;
      opacity: 0.8;
    }
    #main-content {
      width: 100%;
      height: 100%;
      background-color: $bg-main;
      border: $bw-main solid $bd;
      border-radius: $br-main;
      padding: 34px 46px;
      box-sizing: border-box;
      #logo {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        height: 32px;
        #logo-title {
          text-indent: 5px;
          font-size: 22px;
          letter-spacing: 0.55px;
          text-transform: uppercase;
          color: $font-red;
        }
      }
      #login-word {
        padding: 18px 0;
        letter-spacing: 1px;
        strong {
          display: block;
          font-size: 20px;
          color: $font-black;
          padding: 4px 0 3px;
        }
        p {
          font-size: 12px;
          color: $font-grey;
          padding: 4px 0;
          span {
            color: $font-yellow;
            font-size: 11px;
            border-bottom: 1px dotted $font-yellow;
            cursor: pointer;
          }
        }
      }
      #login-form {
        form {
          #login-form-item {
            margin: 15px 0;
            font-size: 11px;
            letter-spacing: 0.825px;
            color: $font-grey;
            div {
              padding: 5px 0;
            }
            #extra-box {
              padding: 10px 0;
              display: flex;
              flex-direction: row;
            }
            #login-password {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              span {
                color: $font-yellow;
                font-size: 11px;
                cursor: pointer;
              }
            }
            input {
              width: 100%;
              height: 34px;
              border: $bw-main solid $font-grey;
              border-radius: $br-5;
              text-indent: 10px;
              outline: none;
              background-color: $bg-main !important;
              letter-spacing: 0.825px;
              color: $font-grey;
              box-sizing: border-box;
              &#ifAutomatic {
                width: 15px;
                height: 15px;
              }
            }
            #ifAutomatic-word {
              color: $font-black;
              letter-spacing: 1.2px;
              padding-left: 8px;
            }
          }
        }
      }
      #signIn-button {
        margin: 15px 0;
        span {
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 36px;
          line-height: 35px;
          background-color: $font-red;
          border: $bw-main solid #e6a5a4;
          border-radius: $br-5;
          color: $bg-main;
          text-align: center;
          font-size: 12px;
          letter-spacing: 1.2px;
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.1s linear;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      #question-link {
        padding: 5px 0;
        p {
          font-size: 12px;
          color: $font-grey;
          padding: 4px 0;
          letter-spacing: 0.6px;
          span {
            color: $font-yellow;
            font-size: 11px;
            letter-spacing: 0.55px;
            border-bottom: 1px dotted $font-yellow;
            cursor: pointer;
          }
        }
      }
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
      right: -91px;
      top: 34px;
      width: 91px;
      height: 217px;
    }
  }
}
@keyframes scrollBackground {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500px);
  }
}
</style>

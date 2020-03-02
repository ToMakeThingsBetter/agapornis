<template>
  <!-- 如果 visible 属性绑定的变量位于 Vuex 的 store 内，那么 .sync 不会正常工作。
       此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，
       在事件回调中执行 Vuex 中对应的 mutation 更新 visible 属性绑定的变量的值。 -->
  <div id="signup">
    <el-dialog :visible="signup_button" :show-close="false">
      <div id="container">
        <div id="left-part">
          <div id="content-part">
            <div id="logo">
              <img src="@pic/signLogo.png" alt="" />
              <span>gapornis</span>
            </div>
            <div id="content">
              <p>
                We just lack the love<br />platform of sincere<br />friendship.
              </p>
              <span>Start your journey in a minute.</span>
              <span>Pursue your love.</span>
            </div>
            <div
              id="bottom-bgi"
              class="signBottom-first"
              :style="{
                background: 'url(' + require('@pic/signBottom-first.png') + ')'
              }"
            ></div>
          </div>
          <div id="step-part">
            <div id="logo">
              <img src="@pic/signLogo.png" alt="" />
              <span>gapornis</span>
            </div>
            <div id="content">
              <ul id="step">
                <li v-for="item in signList" :key="item.num">
                  <span>{{ item.num }}</span>
                  <p>{{ item.content }}</p>
                </li>
              </ul>
            </div>
            <div
              id="bottom-bgi"
              class="signBottom-other"
              :style="{
                background: 'url(' + require('@pic/signBottom-other.png') + ')'
              }"
            ></div>
          </div>
        </div>
        <div id="right-part">
          <div id="first-form">
            <div class="header">
              <p>Having troubles ?</p>
              <span>Get Help</span>
            </div>
            <div class="content-form">
              <p class="content-title">Please choose your gender</p>
              <p class="content-word">
                For better service, we need to decide part of the plan according
                <br />to your gender.
              </p>
              <div class="choice-button-sex">
                <div
                  class="male-button"
                  @click="MaleButtonStatus(0)"
                  :class="[signData.sex === 0 ? 'active' : '']"
                >
                  <i class="el-icon-male"></i>
                  <span>I am an adult male</span>
                </div>
                <div
                  class="female-button"
                  @click="MaleButtonStatus(1)"
                  :class="[signData.sex === 1 ? 'active' : '']"
                >
                  <i class="el-icon-female"></i>
                  <span>I am an adult female</span>
                </div>
              </div>
            </div>
            <div class="bottom-button">
              <span class="exit-button" @click="CloseSignupDialog"
                >Exit to sign in</span
              >
              <el-popover
                placement="top-start"
                width="248"
                trigger="manual"
                popper-class="popover"
                :value="showPopover"
              >
                <span
                  class="next-button"
                  slot="reference"
                  @click="ToNextPart(1)"
                  >Next</span
                >
                <span class="content"
                  >Members need to
                  <span class="red-font"> pay corresponding</span>
                  fees during the registration process.
                  <span class="yellow-font">Are you sure to continue?</span>
                </span>
              </el-popover>
            </div>
          </div>
          <div id="second-form">
            <div class="header">
              <p>Having troubles ?</p>
              <span>Get Help</span>
            </div>
            <div class="content-form">
              <p class="content-title">Please select your birth addres</p>
              <p class="content-word">
                For better service, we need to decide part of the plan according
                <br />to your birth address.
              </p>
              <div class="choice-button-sex">
                <div
                  class="male-button"
                  @click="MaleButtonStatus(0)"
                  :class="[signData.sex === 0 ? 'active' : '']"
                >
                  <i class="el-icon-male"></i>
                  <span>I am an adult male</span>
                </div>
                <div
                  class="female-button"
                  @click="MaleButtonStatus(1)"
                  :class="[signData.sex === 1 ? 'active' : '']"
                >
                  <i class="el-icon-female"></i>
                  <span>I am an adult female</span>
                </div>
              </div>
            </div>
            <div class="bottom-button">
              <span class="exit-button" @click="ToLastPart(2)"
                >Back to last step</span
              >
              <span class="next-button" @click="ToNextPart(2)">Next</span>
            </div>
          </div>
          <div id="third-form"></div>
          <div id="fourth-form"></div>
          <div id="fifth-form"></div>
          <div id="sixth-form"></div>
          <div id="seventh-form"></div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "Signup",
  setup(props, { root }) {
    /* 常量定义 */
    const MoveHeight = ref(-596);
    const signList = reactive([
      {
        name: "firstPage",
        num: 1,
        content: "Birth address"
      },
      {
        name: "secondPage",
        num: 2,
        content: "Private information"
      },
      {
        name: "thirdPage",
        num: 3,
        content: "personalized"
      },
      {
        name: "fourthPage",
        num: 4,
        content: "photoS"
      },
      {
        name: "fifthPage",
        num: 5,
        content: "OTHER Social accounts"
      },
      {
        name: "sixthPage",
        num: 6,
        content: "account"
      }
    ]);
    const signData = reactive({
      /* 0:male 1:female 2:unknow */
      sex: 2,
      birthPlace: "",
      birthday: "",
      ageRange: "",
      nickname: "",
      realFirstname: "",
      hobby: "",
      pics: "",
      otherAccountType: "",
      otherAccount: "",
      phone: "",
      password: "",
      code: ""
    });
    /* 监听store的值 =》 注意模块化后的写法 */
    const signup_button = computed(() => root.$store.state.login.SIGNUP_BUTTON);
    const showPopover = computed(() => root.$store.state.login.SHOW_POPOVER);
    /* 方法定义 =》 更改store的值 =》 mutations中的方法 */
    const CloseSignupDialog = () => {
      root.$store.commit("SET_SIGNUP_BUTTON");
      root.$store.commit("SET_SHOW_POPOVER", false);
    };
    /* sex 选择按钮 */
    const MaleButtonStatus = index => {
      signData.sex = index;
    };
    /* 下一步按钮控制 */
    const ToNextPart = index => {
      if (index === 1) {
        let leftContentPart = document.getElementById("content-part");
        let leftStepPart = document.getElementById("step-part");
        leftContentPart.style.opacity = "0";
        leftStepPart.style.opacity = "1";
        leftContentPart.className = "activeNext";
        root.$store.commit("SET_SHOW_POPOVER", false);
      }
      let firstPart = document.getElementById("first-form");
      /* 控制step样式状态 */
      let stepPart = document.getElementById("step").childNodes;
      if (index > 1) {
        stepPart[index - 2].className = "";
      }
      stepPart[index - 1].className = "active";
      let move = MoveHeight.value * index;
      firstPart.style.transition = "all 0.3s ease";
      firstPart.style.marginTop = move + "px";
    };
    /* 返回按钮控制 */
    const ToLastPart = index => {
      if (index === 2) {
        let leftContentPart = document.getElementById("content-part");
        let leftStepPart = document.getElementById("step-part");
        leftContentPart.style.opacity = "1";
        leftStepPart.style.opacity = "0";
        leftContentPart.className = "activeBack";
        setTimeout(() => {
          root.$store.commit("SET_SHOW_POPOVER", true);
        }, 1000);
      }
      let firstPart = document.getElementById("first-form");
      /* 控制step样式状态 */
      let stepPart = document.getElementById("step").childNodes;
      if (index > 1) {
        stepPart[index - 2].className = "active";
      }
      stepPart[index - 1].className = "";
      let move = MoveHeight.value * (index - 2);
      firstPart.style.transition = "all 0.3s ease";
      firstPart.style.marginTop = move + "px";
    };
    return {
      MoveHeight,
      signList,
      signData,
      signup_button,
      showPopover,
      CloseSignupDialog,
      MaleButtonStatus,
      ToNextPart,
      ToLastPart
    };
  }
};
</script>

<style lang="scss" scoped>
#signup {
  #container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    > div {
      height: 100%;
      overflow: hidden;
    }
    #left-part {
      width: 380px;
      background-color: $font-red;
      > div {
        width: 100%;
        height: 100%;
        padding: 50px 60px;
        box-sizing: border-box;
        position: relative;
        z-index: $zl-2;
        #bottom-bgi {
          position: absolute;
          z-index: $zl-3;
          width: 202px;
          bottom: 0;
          &.signBottom-first {
            height: 152px;
            right: 0;
          }
          &.signBottom-other {
            height: 119px;
            left: 92px;
          }
        }
        #logo {
          display: flex;
          flex-direction: row;
          span {
            font-size: 16px;
            letter-spacing: 0.8px;
            color: $font-white;
            text-transform: uppercase;
            padding: 2px 0 0 4px;
          }
        }
      }
      #content-part {
        #content {
          margin-top: 65px;
          p {
            font-size: 24px;
            color: $font-white;
            letter-spacing: 1.8px;
            line-height: 1.74;
            padding-bottom: 24px;
          }
          span {
            display: block;
            font-size: 16px;
            color: #fff2f2;
            letter-spacing: 1.2px;
            padding: 8px 0;
          }
        }
        &.activeNext {
          animation: activeNext 1s ease;
          animation-fill-mode: forwards;
        }
        &.activeBack {
          animation: activeBack 1s ease;
          animation-fill-mode: forwards;
        }
      }
      #step-part {
        #content {
          margin-top: 65px;
          ul {
            li {
              display: flex;
              flex-direction: row;
              margin: 25px 0;
              position: relative;
              &.active:after {
                content: "◀";
                color: $font-white;
                font-size: 12px;
                line-height: 22px;
                position: absolute;
                right: 0;
                top: 0;
              }
              span {
                display: block;
                width: 16px;
                height: 16px;
                border: $bw-main solid $font-white;
                border-radius: 10px;
                text-align: center;
                line-height: 16px;
                color: $font-white;
                font-size: 10px;
              }
              p {
                font-size: 15px;
                text-transform: uppercase;
                letter-spacing: 1.125px;
                color: $font-white;
                line-height: 22px;
                padding-left: 18px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    #right-part {
      width: 720px;
      box-sizing: border-box;
      overflow: hidden;
      > div {
        height: 496px;
        padding: 50px 50px 50px 90px;
        .header {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          p {
            font-size: 14px;
            letter-spacing: 1.05px;
            color: $font-red;
          }
          span {
            color: $font-yellow;
            font-size: 13px;
            text-decoration: underline;
            padding-left: 10px;
            cursor: pointer;
            letter-spacing: 0.975px;
          }
        }
        .content-form {
          padding-top: 58px;
          .content-title {
            font-size: 20px;
            letter-spacing: 1.5px;
            color: $font-black;
            padding: 20px 0;
          }
          .content-word {
            font-size: 14px;
            letter-spacing: 1.05px;
            color: $font-grey;
            line-height: 24px;
          }
          .choice-button-sex {
            padding: 20px 0;
            > div {
              width: 220px;
              height: 46px;
              border: $bw-main solid $bd;
              line-height: 50px;
              padding: 0 40px;
              border-radius: 7px;
              margin: 20px 0;
              cursor: pointer;
              i {
                font-size: 16px;
                font-weight: bold;
                color: $font-red;
              }
              span {
                padding-left: 20px;
                font-size: 14px;
                color: $font-grey;
                letter-spacing: 1.05px;
              }
              &.active {
                border-color: $font-red;
              }
            }
          }
        }
        .bottom-button {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 47px;
          span {
            cursor: pointer;
            font-size: 14px;
            letter-spacing: 1.05px;
            line-height: 44px;
            &.exit-button {
              color: $font-grey;
            }
            &.next-button,
            .next-button {
              display: block;
              width: 180px;
              height: 40px;
              border: $bw-main solid $bd;
              border-radius: 7px;
              background-color: $font-red;
              color: $font-white;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
@keyframes activeNext {
  0% {
    margin-top: 0;
  }
  70% {
    margin-top: -696px;
  }
  90% {
    margin-top: -559px;
  }
  100% {
    margin-top: -596px;
  }
}
@keyframes activeBack {
  0% {
    margin-top: -596px;
  }
  70% {
    margin-top: 80px;
  }
  90% {
    margin-top: -30px;
  }
  100% {
    margin-top: 0;
  }
}
</style>

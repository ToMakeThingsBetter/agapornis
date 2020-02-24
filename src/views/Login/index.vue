<template>
  <div id="login">
    <div id="container-box"></div>
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
    width: 100vw;
    height: 100vh;
    transition: all 0.3s;
  }
}
@media only screen and (min-width: 87.5rem) {
  #container-box {
    width: 85.375rem !important;
    height: 40.625rem !important;
    border: 0.4rem solid #333;
    border-radius: 2rem;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 0.8rem;
      height: 9rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background-color: #333;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

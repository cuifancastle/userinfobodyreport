<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="aaa">
      <div class="bbb"></div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
  .aaa {
    width: 200px;
    height: 200px;
    background: red;
    .bbb {
      width: 100px;
      height: 100px;
      background: black;
    }
  }
</style>

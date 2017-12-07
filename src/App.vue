<template>
  <div id="app">
    <!-- <router-view/> -->
    <home></home>
  </div>
</template>

<script>

import Home from './components/pages/Home'

export default {
  name: "app",
  components: {
    Home,
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>

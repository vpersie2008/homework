<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <home></home> -->
    <index-home></index-home>

  </div>
</template>

<script>

import Home from './components/pages/Home'
import IndexHome from './views/IndexHome'

export default {
  name: "app",
  components: {
    IndexHome
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>

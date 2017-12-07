<template>
  <div id="indexhome" style="height:100%">
    <view-box ref="viewBox">
      <x-header>
        <span>首页</span>
        <x-icon class="x-icon" slot="overwrite-left" type="navicon" size="35" ></x-icon>
      </x-header>

      <div>
        <span><h1>Content</h1> </span>
        <p v-for="i in 100">{{i}}</p>
      </div>

      <tabbar class="tabbar">
        <tabbar-item @on-item-click="selectedHome">
          <img slot="icon" src="../assets/icon/home_on.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item badge="2" @on-item-click="selectedShoppingCart">
          <img slot="icon" src="../assets/icon/cart_off.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item @on-item-click="selectedMyAccount">
          <img slot="icon" src="../assets/icon/me_off.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
      </view-box>
  </div>
</template>
<script>

import { XHeader, Tabbar, TabbarItem, ViewBox } from "vux";

export default {
  name: "indexhome",
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data() {
    return {
      homeName: "This is my frist page."
    };
  },
  methods: {
    selectedHome() {
      console.log(this.$route);
      console.log(this.$router);

      this.$router.push("/");
    },
    selectedShoppingCart() {
      this.$router.push("/");
    },
    selectedMyAccount() {
      this.$router.push({
        name: "login",
        params: { userName: "test1", password: "test2" }
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.x-icon {
  fill: #fff;
  position: relative;
  top: -8px;
  left: -3px;
}
</style>


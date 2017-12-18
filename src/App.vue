<template>
  <div id="app" style="height:100%;">
      <view-box ref="viewBox" body-padding-top="1px" body-padding-bottom="55px">
        <x-header slot="header" class="x-header"
          :title="headerTitle"
          :left-options="headerLeftOptions"
          :right-options="headerRightOptions">

        
          <x-icon v-if="$route.path === '/'" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          
          <!-- <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          <a slot="right" v-show="true">登录</a>
          <a slot="right" v-show="true">注册</a> -->
        </x-header>

        <router-view></router-view>
        <tabbar class="tabbar" slot="bottom" style="position:fixed">
          <tabbar-item @on-item-click="selectedHome">
            <img slot="icon" src="./assets/icon/home_on.png">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item badge="2" @on-item-click="selectedShoppingCart">
            <img slot="icon" src="./assets/icon/cart_off.png">
            <span slot="label">购物车</span>
          </tabbar-item>
          <tabbar-item @on-item-click="selectedMyAccount">
            <img slot="icon" src="./assets/icon/me_off.png">
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
      </view-box>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem,Tab, TabItem, ViewBox } from "vux";

export default {
  name: "app",
  components: {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem
  },
  computed: {
    headerTitle() {
      if (this.$route.path === "/") {
        return "首页";
      }
      if (this.$route.path === "/login") {
        return "登录";
      }
    },
    headerLeftOptions() {
      return {
        showBack: this.$route.path !== "/"
      };
    },
    headerRightOptions() {
      return {
        showMore: true
      };
    }
  },
  data() {
    return {
      headerTitle1: "我的账户"
    };
  },
  methods: {
    selectedHome() {
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
  },
  created: () => {}
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  background-color: #fbf9fe;
}

.x-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.x-header.x-home-header {
  fill: #fff;
  position: relative;
  top: -8px;
  left: -3px;
}
</style>

<template>
  <div id="home">
    <x-header>首页</x-header>
    <div>
      content
    </div>

    <tabbar>
      <tabbar-item @on-item-click="selectedHome">
        <img slot="icon" src="../../assets/icon/home_on.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/icon/cart_off.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/icon/me_off.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>  
  </div>
</template>
<script>
import { XHeader, Tabbar,TabbarItem } from "vux";

export default {
  name: "home",
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      homeName: "This is my frist page."
    };
  },
  methods:{
    selectedHome(){
      alert('Home')
    },

  }

};
</script>

<style scoped>

</style>


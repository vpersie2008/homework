<template>
  <div id="home">
      <x-header>首页</x-header> 
  </div>
</template>
<script>
import {XHeader} from 'vux'

export default {
  name: "home",
  components:{
    XHeader
  },
  data() {
    return {
        homeName:"This is my frist page."
    };
  }
};
</script>

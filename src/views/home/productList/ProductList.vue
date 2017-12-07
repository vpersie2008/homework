<template>
  <div>
      <li v-for="i in 100">{{i}}</li>
  </div>
</template>

<script>
    import {XHeader} from 'vux'

    export default {
        name:'ProductList',
        components:{
            XHeader
        },
        data(){
            return {
                name:'',
            }
        }

    }
</script>

<style>
.x-header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 1;
  z-index: 100;
}
</style>

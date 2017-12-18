<template>
  <div>
    <x-input title="用户名" placeholder="请输入手机号" type="text" v-model="loginName" :max="11" is-type="china-mobile" ref="inputLoginName" required @on-change="onLoginNameChanged">
        <x-button slot="right" type="primary" mini plain @click.native="sendVerificationCode">发送验证码</x-button>
    </x-input>
  </div>
</template>

<script>
    export default {
        name:'home',
        props:{
            placeholder:String,
            title:String,

        },
        data(){
            return {
                text:'this is my page'
            }
        },
        methods:{
            
            sendVerificationCode(){
                setTimeout(() => {
                    console.log("倒计时...秒")
                }, 10000);
            },
            onLoginNameChanged(){
                
            }
        }
    }
</script>
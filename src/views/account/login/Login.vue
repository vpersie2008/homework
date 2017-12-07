<template>
    <div class="login">
        <group style="padding-top:15px">
            <x-input title="账号" placeholder="用户名/手机号" type="text" v-model="loginName" :max="11" is-type="china-mobile" ref="inputLoginName" required @on-change="onLoginNameChanged"></x-input>
            <x-input title="密码" placeholder="请输入密码" type="password" v-model="password" :max="20" ref="inputPassword" required @on-change="onLoginPasswordChanged"></x-input>
        </group>
        <div style="padding:15px;">  
            <x-button :text="submitText" :disabled="isDisabeSubmit" @click.native="submit" type="primary"></x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton } from "vux";

export default {
  name: "login",
  components: {
    XInput,
    XButton,
    Group
  },
  data() {
    return {
      password: "",
      loginName: "",
      submitText: "登录",
      isDisabeSubmit: true,
      isValidLoginName: false,
      isValidPassword: false,
      isDoLogin: false
    };
  },
  methods: {
    submit() {
      if (this.isValidLoginName && this.isValidPassword) {
        this.isDisabeSubmit = true;
        this.isDoLogin = true;
        this.showLoading();
        setTimeout(() => {
          this.isDoLogin = false;
          this.isDisabeSubmit = false;
          this.$vux.toast.text("登录失败，请稍后");
        }, 2000);
      }
    },
    onLoginNameChanged() {
      this.isValidLoginName = this.$refs.inputLoginName.valid;
      this.isDisabeSubmit = !this.isValidLoginName || !this.isValidPassword || this.isDoLogin;
    },
    onLoginPasswordChanged() {
      this.isValidPassword = this.$refs.inputPassword.valid;
      this.isDisabeSubmit = !this.isValidLoginName || !this.isValidPassword || this.isDoLogin;
    },
    showLoading() {
      this.$vux.loading.show({
        text: "正在登录..."
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 2000);
    }
  },
  computed: {},
  created: () => {}
};
</script>
<style>

</style>

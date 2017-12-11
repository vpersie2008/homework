<template>
    <div class="register">
        <group style="padding-top:15px">
            <verification-code placeholder="请输入手机号码" title="用户名" ref="sendVerificationCode"></verification-code>

            <x-input title="验证码" placeholder="请输入验证码" v-model="verificationCode" type="number"  :max="6" ref="inputVerificationCode" required @on-change="onVerificationCodeChanged">
            </x-input>

            <x-input title="密码" placeholder="请设置6-20位登录密码" type="password" v-model="password" :max="20" ref="inputPassword" required @on-change="onLoginPasswordChanged">
            </x-input>
          
        </group>
        <div style="padding:15px;">  
            <x-button :text="submitText" :disabled="isDisabeSubmit" @click.native="submit" type="primary"></x-button>
        </div>

    </div>
</template>

<script>
import { XInput, Group, XButton } from "vux";
import VerificationCode from "../../../components/VerificationCode";

export default {
  name: "register",
  components: {
    XInput,
    XButton,
    Group,
    VerificationCode
  },
  data() {
    return {
      password: "",
      loginName: "",
      verificationCode: "",
      submitText: "注册",
      isDisabeSubmit: true,
      isValidLoginName: false,
      isValidPassword: false,
      isValidVerificationCode: false,
      isDoSubmit: false
    };
  },
  methods: {
    submit() {
      if (this.isValidLoginName && this.isValidPassword) {
        this.isDisabeSubmit = true;
        this.isDoSubmit = true;
        this.showLoading();
        setTimeout(() => {
          this.isDoSubmit = false;
          this.isDisabeSubmit = false;
          this.$vux.toast.text("注册失败，请稍后");
        }, 2000);
      }
    },
    onLoginPasswordChanged() {
        this.disableSubmit();
    },
    onVerificationCodeChanged() {
        this.disableSubmit();
    },
    showLoading() {
      this.$vux.loading.show({
        text: "请稍等..."
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 2000);
    },
    disableSubmit() {
      this.isValidLoginName = this.$refs.sendVerificationCode.isValidMobile;
      this.isValidPassword = this.$refs.inputPassword.valid;
      this.isValidVerificationCode = this.$refs.inputVerificationCode.valid && this.verificationCode.length == 6
      this.isDisabeSubmit =
        !this.isValidLoginName ||
        !this.isValidPassword ||
        !this.isValidVerificationCode ||
        this.isDoSubmit;
    }
  },
  computed: {},
  created: () => {}
};
</script>
<template>
  <div id="verificationcode">
    <x-input :title="title"
        :placeholder="placeholder"
        :max="11"
        type="text"
        is-type="china-mobile" 
        v-model="mobile"
        ref="inputMobile" 
        required 
        @on-change="onMobileChanged">

        <x-button slot="right" type="primary" @click.native="sendVerificationCode" :disabled="isDisableSend" mini plain>{{buttonTitle}}</x-button>
    </x-input>

  </div>

</template>

<script>
import { XButton, XInput } from "vux";
export default {
  name: "verification-code",
  components: {
    XInput,
    XButton
  },
  props: {
    placeholder: String,
    title: String,
    countDown: Number
  },
  data() {
    return {
      mobile: "",
      buttonTitle: "发送验证码",
      isDisableSend: true,
      isValidMobile: false,
      defaultCountDown: 60
    };
  },
  methods: {
    sendVerificationCode() {
      if (!this.isValidMobile) {
        return;
      }

      this.isDisableSend = true;
      let second = this.defaultCountDown;
      if (this.countDown) {
        second = this.countDown;
      }

      this.buttonTitle = ` ${--second} 秒后重发`;
      
      let interval = setInterval(() => {
        this.buttonTitle = ` ${--second} 秒后重发`;
        if (second === 0) {
          clearInterval(interval);
          this.isDisableSend = false;
          this.buttonTitle = "发送验证码";
        }
      }, 1000);
    },
    onMobileChanged() {
      this.isValidMobile = this.$refs.inputMobile.valid;
      this.isDisableSend = !this.isValidMobile;
    }
  }
};
</script>

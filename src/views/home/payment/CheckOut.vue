<template>
  <div>

    <div class="checkout-content">
      <form-preview header-label="合计" header-value="¥2400.00" :body-items="list"></form-preview>
    </div>

    <div class="footer">
      <div class="left-content">
        <span class="payment-title">待支付</span>
        <span class="payment-price">$128</span>
      </div>
      <div class="right-content">
       <span class="payment-go">去付款</span> 
      </div>
    </div>
  </div>
</template>

<script>
import { CellFormPreview, Group, Cell,FormPreview } from "vux";

export default {
  components: {
    CellFormPreview,
    Group,
    Cell,
    FormPreview
  },
  data() {
    return {
      list: [
        {
          label: "苹果",
          value: "3.29 x 1"
        },
        {
          label: "香蕉",
          value: "1.04 x 3"
        },
        {
          label: "葡萄",
          value: "8.00 x 2"
        },
        {
          label: "优惠",
          value: "-8.00"
        }
      ]
    };
  }
};
</script>

<style>
.checkout-content{
  margin-top: 0px;

}

.footer {
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 100;
  width: 100%;
  height: 48px;
  justify-content: space-around;
}

.left-content {
  display: flex;
  flex: 3;
  background: #141d27;
  align-items: center;
}

.left-content .payment-title {
  font-weight: 500;
  color: #ffffff;
  padding: 0 5px 0 15px;
  font-size: 1.2rem;
}

.left-content .payment-price {
  font-weight: 500;
  color: #ffffff;
  padding: 0 5px 0 5px;
  font-size: 1.2rem;
}

.right-content {
  display: flex;
  flex: 1;
  background: #00b43c;
  justify-content: center;
  align-items: center;
}

.right-content .payment-go {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>

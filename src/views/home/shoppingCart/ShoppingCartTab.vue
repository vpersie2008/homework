<template>
    <div class="shopCart">
        <div class="content">
            <div class="content-left" @click="showShoppingCart">
                <div class="logo-wrapper">
                    <div class="logo highlight">
                        <img src="./shppingcart.svg">
                    </div>
                    <div class="num" style="">4</div>
                </div>
                <div class="price highlight">￥48</div>
                <div class="promotionPrice">￥48</div>
            </div>
    
            <div class="content-right">
                <div class="pay enough">
                    去结算
                </div>
            </div>
        </div>
        <div class="footer">    
            <shopping-cart ref="shoppingCart"></shopping-cart>
        </div>
    </div>
</template>
<script>
import ShoppingCart from './ShoppingCart'

export default {
  name: "ShoppingCartTab",
  components:{
      ShoppingCart,
  },
  data() {
    return {};
  },

  methods: {
      showShoppingCart(){
          this.$refs.shoppingCart.showShoppingCart();
      }
  }
};
</script>

<style>
.shopCart{
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 50;
    width: 100%;
    height: 48px;
}

.shopCart .content{
    display: flex;
    background: #141d27;
}

.shopCart .content .content-left{
    flex: 1;
}

.shopCart .content .content-right{
    flex: 0 0 105px;
    width: 105px;
}

.shopCart .content .content-left .logo-wrapper{
    display: inline-block;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
    background: #141d27;
}

.shopCart .content .content-left .logo-wrapper .logo{
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 50%;
}

.shopCart .content .content-left .logo-wrapper .logo.highlight {
    background: #00a0dc;
}

.shopCart .content .content-left .logo-wrapper .num{
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: #f01414;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}

.shopCart .content .content-left .logo-wrapper .logo .icon-gouwuche{
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
}

.shopCart .content .content-left .logo-wrapper .logo .icon-gouwuche.highlight {
    color: #fff;
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.shopCart .content .content-left .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
    color: rgba(255,255,255,0.4);
}

.shopCart .content .content-left .price.highlight {
    color: #fff;
}

.shopCart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    font-weight: 700;
    background: #2b333b;
}

.shopCart .content .content-right .pay.enough {
    background: #00b43c;
    color: #fff;
    font-size: 1.2rem;
}

.shopCart .content .content-left .promotionPrice {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin-left: 12px;
    margin-top: 12px;
    color: rgba(255,255,255,0.4);
    font-size: 10px;
    text-decoration: line-through;
}

</style>

<template>
  <div class="shoppingCart">
      <div v-transfer-dom>
        <popup v-model="isShowModal" >
            <div class="">
                <group>
                    <popup-header style="background-color:#eceff1"
                        left-text="已选商品"
                        right-text="清空"
                        title=""
                        :show-bottom-border="false"
                        @on-click-left="false"
                        @on-click-right="false">
                    </popup-header>

                    <div v-for="i in 8">
                        <cell title="测试商品" >
                            <div class="cells"> 
                                <span class="cell-price-symbol">¥</span>
                                <span class="cell-price">118</span>
                                <inline-x-number width="50px" button-style="round" :min="0"></inline-x-number>
                            </div>
                        </cell>
                    </div>
                </group>
                
                <div>
                    <div class="cell-footer">
                        <div style="padding-left:10px">
                            <span class="cell-summary-price-title">总价</span>
                            <span class="cell-summary-price">¥398</span>
                            <span></span>
                            <span class="cell-line-through-price">¥400</span>
                        </div>
                        <div style="padding-right:10px">
                            <x-button type="primary">去结算</x-button>
                        </div>
                    </div>
                </div>

            </div>
        </popup>
    </div>
  </div>
</template>
<script>
import {
  Popup,
  Group,
  Cell,
  XButton,
  TransferDom,
  InlineXNumber,
  PopupHeader,
  Badge,
  Divider
} from "vux";
export default {
  name: "goods",
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    Cell,
    XButton,
    TransferDom,
    InlineXNumber,
    PopupHeader,
    Badge,
    Divider
  },
  created() {},
  data() {
    return { isShowModal: false };
  },
  methods: {
    showShoppingCart() {
      this.isShowModal = true;
    }
  }
};
</script>
<style>

.popup-title {
  height: 270px;
  margin-bottom: 10px;
}

.popup-content {
  width: 95%;
  background-color: #fff;

  margin: 0 auto;
  border-radius: 5px;
  padding-top: 1px;
}

.cells {
  display: flex;
  text-align: center;
}

.cell-price-symbol{
    color: #f60;
    padding-right: 1px;
    font-weight: 300;
}

.cell-price {
  color: #f60;
  text-align: right;
  padding-right: 10px;
  white-space: nowrap;
  font-weight: 700;
}

.cell-sumprice{
    display: flex;
    text-align: center;
}

.cell-summary-price-title{
    color: #fff;
    font-size: 1.2rem;
}

.cell-summary-price{
    color: #fff;
    padding-left: 10px;
    font-size: 1.5rem;
    font-weight: 500;
}

.cell-line-through-price{
    text-decoration: line-through;
    padding-left: 10px;
    font-weight: 400;
    font-style: italic;
    color: rgb(230, 223, 223);
}

.cell-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0 5px 0;
    background-color: rgba(61,61,63,.9);
}

</style>

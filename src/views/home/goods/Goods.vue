<template>

<div>

    <tab class="tabBarTop">
        <tab-item active-class="active-6-1" selected>商品</tab-item>
        <tab-item active-class="active-6-2">评论</tab-item>
    </tab>

    <div class="good">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
            <li v-for="(item, index) in goods" class="menu-item border-decoration-line"  @click="selectMenu(index, $event)" 
            :class="{'current':index === currentIndex}">
                <span class="text">
                <span v-show="item.type>0" class="icon"></span>{{item.name}}
                </span>
            </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodWrapper">
            <ul>
            <li v-for="item in goods" class="food-list food-list-hook">
                <h1 class="title">{{item.name}}</h1>
                <ul>
                <li v-for="food in item.foods" class="food-item">
                    <div class="icon">
                    <img :src="food.icon" alt="" width="57">
                    </div>
                    <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                        <span class="count">月售{{food.sellCount}}</span><span class="count">好评{{food.rating}}</span>
                    </div>

                    <div class="price">
                        <span class="now">￥{{food.price}}</span>
                        <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                        <div class="icon">
                            <x-icon type="ios-plus" class="icon-green" @click="showShoppingCart"></x-icon>        
                        </div>
                    </div>   
                    </div>
                </li>
                </ul>
            </li>
            </ul>
        </div>
    </div>

    <div v-transfer-dom>
      <popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
         </group>
         <div style="padding:20px 15px;">
          <x-button type="primary">Pay</x-button>
          <x-button @click.native="show7 = false">Cancel</x-button>
         </div>
        </div>
      </popup>
    </div>


</div>
</template>

<script>
import BScroll from 'better-scroll';
import data from '../../../infrastructure/json/data.json';
import { Tab,TabItem,Popup,Group,Cell,XButton,TransferDom} from 'vux'

export default{
    name:'goods',
    directives: {
    TransferDom
    },
    components:{
    Tab,
    TabItem,Popup,Group,Cell,XButton
    },
    data(){
        return {
        goods: [],
        listHeight: [],
        scrolly: 0,
        selectedFood: {},
        show7:false
      };
    },
    created(){
        this.goods = data.goods;
        this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });

    },
    methods:{
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            });
                this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                probeType: 3,
                click: true
            });
                this.foodScroll.on('scroll', (pos) => {
                this.scrolly = Math.abs(Math.round(pos.y));
            });
            },
        _calculateHeight() {
            let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < foodList.length; i++) {
            let item = foodList[i];
            height += item.clientHeight;
            this.listHeight.push(height);
            }
        },
        selectMenu(index, event) {
            //debugger;
            if (!event._constructed) {
                // 去掉自带click事件的点击
                return;
            }
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index];
                this.foodScroll.scrollToElement(el, 300);
            },
        showShoppingCart(){
            this.show7 = true;
        }
    },
    computed:{
        currentIndex() {
                for (let i = 0; i < this.listHeight.length; i++) {
                let height = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
                    return i;
                }
            }
        return 0;
      },
    }
}
</script>

<style>

.tabBarTop {
  width: 100%;
  position: relative;
  left: 0;
  top: -1;
  z-index: 100;
  border: none;
}

li{
    list-style: none;
}

.good {
    display: flex;
    width: 100%;
    position: absolute;
    top: 100px;
    bottom: 46px;
}
.menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;   
}

.menu-wrapper .menu-item{
    display: table;
    width: 56px;
    height: 54px;
    line-height: 14px;
    padding: 0 12px;
}


.border-decoration-line{
    position: relative;  
}

.border-decoration-line:after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    width: 100%;
    content:'';
}
.current{
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
    border: none;
}

.border-none:after{
    display: none;
}

.icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: top;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
}

.menu-item .text{
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
}


.foods-wrapper{
    flex: 1;
}
.foods-wrapper .food-list .title{
    padding-left: 14px;  
    height:  26px;  
    line-height:  26px;  
    border-left:  2px solid #d9dde1;
    font-size:  12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7
}

.foods-wrapper .food-list .food-item{
    display: flex;
    margin:18px;
    padding-bottom:18px;
    border: 1px;
    border-color:rgba(7, 17, 27, 0.1); 
}

.foods-wrapper .food-list .food-item .icon{
    flex: 0 0 57px;
    margin-right: 10px;
}

.foods-wrapper .food-list .food-item .content{
   flex: 1; 
}

.foods-wrapper .food-list .food-item .content .name{
    margin: 2px 0 8px 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    color: rgb(7, 17, 27);
}
.foods-wrapper .food-list .food-item .content .desc, .extra{
    font-size: 10px;
    line-height: 10px;
    color: rgb(147, 153, 159);
}

.foods-wrapper .food-list .food-item .content .desc{
            margin-bottom: 8px;
            line-height: 12px;
}

.foods-wrapper .food-list .food-item .content .extra .count{
    margin-right: 12px;
}
.foods-wrapper .food-list .food-item .content .price{
    font-weight: 700px;
    line-height: 24px;
}

.foods-wrapper .food-list .food-item .content .price .now{
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
}

.foods-wrapper .food-list .food-item .content .price .old{
    font-size: 10px;
    color: rgb(147, 153, 159);
    text-decoration: line-through;
}

.foods-wrapper .food-list .food-item .content .icon{
    position: absolute;
    right: 10%;
}

</style>

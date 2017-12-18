<template>

<div>
    
    <tab :animate="false">
        <tab-item active-class="active-6-2" selected>商品</tab-item>
        <tab-item active-class="active-6-3">评论</tab-item>
    </tab>
  <div class="good">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item border-1px">
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
                  <span class="now">￥{{food.price}}</span><span class="old"
                        v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>

import data from '../../../infrastructure/json/data.json';
import { Tab, TabItem,Divider  } from 'vux'

export default{
    name:'goods',
    components:{
    Tab,
    TabItem,
    Divider,
    },
    data(){
        return {
        goods: [],
        listHeight: [],
        scrolly: 0,
        selectedFood: {}
      };
    },
    created(){
        this.goods = data.goods;
    },
    methods:{

    }
}
</script>

<style>
.good {
    display: flex;
    width: 100%;
    position: absolute;
    top: 120px;
    bottom: 46px;
}
.menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;   
}

.menu-item{
    display: table;
    width: 56px;
    height: 54px;
    line-height: 14px;
    padding: 0 12px;
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
.text{
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

</style>

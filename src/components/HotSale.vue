<template>
<div class='hotsale' v-if='HotSaleProduct && HotSaleProduct.length > 0 '>
  <div class='hotsaletitle'>
    热卖爆款 
  </div>
  <swiper :options="HotSaleSwiper"  class='HotSaleSwiper'>
    <swiper-slide v-for="(slide,index) in arr1" :key="index">
      <div  v-for='(slide,index1) in HotSaleProduct.slice(index*9,index*9+9)' :key='index1'>
      <a v-if='slide.Url' :href="slide.Url"  @click="Statistics(slide.ProductNo +'|' + (index1 + index*9))" >
        <img v-lazy="slide.ImageUrl" alt="" :class="'hot'+index*index1">
        <div class='hotsaleName' v-if='slide.Param3'>
            <span >爆款</span>{{slide.Title}}
            </div>
        <div class='hotsalePrice' v-if='slide.Param3'>已售:{{slide.Param3}}</div>
        </a>
        <router-link v-else :href="slide.Url"  @click="hotSaleMore" :class="'ahot'+index*index1" :to="{path:'/getMoreHotProduct/'+cateoryeName}">
          <img v-lazy="slide.ImageUrl" alt="" :class="'hot'+index*index1">
        <div class='hotsaleName' v-if='slide.Param3'>
            <span >爆款</span>{{slide.Title}}
            </div>
        <div class='hotsalePrice' v-if='slide.Param3'>已售:{{slide.Param3}}</div>
        </router-link>
        </div>
    </swiper-slide>
    <div class="Hot-swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  props: ["HotSaleProduct",'cateoryeName'],
  data() {
    return {
  
      HotSaleSwiper: {
         resistanceRatio: 0,
        pagination: {
          el: ".Hot-swiper-pagination",
          bulletActiveClass: 'area-bullet-active',
        },
      }
    };
  },
  computed:{
    arr1(){

        this.HotSaleProduct;
        var arr = []
      if(this.HotSaleProduct){
        arr.length = Math.ceil(this.HotSaleProduct.length/9)
        }
        return  arr
    },
  },
  methods: {
    hotSaleMore(){
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOTSALE|");
      this.$statistics.click(item);
    }
  },
  created(){
    // this.cateoryeName = this.$route.meta.loadname
    // console.log(this.$route.meta.loadname)
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;

.HotSaleSwiper {
  margin-left: 10/@rem;
  box-sizing: border-box;
  margin-right: 10/@rem;
}
.hotsale {

  .Hot-swiper-pagination{
    text-align:center ;
    span{
      position: relative;
      top:-6px;

    }
  }
  .ahot10{
    background:#f4f4f4;
  }
  a {
   
    text-decoration: none;
    color: #767676;
    background: #f8f8f8;
    width:33.333%;
    float:left;
    padding-left:5/@rem;
    padding-right:5/@rem;
    box-sizing:border-box;
    position: relative;
  }
  .hotsaletitle {
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    box-sizing: border-box;
    margin: 0 0 10/@rem 0;
    margin-top: 15/@rem;
    background: white;
    color: #747474;
    position: relative;
    span{
      
      position:absolute;
      right:10/@rem;
      top:0;
      font-size:22/@rem;
      color:#cacaca;
    }
  }
  .swiper-slide {
    width: 230/@rem;
 .hot10{
      height:282/@rem;
      padding:0;
      margin:0;
      padding:2px;
      box-sizing:border-box;
    }
    img {
      width:100%;
      height: 230/@rem;
      padding-top: 26/@rem;
      background: white;
      padding-bottom: 26/@rem;
      
    }
    div {
      font-size: 26/@rem;
      text-align: center;
    }
    .hotsaleName {
      text-align: center;
      height: 40/@rem;
      line-height: 40/@rem;
    font-size: 28/@rem;
       color:#565656;
      overflow: hidden;
      span{
 width: 60/@rem;
        height: 26/@rem;  
        // margin-right:8/@rem;
        position: absolute;
        line-height:26/@rem;
        font-size:20/@rem;
        top:0;
        left:5/@rem;
        display: inline-block;
        text-align: center;
        background:#e57b7b;
        color:white;
      }
      img {
        width: 60/@rem;
        height: 26/@rem;
        display: inline-block;
        position: relative;
        padding: 0;
        background: #f8f8f8;
        left: 0;
        top: 0;
      }
    }
    .hotsaleTitle {
      overflow: hidden;
      white-space: nowrap;
      height: 60/@rem;
      text-overflow: ellipsis;
     
      font-size: 28/@rem;
      line-height: 60/@rem;
    }
    .hotsaleMemo {
       color:#565656;
      color:#a7a7a7;
      font-size: 26/@rem;
      line-height: 40/@rem;
      height: 40/@rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .hotsalePrice {
      color:#a7a7a7;  
      line-height: 40/@rem;
      font-size: 24/@rem;
      font-weight: 500;
    }
  }
}
</style>


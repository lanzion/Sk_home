<template>
<div class='hotsale' v-if='HotSaleProduct.length > 0'>
  <div class='hotsaletitle'>
    热卖爆款
  </div>
  <swiper :options="HotSaleSwiper"  class='HotSaleSwiper'>
    <swiper-slide v-for="(slide,index) in HotSaleProduct" :key="index">
      <a href="">
        <img v-lazy="slide.ImageUrl" alt="">
        <div class='hotsaleName'>
            <!-- <img src="../assets/images/hot.png" alt=""> -->
            <span >爆款</span>
            <!-- <img src="http://gdtvimg.weixinmvp.com/res/gdtvimg/20180328/da5c233193ff4ceabe125c59808189a2.png" alt=""> -->
            {{slide.Title}}
            </div>
        <!-- <div class='hotsaleTitle'></div> -->
        <div class='hotsalePrice'>￥{{slide.ActivityPrice?slide.ActivityPrice:slide.Param1}}</div>
        </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  props: ["HotSaleProduct"],
  data() {
    return {
      HotSaleSwiper: {
        freeMode: true,
        slidesPerView: "auto"
      }
    };
  },
  methods:{}
};
</script>
<style lang='less'>
@rem: 46.875rem;

.HotSaleSwiper{
  margin-left:10/@rem;
  box-sizing:border-box;
  margin-right:10/@rem;
  
}
.hotsale {
  a{
  text-decoration: none;
  color: #767676;
  background:#f8f8f8;
}
  .hotsaletitle {
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    box-sizing:border-box;
    margin:0 0 15/@rem 0;
    margin-top:15/@rem;
    // margin-bottom: 10/@rem;
    background: white;
    color: #747474;
  }
  .swiper-slide {
    width: 230/@rem;
    margin-right: 10/@rem;
    img {
      width: 230/@rem;
      height: 230/@rem;
      padding-top:26/@rem;
      background:white;
      padding-bottom:26/@rem;
    }
    div {
      font-size: 26/@rem;
      text-align: center;
    }
    .hotsaleName {
      span{
        display: inline-block;
        height:30/@rem;
        width:60/@rem;
        font-size:24/@rem;
        text-align:center;
        color:white;
        background:#e57b7b;
      }
      // position: relative;
      text-align: left;
      height:60/@rem;
      line-height:30/@rem;
overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
      img {
        width: 60/@rem;
        height: 26/@rem;
        display: inline-block;
        position: relative;
        padding:0;
         background:#f8f8f8;
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
      font-size: 26/@rem;
      line-height: 40/@rem;
      height: 40/@rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .hotsalePrice {
      line-height: 40/@rem;
      color: #b4282d;
      font-size: 28/@rem;
      font-weight: 500;
    }
  }
}
</style>


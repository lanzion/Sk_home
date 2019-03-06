<template>
    <div class='catetoryartical'>
        <div class='head' >
            <div class='head-title'>{{artical.Title}}</div>
            <div class='head-dec'>
                {{artical.Describe}}
            </div>
        </div>
        <swiper :options="catetoryArtical" >
            <swiper-slide v-for="(slide,index) in articalProduct" :key="index">
                <img v-lazy="slide.ImageUrl" alt="">
                <div class='hotsalePrice'>￥{{slide.ActivityPrice?slide.ActivityPrice:slide.Param1}}</div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class='bottom'>
          共精心挑选10件商品
        </div>        
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ['artical','articalProduct'],
  data() {
    return {
      catetoryArtical: {
        freeMode: true,
        slidesPerView: "auto"
      },
    };
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.catetoryartical {
  
  .head {
    width: 100%;
    padding-left: 20/@rem;
    box-sizing: border-box;
    .head-title {
      height: 60/@rem;
      width: 100%;
      font-size:34/@rem;
      line-height:60/@rem;
    }
    .head-dec {
      height: 90/@rem;
      line-height: 45/@rem;
      color:#b7b7b7;
      width: 100%;
    }
  }
  .swiper-container{
    border-bottom:1px solid #ccc;
    padding:0 25/@rem;
    box-sizing:border-box;
  }
  .swiper-slide {
    width: 230/@rem;
    height: 300/@rem;
    margin-right: 10/@rem;
    img {
      width: 230/@rem;
      height: 230/@rem;
    }
    div {
      font-size: 30/@rem;
      text-align: center;
    }
    .hotsaleName {
      // position: relative;

      img {
        width: 60/@rem;
        height: 26/@rem;
        display: inline-block;
        position: relative;
        left: 0;
        top: 0;
      }
    }
    .hotsaleTitle{
          overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
      font-size: 28/@rem;
      line-height: 40/@rem;
    }
    .hotsaleMemo {
      font-size: 26/@rem;
      line-height: 40/@rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
      
    }
    .hotsalePrice {
      line-height: 70/@rem;
      color: red;
      font-size: 28/@rem;
      font-weight: 500;
    }
  }
  .bottom{
    height:50/@rem;
    font-size:24/@rem;
    line-height:50/@rem;
    padding:0 25/@rem;
    box-sizing:border-box;
  }
}
</style>



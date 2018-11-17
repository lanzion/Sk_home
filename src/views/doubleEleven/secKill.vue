<template>
  <div class="hotsell" v-if='secKill.length'>
    <img src="../../assets/doubleel_img/ms_bg.png" alt="" class="bg_img">
    <a href="https://dvcms.weixinmvp.com/Mass/20181027SecondKill" @click="StatisticsBUOY('secKill')" class="btn">更多秒杀></a>
    <div class="goods_list">
      <div class="goods_box" v-for="(slide,index1) in arr" :key='index1'>
        <swiper :options='seckkllSwiper' class="swiper-no-swiping">
          <swiper-slide v-for="(item,index) in arrDara(index1)" :key="index">
            <a @click="Statistics(item.ProductNo+'|'+index)" :href="'https://gdtvshop.weixinmvp.com/Wap/ProductDetail/Default.aspx?no='+item.ProductNo" class="product_box">
              <div class="img_box"><img :src="item.ProductImage" alt=""></div>
              <div class="product_name">{{item.ProductName}}</div>
              <div class="product_pic">
                <span class="tag_txt">限时秒杀</span><span class="product_sel_pic"><i>¥</i>{{item.MarketPrice}}</span> <span class="product_ol_pic"><i>¥</i>{{item.SalePrice}}</span>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide v-if="arrDara(index1).length==1">
            <a href="https://dvcms.weixinmvp.com/Mass/20181027SecondKill" class="product_box active">
              <img src="../../assets/doubleel_img/gengduo.png" alt="">
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["secKill"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      seckkllSwiper: {
        // // slidesPerView: "auto",
        // slidesPerView: 3,
        // centeredSlides : true,
        // // spaceBetween :5,
        // loop: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        // autoplay: {
        //   delay: 3000
        // },
        // speed:500,
        effect: "flip",
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          reverseDirection: true,
          waitForTransition: true
        },
        speed: 800
      }
    };
  },
    computed: {
    arr() {
      var arr = [];
      arr.length = 3;
      return arr;
    },
    arr1() {
      var arr = [];
      if (this.secKill) {
        var objArr = [];
        arr.length = Math.ceil(this.secKill.length / 3);
        for (var i = 0; i < arr.length; i++) {
          objArr.push(this.secKill.slice(i * 3, i * 3 + 3)[0]);
        }
        return objArr;
      }
    },
    arr2() {
      var arr = [];
     if (this.secKill) {
        var objArr = [];
        arr.length = Math.ceil(this.secKill.length / 3);
        for (var i = 0; i < arr.length; i++) {
          objArr.push(this.secKill.slice(i * 3, i * 3 + 3)[1]);
        }
        return objArr;
      }
    },
    arr3() {
      var arr = [];
      if (this.secKill) {
        var objArr = [];
        arr.length = Math.ceil(this.secKill.length / 3);
        for (var i = 0; i < arr.length; i++) {
          if(this.secKill.slice(i * 3, i * 3 + 3)[2]) objArr.push(this.secKill.slice(i * 3, i * 3 + 3)[2]);
        }
        return objArr;
      }
    }
  },
  methods: {
    arrDara(index) {
      if (index == 0) {
        return this.arr1;
      } else if (index == 1) {
        return this.arr2;
      } else if (index == 2) {
        return this.arr3;
      }
    },
     StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("HOME_BTN|");
      this.$statistics.click(item);
    },
     Statistics(item) {
      this.$statistics = this.$statistics.of("DOU_SECKILL|");
      this.$statistics.click(item);
    },
  }
};
</script>

<style scoped lang='less'>
  @rem: 46.875rem;
  img{
    width: 100%;
  }
  .hotsell {
  background-image: linear-gradient(0deg, #fd5a47 0%, #f9ab84 100%);
  position: relative;
  overflow: hidden;
  padding-bottom: 10/@rem;
  .bg_img {
    width: 100%;
  }
  .btn {
    color: #694545;
    font-size: 24 / @rem;
    border: 1px solid #694545;
    padding: 8 / @rem 10 / @rem;
    position: absolute;
    right: 20 / @rem;
    top: 38 / @rem;
  }
  .goods_list {
    position: absolute;
    top: 123 / @rem;
    width: 100%;
    .goods_box {
      width: 31.5%;
      float: left;
      margin-left: 10 / @rem;
      // background: #f4f4f4;
      .product_box.active{
        display: block;
    //     background-image: linear-gradient(0deg, 
		// #ffc3c0 0%, 
		// #ffe3e3 100%);
        img{
          // transform: translateY(10%);
        }
      }
      .goods_box:nth-of-type(3){
        background-image: linear-gradient(0deg, 
		#ffc3c0 0%, 
    #ffe3e3 100%);
    width: 100%;
    height: 100%;
      }
      .img_box {
        position: relative;
        padding-bottom: 100%;
        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .product_name {
        color: #565656;
        font-size: 22 / @rem;
        padding: 10 / @rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #fff;
      }
      .product_pic {
        background-image: url("../../assets/doubleel_img/prduct_bottom.png")
          no-repeat;
        background-size: 100%;
        padding: 5 / @rem;
        background-color: #9b4b50;
        .tag_txt {
          color: #fff;
          font-size: 18 / @rem;
        }
        .product_sel_pic {
          color: #fff2d5;
          font-size: 26 / @rem;
          i {
            font-size: 18 / @rem;
          }
        }
        .product_ol_pic {
          font-size: 20 / @rem;
          color: #d5d5d5;
          text-decoration: line-through;
          i {
            font-size: 16 / @rem;
          }
        }
      }
    }
  }
  }
</style>
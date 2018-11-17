<template>
  <div class="zq">
    <img src="../../assets/zqhd_img/top.jpg" alt="">
    <!-- <a href="https://takenew.gdtvdv.com/web/180912zqLuckdraw/index.html?v=888" class="choujian" @click="Statistics('zqcj')"></a> -->
    <div class="choujian">
      <a :href="item.Url" v-for="(item,index) in Recommend.Data" :key='index'>
        <img :src="item.Image.ServerUrl+item.Image.FilePath" alt="">
      </a>
    </div>
    <div class="ban">
      <swiper :options="squaredSwiper" class='squaredSwiper'>
        <swiper-slide v-for="(item,index) in lijian" :key="index" class="sq_swiper">
          <div>
            <a :href="item.Url">
              <img :src="item.ProductImage" alt="">
            </a>
          </div>
        </swiper-slide>
      </swiper>
      <div class="ban_bottom">
        <img src="../../assets/zqhd_img/jiantou.png" alt=""> 左右滑动发现更多好货
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["lijian","Recommend"],
  data() {
    return {
      squaredSwiper: {
        resistanceRatio: 0,
        loop: true,
        speed:500,
        effect: "coverflow",
        slidesPerView: 3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        centeredSlides: true,
        coverflow: {
          rotate: 0,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        },
        observer: true,
        observeParents: true,
        autoHeight: true,
      }
    };
  },
  computed: {
    arr1() {
      this.lijian;
      var arr = [];
      if (this.lijian) {
        arr.length = Math.ceil(this.lijian.length / 3);
      }
      return arr;
    }
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_BANNER|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
  display: block;
}
.zq {
  // padding-bottom: 46px;
  position: relative;
  background: #fff;
}
.choujian {
  display: block;
  height: 251 / @rem;
  // background: #000;
  position: absolute;
  top: 860 / @rem;
  // padding: 10/@rem;
  a{
    display: block;
    width: 48.5%;
    float: left;
    padding: 4/@rem;
  }
}
.ban {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 60 / @rem;
}
.ban .ban_bottom {
  color: #656781;
  font-size: 24 / @rem;
  text-align: center;
  padding-top: 20 / @rem;
}
.ban .ban_bottom img {
  width: 30%;
  margin: 0 auto;
  margin-bottom: 20 / @rem;
}
.carousel-3d-slide {
  width: 52% !important;
}
.carousel-3d-slide.current {
  width: 52% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}
.carousel-3d-slide.right-1 {
  left: 11% !important;
  transform: translateX(-50%) translateZ(-60px) rotateY(35deg) !important;
}
.carousel-3d-slide .left-1 {
  right: 11% !important;
  transform: translateX(50%) translateZ(-60px) rotateY(-35deg) !important;
}
.sq_swiper.swiper-slide.swiper-slide-prev{
      transform: translate3d(-30px, 0px, -200px) rotateX(0deg) rotateY(0deg) !important;
}
.sq_swiper.swiper-slide.swiper-slide-next{
   transform: translate3d(30px, 0px, -200px) rotateX(0deg) rotateY(0deg) !important;
}
// .swiper-wrapper {
//   transform: perspective(1000px) !important;
// }
// .swiper-container.squaredSwiper.swiper-container-horizontal.swiper-container-ios {
//   transform: perspective(1000px) !important;
// }
// .sq_swiper.swiper-slide.swiper-slide-active {
//   transform: translateX(-30%) translateY(40 / @rem) translateZ(-60px) !important;
// }
// .sq_swiper.swiper-slide.swiper-slide-next {
//   transform: translateX(0) translateZ(60px) !important;
//   width: 40% !important;
// }
// .sq_swiper.swiper-slide.swiper-slide-next + .sq_swiper.swiper-slide {
//   transform: translateX(30%) translateY(40 / @rem) translateZ(60px) !important;
// }
</style>
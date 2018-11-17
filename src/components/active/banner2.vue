<template>
  <div class="ban">
    <swiper :options="bannerSwiper" ref="BannerSwiper" v-if='imgList.length>1' class='banner-img'>
      <swiper-slide v-for="(slide,index) in imgList" :key="index">
        <a :href="slide.URL"><img :src="slide"></a>
      </swiper-slide>
      <div class="swiper-pagination" v-if='imgList.length>1' slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      imgList: [
        "http://download2.qcplay.com/web/sgzdz/Wap/guide2/images/banner_03.png",
        "http://download2.qcplay.com/web/sgzdz/Wap/guide2/images/banner_03.png",
        "http://download2.qcplay.com/web/sgzdz/Wap/guide2/images/banner_03.png",
        "http://download2.qcplay.com/web/sgzdz/Wap/guide2/images/banner_03.png"
      ],
      bannerSwiper: {
        loop: true,
        pagination: ".swiper-pagination",
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        slidesPerView: "auto",
        coverflow: {
          rotate: 0, // 旋转的角度
          stretch: 100, // 拉伸   图片间左右的间距和密集度
          depth: 150, // 深度   切换图片间上下的间距和密集度
          modifier: 3, // 修正值 该值越大前面的效果越明显
          slideShadows: false // 页面阴影效果
        },

        init() {}
      }
    };
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.swiper-container {
  width: 95%;
  padding-top: 0.5rem;
}
.swiper-slide {
  background-position: center;
  background-size: 130% 120%;
  width: 60%;
  height: 15rem;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 15rem;
}
.swiper-button-next,
.swiper-button-prev {
  top: 5rem;
  width: 10%;
  height: 7rem;
}
</style>
<template>
<div  class='ban'>
  <swiper :options="bannerSwiper" ref="BannerSwiper" v-if='bannerMess.length>1' class='banner-img'>
    <swiper-slide v-for="(slide,index) in bannerMess" :key="index">
        <a :href="slide.URL"><img :src="slide.ImageUrl" @click="Statistics(slide.Title + '|' + index)"></a>
    </swiper-slide>
    <div class="swiper-pagination" v-if='this.bannerMess.length>1' slot="pagination"></div>
  </swiper>
  <a v-if='bannerMess.length == 1'  :href="bannerMess[0].URL?bannerMess[0].URL:'javascript:void(0)'">
    <img :src="bannerMess[0].ImageUrl" v-if='bannerMess[0]' @click="Statistics(bannerMess[0].Title + '|0')">
  </a>
</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "BannerSwiper",
  props: ["bannerMess"],
  
  data() {
    return {
      bannerSwiper: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        speed:500,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: 'my-bullet-active',
        },
        init() {
        }
      }
    };
  },
  computed: {
    // swiper() {
    //   if(this.$refs.BannerSwiper){
    //     return this.$refs.BannerSwiper.swiper;
    //   }
    // },
  },
    methods: {
      Statistics(item) {
        this.$statistics = this.$statistics.of("HOME_BANNER|");
        this.$statistics.click(item);
      }
    }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.ban {
  overflow: hidden;
  background:white;
  
  img {
  width: 100%;
  vertical-align:bottom;

}
.banner-img{
  img{

  }
}
}

.swiper-pagination-bullet-active{
  background:#ba3d3f;
}
</style>


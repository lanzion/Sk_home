<template>
  <div class="banner">
    <swiper :options="bannerSwiper" ref="BannerSwiper" class='banner-img' v-if="banner.length>=2">
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <a :href="item.Url" class="banner_box" @click="Statistics('home_activity|'+item.Title+'|'+index)">
          <div class="bottom_img"><img :src="item.Image" alt=""></div>
          <div class="top_img"><img :src="item.Image" alt=""></div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <a :href="banner[0].Url?banner[0].Url:'javascript:;'" class="banner_box" v-if="banner.length ==1" @click="Statistics('home_activity|'+banner[0].Title+'|0')">
      <div class="bottom_img"><img :src="banner[0].Image" alt=""></div>
      <div class="top_img"><img :src="banner[0].Image" alt=""></div>
    </a>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["banner"],
  data() {
    return {
      bannerSwiper: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        },
        init() {}
      }
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style scoped lang="less">
@rem: 46.875rem;
img {
  width: 100%;
  display: block;
}
.swiper-slide-active {
  z-index: 1;
}
.swiper-pagination {
  bottom: 60 / @rem;
  .swiper-pagination-bullet {
    background: #fff;
  }
}
.banner_box {
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  .bottom_img {
    width: 115%;
    transform: translateX(-7.5%);
    // opacity: 0.5;
    position: relative;
  }
  .bottom_img::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.4;
  }
  .top_img {
    position: absolute;
    width: 95%;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
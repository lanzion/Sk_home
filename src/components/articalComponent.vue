<template>
  <div class='homeArtical' v-if='HomeAritcal.length > 0'>
    <a class='title homeArtical_title'>
      必买清单
      <!-- <img src="http://gdtvimg.weixinmvp.com/res/gdtvimg/20180328/eb299706fbd84fb0a387664616b621ef.png" alt=""> -->
      <!-- <span>查看更多&gt;</span> -->
    </a>
    <swiper :options="articalSwiper" ref="ArticalSwiper">
      <swiper-slide v-for="(slide,index) in HomeAritcal" :key="index">
        <a :href="slide.URL" @click="Statistics(slide.Title)">
          <img v-lazy="slide.ImageUrl" alt="">
          <div class='artiaclleft'>
            <div>
              <div class='articaltitle'>{{slide.Title}}</div>
              <div class='articaldescribe'>{{slide.Describe}}</div>
            </div>

          </div>
          <div class='articalright'>
            {{slide.ActivityPrice?slide.ActivityPrice:slide.Param1}}
          </div>
        </a>
      </swiper-slide>
      <!-- <div class="swiper-pagination" v-if='this.bannerMess.length>1' slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "articalSwiper",
  props: ["HomeAritcal"],
  data() {
    return {
      articalSwiper: {
        followFinger: true,
        centeredSlides: true,
        slidesPerView: 1.1,
        autoplayDisableOnInteraction: false,
        loopedSlides: 1,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0
        },
        pagination: {},
        on: {
          init() {
            var clickSlide = this.slides.eq(this.activeIndex);
            this.slides.find("div").css("display", "none");
            clickSlide.find("div").css("display", "block");
          },
          transitionStart() {
            var clickSlide = this.slides.eq(this.activeIndex);
            this.slides.find("div").css("display", "none");
            clickSlide.find("div").css("display", "block");
          }
        }
      }
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_ARTICAL|");
      this.$statistics.click(item);
    }
  },
  computed: {
    swiper() {
      return this.$refs.ArticalSwiper.swiper;
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.homeArtical {
  background: white;
  margin-top: 15 / @rem;
  height: 590 / @rem;
  overflow: hidden;
  .swiper-slide {
    box-sizing: border-box;
    padding-right: 36 / @rem;
    box-sizing: border-box;
    overflow: hidden;
    background: white;
    &:last-of-type {
      padding-right: 0 / @rem;
    }
    a {
      display: block;
      color: black;
      background: white;
      overflow: hidden;

      img {
        height: 364 / @rem;
        display: block;
        width: 100%;
        border-radius: 8px;
      }
    }
    .artiaclleft {
      float: left;
      box-sizing: border-box;
      padding-top: 10 / @rem;
      width: 500 / @rem;
      height: 115 / @rem;
    }
    .articaltitle {
      height: 44 / @rem;
      line-height: 44 / @rem;
      font-size: 32 / @rem;
      color: #565656;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .articaldescribe {
      font-size: 28 / @rem;
      height: 50 / @rem;
      line-height: 50 / @rem;
      color: #b1b1b1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .articalright {
      box-sizing: border-box;
      padding-top: 10 / @rem;
      height: 44 / @rem;
      line-height: 44 / @rem;
      width: 145 / @rem;
      text-align: right;
      font-size: 32 / @rem;
      color: #b4282d;
      float: right;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .title {
    width: 100%;
    display: block;
    height: 100 / @rem;
    line-height: 100 / @rem;
    text-align: center;
    position: relative;
    font-size: 40 / @rem;
    font-weight: 580;
    background: white;
    color: #6e6e6e;
    span {
      position: absolute;
      right: 10 / @rem;
      top: 0;
      font-size: 24 / @rem;
      color: #9a9a9a;
    }
    img {
      position: absolute;
      width: 36 / @rem;
      line-height: 100 / @rem;
      display: inline-block;
      vertical-align: bottom;
      left: 470 / @rem;
      top: 34 / @rem;
    }
  }
  .homeArtical_title{
    font-weight: 900;
  }
}
</style>


<template>
  <div class='advertising'>
    <div v-if='adver.length<=1'>
      <a :href="item.URL" v-for='(item,index) in adver' :key='index' :class="'aa'+index" @click='Statistics(item.Title)'>
        <!-- <img v-lazy="item.ImageUrl" alt=""> -->
        <img :src="item.ImageUrl" alt="">

      </a>
    </div>
    <div v-else>
      <!-- <swiper :options="spaceSwiper" ref="spaceSwiperref" >
            <swiper-slide v-for="(slide,index) in adver" :key="index">
                <a :href="slide.Url"><img v-lazy="slide.ImageUrl" @click="Statistics(slide.Title)"></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper> -->
      <div class='Extension'>
        <a :href="slide.URL" :class="'two '+'two'+index" @click='Statistics(slide.Title)' v-for="(slide,index) in adver" :key="index">
          <!-- <img v-lazy="slide.ImageUrl" alt=""> -->
          <img :src="slide.ImageUrl" alt="">

        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["adver"],
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_SPACE|");
      this.$statistics.click(item);
    }
  },
  data() {
    return {
      spaceSwiper: {
        resistanceRatio: 0,
        followFinger: true,
        // loop:true,
        centeredSlides: true,
        slidesPerView: 1.1,
        autoplayDisableOnInteraction: false,
        // loopedSlides: 1,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0
        }
      }
    };
  },
  created() {}
};
</script>
<style lang='less'>
@rem: 46.875rem;
body {
  margin: 0;
  padding: 0;
}
.advertising {
  overflow: hidden;
  height: auto;
  a {
    padding-top: 10/@rem;
    display: block;
    width: 100%;
    height: auto;
    padding: 10/@rem;
    box-sizing: border-box;
    margin: 0;
    height: auto;
    img {
      box-sizing: border-box;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      vertical-align: bottom;
      padding: 0;
      margin: 0;
    }
  }
  .Extension{
    overflow: hidden;
    padding: 10/@rem 10/@rem 0 10/@rem;
    width: 100%;
    height: auto;
 
    box-sizing: border-box;
    margin: 0;
    height: auto;
    a{
      margin:0;
      padding:0;
      width:50%;
      height:100%;
      float:left;
      display: block;
      img{width:100%;height:100%;border-radius:0;}
      &:nth-of-type(1){
        border-right:1px solid #ededed;
        box-sizing: border-box
      }
      &:nth-of-type(2){
        border-left:1px solid #ededed;
        box-sizing: border-box
      }
    }
  }
  .aa0 {
    padding-bottom: 0;
  }
}
</style>


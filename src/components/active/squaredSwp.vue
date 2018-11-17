<template>
  <div class="squared_swp">
    <div class="squared_top"><img src="../../assets/zqhd_img/mansongtop.png" alt=""></div>
    <swiper :options="squaredSwiper" class='squaredSwiper' v-if='manSong.length'>
      <swiper-slide v-for="(slide,index) in arr1" :key="index" class="sq_swiper">
        <div v-for='(slide,index1) in manSong.slice(index*9,index*9+9)' :key='index1'>
          <a class="goods_box" v-if='slide.Url' :href="slide.Url" @click="Statistics(slide.ProductNo +'|' + (index1 + index*9))">
            <div class="goods_img">
              <img v-lazy="slide.ProductImage" alt="" :class="'hot'+index*index1">
              <img src="../../assets/zqhd_img/mansong.png" alt="" class="biao">
            </div>
            <div class="goods_des">
              <div class="goods_name">{{slide.ProductName}}</div>
              <div class="goods_pic">￥
                <span>{{slide.SalePrice}}</span>
              </div>
              <div class="goods_short">{{slide.ShortDesc}}</div>
              <div class="goods_car">
                <img src="../../assets/zqhd_img/car.png" alt="">
              </div>
            </div>
          </a>
        </div>
      </swiper-slide>
      <div class="Hot-swiper-pagination" slot="pagination" v-if='manSong.length>1'></div>
    </swiper>
  </div>
</template>

<script>
// import mansong from "../../lib/mansong.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props:['manSong'],
  data() {
    return {
      squaredSwiper: {
        resistanceRatio: 0,
        pagination: {
          el: ".Hot-swiper-pagination",
          bulletActiveClass: "area-bullet-active"
        },
        autoHeight: true,
      },
      productLIst: []
    };
  },
  computed: {
    arr1() {
      this.manSong;
      var arr = [];
      if (this.manSong) {
        arr.length = Math.ceil(this.manSong.length / 9);
      }
      return arr;
    }
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOTSALE|");
      this.$statistics.click(item);
    }
  },
  mounted() {
   
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
  display: block;
}
.squared_swp {
  padding-top: 40/@rem;
  .squared_top{
    padding-bottom: 20/@rem;
  }
  .sq_swiper{
  }
  .Hot-swiper-pagination{
    text-align: center;
  }
  .goods_box {
    float: left;
    width: 33%;
    background: #fff;
    border-right: 1px solid #eee;
    border-top: 1px solid #eee;
    padding-bottom: 20 / @rem;
    border-bottom: 1px solid #eee;
    .goods_img {
      padding-bottom: 100%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .biao{
        position: absolute;
        width: 40%;
        top: -2px;
        left: 0;
      }
    }
    .goods_des {
      position: relative;
      .goods_name {
        height: 58 / @rem;
        color: #4e4c4c;
        font-size: 24 / @rem;
        line-height: 28 / @rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        padding: 0 10 / @rem;
      }
      .goods_pic {
        font-size: 20 / @rem;
        color: #e53b3b;
        padding: 8 / @rem 10 / @rem;
        span {
          font-size: 28 / @rem;
        }
      }
      .goods_short {
        font-size: 22 / @rem;
        color: #f0aa6c;
        padding-left: 10 / @rem;
        padding-right: 60 / @rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .goods_car {
        width: 34 / @rem;
        height: 34 / @rem;
        background: #f45555;
        padding: 3 / @rem;
        border-radius: 50%;
        position: absolute;
        right: 10 / @rem;
        bottom: 2 / @rem;
      }
    }
  }
}
</style>
<template>
  <div class="squared_swp">
    <div class="squared_top"><img src="../../assets/zqhd_img/manjiantop.png" alt=""></div>
    <swiper class='Hcontainer' :options="HeaderSwiperOption" ref="mySwiper">
      <swiper-slide :class="'headNav'+index" v-for='(item,index) in manJian.code' :key='index'>
        <span :class="tapindex==index?'router-link-active':''" @click='getArrLength($event,index)' :code='item.Code'>{{item.Title}}</span>
      </swiper-slide>
    </swiper>
    <swiper :options="squaredSwiper" class='squaredSwiper' v-if='productLIst.length'>
      <swiper-slide v-for="(slide,index) in arr1" :key="index" class="sq_swiper" >
        <div v-for='(slide,index1) in productLIst.slice(index*9,index*9+9)' :key='index1'>
          <a class="goods_box" v-if='slide.Url' :href="slide.Url" @click="Statistics(slide.ProductNo +'|' + (index1 + index*9))">
            <div class="goods_img">
              <img v-lazy="slide.ProductImage" alt="" :class="'hot'+index*index1">
              <img src="../../assets/zqhd_img/manjian.png" alt="" class="biao">
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
      <div class="Hot-swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import mansong from "../../lib/mansong.js";
import { GetReferenceProductList } from "../../server/getData.js";

import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["manJian"],
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
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        on: {
          init() {}
        }
      },
      goodsList: this.manJian.goodsList[0],
      test: this.manJian.goodsList,
      productLIst: [],
      tapindex: 0,
      arr: []
    };
  },
  computed: {
    arr1() {
      var data = this.productLIst;
      var arr = [];
      if (this.productLIst) {
        arr.length = Math.ceil(data.length / 9);
      }
      return arr;
    },
    _test: {
      set(value) {
        // this.update();
        // console.log(value);
        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          if (element.code.Code == this.manJian.code[0].Code) {
            console.log();
            this.productLIst = [];
            element.Product.forEach(v => {
              this.productLIst.push(v);
            });
          }
        }
      },
      get() {
        return this.productLIst;
      }
    }
  },
  watch: {
    "manJian.goodsList": function(n, o) {
      this._test = n;
    }
  },
  mounted() {},
  methods: {
    getArrLength(e, index) {
      this.tapindex = index;
      var code = e.target.getAttribute("code");
      for (let i = 0; i < this.manJian.goodsList.length; i++) {
        const element = this.manJian.goodsList[i];
        if (element.code.Code == code) {
          this.productLIst = [];
          element.Product.forEach(v => {
            this.productLIst.push(v);
          });
        }
      }
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOTSALE|");
      this.$statistics.click(item);
    }
  },
  created() {
    var This = this;
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
  padding-top: 40 / @rem;
  .squared_top {
    padding-bottom: 20 / @rem;
  }
  .sq_swiper {
  }
  .Hot-swiper-pagination {
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
      .biao {
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
.Hcontainer {
  color: #5d577b;
  height: 90 / @rem;
  line-height: 90 / @rem;
  z-index: 10000;
  top: 0;
  width: auto;
  background: white;
  .swiper-slide {
    width: 150 / @rem;
    font-size: 30 / @rem;
    padding-left: 12 / @rem;
    text-align: center;
    span {
      display: inline-block;
      height: 70%;
      line-height: 66 / @rem;
      overflow: hidden;
      margin-top: 10 / @rem;
    }
  }
  .recom {
    width: 80 / @rem;
  }
  .headNav0 {
    // width: 80/@rem;
  }
  .router-link-active {
    border-bottom: 2px solid #5d577b;
    color: #5d577b;
    font-weight: 580;
  }
}
</style>
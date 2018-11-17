<template>
  <div class="hotsell" v-if='killgroup.length'>
    <img :src="bgImg[bg].bg_img" alt="" class="bg_img">
    <a :href="bgImg[bg].url" @click="StatisticsBUOY('tuangou')" class="btn">{{bgImg[bg].txt}}</a>
    <div class="goods_list">
      <div class="goods_box" v-for="(slide,index1) in arr" :key='index1'>
        <swiper :options='HotSellSwiper' class="swiper-no-swiping">
          <swiper-slide v-for="(item,index) in arrDara(index1)" :key="index">
            <a @click="Statistics(item.ProductNo+'|'+index)" :href="item.Url" class="product_box">
              <div class="img_box"><img :src="item.ProductImage" alt=""></div>
              <div class="product_name">{{item.ProductName}}</div>
              <div class="product_pic"><span class="tag_txt">{{bgImg[bg].saleTxt}}</span><span class="product_sel_pic"><i>¥</i>{{item.Param5}}</span> <span class="product_ol_pic"><i>¥</i>{{item.SalePrice}}</span></div>
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
  props: ["killgroup",'bg'],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      HotSellSwiper: {
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
      },
      bgImg: {
        ms: {
          bg_img: require("../../assets/doubleel_img/ms_bg.png"),
          txt: "更多秒杀>",
          url:'',
          saleTxt:'秒杀'
        },
        tg: {
          bg_img: require("../../assets/doubleel_img/tg_bg.png"),
          txt: "更多团购>",
          url:'https://dvcms.weixinmvp.com/Mass/180926suang11Preheat/dist/index.html#/PinList',
          saleTxt:'团购价'
        }
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
      if (this.killgroup) {
        var objArr = [];
        arr.length = Math.ceil(this.killgroup.length / 3);
        for (var i = 0; i < arr.length; i++) {
          objArr.push(this.killgroup.slice(i * 3, i * 3 + 3)[0]);
        }
        return objArr;
      }
    },
    arr2() {
      var arr = [];
     if (this.killgroup) {
        var objArr = [];
        arr.length = Math.ceil(this.killgroup.length / 3);
        for (var i = 0; i < arr.length; i++) {
          objArr.push(this.killgroup.slice(i * 3, i * 3 + 3)[1]);
        }
        return objArr;
      }
    },
    arr3() {
      var arr = [];
      if (this.killgroup) {
        var objArr = [];
        arr.length = Math.ceil(this.killgroup.length / 3);
        for (var i = 0; i < arr.length; i++) {
          objArr.push(this.killgroup.slice(i * 3, i * 3 + 3)[2]);
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
      this.$statistics = this.$statistics.of("DOU_TUANGOU|");
      this.$statistics.click(item);
    },
  }
};
</script>

<style scoped lang='less'>
  @rem: 46.875rem;
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
      // background: #fff;
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
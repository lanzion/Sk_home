<template>
  <div class="dou_recommend">
    <div class="purchase_nav" id="purchase_nav">
      <swiper id="Hcontainer" class='Hcontainer' :options="HeaderSwiperOption" ref="mySwiper">
        <swiper-slide :class="'headNav'+index" v-for='(item,index) in doureommendnav' :key='index'>
          <span :class="purchaseNavIndex==index?'router-link-active':''" @click='getArrLength($event,index)' :code='item.Code'>{{item.Title}}</span>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 产品 -->
    <div class="my_product" :id="'purchase'+index1" v-for="(item1,index1) in doureommendnav" :key="index1">
      <a :href="item.Url" class="product_box" @click="Statistics(item.ProductNo+'|'+index)" v-for="(item,index) in dourecommend[index1][item1.Code]" :key="index">
        <div class="product_img">
          <img v-lazy="item.ProductImage" alt="">
        </div>
        <div class="prod_bottom">
          <div class="product_name">{{item.ProductName}}</div>
          <div class="product_des">{{item.ShortDesc}}</div>
          <div class="product_prc">
            <span>￥</span>{{item.SalePrice}}</div>
        </div>
      </a>
      <div class="gengduo" @click="getGengduo(item1.Code,index1)"><img @click="StatisticsBUOY(item1.Title+'|'+index1)" src="../../assets/doubleel_img/genduo.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    dourecommend: {
      // type: Object,
      required: Object
    },
    doureommendnav: {
      // type: Array,
      required: Array
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        on: {
          init() {},
          click(e) {
            var navWidth = 0;
            for (var i = 0; i < this.slides.length; i++) {
              navWidth += parseInt(this.slides.eq(i).outerWidth(true));
            }
            var clientWidth = parseInt(this.$wrapperEl.outerWidth(true));
            var clickIndex = this.clickedIndex;
            var activeSlidePosition = this.slides[clickIndex].offsetLeft;
            var tSpeed = 300;
            var navSlideWidth = this.slides.eq(clickIndex).outerWidth(true);
            this.slides
              .eq(clickIndex)
              .find("span")
              .transition(tSpeed);
            if (clickIndex > 0) {
              this.slides.eq(clickIndex - 1).transition(tSpeed);
            }
            if (clickIndex < this.slides.length) {
              this.slides.eq(clickIndex + 1).transition(tSpeed);
            }
            var navActiveSlideLeft = this.slides[clickIndex].offsetLeft;
            this.setTransition(tSpeed);
            if (
              navActiveSlideLeft <
              (clientWidth - parseInt(navSlideWidth)) / 2
            ) {
              this.setTranslate(0);
            } else if (
              navActiveSlideLeft >
              navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
            ) {
              this.setTranslate(clientWidth - navWidth);
            } else {
              this.setTranslate(
                (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
              );
            }
          }
        }
      },
      purchaseNavIndex: 0,
      dourecommendindex: [2, 2, 2, 2, 2]
    };
  },
  computed: {
  },
  watch: {
    dourecommend(n,o){
    }
  },
  methods: {
    getArrLength(e, index) {
      var _this = this;
      this.purchaseNavIndex = index;
      var purchase = document.getElementById("purchase" + index);
      var purchase_scroll_top = purchase.offsetTop;
      document.documentElement.scrollTop = document.body.scrollTop = purchase_scroll_top;
    },
    productList(code) {
      var This = this;
      this.dourecommend.map(function(v) {
        if (v.Code == code) return v.Code;
      });
    },
    getGengduo(code, index) {
      this.$store.dispatch("getDouRecommend", {
        index: this.dourecommendindex[index],
        prindex: index,
        code: code
      });
      this.dourecommendindex[index] = this.dourecommendindex[index] + 1;
    },
    StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("DOU_REC_GENDUO|");
      this.$statistics.click(item);
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("DOU_REC|");
      this.$statistics.click(item);
    },
  },
  created () {
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.dou_recommend {
  background: url("../../assets/doubleel_img/promotion_bg.png");
  .Hcontainer {
    color: #5d577b;
    height: 90 / @rem;
    line-height: 90 / @rem;
    z-index: 10000;
    top: 0;
    width: auto;
    background: #fffaf1;
    .swiper-slide {
      width: 200 / @rem;
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
  .my_product {
    overflow: hidden;
    .product_box {
      display: block;
      width: 48%;
      float: left;
      margin-left: 10 / @rem;
      margin-bottom: 20 / @rem;
      height: auto;
      text-align: left;
      .product_img {
        position: relative;
        padding-bottom: 115%;
        border-radius: 20 / @rem;
        overflow: hidden;
        background: #fff;
        img {
          width: 100%;
          position: absolute;
          right: 0;
          bottom: 5%;
        }
        .tag {
          width: 65 / @rem;
          top: 0;
          right: 0;
        }
      }
      .prod_bottom{
        height: 140/@rem;
      }
      .product_name {
        font-size: 28 / @rem;
        color: #494949;
        padding: 15 / @rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .product_des {
        color: #999999;
        font-size: 26 / @rem;
        padding-bottom: 15 / @rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .product_prc {
        color: #ce4545;
        font-size: 38 / @rem;
        span {
          font-size: 28 / @rem;
        }
      }
    }
    .gengduo {
      width: 90%;
      margin: 10 / @rem auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>
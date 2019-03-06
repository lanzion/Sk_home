<template>
  <div class="product2" v-if="productData.productList.length">
    <a :href="productData.Title=='爆款直降'?titleData.zhijiang:titleData.mansong" class="l_title">
      <img :src="productData.Image" alt="">
    </a>
    <div class="product_list">
      <a :href="item.Url" @click="Statistics(productData.Title+'|'+item.ProductNo+'|'+index)" class="product_box" v-for="(item,index) in productData.productList" :key="index">
        <img src="../../assets/doubleel_img/product_two_bg.png" alt="" class="bg_img">
        <div class="conten">
          <div class="product_name">{{item.ProductName}}</div>
          <div class="product_img"><img v-lazy="item.ProductImage" alt=""></div>
          <div class="product_des">{{item.ShortDesc}}</div>
          <div class="porduct_prc">￥<span>{{item.SalePrice}}</span></div>
        </div>
      </a>
      <a :href="productData.Title=='爆款直降'?titleData.zhijiang:titleData.mansong" class="product_box active" @click="Statistics(productData.Title+'|more')">
        <img src="../../assets/doubleel_img/more.png" alt="" class="bg_img">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      titleData: {
        zhijiang: "https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/399",
        mansong: "https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/399"
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

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.product2 {
  padding: 0 20 / @rem;
  .l_title {
    // width: 70%;
    margin: 0 auto;
    margin-bottom: 20 / @rem;
    display: block;
    img{
      width: 70%;
      margin: 0 auto;
      display: block;
    }
  }
  
  .product_box {
    position: relative;
    display: inline-block;
    width: 48%;
    box-sizing: border-box;
    margin-bottom: 10 / @rem;
    border-radius: 20/@rem;
    overflow: hidden;
    vertical-align: top;
     box-shadow: 0px 6px 21px 0px 
		rgba(87, 27, 27, 0.4);
    .bg_img{
      box-shadow: 0px 6px 21px 0px 
		rgba(87, 27, 27, 0.4);
    }
    .conten {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      .product_name {
        text-align: center;
        color: #fff;
        font-size: 30 / @rem;
        padding: 15 / @rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        backface-visibility: hidden;
      }
      .product_img {
        padding-bottom: 86%;
        position: relative;
        img {
          position: absolute;
          width: 80%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .product_des {
        color: #d65258;
        font-size: 26 / @rem;
        height: 50 / @rem;
        line-height: 50 / @rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        backface-visibility: hidden;
      }
      .porduct_prc {
        color: #fef5eb;
        font-size: 30 / @rem;
        height: 65 / @rem;
        line-height: 65 / @rem;
        width: 54%;
        text-align: center;
        backface-visibility: hidden;
        span {
          font-size: 44 / @rem;
        }
      }
    }
  }
  .product_box:nth-of-type(2n-1) {
    margin-right: 14 / @rem;
  }
  .product_box.active {
    margin-bottom: 60 / @rem;
    transform: translateX(-10 / @rem);
  }
}
</style>
<template>
  <div class="my_product">
    <a :href="item.Url" class="product_box" @click="Statistics(productTag[tag]+'|'+item.ProductNo+'|'+index)" v-for="(item,index) in productList" :key="index">
      <div class="product_img">
        <img v-lazy="item.ProductImage" alt="">
        <img :src="productTag[tag]" alt="" class="tag">
      </div>
      <div class="product_des">{{item.ShortDesc}}</div>
      <div class="product_name">{{item.ProductName}}</div>
      <div class="product_prc">
        <span>￥</span>{{item.SalePrice}}</div>
    </a>
    <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/318" @click="StatisticsBUOY('mansonMore')" class="product_box">
      <div class="product_img active">
        <img src="../../assets/doubleel_img/gengduo.png" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['productList','tag'],
  data() {
    return {
      productTag:{
        zj:require('../../assets/doubleel_img/manjian_tag.png'),
        ms:require('../../assets/doubleel_img/mansong_tag.png'),
      }
    };
  },
  methods: {
     StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("HOME_BTN|");
      this.$statistics.click(item);
    },
     Statistics(item) {
      this.$statistics = this.$statistics.of("DOU_HOTS|");
      this.$statistics.click(item);
    },
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.my_product {
  overflow: hidden;
  .product_box {
    display: block;
    width: 31.5%;
    float: left;
    margin-left: 10/@rem;
    margin-bottom: 20/@rem;
    height: auto;
    text-align: left;
    .product_img {
      position: relative;
      padding-bottom: 115%;
      // border-radius: 20/@rem;
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 5%;
      }
      .tag{
        width: 65/@rem;
        top: 0;
        right: 0;
      }
    }
    .product_img.active{
      padding-bottom: 0;
      img{
        position: relative;
      }
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
      color: #fff;
      font-size: 26 / @rem;
      height: 40/@rem;
      background:#e25e67;
      line-height: 40/@rem;
      text-align: center;
      border-radius: 0 0 20/@rem 20/@rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .product_prc{
      color: #ce4545;
      font-size: 38/@rem;
      span{
        font-size: 28/@rem;
      }
    }
  }
}
</style>
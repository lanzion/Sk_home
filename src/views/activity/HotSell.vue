<template>
  <div class="coupon" v-if="productData.productList.length">
    <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/401" class="l_title" @click="Statistics('Gift|more')">
      <img src="../../assets/doubleel_img/coupon.png" alt="">
      <div class="more">查看更多</div>
    </a>
    <div class="product_list">
      <a :href="item.Url" class="product_box" v-for="(item,index) in productData.productList.slice(0,3)" :key="index" @click="Statistics('Gift|'+item.ProductNo+'|'+index)">
        <img src="../../assets/doubleel_img/coupon_bg.png" alt="">
        <div class="conten">
          <div class="tag_img"><img src="../../assets/doubleel_img/goods_tag.png" alt=""></div>
          <div class="left_img"><img v-lazy='item.ProductImage' alt=""></div>
          <div class="right_txt">
            <div class="product_name">{{item.ProductName}}</div>
            <div class="product_des">{{item.ShortDesc}}</div>
            <div class="product_prc">¥
              <span>{{item.SalePrice}}</span>
            </div>
            <div class="btn">立即购买></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default { 
  props: ["productData"],
  data() {
    return {};
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
.coupon {
  .l_title {
    position: relative;
    display: block;
    img {
      width: 55%;
      margin: 0 auto;
      display: block;
    }
    .more {
      position: absolute;
      width: 100 / @rem;
      height: 40 / @rem;
      line-height: 40 / @rem;
      text-align: center;
      background: #862626;
      border: 1px solid #fadaa7;
      color: #fae1d2;
      font-size: 22 / @rem;
      right: 30 / @rem;
      bottom: 20 / @rem;
      border-radius: 10 / @rem;
      backface-visibility: hidden;
    }
  }
  .product_list {
    padding: 0 15 / @rem;
    .product_box {
      position: relative;
      display: block;
      margin-bottom: 30 / @rem;
      .conten {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        .tag_img{
          width: 50/@rem;
          position: absolute;
          left: 45/@rem;
          top: 20/@rem;
          z-index: 1;
        }
        .left_img {
          width: 240 / @rem;
          top: 50%;
          left: 50 / @rem;
          transform: translateY(-50%);
          position: absolute;
          height: 76%;
          img{
            width: auto;
            height: 100%;
          }
        }
        .right_txt {
          width: 270 / @rem;
          height: 100%;
          position: absolute;
          top: 0;
          right: 30 / @rem;
          .product_name {
            color: #fff;
            font-size: 36 / @rem;
            padding-top: 67 / @rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 13 / @rem;
            backface-visibility: hidden;
          }
          .product_des {
            color: #6c3030;
            font-size: 24 / @rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 30 / @rem;
            backface-visibility: hidden;
          }
          .product_prc {
            color: #fff7eb;
            font-size: 26 / @rem;
            margin-bottom: 20 / @rem;
            backface-visibility: hidden;
            span {
              font-size: 40 / @rem;
            }
          }
          .btn {
            width: 136 / @rem;
            height: 38 / @rem;
            background: linear-gradient(0deg, #ff947d 0%, #fbe5ca 100%);
            border-radius: 10 / @rem;
            text-align: center;
            line-height: 38 / @rem;
            font-size: 24 / @rem;
            color: #6c3030;
            backface-visibility: hidden;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="secKill" v-if="productData.length">
    <img src="../../assets/doubleel_img/secKill_bg.png" alt="">
    <div class="conten">
      <a href="https://dvcms.weixinmvp.com/Mass/20181027SecondKill/index.html" class="l_title" @click="Statistics('seckill|more')"></a>
      <div class="product_list">
        <a href="https://dvcms.weixinmvp.com/Mass/20181027SecondKill/index.html" class="product_box" @click="Statistics('seckill|'+item.ProductNo+'|'+index)" v-for="(item,index) in productData.slice(0,3)" :key="index">
          <div class="tag">
            <img src="../../assets/doubleel_img/miao_tag.png" alt="">
            <div class="txt">
              <p>限量</p>
              <p>{{item.Param5}}</p>
              <p>件</p>
            </div>
          </div>
          <div class="prduct_img"><img v-lazy="item.ProductImage" alt=""></div>
          <div class="product_name">{{item.ProductName}}</div>
          <div class="bottom">
            <p class="sel_prc">
              <span>限时秒杀:</span>
              <span>￥</span>
              <span>{{item.MarketPrice}}</span>
            </p>
            <p class="old_prc">原价：¥{{item.SalePrice}}</p>
          </div>
        </a>
      </div>
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
  },
  created() {
    // console.log(this.productData);
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.secKill {
  // padding: 10 / @rem;
  padding-top: 30 / @rem;
  position: relative;
  box-sizing: border-box;
  backface-visibility: hidden;
  .conten {
    position: absolute;
    width: 100%;
    height: 85%;
    top: 30 / @rem;
    left: 0;
    .l_title {
      width: 100%;
      height: 90 / @rem;
      display: block;
    }
    .product_list {
      padding: 0 40 / @rem;
      position: absolute;
      bottom: 5 / @rem;
      width: 100%;
      box-sizing: border-box;
      .product_box {
        width: 32%;
        // box-sizing: border-box;
        display: inline-block;
        margin-right: 10 / @rem;
        border-radius: 10 / @rem;
        overflow: hidden;
        background: #fff;
        position: relative;
        .tag {
          width: 70 / @rem;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
          .txt{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 5/@rem;
            left: 2/@rem;
            color: #ffe2c8;
            font-size: 20/@rem;
            text-align: center;
            p:nth-of-type(2){
              font-size: 22/@rem;
            }
            p:nth-of-type(3){
              text-align: right;
              padding-right: 15/@rem;
            }
          }
        }
        .prduct_img {
          padding-bottom: 100%;
          position: relative;
          img {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
          }
        }
        .product_name {
          text-align: center;
          color: #4b2b2b;
          font-size: 24 / @rem;
          padding: 5 / @rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bottom {
          background: linear-gradient(0deg, #901c1c 0%, #a62633 100%);
          padding: 10 / @rem 0;
          .sel_prc {
            color: #ffefe1;
            font-size: 20 / @rem;
            text-align: center;
            padding-bottom: 5 / @rem;
            span:nth-of-type(2) {
              font-size: 14 / @rem;
            }
            span:nth-of-type(3) {
              font-size: 28 / @rem;
            }
          }
          .old_prc {
            color: #ffe3ce;
            font-size: 16 / @rem;
            text-align: center;
            text-decoration: line-through;
          }
        }
      }
      .product_box:nth-of-type(3) {
        margin-right: 0;
      }
    }
  }
}
</style>
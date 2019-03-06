<template>
  <div class="product3" v-if="productData.length">
    <img src="../../assets/doubleel_img/tuangou_bg.png" alt="">
    <div class="conten">
      <a href="https://dvcms.weixinmvp.com/Mass/180926suang11Preheat/dist/index.html" class="l_title">
        <!-- <p>年货团购</p>
        <p>
          <i></i>两人买&nbsp;&nbsp;&nbsp;&nbsp;更着数
          <i></i>
        </p> -->
        <img src="../../assets/doubleel_img/tuangou_txt.png" alt="">
      </a>
      <div class="product_list">
        <div class="product_box tuan_goods" id="box0">
          <a href="https://dvcms.weixinmvp.com/Mass/180926suang11Preheat/dist/index.html" class="l_product" @click="Statistics('tuangou')" v-for="(item,index) in productData.slice(0,2)" :key='index'>
            <div class="tag"><img src="../../assets/doubleel_img/tuan_tag.png" alt=""></div>
            <div class="product_img"><img v-lazy="item.ProductImage" alt=""></div>
            <div class="product_name">{{item.ProductName}}</div>
            <div class="bottom">
              <div class="left">
                ¥
                <span>{{item.Param5}}</span>
              </div>
              <div class="right">开团></div>
            </div>
          </a>
        </div>
        <div class="product_box tuan_goods" id="box1">
          <a href="https://dvcms.weixinmvp.com/Mass/180926suang11Preheat/dist/index.html" class="l_product" @click="Statistics('tuangou')" v-for="(item,index) in productData.slice(2,4)" :key='index'>
            <div class="tag"><img src="../../assets/doubleel_img/tuan_tag.png" alt=""></div>
            <div class="product_img"><img v-lazy="item.ProductImage" alt=""></div>
            <div class="product_name">{{item.ProductName}}</div>
            <div class="bottom">
              <div class="left">
                ¥
                <span>{{item.Param5}}</span>
              </div>
              <div class="right">开团></div>
            </div>
          </a>
        </div>
        <div class="product_box tuan_goods" id="box2">
          <a href="https://dvcms.weixinmvp.com/Mass/180926suang11Preheat/dist/index.html" class="l_product" @click="Statistics('tuangou')" v-for="(item,index) in productData.slice(4,6)" :key='index'>
            <div class="tag"><img src="../../assets/doubleel_img/tuan_tag.png" alt=""></div>
            <div class="product_img"><img v-lazy="item.ProductImage" alt=""></div>
            <div class="product_name">{{item.ProductName}}</div>
            <div class="bottom">
              <div class="left">
                ¥
                <span>{{item.Param5}}</span>
              </div>
              <div class="right">开团></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      flipIndex: 0,
      FlipFlag: false
    };
  },
  computed: {},
  mounted() {
    setInterval(() => {
      if (this.$route.meta.index == 8) {
        if (this.productData.length) {
          if (!this.FlipFlag) {
            var dom = document.getElementById("box" + this.flipIndex);
            dom.classList.add("active");
            this.flipIndex++;
            if (this.flipIndex == 3) {
              this.flipIndex = 0;
              this.FlipFlag = true;
            }
          } else {
            var dom = document.getElementById("box" + this.flipIndex);
            dom.classList.remove("active");
            this.flipIndex++;
            if (this.flipIndex == 3) {
              this.flipIndex = 0;
              this.FlipFlag = false;
            }
          }
        }
      }
    }, 2000);
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    }
  },
  created() {}
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.product3 {
  position: relative;
  .conten {
    position: absolute;
    width: 100%;
    height: 90%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 50 / @rem;
    overflow: hidden;
    .l_title {
      text-align: center;
      padding-top: 50 / @rem;
      display: block;
      img {
        width: 30%;
      }
      p:nth-of-type(1) {
        color: #fef1e1;
        font-size: 60 / @rem;
        margin-bottom: 10 / @rem;
      }
      p:nth-of-type(2) {
        color: #ffeddd;
        font-size: 24 / @rem;
        i {
          display: inline-block;
          width: 22 / @rem;
          height: 1px;
          background: #ffeddd;
          margin: 0 20 / @rem;
          vertical-align: middle;
        }
      }
    }
    .product_list {
      padding: 0 90 / @rem;
      margin-top: 15 / @rem;
      height: 60%;
      overflow: hidden;
      .tuan_goods {
        width: 31%;
        height: 255 / @rem;
        display: inline-block;
        border-radius: 10 / @rem;
        position: relative;
        // height: 60%;
        overflow: hidden;
        .l_product {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: #fff;
          border-radius: 10 / @rem;
          overflow: hidden;
          // -webkit-perspective: 10000;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
          -webkit-transition: all 1s;
          -moz-transition: all 1s;
          -ms-transition: all 1s;
          -o-transition: all 1s;
        }
        .l_product:nth-of-type(2) {
          transform: rotateY(-180deg);
        }
        .tag {
          width: 42 / @rem;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
        }
        .product_img {
          padding-bottom: 100%;
          position: relative;
          img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .product_name {
          color: #363636;
          font-size: 26 / @rem;
          text-align: center;
          padding: 5 / @rem 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bottom {
          height: 40 / @rem;
          position: relative;
          .left {
            position: absolute;
            height: 100%;
            width: 80%;
            top: 0;
            left: 0;
            background: #ffe5b7;
            color: #b74347;
            font-size: 22 / @rem;
            border-top-right-radius: 45 / @rem;
            text-align: center;
            line-height: 40 / @rem;
            box-sizing: border-box;
            padding-right: 20 / @rem;
            span {
              font-size: 30 / @rem;
            }
          }
          .right {
            position: absolute;
            height: 100%;
            width: 40%;
            top: 0;
            right: 0;
            background: #b74347;
            color: #fff7ea;
            font-size: 20 / @rem;
            text-align: center;
            border-top-left-radius: 45 / @rem;
            line-height: 40 / @rem;
            padding-left: 10 / @rem;
            box-sizing: border-box;
          }
        }
      }
      .product_box.active .l_product:nth-of-type(1) {
        transform: rotateY(-180deg);
      }
      .product_box.active .l_product:nth-of-type(2) {
        transform: rotateY(-360deg);
      }
    }
  }
}
</style>
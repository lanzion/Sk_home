<template>
  <div class="special" v-if="specialTimeLimitArr.length>1">
    <!-- 限时特惠 -->
    <a :href="specialTimeLimitArr[0].Url" class="banner">
      <img v-lazy="specialTimeLimitArr[0].ImageUrl" alt="">
      <div class="timer">
        <span>{{time_h}}</span> :
        <span>{{time_m}}</span> :
        <span>{{time_s}}</span>
      </div>
    </a>
    <div class="product_list">
      <a :href="item.Url" v-for="(item,index) in specialTimeLimitArr.slice(1)" :key="index" class="product_box">
        <div class="product_title">{{item.Title}}</div>
        <div class="product_img"><img v-lazy="item.ImageUrl" alt=""></div>
        <div class="product_prc">
          <div class="product_prc_left">
            <p>活动价：¥
              <span>{{item.ActivityPrice?item.ActivityPrice:item.Param1}}</span>
            </p>
            <p>市场价：¥
              <span>{{item.Param2}}</span>
            </p>
          </div>
          <div class="product_prc_right"><img src="../assets/images/car2.png" alt=""></div>
        </div>
        <div class="product_bottom">{{item.Describe}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["specialTimeLimitArr"],
  data() {
    return {
      time_d: 0,
      time_h: 0,
      time_m: 0,
      time_s: 0,
      endTime: ""
    };
  },
  watch: {
    specialTimeLimitArr: {
      handler: function(n, o) {
        if (n != o) {
          this.$nextTick(() => {
            if (n.length > 1) {
              this.endTime = n[1].EndTime.replace(/-/g, "/").replace(/T/g, " ");
              // console.log(this.endTime);
              this.countTime();
            }
          });
        }
      },
      immediate: true, //关键
      deep: true
    }
  },
  methods: {
    countTime() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      var _this = this;
      //设置截止时间
      var endDate = new Date(_this.endTime);
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // _this.time_d = Math.floor(leftTime / 86400000);
        // leftTime -= _this.time_d * 86400000;
        _this.time_h = Math.floor(leftTime / 3600000);
        leftTime -= _this.time_h * 3600000;
        _this.time_m = Math.floor(leftTime / 60000);
        leftTime -= _this.time_m * 60000;
        _this.time_s = Math.floor(leftTime / 1000);

        if (_this.time_h < 10) _this.time_h = "0" + _this.time_h;
        if (_this.time_m < 10) _this.time_m = "0" + _this.time_m;
        if (_this.time_s < 10) _this.time_s = "0" + _this.time_s;
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(_this.countTime, 1000);
    }
  },
  created() {}
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.special {
  margin: 10/@rem 10/@rem 0 10/@rem;
  .banner {
    display: block;
    // padding: 10 / @rem;
    padding-bottom: 10/@rem;
    border-radius: 10 / @rem;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .timer {
      position: absolute;
      width: 100%;
      bottom: 55 / @rem;
      color: #ffffff;
      font-size: 22 / @rem;
      text-align: center;
      span {
        display: inline-block;
        width: 37 / @rem;
        height: 37 / @rem;
        line-height: 37 / @rem;
        text-align: center;
        background: #412b2d;
        border-radius: 50%;
      }
    }
  }
  .product_list {
    overflow: hidden;
    // margin-top: 10/@rem;
    // padding: 10 / @rem;
    padding-bottom: 0;
    .product_box {
      background: #fff;
      border-radius: 14 / @rem;
      overflow: hidden;
      float: left;
      display: block;
      width: 32.3%;
      margin-right: 10 / @rem;
      // margin-bottom: 10 / @rem;
      box-sizing: border-box;
      .product_title {
        color: #353535;
        font-size: 24 / @rem;
        text-align: center;
        padding: 20 / @rem 5 / @rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
      .product_prc {
        position: relative;
        .product_prc_left {
          display: inline-block;
          width: 81.7%;
          font-size: 18 / @rem;
          color: #dd3b3b;
          p {
            padding-left: 4 / @rem;
            span {
              font-size: 26 / @rem;
            }
          }
          p:nth-of-type(2) {
            font-size: 16 / @rem;
            color: #aaaaaa;
            text-decoration: line-through;
            margin-top: 5 / @rem;
            span {
              font-size: 22 / @rem;
            }
          }
        }
        .product_prc_right {
          position: absolute;
          right: 2/rem;
          top: 0;
          display: inline-block;
          width: 42 / @rem;
          height: 42 / @rem;
          background: #dc5b61;
          border-radius: 50%;
          img {
            width: 60%;
            margin: 10 / @rem auto;
            display: block;
          }
        }
      }
      .product_bottom {
        background: #b64248;
        text-align: center;
        height: 50 / @rem;
        line-height: 50 / @rem;
        color: #fff;
        font-size: 20 / @rem;
        margin-top: 5 / @rem;
        padding: 0 2/@rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .product_box:nth-of-type(3){
      margin-right: 0;
    }
  }
}
</style>
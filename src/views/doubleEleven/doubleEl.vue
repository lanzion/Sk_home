<template>
<div>
 <div class="double_el" v-if="HomeFlage>=6">
    <div class="top"><img src="../../assets/doubleel_img/top_bg.jpg" alt=""></div>
    <div class="advert_list" v-if="HomeData.advertList.length">
      <a :href="item.Url" v-for="(item,index) in HomeData.advertList" :key="index"><img :src="item.Image" alt=""></a>
    </div>
    <a href="https://act.gdtvdv.com/dist/index.html#/stayorderList" @click="StatisticsBUOY('yugou')" class="goyu_list">
      <img src="../../assets/doubleel_img/yushou.png" alt="">
      <div class="goyu_list_txt">剩余 <span>{{time_d}}天{{time_h}}:{{time_m}}:{{time_s}}</span></div>
    </a>
    <a href="https://act.gdtvdv.com/DrawPrize/index.html" @click="StatisticsBUOY('draw')" class="draw"><img src="../../assets/doubleel_img/draw.gif" alt=""></a>
    <div class="ms">
      <secKill :secKill='HomeData.skillList' v-if="HomeData.skillList.length"></secKill>
    </div>
    <div class="ms">
      <hot-sell :killgroup='HomeData.GroupList' v-if="HomeData.GroupList.length" :bg='group'></hot-sell>
    </div>
    <div class="sp">
      <product-three :videoList='HomeData.videoList'></product-three>
    </div>
    <div class="promotion">
      <div class="pro">
        <div class="pro_title"><img src="../../assets/doubleel_img/lijian.png" alt=""></div>
        <product-two :productList = 'HomeData.hotSale' :tag='hotsaleTag'></product-two>
        <!-- <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/318" @click="StatisticsBUOY('miaoshaMore')" class="pro_bottom"><img src="../../assets/doubleel_img/lijian_bottom.gif" alt=""></a> -->
      </div>
    </div>
    <div class="promotion">
      <div class="pro">
        <div class="pro_title pro_t"><img src="../../assets/doubleel_img/mansong.png" alt=""></div>
        <product-two :productList = 'HomeData.Fulldelivery' :tag='Fulldeliverytag'></product-two>
        <!-- <a href="https://dvcms.weixinmvp.com/Mass/180312specialactivity/#!/home/318" @click="StatisticsBUOY('mansonMore')" class="pro_bottom"><img src="../../assets/doubleel_img/mansong_bottom.gif" alt=""></a> -->
      </div>
    </div>
    <classified-navigation></classified-navigation>
    <dou-recommend :dourecommend = HomeData.douRecommend :doureommendnav=HomeData.douRecommendNav v-if="HomeData.douRecommendNav.length"></dou-recommend>
    <div class="footer_txt">活动最终解释权，归DV商城所有。</div>
  </div>
  <div v-else class='loading'>
    <img src="../../assets/images/370310983500145999.gif" alt="">
  </div>
  
</div>
 
  
</template>

<script>
import HotSell from "../../views/doubleEleven/HotSell";
import productThree from "../../views/doubleEleven/product3";
import productTwo from "../../views/doubleEleven/product2";
import secKill from "../../views/doubleEleven/secKill";
import douRecommend from "../../views/doubleEleven/douRecommend";
import classifiedNavigation from "../../views/doubleEleven/ClassifiedNavigation";
export default {
   name: "double_el",
  components: {
    HotSell,
    productThree,
    productTwo,
    secKill,
    douRecommend,
    classifiedNavigation
  },
  data() {
    return {
      group:'tg',
      ms:'ms',
      hotsaleTag:'zj',
      Fulldeliverytag:'ms',
      djs:'',
      time_d:0,
      time_h: 0,
      time_m: 0,
      time_s: 0,
    };
  },
   computed: {
    HomeData() {
      if(this.$store.state.zqhd){
        return this.$store.state.zqhd;
      }
    },
    HomeFlage() {
      return this.$store.state.zqhd.loadingFlag;
    }
  },
  methods: {
    countTime() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      var _this = this;
      //设置截止时间
      var endDate = new Date('2018/11/11 23:59:59');
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        _this.time_d = Math.floor(leftTime/86400000);
        leftTime-=_this.time_d * 86400000;
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
    },
    StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("HOME_BTN|");
      this.$statistics.click(item);
    },
  },
  watch: {
    $route() {
      if (this.$route.meta.index - 8 == 0) {
        if (this.$store.state.zqhd.swiperSlides.length == 0) {
          this.$store.dispatch("getZQHD");
        }
      }
    },
  },
  created() {
    if (this.$route.meta.index - 8 == 0) {
      if (this.$store.state.zqhd.swiperSlides.length == 0) {
        this.$store.dispatch("getZQHD");
      }
    }
    this.countTime();
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.double_el {
  padding-bottom: 30 / @rem;
  background: #fffaf1;
  padding-bottom: 146px;
  .top {
    img {
      width: 100%;
    }
  }
  .advert_list{
    // margin: 10/@rem 0;
    overflow: hidden;
    a{
      float: left;
      width: 50%;
      display: block;
      // margin-left: 8/@rem;
      img{
        width: 100%;
      }
    }
  }
  .goyu_list {
    display: block;
    width: 90%;
    margin: 0 auto;
    // margin-top: 10 / @rem;
    position: relative;
    img {
      width: 100%;
    }
    .goyu_list_txt {
      position: absolute;
      color: #7a7a7a;
      font-size: 18 / @rem;
      bottom: 36 / @rem;
      left: 252 / @rem;
      // padding-left: 25 / @rem;
      width: 258/@rem;
      text-align: center;
      span{
        font-weight: bolder;
      }
    }
  }
  .draw {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10 / @rem;
    img {
      width: 100%;
    }
  }
  .ms {
    margin-bottom: 36 / @rem;
  }
  .promotion{
    background: url('../../assets/doubleel_img/promotion_bg.png');
    .pro{
      .pro_title{
          width: 66%;
          padding-top: 50/@rem;
          padding-bottom: 20/@rem;
          margin: 0 auto;
        img{
          width: 100%;
        }
      }
      .pro_t{
        padding-top: 0;
      }
      .pro_bottom{
        width: 98%;
        margin: 0 auto;
        display: block;
        margin-bottom: 0;
        img{
          width: 100%;
        }
      }
    }
  }
  .footer_txt{
    color: #7a7a7a;
    font-size: 26/@rem;
    text-align: center;
    padding: 20/@rem 0;
  }
}
</style>
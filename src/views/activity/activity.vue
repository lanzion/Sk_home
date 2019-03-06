<template>
  <div class="activity">
    <div v-if="activityData.loadingFlag>=6">
      <banner :banner='activityData.banner'></banner>
      <classify-nav></classify-nav>
      <div class="conter">
        <!-- 热门推荐 -->
        <div class="hot_rec">
          <a :href="item.Url" class="hot_res_box" v-for="(item,index) in activityData.advertConfig" :key='index' @click="Statistics('spread|'+item.Title+'|'+index)"><img :src="item.Image" alt=""></a>
        </div>
        <!-- 广告位 -->
        <div class="advert">
          <a href="https://act.gdtvdv.com/DrawPrize/index.html" class="advert_box" @click="Statistics('advert|draw')"><img src="../../assets/doubleel_img/advert_draw.png" alt=""></a>
          <a href="https://hby.gdtvdv.com/Web/181220redpacakge/default.aspx" class="advert_box" @click="Statistics('advert|profit')"><img src="../../assets/doubleel_img/advert_coupon.png" alt=""></a>
        </div>
        <!-- 秒杀 -->
        <secKill :productData='activityData.skillData'></secKill>
        <!-- 团购 -->
        <product-three :productData='activityData.tuangouData'></product-three>
        <product-two :productData='activityData.descendingData'></product-two>
        <product-two :productData='activityData.fullDelivery'></product-two>
        <!-- 礼包 -->
        <hot-sell :productData='activityData.GiftData'></hot-sell>
        <xv-recmmend :information1='activityData.information1' :information2='activityData.information2'></xv-recmmend>
        <hibuy-video :homeVideo='activityData.homeVideo'></hibuy-video>
        <a href="https://dvcms.weixinmvp.com/Mass/20190107NewyearStreet/index.html" class="flowerstreet" @click="Statistics('advert|flower')"><img src="../../assets/doubleel_img/flowerStreet.png" alt=""></a>
      </div>
    </div>
    <div v-else class='loading'>
      <img src="../../assets/images/370310983500145999.gif" alt="">
    </div>
  </div>
</template>

<script>
import banner from "./banner";
import classifyNav from "./ClassifiedNavigation";
import secKill from "./secKill";
import productThree from "./product3";
import productTwo from "./product2";
import HotSell from "./HotSell";
import xvRecmmend from "./xvRecmmend";
import hibuyVideo from "./hibuyVideo";
export default {
  components: {
    banner,
    classifyNav,
    secKill,
    productThree,
    productTwo,
    HotSell,
    xvRecmmend,
    hibuyVideo
  },
  data() {
    return {};
  },
  computed: {
    activityData() {
      // console.log(this.$store.state.zqhd);
      return this.$store.state.zqhd;
    }
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    }
  },
  watch: {
    $route(){
      if(this.$store.state.zqhd.banner.length==0&&this.$route.meta.index == 8){
        this.$store.dispatch("getZQHD");
      }
    }
  },
  created() {
    if (this.$route.meta.index == 8) {
      this.$store.dispatch("getZQHD");
    }
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.activity {
  background: url("../../assets/doubleel_img/conten_bg.jpg");
  background-size: 100%;
  overflow-y: hidden;
  .conter {
    // transform: translateY(-31 / @rem);
    padding-top: 20 / @rem;
    background: url("../../assets/doubleel_img/left.png") no-repeat left 113 /
        @rem,
      url("../../assets/doubleel_img/left.png") no-repeat left 6939 / @rem,
      url("../../assets/doubleel_img/right.png") no-repeat right 0 / @rem,
      url("../../assets/doubleel_img/right.png") no-repeat right 8647 / @rem;
    background-size: 72 / @rem auto;
    .hot_rec {
      padding: 20 / @rem;
      padding-bottom: 10/@rem;
      .hot_res_box {
        width: 49%;
        display: inline-block;
        box-sizing: border-box;
        margin-bottom: 10/@rem;
      }
      .hot_res_box:nth-of-type(2n-1) {
        margin-right: 10 / @rem;
      }
    }
    .advert {
      .advert_box {
        display: block;
        padding: 10 / @rem 20 / @rem;
      }
    }
    .flowerstreet {
      display: block;
      transform: translateY(60 / @rem);
    }
  }
}
</style>
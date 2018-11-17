<template>
    <div>
        <!-- <top></top> -->
        <div v-if='mzghFlag >= 4 '>
        <banner-component :bannerMess = 'MzghData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'MzghData.categoryArrBefore'></category>
       <!-- <hot-sale :HotSaleProduct = 'MzghData.HotSaleProduct' :cateoryeName='MZGH'></hot-sale> -->
        
       <catetory-levelone :RecommendProduct = 'MzghData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'MzghData.categoryAreaArr'></categoryarea>
          <newproduct :NewProduct = 'MzghData.NewProduct' :cateoryeName='MZGH'></newproduct>
        <!-- <category-hot-recommend :RecommendProduct = 'MzghData.hotRecommendLevel' :RecommendVerticl = 'MzghData.hotRecommendVertical'></category-hot-recommend> -->
        <artical-component :HomeAritcal = 'MzghData.mzghAritcal' ></artical-component>
                        <recommend :RecommendProduct = 'MzghData.hotRecommendVertical'></recommend>
        </div>
         <div v-else class='loading'>
            <img src="../assets/images/370310983500145999.gif" alt="">
        </div>
    </div>
</template>

<script>
import bannerComponent from "@/components/banner";

import category from "@/components/category";
import categoryarea from "@/components/categoryarea";

import categoryHotRecommend from "@/components/categoryHotRecommend";
import recommend from "@/components/Recommend";
import catetoryLevelone from "@/components/catetoryLevelone.vue";
import articalComponent from "@/components/articalComponent.vue";
import newproduct from "@/components/Newproduct";

import axios from "axios";
export default {
  name: "zbls",
  components: {
    bannerComponent,
    category,
    categoryarea,
    categoryHotRecommend,
    recommend,
    catetoryLevelone,
    articalComponent,
    newproduct,
  },
  data() {
    return {
      swiperSlides: [],
      categoryArr: [],
      categoryAreaArr: [],
      MZGH:"MZGH"
    };
  },
  computed: {
    MzghData() {
      return this.$store.state.mzgh;
    },
    mzghFlag() {
      return this.$store.state.mzgh.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 5 ==
        0
        // this.$route.meta.index - 5 == 1 ||
        // this.$route.meta.index - 5 == -1
      ) {
        if (this.$store.state.mzgh.swiperSlides.length == 0) {
          this.$store.dispatch("getMzgh");
        }
      }
    }
  },
  created() {
    if (
      this.$route.meta.index - 5 ==
      0
      // this.$route.meta.index - 5 == 1 ||
      // this.$route.meta.index - 5 == -1
    ) {
      if (this.$store.state.mzgh.swiperSlides.length == 0) {
        this.$store.dispatch("getMzgh");
      }
    }
  }
};
</script>



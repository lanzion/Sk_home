<template>
        <div v-if='QCBKFlag >= 4'>
        <banner-component :bannerMess = 'QcbkData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'QcbkData.categoryArrBefore'></category>
        <!-- <hot-sale :HotSaleProduct = 'MsData.HotSaleProduct' :cateoryeName='MS'></hot-sale> -->
        <catetory-levelone :RecommendProduct = 'QcbkData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'QcbkData.categoryAreaArr' ></categoryarea>
          <newproduct :NewProduct = 'QcbkData.NewProduct' :cateoryeName='QCBK'></newproduct>
          <artical-component :HomeAritcal = 'QcbkData.qcbkAritcal' ></artical-component>
        <recommend :RecommendProduct = 'QcbkData.hotRecommendVertical'></recommend>
        <!-- <category-hot-recommend :RecommendProduct = 'MsData.hotRecommendLevel' :RecommendVerticl = 'MsData.hotRecommendVertical'></category-hot-recommend> -->
        </div>
        <div v-else class='loading'>
            <img src="../assets/images/370310983500145999.gif" alt="">
        </div>
</template>

<script>
import bannerComponent from "@/components/banner";
import articalComponent from "@/components/articalComponent.vue";
import category from "@/components/category";
import categoryarea from "@/components/categoryarea";

import categoryHotRecommend from "@/components/categoryHotRecommend";
import recommend from "@/components/Recommend";
import catetoryLevelone from "@/components/catetoryLevelone.vue";
import newproduct from "@/components/Newproduct";

import axios from "axios";
export default {
  name: "zbls",
  components: {
    bannerComponent,
    category,
    categoryarea,
    categoryHotRecommend,
    catetoryLevelone,
    recommend,
    articalComponent,
    newproduct,
  },
  data() {
    return {
     swiperSlides: [],
      categoryArr: [],
      categoryAreaArr: [],
      QCBK:"QCBK",
    };
  },
  computed: {
    QcbkData() {
      return this.$store.state.qcbk;
    },
    QCBKFlag() {
      return this.$store.state.qcbk.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 6 ==
        0
        // this.$route.meta.index - 5 == 1 ||
        // this.$route.meta.index - 5 == -1
      ) {
        if (this.$store.state.qcbk.swiperSlides.length == 0) {
          this.$store.dispatch("getQcbk");
          
        }
      }
    }
  },
  created() {
    if (
      this.$route.meta.index - 6 ==
      0
      // this.$route.meta.index - 5 == 1 ||
      // this.$route.meta.index - 5 == -1
    ) {
      if (this.$store.state.qcbk.swiperSlides.length == 0) {
        this.$store.dispatch("getQcbk");
      }
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
</style>


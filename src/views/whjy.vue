<template>
        <div v-if='Flag >= 4'>
        <banner-component :bannerMess = 'Data.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'Data.categoryArrBefore'></category>
        <catetory-levelone :RecommendProduct = 'Data.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'Data.categoryAreaArr' ></categoryarea>
          <newproduct :NewProduct = 'Data.NewProduct' :cateoryeName='WHJY'></newproduct>
          <artical-component :HomeAritcal = 'Data.whjyAritcal' ></artical-component>
        <recommend :RecommendProduct = 'Data.hotRecommendVertical'></recommend>
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
      WHJY:"WHJY",
    };
  },
  computed: {
    Data() {
      return this.$store.state.whjy;
    },
    Flag() {
      return this.$store.state.whjy.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 7 ==
        0

      ) {
        if (this.$store.state.whjy.swiperSlides.length == 0) {
          this.$store.dispatch("getWhjy");
          
        }
      }
    }
  },
  created() {
    if (
      this.$route.meta.index - 7 ==
      0
    ) {
      if (this.$store.state.whjy.swiperSlides.length == 0) {
        this.$store.dispatch("getWhjy");
      }
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
</style>


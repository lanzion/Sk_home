<template>
    <div>
        <!-- <top></top> -->
        <div v-if='JjjzFlag >= 4'>
        <banner-component :bannerMess = 'JjjzData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'JjjzData.categoryArrBefore'></category>
         <!-- <hot-sale :HotSaleProduct = 'JjjzData.HotSaleProduct' :cateoryeName='JJJZ'></hot-sale> -->
        <catetory-levelone :RecommendProduct = 'JjjzData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'JjjzData.categoryAreaArr'></categoryarea>
         <newproduct :NewProduct = 'JjjzData.NewProduct' :cateoryeName='JJJZ'></newproduct>
        <!-- <category-hot-recommend :RecommendProduct = 'JjjzData.hotRecommendLevel' :RecommendVerticl = 'JjjzData.hotRecommendVertical'></category-hot-recommend> -->


        <artical-component :HomeAritcal = 'JjjzData.jjjzAritcal' ></artical-component>
        <recommend :RecommendProduct = 'JjjzData.hotRecommendVertical'></recommend>
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

// import categoryHotRecommend from "@/components/categoryHotRecommend";
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
    // categoryHotRecommend,
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
      JJJZ:"JJJZ",
    };
  },
  computed: {
    JjjzData() {
      return this.$store.state.jjjz;
    },
    JjjzFlag() {
      return this.$store.state.jjjz.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 2 ==
        0
        // this.$route.meta.index - 2 == 1 ||
        // this.$route.meta.index - 2 == -1
      ) {
        if (this.$store.state.jjjz.swiperSlides.length == 0) {
          this.$store.dispatch("getJjjz");
        }
      }
    }
  },
  created() {
    if (
      this.$route.meta.index - 2 ==
      0
      // this.$route.meta.index - 2 == 0 ||
      // this.$route.meta.index - 2 == 1 ||
      // this.$route.meta.index - 2 == -1
    ) {
      if (this.$store.state.jjjz.swiperSlides.length == 0) {
        this.$store.dispatch("getJjjz");
      }
    }
  }
};
</script>




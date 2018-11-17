<template>
    <div>
        <div v-if='MSFlag >= 3'>
        <banner-component :bannerMess = 'MsData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'MsData.categoryArrBefore'></category>
        <!-- <hot-sale :HotSaleProduct = 'MsData.HotSaleProduct' :cateoryeName='MS'></hot-sale> -->
        <catetory-levelone :RecommendProduct = 'MsData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'MsData.categoryAreaArr' ></categoryarea>
          <newproduct :NewProduct = 'MsData.NewProduct' :cateoryeName='MS'></newproduct>
          <artical-component :HomeAritcal = 'MsData.MsAritcal' ></artical-component>
        <recommend :RecommendProduct = 'MsData.hotRecommendVertical'></recommend>
        <!-- <category-hot-recommend :RecommendProduct = 'MsData.hotRecommendLevel' :RecommendVerticl = 'MsData.hotRecommendVertical'></category-hot-recommend> -->
        </div>
        <div v-else class='loading'>
            <img src="../assets/images/370310983500145999.gif" alt="">
        </div>
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
      MS:"MS",
    };
  },
  computed: {
    MsData() {
      return this.$store.state.ms;
    },
    MSFlag() {
      return this.$store.state.ms.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 1 ==
        0
        // this.$route.meta.index - 1 == 1 ||
        // this.$route.meta.index - 1 == -1
      ) {
        if (this.$store.state.ms.swiperSlides.length == 0) {
          this.$store.dispatch("getMs");
        }
      }
    }
  },
  created() {
    if (
      // this.$route.meta.index - 1 == 0 ||
      // this.$route.meta.index - 1 == 1 ||
      // this.$route.meta.index - 1 == -1

      this.$route.meta.index - 1 ==
      0
    ) {
      if (this.$store.state.ms.swiperSlides.length == 0) {
        this.$store.dispatch("getMs");
      }
    }
  }
};
</script>

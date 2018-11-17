<template>
    <div>
        <!-- <top></top> -->
        <div v-if='jydqFlag >= 4 '>
        <banner-component :bannerMess = 'JydqData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'JydqData.categoryArrBefore'></category>
        <!-- <hot-sale :HotSaleProduct = 'JydqData.HotSaleProduct' :cateoryeName='JYDQ'></hot-sale> -->
        <catetory-levelone :RecommendProduct = 'JydqData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'JydqData.categoryAreaArr'></categoryarea>
        <newproduct :NewProduct = 'JydqData.NewProduct' :cateoryeName='JYDQ'></newproduct>
        <!-- <category-hot-recommend :RecommendProduct = 'JydqData.hotRecommendLevel' :RecommendVerticl = 'JydqData.hotRecommendVertical'></category-hot-recommend> -->
          <artical-component :HomeAritcal = 'JydqData.jydqAritcal' ></artical-component>
        <recommend :RecommendProduct = 'JydqData.hotRecommendVertical'></recommend>
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
      JYDQ: "JYDQ"
    };
  },
  computed: {
    JydqData() {
      return this.$store.state.jydq;
    },
    jydqFlag() {
      return this.$store.state.jydq.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        // this.$route.meta.index - 3 == 0 ||
        // this.$route.meta.index - 3 == 1 ||
        // this.$route.meta.index - 3 == -1
        this.$route.meta.index - 3 ==
        0
      ) {
        if (this.$store.state.jydq.swiperSlides.length == 0) {
          this.$store.dispatch("getJydq");
        }
      }
    }
  },
  created() {
    if (
      // this.$route.meta.index - 3 == 0 ||
      // this.$route.meta.index - 3 == 1 ||
      // this.$route.meta.index - 3 == -1
      this.$route.meta.index - 3 ==
      0
    ) {
      if (this.$store.state.jydq.swiperSlides.length == 0) {
        this.$store.dispatch("getJydq");
      }
    }
  }
};
</script>



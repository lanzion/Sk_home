<template>
    <div>
        <!-- <top></top> -->
        <div v-if='myypFlag >= 4 '>
        <banner-component :bannerMess = 'MyypData.swiperSlides'></banner-component>
        <category :categoryArrBefore = 'MyypData.categoryArrBefore'></category>
         <!-- <hot-sale :HotSaleProduct = 'MyypData.HotSaleProduct' :cateoryeName='MYYP'></hot-sale> -->
        <catetory-levelone :RecommendProduct = 'MyypData.hotRecommendLevel'></catetory-levelone>
        <categoryarea :categoryAreaArr = 'MyypData.categoryAreaArr'></categoryarea>
          <newproduct :NewProduct = 'MyypData.NewProduct' :cateoryeName='MYYP'></newproduct>
        <!-- <category-hot-recommend :RecommendProduct = 'MyypData.hotRecommendLevel' :RecommendVerticl = 'MyypData.hotRecommendVertical'></category-hot-recommend> -->
           <artical-component :HomeAritcal = 'MyypData.myypAritcal' ></artical-component>
                <recommend :RecommendProduct = 'MyypData.hotRecommendVertical'></recommend>
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
      MYYP:'MYYP'
    };
  },
  computed: {
    MyypData() {
      return this.$store.state.myyp;
    },
    myypFlag() {
      return this.$store.state.myyp.loadingFlag;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 4 ==
        0
        // this.$route.meta.index - 4 == 1 ||
        // this.$route.meta.index - 4 == -1
      ) {
        if (this.$store.state.myyp.swiperSlides.length == 0) {
          this.$store.dispatch("getMyyp");
        }
      }
    }
  },
  created() {
    if (
      this.$route.meta.index - 4 ==
      0
      // this.$route.meta.index - 4 == 1 ||
      // this.$route.meta.index - 4 == -1
    ) {
      if (this.$store.state.myyp.swiperSlides.length == 0) {
        this.$store.dispatch("getMyyp");
      }
    }
  }
};
</script>
>



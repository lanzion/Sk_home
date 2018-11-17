<template>
    <div>
        <banner-component :bannerMess = 'ZblsData.swiperSlides'></banner-component>
        <category :categoryArr = 'ZblsData.categoryArr'></category>
        <categoryarea :categoryAreaArr = 'ZblsData.categoryAreaArr'></categoryarea>
    </div>
</template>

<script>
import bannerComponent from "@/components/banner";

import category from "@/components/category";

import categoryarea from "@/components/categoryarea";

import axios from "axios";
export default {
  name: "zbls",
  components: {
    bannerComponent,
    category,
    categoryarea
  },
  data() {
    return {
      swiperSlides: [],
      categoryArr: [],
      categoryAreaArr: []
    };
  },
  computed: {
    ZblsData() {
      return this.$store.state.HomeComponent.zbls;
    }
  },
  created() {
    if (this.$store.state.HomeComponent.zbls.swiperSlides.length == 0) {
      this.$store.dispatch("getZbls");
    }
  }
};
</script>

<style>

</style>



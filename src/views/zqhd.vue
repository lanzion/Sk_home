<template>
  <div class="zqhd">
    <zq-top :lijian='HomeData.lijian' :Recommend='HomeData.Recommend'></zq-top>
    <zq-advert></zq-advert>
    <man-jian :manJian='HomeData.manjian'></man-jian>
    <squared-swp :manSong='HomeData.mansong'></squared-swp>
  </div>
</template>

<script> 
import zqTop from "../components/active/top";
import zqAdvert from "../components/active/advert";
import squaredSwp from "../components/active/squaredSwp";
import manJian from "../components/active/manjian";
import axios from "axios";
export default {
  name: "zqhd",
  components: {
    zqTop,
    zqAdvert,
    squaredSwp,
    manJian
  },
  data() {
    return {
      // swiperSlides
    };
  },
  computed: {
    HomeData() {
      // console.log(this.$store.state.zqhd.Recommend);
      return this.$store.state.zqhd;
    }
  },
  watch: {
    $route() {
      if (
        this.$route.meta.index - 8 ==
        0
        // this.$route.meta.index - 2 == 1 ||
        // this.$route.meta.index - 2 == -1
      ) {
        if (this.$store.state.zqhd.swiperSlides.length == 0) {
          this.$store.dispatch("getZQHD");
        }
      }
    },
  },
  created () {
    if (
      this.$route.meta.index - 8 ==
      0
      // this.$route.meta.index - 2 == 0 ||
      // this.$route.meta.index - 2 == 1 ||
      // this.$route.meta.index - 2 == -1
    ) {
      if (this.$store.state.zqhd.swiperSlides.length == 0) {
        this.$store.dispatch("getZQHD");
      }
    }
  }
};
</script>

<style scoped>
.zqhd{
  padding-bottom: 100px;
  background: #fff;
}
</style>
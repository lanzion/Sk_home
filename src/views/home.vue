<template>
    <div>
        <div v-if='HomeFlage >= 7'>
        <banner-component :bannerMess = 'HomeData.swiperSlides'></banner-component>
        <advertising-space :adver='HomeData.adversitingone'></advertising-space>
        <hot-sale :HotSaleProduct = 'HomeData.HotSaleProduct' :cateoryeName='HOME'></hot-sale>
        <advertising-space :adver='HomeData.adversitingtwo'></advertising-space>
        <original-compilation :originalCompilation='HomeData.originalCompilation'></original-compilation>
        <special-area :specialAreaContent='HomeData.specialAreaContent'></special-area>
        <advercomponent :data='HomeData.adversitingthree'></advercomponent>
        <!-- <product-component :Product = 'HomeData.Product'></product-component> -->
        <newproduct :NewProduct = 'HomeData.NewProduct' :cateoryeName='HOME'></newproduct>
        <spectial :specialArr='HomeData.specialArr'></spectial>
        <artical-component :HomeAritcal = 'HomeData.HomeAritcal' ></artical-component>
        <recommend :RecommendProduct = 'HomeData.RecommendProduct'></recommend>
        </div>
        <div v-else class='loading'>
            <img src="../assets/images/370310983500145999.gif" alt="">
        </div>
    </div>
</template>
<script>
import bannerComponent from "@/components/banner";
import hotSale from "@/components/HotSale";
import specialArea from "@/components/SpecialArea";
import newproduct from "@/components/Newproduct";
import spectial from "@/components/spectial";
import recommend from "@/components/Recommend";
import advertisingSpace from "@/components/advertisingSpace";
import productComponent from "@/components/product";
import advercomponent from "@/components/advercomponent.vue";
import articalComponent from "@/components/articalComponent.vue";
import originalCompilation from "@/components/originalCompilation.vue";
 
import axios from "axios";
export default {
  name: "App",
  components: {
    bannerComponent,
    hotSale,
    specialArea,
    newproduct,
    spectial,
    recommend,
    advertisingSpace,
    productComponent,
    articalComponent,
    advercomponent,
    originalCompilation,
    top
  },
  data() {
    return {
      info: null,
      HOME: "HOME"
    };
  },
  computed: {
    HomeData() {
      return this.$store.state.home;
    },
    HomeFlage() {
      return this.$store.state.home.loadingFlag;
    }
  },
    watch: {
    $route() {
      if (
        this.$store.state.home.swiperSlides.length == 0 &&  this.$route.meta.index == 0
      ) {
        this.$store.dispatch("getHome");
      }
    }
  },
  created() {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    var cookieArr = [];
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      cookieArr.push(arr[0]);
    }
    if (cookieArr.indexOf("isLogin") != -1) {
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == "isLogin") {
          this.$store.state.userId = arr[1];
        } else {
        }
      }
    }
    var This = this;
    var i = 100;
    var userTimer = setInterval(function() {
      i += 100;

      if (This.$store.state.userId) {
        function getParam(paramName) {
          var paramValue = "";
          if (window.location.href.indexOf("?") != -1) {
            var paramArr = window.location.href.split("?")[1];
            if (paramArr.indexOf("&") != -1) {
              var Parr = paramArr.split("&");
              for (var i = 0; i < Parr.length; i++) {
                var result = Parr[i].split("=");
                if (result[0] == paramName) {
                  paramValue = result[1];
                  return paramValue;
                }
              }
            }
          }
        }
        var vscf = getParam("vscf");
        if (!vscf) {
          vscf = "";
        }
        ZlanIO.Event.EventClick("pageview", "page", "home|" + vscf);
        // ZlanIO.Event.SetUser(This.$store.state.userId);
        clearInterval(userTimer);
      }
      setTimeout(function() {
        clearInterval(userTimer);
      }, 100000);
    }, 100);
    if (this.$store.state.home.swiperSlides.length == 0 &&  this.$route.meta.index == 0) {
      this.$store.dispatch("getHome");
    }
    if (this.$store.state.home.BUOY.length == 0) {
      this.$store.dispatch("BUOY");
    }
  }
};
</script>

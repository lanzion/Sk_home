<template>
  <div class='catetoryHome'>
    <div class='Ttitle' v-html='cateTitle' ></div>
    <catetory-nav :categorys='catetoryAfter' :data='data' :bannerLlis='bannerLlis' class='cateSwiper'></catetory-nav>
    <catetorycontent :categroyList = 'categroyList' :categorys='catetoryAfter' class='catetorycontent'  :bannerLlis='bannerLlis' :categoryArr='categoryArr'></catetorycontent>
  </div>
</template>
<script>
import catetoryNav from "@/components/catetory-nav";
import categorytemplate from "@/components/categorytemplate.vue";

import catetorycontent from "@/components/catetorycontent";

export default {
  components: {
    // catetoryNavigation,
    catetoryNav,
    catetorycontent,
    categorytemplate
  },
  data() {
    return {
      data: "",
      titile: "",
      catetoryBodySwiperOption: {
        initialSlide: 2
      }
    };
  },
  created() {

    var flag = this.$route.params.id.split("_")[0].toLowerCase();
    var This = this;
    var cName = this.$route.params.id;
    this.data = this.$route.params.id;
    var id = this.$route.query.id
    var This = this;
      var flag = this.$route.params.id.split("_")[0].toLowerCase();

    if (this.$store.state[flag].catetoryAfter.length > 0) {
      if (this.$store.state[flag].categroyList.length == 0) {
        this.$store.dispatch("getcatetoryData", {
          catetoraName: flag,
          Id:id
        });
      }else{
          var listIndex = this.bannerLlis.indexOf(this.$route.query.id)
        if(this.categroyList[listIndex].length == 0){
              this.$store.dispatch("getCatetoryOneDate", {
                Id: this.$route.query.id,
                catetory: flag
              });          
        }
        if(this.categroyList[listIndex +1] && this.categroyList[listIndex +1].length == 0){
              this.$store.dispatch("getCatetoryOneDate", {
                Id: this.bannerLlis[listIndex +1],
                catetory: flag
              });          
        }
        if(this.categroyList[listIndex -1] &&this.categroyList[listIndex - 1].length == 0){
              this.$store.dispatch("getCatetoryOneDate", {
                Id: this.bannerLlis[listIndex - 1],
                catetory: flag
              });          
        }
      }
      this.$store.dispatch("LoadAdvertPoistion", {
        PositionCode: cName,
        catetory: flag
      });
    } else {
      this.$store.dispatch("getcatetory", {
        catetoraName: cName,
        catetory: flag,
         Id:id
      });
      this.$store.dispatch("LoadAdvertPoistion", {
        PositionCode: cName,
        catetory: flag
      });
    }
  },
  computed: {
    cateTitle() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].cateTitle;
    },
    categoryArr() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].categoryArr;
    },
    bannerLlis() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].categroysKind;
    },
    categorys() {
      
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].categorys;
    },
    categroyList() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].categroyList;
    },
    catetoryAfter() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].catetoryAfter;
    }
  },
  methods: {
    pushBack() {
      // router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: this.$route.params.id.split("_")[0] });
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
.catetoryHome {
  .catetorycontent {
    margin-top: 144/@rem;
  }
  .cateSwiper {
    position: fixed;
    width: 16rem;
    top: 84/@rem;
    background: white;
    z-index: 1000;
    left: 0;
  }
  background: white;
  .Ttitle {
    font-size: 40/@rem;
    margin: 0;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 84/@rem;
    color: #5d5d5d;
    font-weight: 500;
    line-height: 84/@rem;
    text-align: center;
  }
  .toHome {
    width: 70/@rem;
    height: 70/@rem;
    position: fixed;
    bottom: 280/@rem;
    right: 80/@rem;

    z-index: 100000;
    font-size: 16px;
    right: 60/@rem;
    background: #000;
    opacity: 0.5;
    text-align: center;
    border-radius: 2px;
    img {
      width: 50/@rem;
      height: 50/@rem;
      margin-top: 10/@rem;
      vertical-align: middle;
    }
  }
}
</style>

